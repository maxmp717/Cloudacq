import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, Github, 
  ArrowRight, Check, Zap, Star, Award, Shield, Globe, Code, 
  Smartphone, Palette, Users, MessageSquare, Heart
} from 'lucide-react';

// Floating Particle Component
const FloatingParticle = ({ delay }) => (
  <div
    className="absolute w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-20 animate-bounce"
    style={{
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      animationDelay: `${delay}s`,
      animationDuration: `${3 + Math.random() * 4}s`
    }}
  />
);

// Wave Animation Component
const WaveAnimation = ({ className = "", position = "top", inverted = false }) => {
  const waveVariants = {
    animate: {
      x: [0, -1000],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 25,
          ease: "linear",
        },
      },
    },
  };

  const secondWaveVariants = {
    animate: {
      x: [0, -1000],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 20,
          ease: "linear",
        },
      },
    },
  };

  const thirdWaveVariants = {
    animate: {
      x: [0, -1000],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 15,
          ease: "linear",
        },
      },
    },
  };

  return (
    <div className={`absolute ${position}-0 left-0 w-full overflow-hidden leading-none z-0 ${className}`}>
      <div className={`relative h-32 md:h-40 ${inverted ? "rotate-180" : ""}`}>
        <motion.div
          className="absolute bottom-0 left-0 w-[200%] h-full"
          variants={waveVariants}
          animate="animate"
        >
          <svg
            viewBox="0 0 4000 200"
            className="w-full h-full"
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient id="footerWave1" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="rgba(59, 130, 246, 0.3)" />
                <stop offset="50%" stopColor="rgba(147, 51, 234, 0.3)" />
                <stop offset="100%" stopColor="rgba(236, 72, 153, 0.3)" />
              </linearGradient>
            </defs>
            <path d="M0,192 C400,100 800,200 1200,100 C1600,0 2000,100 2400,150 C2800,200 3200,100 3600,150 C4000,200 4000,200 4000,200 L0,200 Z" fill="url(#footerWave1)" />
          </svg>
        </motion.div>

        <motion.div
          className="absolute bottom-0 left-0 w-[200%] h-full"
          variants={secondWaveVariants}
          animate="animate"
        >
          <svg
            viewBox="0 0 4000 170"
            className="w-full h-full"
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient id="footerWave2" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="rgba(16, 185, 129, 0.4)" />
                <stop offset="50%" stopColor="rgba(59, 130, 246, 0.4)" />
                <stop offset="100%" stopColor="rgba(147, 51, 234, 0.4)" />
              </linearGradient>
            </defs>
            <path d="M0,160 C600,100 1200,190 1800,120 C2400,50 3000,120 3600,160 C4000,185 4000,200 4000,200 L0,200 Z" fill="url(#footerWave2)" />
          </svg>
        </motion.div>

        <motion.div
          className="absolute bottom-0 left-0 w-[200%] h-full"
          variants={thirdWaveVariants}
          animate="animate"
        >
          <svg
            viewBox="0 0 4000 140"
            className="w-full h-full"
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient id="footerWave3" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="rgba(236, 72, 153, 0.6)" />
                <stop offset="50%" stopColor="rgba(251, 146, 60, 0.6)" />
                <stop offset="100%" stopColor="rgba(245, 101, 101, 0.6)" />
              </linearGradient>
            </defs>
            <path d="M0,140 C300,60 600,140 900,100 C1200,60 1500,100 1800,120 C2100,140 2400,120 2700,80 C3000,40 3300,80 3600,100 C3900,120 4000,100 4000,100 L4000,200 L0,200 Z" fill="url(#footerWave3)" />
          </svg>
        </motion.div>
      </div>
    </div>
  );
};

