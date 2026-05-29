import React, { useState } from 'react';
import { Calendar, Phone, Mail, FileText, CheckCircle, Clock, User } from 'lucide-react';
import { CLINIC_INFO } from '../data';

interface AppointmentFormProps {
  onSuccess?: () => void;
  compact?: boolean;
}

export default function AppointmentForm({ onSuccess, compact = false }: AppointmentFormProps) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [date, setDate] = useState('');
  const [concern, setConcern] = useState('Diabetes Evaluation');
  const [consent, setConsent] = useState(false);
  
  const [submitted, setSubmitted] = useState(false);
  const [referenceId, setReferenceId] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!name.trim() || !phone.trim() || !date) {
      setError('Please fill in Name, Phone, and Preferred Date.');
      return;
    }

    if (!consent) {
      setError('Please consent to healthcare consultation processing guidelines.');
      return;
    }

    // Process simulation
    const id = `DO-APT-${Math.floor(100000 + Math.random() * 900000)}`;
    setReferenceId(id);
    
    // Save locally
    const existing = localStorage.getItem('clinic_appointments');
    const appointments = existing ? JSON.parse(existing) : [];
    appointments.push({
      id,
      patientName: name,
      phone,
      email,
      preferredDate: date,
      concern,
      consent,
      createdAt: new Date().toISOString(),
      status: 'pending'
    });
    localStorage.setItem('clinic_appointments', JSON.stringify(appointments));
    
    setSubmitted(true);
    if (onSuccess) onSuccess();
  };

  if (submitted) {
    return (
      <div className="bg-[#0c0a21]/80 backdrop-blur-md rounded-xl border border-brand-400/40 p-6 sm:p-8 animate-fadeIn text-slate-200 shadow-2xl relative z-10">
        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-brand-900/35 border border-brand-850/45 text-brand-800 mb-6 mx-auto">
          <CheckCircle className="w-6 h-6 animate-pulse" />
        </div>
        
        <h3 className="text-xl sm:text-2xl font-serif text-slate-100 text-center font-semibold mb-2">
          Request Received Successfully
        </h3>
        <p className="text-sm text-slate-400 text-center mb-6">
          Our administrative desk will contact you shortly to confirm your specific timing slot.
        </p>

        <div className="bg-brand-900/20 rounded-xl border border-brand-850/40 p-5 mb-6 text-sm shadow-inner">
          <div className="flex justify-between items-center py-2 border-b border-brand-400/20">
            <span className="text-slate-400 font-medium text-xs uppercase tracking-wider">Reference ID</span>
            <span className="font-mono font-bold text-brand-800">{referenceId}</span>
          </div>
          <div className="flex justify-between items-center py-2 border-b border-brand-400/20">
            <span className="text-slate-400 font-medium text-xs uppercase tracking-wider">Patient Name</span>
            <span className="font-semibold text-white">{name}</span>
          </div>
          <div className="flex justify-between items-center py-2 border-b border-brand-400/20">
            <span className="text-slate-400 font-medium text-xs uppercase tracking-wider">Preferred Date</span>
            <span className="text-brand-800 font-semibold">{date}</span>
          </div>
          <div className="flex justify-between items-center py-2">
            <span className="text-slate-400 font-medium text-xs uppercase tracking-wider">Category</span>
            <span className="text-brand-800 font-semibold">{concern}</span>
          </div>
        </div>

        <div className="space-y-3 pt-2 text-xs text-slate-400 border-t border-brand-400/20">
          <div className="flex items-start gap-2">
            <Clock className="w-4 h-4 text-brand-800 shrink-0 mt-0.5" />
            <span>Consultations are active {CLINIC_INFO.workingHours}.</span>
          </div>
          <div className="flex items-start gap-2">
            <Phone className="w-4 h-4 text-brand-800 shrink-0 mt-0.5" />
            <span>
              If you require immediate verification, call us directly at{' '}
              <a href={`tel:${CLINIC_INFO.phoneMobile}`} className="text-brand-800 font-semibold hover:underline">
                {CLINIC_INFO.phoneMobile}
              </a>
              .
            </span>
          </div>
        </div>

        <button
          onClick={() => {
            setSubmitted(false);
            setName('');
            setPhone('');
            setEmail('');
            setDate('');
            setConsent(false);
          }}
          className="mt-6 w-full text-center py-3 px-4 bg-gradient-to-r from-brand-900 to-brand-700 hover:from-brand-850 hover:to-brand-650 text-white rounded-lg text-sm font-semibold transition border border-brand-808/30 hover:scale-[1.01] shadow-md shadow-brand-900/15 cursor-pointer"
        >
          Request Another Appointment
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-[#0c0a21]/80 backdrop-blur-md rounded-xl border border-brand-400/40 p-5 sm:p-7 text-slate-200 shadow-2xl relative z-10">
      {!compact && (
        <div className="mb-6">
          <h3 className="text-lg sm:text-xl font-serif text-slate-100 font-bold mb-1">
            Request an Appointment
          </h3>
          <p className="text-xs text-slate-400 font-sans">
            Submit your details below and our coordinator will call you to schedule a consultation slot.
          </p>
        </div>
      )}

      {error && (
        <div className="mb-4 p-3 bg-red-950/30 border border-red-800/40 text-red-400 text-xs rounded-lg font-medium">
          {error}
        </div>
      )}

      <div className="space-y-4">
        {/* Full Name */}
        <div>
          <label htmlFor="patientName" className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1">
            Patient Full Name <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-500">
              <User className="w-4 h-4" />
            </div>
            <input
              id="patientName"
              type="text"
              required
              placeholder="e.g., Animesh Das"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full pl-9 pr-3 py-2 text-sm bg-brand-200/50 border border-brand-400/40 text-white placeholder-slate-500 focus:bg-brand-200 focus:border-brand-800 outline-none rounded-lg focus:ring-1 focus:ring-brand-800 transition font-sans"
              aria-label="Patient Full Name"
            />
          </div>
        </div>

        {/* Contact Phone */}
        <div>
          <label htmlFor="patientPhone" className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1">
            Contact Number <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-500">
              <Phone className="w-4 h-4" />
            </div>
            <input
              id="patientPhone"
              type="tel"
              required
              placeholder="e.g., +91 9830000000"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full pl-9 pr-3 py-2 text-sm bg-brand-200/50 border border-brand-400/40 text-white placeholder-slate-500 focus:bg-brand-200 focus:border-brand-800 outline-none rounded-lg focus:ring-1 focus:ring-brand-800 transition font-mono"
              aria-label="Contact Mobile or Landline Number"
            />
          </div>
        </div>

        {/* Email Address */}
        <div>
          <label htmlFor="patientEmail" className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1">
            Email Address (Optional)
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-500">
              <Mail className="w-4 h-4" />
            </div>
            <input
              id="patientEmail"
              type="email"
              placeholder="e.g., email@domain.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full pl-9 pr-3 py-2 text-sm bg-brand-200/50 border border-brand-400/40 text-white placeholder-slate-500 focus:bg-brand-200 focus:border-brand-800 outline-none rounded-lg focus:ring-1 focus:ring-brand-800 transition font-sans"
              aria-label="Email Address"
            />
          </div>
        </div>

        {/* Preferred Date */}
        <div>
          <label htmlFor="appointmentDate" className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1">
            Preferred Consultation Date <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-500">
              <Calendar className="w-4 h-4" />
            </div>
            <input
              id="appointmentDate"
              type="date"
              required
              value={date}
              min={new Date().toISOString().split('T')[0]}
              onChange={(e) => setDate(e.target.value)}
              className="w-full pl-9 pr-3 py-2 text-sm bg-brand-200/50 border border-brand-400/40 text-white placeholder-slate-500 focus:bg-brand-200 focus:border-brand-800 outline-none rounded-lg focus:ring-1 focus:ring-brand-800 transition font-mono cursor-pointer"
              aria-label="Preferred Consultation Date"
            />
          </div>
        </div>

        {/* Clinic Concern Selector */}
        <div>
          <label htmlFor="clinicalConcern" className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1">
            Primary Clinical Concern
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-500">
              <FileText className="w-4 h-4" />
            </div>
            <select
              id="clinicalConcern"
              value={concern}
              onChange={(e) => setConcern(e.target.value)}
              className="w-full pl-9 pr-3 py-2 text-sm bg-brand-200/60 border border-brand-400/40 text-white focus:bg-brand-200 focus:border-brand-800 outline-none rounded-lg focus:ring-1 focus:ring-brand-800 transition appearance-none cursor-pointer font-sans"
              aria-label="Primary Clinical Concern"
            >
              <option value="Diabetes Evaluation" className="bg-[#0a081f] text-white">Diabetes Evaluation & Monitoring</option>
              <option value="Thyroid Dysfunction" className="bg-[#0a081f] text-white">Thyroid Profile & Treatment</option>
              <option value="Obesity & Metabolic" className="bg-[#0a081f] text-white">Obesity & Weight Management</option>
              <option value="Hormonal Disorders" className="bg-[#0a081f] text-white">Hormone Disorders (Hirsutism/Hypogonadism)</option>
              <option value="Bone Health" className="bg-[#0a081f] text-white">Osteoporosis & Bone Care</option>
              <option value="DSME Programme" className="bg-[#0a081f] text-white">DSME Camp Registration</option>
              <option value="Other Consultations" className="bg-[#0a081f] text-white">General Endocrine Consultation</option>
            </select>
          </div>
        </div>

        {/* HIPAA Consent */}
        <div className="pt-2">
          <label className="flex items-start gap-2.5 cursor-pointer select-none">
            <input
              type="checkbox"
              checked={consent}
              onChange={(e) => setConsent(e.target.checked)}
              className="mt-1 w-4 h-4 rounded text-brand-800 border-brand-400/40 focus:ring-brand-800 bg-brand-200/50 cursor-pointer"
              required
            />
            <span className="text-[11px] text-slate-400 leading-relaxed font-sans">
              I consent to having this clinic log my booking inquiry. I acknowledge that this is a consultation request and does not constitute a legal diagnostic prescription.
            </span>
          </label>
        </div>
      </div>

      <button
        type="submit"
        className="mt-6 w-full py-3.5 px-4 bg-gradient-to-r from-brand-900 to-brand-700 hover:from-brand-850 hover:to-brand-650 text-white rounded-lg text-sm font-semibold transition border border-brand-808/30 hover:scale-[1.01] shadow-md shadow-brand-900/15 cursor-pointer"
      >
        Submit Booking Request
      </button>

      <p className="mt-3.5 text-[11px] text-center text-slate-500 font-sans">
        Office hours: {CLINIC_INFO.workingHours}
      </p>
    </form>
  );
}
