import React from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface MobileNavProps {
  isOpen: boolean;
  onToggle: () => void;
  items: Array<{
    label: string;
    href: string;
  }>;
}

export const MobileNav: React.FC<MobileNavProps> = ({ isOpen, onToggle, items }) => {
  return (
    <>
      {/* Mobile Navigation Header */}
      <div className="fixed top-0 left-0 right-0 h-16 bg-background border-b border-border z-40 flex items-center justify-between px-4 safe-top">
        <h1 className="text-xl font-bold">INTENT</h1>
        <Button
          variant="ghost"
          size="icon"
          onClick={onToggle}
          className="h-10 w-10"
        >
          {isOpen ? <X /> : <Menu />}
        </Button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="fixed inset-0 top-16 bg-background z-30 overflow-y-auto safe-bottom">
          <nav className="flex flex-col space-y-4 p-4">
            {items.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="px-4 py-3 text-lg font-medium hover:bg-accent rounded-lg transition-colors touch-target"
                onClick={onToggle}
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </>
  );
};
