import { Stethoscope, ShieldCheck, RefreshCw, AlertCircle, ArrowLeft } from 'lucide-react';
import { CLINIC_INFO, SERVICES } from '../data';
import { AppRoute } from '../types';
import FAQAccordion from '../components/FAQAccordion';
import JsonLd from '../components/JsonLd';

interface CareProps {
  onNavigate: (route: AppRoute) => void;
}

export default function ThyroidCare({ onNavigate }: CareProps) {
  const serviceData = SERVICES[1]; // Thyroid Care is second

  const pageSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalService",
    "name": "Thyroid Profiling and Treatment Program",
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

      {/* NAVIGATION BLOCK */}
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
      <section className="bg-gradient-to-b from-[#0a081f] to-brand-950 text-white py-16 sm:py-20 border-b border-brand-400/35">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs uppercase font-semibold text-brand-850 bg-brand-900/30 px-3.5 py-1.5 rounded-full border border-brand-850/30">
              Specialist Thyroidology
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

      {/* INTRO AND OBJECTIVES STRAPLINE */}
      <section className="py-16 bg-[#030014] border-b border-brand-400/35">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            <div className="lg:col-span-7 space-y-6">
              <h2 className="text-2xl sm:text-3xl font-serif text-slate-100 font-bold tracking-tight leading-snug">
                Evaluating Thyroid Function Metrics
              </h2>
              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                {serviceData.longDesc}
              </p>
              
              <div className="p-4 rounded-xl border border-brand-800/40 bg-brand-900/10 flex gap-3 text-xs leading-relaxed text-slate-300 shadow-lg">
                <ShieldCheck className="w-5.5 h-5.5 text-brand-805 shrink-0 mt-0.5" />
                <div>
                  <span className="font-serif font-bold block mb-0.5 text-white">Dual-Screening Co-Existence Review</span>
                  In many patients, autoimmune thyroid profile imbalances coexist with insulin anomalies. Our clinic provides an integrated endocrine assessment to address these overlapping triggers.
                </div>
              </div>
            </div>

            {/* Focus Points sidebar */}
            <div className="lg:col-span-5 bg-[#0c0a21]/50 border border-brand-400/35 p-6 rounded-xl space-y-5 shadow-2xl">
              <span className="text-[10px] uppercase font-bold tracking-wider text-brand-800">
                Primary Specialty Spheres
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

      {/* SUB-SECTIONS DETAIL CARDS */}
      <section className="py-16 sm:py-24 bg-[#060515] border-b border-brand-400/35" aria-label="Thyroid states">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Hypothyroidism box */}
            <div className="bg-[#0c0a21]/50 rounded-xl border border-brand-400/35 p-6 sm:p-8 space-y-4 hover:border-brand-850 transition duration-150 shadow-lg select-none">
              <div className="w-10 h-10 rounded-lg bg-brand-900/30 border border-brand-850/40 text-brand-800 flex items-center justify-center">
                <AlertCircle className="w-5.5 h-5.5" />
              </div>
              <h3 className="font-serif font-bold text-slate-205 text-lg sm:text-xl">
                Hypothyroid Evaluation (Underactive Thyroid)
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Hypothyroidism slows down multiple systemic actions, triggering general lethargy, unanticipated weight gains, cold sensitivities, constipation, and menstrual timing irregularities in female cohorts.
              </p>
              <div className="text-xs text-brand-800 font-semibold">
                Our care pathways focus on standard synthetic hormone replacement calibrations based on active TSH and thyroid profiles.
              </div>
            </div>

            {/* Hyperthyroidism box */}
            <div className="bg-[#0c0a21]/50 rounded-xl border border-brand-400/35 p-6 sm:p-8 space-y-4 hover:border-brand-850 transition duration-150 shadow-lg select-none">
              <div className="w-10 h-10 rounded-lg bg-brand-900/30 border border-brand-850/40 text-brand-800 flex items-center justify-center">
                <RefreshCw className="w-5.5 h-5.5 animate-spin" style={{ animationDuration: '8s' }} />
              </div>
              <h3 className="font-serif font-bold text-slate-205 text-lg sm:text-xl">
                Hyperthyroid Surveillance (Overactive Thyroid)
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Hyperthyroidism accelerates the cell metabolic index, forcing unexpected rapid weight loss, severe autonomic tremors, anxiety states, and heart tremors.
              </p>
              <div className="text-xs text-brand-800 font-semibold">
                We manage anti-thyroid scheduling, regular diagnostic follow-up calibrations, and symptom containment plans.
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* FAQS */}
      <section className="py-16 sm:py-24 bg-[#030014] border-b border-brand-400/35" aria-labelledby="faq-section-heading">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 space-y-3">
            <h2 id="faq-section-heading" className="text-2xl sm:text-3xl font-serif text-slate-100 font-bold tracking-tight">
              Thyroid Care FAQ Section
            </h2>
          </div>

          <FAQAccordion items={serviceData.faqs} />
        </div>
      </section>

      {/* DIRECT CTA BLOCK */}
      <section className="py-16 bg-[#060515] text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-4">
          <h3 className="text-xl sm:text-2xl font-serif font-bold text-slate-100">
            Is Your Iodine or TSH Profile Abnormal?
          </h3>
          <p className="text-slate-400 text-xs sm:text-sm">
            For systematic evaluation or clinical medication review, request an appointment at Gariahat Road South, Kolkata.
          </p>
          <div className="pt-2">
            <button
              onClick={() => onNavigate('/contact')}
              className="px-8 py-3.5 bg-gradient-to-r from-brand-900 to-brand-700 hover:from-brand-850 hover:to-brand-650 text-white rounded-full text-xs sm:text-sm font-bold transition border border-brand-800/30 hover:scale-[1.02] shadow-md shadow-brand-900/15 cursor-pointer"
            >
              Request Thyroid Consultation
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
