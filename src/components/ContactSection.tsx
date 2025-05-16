"use client";
import React, { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faMapMarkerAlt, faPhone, faPaperPlane, faCoffee } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub, faTwitter } from "@fortawesome/free-brands-svg-icons";

export const ContactSection = ({ colors }: { colors: any }) => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
    submitted: false,
    loading: false,
    error: null
  });
  
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.3 });
  
  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState({ ...formState, loading: true, error: null });
    
    // Simulate form submission
    setTimeout(() => {
      // In a real implementation, you would send the form data to your backend/email service
      console.log("Form submitted:", formState);
      setFormState({
        ...formState,
        submitted: true,
        loading: false
      });
    }, 1500);
  };
  
  // Handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };
  
  // Variants for animations
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
      transition: { duration: 0.5 }
    }
  };
  
  return (
    <div 
      className="min-h-screen py-20 px-4"
      style={{ 
        background: `linear-gradient(180deg, ${colors.background} 0%, ${colors.background}ee 100%)` 
      }}
      ref={sectionRef}
    >
      <motion.h2 
        className="text-4xl md:text-5xl font-bold mb-4 text-center"
        style={{ color: colors.text }}
        initial={{ opacity: 0, y: -20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
      >
        Get In Touch
      </motion.h2>
      
      <motion.p
        className="text-center mb-16 max-w-2xl mx-auto"
        style={{ color: colors.text + "99" }}
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Have a project in mind or want to chat? Send me a message and I'll get back to you soon!
      </motion.p>
      
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10">
          {/* Contact information */}
          <motion.div 
            className="md:col-span-2"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <motion.div 
              className="bg-opacity-10 backdrop-blur-sm border rounded-2xl p-6 h-full"
              style={{ 
                backgroundColor: colors.background, 
                borderColor: colors.accent + "30",
                boxShadow: `0 10px 15px -3px ${colors.accent}10`
              }}
              variants={itemVariants}
            >
              <h3 
                className="text-2xl font-bold mb-6"
                style={{ color: colors.accent }}
              >
                Contact Information
              </h3>
              
              <div className="space-y-6">
                <ContactItem 
                  icon={faEnvelope} 
                  title="Email" 
                  detail="hello@mdzdmr.com"
                  link="mailto:hello@mdzdmr.com" 
                  colors={colors}
                />
                
                <ContactItem 
                  icon={faMapMarkerAlt} 
                  title="Location" 
                  detail="London, Ontario, Canada" 
                  colors={colors}
                />
                
                <ContactItem 
                  icon={faPhone} 
                  title="Phone" 
                  detail="+1 (123) 456-7890" 
                  link="tel:+11234567890"
                  colors={colors}
                />
              </div>
              
              <div className="mt-8">
                <h4 
                  className="text-lg font-semibold mb-4"
                  style={{ color: colors.text }}
                >
                  Connect with me
                </h4>
                
                <div className="flex space-x-4">
                  <SocialButton 
                    icon={faLinkedin} 
                    href="https://www.linkedin.com/in/mohammed-zaid-mir" 
                    colors={colors}
                  />
                  <SocialButton 
                    icon={faGithub} 
                    href="https://github.com/mdzdmr" 
                    colors={colors}
                  />
                  <SocialButton 
                    icon={faTwitter} 
                    href="https://twitter.com/yourusername" 
                    colors={colors}
                  />
                </div>
              </div>
              
              {/* Buy Me a Coffee section */}
              <motion.div 
                className="mt-10 pt-6 border-t"
                style={{ borderColor: colors.accent + "20" }}
                variants={itemVariants}
              >
                <h4 
                  className="text-lg font-semibold mb-4 flex items-center"
                  style={{ color: colors.text }}
                >
                  <FontAwesomeIcon 
                    icon={faCoffee} 
                    className="mr-2"
                    style={{ color: colors.highlight }}
                  />
                  Support My Work
                </h4>
                
                <p 
                  className="text-sm mb-4"
                  style={{ color: colors.text + "99" }}
                >
                  If you found my projects helpful or interesting, consider buying me a coffee! Your support helps me create more open-source work.
                </p>
                
                <a 
                  href="https://www.buymeacoffee.com/yourusername" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block px-6 py-3 rounded-full text-sm font-medium transition-all duration-300"
                  style={{ 
                    backgroundColor: "#FFDD00", 
                    color: "#000000"
                  }}
                >
                  <FontAwesomeIcon icon={faCoffee} className="mr-2" />
                  Buy Me A Coffee
                </a>
              </motion.div>
            </motion.div>
          </motion.div>
          
          {/* Contact form */}
          <motion.div 
            className="md:col-span-3"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <motion.div 
              className="bg-opacity-10 backdrop-blur-sm border rounded-2xl p-6"
              style={{ 
                backgroundColor: colors.background, 
                borderColor: colors.secondary + "30",
                boxShadow: `0 10px 15px -3px ${colors.secondary}10`
              }}
              variants={itemVariants}
            >
              <h3 
                className="text-2xl font-bold mb-6"
                style={{ color: colors.secondary }}
              >
                Send Me a Message
              </h3>
              
              {formState.submitted ? (
                <motion.div 
                  className="flex flex-col items-center justify-center py-12"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <div 
                    className="w-20 h-20 rounded-full flex items-center justify-center mb-6"
                    style={{ backgroundColor: colors.accent + "20" }}
                  >
                    <FontAwesomeIcon 
                      icon={faPaperPlane} 
                      size="2x" 
                      style={{ color: colors.accent }}
                    />
                  </div>
                  
                  <h4 
                    className="text-xl font-bold mb-2"
                    style={{ color: colors.text }}
                  >
                    Message Sent Successfully!
                  </h4>
                  
                  <p
                    className="text-center mb-6"
                    style={{ color: colors.text + "99" }}
                  >
                    Thank you for reaching out. I'll get back to you as soon as possible.
                  </p>
                  
                  <button
                    onClick={() => setFormState({ ...formState, submitted: false, name: "", email: "", message: "" })}
                    className="px-6 py-2 rounded-full text-sm transition-colors"
                    style={{ 
                      backgroundColor: colors.secondary + "20", 
                      color: colors.secondary 
                    }}
                  >
                    Send Another Message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <motion.div variants={itemVariants}>
                      <label 
                        htmlFor="name" 
                        className="block mb-2 text-sm font-medium"
                        style={{ color: colors.text }}
                      >
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formState.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg focus:outline-none"
                        style={{ 
                          backgroundColor: colors.background + "80", 
                          borderColor: colors.secondary + "30",
                          border: `1px solid ${colors.secondary}30`,
                          color: colors.text
                        }}
                        placeholder="John Doe"
                      />
                    </motion.div>
                    
                    <motion.div variants={itemVariants}>
                      <label 
                        htmlFor="email" 
                        className="block mb-2 text-sm font-medium"
                        style={{ color: colors.text }}
                      >
                        Your Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formState.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg focus:outline-none"
                        style={{ 
                          backgroundColor: colors.background + "80", 
                          borderColor: colors.secondary + "30",
                          border: `1px solid ${colors.secondary}30`,
                          color: colors.text
                        }}
                        placeholder="john@example.com"
                      />
                    </motion.div>
                  </div>
                  
                  <motion.div className="mb-6" variants={itemVariants}>
                    <label 
                      htmlFor="message" 
                      className="block mb-2 text-sm font-medium"
                      style={{ color: colors.text }}
                    >
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formState.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 rounded-lg focus:outline-none"
                      style={{ 
                        backgroundColor: colors.background + "80", 
                        borderColor: colors.secondary + "30",
                        border: `1px solid ${colors.secondary}30`,
                        color: colors.text
                      }}
                      placeholder="Hello, I'd like to talk about..."
                    />
                  </motion.div>
                  
                  <motion.div variants={itemVariants}>
                    <button
                      type="submit"
                      disabled={formState.loading}
                      className="px-8 py-3 rounded-full font-medium flex items-center space-x-2"
                      style={{ 
                        backgroundColor: colors.secondary, 
                        color: colors.background
                      }}
                    >
                      {formState.loading ? (
                        <>
                          <span className="w-5 h-5 border-t-2 border-r-2 border-white rounded-full animate-spin mr-2" />
                          <span>Sending...</span>
                        </>
                      ) : (
                        <>
                          <span>Send Message</span>
                          <FontAwesomeIcon icon={faPaperPlane} />
                        </>
                      )}
                    </button>
                  </motion.div>
                </form>
              )}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

interface ContactItemProps {
  icon: typeof faEnvelope;
  title: string;
  detail: string;
  link?: string;
  colors: any;
}

const ContactItem = ({ icon, title, detail, link, colors }: ContactItemProps) => {
  return (
    <motion.div 
      className="flex items-start"
      variants={{
        hidden: { opacity: 0, y: 10 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
      }}
    >
      <div 
        className="w-10 h-10 rounded-full flex items-center justify-center mr-4"
        style={{ backgroundColor: colors.accent + "20" }}
      >
        <FontAwesomeIcon icon={icon} style={{ color: colors.accent }} />
      </div>
      
      <div>
        <h4 className="font-medium mb-1" style={{ color: colors.text }}>
          {title}
        </h4>
        
        {link ? (
          <a 
            href={link} 
            className="hover:underline"
            style={{ color: colors.text + "99" }}
          >
            {detail}
          </a>
        ) : (
          <p style={{ color: colors.text + "99" }}>
            {detail}
          </p>
        )}
      </div>
    </motion.div>
  );
};

interface SocialButtonProps {
  icon: typeof faLinkedin;
  href: string;
  colors: any;
}

const SocialButton = ({ icon, href, colors }: SocialButtonProps) => {
  return (
    <motion.a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer"
      className="w-10 h-10 rounded-full flex items-center justify-center"
      style={{ 
        backgroundColor: colors.accent + "20", 
        color: colors.accent 
      }}
      whileHover={{ y: -5, backgroundColor: colors.accent, color: colors.background }}
      transition={{ duration: 0.3 }}
    >
      <FontAwesomeIcon icon={icon} />
    </motion.a>
  );
};
