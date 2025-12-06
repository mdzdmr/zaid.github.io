"use client";

import React, { useState, useEffect, useRef } from 'react';
import { 
  Mail, Phone, Globe, Linkedin, Github, Download, Moon, Sun, 
  MapPin, Coffee, Building2, Microscope, Rocket, LineChart, GraduationCap, ArrowRight 
} from 'lucide-react';

// --- PERSONAL DATA ---
const INITIAL_DATA = {
  personalInfo: {
    name: "MOHAMMED ZAID MIR",
    title: "Software Engineer & Data Scientist",
    email: "mmir28@uwo.ca",
    phone: "", 
    linkedin: "linkedin.com/in/mohammed-zaid-mir",
    github: "github.com/mdzdmr",
    website: "mdzdmr.com",
    location: "London, ON, Canada"
  },
  education: [
    {
      school: "University of Western Ontario",
      location: "London, ON, Canada",
      degree: "B.Sc. (Honors) in Computer Science",
      minor: "Minor in AI and Game Development",
      dates: "April 2026",
      details: [
        "Coursework: Computer Architecture, Machine Learning, Data Structures & Algorithms, Operating Systems, Discrete Mathematics, Statistics, Quantum Computing, Linear Algebra, Game Theory, Complex Analysis, Parallel Programming"
      ]
    }
  ],
  experience: [
    {
      company: "Robarts Research Institute",
      location: "Toronto, ON",
      role: "Software Engineer Intern",
      dates: "May 2025 – Aug. 2025",
      type: "research",
      logoUrl: "https://placehold.co/100x100/2563eb/FFF?text=R", 
      bullets: [
        "Developed a PyQt5 GUI for a low-cost Fourier ptychography microscope, enabling full-image display with interactive options",
        "Wrote a Python library to display malaria-infected blood cells with 95% accuracy",
        "Built a frugal microscope solution reducing equipment costs from $10,000 to $200, improving access for developing regions"
      ]
    },
    {
      company: "jobSpace",
      location: "London, ON",
      role: "Co-Founder and Technical Lead",
      dates: "April 2025 – Present",
      type: "startup",
      logoUrl: "https://placehold.co/100x100/2563eb/FFF?text=R", 
      bullets: [
        "Developing a marketplace platform connecting university students with flexible employment opportunities",
        "Architected and implemented full-stack solution using React, Firebase, Tailwind CSS, and JavaScript",
        "Developed high-fidelity wireframes and interactive prototypes in Figma, enabling efficient user testing prior to development"
      ]
    },
    {
      company: "Banking Analytics Lab",
      location: "London, ON",
      role: "Data Engineer Intern",
      dates: "July 2024 – April 2025",
      type: "finance",
      logoUrl: "https://placehold.co/100x100/2563eb/FFF?text=R", 
      bullets: [
        "Developed and fine-tuned deep learning scripts comparing investment decisions for self-directed and advised investors",
        "Utilized NumPy and Pandas to clean and process over 350,000 rows of financial data, increasing efficiency by 95%",
        "Implemented and optimized training algorithms on CUDA GPUs using PyTorch, reducing runtimes by 23%"
      ]
    },
    {
      company: "Western Investment Club",
      location: "London, ON",
      role: "Junior Data Scientist",
      dates: "Sep. 2023 – Sep. 2024",
      type: "finance",
      logoUrl: "https://placehold.co/100x100/2563eb/FFF?text=R", 
      bullets: [
        "Researcher for $300k long-only student-led value investing fund, specializing in the Consumer Retail Group",
        "Acquired and applied valuation techniques, including DCF analysis and comparison of financial multiples",
        "Utilized SQL and Pandas to analyze complex datasets, refining investment strategy by identifying key financial indicators"
      ]
    },
    {
      company: "University of Western Ontario",
      location: "London, ON",
      role: "Undergraduate Student Researcher",
      dates: "Jan. 2023 – June 2023",
      type: "university",
      logoUrl: "https://placehold.co/100x100/2563eb/FFF?text=R", 
      bullets: [
        "Designed a novel Java program based on Google's PageRanking Algorithm to rank web pages of the Dept. of Mathematics Website, using Jsoup for efficient parsing",
        "Utilized JProfiler and VisualVM to optimize numerical algorithms, enhancing computational efficiency and accuracy by 30%"
      ]
    }
  ],
  projects: [
    {
      name: "mittensOS",
      tech: "Pygame, NumPy",
      image: "https://placehold.co/600x400/1e293b/FFF?text=Chess+Engine+AI",
    },
    {
      name: "Coinbase",
      tech: "Python, Flask",
      image: "https://placehold.co/600x400/0f766e/FFF?text=Blockchain+API",
    },
    {
      name: "TileVania",
      tech: "C#, Unity",
      image: "https://placehold.co/600x400/4c1d95/FFF?text=Unity+Game+Dev",
    },
    {
      name: "Portfolio V1",
      tech: "React, Tailwind",
      image: "https://placehold.co/600x400/2563eb/FFF?text=Personal+Site",
    },
    {
        name: "Data Scraper",
        tech: "Python, BS4",
        image: "https://placehold.co/600x400/d97706/FFF?text=Data+Scraper",
    }
  ],
  techStack: [
    { name: "C", url: "https://img.shields.io/badge/c-%2300599C.svg?style=for-the-badge&logo=c&logoColor=white" },
    { name: "C#", url: "https://img.shields.io/badge/c%23-%23239120.svg?style=for-the-badge&logo=csharp&logoColor=white" },
    { name: "C++", url: "https://img.shields.io/badge/c++-%2300599C.svg?style=for-the-badge&logo=c%2B%2B&logoColor=white" },
    { name: "PowerShell", url: "https://img.shields.io/badge/PowerShell-%235391FE.svg?style=for-the-badge&logo=powershell&logoColor=white" },
    { name: "LaTeX", url: "https://img.shields.io/badge/latex-%23008080.svg?style=for-the-badge&logo=latex&logoColor=white" },
    { name: "Java", url: "https://img.shields.io/badge/java-%23ED8B00.svg?style=for-the-badge&logo=openjdk&logoColor=white" },
    { name: "HTML5", url: "https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white" },
    { name: "Bash Script", url: "https://img.shields.io/badge/bash_script-%23121011.svg?style=for-the-badge&logo=gnu-bash&logoColor=white" },
    { name: "Python", url: "https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54" },
    { name: "Firebase", url: "https://img.shields.io/badge/firebase-%23039BE5.svg?style=for-the-badge&logo=firebase" },
    { name: "NPM", url: "https://img.shields.io/badge/NPM-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white" },
    { name: "Qt", url: "https://img.shields.io/badge/Qt-%23217346.svg?style=for-the-badge&logo=Qt&logoColor=white" },
    { name: "MySQL", url: "https://img.shields.io/badge/mysql-4479A1.svg?style=for-the-badge&logo=mysql&logoColor=white" },
    { name: "Adobe", url: "https://img.shields.io/badge/adobe-%23FF0000.svg?style=for-the-badge&logo=adobe&logoColor=white" },
    { name: "Affinity Photo", url: "https://img.shields.io/badge/affinityphoto-%237E4DD2.svg?style=for-the-badge&logo=affinity-photo&logoColor=white" },
    { name: "Matplotlib", url: "https://img.shields.io/badge/Matplotlib-%23ffffff.svg?style=for-the-badge&logo=Matplotlib&logoColor=black" },
    { name: "NumPy", url: "https://img.shields.io/badge/numpy-%23013243.svg?style=for-the-badge&logo=numpy&logoColor=white" },
    { name: "Pandas", url: "https://img.shields.io/badge/pandas-%23150458.svg?style=for-the-badge&logo=pandas&logoColor=white" },
    { name: "PyTorch", url: "https://img.shields.io/badge/PyTorch-%23EE4C2C.svg?style=for-the-badge&logo=PyTorch&logoColor=white" },
    { name: "Git", url: "https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white" },
    { name: "GitHub", url: "https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white" },
    { name: "Unity", url: "https://img.shields.io/badge/unity-%23000000.svg?style=for-the-badge&logo=unity&logoColor=white" },
    { name: "Notion", url: "https://img.shields.io/badge/Notion-%23000000.svg?style=for-the-badge&logo=notion&logoColor=white" },
    { name: "Postman", url: "https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white" }
  ],
  other: [
    "LCM Piano Diploma holder",
    "Canadian University Chess Championship Candidate (Peak Elo/Rating: 2065)"
  ]
};

