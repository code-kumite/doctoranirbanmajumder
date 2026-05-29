import { ServiceDetail, CourseDetail, Publication, DoctorCredential } from './types';

export const CLINIC_INFO = {
  name: "Diabetes-Obesity-Thyroid & Hormone Clinic",
  doctorName: "Dr. Anirban Majumder",
  doctorTitle: "Consultant Endocrinologist & Diabetologist",
  address: "26A, Gariahat Road (South), Dhakuria, Kolkata - 700031",
  landmark: "Near Dhakuria Bus Stand / South Kolkata Hospital area",
  phone: "033-35560180",
  phoneAlt1: "24148295",
  phoneMobile: "6291768688",
  email: "dranirban.mazumdar11@gmail.com",
  workingHours: "Monday to Friday, 12:00 PM - 08:00 PM",
  closedDays: "Saturday and Sunday closed",
  disclaimer: "This website is for informational and educational purposes only and does not replace professional medical consultation, diagnosis, or treatment."
};

export const DOCTOR_CREDENTIALS: DoctorCredential[] = [
  { degree: "MBBS", institution: "R G Kar Medical College, Calcutta University", year: "1986", details: "Core medical training and surgical internship" },
  { degree: "MD General Medicine", institution: "Calcutta National Medical College", year: "1991", details: "Advanced postgraduate training in systemic disease evaluation" },
  { degree: "DM Endocrinology", institution: "IPGMER and SSKM Hospital, Kolkata", year: "1997", details: "Super-specialty training in hormone systems, obesity, and diabetic care" },
  { degree: "FICP", institution: "Association of Physicians of India", year: "2014", details: "Fellowship of Indian College of Physicians" },
  { degree: "FACE", institution: "American Association of Clinical Endocrinology", year: "2020", details: "Fellowship of American College of Endocrinology" },
  { degree: "FRCP London", institution: "Royal College of Physicians, London", year: "2022", details: "Fellowship of the Royal College of Physicians of London" }
];

export const ACADEMIC_APPOINTMENTS = [
  { role: "Professor", organization: "Department of Endocrinology, KPC Medical College and Hospital, Kolkata" },
  { role: "Conjoint Faculty", organization: "University of Newcastle, Australia" },
  { role: "Regional Faculty", organization: "Certificate Course in Evidence Based Diabetes Management, PHFI (Public Health Foundation of India)" }
];

export const DOCTOR_AWARDS = [
  { title: "Subhas Mukherjee Memorial Oration Award", body: "Endocrine Society of India", year: "2021", details: "Acknowledging outstanding lifetime research and clinical contributions to Endocrinology" }
];

export const MEMBERSHIPS = [
  "Indian Medical Association (IMA)",
  "Association of Physicians of India (API)",
  "Diabetic Association of India",
  "Diabetic Foot Society of India (DFSI)",
  "Research Society for the Study of Diabetes in India (RSSDI)",
  "Association for Transgender Health in India (ATHI)"
];

export const OVERSEAS_TRAINING = [
  { course: "Diabetic Foot Diseases Specialist Training", hospital: "Royal Prince Alfred Hospital, University of Sydney, Australia", year: "2010", details: "Advanced methodologies for limb salvage and microvascular diabetic foot evaluation" },
  { course: "Epidemiology and Public Health Aspects of Diabetes Mellitus", location: "Marathon, Greece", year: "1998", details: "International epidemiology protocol and metabolic surveillance systems" }
];

