import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ExternalLink, UserPlus, LogOut } from 'lucide-react';
import { useAuth } from '@/hooks/useAuth';

interface AdminHeaderProps {
  onCreateAdminUser: () => void;
}

const AdminHeader: React.FC<AdminHeaderProps> = ({ onCreateAdminUser }) => {
  const navigate = useNavigate();
  const { signOut, user } = useAuth();

  const handleLogout = async () => {
    try {
      console.log('Admin logout initiated');
      await signOut();
      // The signOut function will handle the redirect
    } catch (error) {
      console.error('Error signing out:', error);
      // Fallback redirect
      navigate('/');
    }
  };

  return (
    <div className="flex items-center justify-between mb-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Admin Panel</h1>
        <p className="text-gray-600">
          Manage your website content
          {user && (
            <span className="ml-2 text-sm text-gray-500">
              • Logged in as {user.email}
            </span>
          )}
        </p>
      </div>
      <div className="flex gap-4">
        <Button onClick={onCreateAdminUser} variant="outline">
          <UserPlus className="w-4 h-4 mr-2" />
          Create Admin User
        </Button>
        <Button variant="outline" onClick={() => navigate('/')}>
          <ExternalLink className="w-4 h-4 mr-2" />
          View Site
        </Button>
        <Button variant="outline" onClick={() => navigate('/gallery')}>
          <ExternalLink className="w-4 h-4 mr-2" />
          View Gallery
        </Button>
        <Button variant="destructive" onClick={handleLogout}>
          <LogOut className="w-4 h-4 mr-2" />
          Logout
        </Button>
      </div>
    </div>
  );
};

export default AdminHeader;
