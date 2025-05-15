"use client";
import React from "react";
import { BackgroundBeams } from "@/components/ui/aurora-background"; // Keep your current import path
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faFileAlt } from "@fortawesome/free-solid-svg-icons";

export function BackgroundBeamsDemo() {
    const words = [
        { text: "Software Developer" },
        { text: "Data Scientist" },
        { text: "Tech Enthusiast" },
        { text: "AI/ML Engineer" },
    ];
    
    // Choose one of these color schemes (uncomment your preferred one)
    
    // Original colors (similar to what you have now)
    const colorScheme = {
        background: "#101820",  // Dark background
        primaryBeams: "#FEE715", // Yellow beams
        headingText: "#138086", // Teal heading text
        typewriterText: "#FFFFFF" // White typewriter text
    };
    
    // Developer Mode (VS Code inspired)
    // const colorScheme = {
    //     background: "#1E1E1E",  // VS Code dark background
    //     primaryBeams: "#4EC9B0", // VS Code teal
    //     headingText: "#4EC9B0", // Teal heading text
    //     typewriterText: "#FFFFFF" // White typewriter text
    // };
    
    // Tech Blue
    // const colorScheme = {
    //     background: "#0F172A",  // Deep navy
    //     primaryBeams: "#38BDF8", // Sky blue
    //     headingText: "#38BDF8", // Blue heading text
    //     typewriterText: "#FFFFFF" // White typewriter text
    // };
    
    // Matrix
    // const colorScheme = {
    //     background: "#0A0E0A",  // Near black
    //     primaryBeams: "#00FF41", // Matrix green
    //     headingText: "#00FF41", // Green heading text
    //     typewriterText: "#FFFFFF" // White typewriter text
    // };
    
    const profilePictureUrl = "/pfp.jpg"; // Path relative to the public folder
    
    return (
        <div 
            className="h-screen w-full relative antialiased flex flex-col items-center justify-center" 
            style={{ backgroundColor: colorScheme.background }}
        >
            <div className="absolute inset-0 z-0">
                <BackgroundBeams 
                    primaryColor={colorScheme.primaryBeams}
                    backgroundColor={colorScheme.background}
                    // Add these props to your BackgroundBeams component
                    // These will only work if you've updated your BackgroundBeams component
                    // to accept these props as shown in the EnhancedBackgroundBeams.tsx
                    density="medium"
                    speed="medium"
                />
            </div>
            
            <div className="z-10 flex flex-col items-center space-y-8">
                <div className="flex flex-col items-center space-y-4 mt-8">
                    <Image
                        src={profilePictureUrl}
                        alt="Profile Picture"
                        width={200}
                        height={200}
                        className="rounded-full w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 xl:w-56 xl:h-56"
                    />
                    <div className="flex justify-center space-x-6 mt-4">
                        <a href="https://www.linkedin.com/in/mohammed-zaid-mir" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300">
                            <FontAwesomeIcon icon={faLinkedin} size="lg" />
                        </a>
                        <a href="https://github.com/mdzdmr" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300">
                            <FontAwesomeIcon icon={faGithub} size="lg" />
                        </a>
                        <a href="/MohammedZaidMir_Resume.pdf" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300">
                            <FontAwesomeIcon icon={faFileAlt} size="lg" />
                        </a>
                        <a href="mailto:mmir28@uwo.ca" className="text-white hover:text-gray-300">
                            <FontAwesomeIcon icon={faEnvelope} size="lg" />
                        </a>
                    </div>
                </div>
            </div>
            
            <div className="z-10 flex flex-col items-center space-y-4 text-center mt-8">
                <div className="relative text-lg md:text-7xl font-sans font-bold" style={{ color: colorScheme.headingText }}>
                    <span>Welcome</span>
                </div>
                <div className="relative text-lg md:text-7xl font-sans font-bold" style={{ color: colorScheme.headingText }}>
                    <span>My name is Zaid and</span>
                </div>
                <div className="relative text-lg md:text-7xl font-sans font-bold flex items-center">
                    <span style={{ color: colorScheme.headingText }}>I&apos;m a&nbsp;</span>
                    <div className="inline-block" style={{ color: colorScheme.typewriterText }}>
                        <TypewriterEffectSmooth words={words} cursorClassName={`text-[${colorScheme.typewriterText}]`} />
                    </div>
                    <span style={{ color: colorScheme.headingText }}>!</span>
                </div>
            </div>
        </div>
    );
}
