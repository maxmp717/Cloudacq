import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { 
  Send, Mail, Phone, MapPin, MessageSquare, Calendar, AlertCircle,
  Globe, Zap, Star, Award, CheckCircle, Heart, Users, Clock,
  Shield, Sparkles, Copy, CheckCircle2, ExternalLink, Building2,
  Headphones, Coffee, Wifi
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
              <linearGradient id="contactWave1" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="rgba(59, 130, 246, 0.3)" />
                <stop offset="50%" stopColor="rgba(147, 51, 234, 0.3)" />
                <stop offset="100%" stopColor="rgba(236, 72, 153, 0.3)" />
              </linearGradient>
            </defs>
            <path d="M0,192 C400,100 800,200 1200,100 C1600,0 2000,100 2400,150 C2800,200 3200,100 3600,150 C4000,200 4000,200 4000,200 L0,200 Z" fill="url(#contactWave1)" />
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
              <linearGradient id="contactWave2" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="rgba(16, 185, 129, 0.4)" />
                <stop offset="50%" stopColor="rgba(59, 130, 246, 0.4)" />
                <stop offset="100%" stopColor="rgba(147, 51, 234, 0.4)" />
              </linearGradient>
            </defs>
            <path d="M0,160 C600,100 1200,190 1800,120 C2400,50 3000,120 3600,160 C4000,185 4000,200 4000,200 L0,200 Z" fill="url(#contactWave2)" />
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
              <linearGradient id="contactWave3" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="rgba(236, 72, 153, 0.6)" />
                <stop offset="50%" stopColor="rgba(251, 146, 60, 0.6)" />
                <stop offset="100%" stopColor="rgba(245, 101, 101, 0.6)" />
              </linearGradient>
            </defs>
            <path d="M0,140 C300,60 600,140 900,100 C1200,60 1500,100 1800,120 C2100,140 2400,120 2700,80 C3000,40 3300,80 3600,100 C3900,120 4000,100 4000,100 L4000,200 L0,200 Z" fill="url(#contactWave3)" />
          </svg>
        </motion.div>
      </div>
    </div>
  );
};

// Copy to Clipboard Hook
const useCopyToClipboard = () => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  return { copied, copyToClipboard };
};

