
import { useState, useEffect } from 'react';
import { useAuth } from '@/hooks/useAuth';
import { useNavigate } from 'react-router-dom';

export const useAdminAuth = () => {
  const { user, profile, loading: authLoading } = useAuth();
  const navigate = useNavigate();
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [authCheckComplete, setAuthCheckComplete] = useState(false);

  useEffect(() => {
    console.log('Admin auth check:', { user: !!user, profile, authLoading });
    
    if (!authLoading) {
      if (!user) {
        console.log('No user found, redirecting to auth');
        navigate('/auth');
        return;
      }

      if (!profile) {
        console.log('No profile found, user may need to refresh');
        setAuthCheckComplete(true);
        return;
      }

      const hasAdminAccess = profile.role === 'admin' || profile.role === 'editor';
      console.log('User role check:', { role: profile.role, hasAdminAccess });

      if (!hasAdminAccess) {
        console.log('User does not have admin access, redirecting to home');
        navigate('/');
        return;
      }

      console.log('User authorized for admin panel');
      setIsAuthorized(true);
      setAuthCheckComplete(true);
    }
  }, [user, profile, authLoading, navigate]);

  return {
    isAuthorized,
    authCheckComplete,
    loading: authLoading
  };
};