const FooterPreview = () => {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [hoveredSection, setHoveredSection] = useState(null);
  
  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  const socialLinks = [
    // { name: 'Twitter', icon: Twitter, href: 'https://twitter.com/Cloudacq', color: 'from-sky-400 to-blue-500' },
    // { name: 'Facebook', icon: Facebook, href: 'https://facebook.com/Cloudacq', color: 'from-blue-500 to-indigo-600' },
    { name: 'Instagram', icon: Instagram, href: 'https://instagram.com/Cloudacq', color: 'from-pink-500 to-rose-500' },
    { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com/company/Cloudacq', color: 'from-blue-600 to-blue-700' },
    // { name: 'GitHub', icon: Github, href: 'https://github.com/Cloudacq', color: 'from-gray-600 to-gray-800' }
  ];

  const linkSections = [
    {
      title: 'Company',
      icon: Users,
      gradient: 'from-blue-500 to-cyan-500',
      links: [
        { label: 'About Us', href: '/about' },
        { label: 'Our Team', href: '/about' },
        { label: 'Careers', href: '/about' },
        { label: 'Contact', href: '/contact' }
      ]
    },
    {
      title: 'Web Development',
      icon: Code,
      gradient: 'from-emerald-500 to-teal-500',
      links: [
        { label: 'Custom Websites', href: '/services#web-development' },
        { label: 'E-commerce', href: '/services' },
        { label: 'CMS Development', href: '/services' },
        { label: 'API Integration', href: '/services' },
        { label: 'Progressive Web Apps', href: '/services' }
      ]
    },
    {
      title: 'Mobile & Cloud',
      icon: Smartphone,
      gradient: 'from-purple-500 to-pink-500',
      links: [
        { label: 'Mobile Apps', href: '/services' },
        { label: 'React Native', href: '/services' },
        { label: 'Cloud Solutions', href: '/services' },
        { label: 'DevOps', href: '/services' },
        { label: 'Web Hosting', href: '/services' }
      ]
    },
    {
      title: 'Design & Marketing',
      icon: Palette,
      gradient: 'from-orange-500 to-red-500',
      links: [
        { label: 'UI/UX Design', href: '/services' },
        { label: 'Graphic Design', href: '/services' },
        { label: 'Branding', href: '/services' },
        { label: 'SEO Services', href: '/services' },
        { label: 'Digital Marketing', href: '/services' }
      ]
    },
    {
      title: 'Additional Services',
      icon: Shield,
      gradient: 'from-indigo-500 to-purple-500',
      links: [
        { label: 'Tech Consulting', href: '/services' },
        { label: 'Website Maintenance', href: '/services' },
        { label: 'Security Audits', href: '/services' },
        { label: 'Performance Optimization', href: '/services' }
      ]
    },
    {
      title: 'Resources',
      icon: Globe,
      gradient: 'from-rose-500 to-pink-500',
      links: [
        { label: 'Blog', href: '/blog' },
        { label: 'Case Studies', href: '/projects' },
        // { label: 'Portfolio', href: '/portfolio' },
        { label: 'Testimonials', href: '/' }
      ]
    }
  ];
  
  return (
    <div className="w-full">
      <footer className="relative bg-black shadow-violet-500/20 text-white overflow-hidden">
        {/* Top Wave Animation */}
        <WaveAnimation position="top" inverted={true} className="-mt-1" />
        
        {/* Floating Particles Background */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(40)].map((_, i) => (
            <FloatingParticle key={i} delay={i * 0.2} />
          ))}
        </div>

        {/* Animated Background Gradient */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-pink-500 to-orange-500 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}} />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full blur-3xl animate-pulse" style={{animationDelay: '4s'}} />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 pt-20 pb-8 relative z-10">
          {/* Newsletter Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-20"
          >
            <div className="max-w-4xl mx-auto bg-gradient-to-br from-white/20 via-white/10 to-white/5 backdrop-blur-xl border border-white/30 rounded-3xl p-4 md:p-8 relative overflow-hidden group hover:from-white/25 hover:via-white/15 hover:to-white/10 transition-all duration-700 shadow-2xl">
              {/* Background Effects */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/30 via-purple-600/30 to-pink-600/30 animate-pulse" />
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                <div className="absolute -top-10 -left-10 w-32 h-32 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full blur-2xl animate-bounce" style={{animationDuration: '3s'}} />
                <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full blur-2xl animate-bounce" style={{animationDuration: '4s', animationDelay: '1s'}} />
              </div>
              
              <div className="flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
                <div className="md:w-3/5">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center mr-4">
                      <MessageSquare className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-3xl font-bold bg-gradient-to-r from-white via-blue-200 to-white bg-clip-text text-transparent">Stay in the loop</h3>
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed">Subscribe to our newsletter for the latest tech updates, industry insights, and exclusive content delivered to your inbox.</p>
                </div>
                <div className="md:w-2/5 w-full">
                  <AnimatePresence mode="wait">
                    {!isSubscribed ? (
                      <motion.form
                        key="form"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onSubmit={handleSubscribe}
                        className="relative"
                      >
                        <div className="flex bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl overflow-hidden hover:bg-white/15 transition-colors duration-300">
                          <input 
                            type="email" 
                            name="email"
                            placeholder="Your email address" 
                            className="px-6 py-4 w-full bg-transparent focus:outline-none text-white placeholder-gray-300"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                          />
                          <button 
                            type="submit" 
                            className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:from-pink-500 hover:via-purple-500 hover:to-blue-500 px-6 py-4 transition-all duration-500 flex items-center group"
                          >
                            <span className="hidden sm:inline mr-2 font-semibold">Subscribe</span>
                            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
                          </button>
                        </div>
                      </motion.form>
                    ) : (
                      <motion.div
                        key="success"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        className="bg-gradient-to-r from-emerald-500 to-teal-500 px-6 py-4 rounded-2xl flex items-center justify-center border border-emerald-400/30"
                      >
                        <Check size={20} className="text-white mr-3" />
                        <span className="text-white font-semibold">Successfully Subscribed!</span>
                        <Star className="w-5 h-5 text-yellow-300 ml-2 animate-pulse" />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Main Footer Content */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
            {/* Company Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-4"
            >
              <div className="mb-8">
                {/* Enhanced Logo */}
                {/* <div className="flex items-center space-x-3 group cursor-pointer mb-6">
                  <div className="relative">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 flex items-center justify-center relative overflow-hidden group-hover:scale-110 transition-all duration-500 shadow-lg">
                      <Zap className="w-7 h-7 text-white group-hover:rotate-12 transition-transform duration-300" />
                      <div className="absolute inset-0 rounded-2xl blur-xl bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-60 transition-opacity duration-500 -z-10" />
                    </div>
                    <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full animate-pulse border-2 border-slate-900" />
                  </div>
                  <div>
                    <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                      Cloudacq
                    </span>
                    <p className="text-sm text-gray-400">Digital Solutions</p>
                  </div>
                </div> */}
                {/* <div className="mb-8"> */}
  {/* Your logo image */}
  <div className="group cursor-pointer mb-6">
    <img 
      src="/logo.png" 
      alt="CloudACQ Logo" 
      className="h-12 w-auto group-hover:scale-105 transition-transform duration-300"
    />
  </div>
                <p className="text-gray-300 mb-8 leading-relaxed">
                  Cloudacq delivers cutting-edge tech solutions for businesses looking to transform their digital presence and capabilities. We're passionate about creating innovative solutions that drive real results.
                </p>
              </div>
              
              {/* Contact Information */}
              <div className="space-y-4">
                {[
                  { icon: Mail, href: 'mailto:cloudacq@gmail.com', text: 'cloudacq@gmail.com', gradient: 'from-blue-500 to-cyan-500' },
                  { icon: Phone, href: 'tel:+918122441337', text: '+91 (812) 244-1337', gradient: 'from-emerald-500 to-teal-500' },
                  { icon: MapPin, href: 'https://maps.google.com/?q=1234+Tech+Avenue,+San+Francisco,+CA+94107', text: 'Race course\n Coimbatore, Tamilnadu 641005', gradient: 'from-purple-500 to-pink-500' }
                ].map((contact, index) => {
                  const IconComponent = contact.icon;
                  return (
                    <motion.a
                      key={index}
                      href={contact.href}
                      target={contact.href.startsWith('http') ? '_blank' : undefined}
                      rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="flex items-start group cursor-pointer"
                    >
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${contact.gradient} flex items-center justify-center mr-4 group-hover:scale-110 transition-all duration-300 shadow-lg`}>
                        <IconComponent size={18} className="text-white" />
                      </div>
                      <div className="flex-1">
                        <span className="text-gray-300 group-hover:text-white transition-colors duration-300 whitespace-pre-line">
                          {contact.text}
                        </span>
                      </div>
                    </motion.a>
                  );
                })}
              </div>
            </motion.div>

            {/* Link Sections */}
            <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {linkSections.map((section, sectionIndex) => {
                const IconComponent = section.icon;
                const isHovered = hoveredSection === section.title;
                
                return (
                  <motion.div
                    key={section.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: sectionIndex * 0.1 }}
                    onMouseEnter={() => setHoveredSection(section.title)}
                    onMouseLeave={() => setHoveredSection(null)}
                    className="group"
                  >
                    <div className="flex items-center mb-6">
                      <div className={`w-8 h-8 rounded-lg bg-gradient-to-r ${section.gradient} flex items-center justify-center mr-3 group-hover:scale-110 transition-transform duration-300`}>
                        <IconComponent className="w-4 h-4 text-white" />
                      </div>
                      <h3 className={`text-xl font-bold relative transition-all duration-300 ${
                        isHovered 
                          ? `bg-gradient-to-r ${section.gradient} bg-clip-text text-transparent` 
                          : 'text-white'
                      }`}>
                        {section.title}
                      </h3>
                    </div>
                    
                    <ul className="space-y-3">
                      {section.links.map((link, linkIndex) => (
                        <motion.li
                          key={link.href}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.4, delay: (sectionIndex * 0.1) + (linkIndex * 0.05) }}
                        >
                          <a
                            href={link.href}
                            className="flex items-center text-gray-400 hover:text-white transition-all duration-300 group/link hover:translate-x-2"
                          >
                            <ArrowRight size={14} className={`mr-3 transition-colors duration-300 bg-gradient-to-r ${section.gradient} bg-clip-text text-transparent`} />
                            <span className="group-hover/link:text-white transition-colors duration-300">
                              {link.label}
                            </span>
                          </a>
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Bottom Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="pt-8 border-t border-white/20"
          >
            <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
              {/* Copyright */}
              <div className="flex items-center">
                <Heart className="w-5 h-5 text-red-400 mr-2 animate-pulse" />
                <p className="text-gray-400 text-sm">
                  © {currentYear} Cloudacq. Made with love for digital innovation. All rights reserved.
                </p>
              </div>
              
              {/* Social Media */}
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon;
                  return (
                    <motion.a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      whileHover={{ scale: 1.2, rotate: 5 }}
                      className={`w-12 h-12 rounded-xl bg-gradient-to-r ${social.color} flex items-center justify-center transition-all duration-300 shadow-lg hover:shadow-2xl group relative overflow-hidden`}
                      aria-label={social.name}
                    >
                      {/* Hover glow */}
                      <div className={`absolute inset-0 bg-gradient-to-r ${social.color} opacity-0 group-hover:opacity-75 transition-opacity duration-300 blur-xl`} />
                      
                      <IconComponent size={18} className="text-white relative z-10 group-hover:scale-110 transition-transform duration-300" />
                      
                      {/* Shine effect */}
                      <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse rounded-xl" />
                    </motion.a>
                  );
                })}
              </div>
            </div>
            
            {/* Additional Legal Links */}
            <div className="mt-6 pt-6 border-t border-white/10 flex flex-wrap justify-center gap-6 text-sm">
              {/* {['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'Sitemap'].map((link, index) => ( */}
                {['Privacy Policy', 'Terms of Service'].map((link, index) => (
                <motion.a
                  key={link}
                  href={`/${link.toLowerCase().replace(/\s+/g, '-')}`}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-gray-400 hover:text-white transition-colors duration-300 hover:underline"
                >
                  {link}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </footer>
    </div>
  );
};

export default FooterPreview;