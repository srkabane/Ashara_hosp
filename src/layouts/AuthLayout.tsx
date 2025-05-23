import React from 'react';
import { Outlet } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from '../components/common/LanguageSwitcher';
import { Heart, Stethoscope, Activity, PlusCircle, ShieldCheck } from 'lucide-react';

const AuthLayout: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Left side - Authentication Form */}
      <div className="flex-1 flex items-center justify-center p-6 md:p-10">
        <div className="w-full max-w-md">
          <div className="absolute top-4 right-4">
            <LanguageSwitcher />
          </div>
          <Outlet />
        </div>
      </div>
      
      {/* Right side - Decorative Panel */}
      <div className="hidden md:flex md:w-1/2 bg-gradient-to-br from-primary-600 to-primary-800 flex-col items-center justify-center text-white p-10 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-primary-800 opacity-10">
          <div className="absolute inset-0 opacity-30">
            {/* Background pattern */}
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5"/>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
          </div>
        </div>

        {/* Floating medical icons */}
        <div className="absolute top-1/4 left-1/4 animate-float">
          <Heart size={40} className="text-white opacity-70" />
        </div>
        <div className="absolute bottom-1/3 right-1/4 animate-float" style={{ animationDelay: '1s' }}>
          <Stethoscope size={48} className="text-white opacity-70" />
        </div>
        <div className="absolute top-1/3 right-1/5 animate-float" style={{ animationDelay: '1.5s' }}>
          <Activity size={36} className="text-white opacity-70" />
        </div>
        <div className="absolute bottom-1/4 left-1/3 animate-float" style={{ animationDelay: '2s' }}>
          <PlusCircle size={32} className="text-white opacity-70" />
        </div>
        <div className="absolute top-2/3 right-1/3 animate-float" style={{ animationDelay: '2.5s' }}>
          <ShieldCheck size={44} className="text-white opacity-70" />
        </div>

        <div className="z-10 text-center max-w-md">
          <h1 className="text-3xl font-bold mb-6">{t('app_name')}</h1>
          <p className="text-xl mb-8">{t('hero_subtitle')}</p>
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3 bg-white/10 p-4 rounded-lg backdrop-blur-sm">
              <div className="p-2 bg-white/20 rounded-full">
                <ShieldCheck size={24} />
              </div>
              <div className="text-left">
                <h3 className="font-medium">HIPAA Compliant</h3>
                <p className="text-sm opacity-80">Your data is secure and protected</p>
              </div>
            </div>
            <div className="flex items-center gap-3 bg-white/10 p-4 rounded-lg backdrop-blur-sm">
              <div className="p-2 bg-white/20 rounded-full">
                <PlusCircle size={24} />
              </div>
              <div className="text-left">
                <h3 className="font-medium">Paperless Healthcare</h3>
                <p className="text-sm opacity-80">Modern digital patient management</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;