
import React, { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';

interface GalleryProject {
  id: string;
  title: string;
  description: string;
  category: string;
  image_url: string;
  featured: boolean;
}

interface GalleryVideo {
  id: string;
  title: string;
  description: string;
  video_url: string;
  thumbnail_url: string;
  featured: boolean;
}

const Gallery = () => {
  const [projects, setProjects] = useState<GalleryProject[]>([]);
  const [videos, setVideos] = useState<GalleryVideo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<'projects' | 'videos'>('projects');

  useEffect(() => {
    fetchGalleryData();
  }, []);

  const fetchGalleryData = async () => {
    try {
      console.log('Fetching gallery data...');
      setLoading(true);
      setError(null);

      const [projectsData, videosData] = await Promise.all([
        supabase
          .from('gallery_projects')
          .select('*')
          .order('order_index', { ascending: true }),
        supabase
          .from('gallery_videos')
          .select('*')
          .order('order_index', { ascending: true })
      ]);

      console.log('Projects data:', projectsData);
      console.log('Videos data:', videosData);

      if (projectsData.error) {
        console.error('Projects error:', projectsData.error);
        throw projectsData.error;
      }
      
      if (videosData.error) {
        console.error('Videos error:', videosData.error);
        throw videosData.error;
      }

      if (projectsData.data) {
        console.log('Setting projects:', projectsData.data);
        setProjects(projectsData.data);
      }
      
      if (videosData.data) {
        console.log('Setting videos:', videosData.data);
        setVideos(videosData.data);
      }
    } catch (error: any) {
      console.error('Error fetching gallery data:', error);
      setError(error.message || 'Failed to load gallery data');
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-brand mx-auto mb-4"></div>
            <div className="text-lg">Loading gallery...</div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <div className="text-red-500 mb-4">Error: {error}</div>
            <button 
              onClick={fetchGalleryData}
              className="px-4 py-2 bg-brand text-white rounded hover:bg-brand/90"
            >
              Try Again
            </button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <div className="max-w-7xl mx-auto px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-light mb-4">
            <span className="text-brand">Our </span>
            <span className="text-black">Gallery</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Explore our portfolio of completed projects and behind-the-scenes videos 
            showcasing our craftsmanship and attention to detail.
          </p>
        </motion.div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-8">
          <div className="bg-gray-100 p-1 rounded-lg">
            <button
              onClick={() => setActiveTab('projects')}
              className={`px-6 py-2 rounded-md transition-colors ${
                activeTab === 'projects'
                  ? 'bg-white text-brand shadow-sm'
                  : 'text-gray-600 hover:text-brand'
              }`}
            >
              Project Images ({projects.length})
            </button>
            <button
              onClick={() => setActiveTab('videos')}
              className={`px-6 py-2 rounded-md transition-colors ${
                activeTab === 'videos'
                  ? 'bg-white text-brand shadow-sm'
                  : 'text-gray-600 hover:text-brand'
              }`}
            >
              Behind the Scenes ({videos.length})
            </button>
          </div>
        </div>

        {/* Projects Grid */}
        {activeTab === 'projects' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {projects.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-gray-600">No projects available yet.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {projects.map((project, index) => (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="group bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
                  >
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <img
                        src={project.image_url}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      {project.featured && (
                        <div className="absolute top-3 left-3">
                          <span className="bg-brand text-white px-2 py-1 rounded-full text-xs font-medium">
                            Featured
                          </span>
                        </div>
                      )}
                    </div>
                    <div className="p-4">
                      <span className="text-sm text-brand font-medium">{project.category}</span>
                      <h3 className="text-lg font-semibold text-gray-900 mt-1 mb-2">
                        {project.title}
                      </h3>
                      <p className="text-gray-600 text-sm">{project.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </motion.div>
        )}

        {/* Videos Grid */}
        {activeTab === 'videos' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {videos.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-gray-600">No videos available yet.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {videos.map((video, index) => (
                  <motion.div
                    key={video.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="group bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
                  >
                    <div className="relative aspect-video overflow-hidden">
                      <img
                        src={video.thumbnail_url || video.video_url}
                        alt={video.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                        <Play className="w-12 h-12 text-white" />
                      </div>
                      {video.featured && (
                        <div className="absolute top-3 left-3">
                          <span className="bg-brand text-white px-2 py-1 rounded-full text-xs font-medium">
                            Featured
                          </span>
                        </div>
                      )}
                    </div>
                    <div className="p-4">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        {video.title}
                      </h3>
                      <p className="text-gray-600 text-sm">{video.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </motion.div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default Gallery;
