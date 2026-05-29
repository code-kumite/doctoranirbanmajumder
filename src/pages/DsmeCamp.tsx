import { Calendar, Phone, Clock, MapPin, FileSpreadsheet, ShieldCheck, Heart, Microscope } from 'lucide-react';
import { CLINIC_INFO, DSME_CAMP_DETAILS } from '../data';
import { AppRoute } from '../types';
import FAQAccordion from '../components/FAQAccordion';
import JsonLd from '../components/JsonLd';

interface CampProps {
  onNavigate: (route: AppRoute) => void;
}

export default function DsmeCamp({ onNavigate }: CampProps) {
  const campSchema = {
    "@context": "https://schema.org",
    "@type": "ProgramMembership",
    "programName": DSME_CAMP_DETAILS.title,
    "hostingOrganization": {
      "@type": "MedicalClinic",
      "name": CLINIC_INFO.name,
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "26A, Gariahat Road (South), Dhakuria",
        "addressLocality": "Kolkata",
        "postalCode": "700031"
      }
    }
  };

  const campFaqs = [
    {
      question: "What is DSME?",
      answer: "DSME stands for Diabetes Self Management Education. It is a structured and scientifically validated program designed to help individuals with Type 1 or Type 2 diabetes understand carbohydrate counting, insulin handling, glucose logging, hypoglycemia rescue, and complication screening rules."
    },
    {
      question: "How do I register and enroll for an upcoming camp?",
      answer: "Enrolment is managed in advance. You can register by calling our administrative office lines directly at 033-35560180 or 6291768688."
    }
  ];

  return (
    <div className="animate-fadeIn relative z-10 text-slate-350">
      <JsonLd schema={campSchema} />

      {/* HERO SECTION */}
      <section className="bg-gradient-to-b from-[#0a081f] to-brand-950 text-white py-16 sm:py-24 border-b border-brand-400/35">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs uppercase font-semibold text-brand-850 bg-brand-900/30 px-3.5 py-1.5 rounded-full border border-brand-850/30 inline-block">
              Allied Patient Empowerment Programs
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold tracking-tight text-gradient-purple-pink">
              {DSME_CAMP_DETAILS.title}
            </h1>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-light font-sans">
              We provide systematic educational workshops, medical breakfasts, lipid profiles, and neuropathy screenings at a combined program to equip you for independent home glycemic management.
            </p>
          </div>
        </div>
      </section>

      {/* LOGISTICS CARD DECK */}
      <section className="py-12 bg-[#030014] border-b border-brand-400/35">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            
            <div className="p-5 bg-[#0c0a21]/50 border border-brand-400/35 rounded-xl space-y-1.5 shadow-lg select-none hover:border-brand-850 transition">
              <span className="text-[10px] uppercase font-bold text-brand-800 block">Camp Location</span>
              <div className="flex gap-2 items-start text-xs text-slate-300">
                <MapPin className="w-5 h-5 text-brand-800 shrink-0 mt-0.5" />
                <span>{DSME_CAMP_DETAILS.location}</span>
              </div>
            </div>

            <div className="p-5 bg-[#0c0a21]/50 border border-brand-400/35 rounded-xl space-y-1.5 shadow-lg select-none hover:border-brand-850 transition">
              <span className="text-[10px] uppercase font-bold text-brand-800 block">Timings Slot</span>
              <div className="flex gap-2 items-start text-xs text-slate-300">
                <Clock className="w-5 h-5 text-brand-800 shrink-0 mt-0.5" />
                <span>{DSME_CAMP_DETAILS.scheduleDay} | {DSME_CAMP_DETAILS.timing}</span>
              </div>
            </div>

            <div className="p-5 bg-[#0c0a21]/50 border border-brand-400/35 rounded-xl space-y-1.5 shadow-lg select-none hover:border-brand-850 transition">
              <span className="text-[10px] uppercase font-bold text-brand-800 block">Enrolment Fee</span>
              <div className="flex gap-2 items-start text-xs text-slate-300">
                <FileSpreadsheet className="w-5 h-5 text-brand-800 shrink-0 mt-0.5" />
                <span>INR {DSME_CAMP_DETAILS.registrationFee} (All Investigations & meals included)</span>
              </div>
            </div>

            <div className="p-5 bg-brand-900/15 border border-brand-850/45 rounded-xl space-y-1.5 flex flex-col justify-between shadow-lg">
              <span className="text-[10px] uppercase font-mono font-bold text-brand-800 block">Registration Status</span>
              <button
                onClick={() => onNavigate('/contact')}
                className="w-full text-center py-2.5 bg-gradient-to-r from-brand-900 to-brand-700 hover:from-brand-850 hover:to-brand-650 text-white rounded border border-brand-808/30 text-xs font-bold uppercase tracking-wider transition cursor-pointer hover:scale-[1.01] shadow-md shadow-brand-900/15"
              >
                Inquire Enrollment
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* SCHEDULE TIMELINE */}
      <section className="py-16 bg-[#060515] border-b border-brand-400/35">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            <div className="lg:col-span-4 space-y-6">
              <span className="text-xs font-semibold text-brand-850 tracking-wider uppercase bg-brand-900/30 px-3.5 py-1.5 rounded-full border border-brand-850/30 inline-block">
                TIMETABLE
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif text-slate-100 font-bold tracking-tight leading-snug">
                Structured Timetable Guidelines
              </h2>
              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                The DSME program is tightly structured over a single Saturday from morning through afternoon to ensure chronological biological glucose collecting is balanced with nutrition series.
              </p>
              
              <div className="p-4 bg-[#0c0a21]/50 border border-brand-400/35 rounded-xl text-xs space-y-3">
                <div className="flex gap-2">
                  <ShieldCheck className="w-4 h-4 text-brand-800 mt-0.5 shrink-0 animate-pulse" />
                  <span>Clinical insulin storage self-injection lectures.</span>
                </div>
                <div className="flex gap-2">
                  <ShieldCheck className="w-4 h-4 text-brand-800 mt-0.5 shrink-0 animate-pulse" />
                  <span>Interactive question series with certified medical educators.</span>
                </div>
              </div>
            </div>

            {/* Time Grid list */}
            <div className="lg:col-span-8 bg-brand-100/40 border border-brand-400/35 rounded-xl p-6 sm:p-8 space-y-6 shadow-2xl">
              {DSME_CAMP_DETAILS.timeline.map((act, idx) => (
                <div key={idx} className="flex gap-4 sm:gap-6 border-b border-brand-400/20 pb-5 last:border-b-0 last:pb-0 select-none">
                  <span className="font-mono font-bold text-sm text-brand-800 shrink-0 mt-0.5">
                    {act.time}
                  </span>
                  <div>
                    <h3 className="font-serif font-bold text-slate-205 text-sm sm:text-base">
                      {act.event.split(':')[0]}
                    </h3>
                    <p className="text-xs text-slate-400 mt-1 leading-relaxed font-light">
                      {act.event.split(':').slice(1).join(':').trim() || 'Schedule event sequence'}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* LAB INVESTIGATIONS */}
      <section className="py-16 sm:py-24 bg-[#030014] border-b border-brand-400/35" aria-labelledby="lab-investigations-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-semibold text-brand-850 bg-brand-900/30 px-3.5 py-1.5 rounded-full border border-brand-850/30">Clinical Parameters</span>
            <h2 id="lab-investigations-heading" className="text-2xl sm:text-3xl font-serif text-slate-100 font-bold tracking-tight">
              Comprehensive Lab Investigations Included
            </h2>
            <p className="text-slate-450 text-xs sm:text-sm font-sans mt-2">
              Standard biochemical parameters collected during the camp and certified under laboratory guidelines:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {DSME_CAMP_DETAILS.investigations.map((inv, idx) => (
              <div key={idx} className="p-4 bg-[#0c0a21]/50 border border-brand-400/35 rounded-lg flex items-start gap-2.5 hover:border-brand-850 transition select-none">
                <Microscope className="w-5 h-5 text-brand-800 shrink-0 mt-0.5" />
                <span className="text-xs font-semibold text-slate-300">{inv}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INCLUDED NEUROLOGICAL & FOOT ASSESSMENTS */}
      <section className="py-16 bg-[#060515] border-b border-brand-400/35" aria-labelledby="other-assessments-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-semibold text-brand-850 bg-brand-900/30 px-3.5 py-1.5 rounded-full border border-brand-850/30">Device Screen Testing</span>
            <h2 id="other-assessments-heading" className="text-2xl sm:text-3xl font-serif text-slate-100 font-bold tracking-tight">
              Specialized Instrumental Screenings
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {DSME_CAMP_DETAILS.otherAssessments.map((ast, idx) => (
              <div key={idx} className="p-5 bg-[#0c0a21]/55 rounded-xl border border-brand-400/35 flex gap-4 hover:border-brand-850 transition duration-150 shadow-lg select-none">
                <div className="w-10 h-10 rounded bg-brand-900/30 border border-brand-850/40 text-brand-805 flex items-center justify-center shrink-0">
                  <Heart className="w-5.5 h-5.5 animate-pulse" />
                </div>
                <div>
                  <h3 className="font-serif font-bold text-slate-202 text-sm sm:text-base">
                    {ast.split('(')[0].trim()}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed mt-1 font-light">
                    {ast.split('(')[1]?.replace(')', '') || 'Diagnostic safety checks'}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQS ACCORDION */}
      <section className="py-16 bg-[#030014]" aria-labelledby="faq-title">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 space-y-3">
            <h2 id="faq-title" className="text-2xl sm:text-3xl font-serif text-slate-100 font-bold tracking-tight text-center">
              DSME Camp FAQS
            </h2>
          </div>

          <FAQAccordion items={campFaqs} />
        </div>
      </section>

      {/* CONTACT */}
      <section className="py-16 bg-[#060515] text-center border-t border-brand-400/30">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-4">
          <h3 className="text-xl sm:text-2xl font-serif font-bold text-slate-100">
            Enroll for the Next Structured DSME Saturday
          </h3>
          <p className="text-slate-400 text-xs sm:text-sm">
            Enrolment requires advanced registration slot booking due to diagnostic scheduling guidelines.
          </p>
          <div className="pt-2 flex justify-center gap-3">
            <a
              href={`tel:${CLINIC_INFO.phoneMobile}`}
              className="px-8 py-3.5 bg-gradient-to-r from-brand-900 to-brand-700 hover:from-brand-850 hover:to-brand-650 text-white rounded-full text-xs font-bold transition flex items-center justify-center gap-2 border border-brand-808/30 hover:scale-[1.02] shadow-md shadow-brand-900/15 cursor-pointer"
            >
              <Phone className="w-4 h-4 animate-bounce" />
              Call Mobile Desk
            </a>
            <button
              onClick={() => onNavigate('/contact')}
              className="px-8 py-3.5 border border-brand-400 hover:border-brand-850 text-slate-300 hover:text-white rounded-full text-xs font-bold transition hover:bg-brand-900/10 cursor-pointer"
            >
              Inquire Online
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
