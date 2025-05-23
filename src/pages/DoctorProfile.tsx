import React from 'react';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import {
  User,
  Phone,
  Mail,
  Award,
  Calendar,
  Clock,
  Star,
  MessageSquare,
  Video,
  FileText,
  Users
} from 'lucide-react';

const DoctorProfile: React.FC = () => {
  const { t } = useTranslation();
  const { id } = useParams();

  // Sample doctor data
  const doctor = {
    id: '1',
    firstName: 'Sarah',
    lastName: 'Johnson',
    specialization: 'Cardiologist',
    email: 'sarah.johnson@example.com',
    phone: '+1 (555) 123-4567',
    experience: 15,
    education: [
      'MD - Harvard Medical School',
      'Cardiology Residency - Mayo Clinic',
      'Fellowship in Interventional Cardiology - Cleveland Clinic'
    ],
    certifications: [
      'American Board of Internal Medicine',
      'Certification in Cardiovascular Disease'
    ],
    languages: ['English', 'Spanish'],
    rating: 4.8,
    reviewCount: 124,
    availability: [
      { day: 'Monday', hours: '9:00 AM - 5:00 PM' },
      { day: 'Wednesday', hours: '9:00 AM - 5:00 PM' },
      { day: 'Friday', hours: '9:00 AM - 3:00 PM' }
    ],
    stats: {
      patients: 1500,
      experience: 15,
      rating: 4.8,
      reviews: 124
    }
  };

  return (
    <div className="min-h-full">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-neutral-900 mb-2">
          {t('doctor_profile')}
        </h1>
        <p className="text-neutral-600">
          {t('doctor_profile_description')}
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
                    Dr. {`${doctor.firstName} ${doctor.lastName}`}
                  </h2>
                  <p className="text-primary-100">{doctor.specialization}</p>
                </div>
              </div>
              <div className="mt-4 flex items-center">
                <Star size={16} className="text-yellow-400 fill-current" />
                <span className="ml-1 font-medium">{doctor.rating}</span>
                <span className="mx-1 text-primary-200">•</span>
                <span className="text-primary-100">{doctor.reviewCount} reviews</span>
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
                  <span>{doctor.phone}</span>
                </div>
                <div className="flex items-center text-neutral-600">
                  <Mail size={18} className="mr-2" />
                  <span>{doctor.email}</span>
                </div>
              </div>
            </div>

            {/* Availability */}
            <div className="p-6 border-b border-neutral-200">
              <h3 className="text-lg font-medium text-neutral-900 mb-4">
                {t('availability')}
              </h3>
              <div className="space-y-3">
                {doctor.availability.map((schedule, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <span className="text-neutral-600">{schedule.day}</span>
                    <span className="text-neutral-900 font-medium">{schedule.hours}</span>
                  </div>
                ))}
              </div>
              <div className="mt-4 flex gap-2">
                <button className="btn-primary flex-1 flex items-center justify-center gap-2">
                  <Calendar size={18} />
                  {t('book_appointment')}
                </button>
                <button className="btn-outline flex items-center justify-center w-12">
                  <Video size={18} />
                </button>
                <button className="btn-outline flex items-center justify-center w-12">
                  <MessageSquare size={18} />
                </button>
              </div>
            </div>

            {/* Languages */}
            <div className="p-6">
              <h3 className="text-lg font-medium text-neutral-900 mb-4">
                {t('languages')}
              </h3>
              <div className="flex flex-wrap gap-2">
                {doctor.languages.map((language, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-neutral-100 text-neutral-700 rounded-full text-sm"
                  >
                    {language}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Professional Information */}
        <div className="lg:col-span-2 space-y-6">
          {/* Statistics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-white rounded-lg border border-neutral-200 p-4">
              <div className="flex items-center justify-between mb-2">
                <Users size={20} className="text-primary-500" />
                <span className="text-sm text-neutral-500">{t('patients')}</span>
              </div>
              <p className="text-2xl font-semibold text-neutral-900">
                {doctor.stats.patients}+
              </p>
            </div>
            <div className="bg-white rounded-lg border border-neutral-200 p-4">
              <div className="flex items-center justify-between mb-2">
                <Award size={20} className="text-primary-500" />
                <span className="text-sm text-neutral-500">{t('experience')}</span>
              </div>
              <p className="text-2xl font-semibold text-neutral-900">
                {doctor.stats.experience} {t('years')}
              </p>
            </div>
            <div className="bg-white rounded-lg border border-neutral-200 p-4">
              <div className="flex items-center justify-between mb-2">
                <Star size={20} className="text-primary-500" />
                <span className="text-sm text-neutral-500">{t('rating')}</span>
              </div>
              <p className="text-2xl font-semibold text-neutral-900">
                {doctor.stats.rating}
              </p>
            </div>
            <div className="bg-white rounded-lg border border-neutral-200 p-4">
              <div className="flex items-center justify-between mb-2">
                <MessageSquare size={20} className="text-primary-500" />
                <span className="text-sm text-neutral-500">{t('reviews')}</span>
              </div>
              <p className="text-2xl font-semibold text-neutral-900">
                {doctor.stats.reviews}
              </p>
            </div>
          </div>

          {/* Education & Certifications */}
          <div className="bg-white rounded-lg border border-neutral-200 p-6">
            <h3 className="text-lg font-medium text-neutral-900 mb-4">
              {t('education_and_certifications')}
            </h3>
            
            {/* Education */}
            <div className="mb-6">
              <h4 className="text-sm font-medium text-neutral-700 mb-3">
                {t('education')}
              </h4>
              <div className="space-y-4">
                {doctor.education.map((edu, index) => (
                  <div key={index} className="flex items-start">
                    <Award size={18} className="text-primary-500 mr-2 mt-0.5" />
                    <span className="text-neutral-800">{edu}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div>
              <h4 className="text-sm font-medium text-neutral-700 mb-3">
                {t('certifications')}
              </h4>
              <div className="space-y-4">
                {doctor.certifications.map((cert, index) => (
                  
                  <div key={index} className="flex items-start">
                    <Award size={18} className="text-primary-500 mr-2 mt-0.5" />
                    <span className="text-neutral-800">{cert}</span>
                  </div>
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
                  <p className="text-neutral-900 font-medium">Patient Consultation</p>
                  <p className="text-sm text-neutral-600">John Doe - Routine Checkup</p>
                  <p className="text-xs text-neutral-500">Today, 10:30 AM</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="h-8 w-8 rounded-full bg-secondary-100 flex items-center justify-center text-secondary-600 mr-3">
                  <FileText size={16} />
                </div>
                <div>
                  <p className="text-neutral-900 font-medium">Medical Report Updated</p>
                  <p className="text-sm text-neutral-600">Added treatment notes and prescriptions</p>
                  <p className="text-xs text-neutral-500">Today, 9:15 AM</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="h-8 w-8 rounded-full bg-accent-100 flex items-center justify-center text-accent-600 mr-3">
                  <Video size={16} />
                </div>
                <div>
                  <p className="text-neutral-900 font-medium">Telemedicine Session</p>
                  <p className="text-sm text-neutral-600">Follow-up consultation</p>
                  <p className="text-xs text-neutral-500">Yesterday, 3:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorProfile;