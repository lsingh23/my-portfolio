'use client';
import React, { useState, useEffect } from 'react';
import Navigation from './Navigation';
import HeroSection from './HeroSection';
import AboutSection from './AboutSection';
import ExperienceSection from './ExperienceSection';
import ProjectsSection from './ProjectsSection';
import EducationSection from './EducationSection';
import ContactSection from './ContactSection';
import Footer from './Footer';

const Portfolio: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [activeSection, setActiveSection] = useState<string>('home');
  const [scrollProgress, setScrollProgress] = useState<number>(0);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'experience', 'projects', 'education', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);

      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = totalHeight > 0 ? (window.scrollY / totalHeight) * 100 : 0;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string): void => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen relative">
      {/* Background layers */}
      <div className="bg-gradient" />
      <div className="noise-fine" />
      <div className="noise-medium" />
      <div className="vignette" />

      {/* Scroll progress bar */}
      <div className="scroll-progress" style={{ width: `${scrollProgress}%` }} />

      {/* Content */}
      <div className="relative z-10">
        <Navigation
          activeSection={activeSection}
          isMenuOpen={isMenuOpen}
          setIsMenuOpen={setIsMenuOpen}
          scrollToSection={scrollToSection}
        />
        <main>
          <HeroSection scrollToSection={scrollToSection} />
          <div className="section-divider" />
          <AboutSection />
          <div className="section-divider" />
          <ExperienceSection />
          <div className="section-divider" />
          <ProjectsSection />
          <div className="section-divider" />
          <EducationSection />
          <div className="section-divider" />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Portfolio;
