# Cara Lengkap Translate Semua Component

## Status Sekarang:
✅ Translation files 100% lengkap (en.json, id.json, zh.json)
✅ Navbar sudah 100% translated
✅ HeroSection sudah 100% translated
⏳ Lainnya perlu di-update

## Pattern untuk Translate Component:

### 1. Import hook:
```tsx
import { useTranslation } from 'react-i18next';
```

### 2. Tambah hook di component:
```tsx
const MyComponent = () => {
  const { t } = useTranslation(); // ← Tambah ini
  // ... rest of code
```

### 3. Ganti hardcoded text dengan `t()`:

**BEFORE:**
```tsx
<h1>Stop Farming Blind</h1>
<p>INTENT helps you focus...</p>
<button>Start Now</button>
```

**AFTER:**
```tsx
<h1>{t('hero.headline')}</h1>
<p>{t('hero.subheadline')}</p>
<button>{t('hero.cta')}</button>
```

## Contoh Lengkap - ProblemFraming Section:

Cari file: `src/components/landing/ProblemFraming.tsx`

Tambah di line paling atas (setelah imports):
```tsx
import { useTranslation } from 'react-i18next';

const ProblemFraming = () => {
  const { t } = useTranslation(); // ← Add this
  const sectionRef = useRef<HTMLElement>(null);
  // ... rest
```

Lalu ganti text:
```tsx
// Line ~160 - Badge
<p className="font-mono text-xs uppercase tracking-[0.2em] text-[#FF6B35] font-bold">
  {t('problem.badge')}  {/* Was: "THE PROBLEM" */}
</p>

// Line ~175 - Headline
<h2 className="...">
  {t('problem.headline')}  {/* Was: "Most users farm without..." */}
</h2>

// Line ~195 - Problem title
<h3 className="...">
  {t('problem.problems.0.title')}  {/* Was: "Random Transactions" */}
</h3>

// Line ~198 - Problem description
<p className="...">
  {t('problem.problems.0.description')}  {/* Was: "Swapping tokens..." */}
</p>
```

## Quick Reference - Translation Keys:

### Infrastructure Section:
```tsx
{t('infrastructure.badge')}           // "WHAT INTENT ACTUALLY DOES"
{t('infrastructure.headline')}         // "INTENT helps you use..."
{t('infrastructure.steps.0.title')}    // "You use dApps as usual"
{t('infrastructure.steps.0.number')}   // "01"
{t('infrastructure.summary')}          // "Infrastructure > Manual Tasks"
```

### Daily Activity Section:
```tsx
{t('dailyActivity.badge')}             // "DAILY ARC ACTIVITIES"
{t('dailyActivity.headline')}          // "Today's Recommended Activities"
{t('dailyActivity.today')}             // "Today"
{t('dailyActivity.easy')}              // "Easy"
{t('dailyActivity.viewAllDapps')}      // "View All ARC dApps"
```

### Why Different Section:
```tsx
{t('whyDifferent.badge')}              // "WHY THIS IS DIFFERENT"
{t('whyDifferent.headline')}           // "This isn't a quest platform..."
{t('whyDifferent.questPlatform.title')} // "Regular Quest Platform"
{t('whyDifferent.intent.title')}       // "INTENT"
{t('whyDifferent.intent.badge')}       // "✨ Better Way"
```

### About Proof Section:
```tsx
{t('aboutProof.badge')}                // "ABOUT PROOF & BADGE"
{t('aboutProof.headline')}             // "Badges here aren't collections..."
{t('aboutProof.stats.activities')}     // "Activities Verified"
{t('aboutProof.features.0.title')}     // "Directly connected to transactions"
{t('aboutProof.howItWorks.title')}     // "How Your Proof Works"
{t('aboutProof.process.title')}        // "How INTENT Verifies..."
```

### Ecosystem Section:
```tsx
{t('ecosystem.badge')}                 // "ECOSYSTEM TRUST"
{t('ecosystem.headline')}              // "Built on ARC..."
{t('ecosystem.stats.transactions')}    // "Total Transactions"
{t('ecosystem.protocolsTitle')}        // "Supported ARC Protocols"
```

### Final CTA Section:
```tsx
{t('finalCta.badge')}                  // "FINAL CTA"
{t('finalCta.headline')}               // "If you want to farm..."
{t('finalCta.cta')}                    // "Start Using ARC with INTENT"
{t('finalCta.connectWallet')}          // "Connect Wallet"
```

## Script Cepat untuk Update Semua:

Buat file script: `/scripts/translate-all.js`

```javascript
const components = [
  'src/components/landing/ProblemFraming.tsx',
  'src/components/landing/InfrastructureSection.tsx',
  'src/components/landing/DailyArcActivity.tsx',
  'src/components/landing/WhyDifferentSection.tsx',
  'src/components/landing/AboutProofBadge.tsx',
  'src/components/landing/EcosystemTrust.tsx',
  'src/components/landing/FinalCTA.tsx'
];

console.log('Components to translate:');
components.forEach((comp, i) => {
  console.log(`${i + 1}. ${comp}`);
});

console.log('\nSteps:');
console.log('1. Open each file');
console.log('2. Add: import { useTranslation } from "react-i18next"');
console.log('3. Add: const { t } = useTranslation();');
console.log('4. Replace text with t("key")');
console.log('5. Test with language switcher');
```

## Testing Setelah Translate:

1. **Start dev server:**
```bash
npm run dev
```

2. **Test semua bahasa:**
   - Click language switcher di navbar
   - Pilih 🇺🇸 English → semua text harus English
   - Pilih 🇮🇩 Indonesia → semua text harus Indonesia
   - Pilih 🇨🇳 中文 → semua text harus Chinese

3. **Check console untuk missing keys:**
   - Kalau ada error seperti "Missing key: xxx", berarti translation key belum ada di JSON

## Prioritas Order (Dari Penting):

1. ✅ **HeroSection** - SUDAH DONE
2. ✅ **Navbar** - SUDAH DONE
3. 🔥 **ProblemFraming** - NEXT PRIORITAS
4. 🔥 **InfrastructureSection** - NEXT
5. **DailyArcActivity** - Medium
6. **WhyDifferentSection** - Medium
7. **AboutProofBadge** - Medium
8. **EcosystemTrust** - Low
9. **FinalCTA** - Low

## Tips:

1. **Cari text dengan Ctrl+F** di component, lalu cari di JSON file
2. **Copy-paste translation key** dari JSON ke component
3. **Test setiap section** setelah di-edit
4. **Git commit** setelah selesai 1 section untuk backup

## Kalau Ada Missing Translation Key:

Error example: `Missing key: problem.badge`

Solution:
1. Check JSON file apakah key ada
2. Kalau tidak, tambahkan ke semua 3 files (en.json, id.json, zh.json)
3. Restart dev server

## Complete Translation Check:

Setelah selesai, cek:
- [ ] Hero section - 100% translated
- [ ] Problem section - 100% translated
- [ ] Infrastructure section - 100% translated
- [ ] Daily Activity - 100% translated
- [ ] Why Different - 100% translated
- [ ] About Proof - 100% translated
- [ ] Ecosystem - 100% translated
- [ ] Final CTA - 100% translated
- [ ] Navbar - 100% translated
- [ ] Footer - 100% translated (kalau ada)

Kalau semua checklist done = 🎉 100% Multi-language Support!
