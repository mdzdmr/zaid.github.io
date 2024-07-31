"use client";
import React from "react";
import { BackgroundBeams } from "@/components/ui/aurora-background";
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
    const profilePictureUrl = "/pfp.jpg"; // Path relative to the public folder

    return (
        <div className="h-screen w-full relative antialiased flex flex-col items-center justify-center" style={{ backgroundColor: '#FEE715' }}>
            <div className="absolute inset-0 z-0">
                <BackgroundBeams />
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
                <div className="relative text-lg md:text-7xl font-sans font-bold" style={{ color: '#138086' }}>
                    <span>Welcome</span>
                </div>
                <div className="relative text-lg md:text-7xl font-sans font-bold" style={{ color: '#138086' }}>
                    <span>My name is Zaid and</span>
                </div>
                <div className="relative text-lg md:text-7xl font-sans font-bold flex items-center">
                    <span style={{ color: '#138086' }}>I&apos;m a&nbsp;</span>
                    <div className="inline-block">
                        <TypewriterEffectSmooth words={words} cursorClassName="text-[#138086]" />
                    </div>
                    <span style={{ color: '#138086' }}>!</span>
                </div>
            </div>
        </div>
    );
}
