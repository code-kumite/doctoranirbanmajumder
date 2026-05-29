import { Award, GraduationCap, Microscope, ShieldCheck, Library, Landmark, Calendar, Phone } from 'lucide-react';
import { CLINIC_INFO, DOCTOR_CREDENTIALS, ACADEMIC_APPOINTMENTS, DOCTOR_AWARDS, MEMBERSHIPS, OVERSEAS_TRAINING } from '../data';
import { AppRoute } from '../types';
import JsonLd from '../components/JsonLd';

interface ProfileProps {
  onNavigate: (route: AppRoute) => void;
}

export default function DoctorProfile({ onNavigate }: ProfileProps) {
  const doctorSchema = {
    "@context": "https://schema.org",
    "@type": "Physician",
    "name": CLINIC_INFO.doctorName,
    "medicalSpecialty": "Endocrinology",
    "telephone": [CLINIC_INFO.phone, CLINIC_INFO.phoneMobile],
    "email": CLINIC_INFO.email,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "26A, Gariahat Road (South), Dhakuria",
      "addressLocality": "Kolkata",
      "postalCode": "700031",
      "addressRegion": "West Bengal",
      "addressCountry": "IN"
    },
    "alumniOf": [
      { "@type": "EducationalOrganization", "name": "R G Kar Medical College" },
      { "@type": "EducationalOrganization", "name": "Calcutta National Medical College" },
      { "@type": "EducationalOrganization", "name": "IPGMER and SSKM Hospital" }
    ],
    "award": ["Subhas Mukherjee Memorial Oration Award, 2021"],
    "memberOf": [
      { "@type": "MedicalOrganization", "name": "Indian Medical Association" },
      { "@type": "MedicalOrganization", "name": "Association of Physicians of India" }
    ]
  };

  return (
    <div className="animate-fadeIn relative z-10">
      <JsonLd schema={doctorSchema} />

      {/* HERO SECTION */}
      <section className="bg-gradient-to-b from-[#0a081f] to-brand-950 text-white py-16 sm:py-24 border-b border-brand-400/35">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-8 space-y-6">
              <span className="inline-block text-xs font-semibold uppercase tracking-wider bg-brand-900/35 border border-brand-850/45 text-brand-800 px-3.5 py-1.5 rounded-full">
                Entity Profile & Physician Credentials
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold tracking-tight text-gradient-purple-pink">
                {CLINIC_INFO.doctorName}
              </h1>
              <p className="text-slate-350 text-sm sm:text-base leading-relaxed">
                {CLINIC_INFO.doctorTitle}. Superposing 25+ years of active clinical endocrinology practice, medical tertiary instruction, and research authorship in Kolkata.
              </p>
              
              <div className="flex flex-wrap gap-2 pt-2">
                {["MBBS (1986)", "MD Gen Medicine (1991)", "DM Endocrinology (1997)"].map((cred, idx) => (
                  <span key={idx} className="bg-brand-400/40 text-slate-205 border border-brand-300/30 text-xs px-3 py-1 font-mono rounded">
                    {cred}
                  </span>
                ))}
              </div>
            </div>

            <div className="lg:col-span-4 bg-brand-900/10 backdrop-blur-md rounded-xl border border-brand-850/40 p-5 sm:p-6 space-y-4 shadow-2xl">
              <span className="text-[10px] uppercase font-bold text-brand-800 tracking-wider block">
                Fellowships Snapshot
              </span>
              <div className="space-y-2.5 text-xs text-slate-300">
                <div className="flex items-start gap-2">
                  <ShieldCheck className="w-4 h-4 text-brand-800 shrink-0 mt-0.5" />
                  <span><span className="font-bold text-white">FRCP London</span> — Royal College of Physicians, 2022</span>
                </div>
                <div className="flex items-start gap-2">
                  <ShieldCheck className="w-4 h-4 text-brand-800 shrink-0 mt-0.5" />
                  <span><span className="font-bold text-white">FACE</span> — American College of Endocrinology, 2020</span>
                </div>
                <div className="flex items-start gap-2">
                  <ShieldCheck className="w-4 h-4 text-brand-800 shrink-0 mt-0.5" />
                  <span><span className="font-bold text-white">FICP</span> — Indian College of Physicians, 2014</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CREDENTIAL TIMELINE SECTION */}
      <section className="py-16 sm:py-24 bg-[#030014] border-b border-brand-400/35" aria-label="Credentials timeline">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12 space-y-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-brand-850 bg-brand-900/30 px-3.5 py-1 rounded-full border border-brand-850/30">Medical Schooling</span>
            <h2 className="text-2xl sm:text-3xl font-serif text-slate-100 font-bold tracking-tight">
              Educational Timeline & Specialization
            </h2>
          </div>

          <div className="relative border-l-2 border-brand-400/30 ml-4 pl-6 space-y-10">
            {DOCTOR_CREDENTIALS.map((cred, idx) => (
              <div key={idx} className="relative">
                {/* Bullet */}
                <div className="absolute -left-[31px] top-1 w-4 border-2 border-brand-800 h-4 rounded-full bg-[#030014] flex items-center justify-center animate-pulse" />
                
                <div className="max-w-3xl space-y-1.5">
                  <span className="text-xs font-mono font-bold bg-brand-900/40 text-brand-800 px-2.5 py-0.5 rounded border border-brand-850/30">
                    {cred.year || 'Affiliation'}
                  </span>
                  <h3 className="text-base sm:text-lg font-serif font-bold text-slate-200 leading-tight">
                    {cred.degree}
                  </h3>
                  <span className="block text-xs font-semibold text-slate-500">
                    {cred.institution}
                  </span>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {cred.details}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ACADEMIC & CLINICAL APPOINTMENTS */}
      <section className="py-16 bg-[#060515] border-b border-brand-400/35" aria-label="Academic roles">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-5 space-y-6">
              <span className="text-xs font-semibold uppercase tracking-wider text-brand-850 bg-brand-900/35 px-3.5 py-1.5 rounded-full border border-brand-850/30">
                Academic Direction
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif text-slate-100 font-bold tracking-tight">
                Academic and Clinical Experience
              </h2>
              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                Specialist counseling gains deeper dimension when medical practitioners are actively engaged in tertiary academic instruction and mentoring. Dr. Majumder serves as senior faculty across multiple regional and continental centers.
              </p>
              <div className="pt-2">
                <button
                  onClick={() => onNavigate('/courses')}
                  className="px-6 py-3 bg-gradient-to-r from-brand-900 to-brand-700 hover:from-brand-850 hover:to-brand-650 text-white rounded-full text-xs font-semibold transition border border-brand-800/30 hover:scale-[1.02] shadow-md shadow-brand-900/20 cursor-pointer"
                >
                  View Educational Courses
                </button>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-4">
              {ACADEMIC_APPOINTMENTS.map((app, idx) => (
                <div key={idx} className="bg-brand-100/40 border border-brand-400/35 p-5 flex gap-4 rounded-xl shadow-lg hover:border-brand-850 transition select-none">
                  <div className="w-10 h-10 rounded-lg bg-brand-900/30 border border-brand-850/40 text-brand-800 flex items-center justify-center shrink-0">
                    <Landmark className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs uppercase font-mono font-bold tracking-wider text-brand-800">
                      {app.role}
                    </span>
                    <h3 className="font-serif font-bold text-slate-200 text-sm sm:text-base mt-1">
                      {app.organization}
                    </h3>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* AWARDS & RECOGNITIONS */}
      <section className="py-16 sm:py-24 bg-[#030014] border-b border-brand-400/35" aria-label="Awards">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12 space-y-3">
            <span className="text-xs font-semibold tracking-wider text-brand-850 uppercase bg-brand-900/30 px-3.5 py-1 rounded-full border border-brand-850/30">Recognized Contributions</span>
            <h2 className="text-2xl sm:text-3xl font-serif text-slate-100 font-bold tracking-tight">
              Clinical Awards & achievements
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {DOCTOR_AWARDS.map((awd, idx) => (
              <div key={idx} className="p-6 bg-brand-105/40 rounded-xl border border-brand-400/35 flex gap-4 hover:border-brand-850 transition duration-150 shadow-lg select-none">
                <div className="w-12 h-12 rounded-lg bg-brand-900/30 border border-brand-850/40 text-brand-800 flex items-center justify-center shrink-0">
                  <Award className="w-6 h-6" />
                </div>
                <div className="space-y-1">
                  <span className="text-xs font-semibold font-mono text-brand-800">
                    Year {awd.year} | {awd.body}
                  </span>
                  <h3 className="font-serif font-bold text-slate-200 text-base sm:text-lg">
                    {awd.title}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {awd.details}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MEMBERSHIPS AND OVERSEAS TRAINING */}
      <section className="py-16 bg-[#060515] border-b border-brand-400/35" aria-labelledby="memberships-title">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Memberships box */}
            <div className="space-y-6">
              <h3 id="memberships-title" className="text-xl sm:text-2xl font-serif text-slate-100 font-bold tracking-tight">
                Associated Professional Bodies
              </h3>
              <p className="text-xs text-slate-400">
                Dr. Majumder maintains active membership and administrative council associations with regional and national specialty academies:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {MEMBERSHIPS.map((mbr, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 p-3.5 bg-[#0c0a21]/50 border border-brand-400/35 rounded-lg text-xs font-semibold text-slate-300 hover:border-brand-800 transition select-none">
                    <Library className="w-4.5 h-4.5 text-brand-800 shrink-0" />
                    <span>{mbr}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Overseas training details */}
            <div className="space-y-6">
              <h3 className="text-xl sm:text-2xl font-serif text-slate-100 font-bold tracking-tight font-serif">
                Specialized International Training
              </h3>
              <p className="text-xs text-slate-400">
                To enhance care strategies for Indian patient cohorts, he underwent clinical residency and research surveillance training abroad:
              </p>

              <div className="space-y-4">
                {OVERSEAS_TRAINING.map((tr, idx) => (
                  <div key={idx} className="p-5 bg-[#0c0a21]/50 border border-brand-400/35 rounded-xl space-y-2 hover:border-brand-850 transition shadow-2xl select-none">
                    <span className="text-[10px] uppercase font-mono font-semibold bg-brand-900/40 text-brand-800 px-2 py-0.5 rounded border border-brand-850/30">
                      Admitted {tr.year}
                    </span>
                    <h4 className="font-serif font-bold text-slate-200 text-xs sm:text-sm">
                      {tr.course}
                    </h4>
                    <p className="text-xs text-slate-400">
                      {tr.hospital || tr.location}
                    </p>
                    <p className="text-xs text-brand-800 font-semibold italic">
                      Focus: {tr.details}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CTA BOOK PROFILE */}
      <section className="py-16 bg-[#030014] text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-6">
          <h2 className="text-2xl sm:text-3xl font-serif text-slate-100 font-bold tracking-tight font-serif">
            Schedule a Private Clinical Consultation
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm">
            Consult Dr. Anirban Majumder directly at our Dhakuria clinic for personal hormone profile interpretation and structured disease management.
          </p>
          <div className="flex justify-center gap-3.5 pt-2">
            <button
              onClick={() => onNavigate('/contact')}
              className="px-8 py-3 bg-gradient-to-r from-brand-900 to-brand-700 hover:from-brand-850 hover:to-brand-650 text-white rounded-full text-xs sm:text-sm font-semibold transition border border-brand-800/30 hover:scale-[1.02] shadow-md shadow-brand-900/20 cursor-pointer"
            >
              Request Consultation
            </button>
            <a
              href={`tel:${CLINIC_INFO.phone}`}
              className="px-8 py-3 border border-brand-400 hover:border-brand-850 rounded-full text-xs sm:text-sm font-semibold transition inline-flex items-center gap-2 hover:bg-brand-900/10 text-slate-300 hover:text-white"
            >
              <Phone className="w-4 h-4 text-brand-800 animate-pulse" />
              Call Receptionist
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
