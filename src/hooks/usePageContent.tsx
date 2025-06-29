import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';

interface PageContent {
  id: string;
  key: string;
  type: string;
  value: string;
  page: string;
  section: string;
  title: string;
  description: string;
}

interface UsePageContentReturn {
  content: Record<string, string>;
  loading: boolean;
  error: string | null;
  refresh: () => void;
}

export function usePageContent(pageName: string): UsePageContentReturn {
  const [content, setContent] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const loadPageContent = async () => {
    try {
      setLoading(true);
      setError(null);

      // Load content from site_content table
      const { data: contentData, error: contentError } = await supabase
        .from('site_content')
        .select('*')
        .eq('page', pageName)
        .order('section');

      if (contentError) throw contentError;

      // Transform content data into key-value pairs
      const contentMap: Record<string, string> = {};
      contentData?.forEach((item: PageContent) => {
        contentMap[item.key] = item.value;
      });

      setContent(contentMap);

    } catch (err) {
      console.error('Error loading page content:', err);
      setError(err instanceof Error ? err.message : 'Failed to load page content');
    } finally {
      setLoading(false);
    }
  };

  const refresh = () => {
    loadPageContent();
  };

  useEffect(() => {
    if (pageName) {
      loadPageContent();
    }
  }, [pageName]);

  return {
    content,
    loading,
    error,
    refresh
  };
}

// Helper function to get content by key
export function getContentByKey(content: Record<string, string>, key: string, defaultValue: string = ''): string {
  return content[key] || defaultValue;
}

// Helper function to get media by section
export function getMediaBySection(media: Record<string, MediaItem[]>, section: string): MediaItem[] {
  return media[section] || [];
}

// Helper function to get first media item by section
export function getFirstMediaBySection(media: Record<string, MediaItem[]>, section: string): MediaItem | null {
  const sectionMedia = getMediaBySection(media, section);
  return sectionMedia.length > 0 ? sectionMedia[0] : null;
}

// Helper function to get hero video
export function getHeroVideo(media: Record<string, MediaItem[]>): MediaItem | null {
  return getFirstMediaBySection(media, 'hero') || getFirstMediaBySection(media, 'background');
}

// Helper function to get hero image
export function getHeroImage(media: Record<string, MediaItem[]>): MediaItem | null {
  const heroMedia = getMediaBySection(media, 'hero');
  return heroMedia.find(item => item.type === 'image') || null;
}

// Helper function to get category images
export function getCategoryImages(media: Record<string, MediaItem[]>): MediaItem[] {
  return getMediaBySection(media, 'categories').filter(item => item.type === 'image');
}

// Helper function to get featured videos
export function getFeaturedVideos(media: Record<string, MediaItem[]>): MediaItem[] {
  return getMediaBySection(media, 'featured').filter(item => item.type === 'video');
} 