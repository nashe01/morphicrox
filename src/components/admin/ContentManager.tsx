
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Edit, X, Save } from 'lucide-react';

interface SiteContent {
  id: string;
  key: string;
  type: string;
  value: string;
  page: string;
  title: string;
  description: string;
}

interface ContentManagerProps {
  content: SiteContent[];
  onUpdateContent: (id: string, updates: any) => void;
  onContentChange: (id: string, value: string) => void;
}

const ContentManager: React.FC<ContentManagerProps> = ({ 
  content, 
  onUpdateContent, 
  onContentChange 
}) => {
  const [editingItem, setEditingItem] = useState<string | null>(null);

  // Group content by page for better organization
  const contentByPage = content.reduce((acc, item) => {
    if (!acc[item.page]) acc[item.page] = [];
    acc[item.page].push(item);
    return acc;
  }, {} as Record<string, SiteContent[]>);

  return (
    <div className="space-y-8">
      {Object.entries(contentByPage).map(([page, items]) => (
        <Card key={page}>
          <CardHeader>
            <CardTitle className="capitalize">{page} Page Content</CardTitle>
            <CardDescription>Manage content for the {page} page</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4">
              {items.map((item) => (
                <Card key={item.id} className="border-l-4 border-l-brand">
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between">
                      <div>
                        <CardTitle className="text-lg">{item.title}</CardTitle>
                        <CardDescription>{item.description}</CardDescription>
                      </div>
                      <div className="flex gap-2">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => setEditingItem(editingItem === item.id ? null : item.id)}
                        >
                          {editingItem === item.id ? <X className="w-4 h-4" /> : <Edit className="w-4 h-4" />}
                        </Button>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    {editingItem === item.id ? (
                      <div className="space-y-4">
                        <div>
                          <Label>Content</Label>
                          <Textarea
                            value={item.value}
                            onChange={(e) => onContentChange(item.id, e.target.value)}
                            rows={4}
                            className="mt-1"
                          />
                        </div>
                        <Button
                          onClick={() => {
                            onUpdateContent(item.id, { value: item.value });
                            setEditingItem(null);
                          }}
                        >
                          <Save className="w-4 h-4 mr-2" />
                          Save Changes
                        </Button>
                      </div>
                    ) : (
                      <div className="text-gray-700 bg-gray-50 p-3 rounded">
                        {item.value}
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default ContentManager;
