import { useState } from 'react';
import { Activity, ShieldAlert, Heart, RefreshCw } from 'lucide-react';

export default function MedicalCalculator() {
  const [activeTab, setActiveTab] = useState<'hba1c' | 'metabolic'>('hba1c');

  // HbA1c converter state
  const [hba1c, setHba1c] = useState<string>('7.0');
  const [eagMg, setEagMg] = useState<number>(154);
  const [eagMmol, setEagMmol] = useState<number>(8.6);

  // Metabolic risk state
  const [gender, setGender] = useState<'male' | 'female'>('male');
  const [waist, setWaist] = useState<string>('');
  const [waistUnit, setWaistUnit] = useState<'cm' | 'inches'>('inches'); // Default to inches as standard Indian trouser measure
  const [hasHighBP, setHasHighBP] = useState(false);
  const [hasHighSugar, setHasHighSugar] = useState(false);
  const [hasHighTG, setHasHighTG] = useState(false);
  const [hasLowHDL, setHasLowHDL] = useState(false);

  // Lifestyle & Clinical Indicators
  const [dietHighCarb, setDietHighCarb] = useState(false);
  const [postMealSnooze, setPostMealSnooze] = useState(false);
  const [familyHistory, setFamilyHistory] = useState(false);
  const [skinSigns, setSkinSigns] = useState(false);

  const [riskAssessment, setRiskAssessment] = useState<{
    riskLevel: 'Low' | 'Moderate' | 'High';
    points: number;
    description: string;
    lifestyleReport: { title: string; advice: string }[];
  } | null>(null);

  const handleHbA1cChange = (value: string) => {
    setHba1c(value);
    const num = parseFloat(value);
    if (!isNaN(num) && num >= 4 && num <= 20) {
      // ADAG formula: eAG(mg/dL) = 28.7 * HbA1c - 46.7
      const mgDl = Math.round(28.7 * num - 46.7);
      // eAG(mmol/L) = mgDl / 18
      const mmolL = parseFloat((mgDl / 18.0).toFixed(1));
      setEagMg(mgDl);
      setEagMmol(mmolL);
    } else {
      setEagMg(0);
      setEagMmol(0);
    }
  };

  const calculateMetabolicRisk = () => {
    let score = 0;
    const wNum = parseFloat(waist);

    // Convert to Centimeters if user typed in inches
    let wNumCm = 0;
    if (!isNaN(wNum)) {
      wNumCm = waistUnit === 'inches' ? wNum * 2.54 : wNum;
    }

    // Waist circumference threshold check (IDF guidelines: >=90cm for men, >=80cm for women)
    const isWaistAtRisk =
      wNumCm > 0 && ((gender === 'male' && wNumCm >= 90) || (gender === 'female' && wNumCm >= 80));

    if (isWaistAtRisk) score += 1;
    if (hasHighBP) score += 1;
    if (hasHighSugar) score += 1;
    if (hasHighTG) score += 1;
    if (hasLowHDL) score += 1;

    let level: 'Low' | 'Moderate' | 'High' = 'Low';
    let text = '';

    if (score >= 3) {
      level = 'High';
      text = 'Your clinical diagnostic points denote high probability of Metabolic Syndrome. An integrated screening of lipid profiles, cardiovascular risk factors, and HbA1c stability with a specialist is strongly advised.';
    } else if (score === 1 || score === 2) {
      level = 'Moderate';
      text = 'Early warning risk factors detected. Indians have a dynamic metabolic phenotype; taking immediate preventive steps will help avoid the progression toward full-blown diabetes.';
    } else {
      level = 'Low';
      text = 'Your baseline metabolic parameters appear overall stable. Maintain consistent active lifestyle, good quality sleep, and periodic checkups.';
    }

    // Build specific regional assessments
    const lifestyleReport: { title: string; advice: string }[] = [];

    if (dietHighCarb) {
      lifestyleReport.push({
        title: 'Refined Carbs Glycemic Spike (Rice & Mishti)',
        advice: 'Diets heavy in white rice (Siddha/Aatop), maida-rich Luchi/Kochuri, or daily sweets (Rosogolla, Sandesh) demand massive insulin release from our pancreas. Choose high-fiber grains like coarse Red/Brown Rice, whole wheat Roti, or Jowar/Oats, and substitute sugar in tea.'
      });
    }

    if (postMealSnooze) {
      lifestyleReport.push({
        title: 'Post-Meal Energy Crashes ("Bhaat-Ghum" Lethargy)',
        advice: 'Feeling extremely sluggish or falling asleep within an hour after high-carb meals often signals a sharp insulin spike followed by reactive hypoglycemia. Portion control and splitting carbohydrates with healthy proteins can suppress this crash.'
      });
    }

    if (familyHistory) {
      lifestyleReport.push({
        title: 'Generational Metabolic Heritage ("Baba-Ma" Diabetes)',
        advice: 'Bengali populations are strongly affected by the "thrifty genotype", driving excess fat deposition in the abdomen as visceral fat rather than under the skin. A family history of heart disease, bypass surge, or Type-2 Diabetes in parent/sibling means lifestyle management is crucial.'
      });
    }

    if (skinSigns) {
      lifestyleReport.push({
        title: 'Insulin Resistance Skin Clues (Dark Neck & Skin Tags)',
        advice: 'Darkening/velvety thickening of the skin behind the neck / armpits (Acanthosis Nigricans) or numerous skin tags are classic physical warning signs. This represents high circulating insulin levels and represents insulin resistance, not sun-tanning.'
      });
    }

    setRiskAssessment({
      riskLevel: level,
      points: score,
      description: text,
      lifestyleReport: lifestyleReport,
    });
  };

  const resetMetabolic = () => {
    setWaist('');
    setHasHighBP(false);
    setHasHighSugar(false);
    setHasHighTG(false);
    setHasLowHDL(false);
    setDietHighCarb(false);
    setPostMealSnooze(false);
    setFamilyHistory(false);
    setSkinSigns(false);
    setRiskAssessment(null);
  };

  return (
    <div className="bg-[#0c0a21]/80 backdrop-blur-md rounded-xl border border-brand-400/40 shadow-2xl overflow-hidden text-slate-200 relative z-10">
      
      {/* Header and navigation tabs */}
      <div className="bg-[#0a081f] px-6 py-4 border-b border-brand-400/30">
        <h3 className="text-white font-serif text-lg font-bold">
          Interactive Endocrine Utilities
        </h3>
        <p className="text-[11px] text-slate-400 mt-1">
          Clinically grounded screening tools based on international ADA & IDF guidelines.
        </p>
      </div>

      <div className="flex border-b border-brand-400/30 bg-[#060515]/30">
        <button
          onClick={() => setActiveTab('hba1c')}
          className={`flex-1 py-3.5 px-4 text-xs sm:text-sm font-semibold tracking-wide uppercase transition border-b-2 flex items-center justify-center gap-2 cursor-pointer ${
            activeTab === 'hba1c'
              ? 'border-brand-800 text-white bg-[#0c0a21]/50'
              : 'border-transparent text-slate-500 hover:text-slate-350'
          }`}
        >
          <Activity className="w-4 h-4 shrink-0 text-brand-800" />
          HbA1c & eAG Converter
        </button>
        <button
          onClick={() => setActiveTab('metabolic')}
          className={`flex-1 py-3.5 px-4 text-xs sm:text-sm font-semibold tracking-wide uppercase transition border-b-2 flex items-center justify-center gap-2 cursor-pointer ${
            activeTab === 'metabolic'
              ? 'border-brand-800 text-white bg-[#0c0a21]/50'
              : 'border-transparent text-slate-500 hover:text-slate-350'
          }`}
        >
          <Heart className="w-4 h-4 shrink-0 text-brand-800" />
          Metabolic Syndrome Quiz
        </button>
      </div>

      {/* CALCULATOR PANELS */}
      <div className="p-6">
        
        {/* Converter Panel */}
        {activeTab === 'hba1c' && (
          <div className="space-y-6">
            <div className="text-xs text-slate-400 leading-relaxed">
              Glycated Haemoglobin (HbA1c) represents your percentage of blood glucose saturation over three months. Use this standard converter to translate your HbA1c percentage into <span className="font-semibold text-slate-200">estimated Average Glucose (eAG)</span>.
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
              
              {/* Input field */}
              <div className="space-y-2">
                <label htmlFor="hba1cInput" className="block text-xs font-semibold uppercase tracking-wider text-slate-400">
                  Enter HbA1c Level (%)
                </label>
                <div className="flex items-center gap-3">
                  <input
                    id="hba1cInput"
                    type="number"
                    step="0.1"
                    min="4"
                    max="20"
                    placeholder="e.g., 7.0"
                    value={hba1c}
                    onChange={(e) => handleHbA1cChange(e.target.value)}
                    className="w-full px-4 py-3 text-lg font-mono rounded-lg border border-brand-400/40 bg-brand-200/50 text-white placeholder-slate-500 focus:bg-brand-200 focus:border-brand-800 outline-none focus:ring-1 focus:ring-brand-800 transition shadow-inner"
                  />
                  <span className="text-sm font-serif font-semibold text-brand-800">%</span>
                </div>
                <span className="block text-[11px] text-slate-500">
                  Valid standard range: 4.0% to 20.0%
                </span>
              </div>

              {/* Outputs box */}
              <div className="bg-brand-900/20 rounded-xl border border-brand-850/40 p-5 space-y-3 shadow-lg">
                <span className="block text-center text-xs font-semibold uppercase tracking-wider text-brand-800">
                  Estimated Average Glucose (eAG)
                </span>
                <div className="text-center py-2">
                  <span className="text-3xl font-mono font-extrabold text-white">
                    {eagMg > 0 ? eagMg : '--'}
                  </span>
                  <span className="text-xs font-semibold text-slate-400 ml-1.5">mg/dL</span>
                </div>
                <div className="border-t border-brand-400/20 pt-2 text-center text-xs text-slate-400">
                  Metric translation:{' '}
                  <span className="font-mono font-bold text-brand-800">{eagMmol > 0 ? eagMmol : '--'}</span>{' '}
                  mmol/L
                </div>
              </div>

            </div>

            {/* Threshold Reference Indicator */}
            {parseFloat(hba1c) > 0 && (
              <div className="border border-brand-400/30 rounded-lg p-4 bg-[#060515]/50 text-xs">
                <div className="font-semibold text-brand-800 mb-2">Clinical Interpretation Guidance:</div>
                <div className="grid grid-cols-3 gap-2 text-center pt-2 text-[10px]">
                  <div className={`p-2 rounded border ${parseFloat(hba1c) < 5.7 ? 'bg-emerald-950/30 border-emerald-800/40 text-emerald-400 font-bold' : 'bg-brand-100/10 border-brand-300/10 text-slate-400'}`}>
                    Normal
                    <span className="block font-mono font-semibold text-[9px] mt-0.5">&lt; 5.7%</span>
                  </div>
                  <div className={`p-2 rounded border ${parseFloat(hba1c) >= 5.7 && parseFloat(hba1c) < 6.5 ? 'bg-yellow-950/30 border-yellow-800/40 text-yellow-400 font-bold' : 'bg-brand-100/10 border-brand-300/10 text-slate-400'}`}>
                    Pre-Diabetes
                    <span className="block font-sans font-semibold text-[9px] mt-0.5">5.7% - 6.4%</span>
                  </div>
                  <div className={`p-2 rounded border ${parseFloat(hba1c) >= 6.5 ? 'bg-red-950/30 border-red-800/40 text-red-400 font-bold' : 'bg-brand-100/10 border-brand-300/10 text-slate-400'}`}>
                    Diabetes Range
                    <span className="block font-mono font-semibold text-[9px] mt-0.5">&ge; 6.5%</span>
                  </div>
                </div>
                <p className="mt-3 text-[10px] text-slate-500 italic">
                  Formula standard: eAG (mg/dL) = 28.7 * HbA1c - 46.7. Source: American Diabetes Association (ADA).
                </p>
              </div>
            )}
          </div>
        )}

        {/* Metabolic Quiz Panel */}
        {activeTab === 'metabolic' && (
          <div className="space-y-6">
            <div className="p-4 rounded-xl bg-brand-900/15 border border-brand-850/40 text-xs text-slate-300 leading-relaxed space-y-2 shadow-inner">
              <p className="font-serif font-bold text-brand-800 text-sm">
                The Indian "Thin-Fat" Phenotype & Visceral Adiposity
              </p>
              <p>
                People from India and Bengal carry a unique genetic predisposition where fat is stored inside the abdomen (<span className="font-semibold text-brand-805">Visceral Adiposity</span>) around vital organs, rather than as soft fat under the skin. As a result, you might look overall lean or thin, yet still carry high risk for insulin resistance, high cholesterol, and Type 2 Diabetes.
              </p>
              <p className="text-[11px] text-slate-500 italic">
                *IDF guidelines formulate specific, lower waist threshold standards for Indian populations to catch early warning signs.
              </p>
            </div>

            <div className="space-y-5">
              
              {/* Gender and Waist circumference with Unit Switcher */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 p-4 rounded-xl border border-brand-400/30 bg-[#060515]/40 shadow-inner">
                <div className="space-y-2">
                  <span className="block text-xs font-semibold uppercase tracking-wider text-slate-400">
                    1. Biological Marker Standards
                  </span>
                  <div className="flex gap-2">
                    <button
                      type="button"
                      onClick={() => setGender('male')}
                      className={`flex-1 py-2.5 text-xs rounded-lg border transition duration-150 cursor-pointer text-center ${
                        gender === 'male'
                          ? 'border-brand-850 bg-brand-900/35 text-white font-bold shadow-md shadow-brand-900/25'
                          : 'border-brand-400/40 bg-brand-100/10 text-slate-400 hover:bg-brand-100/20 hover:text-white'
                      }`}
                    >
                      Male <span className="block text-[10px] font-normal text-slate-500 font-mono">Target &lt; 90 cm (35.4")</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setGender('female')}
                      className={`flex-1 py-2.5 text-xs rounded-lg border transition duration-150 cursor-pointer text-center ${
                        gender === 'female'
                          ? 'border-brand-850 bg-brand-900/35 text-white font-bold shadow-md shadow-brand-900/25'
                          : 'border-brand-400/40 bg-brand-100/10 text-slate-400 hover:bg-brand-100/20 hover:text-white'
                      }`}
                    >
                      Female <span className="block text-[10px] font-normal text-slate-500 font-mono">Target &lt; 80 cm (31.5")</span>
                    </button>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <label htmlFor="waistInput" className="block text-xs font-semibold uppercase tracking-wider text-slate-400">
                      2. Waist Circumference
                    </label>
                    
                    {/* Unit Toggle */}
                    <div className="inline-flex rounded-md p-0.5 bg-brand-200/50 border border-brand-400/30 text-xs">
                      <button
                        type="button"
                        onClick={() => {
                          setWaistUnit('inches');
                          if (waist && !isNaN(parseFloat(waist))) {
                            setWaist((parseFloat(waist) / 2.54).toFixed(1));
                          }
                        }}
                        className={`px-2 py-0.5 rounded text-[10px] font-bold cursor-pointer transition ${
                          waistUnit === 'inches' ? 'bg-brand-800 text-white shadow-md' : 'text-slate-500'
                        }`}
                      >
                        Inches
                      </button>
                      <button
                        type="button"
                        onClick={() => {
                          setWaistUnit('cm');
                          if (waist && !isNaN(parseFloat(waist))) {
                            setWaist((parseFloat(waist) * 2.54).toFixed(1));
                          }
                        }}
                        className={`px-2 py-0.5 rounded text-[10px] font-bold cursor-pointer transition ${
                          waistUnit === 'cm' ? 'bg-brand-800 text-white shadow-md' : 'text-slate-500'
                        }`}
                      >
                        cm
                      </button>
                    </div>
                  </div>

                  <div className="relative">
                    <input
                      id="waistInput"
                      type="number"
                      placeholder={waistUnit === 'inches' ? 'e.g. 34' : 'e.g. 86'}
                      value={waist}
                      onChange={(e) => setWaist(e.target.value)}
                      className="w-full pl-3 pr-16 py-2.5 text-sm rounded-lg border border-brand-400/40 bg-brand-200/50 text-white placeholder-slate-550 focus:bg-brand-200 focus:border-brand-800 outline-none focus:ring-1 focus:ring-brand-800 transition font-mono shadow-inner"
                    />
                    <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none text-xs text-slate-500 font-bold uppercase font-mono">
                      {waistUnit}
                    </div>
                  </div>

                  {/* Micro Live Converter Info */}
                  {waist && !isNaN(parseFloat(waist)) && parseFloat(waist) > 0 && (
                    <div className="text-[10px] text-brand-800 font-medium">
                      Equivalent to:{' '}
                      <span className="font-bold underline">
                        {waistUnit === 'inches'
                          ? `${Math.round(parseFloat(waist) * 2.54)} cm`
                          : `${(parseFloat(waist) / 2.54).toFixed(1)} inches`}
                      </span>{' '}
                      {gender === 'male' && (waistUnit === 'inches' ? parseFloat(waist) >= 35.4 : parseFloat(waist) >= 90) && (
                        <span className="text-red-400 font-semibold font-serif ml-1">(Exceeds Recommended Male Standard &ge; 90cm)</span>
                      )}
                      {gender === 'female' && (waistUnit === 'inches' ? parseFloat(waist) >= 31.5 : parseFloat(waist) >= 80) && (
                        <span className="text-red-400 font-semibold font-serif ml-1">(Exceeds Recommended Female Standard &ge; 80cm)</span>
                      )}
                    </div>
                  )}
                </div>
              </div>

              {/* Interactive Risk Markers */}
              <div className="space-y-3 border-t border-brand-400/30 pt-4">
                <span className="block text-xs font-semibold uppercase tracking-wider text-slate-400">
                  3. Standard Clinical Markers (If known or diagnosed)
                </span>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <label className="flex items-start gap-2.5 p-3 bg-[#0c0a21]/30 border border-brand-400/35 rounded-xl text-xs leading-normal cursor-pointer hover:border-brand-800/60 transition hover:bg-[#0c0a21]/50">
                    <input
                      type="checkbox"
                      checked={hasHighBP}
                      onChange={(e) => setHasHighBP(e.target.checked)}
                      className="w-4.5 h-4.5 shrink-0 text-brand-800 border-brand-400/40 focus:ring-brand-800 bg-brand-200/50 rounded mt-0.5 cursor-pointer"
                    />
                    <div className="space-y-0.5">
                      <span className="font-bold text-slate-200 block font-serif">High Blood Pressure</span>
                      <span className="text-[10px] text-slate-400 leading-none">BP &ge; 130/85 mmHg or currently taking anti-hypertensives</span>
                    </div>
                  </label>

                  <label className="flex items-start gap-2.5 p-3 bg-[#0c0a21]/30 border border-brand-400/35 rounded-xl text-xs leading-normal cursor-pointer hover:border-brand-800/60 transition hover:bg-[#0c0a21]/50">
                    <input
                      type="checkbox"
                      checked={hasHighSugar}
                      onChange={(e) => setHasHighSugar(e.target.checked)}
                      className="w-4.5 h-4.5 shrink-0 text-brand-800 border-brand-400/40 focus:ring-brand-800 bg-brand-200/50 rounded mt-0.5 cursor-pointer"
                    />
                    <div className="space-y-0.5">
                      <span className="font-bold text-slate-200 block font-serif">Elevated Blood Sugar</span>
                      <span className="text-[10px] text-slate-400 leading-none">Fasting Glucose &ge; 100 mg/dL or taking Diabetes medicines</span>
                    </div>
                  </label>

                  <label className="flex items-start gap-2.5 p-3 bg-[#0c0a21]/30 border border-brand-400/35 rounded-xl text-xs leading-normal cursor-pointer hover:border-brand-800/60 transition hover:bg-[#0c0a21]/50">
                    <input
                      type="checkbox"
                      checked={hasHighTG}
                      onChange={(e) => setHasHighTG(e.target.checked)}
                      className="w-4.5 h-4.5 shrink-0 text-brand-800 border-brand-400/40 focus:ring-brand-800 bg-brand-200/50 rounded mt-0.5 cursor-pointer"
                    />
                    <div className="space-y-0.5">
                      <span className="font-bold text-slate-200 block font-serif">Elevated Triglycerides</span>
                      <span className="text-[10px] text-slate-400 leading-none">TG &ge; 150 mg/dL or taking lipid-lowering tablets</span>
                    </div>
                  </label>

                  <label className="flex items-start gap-2.5 p-3 bg-[#0c0a21]/30 border border-brand-400/35 rounded-xl text-xs leading-normal cursor-pointer hover:border-brand-800/60 transition hover:bg-[#0c0a21]/50">
                    <input
                      type="checkbox"
                      checked={hasLowHDL}
                      onChange={(e) => setHasLowHDL(e.target.checked)}
                      className="w-4.5 h-4.5 shrink-0 text-brand-800 border-brand-400/40 focus:ring-brand-800 bg-brand-200/50 rounded mt-0.5 cursor-pointer"
                    />
                    <div className="space-y-0.5">
                      <span className="font-bold text-slate-200 block font-serif">Low HDL Good Cholesterol</span>
                      <span className="text-[10px] text-slate-400 leading-none">&lt; 40 mg/dL for men, or &lt; 50 mg/dL for women</span>
                    </div>
                  </label>
                </div>
              </div>

              {/* Lifestyle & Predisposition Audit */}
              <div className="space-y-3 border-t border-brand-400/20 pt-4 bg-brand-900/10 p-4 rounded-xl border border-dashed border-brand-400/40 shadow-inner">
                <div className="space-y-0.5">
                  <span className="block text-xs font-semibold uppercase tracking-wider text-brand-800">
                    4. Lifestyle & Hereditary Audit
                  </span>
                  <p className="text-[10px] text-slate-450 leading-snug">
                    These cultural and genetic indicators help Dr. Majumder paint an accurate picture of your personal metabolic activity:
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <label className="flex items-start gap-2.5 text-xs leading-relaxed cursor-pointer select-none">
                    <input
                      type="checkbox"
                      checked={dietHighCarb}
                      onChange={(e) => setDietHighCarb(e.target.checked)}
                      className="w-4 h-4 shrink-0 rounded text-brand-800 border-brand-400/40 focus:ring-brand-800 mt-1 cursor-pointer"
                    />
                    <div className="space-y-0.5">
                      <span className="font-semibold text-slate-200 block">High Carb Diet (Bhaat, Luchi, Sweets)</span>
                      <span className="text-[10.5px] text-slate-400 block leading-tight">Frequent consumption of potatoes in curry/biryani, daily white rice, luchi/parotta, or mishti.</span>
                    </div>
                  </label>

                  <label className="flex items-start gap-2.5 text-xs leading-relaxed cursor-pointer select-none">
                    <input
                      type="checkbox"
                      checked={postMealSnooze}
                      onChange={(e) => setPostMealSnooze(e.target.checked)}
                      className="w-4 h-4 shrink-0 rounded text-brand-800 border-brand-400/40 focus:ring-brand-800 mt-1 cursor-pointer"
                    />
                    <div className="space-y-0.5">
                      <span className="font-semibold text-slate-200 block">Severe Post-Lunch Sluggishness ("Bhaat-Ghum")</span>
                      <span className="text-[10.5px] text-slate-400 block leading-tight">An intense, irresistible drowsiness or energy crash immediately after eating a high-carb lunch.</span>
                    </div>
                  </label>

                  <label className="flex items-start gap-2.5 text-xs leading-relaxed cursor-pointer select-none">
                    <input
                      type="checkbox"
                      checked={familyHistory}
                      onChange={(e) => setFamilyHistory(e.target.checked)}
                      className="w-4 h-4 shrink-0 rounded text-brand-800 border-brand-400/40 focus:ring-brand-800 mt-1 cursor-pointer"
                    />
                    <div className="space-y-0.5">
                      <span className="font-semibold text-slate-200 block">Family History ("Ma & Baba" Diabetes/Thyroid)</span>
                      <span className="text-[10.5px] text-slate-400 block leading-tight">Parents, grandparents, or siblings diagnosed with cardiac bypass, diabetes, metabolic syndrome, or severe obesity.</span>
                    </div>
                  </label>

                  <label className="flex items-start gap-2.5 text-xs leading-relaxed cursor-pointer select-none">
                    <input
                      type="checkbox"
                      checked={skinSigns}
                      onChange={(e) => setSkinSigns(e.target.checked)}
                      className="w-4 h-4 shrink-0 rounded text-brand-800 border-brand-400/40 focus:ring-brand-800 mt-1 cursor-pointer"
                    />
                    <div className="space-y-0.5">
                      <span className="font-semibold text-slate-200 block">Physical Signs of Insulin Resistance</span>
                      <span className="text-[10.5px] text-slate-400 block leading-tight">Velvety dark skin rings on neck creases, knuckles, or numerous neck/armpit skin tags.</span>
                    </div>
                  </label>
                </div>
              </div>

              {/* Action buttons */}
              <div className="flex gap-2 pt-2 border-t border-brand-400/30">
                <button
                  type="button"
                  onClick={calculateMetabolicRisk}
                  className="flex-1 py-3 bg-gradient-to-r from-brand-900 to-brand-700 hover:from-brand-850 hover:to-brand-650 text-white rounded-lg text-xs font-bold uppercase tracking-wider transition cursor-pointer shadow-md shadow-brand-900/15 duration-150 border border-brand-800/30"
                >
                  Analyze My Metabolic Profile
                </button>
                <button
                  type="button"
                  onClick={resetMetabolic}
                  className="px-5 py-3 bg-brand-100/10 hover:bg-brand-100/20 text-slate-350 hover:text-white rounded-lg text-xs font-bold uppercase tracking-wider transition flex items-center gap-1 cursor-pointer border border-brand-400/30 duration-150"
                >
                  <RefreshCw className="w-3.5 h-3.5 font-bold" />
                  Reset
                </button>
              </div>

              {/* Assessment display */}
              {riskAssessment && (
                <div className="mt-6 border border-brand-400/40 rounded-xl overflow-hidden shadow-2xl animate-fadeIn duration-350">
                  
                  {/* Gauge Header */}
                  <div className={`p-4 text-xs font-semibold uppercase tracking-wider flex items-center justify-between border-b ${
                    riskAssessment.riskLevel === 'High'
                      ? 'bg-red-950/20 border-red-800/40 text-red-400'
                      : riskAssessment.riskLevel === 'Moderate'
                      ? 'bg-yellow-950/20 border-yellow-800/40 text-yellow-400'
                      : 'bg-emerald-950/20 border-emerald-800/40 text-emerald-400'
                  }`}>
                    <div className="flex items-center gap-2">
                      <ShieldAlert className="w-5 h-5 grow-0 shrink-0" />
                      <span>
                        Primary Target Metabolic Score:{' '}
                        <span className="font-mono font-extrabold text-sm">{riskAssessment.points}</span> / 5
                      </span>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-[10px] font-extrabold font-serif shadow-sm uppercase tracking-widest border ${
                      riskAssessment.riskLevel === 'High'
                        ? 'bg-red-900/40 border-red-700/45 text-white'
                        : riskAssessment.riskLevel === 'Moderate'
                        ? 'bg-yellow-900/40 border-yellow-700/45 text-white'
                        : 'bg-emerald-900/40 border-emerald-700/45 text-white'
                    }`}>
                      {riskAssessment.riskLevel} CLINICAL RISK Level
                    </span>
                  </div>

                  <div className="p-5 bg-[#0a081f] space-y-4">
                    <p className="text-sm font-medium text-slate-300 leading-relaxed font-sans">
                      {riskAssessment.description}
                    </p>

                    {/* Regional Insights Block */}
                    {riskAssessment.lifestyleReport.length > 0 && (
                      <div className="space-y-3.5 pt-4 border-t border-brand-400/25">
                        <span className="block text-[11px] font-bold uppercase tracking-wider text-slate-500 font-mono">
                          Indian Lifestyle Insights:
                        </span>
                        
                        <div className="space-y-3">
                          {riskAssessment.lifestyleReport.map((item, idx) => (
                            <div key={idx} className="p-3.5 rounded-lg bg-brand-900/20 border border-brand-850/45 text-xs text-slate-300 leading-relaxed shadow-inner">
                              <span className="font-serif font-bold text-brand-800 block mb-1 text-[13px]">{item.title}</span>
                              <p className="font-medium text-slate-300">{item.advice}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Kolkata Lifestyle Advice Actions */}
                    <div className="pt-4 border-t border-brand-400/25 space-y-2">
                       <span className="block text-[11px] font-bold uppercase tracking-wider text-slate-500 font-mono">
                         Dr. Majumder's General Kolkata Health Tips:
                       </span>
                       <ul className="text-xs text-slate-450 space-y-2.5 list-disc pl-4 leading-normal font-sans">
                         <li>
                           <strong className="text-slate-200 font-serif">Rabindra Sarobar / Maidan Walks:</strong> Establish a routine of at least 30-40 minutes of brisk, active walking daily at Gariahat parks, Rabindra Sarobar lakes, or neighborhood spaces to trigger muscle insulin receptor activity.
                         </li>
                         <li>
                           <strong className="text-slate-200 font-serif">Portion Control of Staples:</strong> Reduce the sheer volumes of rice at lunch. Introduce green fiber vegetables (shak, potol, jhinge) and lean proteins to flatten your glucose spikes.
                         </li>
                         <li>
                           <strong className="text-slate-200 font-serif">Comprehensive Profiling:</strong> Since central visceral fat is highly active, checking Fasting Insulin, Lipid profile ratios, and scheduling an Oral Glucose Tolerance Test (OGTT) provides complete clinical security.
                         </li>
                       </ul>
                    </div>

                    <div className="text-[10px] text-slate-500 pt-2.5 border-t border-brand-400/20 italic">
                      Diagnostic calculation standard references: IDF Indian Consensus statement, joint scientific statement of NHBLI, World Heart Federation, and American Heart Association.
                    </div>
                  </div>
                </div>
              )}

            </div>
          </div>
        )}

      </div>
    </div>
  );
}
