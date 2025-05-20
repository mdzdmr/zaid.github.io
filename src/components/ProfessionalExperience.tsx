"use client";
import React from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarAlt } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

interface ExperienceData {
  id: number;
  company: string;
  position: string;
  duration: string;
  category: 'work';
  color: string;
  logo: string;
}

// Updated experience data with logo paths
const experiences: ExperienceData[] = [
  {
    id: 4,
    company: "Robarts Research Institute",
    position: "SWE Intern",
    duration: "May 2025 - Present",
    category: 'work',
    color: "#4db6ac",
    logo: "/rr.png"
  },
  {
    id: 3,
    company: "Stealth Startup",
    position: "Co-Founder / Founding Engineer",
    duration: "April 2025",
    category: 'work',
    color: "#ec407a",
    logo: "/ss.jpeg"
  },
  {
    id: 2,
    company: "Banking Analytics Lab",
    position: "Data Engineer Intern",
    duration: "July 2024 - April 2025",
    category: 'work',
    color: "#42a5f5",
    logo: "/bal.png"
  },
  {
    id: 1,
    company: "University of Western Ontario",
    position: "UG Researcher",
    duration: "January 2025 - Jun 2023",
    category: 'work',
    color: "#fb8c00",
    logo: "/uwo.jpeg"
  }
];

// Future Node for continuation
const FutureNodeContinuation = ({ color }: { color: string }) => (
  <div className="absolute right-0 top-1/2 transform -translate-y-1/2 -translate-x-3 flex flex-col items-center z-20">
    {/* Dashed circle */}
    <motion.div 
      className="w-12 h-12 rounded-full flex items-center justify-center mb-3"
      style={{ 
        border: `2px dashed ${color}80`
      }}
      animate={{
        borderColor: [`${color}50`, color, `${color}50`]
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    >
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        width="20" 
        height="20" 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke={color} 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="10" />
        <line x1="12" y1="8" x2="12" y2="16" />
        <line x1="8" y1="12" x2="16" y2="12" />
      </svg>
    </motion.div>
    
    {/* Label */}
    <div 
      className="rounded-lg px-2 py-1"
      style={{ 
        backgroundColor: color + "20",
        border: `1px solid ${color}30`
      }}
    >
      <div className="text-xs font-medium text-center" style={{ color }}>
        Next Chapter
      </div>
    </div>
  </div>
);

export const ProfessionalExperience = ({ colors }: { colors: any }) => {
  return (
    <div 
      className="h-screen flex flex-col justify-center py-6 px-4"
      style={{ 
        background: colors.background
      }}
    >
      <motion.h2 
        className="text-4xl md:text-5xl font-bold mb-16 text-center"
        style={{ color: colors.text }}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Experience
      </motion.h2>
      
      <div className="max-w-6xl mx-auto w-full">
        {/* Main timeline container */}
        <div className="relative flex flex-col space-y-10 md:space-y-0">
          {/* Timeline horizontal line - shortened */}
          <div className="hidden md:block absolute left-0 right-32 top-1/2 h-0.5 transform -translate-y-1/2" style={{ backgroundColor: colors.accent + "40" }}></div>
          
          {/* Container for experience items - using 75% width to leave space for continuation */}
          <div className="hidden md:flex justify-between items-center relative w-full md:w-[85%]">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                className="w-1/4 px-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <div className="flex flex-col items-center">
                  {/* Timeline node with company logo */}
                  <div 
                    className="w-12 h-12 rounded-full overflow-hidden mb-3 z-10"
                    style={{ 
                      backgroundColor: exp.color + "20",
                      border: `2px solid ${exp.color}`
                    }}
                  >
                    {/* Truly circular logo */}
                    <div className="relative w-full h-full">
                      <Image
                        src={exp.logo}
                        alt={`${exp.company} logo`}
                        fill
                        sizes="100%"
                        className="object-cover"
                        style={{
                          borderRadius: '50%' // Ensure circular cropping
                        }}
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                          target.parentElement!.innerHTML = `<div class="w-full h-full flex items-center justify-center"><span style="color:${exp.color}" class="text-xl font-bold">${exp.company.charAt(0)}</span></div>`;
                        }}
                      />
                    </div>
                  </div>
                  
                  {/* Experience card */}
                  <div 
                    className="rounded-lg p-3 w-full"
                    style={{ 
                      backgroundColor: colors.background, 
                      boxShadow: `0 4px 15px -3px ${exp.color}30`,
                      border: `1px solid ${exp.color}30`
                    }}
                  >
                    <h3 className="text-sm font-bold truncate text-center" style={{ color: exp.color }}>
                      {exp.position}
                    </h3>
                    <p className="text-xs text-center truncate" style={{ color: colors.text }}>
                      {exp.company}
                    </p>
                    <div className="flex items-center justify-center mt-2 text-xs" style={{ color: colors.text + "80" }}>
                      <FontAwesomeIcon icon={faCalendarAlt} className="mr-1" />
                      <span>{exp.duration}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Add the continuation element */}
          <FutureNodeContinuation color={colors.accent} />
          
          {/* Mobile view - vertical layout */}
          <div className="md:hidden space-y-6">
            {experiences.map((exp) => (
              <motion.div
                key={exp.id}
                className="flex items-center space-x-4 rounded-lg p-4"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: exp.id * 0.1 }}
                style={{ 
                  backgroundColor: colors.background, 
                  boxShadow: `0 4px 15px -3px ${exp.color}30`,
                  border: `1px solid ${exp.color}30`
                }}
              >
                {/* Company logo circle container */}
                <div 
                  className="w-10 h-10 rounded-full flex-shrink-0 overflow-hidden"
                  style={{ 
                    backgroundColor: exp.color + "20",
                    border: `1px solid ${exp.color}40`
                  }}
                >
                  {/* Circular logo with cover positioning */}
                  <div className="relative w-full h-full">
                    <Image
                      src={exp.logo}
                      alt={`${exp.company} logo`}
                      fill
                      sizes="100%"
                      className="object-cover"
                      style={{
                        borderRadius: '50%' // Ensure circular cropping
                      }}
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        target.parentElement!.innerHTML = `<div class="w-full h-full flex items-center justify-center"><span style="color:${exp.color}" class="text-lg font-bold">${exp.company.charAt(0)}</span></div>`;
                      }}
                    />
                  </div>
                </div>
                
                <div className="flex-1 min-w-0">
                  <h3 className="text-base font-bold truncate" style={{ color: exp.color }}>
                    {exp.position}
                  </h3>
                  <p className="text-sm truncate" style={{ color: colors.text }}>
                    {exp.company}
                  </p>
                  <div className="flex items-center mt-1 text-xs" style={{ color: colors.text + "80" }}>
                    <FontAwesomeIcon icon={faCalendarAlt} className="mr-1" />
                    <span>{exp.duration}</span>
                  </div>
                </div>
              </motion.div>
            ))}
            
            {/* Mobile continuation element - simple version */}
            <motion.div
              className="flex items-center justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <motion.div
                className="h-10 w-10 rounded-full flex items-center justify-center"
                style={{ 
                  backgroundColor: colors.accent + "20",
                  border: `1px dashed ${colors.accent}`
                }}
                animate={{
                  scale: [1, 1.1, 1],
                  borderColor: [colors.accent + "60", colors.accent, colors.accent + "60"]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="20" 
                  height="20" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke={colors.accent} 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                >
                  <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
                </svg>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};
