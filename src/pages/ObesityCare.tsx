import { HeartPulse, ShieldCheck, Activity, Scale, ArrowLeft, Microscope } from 'lucide-react';
import { CLINIC_INFO, SERVICES } from '../data';
import { AppRoute } from '../types';
import FAQAccordion from '../components/FAQAccordion';
import JsonLd from '../components/JsonLd';

interface CareProps {
  onNavigate: (route: AppRoute) => void;
}

export default function ObesityCare({ onNavigate }: CareProps) {
  const serviceData = SERVICES[2]; // Obesity is third

  const pageSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalSpecialty",
    "name": "Obesity and Metabolic Health Evaluation Program",
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
    }
  };

  return (
    <div className="animate-fadeIn relative z-10 text-slate-350">
      <JsonLd schema={pageSchema} />

      {/* TOP NAVIGATION */}
      <div className="bg-brand-950/40 border-b border-brand-400/20 py-3.5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <button
            onClick={() => onNavigate('/services')}
            className="text-brand-800 hover:text-brand-700 text-xs font-semibold flex items-center gap-1.5 cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4 animate-pulse" />
            Back to Services Hub
          </button>
        </div>
      </div>

      {/* HERO SECTION */}
      <section className="bg-gradient-to-b from-brand-200 to-brand-950 text-white py-16 sm:py-20 border-b border-brand-400/35">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs uppercase font-semibold text-brand-850 bg-brand-900/30 px-3.5 py-1.5 rounded-full border border-brand-850/30">
              Specialist Metabolic Health
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold tracking-tight text-gradient-purple-pink">
              {serviceData.title}
            </h1>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-light font-sans">
              {serviceData.shortDesc}
            </p>
          </div>
        </div>
      </section>

      {/* LONG DESCRIPTION INTRO */}
      <section className="py-16 bg-surface-primary border-b border-brand-400/35">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            <div className="lg:col-span-7 space-y-6">
              <h2 className="text-2xl sm:text-3xl font-serif text-slate-100 font-bold tracking-tight leading-snug">
                Metabolic Impediments to Weight Management
              </h2>
              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                {serviceData.longDesc}
              </p>
              
              <div className="p-4 rounded-xl border border-brand-800/40 bg-brand-900/10 flex gap-3 text-xs leading-relaxed text-slate-300 shadow-lg">
                <ShieldCheck className="w-5.5 h-5.5 text-brand-805 shrink-0 mt-0.5" />
                <div>
                  <span className="font-serif font-bold block mb-0.5 text-white">Clinical Metabolic Protection Framework</span>
                  Our weight protocols prioritize microvascular heart safety, lipid configuration audits, systemic insulin sensitivity reviews, and glycemic risk assessment over arbitrary scale figures.
                </div>
              </div>
            </div>

            {/* Focus points sidebar */}
            <div className="lg:col-span-5 bg-[#0c0a21]/50 border border-brand-400/35 p-6 rounded-xl space-y-5 shadow-2xl">
              <span className="text-[10px] uppercase font-bold tracking-wider text-brand-800">
                Focus Evaluation Criteria
              </span>
              
              <ul className="space-y-4 text-xs font-medium">
                {serviceData.focusPoints.map((pt, i) => (
                  <li key={i} className="flex gap-2.5 text-slate-300 select-none hover:text-white transition">
                    <div className="w-1.5 h-1.5 bg-brand-800 rounded-full mt-1.5 shrink-0" />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* CLINICAL CORE SEGMENTS */}
      <section className="py-16 sm:py-24 bg-surface-alt border-b border-brand-400/35" aria-label="Endocrine factors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <h2 className="text-2xl sm:text-3xl font-serif text-slate-100 font-bold tracking-tight">
              Underlying Endocrine Contributors
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            <div className="bg-[#0c0a21]/50 p-6 rounded-xl border border-brand-400/35 flex flex-col justify-between hover:border-brand-850 transition shadow-lg select-none">
              <div className="space-y-4">
                <div className="w-10 h-10 rounded-lg bg-brand-900/30 border border-brand-850/40 text-brand-800 flex items-center justify-center">
                  <Activity className="w-5.5 h-5.5" />
                </div>
                <h3 className="font-serif font-bold text-slate-202 text-base">
                  Insulin Resistance
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  High serum insulin forces glucose into fat reserves, preventing metabolic release and causing pre-diabetic cardiovascular stress. We assess pancreas functions and sugar parameters.
                </p>
              </div>
            </div>

            <div className="bg-[#0c0a21]/50 p-6 rounded-xl border border-brand-400/35 flex flex-col justify-between hover:border-brand-850 transition shadow-lg select-none">
              <div className="space-y-4">
                <div className="w-10 h-10 rounded-lg bg-brand-900/30 border border-brand-850/40 text-brand-800 flex items-center justify-center">
                  <Scale className="w-5.5 h-5.5" />
                </div>
                <h3 className="font-serif font-bold text-slate-202 text-base">
                  Adrenal & Pituitary Marks
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Persistent abnormal levels of cortisol, thyroid profiles, or specialized hypogonadism hormones can systematically impede standard diet programs.
                </p>
              </div>
            </div>

            <div className="bg-[#0c0a21]/50 p-6 rounded-xl border border-brand-400/35 flex flex-col justify-between hover:border-brand-850 transition shadow-lg select-none">
              <div className="space-y-4">
                <div className="w-10 h-10 rounded-lg bg-brand-900/30 border border-brand-850/40 text-brand-800 flex items-center justify-center">
                  <Microscope className="w-5.5 h-5.5" />
                </div>
                <h3 className="font-serif font-bold text-slate-202 text-base">
                  Lipid Profile Adjustments
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Metabolic syndrome increases cardiovascular threat levels. We analyze serum triglycerides, HDL, LDL, and liver function enzymes to target safe weight reduction schedules.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* METABOLIC FAQS */}
      <section className="py-16 sm:py-24 bg-surface-primary border-b border-brand-400/35" aria-labelledby="faq-section-heading">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 space-y-3">
            <h2 id="faq-section-heading" className="text-2xl sm:text-3xl font-serif text-slate-100 font-bold tracking-tight">
              Obesity Management FAQ Section
            </h2>
          </div>

          <FAQAccordion items={serviceData.faqs} />
        </div>
      </section>

      {/* FOOT CTA */}
      <section className="py-16 bg-surface-alt text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-4">
          <h3 className="text-xl sm:text-2xl font-serif font-bold text-slate-100">
            A Structured, Medically Guided Path to Metabolic Health
          </h3>
          <p className="text-slate-400 text-xs sm:text-sm">
            For systematic diagnostic evaluation of metabolic hormones, schedule a clinical consultation in South Kolkata.
          </p>
          <div className="pt-2">
            <button
              onClick={() => onNavigate('/contact')}
              className="px-8 py-3.5 bg-gradient-to-r from-brand-900 to-brand-700 hover:from-brand-850 hover:to-brand-650 text-white rounded-full text-xs sm:text-sm font-bold transition border border-brand-800/30 hover:scale-[1.02] shadow-md shadow-brand-900/15 cursor-pointer"
            >
              Consult Obesity Specialist
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
