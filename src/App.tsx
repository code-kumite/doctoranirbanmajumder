import { useState, useEffect } from 'react';
import { AppRoute } from './types';
import Header from './components/Header';
import Footer from './components/Footer';

// Page imports
import Home from './pages/Home';
import AboutClinic from './pages/AboutClinic';
import DoctorProfile from './pages/DoctorProfile';
import ServicesOverview from './pages/ServicesOverview';
import DiabetesCare from './pages/DiabetesCare';
import ThyroidCare from './pages/ThyroidCare';
import ObesityCare from './pages/ObesityCare';
import HormoneDisorders from './pages/HormoneDisorders';
import DsmeCamp from './pages/DsmeCamp';
import Courses from './pages/Courses';
import ResearchPublications from './pages/ResearchPublications';
import Contact from './pages/Contact';

export default function App() {
  const [currentRoute, setCurrentRoute] = useState<AppRoute>('/');

  // Route match validator
  const getRouteFromHash = (): AppRoute => {
    const rawHash = window.location.hash.split('?')[0]; // discard query strings
    const hash = rawHash.replace('#', '') || '/';
    
    const validRoutes: AppRoute[] = [
      '/',
      '/about-clinic',
      '/dr-anirban-majumder',
      '/services',
      '/services/diabetes',
      '/services/thyroid',
      '/services/obesity',
      '/services/hormone-disorders',
      '/programmes/dsme-camp',
      '/courses',
      '/research-publications',
      '/contact'
    ];

    if (validRoutes.includes(hash as AppRoute)) {
      return hash as AppRoute;
    }
    return '/';
  };

  useEffect(() => {
    // Sync initial load
    setCurrentRoute(getRouteFromHash());

    const handleHashChange = () => {
      setCurrentRoute(getRouteFromHash());
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  const navigateTo = (route: AppRoute) => {
    window.location.hash = route === '/' ? '#/' : `#${route}`;
    setCurrentRoute(route);
  };

  // Render Page Content based on active state route
  const renderPage = () => {
    switch (currentRoute) {
      case '/':
        return <Home onNavigate={navigateTo} />;
      case '/about-clinic':
        return <AboutClinic onNavigate={navigateTo} />;
      case '/dr-anirban-majumder':
        return <DoctorProfile onNavigate={navigateTo} />;
      case '/services':
        return <ServicesOverview onNavigate={navigateTo} />;
      case '/services/diabetes':
        return <DiabetesCare onNavigate={navigateTo} />;
      case '/services/thyroid':
        return <ThyroidCare onNavigate={navigateTo} />;
      case '/services/obesity':
        return <ObesityCare onNavigate={navigateTo} />;
      case '/services/hormone-disorders':
        return <HormoneDisorders onNavigate={navigateTo} />;
      case '/programmes/dsme-camp':
        return <DsmeCamp onNavigate={navigateTo} />;
      case '/courses':
        return <Courses onNavigate={navigateTo} />;
      case '/research-publications':
        return <ResearchPublications onNavigate={navigateTo} />;
      case '/contact':
        return <Contact onNavigate={navigateTo} />;
      default:
        return <Home onNavigate={navigateTo} />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#030014] text-slate-200 transition-colors duration-200 bg-grid-premium">
      <Header currentRoute={currentRoute} onNavigate={navigateTo} />
      
      {/* Dynamic page placeholder */}
      <main className="flex-grow">
        {renderPage()}
      </main>

      <Footer onNavigate={navigateTo} />
    </div>
  );
}
