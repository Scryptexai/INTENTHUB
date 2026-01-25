import React from "react";

interface SafeAreaProps {
  children: React.ReactNode;
  className?: string;
}

/**
 * SafeArea component handles notch and safe areas on modern phones
 * Uses CSS env() variables for iOS and Android safe areas
 */
export const SafeArea: React.FC<SafeAreaProps> = ({ children, className = "" }) => {
  return (
    <div
      className={`w-full ${className}`}
      style={{
        paddingTop: "env(safe-area-inset-top)",
        paddingRight: "env(safe-area-inset-right)",
        paddingBottom: "env(safe-area-inset-bottom)",
        paddingLeft: "env(safe-area-inset-left)",
      }}
    >
      {children}
    </div>
  );
};
