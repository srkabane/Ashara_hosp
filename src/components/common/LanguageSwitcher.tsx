import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Globe, Check } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';

interface LanguageSwitcherProps {
  compact?: boolean;
}

const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({ compact = false }) => {
  const { i18n, t } = useTranslation();
  const { currentUser, updateUserLanguage } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  
  const languages = [
    { code: 'en', name: 'English' },
    { code: 'es', name: 'Español' },
    { code: 'fr', name: 'Français' },
    { code: 'hi', name: 'हिन्दी' },
    { code: 'zh', name: '中文' },
  ];

  const handleLanguageChange = async (languageCode: string) => {
    i18n.changeLanguage(languageCode);
    setIsOpen(false);
    
    // Update user language preference in Firebase if user is logged in
    if (currentUser) {
      try {
        await updateUserLanguage(languageCode);
      } catch (error) {
        console.error('Error updating language preference:', error);
      }
    }
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center ${
          compact 
            ? 'p-2 rounded-full text-neutral-500 hover:text-primary-600 hover:bg-neutral-100' 
            : 'px-3 py-2 rounded-md text-sm font-medium text-neutral-700 hover:bg-neutral-100'
        }`}
        aria-label="Change language"
      >
        <Globe size={compact ? 20 : 18} className={compact ? '' : 'mr-2'} />
        {!compact && <span>{languages.find(lang => lang.code === i18n.language)?.name || 'English'}</span>}
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg overflow-hidden z-50">
          <div className="py-1">
            {languages.map((language) => (
              <button
                key={language.code}
                onClick={() => handleLanguageChange(language.code)}
                className="flex items-center justify-between w-full px-4 py-2 text-sm text-neutral-700 hover:bg-neutral-100"
              >
                <span>{language.name}</span>
                {i18n.language === language.code && (
                  <Check size={16} className="text-primary-600" />
                )}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;