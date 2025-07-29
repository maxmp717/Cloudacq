import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ExternalLink, Calendar, Tag, Code, Globe, 
  Smartphone, Heart, ShoppingCart, GraduationCap,
  Plane, Utensils, Activity, Building
} from 'lucide-react';
import ScrollToTop from '../components/ui/ScrollToTop';

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

// Enhanced Wave Animation Component
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
            className="w-full h-full fill-blue-500/20"
            preserveAspectRatio="none"
          >
            <path d="M0,192 C400,100 800,200 1200,100 C1600,0 2000,100 2400,150 C2800,200 3200,100 3600,150 C4000,200 4000,200 4000,200 L0,200 Z" />
          </svg>
        </motion.div>

        <motion.div
          className="absolute bottom-0 left-0 w-[200%] h-full"
          variants={secondWaveVariants}
          animate="animate"
        >
          <svg
            viewBox="0 0 4000 170"
            className="w-full h-full fill-purple-500/30"
            preserveAspectRatio="none"
          >
            <path d="M0,160 C600,100 1200,190 1800,120 C2400,50 3000,120 3600,160 C4000,185 4000,200 4000,200 L0,200 Z" />
          </svg>
        </motion.div>

        <motion.div
          className="absolute bottom-0 left-0 w-[200%] h-full"
          variants={thirdWaveVariants}
          animate="animate"
        >
          <svg
            viewBox="0 0 4000 140"
            className="w-full h-full fill-slate-900"
            preserveAspectRatio="none"
          >
            <path d="M0,140 C300,60 600,140 900,100 C1200,60 1500,100 1800,120 C2100,140 2400,120 2700,80 C3000,40 3300,80 3600,100 C3900,120 4000,100 4000,100 L4000,200 L0,200 Z" />
          </svg>
        </motion.div>
      </div>
    </div>
  );
};

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const projects = [
    {
      id: 'ecommerce-platform',
      title: 'E-commerce Platform',
      description: 'A comprehensive online shopping platform with advanced filtering, search, and payment processing that revolutionized the client\'s sales process.',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      category: 'E-commerce',
      tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      client: 'FashionBoutique',
      date: '2024',
      gradient: 'from-purple-500 to-pink-500',
      icon: ShoppingCart,
      stats: { users: '50K+', revenue: '300%', performance: '99.9%' }
    },
    {
      id: 'fintech-app',
      title: 'FinTech Mobile App',
      description: 'A secure financial technology app for personal banking, investments, and financial planning with enterprise-grade security.',
      image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      category: 'Mobile App',
      tags: ['React Native', 'Firebase', 'Redux', 'Financial API'],
      client: 'WealthWise',
      date: '2024',
      gradient: 'from-blue-500 to-cyan-500',
      icon: Smartphone,
      stats: { users: '25K+', downloads: '100K+', rating: '4.9/5' }
    },
    {
      id: 'healthcare-portal',
      title: 'Healthcare Portal',
      description: 'A patient management system with appointment scheduling, medical records, and telehealth capabilities ensuring HIPAA compliance.',
      image: 'https://images.pexels.com/photos/7089401/pexels-photo-7089401.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      category: 'Healthcare',
      tags: ['Angular', 'Express', 'PostgreSQL', 'HIPAA Compliant'],
      client: 'MedTech Solutions',
      date: '2023',
      gradient: 'from-emerald-500 to-teal-500',
      icon: Heart,
      stats: { patients: '10K+', efficiency: '75%', satisfaction: '95%' }
    },
    {
      id: 'real-estate-platform',
      title: 'Real Estate Platform',
      description: 'A property listing and management platform with virtual tours and integrated CRM for enhanced property showcase.',
      image: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      category: 'Real Estate',
      tags: ['Vue.js', 'Laravel', 'MySQL', 'Google Maps API'],
      client: 'PropertyPro',
      date: '2023',
      gradient: 'from-orange-500 to-red-500',
      icon: Building,
      stats: { listings: '5K+', agents: '200+', sales: '180%' }
    },
    {
      id: 'education-platform',
      title: 'Education Learning Platform',
      description: 'An interactive e-learning platform with course management, assessments, and student tracking for modern education.',
      image: 'https://images.pexels.com/photos/3184317/pexels-photo-3184317.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      category: 'Education',
      tags: ['React', 'Firebase', 'Node.js', 'WebRTC'],
      client: 'EduLearn',
      date: '2023',
      gradient: 'from-indigo-500 to-purple-500',
      icon: GraduationCap,
      stats: { students: '15K+', courses: '500+', completion: '85%' }
    },
    {
      id: 'travel-booking',
      title: 'Travel Booking System',
      description: 'A comprehensive travel booking platform for flights, hotels, and experiences with personalized AI-powered recommendations.',
      image: 'https://images.pexels.com/photos/2007401/pexels-photo-2007401.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      category: 'Travel',
      tags: ['Next.js', 'GraphQL', 'MongoDB', 'Payment Gateway'],
      client: 'TravelEase',
      date: '2022',
      gradient: 'from-cyan-500 to-blue-500',
      icon: Plane,
      stats: { bookings: '30K+', countries: '50+', savings: '40%' }
    },
    {
      id: 'restaurant-ordering',
      title: 'Restaurant Ordering App',
      description: 'A mobile application for restaurant ordering, table reservations, and loyalty program management with real-time tracking.',
      image: 'https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      category: 'Food & Beverage',
      tags: ['React Native', 'Firebase', 'Node.js', 'Stripe'],
      client: 'Gourmet Group',
      date: '2022',
      gradient: 'from-yellow-500 to-orange-500',
      icon: Utensils,
      stats: { orders: '20K+', restaurants: '100+', growth: '250%' }
    },
    {
      id: 'fitness-tracker',
      title: 'Fitness Tracking Platform',
      description: 'A comprehensive fitness tracking application with workout plans, progress monitoring, and social features for health enthusiasts.',
      image: 'https://images.pexels.com/photos/1092878/pexels-photo-1092878.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      category: 'Health & Fitness',
      tags: ['React', 'MongoDB', 'Express', 'Web Bluetooth'],
      client: 'FitLife',
      date: '2022',
      gradient: 'from-green-500 to-emerald-500',
      icon: Activity,
      stats: { members: '12K+', workouts: '100K+', retention: '80%' }
    }
  ];

  const categories = [
    { name: 'All', icon: Globe, color: 'from-blue-500 to-cyan-500' },
    { name: 'E-commerce', icon: ShoppingCart, color: 'from-purple-500 to-pink-500' },
    { name: 'Mobile App', icon: Smartphone, color: 'from-blue-500 to-cyan-500' },
    { name: 'Healthcare', icon: Heart, color: 'from-emerald-500 to-teal-500' },
    { name: 'Real Estate', icon: Building, color: 'from-orange-500 to-red-500' },
    { name: 'Education', icon: GraduationCap, color: 'from-indigo-500 to-purple-500' },
    { name: 'Travel', icon: Plane, color: 'from-cyan-500 to-blue-500' },
    { name: 'Food & Beverage', icon: Utensils, color: 'from-yellow-500 to-orange-500' },
    { name: 'Health & Fitness', icon: Activity, color: 'from-green-500 to-emerald-500' }
  ];

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter(project => project.category === activeCategory);

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
    <>
      <Helmet>
        <title>Projects | Cloudacq - Innovative Digital Solutions Portfolio</title>
        <meta name="description" content="Explore our portfolio of successful client projects and digital solutions. From e-commerce platforms to mobile apps and enterprise solutions that drive business growth." />
        <meta name="keywords" content="web development projects, mobile app portfolio, digital solutions, client work, case studies" />
      </Helmet>

      <div className="relative bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 min-h-screen overflow-hidden">
        {/* Floating Particles Background */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(25)].map((_, i) => (
            <FloatingParticle key={i} delay={i * 0.3} />
          ))}
        </div>

        {/* Animated Background Gradients */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-pink-500 to-orange-500 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}} />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full blur-3xl animate-pulse" style={{animationDelay: '4s'}} />
        </div>

        {/* Hero Section */}
        <section className="relative pt-24 md:pt-32 pb-20 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-block mb-6"
              >
                <span className="px-6 py-3 text-sm font-semibold bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-md border border-white/20 text-blue-200 rounded-full">
                  🚀 Our Portfolio
                </span>
              </motion.div>
              
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-4xl md:text-6xl font-bold mb-8"
              >
                <span className="bg-gradient-to-r from-white via-blue-200 to-white bg-clip-text text-transparent">
                  Featured
                </span>
                <br />
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Projects
                </span>
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
              >
                Explore our portfolio of successful client projects and innovative digital solutions that transform businesses and drive growth
              </motion.p>
            </div>
          </div>
          
          <WaveAnimation />
        </section>

        {/* Projects Section */}
        <section className="py-20 relative">
          <div className="max-w-7xl mx-auto px-4 relative z-10">
            {/* Category Filter */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-16"
            >
             <div className="mb-16">
  <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
    <span className="bg-gradient-to-r from-white via-blue-200 to-white bg-clip-text text-transparent">
      Filter by Category
    </span>
  </h2>
  
  <div className="flex overflow-x-auto pb-4 -mx-4 px-4 scrollbar-hide">
    <div className="flex flex-nowrap gap-3">
      {categories.map((category) => {
        const IconComponent = category.icon;
        const isActive = activeCategory === category.name;
        
        return (
          <button
            key={category.name}
            onClick={() => setActiveCategory(category.name)}
            className={`inline-flex items-center px-6 py-3 rounded-full font-medium transition-all duration-300 flex-shrink-0 ${
              isActive
                ? `bg-gradient-to-r ${category.color} text-white shadow-lg scale-105`
                : 'bg-white/10 backdrop-blur-md border border-white/20 text-gray-300 hover:bg-white/20 hover:text-white hover:scale-105'
            }`}
          >
            <IconComponent className="w-4 h-4 mr-2" />
            {category.name}
            {isActive && (
              <span className="ml-2 bg-white/20 px-2 py-1 rounded-full text-xs">
                {category.name === 'All' ? projects.length : projects.filter(p => p.category === category.name).length}
              </span>
            )}
          </button>
        );
      })}
    </div>
  </div>
</div>
            </motion.div>

            {/* Projects Grid */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              <AnimatePresence mode="wait">
                {filteredProjects.map((project, index) => {
                  const IconComponent = project.icon;
                  
                  return (
                    <motion.div
                      key={project.id}
                      variants={itemVariants}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -30 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      layout
                      className="group"
                    >
                      <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl overflow-hidden h-full hover:bg-white/15 transition-all duration-500 hover:scale-105 hover:shadow-2xl relative">
                        {/* Card Glow Effect */}
                        <div className={`absolute inset-0 bg-gradient-to-r ${project.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-xl`} />
                        
                        <div className="relative z-10">
                          {/* Image Section */}
                          <div className="relative aspect-video overflow-hidden">
                            <img
                              src={project.image}
                              alt={project.title}
                              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            
                            {/* Image Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                            
                            {/* Category Badge */}
                            <div className="absolute top-4 left-4">
                              <span className={`inline-flex items-center px-3 py-1 text-xs font-semibold bg-gradient-to-r ${project.gradient} text-white rounded-full shadow-lg backdrop-blur-sm`}>
                                <IconComponent className="w-3 h-3 mr-1" />
                                {project.category}
                              </span>
                            </div>
                            
                            {/* Date Badge */}
                            <div className="absolute top-4 right-4">
                              <span className="inline-flex items-center px-3 py-1 text-xs font-medium bg-white/20 backdrop-blur-md border border-white/30 text-white rounded-full">
                                <Calendar className="w-3 h-3 mr-1" />
                                {project.date}
                              </span>
                            </div>

                            {/* Hover Overlay with Stats */}
                            <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                              <div className="text-center text-white p-4">
                                <div className="grid grid-cols-3 gap-4 text-sm">
                                  {Object.entries(project.stats).map(([key, value]) => (
                                    <div key={key} className="text-center">
                                      <div className="font-bold text-lg">{value}</div>
                                      <div className="text-xs opacity-80 capitalize">{key}</div>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            </div>
                          </div>
                          
                          {/* Content Section */}
                          <div className="p-6">
                            {/* Client Info */}
                            <div className="flex items-center justify-between mb-4">
                              <span className="text-sm text-gray-400">
                                Client: <span className="text-gray-300 font-medium">{project.client}</span>
                              </span>
                              <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors duration-300" />
                            </div>
                            
                            {/* Title */}
                            <h3 className={`text-xl font-bold mb-3 text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r ${project.gradient} transition-all duration-300`}>
                              {project.title}
                            </h3>
                            
                            {/* Description */}
                            <p className="text-gray-300 mb-4 leading-relaxed line-clamp-3 group-hover:text-gray-200 transition-colors duration-300">
                              {project.description}
                            </p>
                            
                            {/* Tags */}
                            <div className="flex flex-wrap gap-2 mb-4">
                              {project.tags.slice(0, 3).map((tag, tagIndex) => (
                                <span
                                  key={tagIndex}
                                  className="inline-flex items-center px-2 py-1 text-xs bg-white/10 backdrop-blur-sm border border-white/20 text-gray-300 rounded-md hover:bg-white/20 transition-colors duration-300"
                                >
                                  <Tag className="w-3 h-3 mr-1" />
                                  {tag}
                                </span>
                              ))}
                              {project.tags.length > 3 && (
                                <span className="inline-flex items-center px-2 py-1 text-xs bg-white/5 text-gray-400 rounded-md">
                                  +{project.tags.length - 3} more
                                </span>
                              )}
                            </div>
                            
                            {/* View Project Button */}
                            <button className={`w-full mt-4 px-4 py-3 bg-gradient-to-r ${project.gradient} text-white font-medium rounded-xl hover:shadow-lg transition-all duration-300 hover:scale-105 group-hover:shadow-xl`}>
                              <span className="flex items-center justify-center">
                                View Project Details
                                <ExternalLink className="ml-2 w-4 h-4" />
                              </span>
                            </button>
                          </div>
                        </div>

                        {/* Shimmer Effect */}
                        <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" style={{
                          background: 'linear-gradient(45deg, transparent, rgba(255,255,255,0.1), transparent)',
                          animation: 'shimmer 2s infinite'
                        }} />
                      </div>
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </motion.div>

            {/* No Results Message */}
            {filteredProjects.length === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-16"
              >
                <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 max-w-md mx-auto">
                  <Code className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-white mb-2">No projects found</h3>
                  <p className="text-gray-400">Try selecting a different category to see more projects</p>
                </div>
              </motion.div>
            )}
          </div>
        </section>

        {/* Contact CTA Section */}
        {/* <section className="relative py-20 overflow-hidden">
          <WaveAnimation position="top" inverted={true} className="-mt-1" />
          
          <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 py-20 relative">
            <div className="max-w-7xl mx-auto px-4 relative z-10">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-white/20 backdrop-blur-md border border-white/30 mb-8">
                  <Code size={32} className="text-white" />
                </div>
                
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Ready to Start Your Next{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-pink-300">
                    Project?
                  </span>
                </h3>
                
                <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                  Let's collaborate to bring your vision to life with innovative digital solutions that drive results.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <motion.a
                    href="/contact"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center px-8 py-4 bg-white text-purple-600 font-semibold rounded-full hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    Start Your Project
                    <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </motion.a>

                  <motion.a
                    href="/contact"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center px-8 py-4 bg-transparent border-2 border-white/30 text-white font-semibold rounded-full hover:bg-white/10 hover:border-white/60 transition-all duration-300 backdrop-blur-sm"
                  >
                    Get Free Quote
                    <ExternalLink className="ml-2 w-4 h-4" />
                  </motion.a>
                </div>
              </motion.div>
            </div>
          </div>
          
          <WaveAnimation />
        </section> */}

        {/* Scroll to Top Button */}
        <motion.button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-8 right-8 z-50 bg-gradient-to-r from-blue-600 to-purple-600 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1 }}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </motion.button>
      </div>

      <style jsx>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
        <ScrollToTop />
    </>
  );
};

export default Projects;