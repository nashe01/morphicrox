import React, { useEffect, ReactNode } from 'react';
import { motion } from 'framer-motion';
import { usePageLoading } from '@/hooks/usePageLoading';
import Header from './Header';

interface PageWrapperProps {
  children: ReactNode;
  className?: string;
}

const PageWrapper: React.FC<PageWrapperProps> = ({ children, className = "" }) => {
  const { headerLoaded, setHeaderLoaded, pageContentLoaded, setPageContentLoaded, resetLoadingState } = usePageLoading();

  // Reset loading state when component mounts
  useEffect(() => {
    console.log('PageWrapper mounted, resetting loading state');
    resetLoadingState();
  }, [resetLoadingState]);

  // Signal that page content is ready to load after header finishes
  useEffect(() => {
    console.log('Header loaded state changed:', headerLoaded);
    if (headerLoaded) {
      console.log('Header loaded, setting timer for page content');
      // Small delay to ensure smooth transition
      const timer = setTimeout(() => {
        console.log('Timer completed, setting pageContentLoaded to true');
        setPageContentLoaded(true);
      }, 200);
      return () => clearTimeout(timer);
    }
  }, [headerLoaded, setPageContentLoaded]);

  // Fallback: if header doesn't signal completion within 3 seconds, show content anyway
  useEffect(() => {
    const fallbackTimer = setTimeout(() => {
      if (!headerLoaded) {
        console.log('Fallback: Header not loaded after 3 seconds, showing content anyway');
        setHeaderLoaded(true);
        setTimeout(() => setPageContentLoaded(true), 200);
      }
    }, 3000);

    return () => clearTimeout(fallbackTimer);
  }, [headerLoaded, setHeaderLoaded, setPageContentLoaded]);

  console.log('PageWrapper render - headerLoaded:', headerLoaded, 'pageContentLoaded:', pageContentLoaded);

  return (
    <div className={`min-h-screen ${className}`}>
      {/* Header always renders first */}
      <Header onLoadComplete={() => setHeaderLoaded(true)} />
      
      {/* Page content - always rendered, animated when ready */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={pageContentLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        className="relative"
        style={{ 
          // Ensure content is visible even if animation fails
          visibility: headerLoaded ? 'visible' : 'hidden',
          minHeight: '50vh' // Ensure there's always some height
        }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default PageWrapper; 