// --- BACKGROUND COMPONENT ---
const ParticleBackground = ({ darkMode }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let particles = [];
    let mouse = { x: null, y: null, radius: 150 };

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2 + 1; // Size between 1 and 3
        this.speedX = Math.random() * 1 - 0.5;
        this.speedY = Math.random() * 1 - 0.5;
      }
      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        // Boundary check
        if (this.x > canvas.width || this.x < 0) this.speedX = -this.speedX;
        if (this.y > canvas.height || this.y < 0) this.speedY = -this.speedY;
        
        // Mouse interaction
        let dx = mouse.x - this.x;
        let dy = mouse.y - this.y;
        let distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < mouse.radius) {
            const forceDirectionX = dx / distance;
            const forceDirectionY = dy / distance;
            const force = (mouse.radius - distance) / mouse.radius;
            // eslint-disable-next-line
            const directionX = forceDirectionX * force * this.size;
            // eslint-disable-next-line
            const directionY = forceDirectionY * force * this.size;
            
            // Gently push away or pull towards (current: pull slightly for web effect)
            // To push away: this.x -= directionX; this.y -= directionY;
        }
      }
      draw() {
        ctx.fillStyle = darkMode ? 'rgba(100, 149, 237, 0.7)' : 'rgba(100, 100, 100, 0.5)';
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    const initParticles = () => {
      particles = [];
      const numberOfParticles = (canvas.width * canvas.height) / 15000;
      for (let i = 0; i < numberOfParticles; i++) {
        particles.push(new Particle());
      }
    };

    const connect = () => {
      let opacityValue = 1;
      for (let a = 0; a < particles.length; a++) {
        for (let b = a; b < particles.length; b++) {
          let distance = ((particles[a].x - particles[b].x) * (particles[a].x - particles[b].x))
                       + ((particles[a].y - particles[b].y) * (particles[a].y - particles[b].y));
          if (distance < (canvas.width / 7) * (canvas.height / 7)) {
            opacityValue = 1 - (distance / 20000);
            ctx.strokeStyle = darkMode ? `rgba(100, 149, 237, ${opacityValue * 0.2})` : `rgba(100, 100, 100, ${opacityValue * 0.2})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(particles[a].x, particles[a].y);
            ctx.lineTo(particles[b].x, particles[b].y);
            ctx.stroke();
          }
        }
        
        // Connect to mouse
        if (mouse.x != null) {
            let distance = ((particles[a].x - mouse.x) * (particles[a].x - mouse.x))
                         + ((particles[a].y - mouse.y) * (particles[a].y - mouse.y));
            if (distance < 20000) {
                 ctx.strokeStyle = darkMode ? `rgba(255, 255, 255, 0.2)` : `rgba(0, 0, 0, 0.1)`;
                 ctx.lineWidth = 1;
                 ctx.beginPath();
                 ctx.moveTo(particles[a].x, particles[a].y);
                 ctx.lineTo(mouse.x, mouse.y);
                 ctx.stroke();
            }
        }
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();
      }
      connect();
      animationFrameId = requestAnimationFrame(animate);
    };

    window.addEventListener('resize', resizeCanvas);
    window.addEventListener('mousemove', (e) => {
        mouse.x = e.x;
        mouse.y = e.y;
    });
    window.addEventListener('mouseout', () => {
        mouse.x = null;
        mouse.y = null;
    })

    resizeCanvas();
    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, [darkMode]);

  return <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-0" />;
};


// --- HELPER COMPONENTS ---

// Generates a smart logo/icon OR uses a custom image if provided
const CompanyLogo = ({ company, type, logoUrl }) => {
  // 1. If a custom logo URL is provided, use it!
  if (logoUrl) {
    return (
      <div className="w-12 h-12 rounded-2xl shrink-0 mr-5 hidden md:block overflow-hidden shadow-sm ring-1 ring-black/5 dark:ring-white/10 bg-white">
        <img src={logoUrl} alt={`${company} logo`} className="w-full h-full object-cover" />
      </div>
    );
  }

  // 2. Otherwise, fall back to the smart icon logic
  let Icon = Building2;
  // Gradient backgrounds for a "cool" tech look
  let bgGradient = "bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800";
  let textColor = "text-gray-600 dark:text-gray-300";

  if (type === 'research' || company.toLowerCase().includes('research')) {
    Icon = Microscope;
    bgGradient = "bg-gradient-to-br from-blue-100 to-cyan-100 dark:from-blue-900/40 dark:to-cyan-900/40";
    textColor = "text-blue-600 dark:text-blue-400";
  } else if (type === 'startup' || company.toLowerCase().includes('space')) {
    Icon = Rocket;
    bgGradient = "bg-gradient-to-br from-purple-100 to-fuchsia-100 dark:from-purple-900/40 dark:to-fuchsia-900/40";
    textColor = "text-purple-600 dark:text-purple-400";
  } else if (type === 'finance' || company.toLowerCase().includes('bank') || company.toLowerCase().includes('invest')) {
    Icon = LineChart;
    bgGradient = "bg-gradient-to-br from-emerald-100 to-teal-100 dark:from-emerald-900/40 dark:to-teal-900/40";
    textColor = "text-emerald-600 dark:text-emerald-400";
  } else if (type === 'university' || company.toLowerCase().includes('university')) {
    Icon = GraduationCap;
    bgGradient = "bg-gradient-to-br from-indigo-100 to-violet-100 dark:from-indigo-900/40 dark:to-violet-900/40";
    textColor = "text-indigo-600 dark:text-indigo-400";
  }

  return (
    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 ${bgGradient} ${textColor} mr-5 hidden md:flex shadow-sm ring-1 ring-black/5 dark:ring-white/10`}>
      <Icon size={22} />
    </div>
  );
};

const SectionHeader = ({ title }) => (
  <div className="w-full mb-6 mt-8">
    <h2 className="text-xl font-bold uppercase tracking-wide text-gray-900 dark:text-gray-100 mb-2 font-serif flex items-center gap-2">
      {title}
    </h2>
    <div className="w-full h-px bg-gradient-to-r from-gray-300 via-gray-200 to-transparent dark:from-gray-600 dark:via-gray-800"></div>
  </div>
);

const ExperienceItem = ({ company, role, location, dates, bullets, type, logoUrl }) => (
  <div className="mb-8 group relative">
    <div className="flex items-start z-10 relative">
      <CompanyLogo company={company} type={type} logoUrl={logoUrl} />
      <div className="flex-1 p-4 -m-4 rounded-xl transition-all duration-300 hover:bg-white/50 dark:hover:bg-slate-800/50 hover:shadow-lg dark:hover:shadow-blue-900/10 border border-transparent hover:border-gray-100 dark:hover:border-slate-700/50">
        <div className="flex justify-between items-baseline flex-wrap">
          <h3 className="text-lg font-bold text-gray-800 dark:text-gray-100 font-serif group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
            {company}
          </h3>
          <span className="text-sm text-gray-500 dark:text-gray-400 font-medium font-serif flex items-center gap-1">
            <MapPin size={12} /> {location}
          </span>
        </div>
        <div className="flex justify-between items-center mb-2 flex-wrap mt-1">
          <span className="text-base font-medium text-gray-700 dark:text-gray-300 font-serif">{role}</span>
          <span className="text-xs font-semibold tracking-wide text-gray-500 dark:text-gray-400 font-serif uppercase bg-gray-100/80 dark:bg-slate-800/80 px-2 py-1 rounded-md shadow-sm border border-gray-200/50 dark:border-slate-700/50">{dates}</span>
        </div>
        <ul className="list-disc list-outside ml-5 space-y-1.5 mt-3">
          {bullets.map((bullet, idx) => (
            <li key={idx} className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed group-hover:text-gray-900 dark:group-hover:text-gray-200 transition-colors">
              {bullet}
            </li>
          ))}
        </ul>
      </div>
    </div>
  </div>
);

const ProjectItem = ({ name, tech, image }) => (
  <div className="group relative rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl hover:scale-[1.02] cursor-pointer">
    {/* Project Image - Full height */}
    <div className="h-64 w-full bg-gray-200 dark:bg-slate-700 relative">
        {image ? (
            <img src={image} alt={name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
        ) : (
            <div className="w-full h-full flex items-center justify-center text-gray-400 dark:text-gray-500">
                <span className="text-sm">No Image</span>
            </div>
        )}
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-80 transition-opacity duration-300"></div>
        
        {/* Text overlaid on bottom */}
        <div className="absolute bottom-0 left-0 p-6 w-full translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
             <h3 className="text-2xl font-bold text-white font-serif drop-shadow-md mb-2">{name}</h3>
             <span className="text-xs font-bold px-3 py-1 rounded-full bg-blue-600/90 text-white backdrop-blur-md border border-white/20 shadow-sm">
                {tech}
            </span>
        </div>
    </div>
  </div>
);

const GitHubPromoCard = ({ url }) => (
    <a href={`https://${url}`} target="_blank" rel="noreferrer" className="h-64 flex flex-col justify-center items-center p-6 rounded-xl border-2 border-dashed border-gray-300 dark:border-slate-600 bg-gray-50/50 dark:bg-slate-800/30 hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:border-blue-300 dark:hover:border-blue-500/50 transition-all duration-300 group cursor-pointer text-center">
        <div className="w-16 h-16 rounded-full bg-gray-200 dark:bg-slate-700 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
            <Github size={32} className="text-gray-700 dark:text-gray-300" />
        </div>
        <h3 className="text-lg font-bold text-gray-800 dark:text-gray-200 font-serif mb-1">See More Projects</h3>
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">Visit my GitHub to see the rest of my work.</p>
        <span className="flex items-center gap-1 text-sm font-bold text-blue-600 dark:text-blue-400 group-hover:translate-x-1 transition-transform">
            Go to GitHub <ArrowRight size={14} />
        </span>
    </a>
);

const EducationItem = ({ school, degree, minor, location, dates, details }) => (
  <div className="mb-6 flex items-start group">
    <div className="w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 bg-gradient-to-br from-orange-50 to-amber-100 dark:from-orange-900/30 dark:to-amber-900/30 text-orange-600 dark:text-orange-400 mr-5 hidden md:flex shadow-sm ring-1 ring-black/5 dark:ring-white/10">
      <GraduationCap size={22} />
    </div>
    <div className="flex-1 p-2 -m-2 rounded-lg transition-all hover:bg-white/50 dark:hover:bg-slate-800/50">
      <div className="flex justify-between items-baseline flex-wrap">
        <h3 className="text-lg font-bold text-gray-800 dark:text-gray-100 font-serif">{school}</h3>
        <span className="text-sm text-gray-500 dark:text-gray-400 font-medium font-serif flex items-center gap-1">
          <MapPin size={12} /> {location}
        </span>
      </div>
      <div className="flex justify-between items-center mb-1 flex-wrap mt-1">
        <div className="flex flex-col">
          <span className="text-base font-medium text-gray-700 dark:text-gray-300 font-serif">{degree}</span>
          <span className="text-sm text-gray-600 dark:text-gray-400 font-medium">{minor}</span>
        </div>
        <span className="text-xs font-semibold tracking-wide text-gray-500 dark:text-gray-400 font-serif uppercase bg-gray-100/80 dark:bg-slate-800/80 px-2 py-1 rounded-md shadow-sm border border-gray-200/50 dark:border-slate-700/50">{dates}</span>
      </div>
      {details.length > 0 && (
        <div className="mt-3 text-sm text-gray-600 dark:text-gray-300 leading-relaxed italic border-l-2 border-orange-200 dark:border-orange-900/50 pl-3">
          {details.map((detail, idx) => (
            <p key={idx}>{detail}</p>
          ))}
        </div>
      )}
    </div>
  </div>
);

export default function Home() {
  return <App />;
}

function App() {
  const [data] = useState(INITIAL_DATA);
  const [darkMode, setDarkMode] = useState(true);

  // Toggle dark mode
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className={`min-h-screen transition-colors duration-500 ${darkMode ? 'bg-[#0f172a]' : 'bg-gray-100'} pb-12 print:bg-white print:pb-0 font-sans relative overflow-hidden`}>
      
      {/* --- COOL BACKGROUND EFFECTS --- */}
      {/* Interactive Particle Network (Hidden in Print) */}
      <div className="print:hidden">
         <ParticleBackground darkMode={darkMode} />
      </div>

      {/* Floating Controls */}
      <div className="fixed top-6 right-6 flex gap-3 print:hidden z-50">
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="p-3 rounded-full bg-white/10 backdrop-blur-md shadow-xl hover:scale-105 transition-all text-gray-800 dark:text-gray-200 border border-white/20 hover:bg-white/20"
          title="Toggle Theme"
        >
          {darkMode ? <Sun size={20} /> : <Moon size={20} />}
        </button>
        <button
          onClick={handlePrint}
          className="p-3 rounded-full bg-blue-600/90 backdrop-blur-md text-white shadow-xl hover:bg-blue-600 hover:scale-105 transition-all flex items-center gap-2 font-semibold px-6 border border-white/10"
          title="Download PDF"
        >
          <Download size={20} />
          <span className="hidden sm:inline">Save as PDF</span>
        </button>
      </div>

      {/* Main Glass Container */}
      {/* We use backdrop-blur and semi-transparent bg to let the cool blobs show through */}
      <div className="max-w-[210mm] mx-auto mt-8 md:mt-12 mb-12 relative z-10 
                      bg-white/70 dark:bg-slate-900/60 
                      backdrop-blur-xl border border-white/40 dark:border-white/10 
                      shadow-2xl rounded-sm 
                      print:shadow-none print:max-w-full print:bg-white print:mt-0 print:border-none
                      min-h-[297mm] transition-all duration-500">
        
        {/* Top Decoration Bar */}
        <div className="h-1.5 w-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>

        <div className="px-8 py-10 md:px-16 md:py-12">
          
          {/* Hero Header */}
          <header className="text-center mb-10 pb-8 border-b border-gray-200/50 dark:border-gray-700/50 relative">
            <h1 className="text-5xl font-bold uppercase tracking-tight text-slate-900 dark:text-white font-serif mb-3 drop-shadow-sm">
              {data.personalInfo.name}
            </h1>
            <p className="text-xl text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 font-bold mb-5 tracking-wide">
              {data.personalInfo.title}
            </p>

            <div className="flex flex-wrap justify-center gap-x-6 gap-y-3 text-sm text-gray-600 dark:text-gray-400 font-medium">
              {data.personalInfo.email && (
                <a href={`mailto:${data.personalInfo.email}`} className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-gray-50 dark:bg-slate-800/50 hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:text-blue-600 dark:hover:text-blue-400 transition-all border border-gray-200 dark:border-slate-700/50">
                  <Mail size={14} /> {data.personalInfo.email}
                </a>
              )}
              {data.personalInfo.linkedin && (
                <a href={`https://${data.personalInfo.linkedin}`} target="_blank" rel="noreferrer" className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-gray-50 dark:bg-slate-800/50 hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:text-blue-600 dark:hover:text-blue-400 transition-all border border-gray-200 dark:border-slate-700/50">
                  <Linkedin size={14} /> LinkedIn
                </a>
              )}
              {data.personalInfo.github && (
                <a href={`https://${data.personalInfo.github}`} target="_blank" rel="noreferrer" className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-gray-50 dark:bg-slate-800/50 hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:text-blue-600 dark:hover:text-blue-400 transition-all border border-gray-200 dark:border-slate-700/50">
                  <Github size={14} /> GitHub
                </a>
              )}
            </div>
          </header>

          {/* Education Section */}
          <section>
            <SectionHeader title="Education" />
            {data.education.map((edu, index) => (
              <EducationItem key={index} {...edu} />
            ))}
          </section>

          {/* Technical Skills - Shields.io Badges */}
          <section>
            <SectionHeader title="Technical Skills" />
            <div className="bg-white/50 dark:bg-slate-800/40 p-6 rounded-2xl border border-white/60 dark:border-slate-700/50 backdrop-blur-sm shadow-sm">
                <h3 className="font-bold text-gray-800 dark:text-gray-200 font-serif mb-4 flex items-center justify-center gap-2">
                    <span className="text-xl">💻</span> Tech Stack
                </h3>
                {/* Updated: justify-center added for centering */}
                <div className="flex flex-wrap justify-center gap-2">
                    {data.techStack.map((skill, index) => (
                        <img 
                            key={index}
                            src={skill.url} 
                            alt={skill.name} 
                            className="h-7 hover:scale-105 transition-transform cursor-pointer shadow-sm"
                        />
                    ))}
                </div>
            </div>
          </section>

          {/* Experience Section */}
          <section>
            <SectionHeader title="Experience" />
            <div className="relative pl-2">
              {/* Connected Line for timeline effect */}
              <div className="absolute left-[26px] top-4 bottom-4 w-0.5 bg-gray-200 dark:bg-gray-800 hidden md:block z-0"></div>
              {data.experience.map((exp, index) => (
                <ExperienceItem key={index} {...exp} />
              ))}
            </div>
          </section>

          {/* Projects Section - 2 Columns Grid */}
          <section>
            <SectionHeader title="Projects" />
            {/* Updated grid to strictly 2 columns on medium screens and up */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 auto-rows-fr">
              {data.projects.map((proj, index) => (
                <ProjectItem key={index} {...proj} />
              ))}
              {/* Custom Card for GitHub link */}
              <GitHubPromoCard url={data.personalInfo.github} />
            </div>
          </section>

          {/* Other Section */}
          {data.other && (
            <section>
              <SectionHeader title="Certifications & Interests" />
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 p-5 rounded-xl border border-blue-100 dark:border-blue-800/30 text-sm text-gray-700 dark:text-gray-300 leading-relaxed italic relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-10">
                  <GraduationCap size={64} />
                </div>
                <div className="relative z-10 flex flex-col gap-2">
                    {data.other.map((item, index) => (
                        <div key={index} className="flex items-start gap-2">
                            <span className="text-blue-500">•</span>
                            <span>{item}</span>
                        </div>
                    ))}
                </div>
              </div>
            </section>
          )}

          {/* Buy Me a Coffee Section */}
          <div className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-800 print:hidden">
            <div className="group rounded-2xl p-8 bg-gradient-to-br from-yellow-50 via-orange-50 to-yellow-50 dark:from-yellow-900/10 dark:via-orange-900/10 dark:to-yellow-900/10 border border-yellow-200/50 dark:border-yellow-700/30 transition-all duration-500 hover:shadow-lg hover:-translate-y-1 relative overflow-hidden">
              {/* Shine effect */}
              <div className="absolute top-0 -left-full w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-12 group-hover:animate-shine"></div>
              
              <div className="relative z-10">
                <h4 className="text-xl font-bold mb-3 flex items-center text-slate-800 dark:text-slate-100">
                  <Coffee className="mr-3 text-yellow-500 group-hover:rotate-12 transition-transform" />
                  Support My Work
                </h4>
                
                <p className="text-sm mb-6 text-slate-600 dark:text-slate-400 max-w-2xl leading-relaxed">
                  If you found my projects helpful or interesting, consider buying me a coffee! Your support helps me create more open-source work and fuel late-night coding sessions.
                </p>
                
                <a 
                  href="https://www.buymeacoffee.com/mdzdmr" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-8 py-3 rounded-full text-sm font-bold transition-all duration-300 bg-[#FFDD00] text-black hover:bg-[#ffea00] hover:shadow-[0_0_20px_rgba(255,221,0,0.5)] hover:scale-105 active:scale-95"
                >
                  <Coffee className="mr-2 w-4 h-4" />
                  Buy Me A Coffee
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Footer / Instructions */}
      <div className="max-w-[210mm] mx-auto mt-8 text-center text-gray-500 text-sm print:hidden pb-10">
        <p className="flex items-center justify-center gap-2">
            Tip: Use <kbd className="px-2 py-0.5 rounded bg-gray-200 dark:bg-slate-800 text-xs font-mono">Ctrl/Cmd + P</kbd> to save as PDF.
        </p>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Merriweather:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400&family=Inter:wght@300;400;500;600;700&display=swap');
        
        .font-serif {
          font-family: 'Merriweather', serif;
        }
        
        body {
          font-family: 'Inter', sans-serif;
        }
        
        @keyframes shine {
          100% { left: 125%; }
        }
        .group-hover\\:animate-shine {
          animation: shine 1s;
        }

        @media print {
          @page {
            margin: 0;
            size: auto;
          }
          body {
            -webkit-print-color-adjust: exact;
            background-color: white;
          }
          /* Hide non-printable elements */
          button, .fixed, .print\\:hidden {
            display: none !important;
          }
          /* Ensure links are black for print */
          a {
            color: black !important;
            text-decoration: none !important;
          }
          /* Remove backgrounds from pills for print clarity */
          .rounded-full, .rounded-lg, .rounded-xl, .rounded-2xl {
             border: 1px solid #ddd !important;
             background-color: transparent !important;
             box-shadow: none !important;
             color: black !important;
          }
          /* Reset Text Colors */
          .text-gray-500, .text-gray-600, .text-slate-400 {
             color: #333 !important;
          }
        }
      `}</style>
    </div>
  );
}
