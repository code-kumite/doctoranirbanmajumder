import { Microscope, ShieldCheck, HeartPulse, Activity, ArrowLeft } from 'lucide-react';
import { CLINIC_INFO, SERVICES } from '../data';
import { AppRoute } from '../types';
import FAQAccordion from '../components/FAQAccordion';
import JsonLd from '../components/JsonLd';

interface CareProps {
  onNavigate: (route: AppRoute) => void;
}

export default function HormoneDisorders({ onNavigate }: CareProps) {
  const serviceData = SERVICES[3]; // Hormone Care is fourth

  const pageSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalService",
    "name": "General Endocrine & Osteoporosis Screening Care Program",
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

      {/* NAVIGATION */}
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
              Specialist Endocrinology
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
                Addressing Complex Endocrine Pathologies
              </h2>
              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                {serviceData.longDesc}
              </p>
              
              <div className="p-4 rounded-xl border border-brand-800/40 bg-brand-900/10 flex gap-3 text-xs leading-relaxed text-slate-300 shadow-lg">
                <ShieldCheck className="w-5.5 h-5.5 text-brand-805 shrink-0 mt-0.5" />
                <div>
                  <span className="font-serif font-bold block mb-0.5 text-white">Clinical Inclusivity & Respect</span>
                  Our clinical focus strictly respects gender diversity, offering evidence-guided transhormone administration and surveillance metrics backed by international guidelines.
                </div>
              </div>
            </div>

            {/* Focus points sidebar */}
            <div className="lg:col-span-5 bg-[#0c0a21]/50 border border-brand-400/35 p-6 rounded-xl space-y-5 shadow-2xl">
              <span className="text-[10px] uppercase font-bold tracking-wider text-brand-800">
                Core Focus Dimensions
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

      {/* CORE SEGMENTS CARDS */}
      <section className="py-16 sm:py-24 bg-surface-alt border-b border-brand-400/35" aria-label="Endocrine sub-specialties">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Hirsutism */}
            <div className="bg-[#0c0a21]/55 rounded-xl border border-brand-400/35 p-6 space-y-4 hover:border-brand-850 transition duration-150 shadow-lg select-none">
              <div className="w-10 h-10 rounded-lg bg-brand-900/30 border border-brand-850/40 text-brand-800 flex items-center justify-center">
                <Microscope className="w-5.5 h-5.5" />
              </div>
              <h3 className="font-serif font-bold text-slate-202 text-base">
                Hirsutism & Acne Issues
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Excessive hair growth and severe acne can originate from an androgynic imbalance. We provide chemical evaluation, lipid risk profiling, and hormone balance counseling.
              </p>
            </div>

            {/* Hypogonadism */}
            <div className="bg-[#0c0a21]/55 rounded-xl border border-brand-400/35 p-6 space-y-4 hover:border-brand-850 transition duration-150 shadow-lg select-none">
              <div className="w-10 h-10 rounded-lg bg-brand-900/30 border border-brand-850/40 text-brand-800 flex items-center justify-center">
                <Activity className="w-5.5 h-5.5" />
              </div>
              <h3 className="font-serif font-bold text-slate-202 text-base">
                Hypogonadism Profiling
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                A deficiency in male or female sex hormones can trigger extreme fatigue, muscle thinning, bone weakening, and fertility concerns. We design safe clinical supplement programs.
              </p>
            </div>

            {/* Bone health */}
            <div className="bg-[#0c0a21]/55 rounded-xl border border-brand-400/35 p-6 space-y-4 hover:border-brand-850 transition duration-150 shadow-lg select-none">
              <div className="w-10 h-10 rounded-lg bg-brand-900/30 border border-brand-850/40 text-brand-800 flex items-center justify-center">
                <HeartPulse className="w-5.5 h-5.5" />
              </div>
              <h3 className="font-serif font-bold text-slate-202 text-base">
                Osteoporosis & Calcium
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Bone density is strictly regulated by parathyroid hormones, thyroid functions, and Vitamin D. We provide structured bone health reviews to prevent progressive fragility fractures.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* FAQS */}
      <section className="py-16 sm:py-24 bg-surface-primary border-b border-brand-400/35" aria-labelledby="faq-section-heading">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 space-y-3">
            <h2 id="faq-section-heading" className="text-2xl sm:text-3xl font-serif text-slate-100 font-bold tracking-tight">
              Hormonal Imbalance FAQ Section
            </h2>
          </div>

          <FAQAccordion items={serviceData.faqs} />
        </div>
      </section>

      {/* CONTACT CTA */}
      <section className="py-16 bg-surface-alt text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-4">
          <h3 className="text-xl sm:text-2xl font-serif font-bold text-slate-100">
            Hormonal Equilibrium is Fundamental to Daily Health
          </h3>
          <p className="text-slate-400 text-xs sm:text-sm">
            For advanced chemical screening or report analysis, schedule a consultation at Gariahat Road South, Kolkata.
          </p>
          <div className="pt-2">
            <button
              onClick={() => onNavigate('/contact')}
              className="px-8 py-3.5 bg-gradient-to-r from-brand-900 to-brand-700 hover:from-brand-850 hover:to-brand-650 text-white rounded-full text-xs sm:text-sm font-bold transition border border-brand-800/30 hover:scale-[1.02] shadow-md shadow-brand-900/15 cursor-pointer"
            >
              Consult Hormone Specialist
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
