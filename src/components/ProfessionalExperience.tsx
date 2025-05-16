"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloud, faBrain, faRuler, faPencil } from "@fortawesome/free-solid-svg-icons";
import { faDocker } from "@fortawesome/free-brands-svg-icons";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

interface ExperienceData {
  id: number;
  company: string;
  position: string;
  duration: string;
  description: string;
  achievements: string[];
  skills: string[];
  companyLogo?: string;
  category: 'work' | 'education';
  color: string;
}

// Replace with your actual experience
const experiences: ExperienceData[] = [
  {
    id: 1,
    company: "Tech Innovations Inc.",
    position: "Senior Software Developer",
    duration: "Jan 2023 - Present",
    description: "Leading development of enterprise web applications and providing technical mentorship to junior developers.",
    achievements: [
      "Redesigned microservice architecture, improving system reliability by 30%",
      "Implemented CI/CD pipelines reducing deployment time by 65%",
      "Led a team of 5 developers on a critical client project, delivering ahead of schedule"
    ],
    skills: ["TypeScript", "React", "Node.js", "AWS", "Docker", "GraphQL"],
    category: 'work',
    color: "#4db6ac"
  },
  {
    id: 2,
    company: "Digital Solutions Ltd.",
    position: "Full Stack Developer",
    duration: "Mar 2021 - Dec 2022",
    description: "Developed and maintained web applications for clients across various industries.",
    achievements: [
      "Built an e-commerce platform serving 10,000+ daily users",
      "Optimized database queries, reducing load times by 40%",
      "Implemented responsive design patterns for cross-platform compatibility"
    ],
    skills: ["JavaScript", "React", "MongoDB", "Express", "Node.js", "RESTful APIs"],
    category: 'work',
    color: "#ec407a"
  },
  {
    id: 3,
    company: "WebCraft Studio",
    position: "Frontend Developer",
    duration: "Jun 2019 - Feb 2021",
    description: "Created responsive and user-friendly interfaces for client websites.",
    achievements: [
      "Developed 15+ responsive websites for small to medium businesses",
      "Reduced initial load time by 25% through code optimization",
      "Collaborated with designers to implement pixel-perfect layouts"
    ],
    skills: ["HTML5", "CSS3", "JavaScript", "React", "UI/UX Design"],
    category: 'work',
    color: "#42a5f5"
  },
  {
    id: 4,
    company: "University of Technology",
    position: "Bachelor of Computer Science",
    duration: "Sep 2015 - May 2019",
    description: "Graduated with honors, focused on software engineering and web technologies.",
    achievements: [
      "GPA: 3.8/4.0",
      "Senior project: Developed a machine learning model for predicting stock market trends",
      "Teaching Assistant for Introduction to Programming course"
    ],
    skills: ["Data Structures", "Algorithms", "Database Systems", "Web Development", "Machine Learning"],
    category: 'education',
    color: "#fb8c00"
  }
];

// Skill category icons mapping
const skillIconMap: { [key: string]: IconDefinition } = {
  "TypeScript": faCode,
  "React": faLaptopCode,
  "Node.js": faServer,
  "AWS": faCloud,
  "Docker": faDocker,
  "GraphQL": faDatabase,
  "JavaScript": faCode,
  "MongoDB": faDatabase,
  "Express": faServer,
  "RESTful APIs": faServer,
  "HTML5": faCode,
  "CSS3": faCode,
  "UI/UX Design": faPencilRuler,
  "Data Structures": faCode,
  "Algorithms": faCode,
  "Database Systems": faDatabase,
  "Web Development": faLaptopCode,
  "Machine Learning": faBrain
};

// Default icon for skills without mapping
const defaultSkillIcon = faCode;

