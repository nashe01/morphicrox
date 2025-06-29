import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';

interface PageContent {
  id: string;
  key: string;
  type: string;
  value: string;
  page: string;
  section: string;
  title: string;
  description: string;
}

interface PageManagerProps {
  pageName: string;
  pageTitle: string;
}

export default function PageManager({ pageName, pageTitle }: PageManagerProps) {
  const [content, setContent] = useState<PageContent[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [editingKey, setEditingKey] = useState<string | null>(null);
  const [editValue, setEditValue] = useState('');
  const { toast } = useToast();

  // Group content by section
  const contentBySection = content.reduce((acc, item) => {
    if (!acc[item.section]) {
      acc[item.section] = [];
    }
    acc[item.section].push(item);
    return acc;
  }, {} as Record<string, PageContent[]>);

  useEffect(() => {
    loadPageContent();
  }, [pageName]);

  const loadPageContent = async () => {
    try {
      setLoading(true);
      
      // Load content from site_content table
      const { data: contentData, error: contentError } = await supabase
        .from('site_content')
        .select('*')
        .eq('page', pageName)
        .order('section');

      if (contentError) throw contentError;
      setContent(contentData || []);

    } catch (error) {
      console.error('Error loading page content:', error);
      toast({
        title: 'Error',
        description: 'Failed to load page content',
        variant: 'destructive',
      });
    } finally {
      setLoading(false);
    }
  };

  const saveContent = async (id: string, value: string) => {
    try {
      setSaving(true);
      
      const { error } = await supabase
        .from('site_content')
        .update({ value })
        .eq('id', id);

      if (error) throw error;

      // Update local state
      setContent(prev => prev.map(item => 
        item.id === id ? { ...item, value } : item
      ));

      setEditingKey(null);
      toast({
        title: 'Success',
        description: 'Content updated successfully',
      });

    } catch (error) {
      console.error('Error saving content:', error);
      toast({
        title: 'Error',
        description: 'Failed to save content',
        variant: 'destructive',
      });
    } finally {
      setSaving(false);
    }
  };

  const startEditing = (id: string, value: string) => {
    setEditingKey(id);
    setEditValue(value);
  };

  const cancelEditing = () => {
    setEditingKey(null);
    setEditValue('');
  };

  const handleSave = () => {
    if (editingKey) {
      saveContent(editingKey, editValue);
    }
  };

  const addNewContent = async (section: string) => {
    const key = prompt('Enter content key:');
    if (!key) return;

    const title = prompt('Enter content title:');
    if (!title) return;

    const description = prompt('Enter content description:');
    const value = prompt('Enter content value:');

    try {
      const { error } = await supabase
        .from('site_content')
        .insert({
          key,
          page: pageName,
          section,
          type: 'text',
          title,
          description,
          value: value || ''
        });

      if (error) throw error;

      toast({
        title: 'Success',
        description: 'New content added successfully',
      });

      loadPageContent();

    } catch (error) {
      console.error('Error adding content:', error);
      toast({
        title: 'Error',
        description: 'Failed to add new content',
        variant: 'destructive',
      });
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center p-8">
        <div className="text-lg">Loading {pageTitle} content...</div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">{pageTitle} Management</h2>
        <Badge variant="secondary">{pageName}</Badge>
      </div>

      <Tabs defaultValue="content" className="w-full">
        <TabsList className="grid w-full grid-cols-1">
          <TabsTrigger value="content">Content</TabsTrigger>
        </TabsList>

        <TabsContent value="content" className="space-y-6">
          {Object.entries(contentBySection).map(([section, items]) => (
            <Card key={section}>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span className="capitalize">{section} Section</span>
                  <Button
                    size="sm"
                    onClick={() => addNewContent(section)}
                    variant="outline"
                  >
                    Add Content
                  </Button>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {items.map((item) => (
                  <div key={item.id} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <Label className="font-medium">{item.title}</Label>
                      <Badge variant="outline">{item.type}</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                    
                    {editingKey === item.id ? (
                      <div className="space-y-2">
                        <Textarea
                          value={editValue}
                          onChange={(e) => setEditValue(e.target.value)}
                          rows={3}
                        />
                        <div className="flex gap-2">
                          <Button
                            size="sm"
                            onClick={handleSave}
                            disabled={saving}
                          >
                            {saving ? 'Saving...' : 'Save'}
                          </Button>
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={cancelEditing}
                          >
                            Cancel
                          </Button>
                        </div>
                      </div>
                    ) : (
                      <div className="flex items-center justify-between p-3 bg-muted rounded-md">
                        <span className="text-sm">{item.value}</span>
                        <Button
                          size="sm"
                          variant="ghost"
                          onClick={() => startEditing(item.id, item.value)}
                        >
                          Edit
                        </Button>
                      </div>
                    )}
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </TabsContent>
      </Tabs>
    </div>
  );
} 