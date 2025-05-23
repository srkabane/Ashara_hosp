import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useAuth } from '../../contexts/AuthContext';
import { Bell, Menu, X, User, Settings, LogOut, MessageSquare } from 'lucide-react';
import LanguageSwitcher from './LanguageSwitcher';

interface HeaderProps {
  onMenuToggle: () => void;
}

const Header: React.FC<HeaderProps> = ({ onMenuToggle }) => {
  const { t } = useTranslation();
  const { currentUser, signOut } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const [notificationsOpen, setNotificationsOpen] = useState(false);

  const handleSignOut = async () => {
    try {
      await signOut();
      navigate('/login');
    } catch (error) {
      console.error('Failed to sign out', error);
    }
  };

  const toggleUserMenu = () => {
    setUserMenuOpen(!userMenuOpen);
    if (notificationsOpen) setNotificationsOpen(false);
  };

  const toggleNotifications = () => {
    setNotificationsOpen(!notificationsOpen);
    if (userMenuOpen) setUserMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-sm z-30">
      <div className="flex items-center justify-between h-16 px-4 md:px-6">
        <div className="flex items-center">
          <button
            onClick={onMenuToggle}
            className="p-2 rounded-md text-neutral-500 hover:text-primary-600 hover:bg-neutral-100 lg:hidden"
            aria-label="Toggle menu"
          >
            <Menu size={24} />
          </button>
          
          <Link to="/dashboard" className="flex items-center ml-2 lg:ml-0">
            <div className="flex items-center justify-center w-10 h-10 rounded-md bg-primary-600 text-white mr-2">
              <span className="font-semibold text-lg">M</span>
            </div>
            <span className="font-bold text-lg text-primary-800 hidden md:block">
              {t('app_name')}
            </span>
          </Link>
        </div>

        <div className="flex items-center space-x-3">
          <LanguageSwitcher compact />
          
          {/* Notifications */}
          <div className="relative">
            <button
              onClick={toggleNotifications}
              className="p-2 rounded-full text-neutral-500 hover:text-primary-600 hover:bg-neutral-100 relative"
              aria-label="Notifications"
            >
              <Bell size={20} />
              <span className="absolute top-0 right-0 w-2 h-2 bg-accent-500 rounded-full"></span>
            </button>
            
            {notificationsOpen && (
              <div className="absolute right-0 mt-2 w-80 bg-white rounded-md shadow-lg overflow-hidden z-40">
                <div className="px-4 py-3 border-b border-neutral-200 flex justify-between items-center">
                  <h3 className="font-medium">{t('notifications')}</h3>
                  <button className="text-xs text-primary-600 hover:text-primary-800">
                    {t('mark_all_as_read')}
                  </button>
                </div>
                <div className="max-h-96 overflow-y-auto">
                  <div className="p-4 border-b border-neutral-200 hover:bg-neutral-50">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 h-8 w-8 rounded-full bg-primary-100 flex items-center justify-center text-primary-600">
                        <Bell size={16} />
                      </div>
                      <div className="ml-3">
                        <p className="text-sm font-medium text-neutral-900">Appointment reminder</p>
                        <p className="text-xs text-neutral-500">Your appointment with Dr. Smith is tomorrow at 10:00 AM</p>
                        <p className="text-xs text-neutral-400 mt-1">5 minutes ago</p>
                      </div>
                    </div>
                  </div>
                  <div className="p-4 border-b border-neutral-200 hover:bg-neutral-50">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 h-8 w-8 rounded-full bg-success-100 flex items-center justify-center text-success-600">
                        <MessageSquare size={16} />
                      </div>
                      <div className="ml-3">
                        <p className="text-sm font-medium text-neutral-900">New message</p>
                        <p className="text-xs text-neutral-500">Dr. Johnson sent you a message regarding your test results</p>
                        <p className="text-xs text-neutral-400 mt-1">1 hour ago</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="px-4 py-2 bg-neutral-50 text-center">
                  <Link to="/notifications" className="text-sm text-primary-600 hover:text-primary-800">
                    {t('view_all')}
                  </Link>
                </div>
              </div>
            )}
          </div>
          
          {/* User menu */}
          <div className="relative">
            <button
              onClick={toggleUserMenu}
              className="flex items-center space-x-2 p-1 rounded-full hover:bg-neutral-100 transition"
              aria-label="User menu"
            >
              <div className="h-8 w-8 rounded-full bg-primary-100 flex items-center justify-center text-primary-700 overflow-hidden">
                {currentUser?.photoURL ? (
                  <img src={currentUser.photoURL} alt={currentUser.displayName} className="h-full w-full object-cover" />
                ) : (
                  <User size={18} />
                )}
              </div>
              <span className="text-sm font-medium text-neutral-800 hidden md:block">
                {currentUser?.displayName || 'User'}
              </span>
            </button>
            
            {userMenuOpen && (
              <div className="absolute right-0 mt-2 w-56 bg-white rounded-md shadow-lg overflow-hidden z-40">
                <div className="px-4 py-3 border-b border-neutral-200">
                  <p className="text-sm font-medium text-neutral-900">{currentUser?.displayName}</p>
                  <p className="text-xs text-neutral-500 mt-1">{currentUser?.email}</p>
                </div>
                <div className="py-1">
                  <Link
                    to="/profile"
                    className="flex items-center px-4 py-2 text-sm text-neutral-700 hover:bg-neutral-100"
                    onClick={() => setUserMenuOpen(false)}
                  >
                    <User size={16} className="mr-3 text-neutral-400" />
                    {t('profile')}
                  </Link>
                  <Link
                    to="/settings"
                    className="flex items-center px-4 py-2 text-sm text-neutral-700 hover:bg-neutral-100"
                    onClick={() => setUserMenuOpen(false)}
                  >
                    <Settings size={16} className="mr-3 text-neutral-400" />
                    {t('settings')}
                  </Link>
                </div>
                <div className="py-1 border-t border-neutral-200">
                  <button
                    onClick={handleSignOut}
                    className="flex w-full items-center px-4 py-2 text-sm text-neutral-700 hover:bg-neutral-100"
                  >
                    <LogOut size={16} className="mr-3 text-neutral-400" />
                    {t('sign_out')}
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;