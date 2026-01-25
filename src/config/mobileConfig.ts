// Mobile Optimization Configuration
// Viewport breakpoints and sizing standards

export const MOBILE_CONFIG = {
  breakpoints: {
    xs: 360,      // Android standard, iPhone SE
    sm: 375,      // iPhone SE (5.4")
    md: 390,      // iPhone 12/13/14 (6.1")
    lg: 430,      // iPhone 14 Pro Max (6.7")
    tablet: 768,  // iPad Portrait
    desktop: 1024,
  },

  // Touch target sizes (minimum 44x44px per iOS/Android guidelines)
  touchTargets: {
    minimum: 44,
    comfortable: 48,
    large: 56,
  },

  // Font sizes for readability
  fontSizes: {
    body: 16,      // Never smaller than 16px on mobile
    caption: 14,
    small: 13,
    headline: {
      h1: {
        mobile: 36,
        tablet: 48,
        desktop: 96,
      },
      h2: {
        mobile: 28,
        tablet: 40,
        desktop: 56,
      },
      h3: {
        mobile: 24,
        tablet: 32,
        desktop: 40,
      },
    },
  },

  // Spacing standards
  spacing: {
    mobile: 20,      // Standard mobile side padding
    tablet: 32,
    desktop: 80,
    section: {
      mobile: 60,
      tablet: 80,
      desktop: 120,
    },
  },

  // Animation timing
  animations: {
    // Running text scroll speed
    tickerSpeed: {
      mobile: 80,    // seconds (slower on mobile for readability)
      desktop: 60,
    },
    // Tap ripple duration
    tapDuration: 200,
  },

  // Performance thresholds
  performance: {
    lazyLoadThreshold: '100px', // Start loading images 100px before viewport
    maxImageSize: {
      mobile: 400,    // KB
      tablet: 600,
      desktop: 1000,
    },
  },
};

// Responsive utility function
export const getResponsiveValue = (mobile: any, tablet: any, desktop: any, width: number) => {
  if (width < 768) return mobile;
  if (width < 1024) return tablet;
  return desktop;
};

// Safe area constants (for notched phones)
export const SAFE_AREAS = {
  top: 'env(safe-area-inset-top, 0)',
  right: 'env(safe-area-inset-right, 0)',
  bottom: 'env(safe-area-inset-bottom, 0)',
  left: 'env(safe-area-inset-left, 0)',
};
