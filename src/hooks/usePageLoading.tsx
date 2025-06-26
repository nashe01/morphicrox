import React, { createContext, useContext, useState, ReactNode } from 'react';

interface PageLoadingContextType {
  headerLoaded: boolean;
  setHeaderLoaded: (loaded: boolean) => void;
  pageContentLoaded: boolean;
  setPageContentLoaded: (loaded: boolean) => void;
  resetLoadingState: () => void;
}

const PageLoadingContext = createContext<PageLoadingContextType | undefined>(undefined);

export const usePageLoading = () => {
  const context = useContext(PageLoadingContext);
  if (!context) {
    throw new Error('usePageLoading must be used within a PageLoadingProvider');
  }
  return context;
};

interface PageLoadingProviderProps {
  children: ReactNode;
}

export const PageLoadingProvider: React.FC<PageLoadingProviderProps> = ({ children }) => {
  const [headerLoaded, setHeaderLoaded] = useState(false);
  const [pageContentLoaded, setPageContentLoaded] = useState(false);

  const resetLoadingState = () => {
    setHeaderLoaded(false);
    setPageContentLoaded(false);
  };

  return (
    <PageLoadingContext.Provider
      value={{
        headerLoaded,
        setHeaderLoaded,
        pageContentLoaded,
        setPageContentLoaded,
        resetLoadingState,
      }}
    >
      {children}
    </PageLoadingContext.Provider>
  );
}; 