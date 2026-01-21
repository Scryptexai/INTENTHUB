import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Particle {
  id: number;
  x: number;
  y: number;
}

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [particles, setParticles] = useState<Particle[]>([]);
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const particleIdRef = useRef(0);
  const lastParticleTime = useRef(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);

      // Create trailing particles with throttle
      const now = Date.now();
      if (now - lastParticleTime.current > 50) {
        lastParticleTime.current = now;
        const newParticle: Particle = {
          id: particleIdRef.current++,
          x: e.clientX,
          y: e.clientY,
        };
        setParticles((prev) => [...prev.slice(-8), newParticle]);
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    // Check for hoverable elements
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isHoverable =
        target.closest("a") ||
        target.closest("button") ||
        target.closest("[data-hoverable]") ||
        target.tagName === "A" ||
        target.tagName === "BUTTON";
      setIsHovering(!!isHoverable);
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);
    document.addEventListener("mouseover", handleMouseOver);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
      document.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  // Clean up old particles
  useEffect(() => {
    const cleanup = setInterval(() => {
      setParticles((prev) => prev.slice(-8));
    }, 100);
    return () => clearInterval(cleanup);
  }, []);

  // Hide on mobile/touch devices
  const isTouchDevice =
    typeof window !== "undefined" &&
    ("ontouchstart" in window || navigator.maxTouchPoints > 0);

  if (isTouchDevice) return null;

  return (
    <>
      {/* Custom Cursor Styles */}
      <style>{`
        * { cursor: none !important; }
        @media (max-width: 768px) {
          * { cursor: auto !important; }
        }
      `}</style>

      {/* Main Cursor */}
      <motion.div
        className="fixed top-0 left-0 z-[9999] pointer-events-none mix-blend-difference"
        animate={{
          x: mousePosition.x - (isHovering ? 24 : 8),
          y: mousePosition.y - (isHovering ? 24 : 8),
          scale: isVisible ? 1 : 0,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 28,
          mass: 0.5,
        }}
      >
        <div
          className={`transition-all duration-200 ${
            isHovering
              ? "w-12 h-12 border-2 border-primary bg-primary/20"
              : "w-4 h-4 bg-primary"
          }`}
          style={{
            clipPath: isHovering
              ? "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)"
              : "none",
          }}
        />
      </motion.div>

      {/* Outer Ring */}
      <motion.div
        className="fixed top-0 left-0 z-[9998] pointer-events-none"
        animate={{
          x: mousePosition.x - 20,
          y: mousePosition.y - 20,
          scale: isVisible ? 1 : 0,
        }}
        transition={{
          type: "spring",
          stiffness: 150,
          damping: 20,
          mass: 0.8,
        }}
      >
        <div className="w-10 h-10 border border-foreground/30 rotate-45" />
      </motion.div>

      {/* Trailing Particles */}
      <AnimatePresence>
        {particles.map((particle, index) => (
          <motion.div
            key={particle.id}
            className="fixed top-0 left-0 z-[9997] pointer-events-none"
            initial={{
              x: particle.x - 3,
              y: particle.y - 3,
              opacity: 0.8,
              scale: 1,
            }}
            animate={{
              opacity: 0,
              scale: 0,
            }}
            exit={{
              opacity: 0,
            }}
            transition={{
              duration: 0.6,
              delay: index * 0.02,
            }}
          >
            <div
              className="w-1.5 h-1.5 bg-primary"
              style={{
                transform: `rotate(${index * 45}deg)`,
              }}
            />
          </motion.div>
        ))}
      </AnimatePresence>

      {/* Corner Brackets Around Cursor */}
      <motion.div
        className="fixed top-0 left-0 z-[9996] pointer-events-none"
        animate={{
          x: mousePosition.x - 24,
          y: mousePosition.y - 24,
          opacity: isHovering ? 1 : 0,
          scale: isHovering ? 1 : 0.5,
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 25,
        }}
      >
        <div className="w-12 h-12 relative">
          <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-primary" />
          <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-primary" />
          <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-primary" />
          <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-primary" />
        </div>
      </motion.div>
    </>
  );
};

export default CustomCursor;
