import React, { useEffect, ReactNode } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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
    resetLoadingState();
  }, [resetLoadingState]);

  // Signal that page content is ready to load after header finishes
  useEffect(() => {
    if (headerLoaded) {
      // Small delay to ensure smooth transition
      const timer = setTimeout(() => {
        setPageContentLoaded(true);
      }, 200);
      return () => clearTimeout(timer);
    }
  }, [headerLoaded, setPageContentLoaded]);

  const pageContentVariants = {
    hidden: { 
      opacity: 0, 
      y: 20,
      scale: 0.98
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1],
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className={`min-h-screen ${className}`}>
      {/* Header always renders first */}
      <Header onLoadComplete={() => setHeaderLoaded(true)} />
      
      {/* Page content loads after header finishes */}
      <AnimatePresence>
        {headerLoaded && (
          <motion.div
            key="page-content"
            initial="hidden"
            animate={pageContentLoaded ? "visible" : "hidden"}
            variants={pageContentVariants}
            className="relative"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default PageWrapper; 