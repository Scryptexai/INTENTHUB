# Mobile UI Framework - Production Implementation

**Status:** ✅ **ACTIVE & FULLY INTEGRATED**

Framework mobile sudah fully integrated ke production dan live di landing page!

---

## Architecture

### 1. Global Responsive State

**File:** `src/contexts/ResponsiveContext.tsx`

Provides global responsive detection via React Context. Wrapped di App.tsx.

```tsx
import { useResponsive } from '@/contexts/ResponsiveContext';

const MyComponent = () => {
  const { isMobile, isTablet, isDesktop, width } = useResponsive();
  
  return (
    <div>
      Current width: {width}px
      {isMobile && <p>Mobile view</p>}
      {isDesktop && <p>Desktop view</p>}
    </div>
  );
};
```

**Breakpoints:**
- `isMobile`: < 768px
- `isTablet`: 768px - 1024px
- `isDesktop`: >= 1024px

---

## Landing Page Components - Mobile Ready

### Navbar Component
**File:** `src/components/landing/Navbar.tsx` ✅

**Mobile Features:**
- Hamburger menu (top-right toggle)
- Compact bottom countdown display
- Full-screen overlay menu on tap
- Touch-friendly 44x44px buttons

**Desktop Features:**
- Center navigation pill
- Top-right countdown
- Hover effects

```tsx
<Navbar /> // Auto-responsive based on screen size
```

### HeroSection Component
**File:** `src/components/landing/HeroSection.tsx` ✅

**Mobile Features:**
- Responsive text: 32px → 40px → 48px+
- Center-positioned content
- Minimal height optimization
- 3D animation disabled (performance)
- Touch-optimized areas

**Desktop Features:**
- Text: 48px → 64px+
- Left-positioned content
- Full animation suite
- 3D hero element active

---

## Mobile CSS Utilities

All utilities dalam `src/index.css`:

```css
/* Safe Area - Handle notches/dynamic islands */
.safe-area
.safe-area-top
.safe-area-bottom
.safe-area-left
.safe-area-right

/* Touch Targets - Min 44x44px (iOS standard) */
.touch-target

/* Scrolling */
.smooth-scroll
.scroll-snap-container

/* Navigation */
.pb-nav    /* Bottom padding for mobile nav */
.pt-nav    /* Top padding */

/* Viewport */
.mobile-viewport  /* 100dvh - excludes address bar */
```

---

## Implementation Patterns

### Pattern 1: Conditional Rendering

```tsx
const Component = () => {
  const { isMobile } = useResponsive();
  
  return isMobile ? (
    <MobileLayout />
  ) : (
    <DesktopLayout />
  );
};
```

### Pattern 2: Responsive Classes

```tsx
<div className="
  text-sm sm:text-base md:text-lg
  px-4 md:px-8
  py-2 md:py-4
">
  Mobile-first responsive sizing
</div>
```

### Pattern 3: Dynamic Positioning

```tsx
const { isMobile } = useResponsive();

<div className={`
  absolute
  ${isMobile 
    ? 'top-1/2 -translate-y-1/2 left-4 right-4'
    : 'bottom-[33.33vh] left-[8.33vw] w-[33.33vw]'
  }
`}>
  Content adapts position
</div>
```

---

## Tailwind Responsive Breakpoints

Mobile-first: base styles = mobile, then override for larger screens

```tsx
/* Text Scaling */
<h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
  Scales from 24px to 60px+
</h1>

/* Padding */
<div className="px-4 sm:px-6 md:px-8 lg:px-12">
  Padding: 16px → 24px → 32px → 48px
</div>

/* Display */
<div className="hidden md:block">Desktop only</div>
<div className="md:hidden">Mobile only</div>

/* Grid */
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
  1 column mobile → 2 tablet → 3 desktop
</div>
```

**Available Breakpoints:**
```
xs   = 360px
sm   = 640px
md   = 768px
lg   = 1024px
xl   = 1280px
2xl  = 1536px
3xl  = 1920px
```

---

## Mobile Optimizations Implemented

✅ **Performance:**
- 3D animations disabled on mobile
- Running text animation hidden on mobile
- Lazy component loading

✅ **User Experience:**
- Touch-optimized button sizes
- Smooth momentum scrolling
- Responsive font sizes
- Smart layout switching

✅ **Accessibility:**
- Proper touch targets (44x44px)
- Semantic HTML
- Color contrast maintained
- Focus states on interactive elements

---

## Active Components Using Framework

✅ Navbar - Full mobile responsive nav
✅ HeroSection - Text scaling & layout switching
🔄 Others - Gradual updates

---

## Components Needing Mobile Updates

- [ ] ProblemFraming - Responsive grid/cards
- [ ] InfrastructureSection - Image scaling
- [ ] SupportedDapps - Horizontal scroll/grid toggle
- [ ] ComparisonTable - Mobile-friendly table view
- [ ] FAQSection - Accordion for mobile
- [ ] Footer - Stacked layout for mobile

---

## Testing Responsive Design

### Chrome DevTools (Easiest)
```
1. Open DevTools: F12
2. Toggle device toolbar: Ctrl+Shift+M
3. Select device or custom size
4. Test at: 375px, 768px, 1440px
```

### Real Device (Best)
```bash
# Terminal 1 - Start dev server accessible on network
npm run dev

# On mobile browser
http://<your-computer-ip>:8080
```

### Device Sizes to Test
- **Mobile:** 360px, 375px, 390px
- **Tablet:** 768px, 820px, 1024px
- **Desktop:** 1440px, 1920px

---

## Common Mobile Issues

### ❌ Text too small
```tsx
// Wrong
<h1 className="text-base">Title</h1>

// Right
<h1 className="text-lg sm:text-xl md:text-2xl">Title</h1>
```

### ❌ Content squished
```tsx
// Wrong
<div className="px-8">Content</div>

// Right
<div className="px-4 sm:px-6 md:px-8">Content</div>
```

### ❌ Button impossible to tap
```tsx
// Wrong
<button className="px-2 py-1">Tap</button>

// Right
<button className="touch-target px-4 py-3">Tap</button>
```

---

## Code Structure

```
src/
├── contexts/
│   └── ResponsiveContext.tsx    ← Global responsive state
├── components/
│   ├── landing/
│   │   ├── Navbar.tsx           ✅ Mobile responsive
│   │   ├── HeroSection.tsx       ✅ Mobile responsive
│   │   └── ...others            🔄 To update
│   └── mobile/
│       ├── SafeArea.tsx         ← Notch handling
│       ├── MobileNav.tsx        ← Menu component
│       └── ...utilities
├── hooks/
│   └── useMobileGestures.ts     ← Touch gestures
├── index.css                     ← Mobile utilities
└── App.tsx                       ← ResponsiveProvider wrapper
```

---

## Debug/Development

### Log Responsive State
```tsx
const Component = () => {
  const responsive = useResponsive();
  console.log('Breakpoint:', responsive);
  // { isMobile: true, isTablet: false, isDesktop: false, width: 375 }
  
  return <div>Width: {responsive.width}px</div>;
};
```

### Test Different Sizes
```tsx
const Component = () => {
  const { width } = useResponsive();
  
  return (
    <div className="fixed top-0 left-0 bg-blue-500 text-white p-2 text-xs">
      {width}px
    </div>
  );
};
```

---

## References

- [Tailwind CSS - Responsive Design](https://tailwindcss.com/docs/responsive-design)
- [MDN - Viewport Meta Tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Viewport_meta_tag)
- [React Context API](https://react.dev/reference/react/useContext)
- [Chrome DevTools - Device Mode](https://developer.chrome.com/docs/devtools/device-mode/)
