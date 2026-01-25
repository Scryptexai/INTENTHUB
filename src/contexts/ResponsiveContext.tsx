import React, { useState } from "react";
import { useWindowSize } from "react-use";

interface ResponsiveProviderProps {
  children: React.ReactNode;
}

interface ResponsiveContextType {
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
  width: number;
}

export const ResponsiveContext = React.createContext<ResponsiveContextType>({
  isMobile: false,
  isTablet: false,
  isDesktop: true,
  width: 1024,
});

export const useResponsive = () => React.useContext(ResponsiveContext);

export const ResponsiveProvider: React.FC<ResponsiveProviderProps> = ({ children }) => {
  const { width = 1024 } = useWindowSize();
  
  const isMobile = width < 768;
  const isTablet = width >= 768 && width < 1024;
  const isDesktop = width >= 1024;

  return (
    <ResponsiveContext.Provider
      value={{
        isMobile,
        isTablet,
        isDesktop,
        width,
      }}
    >
      {children}
    </ResponsiveContext.Provider>
  );
};
