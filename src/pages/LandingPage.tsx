import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useAuth } from '../contexts/AuthContext';
import { Player } from '@lottiefiles/react-lottie-player';
import LanguageSwitcher from '../components/common/LanguageSwitcher';
import { 
  Calendar, 
  FileText, 
  Users, 
  Shield, 
  MessageSquare, 
  Clock, 
  Award, 
  Stethoscope,
  Activity,
  CheckCircle,
  Headphones,
  Menu,
  X
} from 'lucide-react';

const LandingPage: React.FC = () => {
  const { t } = useTranslation();
  const { currentUser } = useAuth();
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  // If user is already logged in, redirect to dashboard
  useEffect(() => {
    if (currentUser) {
      navigate('/dashboard');
    }
  }, [currentUser, navigate]);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Navigation */}
      <header className="bg-white shadow-sm sticky top-0 z-30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center">
              <div className="flex-shrink-0 flex items-center">
                <div className="h-10 w-10 rounded-md bg-primary-600 flex items-center justify-center text-white">
                  <span className="font-bold text-lg">M</span>
                </div>
                <span className="ml-2 text-xl font-bold text-primary-800">{t('app_name')}</span>
              </div>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-neutral-600 hover:text-primary-600 px-3 py-2 text-sm font-medium">
                {t('features')}
              </a>
              <a href="#testimonials" className="text-neutral-600 hover:text-primary-600 px-3 py-2 text-sm font-medium">
                {t('testimonials')}
              </a>
              <a href="#contact" className="text-neutral-600 hover:text-primary-600 px-3 py-2 text-sm font-medium">
                {t('contact_us')}
              </a>
              <LanguageSwitcher />
              <Link
                to="/login"
                className="bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors"
              >
                {t('sign_in')}
              </Link>
            </nav>
            
            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <LanguageSwitcher compact />
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-neutral-500 hover:text-primary-600 hover:bg-neutral-100 focus:outline-none"
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
        
        {/* Mobile menu */}
        <div className={`md:hidden ${mobileMenuOpen ? 'block' : 'hidden'}`}>
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t border-neutral-200">
            <a
              href="#features"
              className="block px-3 py-2 rounded-md text-base font-medium text-neutral-600 hover:text-primary-600 hover:bg-neutral-100"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t('features')}
            </a>
            <a
              href="#testimonials"
              className="block px-3 py-2 rounded-md text-base font-medium text-neutral-600 hover:text-primary-600 hover:bg-neutral-100"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t('testimonials')}
            </a>
            <a
              href="#contact"
              className="block px-3 py-2 rounded-md text-base font-medium text-neutral-600 hover:text-primary-600 hover:bg-neutral-100"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t('contact_us')}
            </a>
            <Link
              to="/login"
              className="block w-full text-center bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-md text-base font-medium transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t('sign_in')}
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary-50 to-primary-100 py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row items-center justify-between">
              <div className="lg:w-1/2 mb-12 lg:mb-0">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-900 leading-tight mb-6">
                  {t('hero_title')}
                </h1>
                <p className="text-xl md:text-2xl text-neutral-700 mb-8 max-w-xl">
                  {t('hero_subtitle')}
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    to="/login"
                    className="btn-primary text-center py-3 px-6 text-base md:text-lg rounded-lg shadow-md"
                  >
                    {t('get_started')}
                  </Link>
                  <a
                    href="#features"
                    className="btn-outline text-center py-3 px-6 text-base md:text-lg rounded-lg"
                  >
                    {t('learn_more')}
                  </a>
                </div>
                <div className="mt-8 flex items-center space-x-2">
                  <CheckCircle size={20} className="text-success-500" />
                  <span className="text-neutral-700">HIPAA Compliant</span>
                  <span className="mx-2 text-neutral-400">•</span>
                  <CheckCircle size={20} className="text-success-500" />
                  <span className="text-neutral-700">Secure Data</span>
                  <span className="mx-2 text-neutral-400">•</span>
                  <CheckCircle size={20} className="text-success-500" />
                  <span className="text-neutral-700">24/7 Support</span>
                </div>
              </div>
              <div className="lg:w-1/2 flex justify-center lg:justify-end">
                <div className="w-full max-w-md relative">
                  <div className="absolute -top-4 -left-4 w-24 h-24 bg-accent-400 rounded-full opacity-20 animate-pulse"></div>
                  <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-primary-400 rounded-full opacity-20 animate-pulse-slow"></div>
                  <div className="relative z-10 bg-white rounded-2xl shadow-xl overflow-hidden">
                    <img 
                      src="https://images.pexels.com/photos/7089401/pexels-photo-7089401.jpeg" 
                      alt="Hospital dashboard" 
                      className="w-full"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent flex items-end">
                      <div className="p-6 text-white">
                        <h3 className="text-lg font-semibold">Modern Healthcare Dashboard</h3>
                        <p className="text-sm opacity-90">Streamline your hospital operations</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">{t('features')}</h2>
              <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
                Our hospital management system offers a comprehensive suite of features designed to streamline operations and enhance patient care.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Feature 1 */}
              <div className="bg-neutral-50 rounded-xl p-6 border border-neutral-200 hover:border-primary-300 transition-colors hover:shadow-md">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center text-primary-600 mb-4">
                  <Users size={24} />
                </div>
                <h3 className="text-xl font-semibold text-neutral-900 mb-2">Paperless Patient Management</h3>
                <p className="text-neutral-600">
                  Digitize all patient records for easy access and management, eliminating the need for paper-based systems.
                </p>
              </div>
              
              {/* Feature 2 */}
              <div className="bg-neutral-50 rounded-xl p-6 border border-neutral-200 hover:border-primary-300 transition-colors hover:shadow-md">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center text-primary-600 mb-4">
                  <Calendar size={24} />
                </div>
                <h3 className="text-xl font-semibold text-neutral-900 mb-2">Smart Appointment System</h3>
                <p className="text-neutral-600">
                  Intelligent scheduling with automated reminders and queue management to reduce wait times.
                </p>
              </div>
              
              {/* Feature 3 */}
              <div className="bg-neutral-50 rounded-xl p-6 border border-neutral-200 hover:border-primary-300 transition-colors hover:shadow-md">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center text-primary-600 mb-4">
                  <FileText size={24} />
                </div>
                <h3 className="text-xl font-semibold text-neutral-900 mb-2">Electronic Health Records</h3>
                <p className="text-neutral-600">
                  Secure, comprehensive patient health records accessible by authorized medical professionals.
                </p>
              </div>
              
              {/* Feature 4 */}
              <div className="bg-neutral-50 rounded-xl p-6 border border-neutral-200 hover:border-primary-300 transition-colors hover:shadow-md">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center text-primary-600 mb-4">
                  <Shield size={24} />
                </div>
                <h3 className="text-xl font-semibold text-neutral-900 mb-2">HIPAA Compliant Security</h3>
                <p className="text-neutral-600">
                  End-to-end encryption and role-based access control to protect sensitive patient data.
                </p>
              </div>
              
              {/* Feature 5 */}
              <div className="bg-neutral-50 rounded-xl p-6 border border-neutral-200 hover:border-primary-300 transition-colors hover:shadow-md">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center text-primary-600 mb-4">
                  <Headphones size={24} />
                </div>
                <h3 className="text-xl font-semibold text-neutral-900 mb-2">Telemedicine Support</h3>
                <p className="text-neutral-600">
                  Integrated video consultations for remote patient care and follow-up appointments.
                </p>
              </div>
              
              {/* Feature 6 */}
              <div className="bg-neutral-50 rounded-xl p-6 border border-neutral-200 hover:border-primary-300 transition-colors hover:shadow-md">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center text-primary-600 mb-4">
                  <MessageSquare size={24} />
                </div>
                <h3 className="text-xl font-semibold text-neutral-900 mb-2">AI Chatbot Assistant</h3>
                <p className="text-neutral-600">
                  Intelligent virtual assistant to answer patient questions and provide basic guidance.
                </p>
              </div>
            </div>
            
            {/* Feature highlight */}
            <div className="mt-20 bg-gradient-to-r from-primary-600 to-primary-800 rounded-2xl overflow-hidden shadow-xl">
              <div className="flex flex-col lg:flex-row">
                <div className="lg:w-1/2 p-8 md:p-12 text-white">
                  <h3 className="text-2xl md:text-3xl font-bold mb-4">Smart Queue Management</h3>
                  <p className="text-lg mb-6 opacity-90">
                    No more waiting in crowded rooms. Our smart queue system allows patients to:
                  </p>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-start">
                      <CheckCircle size={20} className="text-accent-300 mr-2 mt-1 flex-shrink-0" />
                      <span>Join virtual queues remotely from their mobile device</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle size={20} className="text-accent-300 mr-2 mt-1 flex-shrink-0" />
                      <span>Receive real-time updates on wait times and position</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle size={20} className="text-accent-300 mr-2 mt-1 flex-shrink-0" />
                      <span>Get SMS notifications when it's their turn</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle size={20} className="text-accent-300 mr-2 mt-1 flex-shrink-0" />
                      <span>Schedule appointments at less busy times</span>
                    </li>
                  </ul>
                  <Link
                    to="/login"
                    className="inline-block bg-white text-primary-700 hover:bg-neutral-100 px-6 py-3 rounded-lg font-medium transition-colors"
                  >
                    {t('get_started')}
                  </Link>
                </div>
                <div className="lg:w-1/2 bg-white p-6 flex items-center justify-center">
                  <div className="relative w-full max-w-md">
                    <img 
                      src="https://images.pexels.com/photos/7089389/pexels-photo-7089389.jpeg" 
                      alt="Queue management on smartphone" 
                      className="w-full rounded-lg shadow-md"
                    />
                    <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-lg shadow-lg flex items-center">
                      <Clock size={24} className="text-primary-600 mr-2" />
                      <div>
                        <p className="text-sm font-medium text-neutral-800">Current wait time</p>
                        <p className="text-xl font-bold text-primary-600">15 min</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="py-16 md:py-24 bg-neutral-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">{t('testimonials')}</h2>
              <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
                Hear from healthcare professionals and patients who have transformed their experience with our system.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Testimonial 1 */}
              <div className="bg-white rounded-xl p-6 shadow-md">
                <div className="flex items-center mb-4">
                  <div className="mr-3">
                    <img 
                      src="https://images.pexels.com/photos/5452201/pexels-photo-5452201.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                      alt="Dr. Sarah Johnson" 
                      className="w-14 h-14 rounded-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-neutral-900">Dr. Sarah Johnson</h4>
                    <p className="text-neutral-500">Cardiologist</p>
                  </div>
                </div>
                <p className="text-neutral-700 mb-4">
                  "This system has revolutionized how I manage patient records. I can access medical histories, test results, and previous treatments instantly, allowing me to provide better care."
                </p>
                <div className="flex text-amber-400">
                  <Award size={20} />
                  <Award size={20} />
                  <Award size={20} />
                  <Award size={20} />
                  <Award size={20} />
                </div>
              </div>
              
              {/* Testimonial 2 */}
              <div className="bg-white rounded-xl p-6 shadow-md">
                <div className="flex items-center mb-4">
                  <div className="mr-3">
                    <img 
                      src="https://images.pexels.com/photos/8942991/pexels-photo-8942991.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                      alt="Michael Chen" 
                      className="w-14 h-14 rounded-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-neutral-900">Michael Chen</h4>
                    <p className="text-neutral-500">Patient</p>
                  </div>
                </div>
                <p className="text-neutral-700 mb-4">
                  "The queue management system has been a game-changer. I can join the queue remotely and continue with my day until I receive an SMS notification that it's my turn."
                </p>
                <div className="flex text-amber-400">
                  <Award size={20} />
                  <Award size={20} />
                  <Award size={20} />
                  <Award size={20} />
                  <Award size={20} />
                </div>
              </div>
              
              {/* Testimonial 3 */}
              <div className="bg-white rounded-xl p-6 shadow-md">
                <div className="flex items-center mb-4">
                  <div className="mr-3">
                    <img 
                      src="https://images.pexels.com/photos/7089625/pexels-photo-7089625.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                      alt="Lisa Rodriguez" 
                      className="w-14 h-14 rounded-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-neutral-900">Lisa Rodriguez</h4>
                    <p className="text-neutral-500">Hospital Administrator</p>
                  </div>
                </div>
                <p className="text-neutral-700 mb-4">
                  "Our hospital has seen a 40% reduction in administrative overhead and a significant improvement in patient satisfaction scores since implementing this system."
                </p>
                <div className="flex text-amber-400">
                  <Award size={20} />
                  <Award size={20} />
                  <Award size={20} />
                  <Award size={20} />
                  <Award size={20} />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="contact" className="py-16 md:py-24 bg-primary-900 text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to transform your healthcare facility?</h2>
              <p className="text-xl mb-8 text-primary-100">
                Join thousands of healthcare providers who have modernized their operations with our hospital management system.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/login"
                  className="bg-white text-primary-700 hover:bg-neutral-100 px-8 py-4 rounded-lg font-medium text-lg transition-colors"
                >
                  {t('get_started')}
                </Link>
                <a
                  href="#"
                  className="border border-white text-white hover:bg-white/10 px-8 py-4 rounded-lg font-medium text-lg transition-colors"
                >
                  {t('contact_us')}
                </a>
              </div>
              <p className="mt-8 text-primary-200">
                Have questions? Call us at <span className="font-semibold">1-800-MEDCARE</span>
              </p>
            </div>
          </div>
        </section>

        {/* Partners Section */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-center text-neutral-500 mb-8">Trusted by leading healthcare institutions</p>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 lg:gap-16 opacity-70">
              <div className="flex items-center">
                <Stethoscope size={24} className="text-neutral-400 mr-2" />
                <span className="text-neutral-500 font-semibold">MedTech Inc.</span>
              </div>
              <div className="flex items-center">
                <Activity size={24} className="text-neutral-400 mr-2" />
                <span className="text-neutral-500 font-semibold">HealthPlus</span>
              </div>
              <div className="flex items-center">
                <Shield size={24} className="text-neutral-400 mr-2" />
                <span className="text-neutral-500 font-semibold">CareSolutions</span>
              </div>
              <div className="flex items-center">
                <Users size={24} className="text-neutral-400 mr-2" />
                <span className="text-neutral-500 font-semibold">CityHospital</span>
              </div>
              <div className="flex items-center">
                <Calendar size={24} className="text-neutral-400 mr-2" />
                <span className="text-neutral-500 font-semibold">LifeCare</span>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-neutral-900 text-white py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <div className="h-10 w-10 rounded-md bg-primary-600 flex items-center justify-center text-white">
                  <span className="font-bold text-lg">M</span>
                </div>
                <span className="ml-2 text-xl font-bold">{t('app_name')}</span>
              </div>
              <p className="text-neutral-400 mb-4">
                Modern healthcare management system for hospitals, clinics, and healthcare providers.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-neutral-400 hover:text-white transition-colors">
                  <span className="sr-only">Twitter</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a href="#" className="text-neutral-400 hover:text-white transition-colors">
                  <span className="sr-only">LinkedIn</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
                <a href="#" className="text-neutral-400 hover:text-white transition-colors">
                  <span className="sr-only">Facebook</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-neutral-400 hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="text-neutral-400 hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="text-neutral-400 hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="text-neutral-400 hover:text-white transition-colors">Press</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Resources</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-neutral-400 hover:text-white transition-colors">Documentation</a></li>
                <li><a href="#" className="text-neutral-400 hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="text-neutral-400 hover:text-white transition-colors">Privacy & Terms</a></li>
                <li><a href="#" className="text-neutral-400 hover:text-white transition-colors">HIPAA Compliance</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <ul className="space-y-2">
                <li className="text-neutral-400">123 Healthcare Avenue</li>
                <li className="text-neutral-400">San Francisco, CA 94107</li>
                <li className="text-neutral-400">support@medcare.com</li>
                <li className="text-neutral-400">1-800-MEDCARE</li>
              </ul>
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t border-neutral-800 text-center">
            <p className="text-neutral-500">{t('copyright')}</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;