export const ProfessionalExperience = ({ colors }: { colors: any }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ 
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  
  return (
    <div 
      className="min-h-screen py-20 px-4"
      style={{ 
        background: `linear-gradient(180deg, ${colors.background} 0%, ${colors.background}ee 100%)` 
      }}
      ref={containerRef}
    >
      <motion.h2 
        className="text-4xl md:text-5xl font-bold mb-4 text-center"
        style={{ color: colors.text }}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Professional Journey
      </motion.h2>
      
      <motion.p
        className="text-center mb-16 max-w-2xl mx-auto"
        style={{ color: colors.text + "99" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        My career path and educational background
      </motion.p>
      
      <div className="relative max-w-6xl mx-auto">
        {/* Timeline line */}
        <div className="absolute left-8 md:left-1/2 top-0 w-1 bg-gray-800 h-full transform -translate-x-1/2">
          <motion.div 
            className="absolute top-0 left-0 w-full bg-gradient-to-b from-transparent via-blue-400 to-purple-500"
            style={{ height: lineHeight }}
          />
        </div>
        
        {/* Experience items */}
        {experiences.map((exp, index) => (
          <TimelineItem 
            key={exp.id}
            experience={exp}
            index={index}
            colors={colors}
          />
        ))}
      </div>
    </div>
  );
};

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

interface TimelineItemProps {
  experience: ExperienceData;
  index: number;
  colors: any;
}

const TimelineItem = ({ experience, index, colors }: TimelineItemProps) => {
  const itemRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ 
    target: itemRef,
    offset: ["start end", "center center"]
  });
  
  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
  const x = useTransform(
    scrollYProgress, 
    [0, 0.5], 
    [index % 2 === 0 ? -50 : 50, 0]
  );
  
  // Get the icon for this category
  const categoryIcon = getCategoryIcon(experience.category);
  
  return (
    <div 
      ref={itemRef}
      className={`flex flex-col md:flex-row items-center md:items-start gap-4 mb-16 relative ${
        index % 2 === 0 ? 'md:flex-row-reverse text-right' : 'text-left'
      }`}
    >
      {/* Timeline dot */}
      <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 w-16 h-16 flex items-center justify-center z-10">
        <motion.div 
          className="w-12 h-12 rounded-full flex items-center justify-center"
          style={{ 
            backgroundColor: experience.color + "20",
            border: `2px solid ${experience.color}`,
          }}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <FontAwesomeIcon 
            icon={categoryIcon} 
            size="lg" 
            style={{ color: experience.color }}
          />
        </motion.div>
      </div>
      
      {/* Content card */}
      <motion.div 
        className="md:w-5/12 z-10"
        style={{ opacity, x }}
      >
        <motion.div 
          className="bg-opacity-10 backdrop-blur-sm border rounded-2xl p-6"
          style={{ 
            backgroundColor: colors.background, 
            borderColor: experience.color + "30",
            boxShadow: `0 10px 15px -3px ${experience.color}10`
          }}
          whileHover={{ 
            y: -5, 
            boxShadow: `0 20px 25px -5px ${experience.color}30`
          }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex items-center gap-3 mb-3">
            <div 
              className="h-10 w-10 rounded-full flex items-center justify-center"
              style={{ backgroundColor: experience.color + "20" }}
            >
              {/* Replace with actual logo when available */}
              <span 
                className="text-xl font-bold"
                style={{ color: experience.color }}
              >
                {experience.company.charAt(0)}
              </span>
            </div>
            
            <div>
              <h3 className="text-xl font-bold" style={{ color: experience.color }}>
                {experience.position}
              </h3>
              <p className="text-sm" style={{ color: colors.text }}>
                {experience.company}
              </p>
            </div>
          </div>
          
          <div className="flex items-center mb-4 text-sm" style={{ color: colors.text + "99" }}>
            <FontAwesomeIcon icon={faCalendarAlt} className="mr-2" />
            <span>{experience.duration}</span>
          </div>
          
          <p className="mb-4" style={{ color: colors.text }}>
            {experience.description}
          </p>
          
          <h4 className="font-semibold mb-2" style={{ color: colors.text }}>
            Key Achievements:
          </h4>
          
          <ul className="mb-4 space-y-2">
            {experience.achievements.map((achievement, i) => (
              <motion.li 
                key={i}
                className="flex items-start text-sm"
                initial={{ opacity: 0, x: index % 2 === 0 ? 20 : -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + i * 0.1 }}
              >
                <span 
                  className="inline-block w-2 h-2 rounded-full mt-1.5 mr-2"
                  style={{ backgroundColor: experience.color }}
                />
                <span style={{ color: colors.text + "cc" }}>
                  {achievement}
                </span>
              </motion.li>
            ))}
          </ul>
          
          <h4 className="font-semibold mb-2" style={{ color: colors.text }}>
            Skills & Technologies:
          </h4>
          
          <div className="flex flex-wrap gap-2">
            {experience.skills.map(skill => (
              <span 
                key={`${experience.id}-${skill}`}
                className="px-2 py-1 text-xs rounded-full flex items-center gap-1"
                style={{ 
                  backgroundColor: experience.color + "15", 
                  color: experience.color 
                }}
              >
                <FontAwesomeIcon icon={skillIconMap[skill] || defaultSkillIcon} size="xs" />
                <span>{skill}</span>
              </span>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

// Add these imports at the top of your file:
