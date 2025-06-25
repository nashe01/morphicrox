
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ExternalLink, UserPlus } from 'lucide-react';

interface AdminHeaderProps {
  onCreateAdminUser: () => void;
}

const AdminHeader: React.FC<AdminHeaderProps> = ({ onCreateAdminUser }) => {
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-between mb-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Admin Panel</h1>
        <p className="text-gray-600">Manage your website content</p>
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
      </div>
    </div>
  );
};

export default AdminHeader;
