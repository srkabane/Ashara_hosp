import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useAuth } from '../contexts/AuthContext';
import { UserRole } from '../types';
import {
  Calendar,
  Clock,
  User,
  Search,
  Filter,
  Plus,
  ChevronLeft,
  ChevronRight,
  MoreVertical,
  Video,
  MapPin,
  AlertCircle
} from 'lucide-react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

const Appointments: React.FC = () => {
  const { t } = useTranslation();
  const { currentUser } = useAuth();
  const { id } = useParams();
  const navigate = useNavigate();
  
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());
  const [searchQuery, setSearchQuery] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const [showFilters, setShowFilters] = useState(false);

  // Sample appointments data
  const appointments = [
    {
      id: '1',
      patientName: 'John Doe',
      doctorName: 'Dr. Sarah Johnson',
      department: 'Cardiology',
      date: new Date(),
      time: '10:30 AM',
      type: 'in-person',
      status: 'confirmed',
      reason: 'Regular checkup',
    },
    {
      id: '2',
      patientName: 'Jane Smith',
      doctorName: 'Dr. Michael Lee',
      department: 'General Medicine',
      date: new Date(),
      time: '2:00 PM',
      type: 'telemedicine',
      status: 'scheduled',
      reason: 'Follow-up consultation',
    },
  ];

  const handleNewAppointment = () => {
    navigate('/appointments/new');
  };

  const handleAppointmentClick = (appointmentId: string) => {
    navigate(`/appointments/${appointmentId}`);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'confirmed':
        return 'bg-success-100 text-success-800';
      case 'scheduled':
        return 'bg-primary-100 text-primary-800';
      case 'completed':
        return 'bg-neutral-100 text-neutral-800';
      case 'canceled':
        return 'bg-error-100 text-error-800';
      default:
        return 'bg-neutral-100 text-neutral-800';
    }
  };

  return (
    <div className="min-h-full">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-neutral-900 mb-2">
          {t('appointments')}
        </h1>
        <p className="text-neutral-600">
          {t('manage_appointments_description')}
        </p>
      </div>

      {/* Actions Bar */}
      <div className="mb-6 flex flex-col sm:flex-row gap-4">
        <div className="flex-1 flex gap-4">
          {/* Search */}
          <div className="flex-1 relative">
            <input
              type="text"
              placeholder={t('search_appointments')}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
            />
            <Search className="absolute left-3 top-2.5 text-neutral-400" size={20} />
          </div>

          {/* Filter Button */}
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="px-4 py-2 border border-neutral-300 rounded-lg text-neutral-700 hover:bg-neutral-50 flex items-center gap-2"
          >
            <Filter size={20} />
            <span className="hidden sm:inline">{t('filter')}</span>
          </button>

          {/* Date Picker */}
          <div className="relative">
            <DatePicker
              selected={selectedDate}
              onChange={(date) => setSelectedDate(date)}
              dateFormat="MMMM d, yyyy"
              className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
            />
          </div>
        </div>

        {/* New Appointment Button */}
        <button
          onClick={handleNewAppointment}
          className="btn-primary flex items-center gap-2"
        >
          <Plus size={20} />
          {t('new_appointment')}
        </button>
      </div>

      {/* Filters Panel */}
      {showFilters && (
        <div className="mb-6 p-4 bg-white border border-neutral-200 rounded-lg shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-neutral-700 mb-1">
                {t('status')}
              </label>
              <select
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
                className="w-full px-3 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              >
                <option value="all">{t('all_statuses')}</option>
                <option value="scheduled">{t('scheduled')}</option>
                <option value="confirmed">{t('confirmed')}</option>
                <option value="completed">{t('completed')}</option>
                <option value="canceled">{t('canceled')}</option>
              </select>
            </div>
            {/* Add more filters as needed */}
          </div>
        </div>
      )}

      {/* Appointments List */}
      <div className="bg-white rounded-lg border border-neutral-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-neutral-200">
            <thead className="bg-neutral-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">
                  {t('patient')}
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">
                  {t('doctor')}
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">
                  {t('date_and_time')}
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">
                  {t('type')}
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">
                  {t('status')}
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">
                  {t('actions')}
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-neutral-200">
              {appointments.map((appointment) => (
                <tr
                  key={appointment.id}
                  className="hover:bg-neutral-50 cursor-pointer"
                  onClick={() => handleAppointmentClick(appointment.id)}
                >
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="h-10 w-10 rounded-full bg-neutral-100 flex items-center justify-center text-neutral-500">
                        <User size={20} />
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-neutral-900">
                          {appointment.patientName}
                        </div>
                        <div className="text-sm text-neutral-500">
                          {appointment.department}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-neutral-900">{appointment.doctorName}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-neutral-900">
                      {appointment.date.toLocaleDateString()}
                    </div>
                    <div className="text-sm text-neutral-500">{appointment.time}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      {appointment.type === 'telemedicine' ? (
                        <Video size={16} className="text-primary-500 mr-1" />
                      ) : (
                        <MapPin size={16} className="text-neutral-500 mr-1" />
                      )}
                      <span className="text-sm text-neutral-900">
                        {t(appointment.type)}
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(appointment.status)}`}>
                      {t(appointment.status)}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        // Handle more actions
                      }}
                      className="text-neutral-400 hover:text-neutral-600"
                    >
                      <MoreVertical size={20} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Empty State */}
        {appointments.length === 0 && (
          <div className="text-center py-12">
            <div className="mx-auto w-16 h-16 bg-neutral-100 rounded-full flex items-center justify-center text-neutral-400 mb-4">
              <Calendar size={32} />
            </div>
            <h3 className="text-lg font-medium text-neutral-900 mb-2">
              {t('no_appointments')}
            </h3>
            <p className="text-neutral-600 mb-6">
              {t('no_appointments_description')}
            </p>
            <button
              onClick={handleNewAppointment}
              className="btn-primary"
            >
              {t('schedule_appointment')}
            </button>
          </div>
        )}
      </div>

      {/* Pagination */}
      <div className="mt-6 flex items-center justify-between">
        <div className="flex-1 flex justify-between sm:hidden">
          <button className="btn-outline">
            {t('previous')}
          </button>
          <button className="btn-outline">
            {t('next')}
          </button>
        </div>
        <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
          <div>
            <p className="text-sm text-neutral-700">
              {t('showing')} <span className="font-medium">1</span> {t('to')}{' '}
              <span className="font-medium">10</span> {t('of')}{' '}
              <span className="font-medium">20</span> {t('results')}
            </p>
          </div>
          <div>
            <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
              <button className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-neutral-300 bg-white text-sm font-medium text-neutral-500 hover:bg-neutral-50">
                <span className="sr-only">{t('previous')}</span>
                <ChevronLeft size={20} />
              </button>
              <button className="relative inline-flex items-center px-4 py-2 border border-neutral-300 bg-white text-sm font-medium text-neutral-700 hover:bg-neutral-50">
                1
              </button>
              <button className="relative inline-flex items-center px-4 py-2 border border-neutral-300 bg-primary-50 text-sm font-medium text-primary-600">
                2
              </button>
              <button className="relative inline-flex items-center px-4 py-2 border border-neutral-300 bg-white text-sm font-medium text-neutral-700 hover:bg-neutral-50">
                3
              </button>
              <button className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-neutral-300 bg-white text-sm font-medium text-neutral-500 hover:bg-neutral-50">
                <span className="sr-only">{t('next')}</span>
                <ChevronRight size={20} />
              </button>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Appointments;