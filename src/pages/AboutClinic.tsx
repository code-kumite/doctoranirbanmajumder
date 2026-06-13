import { ShieldCheck, Heart, Award, Compass, Users, PhoneCall } from 'lucide-react';
import { CLINIC_INFO } from '../data';
import FAQAccordion from '../components/FAQAccordion';
import { AppRoute } from '../types';
import JsonLd from '../components/JsonLd';

interface AboutProps {
  onNavigate: (route: AppRoute) => void;
}

export default function AboutClinic({ onNavigate }: AboutProps) {
  const aboutSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "mainEntity": {
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

  const clinicFaqs = [
    {
      question: "What makes the clinic specialised?",
      answer: "Unlike general health centers, our clinic focuses exclusively on endocrine disorders, diabetes mellitus complications, thyroid hormonal imbalances, and medically supervised obesity management."
    },
    {
      question: "Does the clinic provide lifestyle guidance?",
      answer: "Yes. Personalized carbohydrate counting, diabetes meal planning, thyroid nutritional education, and metabolic activity tracking under the supervision of qualified lifestyle and nutritional counselors are integrated into our services."
    }
  ];

  const philosophies = [
    {
      title: "Adherence to Professional Standards",
      desc: "Our treatment guidelines match recommended protocols from the Endocrine Society of India, American Association of Clinical Endocrinology (AACE), and the Research Society for the Study of Diabetes in India (RSSDI).",
      icon: ShieldCheck
    },
    {
      title: "Delivery of Best Patient Care",
      desc: "We prioritize patient diagnostic clarity, thorough hormonal and chemical reviews, and customized medicine calibration over quick prescriptions.",
      icon: Award
    },
    {
      title: "Primacy of Comfort and Convenience",
      desc: "Our South Kolkata clinic is designed to preserve patient dignity, featuring simplified filing, structured coordination, easily reachable clinic lines, and an accessible Gariahat Gound floor area.",
      icon: Heart
    }
  ];

  return (
    <div className="animate-fadeIn relative z-10">
      <JsonLd schema={aboutSchema} />

      {/* HERO SECTION */}
      <section className="bg-gradient-to-b from-brand-200 to-brand-950 text-white py-16 sm:py-24 border-b border-brand-400/35">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-semibold tracking-wider uppercase text-brand-850 bg-brand-900/30 px-3.5 py-1.5 rounded-full border border-brand-850/30">
              Technology & Heartfelt Care
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold tracking-tight text-gradient-purple-pink">
              About Diabetes-Obesity-Thyroid & Hormone Clinic
            </h1>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-light">
              We represent a stable blend of technical excellence, competent medical planning, and respectful hospitality, focused on helping patients navigate complex endocrine and metabolic health challenges with reassurance.
            </p>
          </div>
        </div>
      </section>

      {/* MISSION STRAPLINE */}
      <section className="py-16 bg-surface-primary border-b border-brand-400/35">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <div className="flex gap-2 items-center">
                <Compass className="w-5 h-5 text-brand-800 animate-spin" style={{ animationDuration: '12s' }} />
                <span className="text-xs font-semibold text-brand-800 tracking-wider uppercase">Our Mission</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-serif text-slate-100 font-semibold tracking-tight">
                Restoring Physiological Balance and Vitality
              </h2>
              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                The endocrine gland processes regulate almost every metabolic system in the human body. Disruption in these delicate chemical feedback loops triggers progressive disorders. Our core mission is the accurate scientific diagnostic evaluation of these systems, followed by tailored evidence-guided management.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 bg-brand-100/40 border border-brand-400/35 rounded-xl text-xs text-slate-400 leading-relaxed shadow-lg hover:border-brand-850 transition">
                  <span className="font-serif font-bold text-brand-800 block mb-1">Evidence-Based Clinical Science</span>
                  Treatment programs are built strictly on empirical research statistics, clinical trials, and international guidelines.
                </div>
                <div className="p-4 bg-brand-100/40 border border-brand-400/35 rounded-xl text-xs text-slate-400 leading-relaxed shadow-lg hover:border-brand-850 transition">
                  <span className="font-serif font-bold text-brand-800 block mb-1">Inclusive Communication Models</span>
                  We spend adequate time explaining investigation outputs, hormonal mechanisms, and follow-up metrics.
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 bg-[#0c0a21]/50 border border-brand-850/45 p-6 sm:p-8 rounded-xl shadow-2xl">
              <span className="text-[10px] uppercase font-bold tracking-wider text-brand-800">
                Primary Specialty Profile
              </span>
              <h3 className="font-serif text-lg font-bold text-slate-205 mt-1.5">
                Endocrinology & Diabetology
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed mt-2.5">
                Our care methodology integrates biological screenings, lifestyle guidance, and microvascular risk reduction support with absolute patient convenience at the center.
              </p>
              <div className="border-t border-brand-400/20 pt-4 mt-4 text-xs text-slate-500">
                Managed under clinical guidance of Dr. Anirban Majumder, Professor of Endocrinology.
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CORE PHILOSOPHY SECTION */}
      <section className="py-16 sm:py-24 bg-surface-alt border-b border-brand-400/35" aria-label="Care philosophy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-semibold text-brand-850 uppercase tracking-wider">
              Dignity & Protocol
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif text-slate-100 font-bold tracking-tight">
              Our Patient Care Philosophy
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {philosophies.map((phil, i) => {
              const Icon = phil.icon;
              return (
                <div key={i} className="bg-[#0c0a21]/55 rounded-xl border border-brand-400/35 p-6 space-y-4 hover:border-brand-850 transition duration-150 shadow-lg select-none">
                  <div className="w-10 h-10 rounded-lg bg-brand-900/30 border border-brand-850/40 text-brand-800 flex items-center justify-center">
                    <Icon className="w-5.5 h-5.5" />
                  </div>
                  <h3 className="font-serif font-bold text-slate-200 text-base">
                    {phil.title}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {phil.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* MEET THE EXTENDED TEAM */}
      <section className="py-16 bg-surface-primary border-b border-brand-400/35" aria-labelledby="team-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-5 bg-brand-100/40 rounded-xl border border-brand-400/35 p-6 flex flex-col justify-between shadow-2xl">
              <div className="space-y-4">
                <div className="w-10 h-10 rounded bg-brand-900/40 border border-brand-800/40 text-brand-805 flex items-center justify-center">
                  <Users className="w-5 h-5" />
                </div>
                <h3 id="team-heading" className="font-serif text-xl font-bold text-slate-100">
                  Nutrition Support & Diabetes Educators
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Chronic endocrine management relies heavily on patient empowerment during daily routines. Our allied clinical support team operates directly under Dr. Majumder’s supervision to provide evidence-based, compassionate diet charting and adherence counseling.
                </p>
              </div>

              <div className="mt-8 border-t border-brand-400/20 pt-4 text-xs text-slate-500">
                Clinic Location: {CLINIC_INFO.address}
              </div>
            </div>

            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-semibold tracking-wider uppercase text-brand-850 bg-brand-900/30 px-3.5 py-1.5 rounded-full border border-brand-850/30">Educator Focus Areas</span>
              <h4 className="text-xl sm:text-2xl font-serif text-slate-100 font-semibold tracking-tight">
                Empathetic Lifestyle Coaching Supporting Clinical Therapy
              </h4>
              <p className="text-slate-400 text-xs sm:text-sm">
                Our diabetes educators and clinical nutrition specialists focus on practical daily adjustments with patient-preference-based counseling:
              </p>

              <div className="space-y-3.5 pt-2 text-xs text-slate-400">
                <div className="flex items-start gap-2.5">
                  <div className="w-1.5 h-1.5 bg-brand-800 rounded-full mt-1.5 shrink-0" />
                  <span>Diet and active lifestyle guidance strictly based on verified clinical research stats.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <div className="w-1.5 h-1.5 bg-brand-800 rounded-full mt-1.5 shrink-0" />
                  <span>Patient-preference centered counseling matching dietary budgets and cultural requirements.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <div className="w-1.5 h-1.5 bg-brand-800 rounded-full mt-1.5 shrink-0" />
                  <span>Regular glycemic monitoring follow-up reviews and self-care medication adherence assistance.</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SEC FAQ BLOCK */}
      <section className="py-16 sm:py-24 bg-surface-alt" aria-label="FAQ queries">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 space-y-4">
            <h2 className="text-2xl sm:text-3xl font-serif text-slate-100 font-bold tracking-tight text-center">
              About the Clinic FAQs
            </h2>
          </div>

          <FAQAccordion items={clinicFaqs} />

          <div className="mt-12 text-center">
            <button
              onClick={() => onNavigate('/contact')}
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-gradient-to-r from-brand-900 to-brand-700 hover:from-brand-850 hover:to-brand-650 text-white rounded-full text-xs font-bold transition cursor-pointer border border-brand-800/30 hover:scale-[1.02] shadow-md shadow-brand-900/15"
            >
              <PhoneCall className="w-3.5 h-3.5 animate-bounce" />
              Call Administrative Coordinator
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
