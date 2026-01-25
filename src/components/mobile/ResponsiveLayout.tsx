import React from "react";
import { useWindowSize } from "react-use";

interface ResponsiveLayoutProps {
  children: React.ReactNode;
  mobileBreakpoint?: number;
}

export const ResponsiveLayout: React.FC<ResponsiveLayoutProps> = ({
  children,
  mobileBreakpoint = 768,
}) => {
  const { width } = useWindowSize();
  const isMobile = width < mobileBreakpoint;

  return (
    <div
      className={`w-full h-screen overflow-hidden ${
        isMobile ? "flex flex-col" : "flex"
      }`}
      data-mobile={isMobile}
    >
      {children}
    </div>
  );
};
