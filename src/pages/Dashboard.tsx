import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useAuth } from '../contexts/AuthContext';
import { UserRole } from '../types';
import { 
  Calendar, 
  Users, 
  User, 
  CreditCard, 
  Clock, 
  LineChart, 
  ChevronRight, 
  Stethoscope,
  Activity,
  PieChart,
  PlusCircle,
  Headphones,
  Shield,
  Search
} from 'lucide-react';

const Dashboard: React.FC = () => {
  const { t } = useTranslation();
  const { currentUser } = useAuth();
  const [greeting, setGreeting] = useState('');

  useEffect(() => {
    const hour = new Date().getHours();
    if (hour < 12) {
      setGreeting(t('good_morning'));
    } else if (hour < 18) {
      setGreeting(t('good_afternoon'));
    } else {
      setGreeting(t('good_evening'));
    }
  }, [t]);

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-neutral-900 mb-2">
          {greeting}, {currentUser?.displayName?.split(' ')[0] || t('user')}
        </h1>
        <p className="text-neutral-600">
          {t('dashboard_welcome_message')}
        </p>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <Link
          to="/appointments/new"
          className="bg-primary-50 border border-primary-100 rounded-lg p-4 flex items-center transition-colors hover:bg-primary-100"
        >
          <div className="h-12 w-12 rounded-full bg-primary-100 flex items-center justify-center text-primary-600 mr-4">
            <Calendar size={24} />
          </div>
          <div>
            <h3 className="font-medium text-neutral-900">{t('new_appointment')}</h3>
            <p className="text-sm text-neutral-600">{t('schedule_a_visit')}</p>
          </div>
        </Link>
        
        <Link
          to="/medical-records"
          className="bg-secondary-50 border border-secondary-100 rounded-lg p-4 flex items-center transition-colors hover:bg-secondary-100"
        >
          <div className="h-12 w-12 rounded-full bg-secondary-100 flex items-center justify-center text-secondary-600 mr-4">
            <FileText size={24} />
          </div>
          <div>
            <h3 className="font-medium text-neutral-900">{t('medical_records')}</h3>
            <p className="text-sm text-neutral-600">{t('view_your_records')}</p>
          </div>
        </Link>
        
        <Link
          to="/telemedicine"
          className="bg-accent-50 border border-accent-100 rounded-lg p-4 flex items-center transition-colors hover:bg-accent-100"
        >
          <div className="h-12 w-12 rounded-full bg-accent-100 flex items-center justify-center text-accent-600 mr-4">
            <Headphones size={24} />
          </div>
          <div>
            <h3 className="font-medium text-neutral-900">{t('telemedicine')}</h3>
            <p className="text-sm text-neutral-600">{t('virtual_consultation')}</p>
          </div>
        </Link>
        
        <Link
          to="/queue"
          className="bg-success-50 border border-success-100 rounded-lg p-4 flex items-center transition-colors hover:bg-success-100"
        >
          <div className="h-12 w-12 rounded-full bg-success-100 flex items-center justify-center text-success-600 mr-4">
            <Clock size={24} />
          </div>
          <div>
            <h3 className="font-medium text-neutral-900">{t('queue_management')}</h3>
            <p className="text-sm text-neutral-600">{t('check_wait_times')}</p>
          </div>
        </Link>
      </div>

      {/* Main Content - Based on user role */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column - Appointments */}
        <div className="lg:col-span-2 space-y-6">
          {/* Upcoming Appointments */}
          <div className="card">
            <div className="flex items-center justify-between p-6 border-b border-neutral-200">
              <h2 className="text-lg font-semibold text-neutral-900">{t('upcoming_appointments')}</h2>
              <Link to="/appointments" className="text-sm text-primary-600 hover:text-primary-800 flex items-center">
                {t('view_all')} <ChevronRight size={16} className="ml-1" />
              </Link>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                {/* Sample Appointment */}
                <div className="flex items-center p-4 rounded-lg border border-neutral-200 hover:bg-neutral-50 transition-colors">
                  <div className="h-12 w-12 rounded-full bg-primary-100 flex items-center justify-center text-primary-600 mr-4">
                    <Calendar size={24} />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium text-neutral-900">Dr. Sarah Johnson</h3>
                    <p className="text-sm text-neutral-600">Cardiology Appointment</p>
                    <div className="flex items-center mt-1">
                      <span className="text-xs font-medium text-primary-600 bg-primary-50 px-2 py-0.5 rounded mr-2">
                        Tomorrow
                      </span>
                      <span className="text-xs text-neutral-500">10:30 AM</span>
                    </div>
                  </div>
                  <div>
                    <Link
                      to="/appointments/1"
                      className="btn-outline text-sm py-1 px-3"
                    >
                      {t('details')}
                    </Link>
                  </div>
                </div>
                
                {/* Sample Appointment 2 */}
                <div className="flex items-center p-4 rounded-lg border border-neutral-200 hover:bg-neutral-50 transition-colors">
                  <div className="h-12 w-12 rounded-full bg-secondary-100 flex items-center justify-center text-secondary-600 mr-4">
                    <Activity size={24} />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium text-neutral-900">Dr. Michael Lee</h3>
                    <p className="text-sm text-neutral-600">Regular Check-up</p>
                    <div className="flex items-center mt-1">
                      <span className="text-xs font-medium text-neutral-600 bg-neutral-100 px-2 py-0.5 rounded mr-2">
                        Next Week
                      </span>
                      <span className="text-xs text-neutral-500">2:00 PM</span>
                    </div>
                  </div>
                  <div>
                    <Link
                      to="/appointments/2"
                      className="btn-outline text-sm py-1 px-3"
                    >
                      {t('details')}
                    </Link>
                  </div>
                </div>
                
                {/* No appointments placeholder */}
                {false && (
                  <div className="text-center py-8">
                    <div className="mx-auto w-16 h-16 bg-neutral-100 rounded-full flex items-center justify-center text-neutral-400 mb-4">
                      <Calendar size={24} />
                    </div>
                    <h3 className="text-neutral-800 font-medium mb-1">{t('no_upcoming_appointments')}</h3>
                    <p className="text-neutral-600 text-sm mb-4">{t('schedule_appointment_now')}</p>
                    <Link
                      to="/appointments/new"
                      className="btn-primary text-sm py-2 px-4"
                    >
                      {t('new_appointment')}
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
          
          {/* Recent Activity / Medical Records */}
          <div className="card">
            <div className="flex items-center justify-between p-6 border-b border-neutral-200">
              <h2 className="text-lg font-semibold text-neutral-900">{t('recent_medical_activity')}</h2>
              <Link to="/medical-records" className="text-sm text-primary-600 hover:text-primary-800 flex items-center">
                {t('view_all')} <ChevronRight size={16} className="ml-1" />
              </Link>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                {/* Record 1 */}
                <div className="flex items-start p-4 rounded-lg border border-neutral-200 hover:bg-neutral-50 transition-colors">
                  <div className="h-10 w-10 rounded-full bg-accent-100 flex items-center justify-center text-accent-600 mr-4 mt-1">
                    <FileText size={20} />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between">
                      <h3 className="font-medium text-neutral-900">Blood Test Results</h3>
                      <span className="text-xs text-neutral-500">3 days ago</span>
                    </div>
                    <p className="text-sm text-neutral-600 mt-1">Complete blood count (CBC) and lipid panel results uploaded.</p>
                    <div className="mt-2">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-success-100 text-success-800">
                        Normal
                      </span>
                    </div>
                  </div>
                </div>
                
                {/* Record 2 */}
                <div className="flex items-start p-4 rounded-lg border border-neutral-200 hover:bg-neutral-50 transition-colors">
                  <div className="h-10 w-10 rounded-full bg-primary-100 flex items-center justify-center text-primary-600 mr-4 mt-1">
                    <Stethoscope size={20} />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between">
                      <h3 className="font-medium text-neutral-900">Cardiology Consultation</h3>
                      <span className="text-xs text-neutral-500">1 week ago</span>
                    </div>
                    <p className="text-sm text-neutral-600 mt-1">Dr. Johnson's notes from your last cardiology appointment.</p>
                    <div className="mt-2">
                      <Link to="/medical-records/1" className="text-sm text-primary-600 hover:text-primary-800 font-medium">
                        {t('view_details')}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Right Column - Stats & Health Tips */}
        <div className="space-y-6">
          {/* Profile / Health Summary */}
          <div className="card overflow-hidden">
            <div className="bg-gradient-to-r from-primary-600 to-primary-800 p-6 text-white">
              <div className="flex items-center">
                <div className="h-16 w-16 rounded-full bg-white flex items-center justify-center text-primary-600 mr-4 overflow-hidden">
                  {currentUser?.photoURL ? (
                    <img src={currentUser.photoURL} alt={currentUser.displayName} className="h-full w-full object-cover" />
                  ) : (
                    <User size={32} />
                  )}
                </div>
                <div>
                  <h2 className="font-semibold text-xl">{currentUser?.displayName}</h2>
                  <p className="text-primary-100">Patient ID: P-10042</p>
                </div>
              </div>
            </div>
            <div className="p-6 space-y-4">
              {/* Health Stats */}
              <div>
                <h3 className="font-medium text-neutral-900 mb-3">{t('health_summary')}</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-neutral-50 rounded-lg p-3">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs text-neutral-500">Blood Pressure</span>
                      <Activity size={16} className="text-primary-500" />
                    </div>
                    <div className="text-lg font-semibold text-neutral-900">120/80</div>
                    <div className="text-xs text-success-600">Normal</div>
                  </div>
                  <div className="bg-neutral-50 rounded-lg p-3">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs text-neutral-500">Heart Rate</span>
                      <Activity size={16} className="text-primary-500" />
                    </div>
                    <div className="text-lg font-semibold text-neutral-900">72 bpm</div>
                    <div className="text-xs text-success-600">Normal</div>
                  </div>
                  <div className="bg-neutral-50 rounded-lg p-3">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs text-neutral-500">Blood Glucose</span>
                      <Activity size={16} className="text-primary-500" />
                    </div>
                    <div className="text-lg font-semibold text-neutral-900">95 mg/dL</div>
                    <div className="text-xs text-success-600">Normal</div>
                  </div>
                  <div className="bg-neutral-50 rounded-lg p-3">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs text-neutral-500">Weight</span>
                      <Activity size={16} className="text-primary-500" />
                    </div>
                    <div className="text-lg font-semibold text-neutral-900">68 kg</div>
                    <div className="text-xs text-neutral-600">Last updated: 2 weeks ago</div>
                  </div>
                </div>
                <div className="mt-4">
                  <Link
                    to="/profile"
                    className="text-sm text-primary-600 hover:text-primary-800 font-medium flex items-center"
                  >
                    {t('view_complete_profile')} <ChevronRight size={16} className="ml-1" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          
          {/* Health Tips */}
          <div className="card">
            <div className="p-6 border-b border-neutral-200">
              <h2 className="text-lg font-semibold text-neutral-900">{t('daily_health_tip')}</h2>
            </div>
            <div className="p-6">
              <div className="rounded-lg overflow-hidden mb-4">
                <img 
                  src="https://images.pexels.com/photos/1640770/pexels-photo-1640770.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                  alt="Healthy eating" 
                  className="w-full h-40 object-cover"
                />
              </div>
              <h3 className="font-medium text-lg text-neutral-900 mb-2">Boost Your Immune System Naturally</h3>
              <p className="text-neutral-600 text-sm mb-4">
                Incorporate foods rich in vitamin C, like citrus fruits, strawberries, and bell peppers, 
                to naturally strengthen your immune system.
              </p>
              <a 
                href="#" 
                className="text-sm text-primary-600 hover:text-primary-800 font-medium flex items-center"
              >
                {t('read_more')} <ChevronRight size={16} className="ml-1" />
              </a>
            </div>
          </div>
          
          {/* Queue Status - Conditional render for patient role */}
          {currentUser?.role === UserRole.Patient && (
            <div className="card">
              <div className="p-6 border-b border-neutral-200">
                <h2 className="text-lg font-semibold text-neutral-900">{t('queue_status')}</h2>
              </div>
              <div className="p-6 text-center">
                <div className="mb-4">
                  <div className="mx-auto w-16 h-16 rounded-full bg-accent-100 flex items-center justify-center text-accent-600">
                    <Clock size={32} />
                  </div>
                </div>
                <h3 className="font-medium text-neutral-900 mb-1">{t('not_in_queue')}</h3>
                <p className="text-neutral-600 text-sm mb-4">{t('join_queue_message')}</p>
                <Link
                  to="/queue"
                  className="btn-accent"
                >
                  {t('join_queue')}
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;