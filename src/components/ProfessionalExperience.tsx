"use client";
import React from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faBuilding, 
  faGraduationCap, 
  faBriefcase, 
  faCalendarAlt,
  faArrowRight
} from "@fortawesome/free-solid-svg-icons";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

interface ExperienceData {
  id: number;
  company: string;
  position: string;
  duration: string;
  category: 'work' | 'education';
  color: string;
}

// Simplified experience data with only the essential fields
const experiences: ExperienceData[] = [
  {
    id: 1,
    company: "Tech Innovations Inc.",
    position: "Senior Software Developer",
    duration: "Jan 2023 - Present",
    category: 'work',
    color: "#4db6ac"
  },
  {
    id: 2,
    company: "Digital Solutions Ltd.",
    position: "Full Stack Developer",
    duration: "Mar 2021 - Dec 2022",
    category: 'work',
    color: "#ec407a"
  },
  {
    id: 3,
    company: "WebCraft Studio",
    position: "Frontend Developer",
    duration: "Jun 2019 - Feb 2021",
    category: 'work',
    color: "#42a5f5"
  },
  {
    id: 4,
    company: "University of Technology",
    position: "Bachelor of Computer Science",
    duration: "Sep 2015 - May 2019",
    category: 'education',
    color: "#fb8c00"
  }
];

// Helper function to get the icon for a category
const getCategoryIcon = (category: string): IconDefinition => {
  switch(category) {
    case 'work':
      return faBriefcase;
    case 'education':
      return faGraduationCap;
    default:
      return faBuilding;
  }
};

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
          <div className="hidden md:block absolute left-0 right-8 top-1/2 h-0.5 transform -translate-y-1/2" style={{ backgroundColor: colors.accent + "40" }}>
            {/* Arrow at the end */}
            <div className="absolute right-0 w-8 h-8 -mt-4 -mr-4 flex items-center justify-center rounded-full" style={{ backgroundColor: colors.accent }}>
              <FontAwesomeIcon icon={faArrowRight} className="text-white" />
            </div>
          </div>
          
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
                <div 
                  className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: exp.color + "20" }}
                >
                  <FontAwesomeIcon 
                    icon={getCategoryIcon(exp.category)} 
                    style={{ color: exp.color }}
                  />
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
                  {/* Timeline node */}
                  <div 
                    className="w-10 h-10 rounded-full flex items-center justify-center mb-3 z-10"
                    style={{ 
                      backgroundColor: exp.color + "20",
                      border: `2px solid ${exp.color}`
                    }}
                  >
                    <FontAwesomeIcon 
                      icon={getCategoryIcon(exp.category)} 
                      style={{ color: exp.color }}
                    />
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
