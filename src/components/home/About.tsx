import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  CheckCircle, Users, Award, Target, Zap, Shield, 
  Star, TrendingUp, Clock, Globe, ArrowRight, Sparkles
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

// Animated Counter Component
const AnimatedCounter = ({ value, label, icon: Icon, gradient, delay }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    if (isVisible) {
      const target = parseInt(value.replace(/[^0-9]/g, ''));
      const increment = target / 50;
      let current = 0;
      
      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          setCount(target);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, 30);
      
      return () => clearInterval(timer);
    }
  }, [isVisible, value]);
  
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      onViewportEnter={() => setIsVisible(true)}
      className="relative p-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl hover:bg-white/15 transition-all duration-500 group hover:scale-105 hover:-translate-y-2"
    >
      <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full animate-ping opacity-75"></div>
      
      <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${gradient} flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300`}>
        <Icon className="w-6 h-6 text-white" />
      </div>
      
      <div className={`text-2xl font-bold mb-2 bg-gradient-to-r ${gradient} bg-clip-text text-transparent`}>
        {value.includes('%') ? `${count}%` : `${count}${value.includes('+') ? '+' : ''}`}
      </div>
      
      <p className="text-gray-300 text-sm">{label}</p>
    </motion.div>
  );
};

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: [0.165, 0.84, 0.44, 1] }
    }
  };

  const stats = [
    { 
      value: '98%', 
      label: 'Client Satisfaction', 
      icon: Star,
      gradient: 'from-yellow-500 to-orange-500'
    },
    { 
      value: '500+', 
      label: 'Projects Delivered', 
      icon: TrendingUp,
      gradient: 'from-green-500 to-emerald-500'
    },
    { 
      value: '85+', 
      label: 'Industry Partners', 
      icon: Users,
      gradient: 'from-blue-500 to-cyan-500'
    },
    { 
      value: '12+', 
      label: 'Years Experience', 
      icon: Clock,
      gradient: 'from-purple-500 to-pink-500'
    },
  ];

  const achievements = [
    'User-centered approach',
    'Technical excellence', 
    'Transparent communication',
    'Results-driven solutions',
    'Long-term partnerships',
    'Continuous innovation'
  ];

  return (
    <div className="relative bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20 overflow-hidden">
      {/* Floating Particles Background */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <FloatingParticle key={i} delay={i * 0.3} />
        ))}
      </div>

      {/* Animated Background Gradient */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-gradient-to-r from-pink-500 to-orange-500 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}} />
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* About Image Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: -50 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.8 }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative">
              {/* Floating Glow Effects */}
              <div className="absolute -top-10 -left-10 w-32 h-32 bg-gradient-to-r from-blue-500/30 to-purple-500/30 rounded-full blur-2xl animate-pulse"></div>
              <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-gradient-to-r from-pink-500/30 to-orange-500/30 rounded-full blur-2xl animate-pulse" style={{animationDelay: '1s'}}></div>
              
              {/* Main Image Container */}
              <div className="relative z-10">
                <div className="bg-white/20 backdrop-blur-md border border-white/30 rounded-3xl overflow-hidden shadow-2xl hover:scale-105 transition-transform duration-500 group">
                  <div className="relative">
                    <img
                      src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                      alt="Team collaborating in modern office"
                      className="w-full h-auto object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    
                    {/* Image Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-purple-900/20 via-transparent to-blue-900/20" />
                  </div>
                </div>
              </div>
              
              {/* Floating Achievement Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20, rotate: -5 }}
                whileInView={{ opacity: 1, y: 0, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="absolute -top-6 -right-6 bg-gradient-to-r from-emerald-500 to-teal-500 p-4 rounded-2xl shadow-lg z-20 hover:scale-110 transition-transform duration-300"
              >
                <div className="flex items-center space-x-2">
                  <Award className="w-6 h-6 text-white" />
                  <div>
                    <p className="text-white font-bold text-sm">Award Winning</p>
                    <p className="text-emerald-100 text-xs">Since 2013</p>
                  </div>
                </div>
              </motion.div>

              {/* Floating Innovation Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20, rotate: 5 }}
                whileInView={{ opacity: 1, y: 0, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="absolute -bottom-6 -left-6 bg-gradient-to-r from-blue-500 to-purple-500 p-4 rounded-2xl shadow-lg z-20 hover:scale-110 transition-transform duration-300"
              >
                <div className="flex items-center space-x-2">
                  <Sparkles className="w-6 h-6 text-white" />
                  <div>
                    <p className="text-white font-bold text-sm">Innovation Leader</p>
                    <p className="text-blue-100 text-xs">Industry Recognized</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
          
          {/* About Content */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={containerVariants}
            className="order-1 lg:order-2"
          >
            {/* Badge */}
            <motion.div
              variants={itemVariants}
              className="inline-block mb-6"
            >
              <span className="px-6 py-3 text-sm font-semibold bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-md border border-white/20 text-blue-200 rounded-full">
                ✨ About Cloudacq
              </span>
            </motion.div>
            
            {/* Main Heading */}
            <motion.h2
              variants={itemVariants}
              className="text-4xl md:text-5xl font-bold leading-tight mb-8"
            >
              <span className="bg-gradient-to-r from-white via-blue-200 to-white bg-clip-text text-transparent">
                Driving Digital Excellence
              </span>
              <br />
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Since 2013
              </span>
            </motion.h2>
            
            {/* Description Paragraphs */}
            <motion.p
              variants={itemVariants}
              className="text-lg text-gray-300 mb-6 leading-relaxed"
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 font-semibold">Cloudacq</span> is a leading digital solutions company that specializes in creating exceptional web experiences. With over a decade of expertise, we've helped businesses of all sizes transform their digital presence and achieve their goals.
            </motion.p>
            
            <motion.p
              variants={itemVariants}
              className="text-lg text-gray-300 mb-8 leading-relaxed"
            >
              Our team of experienced developers, designers, and strategists work together to deliver <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-orange-400 font-semibold">innovative solutions</span> that drive real business results. We're passionate about technology and committed to helping our clients succeed in the digital landscape.
            </motion.p>
            
            {/* Achievements Grid */}
            {/* <motion.div variants={itemVariants} className="mb-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {achievements.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                    className="flex items-center p-3 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 hover:bg-white/15 transition-all duration-300 group"
                  >
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-emerald-500 to-teal-500 flex items-center justify-center mr-3 group-hover:scale-110 transition-transform duration-300">
                      <CheckCircle className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-gray-300 group-hover:text-white transition-colors duration-300">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div> */}
            
            {/* CTA Button */}
            <motion.div variants={itemVariants}>
              <button className="group relative px-8 py-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white font-bold rounded-2xl text-lg overflow-hidden transform hover:scale-110 transition-all duration-500 shadow-2xl hover:shadow-purple-500/50">
                <span className="relative z-10 flex items-center justify-center">
                  🌟 Learn More About Us
                  <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse" />
              </button>
            </motion.div>
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-20 pt-16 border-t border-white/20"
        >
          <div className="text-center mb-12">
            <h3 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white via-blue-200 to-white bg-clip-text text-transparent">
              Trusted by Businesses<span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"> Worldwide</span>
            </h3>
            <p className="text-md text-gray-300 max-w-2xl mx-auto">
              Numbers that reflect our commitment to excellence and client success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <AnimatedCounter
                key={index}
                value={stat.value}
                label={stat.label}
                icon={stat.icon}
                gradient={stat.gradient}
                delay={index * 0.2}
              />
            ))}
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
      `}</style>
    </div>
  );
};

export default About;