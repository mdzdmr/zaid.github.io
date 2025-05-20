"use client";
import React from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faExternalLinkAlt, faCodeBranch, faArrowRight } from "@fortawesome/free-solid-svg-icons";

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

// Sample project data - replace with your actual projects
const projects: ProjectData[] = [
  {
    id: 1,
    title: "mittensOS",
    description: "A Python-based chess game engine with a graphical interface using Pygame. This engine includes functionalities to manage the game state, validate moves, log moves, handle AI for making moves, and provide a visual interface for playing chess. The project utilizes numpy for efficient array operations.",
    image: "/mittens.avif", // Replace with your image path
    techStack: ["Python", "Pygame"],
    githubLink: "https://github.com/mdzdmr/mittensOS",
    color: "#4db6ac"
  },
  {
    id: 2,
    title: "TileVania",
    description: "A 2D platformer game inspired by classic Mario games.",
    image: "/tv.jpg", // Replace with your image path
    techStack: ["C#", "Unity"],
    githubLink: "https://github.com/mdzdmr/TileVania",
    color: "#ec407a"
  },
  {
    id: 3,
    title: "jobSpace",
    description: "building startup...",
    image: "/ss.jpg", // Replace with your image path
    techStack: ["TypeScript", "React", "Firebase"],
    githubLink: "https://github.com/mdzdmr",
    color: "#42a5f5"
  },
  {
    id: 4,
    title: "SignSpeak",
    description: "A real-time ASL converter that tracks and classifies hand gestures into corresponding letters.",
    image: "/ss.jpg", // Replace with your image path
    techStack: ["Python", "cvzone", "numpy", "GoogleTM],
    githubLink: "https://github.com/mdzdmr/SignSpeak",
    color: "#fb8c00"
  }, 
  {
    id: 5,
    title: "Visual File System Explorer",
    description: "An interactive Java application to visualize and manage the file system structure using a tree-based data structure, equipped with a graphical user interface.",
    image: "/vfsv.jpg", // Replace with your image path
    techStack: ["Java"],
    githubLink: "https://github.com/mdzdmr/Visual-File-System-Explorer",
    color: "#fb8c00"
  },
  {
    id: 6,
    title: "More Projects",
    description: "Explore my GitHub repositories to discover more projects, experiments, and open-source contributions.",
    image: "/github.jpg", // Optional: Add a GitHub-themed image to public folder
    techStack: [],
    githubLink: "https://github.com/mdzdmr",
    color: "#6e5494", // GitHub purple color
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
            className={`rounded-lg overflow-hidden h-full ${project.isMoreCard ? 'flex flex-col' : ''}`}
            variants={itemVariants}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
            style={{ 
              backgroundColor: colors.background, 
              boxShadow: `0 4px 20px -5px ${project.color}40`,
              border: `1px solid ${project.color}30`,
            }}
          >
            {project.isMoreCard ? (
              // Special "More Projects" card
              <>
                <div className="relative h-28 w-full">
                  <div 
                    className="absolute inset-0 flex items-center justify-center"
                    style={{ 
                      background: `linear-gradient(45deg, ${project.color}88, ${project.color}44)`,
                    }}
                  >
                    <FontAwesomeIcon icon={faGithub} className="text-white text-4xl" />
                  </div>
                </div>
                
                <div className="p-3 flex flex-col flex-grow">
                  <h3 className="text-lg font-bold mb-1" style={{ color: project.color }}>
                    {project.title}
                  </h3>
                  
                  <p className="text-xs mb-2 flex-grow" style={{ color: colors.text + "cc" }}>
                    {project.description}
                  </p>
                  
                  <a 
                    href={project.githubLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center space-x-2 py-2 px-4 mt-3 rounded-md hover:opacity-90 transition-all"
                    style={{ 
                      backgroundColor: project.color,
                      color: '#ffffff'
                    }}
                  >
                    <span>View My GitHub</span>
                    <FontAwesomeIcon icon={faArrowRight} />
                  </a>
                </div>
              </>
            ) : (
              // Regular project cards
              <>
                <div className="relative h-28 w-full">
                  <div 
                    className="absolute inset-0 flex items-center justify-center"
                    style={{ 
                      background: `linear-gradient(45deg, ${project.color}88, ${project.color}44)`,
                    }}
                  >
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
              </>
            )}
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};
