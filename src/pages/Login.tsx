import React, { useState } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useAuth } from '../contexts/AuthContext';
import { AlertCircle } from 'lucide-react';

interface LocationState {
  from?: {
    pathname: string;
  };
}

const Login: React.FC = () => {
  const { t } = useTranslation();
  const { signInWithGoogle } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  
  const from = (location.state as LocationState)?.from?.pathname || '/dashboard';

  const handleGoogleSignIn = async () => {
    try {
      setIsLoading(true);
      setError(null);
      await signInWithGoogle();
      navigate(from, { replace: true });
    } catch (error) {
      console.error('Login error:', error);
      setError(t('login_failed'));
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full max-w-md">
      <div className="text-center mb-8">
        <h1 className="text-2xl font-bold text-neutral-900 mb-2">{t('welcome_to_medcare')}</h1>
        <p className="text-neutral-600">{t('sign_in_to_continue')}</p>
      </div>
      
      {error && (
        <div className="mb-6 p-4 bg-error-50 border border-error-200 rounded-md flex items-start">
          <AlertCircle size={20} className="text-error-500 mr-2 flex-shrink-0 mt-0.5" />
          <p className="text-error-700 text-sm">{error}</p>
        </div>
      )}
      
      <button
        onClick={handleGoogleSignIn}
        disabled={isLoading}
        className="w-full flex items-center justify-center py-3 px-4 border border-neutral-300 rounded-md shadow-sm bg-white hover:bg-neutral-50 transition-colors mb-4 relative"
      >
        <svg className="h-5 w-5 mr-2" viewBox="0 0 24 24">
          <path
            d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
            fill="#4285F4"
          />
          <path
            d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
            fill="#34A853"
          />
          <path
            d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
            fill="#FBBC05"
          />
          <path
            d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
            fill="#EA4335"
          />
          <path d="M1 1h22v22H1z" fill="none" />
        </svg>
        {isLoading ? t('signing_in') : t('sign_in_with_google')}
        {isLoading && (
          <div className="absolute right-4">
            <div className="animate-spin rounded-full h-4 w-4 border-t-2 border-b-2 border-primary-600"></div>
          </div>
        )}
      </button>
      
      <div className="mt-8 text-center">
        <p className="text-sm text-neutral-600">
          {t('dont_have_account')} <Link to="/register" className="text-primary-600 hover:text-primary-800 font-medium">{t('create_account')}</Link>
        </p>
      </div>
      
      <div className="mt-12">
        <p className="text-xs text-neutral-500 text-center">
          {t('by_signing_in_you_agree')} <a href="#" className="text-primary-600 hover:text-primary-800">{t('terms_of_service')}</a> {t('and')} <a href="#" className="text-primary-600 hover:text-primary-800">{t('privacy_policy')}</a>
        </p>
      </div>
    </div>
  );
};

export default Login;