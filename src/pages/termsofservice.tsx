import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FileText, Shield, Users, CreditCard, Clock, Scale, AlertTriangle, 
  CheckCircle, XCircle, Gavel, Mail, Phone, MapPin, ArrowUp, 
  BookOpen, Lock, Globe, Zap
} from 'lucide-react';

// Floating Particle Component
const FloatingParticle = ({ delay, size = 'small' }) => {
  const sizeClasses = {
    small: 'w-1 h-1',
    medium: 'w-2 h-2',
    large: 'w-3 h-3'
  };
  
  return (
    <div
      className={`absolute ${sizeClasses[size]} rounded-full opacity-30 animate-bounce`}
      style={{
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        animationDelay: `${delay}s`,
        animationDuration: `${3 + Math.random() * 4}s`,
        background: `linear-gradient(45deg, 
          hsl(${Math.random() * 60 + 200}, 70%, 60%), 
          hsl(${Math.random() * 60 + 260}, 70%, 60%))`
      }}
    />
  );
};

// Enhanced Wave Animation Component
const WaveAnimation = ({ position = "bottom", inverted = false }) => {
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
    <div className={`absolute ${position}-0 left-0 w-full overflow-hidden leading-none z-0`}>
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
              <linearGradient id="termsWave1" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="rgba(59, 130, 246, 0.3)" />
                <stop offset="50%" stopColor="rgba(147, 51, 234, 0.3)" />
                <stop offset="100%" stopColor="rgba(236, 72, 153, 0.3)" />
              </linearGradient>
            </defs>
            <path d="M0,192 C400,100 800,200 1200,100 C1600,0 2000,100 2400,150 C2800,200 3200,100 3600,150 C4000,200 4000,200 4000,200 L0,200 Z" fill="url(#termsWave1)" />
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
              <linearGradient id="termsWave2" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="rgba(16, 185, 129, 0.4)" />
                <stop offset="50%" stopColor="rgba(59, 130, 246, 0.4)" />
                <stop offset="100%" stopColor="rgba(147, 51, 234, 0.4)" />
              </linearGradient>
            </defs>
            <path d="M0,160 C600,100 1200,190 1800,120 C2400,50 3000,120 3600,160 C4000,185 4000,200 4000,200 L0,200 Z" fill="url(#termsWave2)" />
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
              <linearGradient id="termsWave3" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="rgba(236, 72, 153, 0.6)" />
                <stop offset="50%" stopColor="rgba(251, 146, 60, 0.6)" />
                <stop offset="100%" stopColor="rgba(245, 101, 101, 0.6)" />
              </linearGradient>
            </defs>
            <path d="M0,140 C300,60 600,140 900,100 C1200,60 1500,100 1800,120 C2100,140 2400,120 2700,80 C3000,40 3300,80 3600,100 C3900,120 4000,100 4000,100 L4000,200 L0,200 Z" fill="url(#termsWave3)" />
          </svg>
        </motion.div>
      </div>
    </div>
  );
};

