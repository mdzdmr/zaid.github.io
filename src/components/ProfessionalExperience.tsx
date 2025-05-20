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
    id: 1,
    company: "Robarts Research Institute",
    position: "Software Engineer Intern",
    duration: "May 2025 - Present",
    category: 'work',
    color: "#4db6ac",
    logo: "/rr.png"
  },
  {
    id: 2,
    company: "Stealth Startup",
    position: "Co-Founder / Founding Engineer",
    duration: "April 2025",
    category: 'work',
    color: "#ec407a",
    logo: "/ss.jpeg"
  },
  {
    id: 3,
    company: "Banking Analytics Lab",
    position: "Data Engineer Intern",
    duration: "July 2024 - April 2025",
    category: 'work',
    color: "#42a5f5",
    logo: "/bal.png"
  },
  {
    id: 4,
    company: "University of Western Ontario",
    position: "UG Student Researcher",
    duration: "January 2025 - Jun 2023",
    category: 'work',
    color: "#fb8c00",
    logo: "/uwo.jpeg"
  }
];

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
          {/* Timeline horizontal line */}
          <div className="hidden md:block absolute left-0 right-0 top-1/2 h-0.5 transform -translate-y-1/2" style={{ backgroundColor: colors.accent + "40" }}></div>
          
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
                  className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 overflow-hidden p-2"
                  style={{ 
                    backgroundColor: exp.color + "20",
                    border: `1px solid ${exp.color}40`
                  }}
                >
                  {/* Logo with better container fitting */}
                  <div className="relative w-full h-full">
                    <Image
                      src={exp.logo}
                      alt={`${exp.company} logo`}
                      fill
                      sizes="100%"
                      className="object-contain p-0.5"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        target.parentElement!.innerHTML = `<span style="color:${exp.color}" class="text-lg font-bold">${exp.company.charAt(0)}</span>`;
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
          </div>
          
          {/* Desktop view - horizontal timeline */}
          <div className="hidden md:flex justify-between items-center relative">
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
                    className="w-12 h-12 rounded-full flex items-center justify-center mb-3 z-10 overflow-hidden p-2.5"
                    style={{ 
                      backgroundColor: exp.color + "20",
                      border: `2px solid ${exp.color}`
                    }}
                  >
                    {/* Company logo with proper circular fitting */}
                    <div className="relative w-full h-full">
                      <Image
                        src={exp.logo}
                        alt={`${exp.company} logo`}
                        fill
                        sizes="100%"
                        className="object-contain p-0.5"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                          target.parentElement!.innerHTML = `<span style="color:${exp.color}" class="text-xl font-bold">${exp.company.charAt(0)}</span>`;
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
        </div>
      </div>
    </div>
  );
};
