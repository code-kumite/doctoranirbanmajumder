import { MapPin, Phone, Clock, Compass, Info } from 'lucide-react';
import { CLINIC_INFO } from '../data';
import AppointmentForm from '../components/AppointmentForm';
import { AppRoute } from '../types';
import JsonLd from '../components/JsonLd';

interface ContactProps {
  onNavigate: (route: AppRoute) => void;
}

export default function Contact({ onNavigate }: ContactProps) {
  const contactSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "mainEntity": {
      "@type": "MedicalClinic",
      "name": CLINIC_INFO.name,
      "telephone": [CLINIC_INFO.phone, CLINIC_INFO.phoneAlt1, CLINIC_INFO.phoneMobile],
      "email": CLINIC_INFO.email,
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "26A, Gariahat Road (South), Dhakuria",
        "addressLocality": "Kolkata",
        "postalCode": "700031",
        "addressRegion": "West Bengal",
        "addressCountry": "IN"
      },
      "openingHours": "Mo-Fr 12:00-20:00"
    }
  };

  return (
    <div className="animate-fadeIn text-slate-350 relative z-10">
      <JsonLd schema={contactSchema} />

      {/* HERO SECTION */}
      <section className="bg-gradient-to-b from-brand-200 to-brand-950 text-white py-16 sm:py-24 border-b border-brand-400/35">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs uppercase font-semibold text-brand-850 bg-brand-900/30 px-3.5 py-1.5 rounded-full border border-brand-850/30 inline-block">
              Immediate Patient Bookings
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold tracking-tight text-gradient-purple-pink">
              Contact and Schedule Appointment
            </h1>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-light font-sans">
              Request a secure consultation slot, review public transport accessibility markers, or contact our Dhakuria medical coordinators directly.
            </p>
          </div>
        </div>
      </section>

      {/* TWO COLUMN DETAIL GRID */}
      <section className="py-16 sm:py-24 bg-surface-primary" aria-labelledby="contact-grid-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="contact-grid-heading" className="sr-only">Contact Details & Appointment Form</h2>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Column: Coordinates details */}
            <div className="lg:col-span-5 space-y-8 lg:sticky lg:top-28">
              
              <div className="space-y-4">
                <span className="text-xs font-semibold text-brand-800 tracking-wider uppercase block">
                  Office Coordinates
                </span>
                <h3 className="text-2xl font-serif text-slate-100 font-bold leading-tight font-serif">
                  Diabetes-Obesity-Thyroid & Hormone Clinic
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed font-sans">
                  Located in South Kolkata, Gariahat Road South is widely connected by Metro (Jatindas Park or Kavi Subhash connection links) and Gariahat public transport channels.
                </p>
              </div>

              {/* Coordinates block cards list */}
              <div className="space-y-4 font-sans text-xs">
                
                {/* Address Card */}
                <div className="flex gap-4 p-4 rounded-xl bg-[#0c0a21]/50 border border-brand-400/35 hover:border-brand-850 transition duration-150 shadow-lg select-none">
                  <MapPin className="w-5 h-5 text-brand-800 shrink-0 mt-0.5" />
                  <div className="space-y-1">
                    <span className="font-serif font-bold text-slate-205 block text-sm">
                      Dhakuria Office Address
                    </span>
                    <p className="text-slate-450 leading-relaxed font-medium">
                      {CLINIC_INFO.address}
                    </p>
                    <span className="text-[11px] text-slate-500 block pt-1 leading-none font-medium">
                      Landmark: {CLINIC_INFO.landmark}
                    </span>
                  </div>
                </div>

                {/* Telephone numbers clickable list */}
                <div className="flex gap-4 p-4 rounded-xl bg-[#0c0a21]/50 border border-brand-400/35 hover:border-brand-850 transition duration-150 shadow-lg select-none">
                  <Phone className="w-5 h-5 text-brand-800 shrink-0 mt-0.5" />
                  <div className="space-y-1">
                    <span className="font-serif font-bold text-slate-205 block text-sm">
                      Clickable Call Registry
                    </span>
                    <p className="text-slate-450 leading-relaxed font-light">
                      Please call standard reception registries during active hours for slot reviews:
                    </p>
                    <div className="flex flex-col gap-2 pt-2.5">
                      <a href={`tel:${CLINIC_INFO.phone}`} className="font-semibold text-brand-800 hover:underline flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-brand-800 rounded-full" /> {CLINIC_INFO.phone} (Office Registry)
                      </a>
                      <a href={`tel:${CLINIC_INFO.phoneAlt1}`} className="font-semibold text-brand-800 hover:underline flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-brand-800 rounded-full" /> {CLINIC_INFO.phoneAlt1} (Backup Line)
                      </a>
                      <a href={`tel:${CLINIC_INFO.phoneMobile}`} className="font-bold text-brand-800 hover:underline flex items-center gap-2 text-sm sm:text-base">
                        <span className="w-2 h-2 bg-brand-800 rounded-full animate-ping" /> {CLINIC_INFO.phoneMobile} (Local Mobile Desk)
                      </a>
                    </div>
                  </div>
                </div>

                {/* Working hours cards */}
                <div className="flex gap-4 p-4 rounded-xl bg-[#0c0a21]/50 border border-brand-400/35 hover:border-brand-850 transition duration-150 shadow-lg select-none">
                  <Clock className="w-5 h-5 text-brand-800 shrink-0 mt-0.5" />
                  <div className="space-y-1 text-xs text-slate-350">
                    <span className="font-serif font-bold text-slate-205 block text-sm">
                      Clinical Operational Days
                    </span>
                    <p className="font-semibold text-white leading-none mt-1">
                      {CLINIC_INFO.workingHours}
                    </p>
                    <p className="text-red-400 font-bold leading-none pt-1">
                      {CLINIC_INFO.closedDays}
                    </p>
                  </div>
                </div>

              </div>

              {/* Transit guide */}
              <div className="p-4 bg-brand-900/10 border border-brand-800/40 text-xs text-slate-300 leading-relaxed rounded-xl flex gap-2.5 shadow-md">
                <Compass className="w-5 h-5 text-brand-800 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold font-serif block mb-1 text-white">Public Transit Guide</span>
                  For local commuters arriving from North Kolkata or Central Kolkata, alight at Rabindra Sarobar Metro station and connect via standard auto-rickshaw leading directly to Gariahat Road South Dhakuria.
                </div>
              </div>

            </div>

            {/* Right Column: Appointment Form */}
            <div className="lg:col-span-7">
              <AppointmentForm />
            </div>

          </div>
        </div>
      </section>

      {/* EMBEDDED MAP DESCRIPTION STRAPLINE BACKGROUND */}
      <section className="py-16 bg-surface-alt border-t border-b border-brand-400/30" aria-label="Find our clinic">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-[10px] tracking-wider uppercase font-extrabold text-slate-500 block text-center mb-4">
            Physiographic Location Map Guide
          </span>
          
          {/* Aesthetic Mock Iframe Google Map panel */}
          <div className="bg-[#0c0a21]/50 rounded-xl border border-brand-400/35 p-2 overflow-hidden shadow-2xl h-112 relative select-none">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3685.9319922920304!2d88.36490997516695!3d22.50673463538147!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0276d4c8b72b89%3A0x525202fac383efa1!2sDr%20Anirban%20Majumder!5e0!3m2!1sen!2sin!4v1780040869691!5m2!1sen!2sin"
              className="w-full h-full border-0 rounded-lg shadow-inner filter invert-[0.9] hue-rotate-[180deg] brightness-90 contrast-[0.95]"
              title="Dr. Anirban Majumder Endocrine Clinic Google Maps Location"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      {/* COMPLIANCE DISCLOSURE BLOCK PANEL */}
      <section className="py-16 bg-surface-primary" aria-labelledby="compliance-heading">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-4">
          <Info className="w-7 h-7 text-brand-850 mx-auto animate-pulse" />
          <h4 id="compliance-heading" className="font-serif text-lg sm:text-xl font-bold text-slate-100">
            Medical Disclaimer & Compliance
          </h4>
          <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-3xl mx-auto font-light">
            All submitted appointment requests operate strictly on administrative slotting guidelines. It does not initiate programmatic clinical diagnostic treatment. For all sudden, acute cardiac anomalies, metabolic emergencies, or hypoglycemia complications, please connect immediately to a nearby South Kolkata tertiary medical hospital emergency desk.
          </p>
        </div>
      </section>
    </div>
  );
}
