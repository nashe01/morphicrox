
import React, { useState, useEffect } from 'react';
import { useAuth } from '@/hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Trash2, Edit, Save, X, Upload, ExternalLink } from 'lucide-react';

interface SiteContent {
  id: string;
  key: string;
  type: string;
  value: string;
  page: string;
  title: string;
  description: string;
}

interface GalleryProject {
  id: string;
  title: string;
  description: string;
  category: string;
  image_url: string;
  featured: boolean;
  order_index: number;
}

interface GalleryVideo {
  id: string;
  title: string;
  description: string;
  video_url: string;
  thumbnail_url: string;
  featured: boolean;
  order_index: number;
}

const Admin = () => {
  const { user, profile, loading: authLoading } = useAuth();
  const navigate = useNavigate();
  const [content, setContent] = useState<SiteContent[]>([]);
  const [projects, setProjects] = useState<GalleryProject[]>([]);
  const [videos, setVideos] = useState<GalleryVideo[]>([]);
  const [loading, setLoading] = useState(true);
  const [editingItem, setEditingItem] = useState<string | null>(null);
  const [message, setMessage] = useState('');

  useEffect(() => {
    if (!authLoading) {
      if (!user) {
        navigate('/auth');
      } else if (!profile?.role || !['admin', 'editor'].includes(profile.role)) {
        navigate('/');
      } else {
        fetchData();
      }
    }
  }, [user, profile, authLoading, navigate]);

  const fetchData = async () => {
    try {
      const [contentData, projectsData, videosData] = await Promise.all([
        supabase.from('site_content').select('*').order('page'),
        supabase.from('gallery_projects').select('*').order('order_index'),
        supabase.from('gallery_videos').select('*').order('order_index')
      ]);

      if (contentData.data) setContent(contentData.data);
      if (projectsData.data) setProjects(projectsData.data);
      if (videosData.data) setVideos(videosData.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };

  const updateContent = async (id: string, updates: any) => {
    try {
      const { error } = await supabase
        .from('site_content')
        .update(updates)
        .eq('id', id);

      if (error) throw error;
      
      setContent(prev => prev.map(item => 
        item.id === id ? { ...item, ...updates } : item
      ));
      setMessage('Content updated successfully!');
      setTimeout(() => setMessage(''), 3000);
    } catch (error) {
      console.error('Error updating content:', error);
    }
  };

  const updateProject = async (id: string, updates: any) => {
    try {
      const { error } = await supabase
        .from('gallery_projects')
        .update(updates)
        .eq('id', id);

      if (error) throw error;
      
      setProjects(prev => prev.map(item => 
        item.id === id ? { ...item, ...updates } : item
      ));
      setMessage('Project updated successfully!');
      setTimeout(() => setMessage(''), 3000);
    } catch (error) {
      console.error('Error updating project:', error);
    }
  };

  const addProject = async () => {
    try {
      const { data, error } = await supabase
        .from('gallery_projects')
        .insert({
          title: 'New Project',
          description: 'Project description',
          category: 'Residential',
          image_url: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80',
          featured: false,
          order_index: projects.length
        })
        .select()
        .single();

      if (error) throw error;
      if (data) setProjects(prev => [...prev, data]);
      setMessage('New project added!');
      setTimeout(() => setMessage(''), 3000);
    } catch (error) {
      console.error('Error adding project:', error);
    }
  };

  const deleteProject = async (id: string) => {
    try {
      const { error } = await supabase
        .from('gallery_projects')
        .delete()
        .eq('id', id);

      if (error) throw error;
      
      setProjects(prev => prev.filter(item => item.id !== id));
      setMessage('Project deleted!');
      setTimeout(() => setMessage(''), 3000);
    } catch (error) {
      console.error('Error deleting project:', error);
    }
  };

  if (authLoading || loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-lg">Loading admin panel...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Admin Panel</h1>
            <p className="text-gray-600">Manage your website content</p>
          </div>
          <div className="flex gap-4">
            <Button variant="outline" onClick={() => navigate('/')}>
              <ExternalLink className="w-4 h-4 mr-2" />
              View Site
            </Button>
            <Button variant="outline" onClick={() => navigate('/gallery')}>
              <ExternalLink className="w-4 h-4 mr-2" />
              View Gallery
            </Button>
          </div>
        </div>

        {message && (
          <Alert className="mb-6">
            <AlertDescription>{message}</AlertDescription>
          </Alert>
        )}

        <Tabs defaultValue="content" className="space-y-6">
          <TabsList>
            <TabsTrigger value="content">Site Content</TabsTrigger>
            <TabsTrigger value="projects">Gallery Projects</TabsTrigger>
            <TabsTrigger value="videos">Gallery Videos</TabsTrigger>
          </TabsList>

          <TabsContent value="content">
            <div className="grid gap-4">
              {content.map((item) => (
                <Card key={item.id}>
                  <CardHeader>
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
                            onChange={(e) => setContent(prev => prev.map(c => 
                              c.id === item.id ? { ...c, value: e.target.value } : c
                            ))}
                            rows={4}
                          />
                        </div>
                        <Button
                          onClick={() => {
                            updateContent(item.id, { value: item.value });
                            setEditingItem(null);
                          }}
                        >
                          <Save className="w-4 h-4 mr-2" />
                          Save Changes
                        </Button>
                      </div>
                    ) : (
                      <div className="text-gray-700">
                        {item.value}
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="projects">
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-semibold">Gallery Projects</h2>
                <Button onClick={addProject}>Add New Project</Button>
              </div>
              
              <div className="grid gap-4">
                {projects.map((project) => (
                  <Card key={project.id}>
                    <CardContent className="pt-6">
                      {editingItem === project.id ? (
                        <div className="space-y-4">
                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <Label>Title</Label>
                              <Input
                                value={project.title}
                                onChange={(e) => setProjects(prev => prev.map(p => 
                                  p.id === project.id ? { ...p, title: e.target.value } : p
                                ))}
                              />
                            </div>
                            <div>
                              <Label>Category</Label>
                              <Input
                                value={project.category}
                                onChange={(e) => setProjects(prev => prev.map(p => 
                                  p.id === project.id ? { ...p, category: e.target.value } : p
                                ))}
                              />
                            </div>
                          </div>
                          <div>
                            <Label>Image URL</Label>
                            <Input
                              value={project.image_url}
                              onChange={(e) => setProjects(prev => prev.map(p => 
                                p.id === project.id ? { ...p, image_url: e.target.value } : p
                              ))}
                            />
                          </div>
                          <div>
                            <Label>Description</Label>
                            <Textarea
                              value={project.description}
                              onChange={(e) => setProjects(prev => prev.map(p => 
                                p.id === project.id ? { ...p, description: e.target.value } : p
                              ))}
                            />
                          </div>
                          <div className="flex items-center space-x-2">
                            <Switch
                              checked={project.featured}
                              onCheckedChange={(checked) => setProjects(prev => prev.map(p => 
                                p.id === project.id ? { ...p, featured: checked } : p
                              ))}
                            />
                            <Label>Featured Project</Label>
                          </div>
                          <div className="flex gap-2">
                            <Button
                              onClick={() => {
                                updateProject(project.id, {
                                  title: project.title,
                                  category: project.category,
                                  image_url: project.image_url,
                                  description: project.description,
                                  featured: project.featured
                                });
                                setEditingItem(null);
                              }}
                            >
                              <Save className="w-4 h-4 mr-2" />
                              Save Changes
                            </Button>
                            <Button
                              variant="outline"
                              onClick={() => setEditingItem(null)}
                            >
                              Cancel
                            </Button>
                          </div>
                        </div>
                      ) : (
                        <div className="flex items-start gap-4">
                          <img
                            src={project.image_url}
                            alt={project.title}
                            className="w-24 h-24 object-cover rounded"
                          />
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                              <h3 className="font-semibold">{project.title}</h3>
                              {project.featured && (
                                <span className="bg-brand text-white px-2 py-1 rounded-full text-xs">
                                  Featured
                                </span>
                              )}
                            </div>
                            <p className="text-sm text-gray-600 mb-2">{project.category}</p>
                            <p className="text-sm text-gray-700">{project.description}</p>
                          </div>
                          <div className="flex gap-2">
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => setEditingItem(project.id)}
                            >
                              <Edit className="w-4 h-4" />
                            </Button>
                            <Button
                              variant="destructive"
                              size="sm"
                              onClick={() => deleteProject(project.id)}
                            >
                              <Trash2 className="w-4 h-4" />
                            </Button>
                          </div>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="videos">
            <div className="text-center py-12">
              <h3 className="text-lg font-semibold mb-2">Video Management</h3>
              <p className="text-gray-600">Video management interface coming soon...</p>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Admin;
