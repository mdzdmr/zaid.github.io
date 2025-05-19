"use client";
import React from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";

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
    description: "A personal portfolio website showcasing my projects and skills.",
    image: "/project1.jpg", // Replace with your image path
    techStack: ["Next.js", "TypeScript", "TailwindCSS", "Framer Motion"],
    githubLink: "https://github.com/mdzdmr/portfolio",
    liveLink: "https://mdzdmr.com",
    color: "#4db6ac"
  },
  {
    id: 2,
    title: "AI Image Generator",
    description: "Web application that uses ML to generate unique images based on text prompts.",
    image: "/project2.jpg", // Replace with your image path
    techStack: ["React", "TensorFlow.js", "Node.js", "Express"],
    githubLink: "https://github.com/mdzdmr/ai-image-generator",
    liveLink: "https://ai-image-gen.demo.com",
    color: "#ec407a"
  },
  {
    id: 3,
    title: "Weather Dashboard",
    description: "Real-time weather app providing detailed forecasts and interactive maps.",
    image: "/project3.jpg", // Replace with your image path
    techStack: ["JavaScript", "React", "OpenWeatherAPI", "ChartJS"],
    githubLink: "https://github.com/mdzdmr/weather-app",
    liveLink: "https://weather-dashboard.demo.com",
    color: "#42a5f5"
  },
  {
    id: 4,
    title: "E-Commerce Platform",
    description: "Full-stack e-commerce solution with product management and payment processing.",
    image: "/project4.jpg", // Replace with your image path
    techStack: ["TypeScript", "MongoDB", "Express", "React", "Node"],
    githubLink: "https://github.com/mdzdmr/ecommerce",
    liveLink: "https://shop.demo.com",
    color: "#fb8c00"
  }
];

export const ProjectsGrid = ({ colors }: { colors: any }) => {
  // Animation variants for staggered entry
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.4 }
    }
  };
  
  return (
    <div className="h-screen flex flex-col py-10 px-4 md:px-8" style={{ background: colors.background }}>
      <motion.h2 
        className="text-4xl md:text-5xl font-bold mb-8 text-center"
        style={{ color: colors.text }}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        My Projects
      </motion.h2>
      
      <motion.div 
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto flex-1"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {projects.map((project) => (
          <motion.div
            key={project.id}
            className="rounded-lg overflow-hidden h-full"
            variants={itemVariants}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
            style={{ 
              backgroundColor: colors.background, 
              boxShadow: `0 4px 20px -5px ${project.color}40`,
              border: `1px solid ${project.color}30`,
            }}
          >
            <div className="relative h-28 w-full">
              <div 
                className="absolute inset-0 flex items-center justify-center"
                style={{ 
                  background: `linear-gradient(45deg, ${project.color}88, ${project.color}44)`,
                }}
              >
                {/* Replace with actual image when available */}
                <span className="text-3xl font-bold text-white">{project.title.charAt(0)}</span>
              </div>
            </div>
            
            <div className="p-3">
              <h3 className="text-lg font-bold mb-1" style={{ color: project.color }}>
                {project.title}
              </h3>
              
              <p className="text-xs mb-2" style={{ color: colors.text + "cc" }}>
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-1 mb-2">
                {project.techStack.slice(0, 2).map(tech => (
                  <span 
                    key={`${project.id}-${tech}`}
                    className="px-2 py-0.5 text-xs rounded-full"
                    style={{ 
                      backgroundColor: project.color + "15", 
                      color: project.color 
                    }}
                  >
                    {tech}
                  </span>
                ))}
                {project.techStack.length > 2 && (
                  <span 
                    className="px-2 py-0.5 text-xs rounded-full"
                    style={{ 
                      backgroundColor: project.color + "15", 
                      color: project.color 
                    }}
                  >
                    +{project.techStack.length - 2}
                  </span>
                )}
              </div>
              
              <div className="flex justify-between mt-auto">
                <a 
                  href={project.githubLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center space-x-1 hover:opacity-80 transition-opacity text-sm"
                  style={{ color: project.color }}
                >
                  <FontAwesomeIcon icon={faGithub} />
                  <span>GitHub</span>
                </a>
                
                {project.liveLink && (
                  <a 
                    href={project.liveLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center space-x-1 hover:opacity-80 transition-opacity text-sm"
                    style={{ color: project.color }}
                  >
                    <span>Live</span>
                    <FontAwesomeIcon icon={faExternalLinkAlt} size="xs" />
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};
