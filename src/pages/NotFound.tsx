import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { AlertCircle, Home, ArrowLeft } from 'lucide-react';

const NotFound: React.FC = () => {
  const { t } = useTranslation();
  
  return (
    <div className="min-h-screen bg-neutral-50 flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        <div className="mb-6">
          <div className="mx-auto w-20 h-20 rounded-full bg-primary-100 flex items-center justify-center text-primary-600">
            <AlertCircle size={40} />
          </div>
        </div>
        <h1 className="text-6xl font-bold text-neutral-900 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-neutral-800 mb-2">{t('page_not_found')}</h2>
        <p className="text-neutral-600 mb-8">
          {t('page_not_found_message')}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/"
            className="btn-primary flex items-center justify-center"
          >
            <Home size={18} className="mr-2" />
            {t('back_to_home')}
          </Link>
          <button
            onClick={() => window.history.back()}
            className="btn-outline flex items-center justify-center"
          >
            <ArrowLeft size={18} className="mr-2" />
            {t('go_back')}
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;