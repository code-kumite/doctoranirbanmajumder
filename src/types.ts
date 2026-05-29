export type AppRoute =
  | '/'
  | '/about-clinic'
  | '/dr-anirban-majumder'
  | '/services'
  | '/services/diabetes'
  | '/services/thyroid'
  | '/services/obesity'
  | '/services/hormone-disorders'
  | '/programmes/dsme-camp'
  | '/courses'
  | '/research-publications'
  | '/contact';

export interface ServiceDetail {
  id: string;
  title: string;
  route: AppRoute;
  shortDesc: string;
  longDesc: string;
  iconName: string;
  focusPoints: string[];
  faqs: { question: string; answer: string }[];
}

export interface DoctorCredential {
  degree: string;
  institution: string;
  year?: string;
  details?: string;
}

export interface Publication {
  title: string;
  authors: string;
  journal: string;
  year: number;
  doi?: string;
  summary: string;
}

export interface CourseDetail {
  title: string;
  acronym?: string;
  targetAudience: string;
  duration?: string;
  collaboration: string;
  keyFeatures: string[];
}

export interface AppointmentRequest {
  id: string;
  patientName: string;
  phone: string;
  email: string;
  preferredDate: string;
  concern: string;
  consent: boolean;
  status: 'pending' | 'confirmed';
  createdAt: string;
}
