import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useAuth } from '../contexts/AuthContext';
import {
  Bell,
  Moon,
  Sun,
  Globe,
  Lock,
  Mail,
  Phone,
  Shield,
  Trash2,
  User,
  AlertCircle
} from 'lucide-react';

const Settings: React.FC = () => {
  const { t } = useTranslation();
  const { currentUser } = useAuth();
  
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [smsNotifications, setSmsNotifications] = useState(true);
  const [appointmentReminders, setAppointmentReminders] = useState(true);
  const [medicationReminders, setMedicationReminders] = useState(true);
  const [theme, setTheme] = useState('light');

  return (
    <div className="min-h-full">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-neutral-900 mb-2">
          {t('settings')}
        </h1>
        <p className="text-neutral-600">
          {t('settings_description')}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column - Navigation */}
        <div className="lg:col-span-1">
          <nav className="space-y-1">
            <a
              href="#account"
              className="bg-primary-50 text-primary-700 hover:bg-primary-100 group flex items-center px-3 py-2 text-sm font-medium rounded-md"
            >
              <User className="text-primary-500 group-hover:text-primary-600 flex-shrink-0 -ml-1 mr-3 h-6 w-6" />
              <span className="truncate">{t('account_settings')}</span>
            </a>

            <a
              href="#notifications"
              className="text-neutral-700 hover:bg-neutral-50 group flex items-center px-3 py-2 text-sm font-medium rounded-md"
            >
              <Bell className="text-neutral-400 group-hover:text-neutral-500 flex-shrink-0 -ml-1 mr-3 h-6 w-6" />
              <span className="truncate">{t('notification_settings')}</span>
            </a>

            <a
              href="#privacy"
              className="text-neutral-700 hover:bg-neutral-50 group flex items-center px-3 py-2 text-sm font-medium rounded-md"
            >
              <Shield className="text-neutral-400 group-hover:text-neutral-500 flex-shrink-0 -ml-1 mr-3 h-6 w-6" />
              <span className="truncate">{t('privacy_settings')}</span>
            </a>
          </nav>
        </div>

        {/* Right Column - Settings Forms */}
        <div className="lg:col-span-2 space-y-6">
          {/* Account Settings */}
          <section id="account" className="bg-white shadow-sm rounded-lg divide-y divide-neutral-200">
            <div className="px-4 py-5 sm:p-6">
              <h2 className="text-lg font-medium leading-6 text-neutral-900 mb-4">
                {t('account_settings')}
              </h2>

              <div className="space-y-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-neutral-700">
                    {t('email')}
                  </label>
                  <div className="mt-1 flex rounded-md shadow-sm">
                    <div className="relative flex items-stretch flex-grow">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Mail className="h-5 w-5 text-neutral-400" />
                      </div>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        className="focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 sm:text-sm border-neutral-300 rounded-md"
                        value={currentUser?.email}
                        disabled
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-neutral-700">
                    {t('phone_number')}
                  </label>
                  <div className="mt-1 flex rounded-md shadow-sm">
                    <div className="relative flex items-stretch flex-grow">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Phone className="h-5 w-5 text-neutral-400" />
                      </div>
                      <input
                        type="tel"
                        name="phone"
                        id="phone"
                        className="focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 sm:text-sm border-neutral-300 rounded-md"
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>
                    <button
                      type="button"
                      className="ml-3 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700"
                    >
                      {t('update')}
                    </button>
                  </div>
                </div>

                <div>
                  <label htmlFor="language" className="block text-sm font-medium text-neutral-700">
                    {t('language')}
                  </label>
                  <div className="mt-1 flex rounded-md shadow-sm">
                    <div className="relative flex items-stretch flex-grow">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Globe className="h-5 w-5 text-neutral-400" />
                      </div>
                      <select
                        id="language"
                        name="language"
                        className="focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 sm:text-sm border-neutral-300 rounded-md"
                      >
                        <option value="en">{t('english')}</option>
                        <option value="es">{t('spanish')}</option>
                        <option value="fr">{t('french')}</option>
                        <option value="hi">{t('hindi')}</option>
                        <option value="zh">{t('chinese')}</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Notification Settings */}
          <section id="notifications" className="bg-white shadow-sm rounded-lg divide-y divide-neutral-200">
            <div className="px-4 py-5 sm:p-6">
              <h2 className="text-lg font-medium leading-6 text-neutral-900 mb-4">
                {t('notification_settings')}
              </h2>

              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="email_notifications"
                      name="email_notifications"
                      type="checkbox"
                      checked={emailNotifications}
                      onChange={(e) => setEmailNotifications(e.target.checked)}
                      className="focus:ring-primary-500 h-4 w-4 text-primary-600 border-neutral-300 rounded"
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label htmlFor="email_notifications" className="font-medium text-neutral-700">
                      {t('email_notifications')}
                    </label>
                    <p className="text-neutral-500">{t('email_notifications_description')}</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="sms_notifications"
                      name="sms_notifications"
                      type="checkbox"
                      checked={smsNotifications}
                      onChange={(e) => setSmsNotifications(e.target.checked)}
                      className="focus:ring-primary-500 h-4 w-4 text-primary-600 border-neutral-300 rounded"
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label htmlFor="sms_notifications" className="font-medium text-neutral-700">
                      {t('sms_notifications')}
                    </label>
                    <p className="text-neutral-500">{t('sms_notifications_description')}</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="appointment_reminders"
                      name="appointment_reminders"
                      type="checkbox"
                      checked={appointmentReminders}
                      onChange={(e) => setAppointmentReminders(e.target.checked)}
                      className="focus:ring-primary-500 h-4 w-4 text-primary-600 border-neutral-300 rounded"
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label htmlFor="appointment_reminders" className="font-medium text-neutral-700">
                      {t('appointment_reminders')}
                    </label>
                    <p className="text-neutral-500">{t('appointment_reminders_description')}</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="medication_reminders"
                      name="medication_reminders"
                      type="checkbox"
                      checked={medicationReminders}
                      onChange={(e) => setMedicationReminders(e.target.checked)}
                      className="focus:ring-primary-500 h-4 w-4 text-primary-600 border-neutral-300 rounded"
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label htmlFor="medication_reminders" className="font-medium text-neutral-700">
                      {t('medication_reminders')}
                    </label>
                    <p className="text-neutral-500">{t('medication_reminders_description')}</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Privacy & Security */}
          <section id="privacy" className="bg-white shadow-sm rounded-lg divide-y divide-neutral-200">
            <div className="px-4 py-5 sm:p-6">
              <h2 className="text-lg font-medium leading-6 text-neutral-900 mb-4">
                {t('privacy_settings')}
              </h2>

              <div className="space-y-6">
                <div>
                  <h3 className="text-sm font-medium text-neutral-700 mb-3">
                    {t('change_password')}
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <label htmlFor="current_password" className="sr-only">
                        {t('current_password')}
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <Lock className="h-5 w-5 text-neutral-400" />
                        </div>
                        <input
                          type="password"
                          name="current_password"
                          id="current_password"
                          className="focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 sm:text-sm border-neutral-300 rounded-md"
                          placeholder={t('current_password')}
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="new_password" className="sr-only">
                        {t('new_password')}
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <Lock className="h-5 w-5 text-neutral-400" />
                        </div>
                        <input
                          type="password"
                          name="new_password"
                          id="new_password"
                          className="focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 sm:text-sm border-neutral-300 rounded-md"
                          placeholder={t('new_password')}
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="confirm_password" className="sr-only">
                        {t('confirm_password')}
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <Lock className="h-5 w-5 text-neutral-400" />
                        </div>
                        <input
                          type="password"
                          name="confirm_password"
                          id="confirm_password"
                          className="focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 sm:text-sm border-neutral-300 rounded-md"
                          placeholder={t('confirm_password')}
                        />
                      </div>
                    </div>

                    <button
                      type="button"
                      className="w-full inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
                    >
                      {t('change_password')}
                    </button>
                  </div>
                </div>

                <div className="pt-6">
                  <h3 className="text-sm font-medium text-neutral-700 mb-3">
                    {t('delete_account')}
                  </h3>
                  <div className="rounded-md bg-error-50 p-4">
                    <div className="flex">
                      <div className="flex-shrink-0">
                        <AlertCircle className="h-5 w-5 text-error-400" />
                      </div>
                      <div className="ml-3">
                        <h3 className="text-sm font-medium text-error-800">
                          {t('delete_account_warning')}
                        </h3>
                        <div className="mt-2 text-sm text-error-700">
                          <p>{t('delete_account_description')}</p>
                        </div>
                        <div className="mt-4">
                          <button
                            type="button"
                            className="inline-flex items-center justify-center px-4 py-2 border border-transparent font-medium rounded-md text-error-700 bg-error-100 hover:bg-error-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-error-500 sm:text-sm"
                          >
                            <Trash2 className="h-5 w-5 mr-2" />
                            {t('delete_account')}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Settings;