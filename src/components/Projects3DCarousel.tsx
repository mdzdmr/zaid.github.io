"use client";
import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faExternalLinkAlt, faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

interface ProjectData {
  id: number;
  title: string;
  description: string;
  image: string;
  techStack: string[];
  githubLink: string;
  liveLink?: string;
  color: string;
}

// Sample project data - replace with your actual projects
const projects: ProjectData[] = [
  {
    id: 1,
    title: "Portfolio Website",
    description: "A personal portfolio website showcasing my projects and skills built with Next.js, TypeScript, and TailwindCSS.",
    image: "/project1.jpg", // Replace with your image path
    techStack: ["Next.js", "TypeScript", "TailwindCSS", "Framer Motion"],
    githubLink: "https://github.com/mdzdmr/portfolio",
    liveLink: "https://mdzdmr.com",
    color: "#4db6ac"
  },
  {
    id: 2,
    title: "AI Image Generator",
    description: "Web application that uses machine learning to generate unique images based on text prompts.",
    image: "/project2.jpg", // Replace with your image path
    techStack: ["React", "TensorFlow.js", "Node.js", "Express"],
    githubLink: "https://github.com/mdzdmr/ai-image-generator",
    liveLink: "https://ai-image-gen.demo.com",
    color: "#ec407a"
  },
  {
    id: 3,
    title: "Weather Dashboard",
    description: "Real-time weather application providing detailed forecasts and interactive maps for locations worldwide.",
    image: "/project3.jpg", // Replace with your image path
    techStack: ["JavaScript", "React", "OpenWeatherAPI", "ChartJS"],
    githubLink: "https://github.com/mdzdmr/weather-app",
    liveLink: "https://weather-dashboard.demo.com",
    color: "#42a5f5"
  },
  {
    id: 4,
    title: "E-Commerce Platform",
    description: "Full-stack e-commerce solution with product management, cart functionality, and secure payment processing.",
    image: "/project4.jpg", // Replace with your image path
    techStack: ["TypeScript", "MongoDB", "Express", "React", "Node"],
    githubLink: "https://github.com/mdzdmr/ecommerce",
    liveLink: "https://shop.demo.com",
    color: "#fb8c00"
  }
];

