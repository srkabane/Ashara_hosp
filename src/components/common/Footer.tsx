import React from 'react';
import { useTranslation } from 'react-i18next';

const Footer: React.FC = () => {
  const { t } = useTranslation();
  
  return (
    <footer className="bg-white border-t border-neutral-200 py-4 px-6">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="text-neutral-500 text-sm mb-3 md:mb-0">
          {t('copyright')}
        </div>
        <div className="flex space-x-6">
          <a href="#" className="text-neutral-500 hover:text-primary-600 text-sm transition-colors">
            {t('privacy_policy')}
          </a>
          <a href="#" className="text-neutral-500 hover:text-primary-600 text-sm transition-colors">
            {t('terms_of_service')}
          </a>
          <a href="#" className="text-neutral-500 hover:text-primary-600 text-sm transition-colors">
            {t('contact_us')}
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;