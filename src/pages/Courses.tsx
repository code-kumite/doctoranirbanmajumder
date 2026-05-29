import { GraduationCap, Phone } from 'lucide-react';
import { CLINIC_INFO, COURSES } from '../data';
import { AppRoute } from '../types';
import FAQAccordion from '../components/FAQAccordion';
import JsonLd from '../components/JsonLd';

interface CoursesProps {
  onNavigate: (route: AppRoute) => void;
}

export default function Courses({ onNavigate }: CoursesProps) {
  const courseSchema = {
    "@context": "https://schema.org",
    "@type": "CourseList",
    "itemListElement": COURSES.map((c, i) => ({
      "@type": "ListItem",
      "position": i + 1,
      "item": {
        "@type": "Course",
        "name": c.title,
        "description": c.targetAudience,
        "provider": {
          "@type": "EducationalOrganization",
          "name": c.collaboration.split('collaboration with').pop()?.split(',').shift()?.trim() || "Kolkata Hormone Foundation"
        }
      }
    }))
  };

  const courseFaqs = [
    {
      question: "Who are these academic programs designed for?",
      answer: "The Integrated Diabetes & Endocrine Course (IDEC) and PHFI CCEBDM are specifically tailored for general practitioners and internal medicine physicians. The National Diabetes Educator Programme (NDEP) is structured for paramedical educators, clinical nutritionists, and nursing professionals."
    },
    {
      question: "How can general physicians register for upcoming batches?",
      answer: "Enquiries regarding schedule, fees, and eligibility checks can be directed through our Gariahat South clinical help desk."
    }
  ];

  return (
    <div className="animate-fadeIn relative z-10 text-slate-350">
      <JsonLd schema={courseSchema} />

      {/* HERO SECTION */}
      <section className="bg-gradient-to-b from-[#0a081f] to-brand-950 text-white py-16 sm:py-24 border-b border-brand-400/35">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs uppercase font-semibold text-brand-850 bg-brand-900/30 px-3.5 py-1.5 rounded-full border border-brand-850/30 inline-block">
              Tertiary Instruction & Upskilling
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold tracking-tight text-gradient-purple-pink">
              Diabetes & Endocrine Educational Courses
            </h1>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-light font-sans">
              We coordinate academic upskilling modules in partnership with KPC Medical College & Hospital, Public Health Foundation of India, and the University of Newcastle, Australia.
            </p>
          </div>
        </div>
      </section>

      {/* DETAILED COURSE GRID */}
      <section className="py-16 sm:py-24 bg-[#060515] border-b border-brand-400/35" aria-labelledby="courses-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="courses-heading" className="sr-only">Course Listings</h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {COURSES.map((course, idx) => (
              <div key={idx} className="bg-[#0c0a21]/55 border border-brand-400/35 hover:border-brand-850 duration-200 transition rounded-xl p-6 sm:p-8 flex flex-col justify-between shadow-2xl select-none">
                <div className="space-y-6">
                  
                  {/* Icon acronym header */}
                  <div className="flex items-start justify-between">
                    <div className="w-12 h-12 rounded bg-brand-900/30 border border-brand-850/40 text-brand-800 flex items-center justify-center shrink-0">
                      <GraduationCap className="w-6 h-6" />
                    </div>
                    {course.acronym && (
                      <span className="font-mono font-bold text-xs uppercase bg-brand-900/30 text-brand-800 px-2.5 py-1 rounded border border-brand-850/30">
                        {course.acronym}
                      </span>
                    )}
                  </div>

                  <div className="space-y-2">
                    <h3 className="font-serif font-bold text-slate-100 text-lg sm:text-xl leading-tight">
                      {course.title}
                    </h3>
                    <p className="text-[11px] font-semibold text-brand-800 uppercase tracking-wide">
                      Audience: {course.targetAudience}
                    </p>
                  </div>

                  <p className="text-slate-400 text-xs leading-relaxed font-sans font-light">
                    {course.collaboration}
                  </p>

                  <div className="border-t border-brand-400/20 pt-4 space-y-3.5">
                    <span className="text-[10px] font-extrabold uppercase tracking-wider text-brand-800 block">
                      Program Components Included
                    </span>
                    <ul className="space-y-2.5 text-xs">
                      {course.keyFeatures.map((ft, keyIdx) => (
                        <li key={keyIdx} className="flex gap-2 text-slate-400 leading-relaxed font-light">
                          <CheckIcon />
                          <span>{ft}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                </div>

                <div className="mt-8 pt-4 border-t border-brand-400/20">
                  <button
                    onClick={() => onNavigate('/contact')}
                    className="w-full text-center py-2.5 bg-brand-100/10 border border-brand-400/30 hover:bg-brand-100/20 hover:text-white text-slate-300 rounded text-xs font-bold uppercase transition cursor-pointer"
                  >
                    Request Enrollment Check
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ACCORDION FAQ */}
      <section className="py-16 bg-[#030014]" aria-labelledby="course-faq-heading">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 space-y-3">
            <h2 id="course-faq-heading" className="text-2xl sm:text-3xl font-serif text-slate-100 font-bold tracking-tight text-center">
              Academic Program FAQS
            </h2>
          </div>

          <FAQAccordion items={courseFaqs} />
        </div>
      </section>

      {/* FOOTER CTA LINE CARD */}
      <section className="py-16 bg-[#060515] border-t border-brand-400/30 text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-4">
          <h3 className="text-xl sm:text-2xl font-serif font-bold text-slate-100">
            Contribute to Advancing Regional Endocrinology
          </h3>
          <p className="text-slate-400 text-xs sm:text-sm">
            For academic queries, syllabus structures, or eligibility criteria, contact the clinical desk directly.
          </p>
          <div className="pt-2 flex justify-center gap-2">
            <a
              href={`tel:${CLINIC_INFO.phone}`}
              className="px-8 py-3.5 bg-gradient-to-r from-brand-900 to-brand-700 hover:from-brand-850 hover:to-brand-650 text-white rounded-full text-xs font-bold transition flex items-center gap-2 border border-brand-808/30 hover:scale-[1.02] shadow-md shadow-brand-900/15 cursor-pointer"
            >
              <Phone className="w-4 h-4 animate-bounce" />
              Call Gariahat Desk: {CLINIC_INFO.phone}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

// Subordinate CheckIcon block
function CheckIcon() {
  return (
    <svg className="w-4 h-4 text-brand-800 shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5"></path>
    </svg>
  );
}
