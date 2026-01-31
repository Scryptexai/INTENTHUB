import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Book,
  ChevronRight,
  ChevronDown,
  Menu,
  X,
  Home,
  Zap,
  Shield,
  Network,
  FileText,
  Code,
  Users,
  MessageSquare
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";

interface DocSection {
  title: string;
  icon: React.ElementType;
  items: DocItem[];
}

interface DocItem {
  title: string;
  id: string;
  children?: DocItem[];
}

const docsSections: DocSection[] = [
  {
    title: "Getting Started",
    icon: Home,
    items: [
      { title: "Introduction", id: "introduction" },
      { title: "Quick Start", id: "quick-start" },
      { title: "Installation", id: "installation" },
    ],
  },
  {
    title: "Core Concepts",
    icon: Zap,
    items: [
      { title: "What is INTENT?", id: "what-is-intent" },
      { title: "Activity Verification", id: "activity-verification" },
      { title: "Proof Generation", id: "proof-generation" },
      { title: "Sybil Protection", id: "sybil-protection" },
    ],
  },
  {
    title: "How It Works",
    icon: Shield,
    items: [
      { title: "Tracking Activity", id: "tracking-activity" },
      { title: "Building History", id: "building-history" },
      { title: "Verification Process", id: "verification-process" },
      { title: "Sharing Proof", id: "sharing-proof" },
    ],
  },
  {
    title: "Ecosystem",
    icon: Network,
    items: [
      { title: "Supported Protocols", id: "supported-protocols" },
      { title: "Integration Guide", id: "integration-guide" },
      { title: "API Reference", id: "api-reference" },
    ],
  },
  {
    title: "Resources",
    icon: FileText,
    items: [
      { title: "FAQ", id: "faq" },
      { title: "Glossary", id: "glossary" },
      { title: "Troubleshooting", id: "troubleshooting" },
    ],
  },
];

const DocsLayout = ({ children }: { children: React.ReactNode }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [expandedSections, setExpandedSections] = useState<Set<string>>(new Set(["Getting Started"]));
  const location = useLocation();

  const toggleSection = (title: string) => {
    setExpandedSections(prev => {
      const newSet = new Set(prev);
      if (newSet.has(title)) {
        newSet.delete(title);
      } else {
        newSet.add(title);
      }
      return newSet;
    });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Mobile Header */}
      <div className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-white border-b border-[#E5E5E0] px-4 py-3">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-[#3B82F6] flex items-center justify-center">
              <span className="text-white font-bold text-sm">I</span>
            </div>
            <span className="font-mono font-bold text-[#1A1A1A]">INTENT Docs</span>
          </Link>
          <button
            onClick={() => setIsSidebarOpen(true)}
            className="p-2 hover:bg-[#F5F5F2] rounded-lg transition-colors"
          >
            <Menu className="w-5 h-5 text-[#1A1A1A]" />
          </button>
        </div>
      </div>

      {/* Mobile Sidebar Overlay */}
      <AnimatePresence>
        {isSidebarOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsSidebarOpen(false)}
              className="lg:hidden fixed inset-0 bg-black/50 z-50"
            />
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="lg:hidden fixed top-0 left-0 bottom-0 w-80 bg-white z-50 overflow-y-auto"
            >
              <div className="p-4 border-b border-[#E5E5E0]">
                <div className="flex items-center justify-between">
                  <span className="font-mono font-bold text-lg text-[#1A1A1A]">Documentation</span>
                  <button
                    onClick={() => setIsSidebarOpen(false)}
                    className="p-2 hover:bg-[#F5F5F2] rounded-lg transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>
              <div className="p-4">
                <SidebarContent
                  expandedSections={expandedSections}
                  toggleSection={toggleSection}
                  onNavigate={() => setIsSidebarOpen(false)}
                />
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Desktop Sidebar */}
      <aside className="hidden lg:flex fixed left-0 top-0 bottom-0 w-72 bg-white border-r border-[#E5E5E0] flex-col">
        <div className="p-6 border-b border-[#E5E5E0]">
          <Link to="/" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#3B82F6] flex items-center justify-center">
              <span className="text-white font-bold text-lg">I</span>
            </div>
            <div>
              <h1 className="font-mono font-bold text-[#1A1A1A]">INTENT</h1>
              <p className="text-[10px] text-[#6B6B6B] uppercase tracking-wider">Documentation</p>
            </div>
          </Link>
        </div>
        <nav className="flex-1 overflow-y-auto p-4">
          <SidebarContent
            expandedSections={expandedSections}
            toggleSection={toggleSection}
            onNavigate={() => {}}
          />
        </nav>
        <div className="p-4 border-t border-[#E5E5E0]">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 text-sm text-[#6B6B6B] hover:text-[#3B82F6] transition-colors"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Get Support</span>
          </a>
        </div>
      </aside>

      {/* Main Content */}
      <main className="lg:ml-72 pt-16 lg:pt-0">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 py-8 lg:py-12">
          {children}
        </div>
      </main>
    </div>
  );
};

const SidebarContent = ({
  expandedSections,
  toggleSection,
  onNavigate,
}: {
  expandedSections: Set<string>;
  toggleSection: (title: string) => void;
  onNavigate: () => void;
}) => {
  const location = useLocation();

  return (
    <div className="space-y-6">
      {docsSections.map((section) => {
        const Icon = section.icon;
        const isExpanded = expandedSections.has(section.title);

        return (
          <div key={section.title}>
            <button
              onClick={() => toggleSection(section.title)}
              className="flex items-center gap-2 w-full px-3 py-2 text-left hover:bg-[#F5F5F2] rounded-lg transition-colors"
            >
              <Icon className="w-4 h-4 text-[#3B82F6] flex-shrink-0" />
              <span className="font-mono text-sm font-semibold text-[#1A1A1A] flex-1">
                {section.title}
              </span>
              {isExpanded ? (
                <ChevronDown className="w-4 h-4 text-[#6B6B6B] flex-shrink-0" />
              ) : (
                <ChevronRight className="w-4 h-4 text-[#6B6B6B] flex-shrink-0" />
              )}
            </button>

            <AnimatePresence>
              {isExpanded && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="overflow-hidden"
                >
                  <div className="mt-1 ml-6 space-y-1">
                    {section.items.map((item) => (
                      <Link
                        key={item.id}
                        to={`/docs#${item.id}`}
                        onClick={onNavigate}
                        className={`flex items-center gap-2 px-3 py-2 text-sm rounded-lg transition-colors ${
                          location.hash === `#${item.id}`
                            ? "bg-[#3B82F6]/10 text-[#3B82F6] font-medium"
                            : "text-[#6B6B6B] hover:text-[#1A1A1A] hover:bg-[#F5F5F2]"
                        }`}
                      >
                        <span>{item.title}</span>
                      </Link>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
};

export default DocsLayout;
