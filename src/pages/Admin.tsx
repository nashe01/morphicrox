import React, { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import AdminHeader from '@/components/admin/AdminHeader';
import ContentManager from '@/components/admin/ContentManager';
import ProjectsManager from '@/components/admin/ProjectsManager';
import PageManager from '@/components/admin/PageManager';
import MediaManager from '@/components/admin/MediaManager';
import VideoManager from '@/components/admin/VideoManager';
import { useAdminAuth } from '@/hooks/useAdminAuth';

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

const Admin = () => {
  const { isAuthorized, authCheckComplete, loading: authLoading } = useAdminAuth();
  const [content, setContent] = useState<SiteContent[]>([]);
  const [projects, setProjects] = useState<GalleryProject[]>([]);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState('');
  const [activeTab, setActiveTab] = useState('home');

  useEffect(() => {
    if (isAuthorized && authCheckComplete) {
      console.log('Admin authorized, fetching data');
      fetchData();
    }
  }, [isAuthorized, authCheckComplete]);

  const fetchData = async () => {
    try {
      console.log('Fetching admin data...');
      const [contentData, projectsData] = await Promise.all([
        supabase.from('site_content').select('*').order('page'),
        supabase.from('gallery_projects').select('*').order('order_index')
      ]);

      console.log('Content data:', contentData);
      console.log('Projects data:', projectsData);

      if (contentData.data) setContent(contentData.data);
      if (projectsData.data) setProjects(projectsData.data);
    } catch (error) {
      console.error('Error fetching data:', error);
      setMessage('Failed to load admin data');
    } finally {
      setLoading(false);
    }
  };

  const createAdminUser = async () => {
    try {
      const { data, error } = await supabase.auth.signUp({
        email: 'mupindu021@gmail.com',
        password: 'P@n@she01',
        options: {
          data: {
            full_name: 'Admin User'
          }
        }
      });

      if (error) throw error;

      if (data.user) {
        const { error: roleError } = await supabase
          .from('user_profiles')
          .update({ role: 'admin' })
          .eq('id', data.user.id);

        if (roleError) throw roleError;
        setMessage('Admin user created successfully! Please check email for verification.');
      }
    } catch (error: any) {
      console.error('Error creating admin user:', error);
      setMessage(`Error creating admin user: ${error.message}`);
    }
    setTimeout(() => setMessage(''), 5000);
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
      setMessage('Failed to update content');
      setTimeout(() => setMessage(''), 3000);
    }
  };

  const handleContentChange = (id: string, value: string) => {
    setContent(prev => prev.map(item => 
      item.id === id ? { ...item, value } : item
    ));
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
      setMessage('Failed to update project');
      setTimeout(() => setMessage(''), 3000);
    }
  };

  const handleProjectChange = (id: string, field: string, value: any) => {
    setProjects(prev => prev.map(item => 
      item.id === id ? { ...item, [field]: value } : item
    ));
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
      setMessage('Failed to add project');
      setTimeout(() => setMessage(''), 3000);
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
      setMessage('Failed to delete project');
      setTimeout(() => setMessage(''), 3000);
    }
  };

  // Show loading while checking authentication
  if (authLoading || !authCheckComplete) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-brand mx-auto mb-4"></div>
          <div className="text-lg">Checking authorization...</div>
        </div>
      </div>
    );
  }

  // Show loading while fetching data
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-brand mx-auto mb-4"></div>
          <div className="text-lg">Loading admin panel...</div>
        </div>
      </div>
    );
  }

  // Only render admin panel if user is authorized
  if (!isAuthorized) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Access Denied</h1>
          <p className="text-gray-600">You don't have permission to access the admin panel.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        <AdminHeader onCreateAdminUser={createAdminUser} />

        {message && (
          <Alert className="mb-6">
            <AlertDescription>{message}</AlertDescription>
          </Alert>
        )}

        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-6">
            <TabsTrigger value="home">Home</TabsTrigger>
            <TabsTrigger value="about">About</TabsTrigger>
            <TabsTrigger value="gallery">Gallery</TabsTrigger>
            <TabsTrigger value="products">Products</TabsTrigger>
            <TabsTrigger value="contact">Contact</TabsTrigger>
            <TabsTrigger value="media">Media</TabsTrigger>
          </TabsList>

          <TabsContent value="home">
            <PageManager pageName="home" pageTitle="Home Page" />
          </TabsContent>

          <TabsContent value="about">
            <PageManager pageName="about" pageTitle="About Page" />
          </TabsContent>

          <TabsContent value="gallery">
            <div className="space-y-6">
              <PageManager pageName="gallery" pageTitle="Gallery Page" />
              <VideoManager />
            </div>
          </TabsContent>

          <TabsContent value="products">
            <PageManager pageName="products" pageTitle="Products Page" />
          </TabsContent>

          <TabsContent value="contact">
            <PageManager pageName="contact" pageTitle="Contact Page" />
          </TabsContent>

          <TabsContent value="media">
            <MediaManager />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Admin;
