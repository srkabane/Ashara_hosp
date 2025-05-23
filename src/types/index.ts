// User-related types
export interface User {
  uid: string;
  email: string;
  displayName: string;
  photoURL?: string;
  role: UserRole;
  language?: string;
  phoneNumber?: string;
  createdAt: Date;
}

export enum UserRole {
  Patient = 'patient',
  Doctor = 'doctor',
  Admin = 'admin',
}

// Patient-related types
export interface Patient {
  id: string;
  userId: string;
  firstName: string;
  lastName: string;
  dateOfBirth: Date;
  gender: string;
  bloodType?: string;
  allergies?: string[];
  chronicConditions?: string[];
  emergencyContact?: {
    name: string;
    relationship: string;
    phoneNumber: string;
  };
  address?: {
    street: string;
    city: string;
    state: string;
    zipCode: string;
    country: string;
  };
  insuranceInfo?: {
    provider: string;
    policyNumber: string;
    expiryDate: Date;
  };
}

// Doctor-related types
export interface Doctor {
  id: string;
  userId: string;
  firstName: string;
  lastName: string;
  specialization: string;
  licenseNumber: string;
  qualifications: string[];
  experience: number; // years
  availability?: Availability[];
  department?: string;
  bio?: string;
  consultationFee?: number;
}

export interface Availability {
  day: string;
  startTime: string;
  endTime: string;
}

// Appointment-related types
export interface Appointment {
  id: string;
  patientId: string;
  doctorId: string;
  dateTime: Date;
  status: AppointmentStatus;
  type: AppointmentType;
  reason: string;
  notes?: string;
  followUp?: boolean;
  documents?: DocumentReference[];
  createdAt: Date;
  updatedAt: Date;
}

export enum AppointmentStatus {
  Scheduled = 'scheduled',
  Confirmed = 'confirmed',
  Completed = 'completed',
  Canceled = 'canceled',
  NoShow = 'no-show',
}

export enum AppointmentType {
  InPerson = 'in-person',
  Telemedicine = 'telemedicine',
}

// Medical record types
export interface MedicalRecord {
  id: string;
  patientId: string;
  doctorId: string;
  appointmentId?: string;
  date: Date;
  diagnosis: string;
  symptoms: string[];
  treatment: string;
  medications?: Medication[];
  testResults?: TestResult[];
  notes?: string;
  followUpInstructions?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Medication {
  name: string;
  dosage: string;
  frequency: string;
  duration: string;
  startDate: Date;
  endDate?: Date;
  notes?: string;
}

export interface TestResult {
  id: string;
  patientId: string;
  testName: string;
  testDate: Date;
  resultDate?: Date;
  resultSummary: string;
  status: TestStatus;
  documents?: DocumentReference[];
  notes?: string;
}

export enum TestStatus {
  Ordered = 'ordered',
  Completed = 'completed',
  Pending = 'pending',
}

// Document-related types
export interface DocumentReference {
  id: string;
  name: string;
  type: DocumentType;
  url: string;
  uploadedBy: string;
  uploadedAt: Date;
}

export enum DocumentType {
  Prescription = 'prescription',
  LabReport = 'lab-report',
  XRay = 'x-ray',
  MRI = 'mri',
  CTScan = 'ct-scan',
  DischargeSummary = 'discharge-summary',
  Other = 'other',
}

// Notification types
export interface Notification {
  id: string;
  userId: string;
  title: string;
  message: string;
  type: NotificationType;
  read: boolean;
  link?: string;
  createdAt: Date;
}

export enum NotificationType {
  Appointment = 'appointment',
  MedicalRecord = 'medical-record',
  Prescription = 'prescription',
  TestResult = 'test-result',
  System = 'system',
}

// Chat types
export interface ChatMessage {
  id: string;
  senderId: string;
  receiverId: string;
  content: string;
  timestamp: Date;
  read: boolean;
}

// Department types
export interface Department {
  id: string;
  name: string;
  description?: string;
  headDoctorId?: string;
}

// Billing and Invoice types
export interface Invoice {
  id: string;
  patientId: string;
  items: InvoiceItem[];
  totalAmount: number;
  paidAmount: number;
  status: InvoiceStatus;
  dueDate: Date;
  issuedDate: Date;
  notes?: string;
}

export interface InvoiceItem {
  description: string;
  quantity: number;
  unitPrice: number;
  amount: number;
}

export enum InvoiceStatus {
  Draft = 'draft',
  Issued = 'issued',
  Paid = 'paid',
  PartiallyPaid = 'partially-paid',
  Overdue = 'overdue',
  Canceled = 'canceled',
}

// Analytics types
export interface AnalyticsData {
  appointments: {
    total: number;
    completed: number;
    canceled: number;
    byDepartment: Record<string, number>;
    byDoctor: Record<string, number>;
  };
  patients: {
    total: number;
    new: number;
    byGender: Record<string, number>;
    byAge: Record<string, number>;
  };
  revenue: {
    total: number;
    byDepartment: Record<string, number>;
    byService: Record<string, number>;
  };
  occupancy: {
    current: number;
    average: number;
  };
}