import { useTranslation } from 'react-i18next';
import { Languages, Check } from 'lucide-react';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const languages = [
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'id', name: 'Indonesia', flag: '🇮🇩' },
    { code: 'zh', name: '中文', flag: '🇨🇳' }
  ];

  const currentLang = i18n.language;

  return (
    <div className="relative group">
      <button className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg hover:bg-white/20 transition-all">
        <Languages className="w-4 h-4 text-white" />
        <span className="text-sm font-mono text-white">
          {languages.find(l => l.code === currentLang)?.flag || '🌐'}
        </span>
      </button>

      {/* Dropdown Menu */}
      <div className="absolute top-full right-0 mt-2 w-48 bg-white border-2 border-[#E5E5E0] rounded-xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
        <div className="p-2">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => i18n.changeLanguage(lang.code)}
              className="w-full flex items-center justify-between gap-3 px-3 py-2 rounded-lg hover:bg-[#3B82F6]/10 transition-all"
            >
              <div className="flex items-center gap-2">
                <span className="text-lg">{lang.flag}</span>
                <span className="text-sm font-medium text-[#1A1A1A]">{lang.name}</span>
              </div>
              {currentLang === lang.code && (
                <Check className="w-4 h-4 text-[#3B82F6]" />
              )}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LanguageSwitcher;
