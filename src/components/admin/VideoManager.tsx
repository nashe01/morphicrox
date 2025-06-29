import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';

interface VideoItem {
  id: string;
  title: string;
  description: string | null;
  video_url: string;
  thumbnail_url: string | null;
  featured: boolean;
  order_index: number;
  created_at: string | null;
  updated_at: string | null;
}

const VideoManager: React.FC = () => {
  const [videos, setVideos] = useState<VideoItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [uploading, setUploading] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [editingVideo, setEditingVideo] = useState<string | null>(null);
  const [editForm, setEditForm] = useState({
    title: '',
    description: '',
    video_url: '',
    thumbnail_url: '',
    featured: false,
    order_index: 0
  });
  const { toast } = useToast();

  useEffect(() => {
    loadVideos();
  }, []);

  const loadVideos = async () => {
    try {
      setLoading(true);
      
      const { data, error } = await supabase
        .from('gallery_videos')
        .select('*')
        .order('order_index');

      if (error) throw error;
      setVideos(data || []);

    } catch (error) {
      console.error('Error loading videos:', error);
      toast({
        title: 'Error',
        description: 'Failed to load videos',
        variant: 'destructive',
      });
    } finally {
      setLoading(false);
    }
  };

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file && file.type.startsWith('video/')) {
      setSelectedFile(file);
    } else if (file) {
      toast({
        title: 'Error',
        description: 'Please select a video file',
        variant: 'destructive',
      });
    }
  };

  const uploadVideo = async () => {
    if (!selectedFile) return;

    try {
      setUploading(true);

      // Upload to Supabase Storage
      const fileExt = selectedFile.name.split('.').pop();
      const fileName = `${Date.now()}.${fileExt}`;
      const filePath = `videos/${fileName}`;

      const { data: uploadData, error: uploadError } = await supabase.storage
        .from('media')
        .upload(filePath, selectedFile);

      if (uploadError) throw uploadError;

      // Get public URL
      const { data: urlData } = supabase.storage
        .from('media')
        .getPublicUrl(filePath);

      // Create video record
      const { error: videoError } = await supabase
        .from('gallery_videos')
        .insert({
          title: selectedFile.name,
          description: 'Uploaded video',
          video_url: urlData.publicUrl,
          thumbnail_url: null,
          featured: false,
          order_index: videos.length + 1
        });

      if (videoError) throw videoError;

      toast({
        title: 'Success',
        description: 'Video uploaded successfully',
      });

      setSelectedFile(null);
      loadVideos();

    } catch (error) {
      console.error('Error uploading video:', error);
      toast({
        title: 'Error',
        description: 'Failed to upload video',
        variant: 'destructive',
      });
    } finally {
      setUploading(false);
    }
  };

  const startEditing = (video: VideoItem) => {
    setEditingVideo(video.id);
    setEditForm({
      title: video.title,
      description: video.description || '',
      video_url: video.video_url,
      thumbnail_url: video.thumbnail_url || '',
      featured: video.featured,
      order_index: video.order_index
    });
  };

  const saveEdit = async () => {
    if (!editingVideo) return;

    try {
      const { error } = await supabase
        .from('gallery_videos')
        .update({
          title: editForm.title,
          description: editForm.description,
          video_url: editForm.video_url,
          thumbnail_url: editForm.thumbnail_url || null,
          featured: editForm.featured,
          order_index: editForm.order_index
        })
        .eq('id', editingVideo);

      if (error) throw error;

      toast({
        title: 'Success',
        description: 'Video updated successfully',
      });

      setEditingVideo(null);
      loadVideos();

    } catch (error) {
      console.error('Error updating video:', error);
      toast({
        title: 'Error',
        description: 'Failed to update video',
        variant: 'destructive',
      });
    }
  };

  const cancelEdit = () => {
    setEditingVideo(null);
    setEditForm({
      title: '',
      description: '',
      video_url: '',
      thumbnail_url: '',
      featured: false,
      order_index: 0
    });
  };

  const deleteVideo = async (id: string) => {
    if (!confirm('Are you sure you want to delete this video?')) return;

    try {
      const { error } = await supabase
        .from('gallery_videos')
        .delete()
        .eq('id', id);

      if (error) throw error;

      toast({
        title: 'Success',
        description: 'Video deleted successfully',
      });

      loadVideos();

    } catch (error) {
      console.error('Error deleting video:', error);
      toast({
        title: 'Error',
        description: 'Failed to delete video',
        variant: 'destructive',
      });
    }
  };

  const toggleVideoStatus = async (id: string, currentStatus: boolean) => {
    try {
      const { error } = await supabase
        .from('gallery_videos')
        .update({ featured: !currentStatus })
        .eq('id', id);

      if (error) throw error;

      toast({
        title: 'Success',
        description: `Video ${!currentStatus ? 'featured' : 'unfeatured'} successfully`,
      });

      loadVideos();

    } catch (error) {
      console.error('Error toggling video status:', error);
      toast({
        title: 'Error',
        description: 'Failed to update video status',
        variant: 'destructive',
      });
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center p-8">
        <div className="text-lg">Loading videos...</div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Video Management</h2>
      </div>

      <Tabs defaultValue="upload" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="upload">Upload Video</TabsTrigger>
          <TabsTrigger value="manage">Manage Videos</TabsTrigger>
        </TabsList>

        <TabsContent value="upload" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Upload New Video</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="video-upload">Select Video File</Label>
                <Input
                  id="video-upload"
                  type="file"
                  accept="video/*"
                  onChange={handleFileSelect}
                  className="mt-1"
                />
              </div>
              
              {selectedFile && (
                <div className="p-4 bg-muted rounded-md">
                  <p className="text-sm">
                    <strong>File:</strong> {selectedFile.name}
                  </p>
                  <p className="text-sm">
                    <strong>Size:</strong> {(selectedFile.size / 1024 / 1024).toFixed(2)} MB
                  </p>
                  <p className="text-sm">
                    <strong>Type:</strong> {selectedFile.type}
                  </p>
                </div>
              )}
              
              <Button
                onClick={uploadVideo}
                disabled={!selectedFile || uploading}
                className="w-full"
              >
                {uploading ? 'Uploading...' : 'Upload Video'}
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="manage" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Manage Videos</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {videos.map((video) => (
                  <div key={video.id} className="border rounded-lg p-4 space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="font-medium">{video.title}</span>
                      <Badge variant={video.featured ? 'default' : 'secondary'}>
                        {video.featured ? 'Featured' : 'Regular'}
                      </Badge>
                    </div>
                    
                    <video
                      src={video.video_url}
                      className="w-full h-48 object-cover rounded-md"
                      controls
                    />
                    
                    <div className="text-sm text-muted-foreground space-y-1">
                      <p>Order: {video.order_index}</p>
                      {video.description && <p>Description: {video.description}</p>}
                    </div>
                    
                    {editingVideo === video.id ? (
                      <div className="space-y-3">
                        <div>
                          <Label>Title</Label>
                          <Input
                            value={editForm.title}
                            onChange={(e) => setEditForm({...editForm, title: e.target.value})}
                          />
                        </div>
                        <div>
                          <Label>Description</Label>
                          <Textarea
                            value={editForm.description}
                            onChange={(e) => setEditForm({...editForm, description: e.target.value})}
                          />
                        </div>
                        <div>
                          <Label>Video URL</Label>
                          <Input
                            value={editForm.video_url}
                            onChange={(e) => setEditForm({...editForm, video_url: e.target.value})}
                          />
                        </div>
                        <div>
                          <Label>Thumbnail URL</Label>
                          <Input
                            value={editForm.thumbnail_url}
                            onChange={(e) => setEditForm({...editForm, thumbnail_url: e.target.value})}
                          />
                        </div>
                        <div>
                          <Label>Order Index</Label>
                          <Input
                            type="number"
                            value={editForm.order_index}
                            onChange={(e) => setEditForm({...editForm, order_index: parseInt(e.target.value)})}
                          />
                        </div>
                        <div className="flex items-center space-x-2">
                          <input
                            type="checkbox"
                            id="featured"
                            checked={editForm.featured}
                            onChange={(e) => setEditForm({...editForm, featured: e.target.checked})}
                            className="rounded"
                          />
                          <Label htmlFor="featured">Featured</Label>
                        </div>
                        <div className="flex gap-2">
                          <Button size="sm" onClick={saveEdit}>
                            Save
                          </Button>
                          <Button size="sm" variant="outline" onClick={cancelEdit}>
                            Cancel
                          </Button>
                        </div>
                      </div>
                    ) : (
                      <div className="flex gap-2">
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => startEditing(video)}
                        >
                          Edit
                        </Button>
                        <Button
                          size="sm"
                          variant={video.featured ? 'secondary' : 'default'}
                          onClick={() => toggleVideoStatus(video.id, video.featured)}
                        >
                          {video.featured ? 'Unfeature' : 'Feature'}
                        </Button>
                        <Button
                          size="sm"
                          variant="destructive"
                          onClick={() => deleteVideo(video.id)}
                        >
                          Delete
                        </Button>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default VideoManager; 