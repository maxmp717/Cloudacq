import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowRight, Zap, Shield, Users, Star, Code, 
  Smartphone, Palette, Database, Globe, CheckCircle,
  TrendingUp, Award, Clock
} from 'lucide-react';

// Wave Animation Component
const WaveAnimation = ({ className = "", position = "bottom", inverted = false }) => {
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
              <linearGradient id="wave1" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="rgba(59, 130, 246, 0.3)" />
                <stop offset="50%" stopColor="rgba(147, 51, 234, 0.3)" />
                <stop offset="100%" stopColor="rgba(236, 72, 153, 0.3)" />
              </linearGradient>
            </defs>
            <path d="M0,192 C400,100 800,200 1200,100 C1600,0 2000,100 2400,150 C2800,200 3200,100 3600,150 C4000,200 4000,200 4000,200 L0,200 Z" fill="url(#wave1)" />
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
              <linearGradient id="wave2" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="rgba(16, 185, 129, 0.4)" />
                <stop offset="50%" stopColor="rgba(59, 130, 246, 0.4)" />
                <stop offset="100%" stopColor="rgba(147, 51, 234, 0.4)" />
              </linearGradient>
            </defs>
            <path d="M0,160 C600,100 1200,190 1800,120 C2400,50 3000,120 3600,160 C4000,185 4000,200 4000,200 L0,200 Z" fill="url(#wave2)" />
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
              <linearGradient id="wave3" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="rgba(236, 72, 153, 0.6)" />
                <stop offset="50%" stopColor="rgba(251, 146, 60, 0.6)" />
                <stop offset="100%" stopColor="rgba(245, 101, 101, 0.6)" />
              </linearGradient>
            </defs>
            <path d="M0,140 C300,60 600,140 900,100 C1200,60 1500,100 1800,120 C2100,140 2400,120 2700,80 C3000,40 3300,80 3600,100 C3900,120 4000,100 4000,100 L4000,200 L0,200 Z" fill="url(#wave3)" />
          </svg>
        </motion.div>
      </div>
    </div>
  );
};

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

// Floating Badge Component
const FloatingBadge = ({ children, className, delay = 0 }) => (
  <motion.div
    initial={{ y: 0, opacity: 0 }}
    animate={{ y: [-10, 10, -10], opacity: 1 }}
    transition={{
      y: {
        repeat: Infinity,
        duration: 3 + delay,
        ease: "easeInOut"
      },
      opacity: { duration: 0.5, delay: delay * 0.5 }
    }}
    className={`absolute bg-white/20 backdrop-blur-md border border-white/30 rounded-xl p-4 shadow-lg ${className}`}
  >
    {children}
  </motion.div>
);

