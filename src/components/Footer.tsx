import { MapPin, Phone, Mail, Clock, ArrowRight } from 'lucide-react';
import { CLINIC_INFO, SERVICES } from '../data';
import { AppRoute } from '../types';

interface FooterProps {
  onNavigate: (route: AppRoute) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const handleLinkClick = (route: AppRoute) => {
    onNavigate(route);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-surface-primary/95 text-slate-400 border-t border-brand-400/40 pt-16 pb-8 backdrop-blur-md relative z-10" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">Footer</h2>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 mb-12">
          
          {/* Column 1: Brand & Snapshot */}
          <div className="space-y-4">
            <h3 className="text-gradient-violet-fuchsia text-lg font-serif font-bold tracking-tight">
              {CLINIC_INFO.name}
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Led by {CLINIC_INFO.doctorName}, we offer evidence-based clinical diagnosis, lipid profiling, endocrine hormone balancing, and patient diabetes education campaigns in Dhakuria, Kolkata.
            </p>
            <div className="pt-3">
              <span className="inline-block text-[10px] uppercase font-semibold text-brand-800 tracking-wider">
                Doctor Credentials
              </span>
              <p className="text-[11px] text-slate-400 font-mono mt-1">
                MBBS, MD (Gen Med), DM (Endo), FICP, FACE, FRCP (London)
              </p>
            </div>
          </div>

          {/* Column 2: Clinical Care areas */}
          <div className="space-y-4">
            <h3 className="text-brand-800 text-sm font-semibold uppercase tracking-wider">
              Specialist Services
            </h3>
            <ul className="space-y-2 text-xs">
              {SERVICES.map((s) => (
                <li key={s.id}>
                  <button
                    onClick={() => handleLinkClick(s.route)}
                    className="text-slate-400 hover:text-white transition duration-150 flex items-center gap-1.5 cursor-pointer text-left hover:underline"
                  >
                    <ArrowRight className="w-3.5 h-3.5 text-brand-800 shrink-0" />
                    {s.title}
                  </button>
                </li>
              ))}
              <li>
                <button
                  onClick={() => handleLinkClick('/programmes/dsme-camp')}
                  className="text-slate-400 hover:text-white transition duration-150 flex items-center gap-1.5 cursor-pointer hover:underline"
                >
                  <ArrowRight className="w-3.5 h-3.5 text-brand-800 shrink-0" />
                  DSME Camp Programme
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Navigation Quick Links */}
          <div className="space-y-4">
            <h3 className="text-brand-800 text-sm font-semibold uppercase tracking-wider">
              Quick Resources
            </h3>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => handleLinkClick('/')} className="text-slate-400 hover:text-white transition duration-150 cursor-pointer hover:underline">
                  Clinic Homepage
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick('/dr-anirban-majumder')} className="text-slate-400 hover:text-white transition duration-150 cursor-pointer hover:underline">
                  Doctor bio & Credentials
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick('/about-clinic')} className="text-slate-400 hover:text-white transition duration-150 cursor-pointer hover:underline">
                  Clinic Mission & Team
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick('/courses')} className="text-slate-400 hover:text-white transition duration-150 cursor-pointer hover:underline">
                  Professional Courses
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick('/research-publications')} className="text-slate-400 hover:text-white transition duration-150 cursor-pointer hover:underline">
                  Selected Research Work
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick('/contact')} className="text-slate-400 hover:text-white transition duration-150 cursor-pointer hover:underline">
                  Appointment & Directions
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Location & Direct Contact */}
          <div className="space-y-4">
            <h3 className="text-brand-800 text-sm font-semibold uppercase tracking-wider">
              Clinic Location
            </h3>
            <div className="space-y-3.5 text-xs text-slate-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4.5 h-4.5 text-brand-800 shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  {CLINIC_INFO.address}
                </span>
              </div>
              <div className="flex flex-col gap-1.5 pl-7">
                <a href={`tel:${CLINIC_INFO.phone}`} className="hover:text-white transition flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-brand-800" /> {CLINIC_INFO.phone}
                </a>
                <a href={`tel:${CLINIC_INFO.phoneAlt1}`} className="hover:text-white transition flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-brand-800" /> {CLINIC_INFO.phoneAlt1}
                </a>
                <a href={`tel:${CLINIC_INFO.phoneMobile}`} className="hover:text-white transition flex items-center gap-2 font-semibold text-brand-800">
                  <Phone className="w-3.5 h-3.5 text-brand-800" /> {CLINIC_INFO.phoneMobile}
                </a>
              </div>
              <div className="flex items-center gap-2.5 pt-1">
                <Mail className="w-4 h-4 text-brand-800 shrink-0" />
                <a href={`mailto:${CLINIC_INFO.email}`} className="hover:text-white transition text-left truncate">
                  {CLINIC_INFO.email}
                </a>
              </div>
              <div className="flex items-start gap-2.5 pt-1">
                <Clock className="w-4 h-4 text-brand-800 shrink-0 mt-0.5" />
                <span>
                  Hours: {CLINIC_INFO.workingHours}
                  <br />
                  <span className="text-red-400 font-semibold">{CLINIC_INFO.closedDays}</span>
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* Informational Disclaimer Frame */}
        <div className="border-t border-brand-400/30 pt-8 mt-8 text-center text-slate-500 text-xs">
          <p className="max-w-3xl mx-auto leading-relaxed mb-4">
            {CLINIC_INFO.disclaimer}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-600 pt-2">
            <span>
              &copy; {currentYear} {CLINIC_INFO.name}. All rights reserved.
            </span>
            <span>
              Clinical Care in Dhakuria & Kolkata | Built in compliance with Specialist Endocrinology standards.
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
}
