
import { useState, useEffect, useRef } from 'react';
import { supabase } from '@/integrations/supabase/client';

interface SiteContent {
  id: string;
  key: string;
  type: string;
  value: string;
  page: string;
  title: string;
  description: string;
}

export const useContent = (page?: string) => {
  const [content, setContent] = useState<SiteContent[]>([]);
  const [loading, setLoading] = useState(true);
  const hasLoaded = useRef(false);

  useEffect(() => {
    // For home page, only load once on first render
    if (page === 'home' && hasLoaded.current) {
      return;
    }
    
    fetchContent();
    
    if (page === 'home') {
      hasLoaded.current = true;
    }
  }, [page]);

  const fetchContent = async () => {
    try {
      let query = supabase.from('site_content').select('*');
      
      if (page) {
        query = query.eq('page', page);
      }
      
      const { data, error } = await query;
      
      if (error) throw error;
      if (data) setContent(data);
    } catch (error) {
      console.error('Error fetching content:', error);
    } finally {
      setLoading(false);
    }
  };

  const getContent = (key: string, fallback: string = '') => {
    const item = content.find(c => c.key === key);
    return item?.value || fallback;
  };

  return { content, loading, getContent };
};
