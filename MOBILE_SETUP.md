# Mobile Framework Setup Documentation

## Overview
Framework mobile telah disetup untuk INTENTHUB dengan dukungan penuh untuk responsive design, gesture handling, dan safe areas untuk modern smartphones.

## ✅ Yang Sudah Disetup

### 1. **HTML Meta Tags** (`index.html`)
- ✅ Viewport configuration untuk mobile
- ✅ Apple mobile web app support
- ✅ Safe area support (notch/dynamic island)
- ✅ Theme color configuration

### 2. **Tailwind CSS Configuration** (`tailwind.config.ts`)
- ✅ Mobile-first breakpoints (xs, sm, md, lg, xl, 2xl)
- ✅ Safe area spacing variables
- ✅ Touch target sizing (min 44x44px iOS standard)
- ✅ Dynamic viewport height (100dvh)

### 3. **Mobile CSS Utilities** (`src/css/mobile.css`)
```css
/* Safe area padding */
.safe-area
.safe-area-top
.safe-area-bottom

/* Touch targets */
.touch-target

/* Scrolling */
.smooth-scroll
.scroll-snap-container

/* Navigation spacing */
.pb-nav (padding-bottom)
.pt-nav (padding-top)
```

### 4. **Mobile Components**

#### SafeArea Component
```tsx
import { SafeArea } from '@/components/mobile/SafeArea';

<SafeArea>
  <div>Content that respects notches</div>
</SafeArea>
```

#### MobileNav Component
```tsx
import { MobileNav } from '@/components/mobile/MobileNav';

const [isOpen, setIsOpen] = useState(false);
<MobileNav 
  isOpen={isOpen}
  onToggle={() => setIsOpen(!isOpen)}
  items={navItems}
/>
```

#### ResponsiveLayout Component
```tsx
import { ResponsiveLayout } from '@/components/mobile/ResponsiveLayout';

<ResponsiveLayout mobileBreakpoint={768}>
  {children}
</ResponsiveLayout>
```

#### ResponsiveGrid Component
```tsx
import { ResponsiveGrid } from '@/components/mobile/ResponsiveGrid';

<ResponsiveGrid 
  mobileColumns={1}
  tabletColumns={2}
  columns={3}
  gap="default"
>
  {children}
</ResponsiveGrid>
```

### 5. **Mobile Hooks**

#### useSwipe Hook
```tsx
import { useSwipe } from '@/hooks/useMobileGestures';

const { handleTouchStart, handleTouchEnd } = useSwipe({
  onSwipeLeft: () => console.log('Swiped left'),
  onSwipeRight: () => console.log('Swiped right'),
  onSwipeUp: () => console.log('Swiped up'),
  onSwipeDown: () => console.log('Swiped down'),
});

<div 
  onTouchStart={handleTouchStart}
  onTouchEnd={handleTouchEnd}
>
  Swipeable content
</div>
```

#### useTouchScale Hook
```tsx
import { useTouchScale } from '@/hooks/useMobileGestures';

const { handleTouchStart } = useTouchScale();

<div onTouchStart={handleTouchStart}>
  Prevents pinch zoom
</div>
```

### 6. **Installed Packages**
- `@use-gesture/react` - Touch gesture detection
- `react-use` - Utility hooks (useWindowSize, etc)

## 🎯 Best Practices

### Responsive Breakpoints
```tsx
// Mobile-first approach
<div className="text-sm sm:text-base md:text-lg">
  Text that scales with device
</div>
```

### Touch Targets
Always ensure interactive elements are at least 44x44px:
```tsx
<button className="touch-target">Tap me</button>
```

### Safe Areas (Notches)
```tsx
<SafeArea className="bg-primary">
  Content automatically respects notch
</SafeArea>
```

### Navigation Spacing
```tsx
<div className="pb-nav">
  Content with bottom nav spacing
</div>
```

### Viewport Height
```tsx
// Use dynamic viewport height to exclude address bar
<div className="mobile-viewport overflow-y-auto">
  Scrollable content
</div>
```

## 📱 Device Support

### iOS
- ✅ iPhone 13+ (Dynamic Island)
- ✅ iPhone 12 (Notch)
- ✅ iPad (landscape/portrait)
- ✅ Safe area insets respected

### Android
- ✅ Modern devices with status bar
- ✅ Notched devices
- ✅ Full-screen gestures support

## 🚀 Next Steps

1. **Implement responsive pages** - Use ResponsiveLayout for main pages
2. **Add mobile navigation** - Use MobileNav for mobile menu
3. **Test on devices** - Use Chrome DevTools mobile emulation
4. **Optimize images** - Use responsive images
5. **Test performance** - Run Lighthouse audit

## 📊 Tailwind Responsive Classes

```tsx
/* All available breakpoints */
default        // 360px - 639px (mobile)
sm:            // 640px - 767px 
md:            // 768px - 1023px (tablet)
lg:            // 1024px - 1279px
xl:            // 1280px - 1535px
2xl:           // 1536px - 1919px
3xl:           // 1920px+ (desktop)

/* Example */
<div className="px-4 sm:px-6 md:px-8">
  Padding adapts to screen size
</div>
```

## 🔧 Configuration Files Modified

1. `index.html` - Meta tags
2. `tailwind.config.ts` - Breakpoints & utilities
3. `vite.config.ts` - (no changes needed)
4. `tsconfig.app.json` - (no changes needed)
5. `package.json` - Added gesture packages
6. `src/main.tsx` - Import mobile CSS

## 📝 File Structure

```
src/
├── components/
│   └── mobile/
│       ├── SafeArea.tsx
│       ├── MobileNav.tsx
│       ├── ResponsiveLayout.tsx
│       └── ResponsiveGrid.tsx
├── css/
│   └── mobile.css
├── hooks/
│   └── useMobileGestures.ts
└── main.tsx
```

## 🐛 Troubleshooting

### Notch not respected
- Ensure `<SafeArea>` component is used
- Check if `viewport-fit=cover` is in meta tag

### Touch targets too small
- Add `touch-target` class to buttons
- Ensure min-height/width >= 44px

### Zoom on input focus (iOS)
- Font size must be >= 16px
- Use `.prevent-zoom` class wrapper

### Scroll issues
- Use `.smooth-scroll` for momentum scrolling
- Check for `overflow-hidden` parent

## 📖 Resources

- [MDN Viewport Meta Tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Viewport_meta_tag)
- [Tailwind Responsive Design](https://tailwindcss.com/docs/responsive-design)
- [Apple Safe Area](https://developer.apple.com/design/human-interface-guidelines/ios/visual-design/adaptivity-and-layout/)
- [Chrome DevTools Mobile](https://developer.chrome.com/docs/devtools/device-mode/)