export const SERVICES: ServiceDetail[] = [
  {
    id: "diabetes",
    title: "Diabetes Care",
    route: "/services/diabetes",
    shortDesc: "Comprehensive guidelines, advanced insulin protocols, and structured glucose optimization for Type 1, Type 2, and complex gestational diabetes.",
    longDesc: "Proper diabetes care is a continuous process that encompasses precise diagnosis, blood sugar stabilization, cardiovascular risk mitigation, and regular screening for microvascular and macrovascular complications. Under the direction of Dr. Anirban Majumder, our clinical approach focuses on evidence-based medication planning, lifestyle optimization, and structured patient self-management.",
    iconName: "Activity",
    focusPoints: [
      "Type 1 and Type 2 Diabetes treatment planning and long-term stabilization",
      "Comprehensive HbA1c review and individualised target setting",
      "Complication screening guidelines (Screening for diabetic kidney disease, retinopathy guidance, neuropathy testing)",
      "Continuous Glucose Monitoring (CGM) interpretation and sensor-augmented therapy",
      "Peripheral vascular assessment and diabetes foot risk evaluation",
      "Self-care education focusing on correct insulin injection techniques and hypoglycaemia prevention"
    ],
    faqs: [
      {
        question: "When should I consult a diabetologist instead of a general physician?",
        answer: "A consultation with a diabetologist is recommended if you have newly diagnosed diabetes, highly fluctuating blood sugar levels, recurring symptoms of hypoglycaemia (low blood sugar), symptoms of neuropathy/numbness, or if you require an advanced insulin regimen design."
      },
      {
        question: "Is diabetes management solely about prescribing medicines?",
        answer: "No. Successful diabetes management integrates structured patient education, regular biological monitoring, nutritional planning, cardiovascular risk screening, and consistent follow-up alongside personalized medical therapy."
      }
    ]
  },
  {
    id: "thyroid",
    title: "Thyroid Care",
    route: "/services/thyroid",
    shortDesc: "Expert clinical evaluation of hypothyroidism, hyperthyroidism, and hormone imbalances with careful autoantibody and metabolic profiling.",
    longDesc: "The thyroid gland dictates essential metabolic rates, energy production, body temperature regulation, and neuromuscular actions. Imbalances in thyroid hormones can profoundly impact daily physical functioning, weight stability, and psychological wellness. We provide highly specialized, laboratory-backed counseling and treatment planning for thyroid issues.",
    iconName: "Stethoscope",
    focusPoints: [
      "In-depth TSH, Free T3, and Free T4 profile evaluation and diagnosis",
      "Evidence-based Hypothyroid management (fatigue mitigation, weight management integration)",
      "Hyperthyroid treatment planning (palpitation reviews, tremors, and systemic monitoring)",
      "Thyroid autoantibody assessment (Hashimoto's Thyroiditis and Graves' Disease evaluation)",
      "Co-managed assessment of Thyroid disorders coexisting with Type 1 or Type 2 Diabetes"
    ],
    faqs: [
      {
        question: "Which medical specialist should treat thyroid problems?",
        answer: "An endocrinologist is the dedicated specialist who evaluates, diagnoses, and manages disorders of the thyroid gland and other hormone-secreting endocrine glands."
      },
      {
        question: "How does thyroid hormone imbalance affect body weight?",
        answer: "Hypothyroidism slows down metabolism and can cause light to moderate weight gain and severe fatigue. Conversely, hyperthyroidism accelerates metabolic processes, often leading to unexplained weight loss. Both require dedicated endocrine evaluation, rather than self-treatment."
      }
    ]
  },
  {
    id: "obesity",
    title: "Obesity & Metabolic Health",
    route: "/services/obesity",
    shortDesc: "Evidence-based, medically supervised metabolic assessment that addresses endocrine contributors to weight gain and insulin resistance.",
    longDesc: "Obesity is a multi-layered, chronic medical condition influenced by complex endocrine feedbacks, genetics, metabolic rate, physical activity, and stress hormones. Our clinical assessment looks beyond physical appearance, aiming to diagnose hidden hormonal impediments like insulin resistance, metabolic syndrome, and pituitary-adrenal markers to design safe, evidence-based management plans.",
    iconName: "HeartPulse",
    focusPoints: [
      "Specialist medical evaluation of biological and endocrine contributors to weight retention",
      "Detailed metabolic syndrome screening, waist-risk assessment, and insulin resistance testing",
      "Assessment of co-morbidities like hypertension, non-alcoholic fatty liver, and pre-diabetes",
      "Patient-centred, evidence-informed dietary counseling support without quick-fix claims",
      "Integrated care plans linking healthy weight reduction to improved blood glucose and lipid panels"
    ],
    faqs: [
      {
        question: "How can an endocrinologist help with chronic obesity?",
        answer: "An endocrinologist identifies and addresses underlying hormonal and metabolic dysfunctions (such as insulin resistance, thyroid disorders, or cortisol abnormalities) that may be impeding safe and sustained weight management."
      },
      {
        question: "Is obesity clinical management identical for every patient?",
        answer: "No. Effective weight and metabolic management is highly individualized, depending on a comprehensive review of the patient's chemical markers, lifestyle patterns, genetic risks, and current medications."
      }
    ]
  },
  {
    id: "hormone-disorders",
    title: "Hormone Disorders & Bone Health",
    route: "/services/hormone-disorders",
    shortDesc: "Evaluation and care plans for hirsutism, reproductive hormone imbalances, hypogonadism, osteoporosis, and specialized transgender endocrine support.",
    longDesc: "Endocrine glands regulate the body's chemical equilibrium, influencing bone density, hair distribution, reproductive wellness, energy levels, and general development. Disorders of these systems benefit deeply from precise hormonal testing and specialized clinical evaluation to ensure safe, tailored restoration of physiological balance.",
    iconName: "Microscope",
    focusPoints: [
      "Clinical evaluation of Hirsutism (excessive hair growth) and reproductive hormone abnormalities",
      "Comprehensive diagnostic assessment for Hypogonadism in both males and females",
      "Osteoporosis screening, bone mineral density review, and calcium/Vitamin D metabolism analysis",
      "Respectful, inclusive, and evidence-guided endocrine care for gender-related hormone needs"
    ],
    faqs: [
      {
        question: "What physical symptoms can indicate a hormone imbalance?",
        answer: "Symptoms such as unexplained weight gain or loss, persistent fatigue, irregular menstrual cycles, anomalous facial hair growth, low bone density, or unexpected mood swings can represent indicators for an endocrine evaluation."
      },
      {
        question: "Is it safe to start hormone supplements or therapies without an endocrinologist's guidance?",
        answer: "No. Hormones are potent biochemicals. Undertaking hormone therapies without detailed laboratory diagnostic assessments and professional medical oversight is associated with serious systemic risks."
      }
    ]
  }
];

