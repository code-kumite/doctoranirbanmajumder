import { useState, useEffect } from 'react';
import { Menu, X, Calendar, Activity, ChevronDown } from 'lucide-react';
import { CLINIC_INFO } from '../data';
import { AppRoute } from '../types';
import { motion, AnimatePresence } from 'motion/react';

interface HeaderProps {
  currentRoute: AppRoute;
  onNavigate: (route: AppRoute) => void;
}

interface NavChild {
  label: string;
  desc: string;
  route: AppRoute;
}

interface NavGroup {
  label: string;
  route?: AppRoute;
  children?: NavChild[];
}

export default function Header({ currentRoute, onNavigate }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileExpandedGroup, setMobileExpandedGroup] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navGroups: NavGroup[] = [
    { label: 'Home', route: '/' },
    {
      label: 'Clinic Profile',
      children: [
        { label: 'About Dr. Majumder', desc: 'FRCP (London) Fellow & Principal Endocrinologist', route: '/dr-anirban-majumder' },
        { label: 'Clinic Philosophy & Core Values', desc: 'Patient-centric values & evidence-guided guidelines', route: '/about-clinic' }
      ]
    },
    {
      label: 'Treatments',
      children: [
        { label: 'Services Overview', desc: 'Full-spectrum medical endocrine evaluation', route: '/services' },
        { label: 'Diabetes Management', desc: 'Insulin adjustment, CGMs, and cardiovascular prevention', route: '/services/diabetes' },
        { label: 'Thyroid Care & Nodules', desc: 'Comprehensive thyroid hormone, metabolic rate & biopsy support', route: '/services/thyroid' },
        { label: 'Obesity & Lipids', desc: 'Evidence-based body mass & metabolic wellness', route: '/services/obesity' },
        { label: 'Hormonal Disorders', desc: 'Pituitary, bone density, adrenal & secondary health', route: '/services/hormone-disorders' }
      ]
    },
    {
      label: 'Education',
      children: [
        { label: 'DSME Camp Programme', desc: 'Continuous patient education & self-testing support', route: '/programmes/dsme-camp' },
        { label: 'Professional Doctor Courses', desc: 'Hormone courses & teaching assignments', route: '/courses' },
        { label: 'Research & Publications', desc: 'International journals & scholarly credentials', route: '/research-publications' }
      ]
    },
    { label: 'Contact', route: '/contact' }
  ];

  const handleLinkClick = (route: AppRoute) => {
    onNavigate(route);
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const isActive = (route: AppRoute) => {
    if (route === '/' && currentRoute !== '/') return false;
    return currentRoute.startsWith(route) && (route !== '/' || currentRoute === '/');
  };

  const isGroupActive = (group: NavGroup) => {
    if (group.route) return isActive(group.route);
    if (group.children) {
      return group.children.some(child => isActive(child.route));
    }
    return false;
  };

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 border-b ${
        isScrolled
          ? 'bg-brand-950/80 backdrop-blur-md shadow-[0_4px_30px_rgba(0,0,0,0.5)] border-brand-400/30'
          : 'bg-brand-950/50 backdrop-blur-sm border-brand-300/20'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-4 xl:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo Brand Frame */}
          <div 
            onClick={() => handleLinkClick('/')}
            className="flex items-center gap-2.5 cursor-pointer group shrink-0 select-none"
          >
            <div className="w-9 h-9 rounded-lg bg-gradient-to-tr from-brand-900 to-brand-700 flex items-center justify-center text-white transition-all group-hover:scale-105 duration-200 shadow-sm shadow-brand-700/25">
              <Activity className="w-5 h-5 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="text-base sm:text-lg font-serif font-bold text-slate-100 tracking-tight leading-tight group-hover:text-brand-800 duration-150">
                {CLINIC_INFO.doctorName}
              </span>
              <span className="text-[9px] sm:text-[11px] text-brand-800 font-semibold tracking-wide uppercase font-sans">
                {CLINIC_INFO.doctorTitle}
              </span>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-0.5 xl:gap-2 h-full">
            {navGroups.map((group) => {
              const hasSubmenu = !!group.children;
              const isCurrentActive = isGroupActive(group);

              if (!hasSubmenu) {
                return (
                  <button
                    key={group.label}
                    onClick={() => handleLinkClick(group.route!)}
                    className={`px-2.5 py-1.5 rounded-lg text-xs xl:text-[13px] font-semibold tracking-wide cursor-pointer transition relative whitespace-nowrap ${
                      isCurrentActive
                        ? 'text-slate-100 font-bold'
                        : 'text-slate-400 hover:text-slate-100 hover:bg-brand-400/20'
                    }`}
                  >
                    <span className="relative z-10">{group.label}</span>
                    {isCurrentActive && (
                      <motion.span
                        layoutId="activeNavBackground"
                        className="absolute inset-0 bg-gradient-to-tr from-brand-900/40 to-brand-700/20 border border-brand-800/40 rounded-lg -z-0"
                        transition={{ type: 'spring', stiffness: 350, damping: 28 }}
                      />
                    )}
                  </button>
                );
              }

              return (
                <div
                  key={group.label}
                  className="relative h-full flex items-center"
                  onMouseEnter={() => setActiveDropdown(group.label)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <button
                    className={`px-2.5 py-1.5 rounded-lg text-xs xl:text-[13px] font-semibold tracking-wide cursor-pointer transition flex items-center gap-1 whitespace-nowrap ${
                      isCurrentActive
                        ? 'text-slate-100 font-bold bg-brand-400/30 border border-brand-800/20'
                        : 'text-slate-400 hover:text-slate-100 hover:bg-brand-400/20'
                    }`}
                    aria-expanded={activeDropdown === group.label}
                    aria-haspopup="true"
                  >
                    <span>{group.label}</span>
                    <ChevronDown className={`w-3 h-3 transition-transform duration-200 ${activeDropdown === group.label ? 'rotate-180 text-brand-800' : ''}`} />
                  </button>

                  <AnimatePresence>
                    {activeDropdown === group.label && (
                      <motion.div
                        initial={{ opacity: 0, y: 8, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 6, scale: 0.98 }}
                        transition={{ duration: 0.15, ease: 'easeOut' }}
                        className="absolute top-full mt-2 left-1/2 -translate-x-1/2 w-80 bg-brand-200/95 backdrop-blur-md rounded-xl shadow-2xl border border-brand-400/40 overflow-hidden py-2"
                      >
                        {group.children?.map((child) => {
                          const isChildCurrent = currentRoute === child.route;
                          return (
                            <button
                              key={child.route}
                              onClick={() => handleLinkClick(child.route)}
                              className={`w-full text-left px-4 py-3 hover:bg-brand-900/30 transition flex flex-col gap-0.5 group/item ${
                                isChildCurrent ? 'bg-brand-900/40' : ''
                              }`}
                            >
                              <span className={`text-xs font-bold leading-tight transition-colors ${
                                isChildCurrent ? 'text-slate-100' : 'text-slate-300 group-hover/item:text-brand-800'
                              }`}>
                                {child.label}
                              </span>
                              <span className="text-[10px] text-slate-500 group-hover/item:text-slate-400 leading-normal">
                                {child.desc}
                              </span>
                            </button>
                          );
                        })}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </nav>

          {/* CTA Book Button */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={() => handleLinkClick('/contact')}
              className="flex items-center gap-1.5 px-4.5 py-2 bg-gradient-to-tr from-brand-900 to-brand-700 hover:from-brand-850 hover:to-brand-650 text-white rounded-full text-xs xl:text-sm font-semibold shadow-md shadow-brand-700/25 transition duration-150 cursor-pointer whitespace-nowrap border border-brand-800/30 hover:scale-[1.02]"
            >
              <Calendar className="w-3.5 h-3.5" />
              Book Appointment
            </button>
          </div>

          {/* Mobile Menu Actions */}
          <div className="flex lg:hidden items-center gap-3">
            <button
              onClick={() => handleLinkClick('/contact')}
              className="flex items-center justify-center p-2.5 bg-gradient-to-tr from-brand-900 to-brand-700 hover:from-brand-850 hover:to-brand-650 text-white rounded-lg text-xs font-semibold shadow-xs transition"
              aria-label="Book appointment"
            >
              <Calendar className="w-4 h-4" />
            </button>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-slate-400 hover:text-white hover:bg-brand-400/20 rounded-lg transition"
              aria-expanded={isMobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="lg:hidden bg-brand-200 border-t border-brand-400/30 overflow-hidden"
          >
            <div className="p-4 space-y-2">
              {navGroups.map((group) => {
                const hasSubmenu = !!group.children;
                const isCurrentActive = isGroupActive(group);

                if (!hasSubmenu) {
                  return (
                    <button
                      key={group.label}
                      onClick={() => handleLinkClick(group.route!)}
                      className={`w-full text-left px-4 py-3 rounded-lg text-sm font-semibold transition ${
                        isCurrentActive
                          ? 'bg-brand-900/40 text-slate-100 border-l-4 border-brand-800 rounded-l-none font-bold'
                          : 'text-slate-400 hover:bg-brand-400/10 hover:text-slate-100'
                      }`}
                    >
                      {group.label}
                    </button>
                  );
                }

                const isExpanded = mobileExpandedGroup === group.label;

                return (
                  <div key={group.label} className="border border-brand-400/30 rounded-lg overflow-hidden">
                    <button
                      onClick={() => setMobileExpandedGroup(isExpanded ? null : group.label)}
                      className={`w-full text-left px-4 py-3 font-semibold text-sm transition flex justify-between items-center ${
                        isCurrentActive ? 'text-slate-100 bg-brand-900/20' : 'text-slate-400'
                      }`}
                    >
                      <span>{group.label}</span>
                      <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isExpanded ? 'rotate-180 text-brand-800' : 'text-slate-500'}`} />
                    </button>

                    <AnimatePresence initial={false}>
                      {isExpanded && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2, ease: 'easeInOut' }}
                          className="bg-brand-100/50 overflow-hidden border-t border-brand-400/30"
                        >
                          <div className="py-2 px-3 space-y-1">
                            {group.children?.map((child) => {
                              const isChildActive = currentRoute === child.route;
                              return (
                                <button
                                  key={child.route}
                                  onClick={() => handleLinkClick(child.route)}
                                  className={`w-full text-left px-4 py-2.5 rounded-md text-xs font-medium transition ${
                                    isChildActive
                                      ? 'text-slate-100 font-bold bg-brand-900/30'
                                      : 'text-slate-400 hover:text-slate-100 hover:bg-brand-400/10'
                                  }`}
                                >
                                  {child.label}
                                </button>
                              );
                            })}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
            <div className="p-4 bg-brand-100 border-t border-brand-400/30 flex flex-col gap-3">
              <div className="text-xs text-slate-400 font-medium">
                Immediate Assistance? Call: <a href={`tel:${CLINIC_INFO.phoneMobile}`} className="font-semibold text-brand-800 hover:underline">{CLINIC_INFO.phoneMobile}</a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
