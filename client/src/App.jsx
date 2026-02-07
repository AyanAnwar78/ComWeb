import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import LocomotiveScroll from 'locomotive-scroll';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import PricingPage from './pages/PricingPage';
import ProjectsPage from './pages/ProjectsPage';

gsap.registerPlugin(ScrollTrigger);

function App() {
  const location = useLocation();

  useEffect(() => {
    const locomotiveScroll = new LocomotiveScroll();

    // Scroll to top on route change
    window.scrollTo(0, 0);

    // Initialize ScrollTrigger animations for elements with 'reveal' class
    const ctx = gsap.context(() => {
      const revealElements = gsap.utils.toArray('.reveal');
      revealElements.forEach((el) => {
        gsap.fromTo(el,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
              end: "bottom 15%",
              toggleActions: "play none none none",
            }
          }
        );
      });
    });

    // Refresh ScrollTrigger after a short delay to ensure DOM is ready
    setTimeout(() => {
      ScrollTrigger.refresh();
    }, 100);

    return () => {
      locomotiveScroll.destroy();
      ctx.revert(); // Clean up all GSAP animations
    }
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-[#191919] text-white selection:bg-[#fab162] selection:text-[#191919] font-sans">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
