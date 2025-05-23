import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useAuth } from '../contexts/AuthContext';
import {
  Search,
  Filter,
  FileText,
  Download,
  MoreVertical,
  Plus,
  Calendar,
  Activity
} from 'lucide-react';

const MedicalRecords: React.FC = () => {
  const { t } = useTranslation();
  const { currentUser } = useAuth();
  const [searchQuery, setSearchQuery] = useState('');
  const [showFilters, setShowFilters] = useState(false);

  // Sample medical records data
  const records = [
    {
      id: '1',
      date: new Date('2024-03-15'),
      type: 'General Checkup',
      doctor: 'Dr. Sarah Johnson',
      diagnosis: 'Seasonal Allergies',
      status: 'completed',
      documents: 2
    },
    {
      id: '2',
      date: new Date('2024-03-10'),
      type: 'Blood Test',
      doctor: 'Dr. Michael Lee',
      diagnosis: 'Normal Results',
      status: 'pending',
      documents: 1
    }
  ];

  return (
    <div className="min-h-full">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-neutral-900 mb-2">
          {t('medical_records')}
        </h1>
        <p className="text-neutral-600">
          {t('medical_records_description')}
        </p>
      </div>

      {/* Actions Bar */}
      <div className="mb-6 flex flex-col sm:flex-row gap-4">
        <div className="flex-1 flex gap-4">
          {/* Search */}
          <div className="flex-1 relative">
            <input
              type="text"
              placeholder={t('search_records')}
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
        </div>

        {/* Add Record Button */}
        <button
          className="btn-primary flex items-center gap-2"
        >
          <Plus size={20} />
          {t('add_record')}
        </button>
      </div>

      {/* Filters Panel */}
      {showFilters && (
        <div className="mb-6 p-4 bg-white border border-neutral-200 rounded-lg shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-neutral-700 mb-1">
                {t('record_type')}
              </label>
              <select
                className="w-full px-3 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              >
                <option value="all">{t('all_types')}</option>
                <option value="checkup">{t('general_checkup')}</option>
                <option value="test">{t('medical_test')}</option>
                <option value="procedure">{t('procedure')}</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-neutral-700 mb-1">
                {t('date_range')}
              </label>
              <select
                className="w-full px-3 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              >
                <option value="all">{t('all_time')}</option>
                <option value="week">{t('last_week')}</option>
                <option value="month">{t('last_month')}</option>
                <option value="year">{t('last_year')}</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-neutral-700 mb-1">
                {t('status')}
              </label>
              <select
                className="w-full px-3 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              >
                <option value="all">{t('all_statuses')}</option>
                <option value="completed">{t('completed')}</option>
                <option value="pending">{t('pending')}</option>
              </select>
            </div>
          </div>
        </div>
      )}

      {/* Records List */}
      <div className="bg-white rounded-lg border border-neutral-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-neutral-200">
            <thead className="bg-neutral-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">
                  {t('date')}
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">
                  {t('type')}
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">
                  {t('doctor')}
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">
                  {t('diagnosis')}
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
              {records.map((record) => (
                <tr
                  key={record.id}
                  className="hover:bg-neutral-50 cursor-pointer"
                >
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-neutral-900">
                      {record.date.toLocaleDateString()}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <FileText size={16} className="text-neutral-500 mr-2" />
                      <span className="text-sm text-neutral-900">{record.type}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-neutral-900">{record.doctor}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-neutral-900">{record.diagnosis}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      record.status === 'completed' 
                        ? 'bg-success-100 text-success-800'
                        : 'bg-warning-100 text-warning-800'
                    }`}>
                      {t(record.status)}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <div className="flex items-center gap-2">
                      <button
                        className="text-neutral-400 hover:text-neutral-600"
                        title={t('download')}
                      >
                        <Download size={20} />
                      </button>
                      <button
                        className="text-neutral-400 hover:text-neutral-600"
                      >
                        <MoreVertical size={20} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Empty State */}
        {records.length === 0 && (
          <div className="text-center py-12">
            <div className="mx-auto w-16 h-16 bg-neutral-100 rounded-full flex items-center justify-center text-neutral-400 mb-4">
              <Activity size={32} />
            </div>
            <h3 className="text-lg font-medium text-neutral-900 mb-2">
              {t('no_records')}
            </h3>
            <p className="text-neutral-600 mb-6">
              {t('no_records_description')}
            </p>
            <button className="btn-primary">
              {t('add_first_record')}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default MedicalRecords;