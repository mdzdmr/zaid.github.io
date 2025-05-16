"use client";
import React, { useState, useEffect } from "react";
import { BackgroundBeams } from "@/components/ui/aurora-background";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faFileAlt, faCode, faBriefcase, faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { Projects3DCarousel } from "@/components/Projects3DCarousel";
import { ProfessionalExperience } from "@/components/ProfessionalExperience";
import { ContactSection } from "@/components/ContactSection";

// Define TypeScript interfaces for component props
interface NavButtonProps {
  icon: IconDefinition;
  label: string;
  section: string;
  currentSection: string;
  setSection: (section: string) => void;
  colors: ColorScheme;
}

interface SocialLinkProps {
  href: string;
  icon: IconDefinition;
  color: string;
}

interface TechCardProps {
  title: string;
  icon: string;
  color: string;
  position: string;
  delay?: number;
}

interface ColorScheme {
  background: string;
  accent: string;
  text: string;
  highlight: string;
  secondary: string;
}

export function BackgroundBeamsDemo() {
  const [section, setSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  const scrollToSection = (sectionId: string) => {
  setSection(sectionId);
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};
  
  // Track scroll position to create a translucent navbar effect
  useEffect(() => {
  const handleScroll = () => {
    setScrolled(window.scrollY > 50);
    
    // Update active section based on scroll position
    const sections = ["home", "projects", "experience", "contact"];
    
    for (const section of sections) {
      const element = document.getElementById(section);
      if (element) {
        const rect = element.getBoundingClientRect();
        if (rect.top <= 100 && rect.bottom >= 100) {
          setSection(section);
          break;
        }
      }
    }
  };

  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, []);

  const words = [
    { text: "Software Developer" },
    { text: "Data Scientist" },
    { text: "Tech Enthusiast" },
    { text: "AI/ML Engineer" },
  ];
  
  // Color scheme - Modern dark tech palette
  const colors: ColorScheme = {
    background: "#0a101e", // Dark blue-gray
    accent: "#4db6ac", // Modern teal
    text: "#e2e8f0", // Light gray
    highlight: "#f59e0b", // Amber for highlights
    secondary: "#38bdf8", // Light blue for secondary elements
  };
  
  const profilePictureUrl = "/pfp.jpg"; // Path relative to the public folder
  
  
  return (
  <div className="relative antialiased" style={{ backgroundColor: colors.background }}>
    {/* Navbar */}
    <motion.nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-opacity-80 backdrop-blur-md py-2' : 'bg-opacity-0 py-4'}`}
      style={{ backgroundColor: scrolled ? colors.background : 'transparent' }}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <span className="text-2xl font-bold" style={{ color: colors.accent }}>
          mdzdmr<span style={{ color: colors.highlight }}>.</span>
        </span>
        
        <div className="hidden md:flex space-x-6">
          <NavButton icon={faUserCircle} label="About" section="home" currentSection={section} setSection={setSection} colors={colors} />
          <NavButton icon={faCode} label="Projects" section="projects" currentSection={section} setSection={setSection} colors={colors} />
          <NavButton icon={faBriefcase} label="Experience" section="experience" currentSection={section} setSection={setSection} colors={colors} />
          <NavButton icon={faEnvelope} label="Contact" section="contact" currentSection={section} setSection={setSection} colors={colors} />
        </div>
        
        <button 
          className="px-4 py-2 rounded-full text-sm font-medium transition-all duration-300"
          style={{ 
            backgroundColor: colors.accent, 
            color: colors.background,
          }}
          onClick={() => scrollToSection("contact")}
        >
          Get In Touch
        </button>
      </div>
    </motion.nav>
    
    {/* Home Section */}
    <section id="home" className="relative min-h-screen">
      {/* Background Effect */}
      <div className="absolute inset-0 z-0">
        <BackgroundBeams 
          primaryColor={colors.accent}
          backgroundColor={colors.background}
          density="medium"
          speed="medium"
        />
      </div>
      
      {/* Hero Content - Your existing content */}
      <div className="relative z-10 min-h-screen flex flex-col md:flex-row items-center justify-center px-4 md:px-10 pt-20">
        {/* Profile Info Column */}
        <motion.div 
          className="md:w-1/2 text-center md:text-left mb-10 md:mb-0"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1 
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4"
            style={{ color: colors.text }}
          >
            <span>Hi, I&apos;m </span>
            <span style={{ color: colors.accent }}>Zaid</span>
          </motion.h1>
          
          <motion.div 
            className="text-2xl md:text-4xl lg:text-5xl font-bold flex flex-wrap items-center mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <span style={{ color: colors.text }}>I&apos;m a </span>
            <div className="inline-block ml-2" style={{ color: colors.highlight }}>
              <TypewriterEffectSmooth 
                words={words} 
                cursorClassName={`text-[${colors.highlight}]`} 
              />
            </div>
          </motion.div>
          
          <motion.p 
            className="text-lg md:text-xl mb-8 max-w-xl"
            style={{ color: colors.text + "cc" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Focused on writing clean, robust code that solves real-world problems.
          </motion.p>
          
          <motion.div 
            className="flex flex-wrap justify-center md:justify-start gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            <button 
              className="px-6 py-3 rounded-full text-base font-medium transition-all duration-300 flex items-center"
              style={{ 
                backgroundColor: colors.accent, 
                color: colors.background,
              }}
              onClick={() => scrollToSection("projects")}
            >
              <FontAwesomeIcon icon={faBriefcase} className="mr-2" />
              View My Work
            </button>
            
            <a 
              href="/MohammedZaidMir_Resume.pdf" 
              target="_blank"
              className="px-6 py-3 rounded-full text-base font-medium border-2 transition-all duration-300 flex items-center"
              style={{ 
                borderColor: colors.accent, 
                color: colors.text,
              }}
            >
              <FontAwesomeIcon icon={faFileAlt} className="mr-2" />
              Download CV
            </a>
          </motion.div>
        </motion.div>
        
        {/* Profile Image Column with Tech Cards */}
        <motion.div 
          className="md:w-1/2 flex flex-col items-center justify-center relative"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Decorative elements */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-72 h-72 rounded-full bg-gradient-to-tr from-blue-500/10 to-teal-500/10 blur-2xl"></div>
          </div>
          
          <div className="relative">
            {/* Profile image with glowing border */}
            <motion.div 
              className="mb-6 p-1 rounded-full bg-gradient-to-tr from-teal-400 to-blue-500 shadow-lg shadow-teal-500/20"
              animate={{ 
                boxShadow: [
                  "0 10px 15px -3px rgba(77, 182, 172, 0.2)",
                  "0 20px 30px -3px rgba(77, 182, 172, 0.4)",
                  "0 10px 15px -3px rgba(77, 182, 172, 0.2)",
                ]
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <div className="rounded-full overflow-hidden border-4 border-gray-900 w-48 h-48 md:w-64 md:h-64">
                <Image
                  src={profilePictureUrl}
                  alt="Zaid Mir"
                  width={300}
                  height={300}
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
            
            {/* Tech skill cards */}
            <div className="absolute inset-0 -z-10">
              <TechCard title="TypeScript" icon="📱" color="#3178c6" position="-top-10 -left-16" delay={0.4} />
              <TechCard title="React" icon="⚛️" color="#61dafb" position="top-20 -right-20" delay={0.7} />
              <TechCard title="ML/AI" icon="🧠" color="#ff6bcb" position="bottom-10 -left-14" delay={1.0} />
              <TechCard title="Node.js" icon="🔄" color="#8bc500" position="bottom-0 -right-10" delay={1.3} />
            </div>
          </div>
          
          {/* Social links */}
          <motion.div 
            className="flex justify-center space-x-6 mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            <SocialLink href="https://www.linkedin.com/in/mohammed-zaid-mir" icon={faLinkedin} color={colors.secondary} />
            <SocialLink href="https://github.com/mdzdmr" icon={faGithub} color={colors.secondary} />
            <SocialLink href="mailto:mmir28@uwo.ca" icon={faEnvelope} color={colors.secondary} />
            <SocialLink href="/MohammedZaidMir_Resume.pdf" icon={faFileAlt} color={colors.secondary} />
          </motion.div>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 flex flex-col items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
      >
        <span className="text-sm mb-2" style={{ color: colors.text + "80" }}>Scroll Down</span>
        <motion.div 
          className="w-6 h-10 rounded-full border-2 flex justify-center p-1"
          style={{ borderColor: colors.text + "40" }}
        >
          <motion.div 
            className="w-1 rounded-full h-2"
            style={{ backgroundColor: colors.accent }}
            animate={{ 
              y: [0, 12, 0],
            }}
            transition={{ 
              duration: 1.5, 
              repeat: Infinity,
              ease: "easeInOut" 
            }}
          ></motion.div>
        </motion.div>
      </motion.div>
    </section>
    
    {/* Projects Section */}
    <section id="projects">
      <Projects3DCarousel colors={colors} />
    </section>
    
    {/* Experience Section */}
    <section id="experience">
      <ProfessionalExperience colors={colors} />
    </section>
    
    {/* Contact Section */}
    <section id="contact">
      <ContactSection colors={colors} />
    </section>
    
    {/* Footer */}
    <footer className="py-6 text-center" style={{ backgroundColor: colors.background }}>
      <div className="container mx-auto px-4">
        <p style={{ color: colors.text + "80" }}>
          © {new Date().getFullYear()} Mohammed Zaid Mir. All rights reserved.
        </p>
      </div>
    </footer>
  </div>
);
}

// Navigation Button Component
const NavButton = ({ icon, label, section, currentSection, setSection, colors }: NavButtonProps) => {
  return (
    <button 
      onClick={() => scrollToSection(section)}
      className="flex items-center space-x-1 px-2 py-1 transition-colors duration-300"
      style={{ color: currentSection === section ? colors.accent : colors.text }}
    >
      <FontAwesomeIcon icon={icon} />
      <span>{label}</span>
      {currentSection === section && (
        <motion.div 
          layoutId="navIndicator"
          className="absolute bottom-0 h-0.5 w-full left-0"
          style={{ backgroundColor: colors.accent }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        />
      )}
    </button>
  );
};

// Social Link Component
const SocialLink = ({ href, icon, color }: SocialLinkProps) => {
  return (
    <motion.a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer"
      className="flex items-center justify-center w-12 h-12 rounded-full transition-transform hover:scale-110"
      style={{ backgroundColor: color + '20', color: color }}
      whileHover={{ y: -5 }}
    >
      <FontAwesomeIcon icon={icon} size="lg" />
    </motion.a>
  );
};

// Tech Card Component
const TechCard = ({ title, icon, color, position, delay = 0 }: TechCardProps) => {
  return (
    <motion.div 
      className={`absolute ${position} py-2 px-3 rounded-lg shadow-lg backdrop-blur-md`}
      style={{ backgroundColor: 'rgba(23, 23, 33, 0.8)', border: `1px solid ${color + '30'}` }}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay, duration: 0.5 }}
      whileHover={{ y: -5 }}
    >
      <div className="flex items-center space-x-2">
        <span className="text-xl">{icon}</span>
        <span style={{ color: color }}>{title}</span>
      </div>
    </motion.div>
  );
};
