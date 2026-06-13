import { useState } from 'react';
import { Microscope, BookOpen, Search, ShieldCheck, FileText } from 'lucide-react';
import { RESEARCH_PUBLICATIONS, CLINIC_INFO } from '../data';
import { AppRoute } from '../types';
import JsonLd from '../components/JsonLd';

interface ResearchProps {
  onNavigate: (route: AppRoute) => void;
}

export default function ResearchPublications({ onNavigate }: ResearchProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTag, setSelectedTag] = useState<string>('All');

  const researchSchema = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "mainEntity": {
      "@type": "Person",
      "name": CLINIC_INFO.doctorName,
      "publishingPrinciples": RESEARCH_PUBLICATIONS.map((pub) => ({
        "@type": "MedicalScholarlyArticle",
        "name": pub.title,
        "author": pub.authors,
        "publicationTime": pub.year,
        "journal": pub.journal
      }))
    }
  };

  const researchAreas = [
    'All',
    'Diabetes & Neuropathy',
    'Thyroid Profiles',
    'Transgender Endocrine Care',
    'Public Health Surveillance'
  ];

  const mapCategoryToPub = (pub: typeof RESEARCH_PUBLICATIONS[0]) => {
    const title = pub.title.toLowerCase();
    const summary = pub.summary.toLowerCase();
    const journal = pub.journal.toLowerCase();

    if (title.includes('neuropathy') || title.includes('insulin') || summary.includes('glycemia')) {
      return 'Diabetes & Neuropathy';
    }
    if (title.includes('thyroid') || title.includes('iodine') || journal.includes('thyroid')) {
      return 'Thyroid Profiles';
    }
    if (title.includes('transgender') || title.includes('male-to-female') || title.includes('hijra') || title.includes('castration')) {
      return 'Transgender Endocrine Care';
    }
    return 'Public Health Surveillance';
  };

  const filteredPublications = RESEARCH_PUBLICATIONS.filter((pub) => {
    const matchesSearch =
      pub.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      pub.summary.toLowerCase().includes(searchTerm.toLowerCase()) ||
      pub.journal.toLowerCase().includes(searchTerm.toLowerCase());

    const category = mapCategoryToPub(pub);
    const matchesTag = selectedTag === 'All' || category === selectedTag;

    return matchesSearch && matchesTag;
  });

  return (
    <div className="animate-fadeIn relative z-10 text-slate-350">
      <JsonLd schema={researchSchema} />

      {/* HERO SECTION */}
      <section className="bg-gradient-to-b from-brand-200 to-brand-950 text-white py-16 sm:py-24 border-b border-brand-400/35">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs uppercase font-semibold text-brand-850 bg-brand-900/30 px-3.5 py-1.5 rounded-full border border-brand-850/30 inline-block">
              Evidence-Based Credibility
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold tracking-tight text-gradient-purple-pink">
              Research & Scientific Academic Publications
            </h1>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-light font-sans">
              We compile selected national and global medical treatise contributions associated with Dr. Anirban Majumder in diabetes neuropathy, maternal iodine, and hormonal surveillance.
            </p>
          </div>
        </div>
      </section>

      {/* COMPLIANCE WARNING */}
      <section className="py-6 bg-surface-primary/50 border-b border-brand-400/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-xs font-medium text-slate-400 leading-relaxed max-w-4xl flex gap-2">
          <ShieldCheck className="w-5 h-5 text-brand-800 shrink-0 mt-0.5" />
          <span>
            These scientific publications are cataloged here for peer transparency, educational archiving, and healthcare provider compliance reviews. Abstract summaries are structured for medical clarity without speculative therapeutics. All copyright is held by respective publishers.
          </span>
        </div>
      </section>

      {/* INTERACTIVE SEARCH & CATEGORIES */}
      <section className="py-12 bg-surface-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-6 justify-between items-stretch lg:items-center border-b border-brand-400/20 pb-8 mb-10">
            
            {/* Search Input */}
            <div className="relative flex-1 max-w-md">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-500">
                <Search className="w-5 h-5" />
              </div>
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search publications by title or clinical keyword..."
                className="w-full pl-10 pr-4 py-2.5 text-sm rounded-lg border border-brand-400/35 bg-brand-200/50 text-white placeholder-slate-500 focus:bg-brand-200 focus:border-brand-800 outline-none transition font-sans"
              />
            </div>

            {/* Filter Tags */}
            <div className="flex flex-wrap gap-2.5">
              {researchAreas.map((area) => (
                <button
                  key={area}
                  onClick={() => setSelectedTag(area)}
                  className={`px-4.5 py-2 rounded-full text-xs font-semibold transition cursor-pointer ${
                    selectedTag === area
                      ? 'bg-gradient-to-r from-brand-900 to-brand-700 text-white border border-brand-808/30 shadow-md shadow-brand-900/15'
                      : 'bg-brand-100/10 border border-brand-400/30 text-slate-400 hover:bg-brand-100/20 hover:text-white'
                  }`}
                >
                  {area}
                </button>
              ))}
            </div>

          </div>

          {/* DYNAMIC PUBLICATIONS LIST */}
          <div className="max-w-4xl mx-auto space-y-8 animate-fadeIn">
            {filteredPublications.length > 0 ? (
              filteredPublications.map((pub, index) => (
                <article
                  key={index}
                  className="bg-[#0c0a21]/55 border border-brand-400/35 rounded-xl p-6 shadow-2xl hover:border-brand-850 transition duration-150 select-none"
                >
                  <div className="space-y-4">
                    
                    {/* Header tags metadata */}
                    <div className="flex flex-wrap items-center justify-between gap-2 border-b border-brand-400/20 pb-3">
                      <div className="flex items-center gap-2">
                        <BookOpen className="w-4 h-4 text-brand-800 shrink-0" />
                        <span className="font-mono text-[10px] uppercase tracking-wider font-extrabold text-slate-400">
                          {pub.journal || 'Peer Reviewed Publication'}
                        </span>
                      </div>
                      <span className="font-mono font-bold text-xs bg-brand-900/30 text-brand-800 px-2.5 py-0.5 rounded border border-brand-850/30">
                        Year {pub.year}
                      </span>
                    </div>

                    {/* Publication Content details */}
                    <div className="space-y-2">
                      <h3 className="font-serif font-bold text-slate-100 text-base sm:text-lg leading-tight uppercase-first">
                        {pub.title}
                      </h3>
                      <p className="text-xs font-semibold text-slate-400 italic font-sans">
                        Authors: {pub.authors}
                      </p>
                    </div>

                    {/* Abstract Summary */}
                    <div className="bg-brand-900/10 border border-brand-850/30 rounded-lg p-4 text-xs sm:text-xs leading-relaxed text-slate-355 shadow-inner">
                      <span className="font-bold text-slate-200 block mb-1">Abstract Extract Context:</span>
                      {pub.summary}
                    </div>

                    {/* Meta Action */}
                    {pub.doi && (
                      <div className="pt-2 text-xs text-brand-800 font-mono flex items-center gap-2">
                        <span className="text-[10px] text-slate-500 font-bold">CROSSREF REGISTRY SYSTEM DOI:</span>
                        <a
                          href={`https://doi.org/${pub.doi}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-bold hover:underline hover:text-brand-650"
                        >
                          {pub.doi}
                        </a>
                      </div>
                    )}

                  </div>
                </article>
              ))
            ) : (
              <div className="text-center py-16 bg-[#0c0a21]/45 border border-dashed border-brand-400/35 rounded-xl space-y-3 shadow-inner">
                <FileText className="w-12 h-12 text-slate-500 mx-auto" />
                <p className="text-sm font-semibold text-slate-300">No matching clinical publications found.</p>
                <p className="text-xs text-slate-500">Try adjusting your search terms or clearing matching tags filter.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* CTA ARCHIVE */}
      <section className="py-16 bg-surface-alt border-t border-brand-400/35 text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-4">
          <h3 className="text-xl sm:text-2xl font-serif font-bold text-slate-100">
            Collaborative Endocrine Research
          </h3>
          <p className="text-slate-400 text-xs sm:text-sm">
            For academic queries, journal publications requests, or clinical studies partnership inquiries, contact Dr. Majumder directly.
          </p>
          <div className="pt-2 flex justify-center gap-2 animate-fadeIn">
            <button
              onClick={() => onNavigate('/contact')}
              className="px-8 py-3.5 bg-gradient-to-r from-brand-900 to-brand-700 hover:from-brand-850 hover:to-brand-650 text-white rounded-full text-xs font-bold transition border border-brand-808/30 hover:scale-[1.02] shadow-md shadow-brand-900/15 cursor-pointer"
            >
              Academic Inquiries Desk
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