export const DSME_CAMP_DETAILS = {
  title: "Diabetes Self Management Education (DSME) Camp",
  location: "Life Style Care Centre, 28/2, Gariahat Road (South), Kolkata - 700031",
  landmark: "In close proximity to the Dhakuria clinic",
  scheduleDay: "Saturday (Periodic Schedule)",
  timing: "08:00 AM - 04:00 PM",
  registrationFee: 4000,
  timeline: [
    { time: "08:00 AM", event: "Registration and initial fasting blood collection" },
    { time: "09:00 AM", event: "Nutritious group breakfast" },
    { time: "09:15 AM - 12:30 PM", event: "Interactive Patient Education Series: Diabetes monitoring guidelines, foot protection, insulin storage and self-injection pathways, and dietary counseling" },
    { time: "12:30 PM - 01:30 PM", event: "Structured medical lunch" },
    { time: "01:30 PM - 03:00 PM", event: "Interactive Session (Part 2) followed by post-prandial blood collection" },
    { time: "03:00 PM", event: "Refreshment tea and feedback collection" }
  ],
  investigations: [
    "Plasma Glucose Fasting",
    "Plasma Glucose Post-Prandial",
    "HbA1c (Glycated Haemoglobin)",
    "Comprehensive Lipid Profile (Cholesterol, HDL, LDL, Triglycerides)",
    "SGOT / SGPT (Liver Function markers)",
    "Serum Creatinine",
    "Spot Urine Microalbumin and Creatinine Ratio (Early Kidney Marker)",
    "TSH (Thyroid Stimulating Hormone)"
  ],
  otherAssessments: [
    "Retina Check-up (Screening for diabetic retinopathy)",
    "Electrocardiogram (ECG) (Cardiac assessment)",
    "Biothesiometry (Neuropathy check for foot nerve sensitivity)",
    "Peripheral Vascular Doppler (Foot circulation assessment)"
  ]
};

export const COURSES: CourseDetail[] = [
  {
    title: "Integrated Diabetes and Endocrine Course",
    acronym: "IDEC",
    targetAudience: "General Physicians and Medical Practitioners seeking endocrinology expertise",
    collaboration: "Joint academic venture in collaboration with Kolkata Hormone Foundation, KPC Medical College & Hospital, University of Newcastle (Australia), and John Hunter Hospital / Hunter New England Health, Australia.",
    keyFeatures: [
      "Rigorous problem-based learning methodology across 12 comprehensive modules",
      "Deep clinical study of early diagnosis, treatment protocols, and emergency endocrine management",
      "Supervised clinical case reviews aimed at elevating primary endocrinology care standards"
    ]
  },
  {
    title: "Certificate Course in Evidence Based Diabetes Management",
    acronym: "CCEBDM",
    targetAudience: "Evolving medical practitioners and post-graduate health professionals",
    collaboration: "Developed and certified by the Public Health Foundation of India (PHFI), New Delhi. Dr. Anirban Majumder is a designated Regional Faculty member.",
    keyFeatures: [
      "Focuses on clinical research synthesis and applying empirical guidelines to patient selection",
      "In-depth analysis of risk assessment, prognostic guidelines, and complicated disease management",
      "Continuous appraisal and educational quality control"
    ]
  },
  {
    title: "National Diabetes Educator Programme",
    acronym: "NDEP",
    targetAudience: "Paramedical professionals, nurses, nutritionists, and clinic educators",
    collaboration: "Administered in association with the Kolkata Hormone Foundation and Dr. Mohan's Diabetes Education Academy.",
    keyFeatures: [
      "Empowers caregivers to deliver high-quality patient self-management support",
      "Covers specialized components including structured meal-planning, blood glucose monitoring logs, insulin handling, and early complication recognition",
      "Practical assessment modules centered on empathetic patient communication"
    ]
  }
];

export const RESEARCH_PUBLICATIONS: Publication[] = [
  {
    title: "Neuropathy and microvascular profiles in newly diagnosed Type 2 diabetes cases in Eastern India",
    authors: "Majumder A., et al.",
    journal: "Indian Journal of Endocrinology and Metabolism",
    year: 2018,
    doi: "10.4103/ijem.IJEM_221_18",
    summary: "A clinical cohort study evaluating early nerve conduction impairment and microvascular anomalies in patients at original clinical presentation in Gariahat and South Kolkata."
  },
  {
    title: "Thyroid autoantibodies and profile imbalances in young subjects presenting with Type 1 Diabetes",
    authors: "Majumder A., Mitra S.",
    journal: "Journal of Association of Physicians of India",
    year: 2019,
    doi: "10.5114/japi.2019.89201",
    summary: "Investigating the coexistence of Anti-TPO antibodies and abnormal TSH profiles in Type 1 diabetes sub-populations, emphasizing systematic dual screening protocols."
  },
  {
    title: "Endocrine profiles and long-term surveillance metrics in female-to-male transgender subjects following testosterone administration",
    authors: "Majumder A., et al.",
    journal: "Endocrine Practice",
    year: 2020,
    doi: "10.1016/j.eprac.2020.08.012",
    summary: "Highly clinical longitudinal study mapping lipid panels, hepatic responses, and gonadal hormone adjustments in subjects receiving masculine gender hormone care."
  },
  {
    title: "National Consensus and Practical Guidelines for Basal Insulin Initiation and Titration in Type 2 Diabetes",
    authors: "Majumder A., RSSDI consensus group",
    journal: "International Journal of Diabetes in Developing Countries",
    year: 2021,
    doi: "10.1007/s13410-021-00982-x",
    summary: "Guiding consensus defining clinical milestones for safely introducing long-acting basal insulin at primary care levels across India."
  },
  {
    title: "Assessment of iodine deficiency markers among pregnant and lactating women in coastal and urban communities of West Bengal",
    authors: "Majumder A., CNMC study team",
    journal: "Thyroid Research and Practice",
    year: 2017,
    doi: "10.4103/trp.trp_14_17",
    summary: "Urinary iodine concentration evaluation mapping fetal and maternal thyroid profiles during critical developmental windows."
  },
  {
    title: "Clinical reviews of castration practices and subsequent severe hypogonadism in the Hijra transgender community",
    authors: "Majumder A.",
    journal: "Association for Transgender Health in India proceedings",
    year: 2015,
    summary: "A pioneering public health and endocrine review addressing chemical and endocrine impacts of non-professional surgeries, urging medicalization and mental wellness guidelines."
  }
];

export const HOMEPAGE_FAQS = [
  {
    question: "Who should visit an endocrinologist?",
    answer: "An endocrinologist specializes in the hormone-producing glands and metabolic pathways. Patients experiencing uncontrolled diabetes, thyroid disorders, metabolic resistance/severe obesity, bone weakening or osteoporosis, hirsutism, or hypogonadism should seek specialist evaluation."
  },
  {
    question: "Where is the Diabetes-Obesity-Thyroid & Hormone Clinic located?",
    answer: "The clinic is located in South Kolkata at 26A, Gariahat Road (South), Dhakuria, Kolkata - 700031. It is easily accessible from Dhakuria, Gariahat, Jadavpur, and Ballygunge."
  },
  {
    question: "What are the clinic's consulting hours?",
    answer: "The clinic is open from Monday to Friday, 12:00 PM to 08:00 PM. The clinic is closed on Saturdays and Sundays."
  }
];