const Hero = () => {
  const [currentStat, setCurrentStat] = useState(0);
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: [0.165, 0.84, 0.44, 1] },
    },
  };

  const floatingIcons = [
    { Icon: Code, gradient: 'from-blue-400 to-cyan-400', position: 'top-10 left-10' },
    { Icon: Smartphone, gradient: 'from-purple-400 to-pink-400', position: 'top-20 right-16' },
    { Icon: Palette, gradient: 'from-pink-400 to-rose-400', position: 'bottom-32 left-8' },
    { Icon: Database, gradient: 'from-emerald-400 to-teal-400', position: 'bottom-16 right-12' },
  ];

  const stats = [
    { value: '500+', label: 'Projects Completed', icon: TrendingUp, gradient: 'from-blue-500 to-cyan-500' },
    { value: '98%', label: 'Client Satisfaction', icon: Award, gradient: 'from-emerald-500 to-teal-500' },
    { value: '12+', label: 'Years Experience', icon: Clock, gradient: 'from-purple-500 to-pink-500' }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStat((prev) => (prev + 1) % stats.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20 md:pt-24 pb-20 md:pb-32 relative overflow-hidden">
      {/* Floating Particles Background */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(40)].map((_, i) => (
          <FloatingParticle key={i} delay={i * 0.2} />
        ))}
      </div>

      {/* Animated Background Gradient */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-r from-pink-500 to-yellow-500 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full blur-3xl animate-pulse" style={{animationDelay: '4s'}} />
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Text Content */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="order-2 lg:order-1 text-center lg:text-left"
          >
            {/* Badge */}
            <motion.div
              variants={itemVariants}
              className="inline-block mb-6"
            >
              <span className="px-6 py-3 text-sm font-semibold bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-md border border-white/20 text-blue-200 rounded-full">
                ✨ Tech-Forward Web Solutions
              </span>
            </motion.div>
            
            {/* Main Heading */}
            <motion.h1
              variants={itemVariants}
              className="text-4xl md:text-5xl lg:text-7xl font-bold leading-tight mb-8"
            >
              <span className="bg-gradient-to-r from-white via-blue-200 to-white bg-clip-text text-transparent">
                Transform Your
              </span>
              <br />
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent animate-pulse">
                Digital Experience
              </span>
            </motion.h1>
            
            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="text-xl md:text-xl text-gray-300 mb-10 max-w-3xl leading-relaxed"
            >
              We build <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 font-semibold">stunning</span>, high-performance websites and applications that drive business growth and deliver exceptional user experiences.
            </motion.p>
            
            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start mb-12"
            >
              <button className="group/btn relative px-10 py-5 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white font-bold rounded-2xl text-lg overflow-hidden transform hover:scale-110 transition-all duration-500 shadow-2xl hover:shadow-purple-500/50">
                <span className="relative z-10 flex items-center justify-center">
                   Get Started
                  <ArrowRight className="ml-3 w-6 h-6 group-hover/btn:translate-x-2 transition-transform duration-300" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500" />
                <div className="absolute inset-0 bg-white/20 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500 animate-pulse" />
              </button>
              
              <button className="group/btn relative px-10 py-5 border-2 border-white/30 text-white hover:bg-white/10 transition-all duration-500 rounded-2xl text-lg font-semibold backdrop-blur-sm hover:border-white/60 hover:scale-110 overflow-hidden">
                <span className="relative z-10 flex items-center justify-center">
                   Explore All Services
                  {/* <Globe className="ml-3 w-6 h-6 group-hover/btn:rotate-12 transition-transform duration-300" /> */}
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500" />
              </button>
            </motion.div>
            
            {/* Animated Stats */}
            {/* <motion.div
              variants={itemVariants}
              className="grid grid-cols-3 gap-6 max-w-md mx-auto lg:mx-0"
            >
              {stats.map((stat, index) => {
                const StatIcon = stat.icon;
                const isActive = currentStat === index;
                
                return (
                  <div
                    key={index}
                    className={`text-center p-4 rounded-xl transition-all duration-500 ${
                      isActive 
                        ? 'bg-white/20 backdrop-blur-md border border-white/30 scale-105' 
                        : 'bg-white/10 backdrop-blur-sm border border-white/20'
                    }`}
                  >
                    <div className={`w-10 h-10 rounded-lg bg-gradient-to-r ${stat.gradient} flex items-center justify-center mx-auto mb-2 ${
                      isActive ? 'scale-110 animate-pulse' : ''
                    }`}>
                      <StatIcon className="w-5 h-5 text-white" />
                    </div>
                    <p className={`text-2xl font-bold mb-1 transition-all duration-500 ${
                      isActive 
                        ? `bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent` 
                        : 'text-white'
                    }`}>
                      {stat.value}
                    </p>
                    <p className="text-xs text-gray-400">{stat.label}</p>
                  </div>
                );
              })}
            </motion.div> */}
          </motion.div>
          
          {/* Hero Image Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotateY: 20 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="order-1 lg:order-2 relative"
          >
            <div className="relative">
              {/* Floating Background Icons */}
              {floatingIcons.map(({ Icon, gradient, position }, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1 + index * 0.2, duration: 0.5 }}
                  className={`absolute ${position} hidden lg:block`}
                >
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${gradient} p-3 backdrop-blur-sm shadow-lg animate-pulse hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-full h-full text-white" />
                  </div>
                </motion.div>
              ))}
              
              {/* Main Image Container */}
              <div className="relative flex justify-center z-10">
                <div className="bg-white/20 backdrop-blur-md border border-white/30 rounded-3xl shadow-2xl p-4 hover:scale-105 transition-transform duration-500">
                  <div className="relative overflow-hidden rounded-2xl">
                    <img
                      src="https://images.pexels.com/photos/3182811/pexels-photo-3182811.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                      alt="Tech team collaborating on a digital project"
                      className="rounded-2xl object-cover hover:scale-110 transition-transform duration-700"
                      style={{ width: '400px', height: '600px', maxWidth: '100%' }}
                    />
                    
                    {/* Image Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-purple-900/20 via-transparent to-blue-900/20 rounded-2xl" />
                  </div>
                </div>
              </div>
              
              {/* Floating Status Badges */}
              <FloatingBadge
                className="left-2 md:left-6 top-1/4 z-20"
                delay={0}
              >
                <div className="flex items-center space-x-3">
                  <div className="w-4 h-4 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full animate-pulse"></div>
                  <div>
                    <p className="text-white font-semibold text-sm">98% Uptime</p>
                    <p className="text-gray-300 text-xs">Always Online</p>
                  </div>
                </div>
              </FloatingBadge>
              
              <FloatingBadge
                className="-right-2 md:-right-4 bottom-1/4 z-20"
                delay={1}
              >
                <div className="flex items-center space-x-3">
                  <div className="w-4 h-4 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full animate-pulse"></div>
                  <div>
                    <p className="text-white font-semibold text-sm">Lightning Fast</p>
                    <p className="text-gray-300 text-xs">Optimized Performance</p>
                  </div>
                </div>
              </FloatingBadge>

              <FloatingBadge
                className="left-1/2 transform -translate-x-1/2 -top-4 z-20"
                delay={2}
              >
                <div className="flex items-center space-x-3">
                  <div className="w-4 h-4 bg-gradient-to-r from-pink-400 to-rose-400 rounded-full animate-pulse"></div>
                  <div>
                    <p className="text-white font-semibold text-sm">Award Winning</p>
                    <p className="text-gray-300 text-xs">Industry Recognition</p>
                  </div>
                </div>
              </FloatingBadge>

              {/* Glow Effects */}
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse" />
              <div className="absolute bottom-0 right-0 w-48 h-48 bg-gradient-to-r from-pink-500/20 to-orange-500/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}} />
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Animated Wave Divider */}
      <WaveAnimation />

      <style jsx>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
      `}</style>
    </section>
  );
};

export default Hero;