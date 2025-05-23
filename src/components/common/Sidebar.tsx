import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useAuth } from '../../contexts/AuthContext';
import { UserRole } from '../../types';
import {
  LayoutDashboard,
  Calendar,
  FileText,
  Users,
  User,
  Building2,
  CreditCard,
  Settings,
  MessageSquare,
  X,
  Headphones,
  Activity,
  PlusCircle,
  Bot,
  Clock,
  LineChart
} from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  const { t } = useTranslation();
  const location = useLocation();
  const { currentUser } = useAuth();
  
  const isActive = (path: string) => location.pathname === path;

  const navItems = [
    { 
      label: t('dashboard'), 
      path: '/dashboard', 
      icon: <LayoutDashboard size={20} />,
      roles: [UserRole.Admin, UserRole.Doctor, UserRole.Patient]
    },
    { 
      label: t('appointments'), 
      path: '/appointments', 
      icon: <Calendar size={20} />,
      roles: [UserRole.Admin, UserRole.Doctor, UserRole.Patient]
    },
    { 
      label: t('medical_records'), 
      path: '/medical-records', 
      icon: <FileText size={20} />,
      roles: [UserRole.Admin, UserRole.Doctor, UserRole.Patient]
    },
    { 
      label: t('patients'), 
      path: '/patients', 
      icon: <Users size={20} />,
      roles: [UserRole.Admin, UserRole.Doctor]
    },
    { 
      label: t('doctors'), 
      path: '/doctors', 
      icon: <User size={20} />,
      roles: [UserRole.Admin]
    },
    { 
      label: t('departments'), 
      path: '/departments', 
      icon: <Building2 size={20} />,
      roles: [UserRole.Admin]
    },
    { 
      label: t('billing'), 
      path: '/billing', 
      icon: <CreditCard size={20} />,
      roles: [UserRole.Admin, UserRole.Patient]
    },
    { 
      label: t('analytics'), 
      path: '/analytics', 
      icon: <LineChart size={20} />,
      roles: [UserRole.Admin, UserRole.Doctor]
    },
    { 
      label: t('chatbot'), 
      path: '/chatbot', 
      icon: <Bot size={20} />,
      roles: [UserRole.Admin, UserRole.Doctor, UserRole.Patient]
    },
    { 
      label: t('telemedicine'), 
      path: '/telemedicine', 
      icon: <Headphones size={20} />,
      roles: [UserRole.Admin, UserRole.Doctor, UserRole.Patient]
    },
    { 
      label: t('queue_management'), 
      path: '/queue', 
      icon: <Clock size={20} />,
      roles: [UserRole.Admin, UserRole.Doctor, UserRole.Patient]
    },
    { 
      label: t('messages'), 
      path: '/messages', 
      icon: <MessageSquare size={20} />,
      roles: [UserRole.Admin, UserRole.Doctor, UserRole.Patient]
    },
    { 
      label: t('settings'), 
      path: '/settings', 
      icon: <Settings size={20} />,
      roles: [UserRole.Admin, UserRole.Doctor, UserRole.Patient]
    },
  ];
  
  // Filter navigation items based on user role
  const filteredNavItems = navItems.filter(item => 
    !currentUser?.role || item.roles.includes(currentUser.role)
  );

  return (
    <>
      {/* Backdrop for mobile */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-neutral-900 bg-opacity-50 z-30 lg:hidden"
          onClick={onClose}
        ></div>
      )}
      
      {/* Sidebar */}
      <aside 
        className={`fixed top-0 left-0 bottom-0 w-64 bg-white shadow-md z-40 transition-transform transform pt-16 lg:translate-x-0 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } lg:z-20`}
      >
        <div className="h-full flex flex-col">
          <div className="p-4 flex items-center justify-between lg:hidden">
            <span className="font-semibold text-neutral-800">{t('app_name')}</span>
            <button 
              onClick={onClose}
              className="p-2 rounded-md text-neutral-500 hover:text-neutral-700 hover:bg-neutral-100"
              aria-label="Close sidebar"
            >
              <X size={20} />
            </button>
          </div>
          
          <div className="flex-1 overflow-y-auto py-4">
            <nav className="px-2 space-y-1">
              {filteredNavItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  onClick={() => onClose()}
                  className={({ isActive }) =>
                    `flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                      isActive
                        ? 'bg-primary-50 text-primary-700'
                        : 'text-neutral-600 hover:bg-neutral-100 hover:text-neutral-900'
                    }`
                  }
                >
                  <span className="mr-3">{item.icon}</span>
                  {item.label}
                </NavLink>
              ))}
            </nav>
          </div>
          
          <div className="p-4 border-t border-neutral-200">
            <div className="bg-primary-50 rounded-lg p-4 text-center">
              <div className="mb-2 mx-auto w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center text-primary-600">
                <PlusCircle size={24} />
              </div>
              <h3 className="text-sm font-medium text-primary-800 mb-1">{t('need_help')}</h3>
              <p className="text-xs text-primary-600 mb-3">{t('contact_support')}</p>
              <button className="w-full py-1.5 px-3 bg-primary-600 hover:bg-primary-700 text-white text-xs font-medium rounded transition-colors">
                {t('contact_us')}
              </button>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;