const Contact = () => {
  const form = useRef(null);
  const { copied, copyToClipboard } = useCopyToClipboard();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    countryCode: '+1',
    service: '',
    message: '',
  });
  
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(null);
  const [hoveredContact, setHoveredContact] = useState(null);
  const [currentTime, setCurrentTime] = useState(new Date());

  // EmailJS configuration - Replace these with your actual values
  const EMAIL_SERVICE_ID = 'service_cx4fjzj'; // Replace with your EmailJS service ID
  const EMAIL_TEMPLATE_ID = 'template_yi5962m'; // Replace with your EmailJS template ID
  const EMAIL_PUBLIC_KEY = 'eNbWaF1jnp185iOjb'; // Replace with your EmailJS public key

  // Initialize EmailJS
  useEffect(() => {
    emailjs.init(EMAIL_PUBLIC_KEY);
  }, []);

  // Update current time every minute
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000);
    return () => clearInterval(timer);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)) {
      newErrors.email = 'Invalid email address';
    }
    
    if (!formData.service.trim()) {
      newErrors.service = 'Please select a service';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.length < 10) {
      newErrors.message = 'Message should be at least 10 characters long';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    setSubmitError(null);
    
    try {
      // Prepare template parameters for EmailJS
      const templateParams = {
        name: formData.name,
        email: formData.email,
        phone: formData.countryCode + ' ' + formData.phone,
        service: serviceOptions.find(s => s.value === formData.service)?.label || formData.service,
        message: formData.message,
        date: new Date().toLocaleString(), 
        to_name: 'CloudAcq Team', // Your name/company name
      };

      // Send email using EmailJS
      const result = await emailjs.send(
        EMAIL_SERVICE_ID,
        EMAIL_TEMPLATE_ID,
        templateParams,
        EMAIL_PUBLIC_KEY // <-- Add this 4th argument
      );

      console.log('Email sent successfully:', result);
      
      // Success - show success message
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        countryCode: '+1',
        service: '',
        message: '',
      });
      
    } catch (error) {
      console.error('EmailJS Error:', error);
      setSubmitError(
        error.text || 
        'Failed to send message. Please try again or contact us directly via email.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  // Format current time for different timezones
  const formatTime = (timezone) => {
    return new Intl.DateTimeFormat('en-US', {
      timeZone: timezone,
      hour: '2-digit',
      minute: '2-digit',
      hour12: true
    }).format(currentTime);
  };

  const contactMethods = [
    {
      icon: Mail,
      title: 'Email Us',
      content: 'cloudacq@gmail.com',
      description: 'We typically respond within 2 hours',
      href: 'mailto:cloudacq@gmail.com',
      linkText: 'Send email',
      copyable: true,
    },
    {
      icon: Phone,
      title: 'Call Us',
      content: '+91 (812) 244-1337',
      description: 'Mon-Fri from 9am to 6pm PST',
      href: 'tel:+918122441337',
      linkText: 'Call now',
      copyable: true,
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      content: 'Race course',
      description: 'Coimbatore, Tamilnadu 641005',
      href: 'https://maps.google.com/?q=Race course,Coimbatore,Tamil+Nadu+641005',
      linkText: 'Open in maps',
      copyable: false,
    },
  ];

  const businessHours = [
    { timezone: 'America/Los_Angeles', label: 'San Francisco', time: formatTime('America/Los_Angeles') },
    { timezone: 'America/New_York', label: 'New York', time: formatTime('America/New_York') },
    { timezone: 'Europe/London', label: 'London', time: formatTime('Europe/London') },
    { timezone: 'Asia/Tokyo', label: 'Tokyo', time: formatTime('Asia/Tokyo') },
  ];

  const countryCodes = [
    { code: '+1', country: 'US/CA', flag: '🇺🇸' },
    { code: '+44', country: 'UK', flag: '🇬🇧' },
    { code: '+91', country: 'IN', flag: '🇮🇳' },
    { code: '+86', country: 'CN', flag: '🇨🇳' },
    { code: '+81', country: 'JP', flag: '🇯🇵' },
    { code: '+49', country: 'DE', flag: '🇩🇪' },
    { code: '+33', country: 'FR', flag: '🇫🇷' },
    { code: '+39', country: 'IT', flag: '🇮🇹' },
    { code: '+34', country: 'ES', flag: '🇪🇸' },
    { code: '+61', country: 'AU', flag: '🇦🇺' },
    { code: '+55', country: 'BR', flag: '🇧🇷' },
    { code: '+7', country: 'RU', flag: '🇷🇺' },
    { code: '+82', country: 'KR', flag: '🇰🇷' },
    { code: '+31', country: 'NL', flag: '🇳🇱' },
    { code: '+46', country: 'SE', flag: '🇸🇪' },
    { code: '+47', country: 'NO', flag: '🇳🇴' },
    { code: '+41', country: 'CH', flag: '🇨🇭' },
    { code: '+43', country: 'AT', flag: '🇦🇹' },
    { code: '+32', country: 'BE', flag: '🇧🇪' },
    { code: '+45', country: 'DK', flag: '🇩🇰' },
  ];

  const serviceOptions = [
    { value: 'web-development', label: 'Web Development', emoji: '🌐' },
    { value: 'mobile-app-development', label: 'Mobile App Development', emoji: '📱' },
    { value: 'ui-ux-design', label: 'UI/UX Design', emoji: '🎨' },
    { value: 'cloud-solutions', label: 'Cloud Solutions', emoji: '☁️' },
    { value: 'analytics-insights', label: 'Analytics & Insights', emoji: '📊' },
    { value: 'ai-chatbot', label: 'AI Chatbot', emoji: '🤖' },
    { value: 'digital-transformation', label: 'Digital Transformation', emoji: '🚀' },
    { value: 'consultation', label: 'Consultation', emoji: '💡' },
    { value: 'other', label: 'Other', emoji: '💬' },
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
                💬 Let's Connect
              </span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl md:text-6xl font-bold mb-6"
            >
              <span className="bg-gradient-to-r from-white via-blue-200 to-white bg-clip-text text-transparent">
                Get in Touch
              </span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8"
            >
              Have a project in mind or want to learn more about our services? We'd love to hear from you and help transform your digital presence!
            </motion.p>

            {/* Quick Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto"
            >
              {[
                { icon: Clock, value: '< 2h', label: 'Response Time' },
                { icon: Users, value: '500+', label: 'Happy Clients' },
                { icon: Award, value: '99%', label: 'Success Rate' },
                { icon: Globe, value: '25+', label: 'Countries' }
              ].map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <motion.div 
                    key={index} 
                    className="text-center p-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl hover:bg-white/15 transition-all duration-300"
                    whileHover={{ scale: 1.05, y: -5 }}
                  >
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center mx-auto mb-2">
                      <IconComponent className="w-5 h-5 text-white" />
                    </div>
                    <div className="text-lg font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                      {stat.value}
                    </div>
                    <p className="text-gray-400 text-sm">{stat.label}</p>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </div>
        
        {/* Animated Wave */}
        <WaveAnimation />
      </section>

      {/* Main Contact Section */}
      <section className="py-32 md:py-40 relative min-h-screen">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-24 items-start">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                <span className="bg-gradient-to-r from-white via-blue-200 to-white bg-clip-text text-transparent">
                  Contact
                </span>
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  {" "}Information
                </span>
              </h2>
              
              <p className="text-gray-300 mb-8 text-lg leading-relaxed">
                Feel free to reach out to us using any of the contact methods below. Our team is available to assist you Monday through Friday, 9:00 AM to 6:00 PM PST.
              </p>
              
              {/* Combined Contact Information Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="p-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl hover:bg-white/15 transition-all duration-300 group relative overflow-hidden mb-4"
              >
                {/* Background gradient effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
                
                <div className="relative z-10">
                  <div className="space-y-6">
                    {contactMethods.map((contact, index) => {
                      const IconComponent = contact.icon;
                      const gradients = [
                        'from-blue-500 to-cyan-500',
                        'from-emerald-500 to-teal-500', 
                        'from-purple-500 to-pink-500'
                      ];
                      
                      return (
                        <div key={index} className="flex items-center p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-all duration-300 group/item">
                          {/* Icon */}
                          <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${gradients[index]} flex items-center justify-center mr-6 group-hover/item:scale-110 transition-all duration-300 shadow-lg flex-shrink-0`}>
                            <IconComponent className="w-4 h-4 text-white" />
                          </div>
                          
                          {/* Content */}
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-1">
                              <p className="text-gray-300 group-hover/item:text-gray-200 transition-colors duration-300 font-medium">
                                {contact.content}
                              </p>
                              {contact.copyable && (
                                <button
                                  onClick={() => copyToClipboard(contact.content)}
                                  className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-1 hover:bg-white/20 rounded"
                                  title="Copy to clipboard"
                                >
                                  {copied ? (
                                    <CheckCircle2 className="w-4 h-4 text-green-400" />
                                  ) : (
                                    <Copy className="w-4 h-4 text-gray-300" />
                                  )}
                                </button>
                              )}
                            </div>
                            
                            <p className="text-gray-400 group-hover/item:text-gray-300 transition-colors duration-300 text-sm">
                              {contact.description}
                            </p>
                          </div>
                          
                          {/* Action Link */}
                          <div className="ml-4 flex-shrink-0">
                            <a
                              href={contact.href}
                              target={contact.href.startsWith('http') ? '_blank' : undefined}
                              rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                              className="inline-flex items-center text-sm text-blue-400 hover:text-blue-300 transition-colors duration-300 opacity-0 group-hover/item:opacity-100 px-3 py-1 bg-blue-500/20 rounded-lg hover:bg-blue-500/30"
                            >
                              {contact.linkText}
                              <ExternalLink className="w-3 h-3 ml-1" />
                            </a>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
                
                {/* Shimmer effect */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{
                  background: `linear-gradient(45deg, transparent, rgba(255,255,255,0.1), transparent)`,
                  animation: 'shimmer 2s infinite'
                }} />
              </motion.div>
              
              {/* Urgent Assistance Card */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="bg-gradient-to-br from-orange-500/20 via-red-500/20 to-pink-500/20 backdrop-blur-md border border-orange-500/30 rounded-2xl p-6 relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-pink-500/10 animate-pulse" />
                
                <div className="relative z-10">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-orange-500 to-red-500 flex items-center justify-center mr-4">
                      <Zap className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white">Need urgent assistance?</h3>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center text-gray-300">
                      <MessageSquare className="w-5 h-5 mr-3 text-orange-400" />
                      <span>Start a live chat with our support team</span>
                    </div>
                    <div className="flex items-center text-gray-300">
                      <Calendar className="w-5 h-5 mr-3 text-orange-400" />
                      <span>Schedule a consultation call</span>
                    </div>
                    <div className="flex items-center text-gray-300">
                      <Headphones className="w-5 h-5 mr-3 text-orange-400" />
                      <span>24/7 emergency support available</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
            
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 md:p-12 relative overflow-hidden">
                {/* Background Effects */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-purple-600/10 to-pink-600/10 animate-pulse" />
                
                <div className="relative z-10">
                  <div className="flex items-center mb-8">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center mr-4">
                      <Send className="w-6 h-6 text-white" />
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-white via-blue-200 to-white bg-clip-text text-transparent">
                      Send Us a Message
                    </h2>
                  </div>
                  
                  <AnimatePresence mode="wait">
                    {isSubmitted ? (
                      <motion.div
                        key="success"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        className="text-center py-12"
                      >
                        <div className="w-20 h-20 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-6">
                          <CheckCircle className="w-10 h-10 text-white" />
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-4">Message Sent Successfully!</h3>
                        <p className="text-gray-300 mb-8 leading-relaxed">
                          Thank you for contacting us. We've received your message and will get back to you within 2 hours during business hours.
                        </p>
                        <button
                          onClick={() => setIsSubmitted(false)}
                          className="px-8 py-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white font-bold rounded-xl hover:scale-105 transition-transform duration-300 shadow-lg"
                        >
                          Send Another Message
                        </button>
                      </motion.div>
                    ) : (
                      <motion.form
                        key="form"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        ref={form}
                        onSubmit={handleSubmit}
                        className="space-y-6"
                      >
                        {submitError && (
                          <div className="p-4 bg-red-500/20 border border-red-500/30 rounded-xl text-red-300">
                            {submitError}
                          </div>
                        )}
                        
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                          <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                              Your Name *
                            </label>
                            <input
                              type="text"
                              id="name"
                              name="name"
                              value={formData.name}
                              onChange={handleChange}
                              className={`w-full px-4 py-3 bg-white/10 backdrop-blur-sm border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-white placeholder-gray-400 transition-all duration-300 ${
                                errors.name ? 'border-red-500' : 'border-white/30 hover:border-white/50'
                              }`}
                              placeholder="John Doe"
                            />
                            {errors.name && (
                              <p className="mt-2 text-sm text-red-400 flex items-center">
                                <AlertCircle size={14} className="mr-1" />
                                {errors.name}
                              </p>
                            )}
                          </div>
                          
                          <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                              Your Email *
                            </label>
                            <input
                              type="email"
                              id="email"
                              name="email"
                              value={formData.email}
                              onChange={handleChange}
                              className={`w-full px-4 py-3 bg-white/10 backdrop-blur-sm border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-white placeholder-gray-400 transition-all duration-300 ${
                                errors.email ? 'border-red-500' : 'border-white/30 hover:border-white/50'
                              }`}
                              placeholder="john@example.com"
                            />
                            {errors.email && (
                              <p className="mt-2 text-sm text-red-400 flex items-center">
                                <AlertCircle size={14} className="mr-1" />
                                {errors.email}
                              </p>
                            )}
                          </div>
                        </div>
                        
                        <div>
                          <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                            Phone Number
                          </label>
                          <div className="flex gap-2">
                            <select
                              name="countryCode"
                              value={formData.countryCode}
                              onChange={handleChange}
                              className="px-3 py-3 bg-white/10 backdrop-blur-sm border border-white/30 hover:border-white/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-white transition-all duration-300 min-w-[120px]"
                            >
                              {countryCodes.map((country) => (
                                <option key={country.code} value={country.code} className="bg-slate-800 text-white">
                                  {country.flag} {country.code} ({country.country})
                                </option>
                              ))}
                            </select>
                            <input
                              type="tel"
                              id="phone"
                              name="phone"
                              value={formData.phone}
                              onChange={handleChange}
                              className="flex-1 px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/30 hover:border-white/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-white placeholder-gray-400 transition-all duration-300"
                              placeholder="123-456-7890"
                            />
                          </div>
                        </div>
                        
                        <div>
                          <label htmlFor="service" className="block text-sm font-medium text-gray-300 mb-2">
                            Service Interested In *
                          </label>
                          <select
                            id="service"
                            name="service"
                            value={formData.service}
                            onChange={handleChange}
                            className={`w-full px-4 py-3 bg-white/10 backdrop-blur-sm border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-white transition-all duration-300 ${
                              errors.service ? 'border-red-500' : 'border-white/30 hover:border-white/50'
                            }`}
                          >
                            <option value="" className="bg-slate-800 text-white">Select a service</option>
                            {serviceOptions.map((service) => (
                              <option key={service.value} value={service.value} className="bg-slate-800 text-white">
                                {service.emoji} {service.label}
                              </option>
                            ))}
                          </select>
                          {errors.service && (
                            <p className="mt-2 text-sm text-red-400 flex items-center">
                              <AlertCircle size={14} className="mr-1" />
                              {errors.service}
                            </p>
                          )}
                        </div>
                        
                        <div>
                          <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                            Your Message *
                          </label>
                          <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            rows={5}
                            className={`w-full px-4 py-3 bg-white/10 backdrop-blur-sm border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-white placeholder-gray-400 transition-all duration-300 resize-none ${
                              errors.message ? 'border-red-500' : 'border-white/30 hover:border-white/50'
                            }`}
                            placeholder="Tell us about your project requirements, goals, and any specific details that would help us understand your needs better..."
                          ></textarea>
                          {errors.message && (
                            <p className="mt-2 text-sm text-red-400 flex items-center">
                              <AlertCircle size={14} className="mr-1" />
                              {errors.message}
                            </p>
                          )}
                        </div>
                        
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="w-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white font-bold py-4 px-8 rounded-xl hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-purple-500/25 flex items-center justify-center group relative overflow-hidden disabled:opacity-70 disabled:cursor-not-allowed"
                        >
                          {/* Animated background */}
                          <div className="absolute inset-0 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                          
                          {/* Content */}
                          <div className="relative z-10 flex items-center">
                            {isSubmitting ? (
                              <>
                                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-3"></div>
                                Sending...
                              </>
                            ) : (
                              <>
                                <Send className="mr-3 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                                Send Message
                                <Sparkles className="ml-2 w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                              </>
                            )}
                          </div>
                        </button>
                      </motion.form>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
      `}</style>
    </div>
  );
};

export default Contact;