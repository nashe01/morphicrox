import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';

interface MediaFile {
  id: string;
  filename: string;
  original_name: string;
  file_url: string;
  file_type: string;
  file_size: number;
  created_at: string;
}

export default function MediaManager() {
  const [mediaFiles, setMediaFiles] = useState<MediaFile[]>([]);
  const [loading, setLoading] = useState(true);
  const [uploading, setUploading] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [filterType, setFilterType] = useState<string>('all');
  const { toast } = useToast();

  useEffect(() => {
    loadMedia();
  }, []);

  const loadMedia = async () => {
    try {
      setLoading(true);
      
      // Load media files
      const { data: filesData, error: filesError } = await supabase
        .from('media_files')
        .select('*')
        .order('created_at', { ascending: false });

      if (filesError) throw filesError;
      setMediaFiles(filesData || []);

    } catch (error) {
      console.error('Error loading media:', error);
      toast({
        title: 'Error',
        description: 'Failed to load media',
        variant: 'destructive',
      });
    } finally {
      setLoading(false);
    }
  };

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedFile(file);
    }
  };

  const uploadFile = async () => {
    if (!selectedFile) return;

    try {
      setUploading(true);

      // Upload to Supabase Storage
      const fileExt = selectedFile.name.split('.').pop();
      const fileName = `${Date.now()}.${fileExt}`;
      const filePath = `media/${fileName}`;

      const { data: uploadData, error: uploadError } = await supabase.storage
        .from('media')
        .upload(filePath, selectedFile);

      if (uploadError) throw uploadError;

      // Get public URL
      const { data: urlData } = supabase.storage
        .from('media')
        .getPublicUrl(filePath);

      // Create media file record
      const { error: fileError } = await supabase
        .from('media_files')
        .insert({
          filename: fileName,
          original_name: selectedFile.name,
          file_url: urlData.publicUrl,
          file_type: selectedFile.type,
          file_size: selectedFile.size
        });

      if (fileError) throw fileError;

      toast({
        title: 'Success',
        description: 'File uploaded successfully',
      });

      setSelectedFile(null);
      loadMedia();

    } catch (error) {
      console.error('Error uploading file:', error);
      toast({
        title: 'Error',
        description: 'Failed to upload file',
        variant: 'destructive',
      });
    } finally {
      setUploading(false);
    }
  };

  const deleteFile = async (id: string) => {
    if (!confirm('Are you sure you want to delete this file?')) return;

    try {
      const { error } = await supabase
        .from('media_files')
        .delete()
        .eq('id', id);

      if (error) throw error;

      toast({
        title: 'Success',
        description: 'File deleted successfully',
      });

      loadMedia();

    } catch (error) {
      console.error('Error deleting file:', error);
      toast({
        title: 'Error',
        description: 'Failed to delete file',
        variant: 'destructive',
      });
    }
  };

  const filteredFiles = mediaFiles.filter(file => {
    if (filterType !== 'all') {
      if (filterType === 'image' && !file.file_type.startsWith('image/')) return false;
      if (filterType === 'video' && !file.file_type.startsWith('video/')) return false;
    }
    return true;
  });

  if (loading) {
    return (
      <div className="flex items-center justify-center p-8">
        <div className="text-lg">Loading media...</div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Media Management</h2>
      </div>

      <Tabs defaultValue="upload" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="upload">Upload</TabsTrigger>
          <TabsTrigger value="files">Files</TabsTrigger>
        </TabsList>

        <TabsContent value="upload" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Upload New File</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="file-upload">Select File</Label>
                <Input
                  id="file-upload"
                  type="file"
                  accept="image/*,video/*"
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
                onClick={uploadFile}
                disabled={!selectedFile || uploading}
                className="w-full"
              >
                {uploading ? 'Uploading...' : 'Upload File'}
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="files" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Uploaded Files</CardTitle>
              <div className="flex gap-4">
                <Select value={filterType} onValueChange={setFilterType}>
                  <SelectTrigger className="w-32">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Types</SelectItem>
                    <SelectItem value="image">Images</SelectItem>
                    <SelectItem value="video">Videos</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {filteredFiles.map((file) => (
                  <div key={file.id} className="border rounded-lg p-4 space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="font-medium text-sm">{file.original_name}</span>
                      <Badge variant="outline">
                        {(file.file_size / 1024 / 1024).toFixed(2)} MB
                      </Badge>
                    </div>
                    
                    <p className="text-xs text-muted-foreground">{file.file_type}</p>
                    
                    {file.file_type.startsWith('image/') ? (
                      <img
                        src={file.file_url}
                        alt={file.original_name}
                        className="w-full h-32 object-cover rounded-md"
                      />
                    ) : file.file_type.startsWith('video/') ? (
                      <video
                        src={file.file_url}
                        className="w-full h-32 object-cover rounded-md"
                        controls
                      />
                    ) : (
                      <div className="w-full h-32 bg-muted rounded-md flex items-center justify-center">
                        <span className="text-muted-foreground">Preview not available</span>
                      </div>
                    )}
                    
                    <div className="flex gap-2">
                      <Button size="sm" variant="destructive" onClick={() => deleteFile(file.id)}>
                        Delete
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
} 