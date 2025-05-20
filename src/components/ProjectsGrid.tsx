"use client";
import React from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faExternalLinkAlt, faArrowRight } from "@fortawesome/free-solid-svg-icons";

interface ProjectData {
  id: number;
  title: string;
  description: string;
  image: string;
  techStack: string[];
  githubLink: string;
  liveLink?: string;
  color: string;
  isMoreCard?: boolean;
}

// Sample project data
const projects: ProjectData[] = [
  {
    id: 1,
    title: "mittensOS",
    description: "A Python-based chess game engine with a graphical interface using Pygame.",
    image: "/mittens.avif",
    techStack: ["Python", "Pygame"],
    githubLink: "https://github.com/mdzdmr/mittensOS",
    color: "#4db6ac"
  },
  {
    id: 2,
    title: "TileVania",
    description: "A 2D platformer game inspired by classic Mario games.",
    image: "/tv.png",
    techStack: ["C#", "Unity"],
    githubLink: "https://github.com/mdzdmr/TileVania",
    color: "#ec407a"
  },
  {
    id: 3,
    title: "jobSpace",
    description: "Building startup focused on job search and recruitment.",
    image: "/ss.jpeg",
    techStack: ["TypeScript", "React", "Firebase"],
    githubLink: "https://github.com/mdzdmr",
    color: "#42a5f5"
  },
  {
    id: 4,
    title: "SignSpeak",
    description: "A real-time ASL converter that tracks and classifies hand gestures.",
    image: "/ss.avif",
    techStack: ["Python", "cvzone", "numpy", "GoogleTM"],
    githubLink: "https://github.com/mdzdmr/SignSpeak",
    color: "#fb8c00"
  }, 
  {
    id: 5,
    title: "File Explorer",
    description: "An interactive Java application to visualize file system structure.",
    image: "/vfsv.avif",
    techStack: ["Java"],
    githubLink: "https://github.com/mdzdmr/Visual-File-System-Explorer",
    color: "#fb8c00"
  },
  {
    id: 6,
    title: "More Projects",
    description: "Explore my GitHub repositories to discover more projects and open-source contributions.",
    image: "/github.jpg",
    techStack: [],
    githubLink: "https://github.com/mdzdmr",
    color: "#6e5494",
    isMoreCard: true
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
    <div className="h-screen flex flex-col pt-20 pb-4 px-4 md:px-8" style={{ background: colors.background }}>
      <motion.h2 
        className="text-3xl md:text-4xl font-bold mb-6 text-center"
        style={{ color: colors.text }}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        My Projects
      </motion.h2>
      
      <motion.div 
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 max-w-5xl mx-auto flex-1 overflow-y-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {projects.map((project) => (
          <motion.div
            key={project.id}
            className={`rounded-lg overflow-hidden h-48 ${project.isMoreCard ? 'flex flex-col' : ''}`}
            variants={itemVariants}
            whileHover={{ y: -3, transition: { duration: 0.2 } }}
            style={{ 
              backgroundColor: colors.background, 
              boxShadow: `0 4px 15px -5px ${project.color}30`,
              border: `1px solid ${project.color}30`,
            }}
          >
            {project.isMoreCard ? (
              // Special "More Projects" card
              <>
                <div className="relative h-20 w-full">
                  <div 
                    className="absolute inset-0 flex items-center justify-center"
                    style={{ 
                      background: `linear-gradient(45deg, ${project.color}88, ${project.color}44)`,
                    }}
                  >
                    <FontAwesomeIcon icon={faGithub} className="text-white text-3xl" />
                  </div>
                </div>
                
                <div className="p-2 flex flex-col flex-grow">
                  <h3 className="text-base font-bold mb-1" style={{ color: project.color }}>
                    {project.title}
                  </h3>
                  
                  <p className="text-xs line-clamp-2" style={{ color: colors.text + "cc" }}>
                    {project.description}
                  </p>
                  
                  <a 
                    href={project.githubLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center space-x-1 py-1 px-3 mt-auto mb-1 rounded-md hover:opacity-90 transition-all text-xs"
                    style={{ 
                      backgroundColor: project.color,
                      color: '#ffffff'
                    }}
                  >
                    <span>View My GitHub</span>
                    <FontAwesomeIcon icon={faArrowRight} size="xs" />
                  </a>
                </div>
              </>
            ) : (
              // Regular project cards
              <>
                <div className="relative h-20 w-full">
                  <div 
                    className="absolute inset-0 flex items-center justify-center"
                    style={{ 
                      background: `linear-gradient(45deg, ${project.color}88, ${project.color}44)`,
                    }}
                  >
                    <span className="text-2xl font-bold text-white">{project.title.charAt(0)}</span>
                  </div>
                </div>
                
                <div className="p-2 flex flex-col h-[6.5rem]">
                  <h3 className="text-base font-bold mb-1 truncate" style={{ color: project.color }}>
                    {project.title}
                  </h3>
                  
                  <p className="text-xs mb-1 line-clamp-2" style={{ color: colors.text + "cc" }}>
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-1 mb-1">
                    {project.techStack.slice(0, 2).map(tech => (
                      <span 
                        key={`${project.id}-${tech}`}
                        className="px-1.5 py-0.5 text-[10px] rounded-full"
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
                        className="px-1.5 py-0.5 text-[10px] rounded-full"
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
                      className="flex items-center space-x-1 hover:opacity-80 transition-opacity text-xs"
                      style={{ color: project.color }}
                    >
                      <FontAwesomeIcon icon={faGithub} size="xs" />
                      <span>GitHub</span>
                    </a>
                    
                    {project.liveLink && (
                      <a 
                        href={project.liveLink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center space-x-1 hover:opacity-80 transition-opacity text-xs"
                        style={{ color: project.color }}
                      >
                        <span>Live</span>
                        <FontAwesomeIcon icon={faExternalLinkAlt} size="xs" />
                      </a>
                    )}
                  </div>
                </div>
              </>
            )}
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};
