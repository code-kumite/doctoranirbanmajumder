import { Activity, Stethoscope, HeartPulse, Microscope, ChevronRight } from 'lucide-react';
import { CLINIC_INFO, SERVICES } from '../data';
import { AppRoute } from '../types';
import JsonLd from '../components/JsonLd';

interface ServicesHubProps {
  onNavigate: (route: AppRoute) => void;
}

export default function ServicesOverview({ onNavigate }: ServicesHubProps) {
  const servicesSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "provider": {
      "@type": "MedicalClinic",
      "name": CLINIC_INFO.name,
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "26A, Gariahat Road (South), Dhakuria",
        "addressLocality": "Kolkata",
        "postalCode": "700031",
        "addressRegion": "West Bengal",
        "addressCountry": "IN"
      }
    },
    "serviceType": ["Diabetes Care", "Thyroid Profiling", "Metabolic Obesity Health", "Hormonal Disorder Care"]
  };

  const getServiceIcon = (name: string) => {
    switch (name) {
      case 'Activity': return <Activity className="w-5 h-5 text-brand-850" />;
      case 'Stethoscope': return <Stethoscope className="w-5 h-5 text-brand-850" />;
      case 'HeartPulse': return <HeartPulse className="w-5 h-5 text-brand-850" />;
      default: return <Microscope className="w-5 h-5 text-brand-850" />;
    }
  };

  return (
    <div className="animate-fadeIn relative z-10 text-slate-350">
      <JsonLd schema={servicesSchema} />

      {/* HERO SECTION */}
      <section className="bg-gradient-to-b from-brand-200 to-brand-950 text-white py-16 sm:py-24 border-b border-brand-400/35">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs uppercase font-semibold text-brand-850 bg-brand-900/30 px-3.5 py-1.5 rounded-full border border-brand-850/30 inline-block">
              Diagnostic Integrity
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold tracking-tight text-gradient-purple-pink">
              Specialist Endocrine & Diabetes Treatments
            </h1>
            <p className="text-slate-300 text-sm sm:text-base font-light font-sans">
              We offer advanced biological screening, hormone replacement calibration, microvascular protection analysis, and continuous monitoring profiles in South Kolkata.
            </p>
          </div>
        </div>
      </section>

      {/* CORE INTRO STRAPLINE */}
      <section className="py-16 bg-surface-primary border-b border-brand-400/35">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl space-y-4">
            <h2 className="text-2xl sm:text-3xl font-serif text-slate-100 font-bold tracking-tight leading-snug">
              A Comprehensive Approach to Glandular & Metabolic Equilibrium
            </h2>
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
              Hormonal glands operate within extremely delicate chemical ranges. An excessive hyper-secretion or deficient hypo-secretion of even a single hormone creates systemic disorders that can impact weight, cardiovascular parameters, energy, hair growth, and overall vitality.
            </p>
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
              Our clinical protocol centers around careful laboratory diagnostics, transparent patient communications, and personalized therapeutic regimens aligned with international endocrinology recommendations.
            </p>
          </div>
        </div>
      </section>

      {/* SERVICES DIRECTORY BOOTSTRAP LIST-GROUP OVERHAUL */}
      <section className="py-16 bg-surface-alt border-b border-brand-400/35" aria-labelledby="hub-directory-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="hub-directory-heading" className="sr-only">Services Directory</h2>
          
          {/* Beautiful Bootstrap style list group with outline borders */}
          <div className="bootstrap-list-group shadow-2xl">
            {SERVICES.map((srv) => (
              <div
                key={srv.id}
                onClick={() => onNavigate(srv.route)}
                className="bootstrap-list-item flex flex-col md:flex-row md:items-center justify-between gap-6 cursor-pointer select-none"
              >
                <div className="flex items-start gap-4 flex-1">
                  <div className="w-10 h-10 rounded-lg bg-brand-900/30 border border-brand-850/40 flex items-center justify-center shrink-0 mt-0.5">
                    {getServiceIcon(srv.iconName)}
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-lg font-serif font-bold text-slate-100 group-hover:text-brand-800">
                      {srv.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-450 leading-relaxed max-w-4xl font-light">
                      {srv.shortDesc}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4 shrink-0 md:pl-0 pl-14 mt-2 md:mt-0">
                  <span className="text-[10px] uppercase font-bold tracking-wider text-brand-800 bg-brand-900/20 px-3 py-1 rounded-full border border-brand-850/30">
                    Clinical Program
                  </span>
                  <div className="text-brand-805 font-bold flex items-center gap-1 text-xs sm:text-sm hover:text-brand-700 transition">
                    <span>Explore Care</span>
                    <ChevronRight className="w-4 h-4 shrink-0" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ALLIED SERVICES SUBBLOCK */}
      <section className="py-16 bg-surface-primary" aria-labelledby="allied-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-brand-100/40 backdrop-blur-md rounded-xl border border-brand-400/35 p-6 sm:p-10 grid grid-cols-1 lg:grid-cols-3 gap-8 shadow-2xl">
            
            <div className="lg:col-span-2 space-y-4">
              <span className="text-xs uppercase font-bold tracking-wider text-brand-850">Empowerment Campaigns</span>
              <h3 id="allied-heading" className="text-xl sm:text-2xl font-serif text-slate-100 font-bold">
                Diabetes Self Management Education
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-sans">
                For patients coping with Type 1 or Type 2 diabetes mellitus, success lies heavily in self-care skills during daily home routines. We run structured educational campaigns (DSME Camp) focusing on diet budgeting, insulin storage management, active glucose screening, and foot care rules.
              </p>
            </div>

            <div className="flex flex-col justify-center">
              <button
                onClick={() => onNavigate('/programmes/dsme-camp')}
                className="w-full text-center py-3.5 bg-gradient-to-r from-brand-900 to-brand-700 hover:from-brand-850 hover:to-brand-650 text-white rounded border border-brand-800/35 text-xs font-bold uppercase tracking-wider transition cursor-pointer hover:scale-[1.01] shadow-md shadow-brand-900/15"
              >
                Access DSME Camp Details
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* FOOT CTA */}
      <section className="py-16 bg-surface-alt border-t border-brand-400/35 text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-4">
          <h3 className="text-xl sm:text-2xl font-serif text-slate-100 font-bold tracking-tight font-serif">
            Personalized Clinical Consultation
          </h3>
          <p className="text-slate-400 text-xs sm:text-sm">
            For individual diagnostic evaluations or laboratory report reviews, you can schedule an appointment.
          </p>
          <div className="pt-2">
            <button
              onClick={() => onNavigate('/contact')}
              className="px-8 py-3.5 bg-gradient-to-r from-brand-900 to-brand-700 hover:from-brand-850 hover:to-brand-650 text-white rounded-full border border-brand-800/30 text-xs sm:text-sm font-semibold transition hover:scale-[1.02] shadow-md shadow-brand-900/20 cursor-pointer"
            >
              Book Consultation Slot
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