export const Projects3DCarousel = ({ colors }: { colors: any }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const constraintsRef = useRef(null);
  const [expandedId, setExpandedId] = useState<number | null>(null);
  
  const nextProject = () => {
    setActiveIndex((prev) => (prev + 1) % projects.length);
  };
  
  const prevProject = () => {
    setActiveIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };
  
  const calculatePosition = (index: number) => {
    const isBefore = index < activeIndex;
    const isAfter = index > activeIndex;
    const isActive = index === activeIndex;
    
    if (isActive) return { x: 0, scale: 1, zIndex: 5, opacity: 1 };
    if (isBefore) return { x: -250, scale: 0.8, zIndex: 3 - (activeIndex - index), opacity: 0.7 };
    if (isAfter) return { x: 250, scale: 0.8, zIndex: 3 - (index - activeIndex), opacity: 0.7 };
    
    return { x: 0, scale: 1, zIndex: 0, opacity: 1 };
  };
  
  const toggleExpand = (id: number) => {
    if (expandedId === id) {
      setExpandedId(null);
    } else {
      setExpandedId(id);
    }
  };
  
  return (
    <div className="min-h-screen py-20 px-4 flex flex-col items-center justify-center" style={{ background: colors.background }}>
      <motion.h2 
        className="text-4xl md:text-5xl font-bold mb-16 text-center"
        style={{ color: colors.text }}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        My Projects
      </motion.h2>
      
      <div className="relative w-full max-w-4xl h-[600px] flex items-center justify-center">
        <div className="absolute inset-0" ref={constraintsRef} />
        
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            className={`absolute cursor-pointer w-full max-w-md ${expandedId === project.id ? 'h-auto max-h-none' : 'h-[450px]'}`}
            style={{ 
              zIndex: expandedId === project.id ? 50 : calculatePosition(index).zIndex,
            }}
            animate={{
              x: expandedId !== null 
                ? (expandedId === project.id ? 0 : 1000 * (index - projects.findIndex(p => p.id === expandedId))) 
                : calculatePosition(index).x,
              scale: expandedId !== null 
                ? (expandedId === project.id ? 1 : 0.6) 
                : calculatePosition(index).scale,
              opacity: expandedId !== null 
                ? (expandedId === project.id ? 1 : 0) 
                : calculatePosition(index).opacity,
              y: expandedId === project.id ? -50 : 0,
            }}
            transition={{ duration: 0.5 }}
            onClick={() => index === activeIndex && toggleExpand(project.id)}
          >
            <motion.div 
              className="w-full h-full rounded-2xl overflow-hidden flex flex-col"
              style={{ 
                backgroundColor: colors.background, 
                boxShadow: `0 10px 30px -5px ${project.color}30`,
                border: `1px solid ${project.color}30`,
              }}
              whileHover={index === activeIndex && expandedId === null ? { scale: 1.02, y: -10 } : {}}
              transition={{ duration: 0.3 }}
            >
              <div className="relative w-full h-52">
                <div 
                  className="absolute inset-0 flex items-center justify-center"
                  style={{ 
                    background: `linear-gradient(45deg, ${project.color}88, ${project.color}44)`,
                  }}
                >
                  {/* Replace with actual image when available */}
                  <span className="text-4xl font-bold text-white">{project.title.charAt(0)}</span>
                </div>
              </div>
              
              <div className="flex-1 p-6 flex flex-col">
                <h3 className="text-xl font-bold mb-2" style={{ color: project.color }}>
                  {project.title}
                </h3>
                
                <p className="mb-4 flex-grow" style={{ color: colors.text + "cc" }}>
                  {expandedId === project.id 
                    ? project.description 
                    : project.description.length > 100 
                      ? project.description.substring(0, 100) + "..." 
                      : project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.map(tech => (
                    <span 
                      key={`${project.id}-${tech}`}
                      className="px-2 py-1 text-xs rounded-full"
                      style={{ 
                        backgroundColor: project.color + "15", 
                        color: project.color 
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex justify-between mt-auto">
                  <a 
                    href={project.githubLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center space-x-1 hover:opacity-80 transition-opacity"
                    style={{ color: project.color }}
                    onClick={(e) => e.stopPropagation()}
                  >
                    <FontAwesomeIcon icon={faGithub} />
                    <span>GitHub</span>
                  </a>
                  
                  {project.liveLink && (
                    <a 
                      href={project.liveLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center space-x-1 hover:opacity-80 transition-opacity"
                      style={{ color: project.color }}
                      onClick={(e) => e.stopPropagation()}
                    >
                      <span>Live Demo</span>
                      <FontAwesomeIcon icon={faExternalLinkAlt} />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
      
      {expandedId === null && (
        <div className="flex space-x-4 mt-8">
          <button 
            onClick={prevProject}
            className="p-3 rounded-full"
            style={{ 
              backgroundColor: colors.accent + "20", 
              color: colors.accent 
            }}
          >
            <FontAwesomeIcon icon={faArrowLeft} />
          </button>
          
          <button 
            onClick={nextProject}
            className="p-3 rounded-full"
            style={{ 
              backgroundColor: colors.accent + "20", 
              color: colors.accent 
            }}
          >
            <FontAwesomeIcon icon={faArrowRight} />
          </button>
        </div>
      )}
      
      <div className="flex space-x-2 mt-6">
        {projects.map((_, index) => (
          <button
            key={index}
            className="w-3 h-3 rounded-full transition-all duration-300"
            style={{ 
              backgroundColor: index === activeIndex ? colors.accent : colors.accent + "30",
              transform: index === activeIndex ? "scale(1.2)" : "scale(1)",
            }}
            onClick={() => setActiveIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};
