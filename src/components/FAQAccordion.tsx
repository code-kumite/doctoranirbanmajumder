import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  items: FAQItem[];
}

export default function FAQAccordion({ items }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleIndex = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-3">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div
            key={index}
            className="border border-brand-400/35 bg-[#0c0a21]/45 rounded-lg overflow-hidden transition-all duration-200 hover:border-brand-850 relative z-10 shadow-lg"
          >
            <button
              onClick={() => toggleIndex(index)}
              className="w-full flex justify-between items-center px-5 py-4 text-left transition hover:bg-brand-900/15 cursor-pointer"
              aria-expanded={isOpen}
              id={`faq-btn-${index}`}
              aria-controls={`faq-panel-${index}`}
            >
              <span className="font-serif font-semibold text-slate-150 text-sm sm:text-base pr-4 hover:text-brand-800 transition duration-150">
                {item.question}
              </span>
              <motion.span 
                className="text-slate-400 shrink-0"
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.2, ease: "easeInOut" }}
              >
                <ChevronDown className="w-5 h-5 text-brand-800" />
              </motion.span>
            </button>
            
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  id={`faq-panel-${index}`}
                  role="region"
                  aria-labelledby={`faq-btn-${index}`}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25, ease: "easeInOut" }}
                  className="overflow-hidden border-t border-brand-400/20"
                >
                  <div className="px-5 py-4 text-slate-400 text-xs sm:text-sm leading-relaxed whitespace-pre-line font-sans">
                    {item.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
