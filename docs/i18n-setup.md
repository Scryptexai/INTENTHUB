# i18next Internationalization Setup

## Cara Menggunakan

### 1. Di Component React

```tsx
import { useTranslation } from 'react-i18next';

const HeroSection = () => {
  const { t } = useTranslation(); // Hook untuk translate

  return (
    <div>
      <h1>{t('hero.headline')}</h1>
      <p>{t('hero.subheadline')}</p>
      <button>{t('hero.cta')}</button>
    </div>
  );
};
```

### 2. Menambah Bahasa Baru

Hanya buat file JSON baru di `/src/i18n/locales/`:

**Contoh: Tambah bahasa Jepang (`ja.json`):**
```json
{
  "hero": {
    "badge": "参加証明",
    "headline": "ブラインドファーミングをやめる。ARCを正しく使う。",
    "subheadline": "INTENTは、スパム取引ではなく、ARCチームが実際に使用するオンチェーン活動に集中するのに役立ちます。",
    "cta": "毎日のARC活動を開始"
  }
}
```

Lalu update config:
```tsx
// src/i18n/config.ts
import ja from './locales/ja.json';

const resources = {
  en: { translation: en },
  id: { translation: id },
  zh: { translation: zh },
  ja: { translation: ja } // ← Tambah baris ini
};
```

**Selesai!** Tidak perlu ubah satupun baris kode di components.

### 3. Interpolation (Dynamic Values)

```tsx
// JSON
{
  "welcome": "Welcome {{name}}!",
  "items": "You have {{count}} items"
}

// Component
<p>{t('welcome', { name: 'John' })}</p>
// Output: "Welcome John!"

<p>{t('items', { count: 5 })}</p>
// Output: "You have 5 items"
```

### 4. Pluralization

```tsx
// JSON
{
  "item_one": "1 item",
  "item_other": "{{count}} items"
}

// Component
<p>{t('item', { count: 1 })}</p> // "1 item"
<p>{t('item', { count: 5 })}</p> // "5 items"
```

## Keuntungan vs Manual Approach

### ❌ Manual Approach (50 Bahasa)
```
- 50 file components berbeda
- 50,000+ baris kode duplikat
- Update butuh edit 50 file
- Bug = fix di 50 tempat
- Maintenance nightmare
```

### ✅ i18next Approach
```
- 1 file component
- 50 file JSON translation (masing-masing ~100 baris)
- Update = edit 1 file component
- Bug = fix di 1 tempat
- Easy maintenance
```

## Integrasi dengan Translation API

Untuk 50+ bahasa, bisa auto-translate:

```bash
# Install
npm install i18next-http-backend
```

```tsx
// src/i18n/config.ts
import HttpBackend from 'i18next-http-backend';

i18n
  .use(HttpBackend)
  .init({
    backend: {
      loadPath: '/locales/{{lng}}/{{ns}}.json',
      // Auto-translate dari API seperti Google Translate / DeepL
    }
  });
```

Atau pakai services:
- **Locize** (https://locize.com) - $29/month untuk 50 languages
- **Crowdin** (https://crowdin.com) - Gratis untuk open source
- **Phrase** (https://phrase.com) - Enterprise translation management

## Stats

- **100+ languages** supported
- **0.5KB** library size (gzipped)
- **React Native** compatible
- **SSR** ready (Next.js, Remix)

## File Structure

```
src/
├── i18n/
│   ├── config.ts           # Konfigurasi i18next
│   └── locales/
│       ├── en.json         # English
│       ├── id.json         # Indonesia
│       ├── zh.json         # 中文 (Chinese)
│       ├── ja.json         # 日本語 (Japanese) - tinggal tambah
│       ├── ko.json         # 한국어 (Korean) - tinggal tambah
│       ├── es.json         # Español (Spanish) - tinggal tambah
│       └── ...             # 100+ bahasa lainnya
└── components/
    └── HeroSection.tsx     # 1 file untuk SEMUA bahasa
```

## Switch Language

User bisa switch bahasa via:
1. **Language Switcher** di navbar (sudah dibuat)
2. **Auto-detect** dari browser
3. **LocalStorage** (tersimpan otomatis)
4. **URL parameter** (example.com?lng=ja)

## Performance

- **Lazy loading**: Translation files loaded on-demand
- **Caching**: Translations cached di localStorage
- **Tree-shaking**: Unused languages not included in build
- **CDN ready**: Serve translations via CDN

## Conclusion

Dengan i18next:
- ✅ **Scalable**: Tambah 100 bahasa dalam 5 menit
- ✅ **Maintainable**: 1 kode base untuk semua bahasa
- ✅ **Professional**: Industry standard
- ✅ **Future-proof**: Easy expand ke bahasa baru
