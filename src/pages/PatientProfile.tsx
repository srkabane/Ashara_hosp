import React from 'react';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import {
  User,
  Phone,
  Mail,
  MapPin,
  Calendar,
  Activity,
  AlertCircle,
  Heart,
  FileText
} from 'lucide-react';

const PatientProfile: React.FC = () => {
  const { t } = useTranslation();
  const { id } = useParams();

  // Sample patient data
  const patient = {
    id: '1',
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@example.com',
    phone: '+1 (555) 123-4567',
    dateOfBirth: new Date('1990-05-15'),
    gender: 'Male',
    bloodType: 'O+',
    address: '123 Healthcare Ave, Medical City, MC 12345',
    emergencyContact: {
      name: 'Jane Doe',
      relationship: 'Spouse',
      phone: '+1 (555) 987-6543'
    },
    allergies: ['Penicillin', 'Peanuts'],
    chronicConditions: ['Hypertension'],
    vitalSigns: {
      bloodPressure: '120/80',
      heartRate: '72',
      temperature: '98.6',
      weight: '70',
      height: '175'
    }
  };

  return (
    <div className="min-h-full">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-neutral-900 mb-2">
          {t('patient_profile')}
        </h1>
        <p className="text-neutral-600">
          {t('patient_profile_description')}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column - Personal Information */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg border border-neutral-200 overflow-hidden">
            {/* Profile Header */}
            <div className="p-6 bg-gradient-to-r from-primary-600 to-primary-800 text-white">
              <div className="flex items-center">
                <div className="h-20 w-20 rounded-full bg-white flex items-center justify-center text-primary-600 mr-4">
                  <User size={40} />
                </div>
                <div>
                  <h2 className="text-xl font-semibold">
                    {`${patient.firstName} ${patient.lastName}`}
                  </h2>
                  <p className="text-primary-100">ID: {patient.id}</p>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="p-6 border-b border-neutral-200">
              <h3 className="text-lg font-medium text-neutral-900 mb-4">
                {t('contact_information')}
              </h3>
              <div className="space-y-3">
                <div className="flex items-center text-neutral-600">
                  <Phone size={18} className="mr-2" />
                  <span>{patient.phone}</span>
                </div>
                <div className="flex items-center text-neutral-600">
                  <Mail size={18} className="mr-2" />
                  <span>{patient.email}</span>
                </div>
                <div className="flex items-center text-neutral-600">
                  <MapPin size={18} className="mr-2" />
                  <span>{patient.address}</span>
                </div>
              </div>
            </div>

            {/* Emergency Contact */}
            <div className="p-6 border-b border-neutral-200">
              <h3 className="text-lg font-medium text-neutral-900 mb-4">
                {t('emergency_contact')}
              </h3>
              <div className="space-y-2">
                <p className="text-neutral-900 font-medium">
                  {patient.emergencyContact.name}
                </p>
                <p className="text-neutral-600">
                  {patient.emergencyContact.relationship}
                </p>
                <p className="text-neutral-600">
                  {patient.emergencyContact.phone}
                </p>
              </div>
            </div>

            {/* Basic Information */}
            <div className="p-6">
              <h3 className="text-lg font-medium text-neutral-900 mb-4">
                {t('basic_information')}
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-neutral-500">{t('date_of_birth')}</p>
                  <p className="text-neutral-900">
                    {patient.dateOfBirth.toLocaleDateString()}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-neutral-500">{t('gender')}</p>
                  <p className="text-neutral-900">{patient.gender}</p>
                </div>
                <div>
                  <p className="text-sm text-neutral-500">{t('blood_type')}</p>
                  <p className="text-neutral-900">{patient.bloodType}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Medical Information */}
        <div className="lg:col-span-2 space-y-6">
          {/* Vital Signs */}
          <div className="bg-white rounded-lg border border-neutral-200 p-6">
            <h3 className="text-lg font-medium text-neutral-900 mb-4">
              {t('vital_signs')}
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <div className="bg-neutral-50 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-neutral-500">{t('blood_pressure')}</span>
                  <Activity size={18} className="text-primary-500" />
                </div>
                <p className="text-xl font-semibold text-neutral-900">
                  {patient.vitalSigns.bloodPressure}
                </p>
                <p className="text-sm text-success-600">{t('normal')}</p>
              </div>
              <div className="bg-neutral-50 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-neutral-500">{t('heart_rate')}</span>
                  <Heart size={18} className="text-primary-500" />
                </div>
                <p className="text-xl font-semibold text-neutral-900">
                  {patient.vitalSigns.heartRate} bpm
                </p>
                <p className="text-sm text-success-600">{t('normal')}</p>
              </div>
              <div className="bg-neutral-50 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-neutral-500">{t('temperature')}</span>
                  <Activity size={18} className="text-primary-500" />
                </div>
                <p className="text-xl font-semibold text-neutral-900">
                  {patient.vitalSigns.temperature}°F
                </p>
                <p className="text-sm text-success-600">{t('normal')}</p>
              </div>
            </div>
          </div>

          {/* Medical Conditions */}
          <div className="bg-white rounded-lg border border-neutral-200 p-6">
            <h3 className="text-lg font-medium text-neutral-900 mb-4">
              {t('medical_conditions')}
            </h3>
            
            {/* Allergies */}
            <div className="mb-6">
              <h4 className="text-sm font-medium text-neutral-700 mb-2">
                {t('allergies')}
              </h4>
              <div className="flex flex-wrap gap-2">
                {patient.allergies.map((allergy, index) => (
                  <span
                    key={index}
                    className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-error-100 text-error-800"
                  >
                    <AlertCircle size={14} className="mr-1" />
                    {allergy}
                  </span>
                ))}
              </div>
            </div>

            {/* Chronic Conditions */}
            <div>
              <h4 className="text-sm font-medium text-neutral-700 mb-2">
                {t('chronic_conditions')}
              </h4>
              <div className="flex flex-wrap gap-2">
                {patient.chronicConditions.map((condition, index) => (
                  <span
                    key={index}
                    className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-warning-100 text-warning-800"
                  >
                    <Activity size={14} className="mr-1" />
                    {condition}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Recent Activity */}
          <div className="bg-white rounded-lg border border-neutral-200 p-6">
            <h3 className="text-lg font-medium text-neutral-900 mb-4">
              {t('recent_activity')}
            </h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="h-8 w-8 rounded-full bg-primary-100 flex items-center justify-center text-primary-600 mr-3">
                  <Calendar size={16} />
                </div>
                <div>
                  <p className="text-neutral-900 font-medium">Cardiology Appointment</p>
                  <p className="text-sm text-neutral-600">With Dr. Sarah Johnson</p>
                  <p className="text-xs text-neutral-500">March 15, 2024</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="h-8 w-8 rounded-full bg-secondary-100 flex items-center justify-center text-secondary-600 mr-3">
                  <FileText size={16} />
                </div>
                <div>
                  <p className="text-neutral-900 font-medium">Blood Test Results</p>
                  <p className="text-sm text-neutral-600">Complete Blood Count</p>
                  <p className="text-xs text-neutral-500">March 10, 2024</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientProfile;