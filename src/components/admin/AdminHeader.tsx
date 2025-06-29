import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useAuth } from '@/hooks/useAuth';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

interface AdminHeaderProps {
  onCreateAdminUser: () => void;
}

export default function AdminHeader({ onCreateAdminUser }: AdminHeaderProps) {
  const { user, profile, signOut } = useAuth();
  const { toast } = useToast();

  const testPermissions = async () => {
    try {
      console.log('Testing user permissions...');
      
      // Test 1: Check if user can read site_content
      const { data: readData, error: readError } = await supabase
        .from('site_content')
        .select('*')
        .limit(1);
      
      console.log('Read test:', { data: readData, error: readError });
      
      // Test 2: Check if user can update site_content
      if (readData && readData.length > 0) {
        const testItem = readData[0];
        const { data: updateData, error: updateError } = await supabase
          .from('site_content')
          .update({ value: testItem.value }) // Update with same value
          .eq('id', testItem.id)
          .select();
        
        console.log('Update test:', { data: updateData, error: updateError });
        
        if (updateError) {
          toast({
            title: 'Permission Error',
            description: `Cannot update content: ${updateError.message}`,
            variant: 'destructive',
          });
        } else {
          toast({
            title: 'Success',
            description: 'User has update permissions',
          });
        }
      }
      
      // Test 3: Check user profile
      console.log('User profile:', profile);
      
    } catch (error) {
      console.error('Permission test error:', error);
      toast({
        title: 'Error',
        description: 'Failed to test permissions',
        variant: 'destructive',
      });
    }
  };

  return (
    <Card className="mb-6">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="text-2xl font-bold">Admin Panel</CardTitle>
            <p className="text-gray-600 mt-1">
              Manage your website content and media
            </p>
          </div>
          <div className="flex items-center gap-4">
            <Button
              variant="outline"
              onClick={testPermissions}
            >
              Test Permissions
            </Button>
            <Button
              variant="outline"
              onClick={onCreateAdminUser}
            >
              Create Admin User
            </Button>
            <Button
              variant="destructive"
              onClick={signOut}
            >
              Sign Out
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex items-center gap-4">
          <div>
            <span className="text-sm text-gray-600">Logged in as:</span>
            <div className="font-medium">{user?.email}</div>
          </div>
          <Badge variant={profile?.role === 'admin' ? 'default' : 'secondary'}>
            {profile?.role || 'Unknown'} Role
          </Badge>
          <div className="text-sm text-gray-500">
            User ID: {user?.id?.slice(0, 8)}...
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
