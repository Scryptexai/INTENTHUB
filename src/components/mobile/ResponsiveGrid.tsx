import React from "react";
import { cn } from "@/lib/utils";

interface ResponsiveGridProps {
  children: React.ReactNode;
  columns?: number;
  mobileColumns?: number;
  tabletColumns?: number;
  className?: string;
  gap?: "tight" | "default" | "spacious";
}

export const ResponsiveGrid: React.FC<ResponsiveGridProps> = ({
  children,
  columns = 3,
  mobileColumns = 1,
  tabletColumns = 2,
  className = "",
  gap = "default",
}) => {
  const gapClass = {
    tight: "gap-2 sm:gap-3 md:gap-4",
    default: "gap-3 sm:gap-4 md:gap-6",
    spacious: "gap-4 sm:gap-6 md:gap-8",
  }[gap];

  return (
    <div
      className={cn(
        `grid
        grid-cols-${mobileColumns}
        sm:grid-cols-${tabletColumns}
        md:grid-cols-${columns}
        ${gapClass}`,
        className
      )}
    >
      {children}
    </div>
  );
};
