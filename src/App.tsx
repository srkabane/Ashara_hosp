import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useAuth } from './contexts/AuthContext';

// Pages
import LandingPage from './pages/LandingPage';
import Dashboard from './pages/Dashboard';
import Appointments from './pages/Appointments';
import MedicalRecords from './pages/MedicalRecords';
import PatientProfile from './pages/PatientProfile';
import DoctorProfile from './pages/DoctorProfile';
import Login from './pages/Login';
import Settings from './pages/Settings';
import NotFound from './pages/NotFound';

// Layouts
import MainLayout from './layouts/MainLayout';
import AuthLayout from './layouts/AuthLayout';

// Guards
import PrivateRoute from './components/auth/PrivateRoute';

// Initialize i18n
import './i18n/i18n';

function App() {
  const { currentUser } = useAuth();
  const { i18n } = useTranslation();

  // Set language based on user preference
  useEffect(() => {
    if (currentUser?.language) {
      i18n.changeLanguage(currentUser.language);
    }
  }, [currentUser, i18n]);

  return (
    <Router>
      <Routes>
        {/* Public routes */}
        <Route path="/" element={<LandingPage />} />
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<Login />} />
        </Route>

        {/* Protected routes */}
        <Route element={<PrivateRoute><MainLayout /></PrivateRoute>}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/appointments" element={<Appointments />} />
          <Route path="/appointments/:id" element={<Appointments />} />
          <Route path="/medical-records" element={<MedicalRecords />} />
          <Route path="/medical-records/:id" element={<MedicalRecords />} />
          <Route path="/patient/:id" element={<PatientProfile />} />
          <Route path="/doctor/:id" element={<DoctorProfile />} />
          <Route path="/settings" element={<Settings />} />
        </Route>

        {/* 404 Not Found */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;