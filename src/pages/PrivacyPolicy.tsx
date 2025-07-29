import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Lock, Eye, Users, Globe, FileText, AlertCircle, Mail, Phone, MapPin, CheckCircle, Star } from 'lucide-react';

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
              <linearGradient id="privacyWave1" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="rgba(59, 130, 246, 0.3)" />
                <stop offset="50%" stopColor="rgba(147, 51, 234, 0.3)" />
                <stop offset="100%" stopColor="rgba(236, 72, 153, 0.3)" />
              </linearGradient>
            </defs>
            <path d="M0,192 C400,100 800,200 1200,100 C1600,0 2000,100 2400,150 C2800,200 3200,100 3600,150 C4000,200 4000,200 4000,200 L0,200 Z" fill="url(#privacyWave1)" />
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
              <linearGradient id="privacyWave2" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="rgba(16, 185, 129, 0.4)" />
                <stop offset="50%" stopColor="rgba(59, 130, 246, 0.4)" />
                <stop offset="100%" stopColor="rgba(147, 51, 234, 0.4)" />
              </linearGradient>
            </defs>
            <path d="M0,160 C600,100 1200,190 1800,120 C2400,50 3000,120 3600,160 C4000,185 4000,200 4000,200 L0,200 Z" fill="url(#privacyWave2)" />
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
              <linearGradient id="privacyWave3" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="rgba(236, 72, 153, 0.6)" />
                <stop offset="50%" stopColor="rgba(251, 146, 60, 0.6)" />
                <stop offset="100%" stopColor="rgba(245, 101, 101, 0.6)" />
              </linearGradient>
            </defs>
            <path d="M0,140 C300,60 600,140 900,100 C1200,60 1500,100 1800,120 C2100,140 2400,120 2700,80 C3000,40 3300,80 3600,100 C3900,120 4000,100 4000,100 L4000,200 L0,200 Z" fill="url(#privacyWave3)" />
          </svg>
        </motion.div>
      </div>
    </div>
  );
};

const PrivacyPolicy = () => {
  const sections = [
    {
      icon: Eye,
      title: "Information We Collect",
      gradient: "from-blue-500 to-cyan-500",
      content: [
        "We collect information you provide directly to us, such as when you create an account, contact us, or use our services.",
        "Personal information may include your name, email address, phone number, company information, and project details.",
        "We automatically collect certain information when you visit our website, including your IP address, browser type, and usage patterns."
      ]
    },
    {
      icon: Globe,
      title: "How We Use Your Information",
      gradient: "from-emerald-500 to-teal-500",
      content: [
        "To provide, maintain, and improve our services and communicate with you about your projects.",
        "To send you updates, newsletters, and marketing communications (with your consent).",
        "To analyze usage patterns and improve our website and services.",
        "To comply with legal obligations and protect our rights and interests."
      ]
    },
    {
      icon: Users,
      title: "Information Sharing",
      gradient: "from-purple-500 to-pink-500",
      content: [
        "We do not sell, trade, or rent your personal information to third parties.",
        "We may share information with trusted service providers who assist us in operating our business.",
        "We may disclose information when required by law or to protect our rights and safety.",
        "Business transfers: Information may be transferred if we are involved in a merger or acquisition."
      ]
    },
    {
      icon: Lock,
      title: "Data Security",
      gradient: "from-orange-500 to-red-500",
      content: [
        "We implement appropriate technical and organizational measures to protect your personal information.",
        "We use encryption, secure servers, and access controls to safeguard your data.",
        "Regular security assessments and updates are performed to maintain data protection standards.",
        "However, no method of transmission over the internet is 100% secure."
      ]
    },
    {
      icon: CheckCircle,
      title: "Your Rights",
      gradient: "from-indigo-500 to-purple-500",
      content: [
        "You have the right to access, update, or delete your personal information.",
        "You can opt-out of marketing communications at any time.",
        "You may request a copy of the personal information we hold about you.",
        "If you have concerns about our privacy practices, please contact us."
      ]
    },
    {
      icon: Globe,
      title: "Cookies and Tracking",
      gradient: "from-pink-500 to-rose-500",
      content: [
        "We use cookies and similar technologies to enhance your browsing experience.",
        "Essential cookies are necessary for website functionality and cannot be disabled.",
        "Analytics cookies help us understand how visitors interact with our website.",
        "You can control cookie preferences through your browser settings."
      ]
    },
    {
      icon: FileText,
      title: "Third-Party Services",
      gradient: "from-cyan-500 to-blue-500",
      content: [
        "Our website may contain links to third-party websites or services.",
        "This privacy policy does not apply to third-party websites or services.",
        "We encourage you to review the privacy policies of any third-party services you use.",
        "We are not responsible for the privacy practices of third-party websites."
      ]
    },
    {
      icon: AlertCircle,
      title: "Children's Privacy",
      gradient: "from-yellow-500 to-orange-500",
      content: [
        "Our services are not intended for children under the age of 13.",
        "We do not knowingly collect personal information from children under 13.",
        "If we become aware of such collection, we will take steps to delete the information.",
        "Parents or guardians may contact us if they believe we have collected information from their child."
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
                🔒 Privacy First
              </span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl md:text-6xl font-bold mb-6"
            >
              <span className="bg-gradient-to-r from-white via-blue-200 to-white bg-clip-text text-transparent">
                Privacy
              </span>
              <br />
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Policy
              </span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-6"
            >
              Your privacy is important to us. This policy explains how we collect, use, and protect your information with the highest standards of security and transparency.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-gray-400 mb-8"
            >
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </motion.p>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto"
            >
              {[
                { icon: Shield, label: 'GDPR Compliant' },
                { icon: Lock, label: 'End-to-End Encrypted' },
                { icon: Eye, label: 'Full Transparency' },
                { icon: CheckCircle, label: 'Your Data Rights' }
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
                    <Shield className="w-8 h-8 text-white" />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-white via-blue-200 to-white bg-clip-text text-transparent">
                    Our Commitment to Privacy
                  </h2>
                </div>
                
                <p className="text-lg text-gray-300 leading-relaxed">
                  At Cloudacq, we are committed to protecting your privacy and ensuring the security of your personal information. 
                  This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our 
                  website or use our services. Please read this privacy policy carefully to understand our practices regarding 
                  your personal data and how we will treat it.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Privacy Policy Sections */}
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
                      <h3 className="text-xl font-bold text-white group-hover:text-blue-200 transition-colors duration-300">
                        {section.title}
                      </h3>
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
                📞 Get in Touch
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
                Your Privacy?
              </span>
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed mb-12"
            >
              If you have any questions about this Privacy Policy, our privacy practices, or your dealings with our website, 
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
                    Contact Our Privacy Team
                  </h3>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {[
                    { icon: Mail, label: 'Email', value: 'privacy@cloudacq.com', gradient: 'from-blue-500 to-cyan-500' },
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
              </div>
            </div>
          </motion.div>
        </div>
        
        {/* Wave at the bottom */}
        <WaveAnimation />
      </section>
    </div>
  );
};

export default PrivacyPolicy;