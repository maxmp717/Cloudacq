import React from 'react';
import { motion } from 'framer-motion';
import { 
  Zap, Shield, Users, Clock, TrendingUp, Award, Globe, 
  Target, Lightbulb, HeartHandshake, CheckCircle, Star
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

const WhyChooseUsPage = () => {
  const mainReasons = [
    {
      id: 1,
      icon: Zap,
      title: 'Lightning Fast Development',
    //   description: 'We use modern frameworks and agile methodologies to deliver projects faster without compromising quality. Our streamlined processes ensure rapid deployment.',
      color: 'from-yellow-400 to-orange-500',
      stats: '3x Faster',
      features: ['Agile Development', 'Modern Tech Stack', 'Quick Turnaround', 'Efficient Workflows']
    },
    {
      id: 2,
      icon: Shield,
      title: 'Enterprise-Grade Security',
    //   description: 'Your data and applications are protected with industry-leading security practices, regular audits, and compliance with international standards.',
      color: 'from-green-400 to-emerald-500',
      stats: '99.9% Secure',
      features: ['SSL Encryption', 'Regular Audits', 'GDPR Compliant', 'Data Protection']
    },
    {
      id: 3,
      icon: Users,
      title: 'Expert Team',
    //   description: 'Our certified developers and designers have years of experience building solutions for businesses worldwide across various industries.',
      color: 'from-blue-400 to-indigo-500',
      stats: '5+ Years Exp',
      features: ['Certified Experts', 'Industry Experience', 'Continuous Learning', 'Best Practices']
    },
    {
      id: 4,
      icon: Clock,
      title: '24/7 Support',
    //   description: 'Round-the-clock technical support and maintenance to keep your applications running smoothly with guaranteed response times.',
      color: 'from-purple-400 to-pink-500',
      stats: '24/7 Available',
      features: ['Live Support', 'Emergency Response', 'Proactive Monitoring', 'Regular Updates']
    }
  ];

  const additionalBenefits = [
    {
      icon: Target,
      title: 'Goal-Oriented Approach',
      description: 'We focus on delivering solutions that align with your business objectives and drive measurable results.',
      color: 'from-red-400 to-rose-500'
    },
    {
      icon: Lightbulb,
      title: 'Innovation-Driven',
      description: 'We stay ahead of technology trends and implement cutting-edge solutions for competitive advantage.',
      color: 'from-cyan-400 to-teal-500'
    },
    {
      icon: HeartHandshake,
      title: 'Client Partnership',
      description: 'We build long-term relationships and act as your trusted technology partner, not just a vendor.',
      color: 'from-violet-400 to-purple-500'
    },
    {
      icon: Award,
      title: 'Proven Track Record',
      description: 'Our portfolio showcases successful projects across various industries with measurable business impact.',
      color: 'from-emerald-400 to-green-500'
    }
  ];

  const testimonialStats = [
    { number: '500+', label: 'Projects Delivered', description: 'Successfully completed projects' },
    { number: '98%', label: 'Client Satisfaction', description: 'Happy clients who recommend us' },
    { number: '150+', label: 'Global Clients', description: 'Businesses served worldwide' },
    { number: '24/7', label: 'Support Available', description: 'Round-the-clock assistance' }
  ];

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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="relative bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 min-h-screen overflow-hidden">
      {/* Floating Particles Background */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <FloatingParticle key={i} delay={i * 0.3} />
        ))}
      </div>

      {/* Animated Background Gradient */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-pink-500 to-orange-500 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full blur-3xl animate-pulse" style={{animationDelay: '4s'}} />
      </div>

      <div className="max-w-7xl mx-auto px-4 py-20 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-block mb-6"
          >
            <span className="px-6 py-3 text-sm font-semibold bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-md border border-white/20 text-blue-200 rounded-full">
              🌟 Why Choose Cloudacq
            </span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-3xl md:text-5xl font-bold mb-8"
          >
            <span className="bg-gradient-to-r from-white via-blue-200 to-white bg-clip-text text-transparent">
              Your Success Is
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Our Priority
            </span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl md:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
          >
            We're not just developers - we're your technology partners committed to delivering exceptional results that drive your business forward
          </motion.p>
        </div>

        {/* Main Reasons Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
        >
          {mainReasons.map((reason) => {
            const IconComponent = reason.icon;
            
            return (
              <motion.div
                key={reason.id}
                variants={itemVariants}
                className="group"
              >
                <div className="relative h-full">
                  <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 h-full group-hover:bg-white/15 transition-all duration-500 group-hover:scale-105 overflow-hidden">
                    {/* Card Glow Effect */}
                    <div className={`absolute inset-0 bg-gradient-to-r ${reason.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-xl`} />
                    
                    <div className="relative z-10">
                      <div className="flex items-center justify-between mb-6">
                        <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-r ${reason.color} shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300`}>
                          <IconComponent size={32} className="text-white" />
                        </div>
                        
                        <div className="bg-white/10 backdrop-blur-sm border border-white/20 px-3 py-1 rounded-full">
                          <span className="text-white font-bold text-sm">{reason.stats}</span>
                        </div>
                      </div>

                      <h3 className={`text-2xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r ${reason.color} transition-all duration-300`}>
                        {reason.title}
                      </h3>

                      <p className="text-gray-300 leading-relaxed mb-6 group-hover:text-gray-200 transition-colors duration-300">
                        {reason.description}
                      </p>

                      <div className={`mt-6 h-1 w-0 group-hover:w-full bg-gradient-to-r ${reason.color} rounded-full transition-all duration-500`}></div>
                    </div>

                    {/* Shimmer Effect */}
                    <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{
                      background: 'linear-gradient(45deg, transparent, rgba(255,255,255,0.1), transparent)',
                      animation: 'shimmer 2s infinite'
                    }} />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Additional Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-2"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-white via-blue-200 to-white bg-clip-text text-transparent">
                Additional
              </span>
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                {" "}Benefits
              </span>
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Beyond our core strengths, here's what makes us truly exceptional
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalBenefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                  className="group"
                >
                  <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 h-full group-hover:bg-white/15 transition-all duration-300 group-hover:scale-105">
                    <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-r ${benefit.color} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent size={24} className="text-white" />
                    </div>
                    
                    <h4 className="text-lg font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 transition-all duration-300" style={{backgroundImage: `linear-gradient(to right, ${benefit.color.split(' ').join(', ')})`}}>
                      {benefit.title}
                    </h4>
                    
                    <p className="text-gray-300 text-sm leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                      {benefit.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Stats Section */}
        {/* <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mb-20"
        >
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 md:p-12 relative overflow-hidden">
           
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse" />
            
            <div className="relative z-10">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  <span className="bg-gradient-to-r from-white via-blue-200 to-white bg-clip-text text-transparent">
                    Our Track
                  </span>
                  <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                    {" "}Record
                  </span>
                </h2>
                <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                  Numbers that speak for our commitment to excellence
                </p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {testimonialStats.map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                    className="text-center p-6 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300"
                  >
                    <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2">
                      {stat.number}
                    </div>
                    <h4 className="text-white font-semibold mb-1">{stat.label}</h4>
                    <p className="text-gray-400 text-xs">{stat.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div> */}

        {/* Call to Action */}
        {/* <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-gray-900/50 to-gray-800/50 backdrop-blur-md border border-white/20 rounded-3xl p-8 md:p-12 relative overflow-hidden">
            <div className="relative z-10">
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 1.2 }}
                className="mb-6"
              >
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 mb-6">
                  <TrendingUp size={36} className="text-white" />
                </div>
              </motion.div>

              <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Experience the{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                  Cloudacq Difference?
                </span>
              </h3>
              
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Join hundreds of satisfied clients who have transformed their businesses with our expert solutions.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.a
                  href="/contact"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Start Your Project
                  <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </motion.a>

                <motion.a
                  href="/portfolio"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center px-8 py-4 bg-transparent border-2 border-white/30 text-white font-semibold rounded-full hover:bg-white/10 hover:border-white/60 transition-all duration-300 backdrop-blur-sm"
                >
                  View Our Work
                </motion.a>
              </div>
            </div>
          </div>
        </motion.div> */}
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

export default WhyChooseUsPage;