const TermsOfService = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Show scroll to top button when user scrolls down
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.pageYOffset > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const sections = [
    {
      icon: CheckCircle,
      title: "Acceptance of Terms",
      gradient: "from-emerald-500 to-teal-500",
      content: [
        "By accessing and using Cloudacq's website and services, you accept and agree to be bound by the terms and provision of this agreement.",
        "If you do not agree to abide by the above, please do not use this service.",
        "These terms apply to all visitors, users, and others who access or use our services.",
        "We reserve the right to update and change the Terms of Service from time to time without notice."
      ]
    },
    {
      icon: Globe,
      title: "Description of Service",
      gradient: "from-blue-500 to-cyan-500",
      content: [
        "Cloudacq provides web development, mobile app development, and digital marketing services to businesses and individuals.",
        "Our services include but are not limited to: website design and development, e-commerce solutions, mobile applications, SEO, and digital consulting.",
        "We reserve the right to modify, suspend, or discontinue any aspect of our services at any time.",
        "Some services may be subject to additional terms and conditions, which will be presented to you when you sign up for those services."
      ]
    },
    {
      icon: Users,
      title: "User Accounts and Registration",
      gradient: "from-purple-500 to-pink-500",
      content: [
        "To access certain features of our services, you may be required to create an account and provide accurate, current, and complete information.",
        "You are responsible for safeguarding the password and for maintaining the security of your account.",
        "You agree not to disclose your password to any third party and to take sole responsibility for activities under your account.",
        "You must notify us immediately of any unauthorized use of your account or any other breach of security."
      ]
    },
    {
      icon: Shield,
      title: "Acceptable Use Policy",
      gradient: "from-indigo-500 to-purple-500",
      content: [
        "You agree not to use our services for any unlawful or prohibited activities.",
        "You may not attempt to gain unauthorized access to any portion of our services or any other systems or networks.",
        "You agree not to interfere with or disrupt our services or servers or networks connected to our services.",
        "You may not use our services to transmit any harmful, threatening, abusive, or defamatory content."
      ]
    },
    {
      icon: Lock,
      title: "Intellectual Property Rights",
      gradient: "from-orange-500 to-red-500",
      content: [
        "All content, features, and functionality of our services are owned by Cloudacq and are protected by copyright, trademark, and other laws.",
        "You may not reproduce, distribute, modify, or create derivative works of our content without explicit written permission.",
        "You retain ownership of any content you provide to us, but grant us a license to use it for providing our services.",
        "We respect the intellectual property rights of others and expect our users to do the same."
      ]
    },
    {
      icon: CreditCard,
      title: "Payment and Billing",
      gradient: "from-pink-500 to-rose-500",
      content: [
        "Payment terms are specified in individual service agreements and project contracts.",
        "All fees are non-refundable unless explicitly stated otherwise in your service agreement.",
        "We reserve the right to change our pricing and billing methods at any time with reasonable notice.",
        "Late payments may result in suspension of services and may incur additional charges."
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      {/* Hero Section */}
      <section className="relative pt-32 md:pt-40 pb-32 md:pb-40 overflow-hidden min-h-screen flex items-center">
        {/* Floating Particles Background */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(50)].map((_, i) => (
            <FloatingParticle 
              key={i} 
              delay={i * 0.1} 
              size={i % 3 === 0 ? 'large' : i % 2 === 0 ? 'medium' : 'small'} 
            />
          ))}
        </div>

        {/* Animated Background Gradient */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-pink-500 to-orange-500 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}} />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full blur-3xl animate-pulse" style={{animationDelay: '4s'}} />
        </div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-block mb-6"
            >
              <span className="px-6 py-3 text-sm font-semibold bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-md border border-white/20 text-blue-200 rounded-full">
                📋 Legal Terms
              </span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl md:text-6xl font-bold mb-6"
            >
              <span className="bg-gradient-to-r from-white via-blue-200 to-white bg-clip-text text-transparent">
                Terms of
              </span>
              <br />
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Service
              </span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-6"
            >
              Please read these terms carefully before using our services. These terms govern your use of Cloudacq's services and establish our mutual rights and responsibilities.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-gray-400 mb-8"
            >
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </motion.p>

            {/* Key Points */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto"
            >
              {[
                { icon: FileText, label: 'Clear Terms' },
                { icon: Shield, label: 'Your Protection' },
                { icon: Scale, label: 'Fair Agreement' },
                { icon: BookOpen, label: 'Easy to Read' }
              ].map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <motion.div 
                    key={index} 
                    className="text-center p-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl hover:bg-white/15 transition-all duration-300"
                    whileHover={{ scale: 1.05, y: -5 }}
                  >
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center mx-auto mb-2">
                      <IconComponent className="w-5 h-5 text-white" />
                    </div>
                    <p className="text-gray-300 text-sm font-medium">{item.label}</p>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </div>
        
        {/* Animated Wave */}
        <WaveAnimation />
      </section>

      {/* Introduction Section */}
      <section className="py-32 md:py-40 relative">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto mb-20"
          >
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-12 relative overflow-hidden">
              {/* Background Effects */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-purple-600/10 to-pink-600/10 animate-pulse" />
              
              <div className="relative z-10">
                <div className="flex items-center mb-8">
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center mr-6">
                    <FileText className="w-8 h-8 text-white" />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-white via-blue-200 to-white bg-clip-text text-transparent">
                    Agreement to Terms
                  </h2>
                </div>
                
                <p className="text-lg text-gray-300 leading-relaxed">
                  These Terms of Service constitute a legally binding agreement made between you, whether personally or on behalf 
                  of an entity, and Cloudacq concerning your access to and use of our website and services. By accessing our website 
                  or using our services, you agree that you have read, understood, and agree to be bound by all of these Terms of Service. 
                  If you do not agree with all of these terms, then you are expressly prohibited from using our services.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Terms Sections */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {sections.map((section, index) => {
              const IconComponent = section.icon;
              return (
                <motion.div
                  key={section.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 hover:bg-white/15 transition-all duration-300 group relative overflow-hidden"
                >
                  {/* Background glow */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${section.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-2xl`} />
                  
                  {/* Content */}
                  <div className="relative z-10">
                    <div className="flex items-center mb-6">
                      <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${section.gradient} flex items-center justify-center mr-4 group-hover:scale-110 transition-all duration-300 shadow-lg`}>
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <div className="text-sm text-gray-400 mb-1">Section {index + 1}</div>
                        <h3 className="text-xl font-bold text-white group-hover:text-blue-200 transition-colors duration-300">
                          {section.title}
                        </h3>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      {section.content.map((paragraph, pIndex) => (
                        <div key={pIndex} className="flex items-start">
                          <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 mt-2 mr-3 flex-shrink-0" />
                          <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                            {paragraph}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-32 md:py-40 relative overflow-hidden">
        {/* Wave at the top */}
        <WaveAnimation position="top" inverted={true} />
        
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-800/50 via-purple-800/50 to-slate-800/50" />
        
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="inline-block mb-6"
            >
              <span className="px-6 py-3 text-sm font-semibold bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-md border border-white/20 text-purple-200 rounded-full">
                ⚖️ Legal Questions
              </span>
            </motion.div>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-3xl md:text-4xl font-bold mb-6"
            >
              <span className="bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-transparent">
                Questions About
              </span>
              <br />
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent">
                These Terms?
              </span>
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed mb-12"
            >
              If you have any questions about these Terms of Service, our business practices, or your dealings with our services, 
              please don't hesitate to contact us.
            </motion.p>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20 backdrop-blur-md border border-blue-500/30 rounded-3xl p-12 relative overflow-hidden">
              {/* Background Effects */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-purple-600/10 to-pink-600/10 animate-pulse" />
              
              <div className="relative z-10">
                <div className="flex items-center mb-8">
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center mr-6">
                    <Mail className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white">
                    Contact Our Legal Team
                  </h3>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {[
                    { icon: Mail, label: 'Email', value: 'legal@cloudacq.com', gradient: 'from-blue-500 to-cyan-500' },
                    { icon: Phone, label: 'Phone', value: '+91 (812) 244-1337', gradient: 'from-emerald-500 to-teal-500' },
                    { icon: MapPin, label: 'Address', value: '123 Business Ave, Suite 100, City, State 12345', gradient: 'from-purple-500 to-pink-500' }
                  ].map((contact, index) => {
                    const IconComponent = contact.icon;
                    return (
                      <motion.div 
                        key={contact.label}
                        className="text-center p-6 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl hover:bg-white/15 transition-all duration-300 group"
                        whileHover={{ scale: 1.05, y: -5 }}
                      >
                        <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${contact.gradient} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                          <IconComponent className="w-6 h-6 text-white" />
                        </div>
                        <h4 className="text-white font-semibold mb-2">{contact.label}</h4>
                        <p className="text-gray-300 text-sm leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                          {contact.value}
                        </p>
                      </motion.div>
                    );
                  })}
                </div>

                {/* Important Notice */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  className="mt-12 p-6 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border border-yellow-500/30 rounded-2xl"
                >
                  <div className="flex items-start">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-yellow-500 to-orange-500 flex items-center justify-center mr-4 flex-shrink-0">
                      <AlertTriangle className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">Important Notice</h4>
                      <p className="text-gray-300 leading-relaxed">
                        These terms may be updated from time to time. We will notify you of any material changes by posting 
                        the new Terms of Service on this page and updating the "Last updated" date.
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
        
        {/* Wave at the bottom */}
        <WaveAnimation />
      </section>

      {/* Scroll to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 z-50 p-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white rounded-full shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-6 h-6" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
};

export default TermsOfService;