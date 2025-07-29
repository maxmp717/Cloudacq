import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ExternalLink, Calendar, User, Code, Zap, Eye, 
  ArrowRight, Star, Github, Globe, Play
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

const projects = [
  {
    id: 'ecommerce-platform',
    title: 'E-commerce Platform',
    description: 'A comprehensive online shopping platform with advanced filtering, search, and payment processing. Built with modern technologies for optimal performance.',
    image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'E-commerce',
    tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    client: 'FashionBoutique',
    date: '2024',
    gradient: 'from-blue-500 via-purple-500 to-pink-500',
    status: 'Live',
    rating: 4.9,
    views: '12.5k'
  },
  {
    id: 'fintech-app',
    title: 'FinTech Mobile App',
    description: 'A secure financial technology app for personal banking, investments, and financial planning with real-time analytics.',
    image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'Mobile App',
    tags: ['React Native', 'Firebase', 'Redux', 'Financial API'],
    client: 'WealthWise',
    date: '2024',
    gradient: 'from-emerald-500 via-teal-500 to-cyan-500',
    status: 'Live',
    rating: 4.8,
    views: '8.3k'
  },
  {
    id: 'healthcare-portal',
    title: 'Healthcare Portal',
    description: 'A patient management system with appointment scheduling, medical records, and telehealth capabilities for modern healthcare.',
    image: 'https://images.pexels.com/photos/7089401/pexels-photo-7089401.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'Healthcare',
    tags: ['Angular', 'Express', 'PostgreSQL', 'HIPAA Compliant'],
    client: 'MedTech Solutions',
    date: '2023',
    gradient: 'from-rose-500 via-pink-500 to-purple-500',
    status: 'Live',
    rating: 4.7,
    views: '15.2k'
  },
  {
    id: 'real-estate-platform',
    title: 'Real Estate Platform',
    description: 'A property listing and management platform with virtual tours and integrated CRM for seamless property management.',
    image: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'Real Estate',
    tags: ['Vue.js', 'Laravel', 'MySQL', 'Google Maps API'],
    client: 'PropertyPro',
    date: '2023',
    gradient: 'from-orange-500 via-amber-500 to-yellow-500',
    status: 'Live',
    rating: 4.9,
    views: '9.8k'
  },
  {
    id: 'education-platform',
    title: 'Education Platform',
    description: 'Interactive learning management system with virtual classrooms, progress tracking, and gamification features.',
    image: 'https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'Education',
    tags: ['React', 'GraphQL', 'MongoDB', 'WebRTC'],
    client: 'EduTech Pro',
    date: '2024',
    gradient: 'from-indigo-500 via-blue-500 to-cyan-500',
    status: 'Live',
    rating: 4.8,
    views: '11.7k'
  },
  {
    id: 'logistics-dashboard',
    title: 'Logistics Dashboard',
    description: 'Real-time supply chain management dashboard with tracking, analytics, and automated reporting capabilities.',
    image: 'https://images.pexels.com/photos/906494/pexels-photo-906494.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'Dashboard',
    tags: ['Vue.js', 'D3.js', 'Express', 'Redis'],
    client: 'LogiFlow',
    date: '2023',
    gradient: 'from-violet-500 via-purple-500 to-indigo-500',
    status: 'Live',
    rating: 4.6,
    views: '7.4k'
  }
];

const categories = ['All', 'E-commerce', 'Mobile App', 'Healthcare', 'Real Estate', 'Education', 'Dashboard'];

const ProjectsShowcase = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [hoveredProject, setHoveredProject] = useState(null);
  
  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter(project => project.category === activeCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20 relative overflow-hidden">
      {/* Floating Particles Background */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(25)].map((_, i) => (
          <FloatingParticle key={i} delay={i * 0.3} />
        ))}
      </div>

      {/* Animated Background Gradient */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-r from-pink-500 to-yellow-500 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full blur-3xl animate-pulse" style={{animationDelay: '4s'}} />
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent"
          >
            Featured <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Projects</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-md text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            Explore our portfolio of successful client projects and cutting-edge digital solutions 
            that have transformed businesses across various industries.
          </motion.p>
        </div>
        
        {/* Category Filter */}
        {/* <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 backdrop-blur-md border ${
                activeCategory === category
                  ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg border-transparent'
                  : 'bg-white/10 text-gray-300 hover:bg-white/20 border-white/20'
              }`}
            >
              {category}
            </button>
          ))}
        </div> */}
{/* Category Filter */}
<div className="mb-12 w-full overflow-x-auto pb-2">
  <div className="flex gap-3 w-max px-4 mx-auto">
    {categories.map((category) => (
      <button
        key={category}
        onClick={() => setActiveCategory(category)}
        className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 backdrop-blur-md border ${
          activeCategory === category
            ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg border-transparent'
            : 'bg-white/10 text-gray-300 hover:bg-white/20 border-white/20'
        }`}
      >
        {category}
      </button>
    ))}
  </div>
</div>
        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <AnimatePresence mode="wait">
            {filteredProjects.map((project, index) => {
              const isHovered = hoveredProject === project.id;
              
              return (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  layout
                  className={`group relative cursor-pointer transition-all duration-500 transform ${
                    isHovered ? 'scale-105 -translate-y-2' : ''
                  }`}
                  onMouseEnter={() => setHoveredProject(project.id)}
                  onMouseLeave={() => setHoveredProject(null)}
                >
                  {/* Main Card */}
                  <div className="relative h-full bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl overflow-hidden">
                    {/* Card Glow Effect */}
                    <div className={`absolute inset-0 bg-gradient-to-r ${project.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-xl`} />
                    
                    {/* Status Badge */}
                    <div className="absolute top-4 right-4 z-20">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-sm border ${
                        project.status === 'Live' 
                          ? 'bg-green-500/20 text-green-300 border-green-400/30' 
                          : 'bg-orange-500/20 text-orange-300 border-orange-400/30'
                      }`}>
                        {project.status}
                      </span>
                    </div>

                    {/* Image Section */}
                    <div className="relative aspect-video overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      
                      {/* Image Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      
                      {/* Play Button Overlay */}
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                        <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30 hover:scale-110 transition-transform duration-300">
                          <Play className="w-6 h-6 text-white ml-1" />
                        </div>
                      </div>

                      {/* Category Badge */}
                      <div className="absolute top-4 left-4">
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${project.gradient} text-white backdrop-blur-sm`}>
                          {project.category}
                        </span>
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className="p-6 relative">
                      {/* Project Title */}
                      <h3 className={`text-xl font-bold mb-3 bg-gradient-to-r ${project.gradient} bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300 origin-left`}>
                        {project.title}
                      </h3>

                      {/* Project Description */}
                      <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                        {project.description}
                      </p>

                      {/* Stats Row */}
                      <div className="flex items-center justify-between mb-4 text-sm">
                        <div className="flex items-center text-yellow-400">
                          <Star className="w-4 h-4 mr-1 fill-current" />
                          <span className="font-semibold">{project.rating}</span>
                        </div>
                        <div className="flex items-center text-gray-400">
                          <Eye className="w-4 h-4 mr-1" />
                          <span>{project.views}</span>
                        </div>
                        <div className="flex items-center text-gray-400">
                          <Calendar className="w-4 h-4 mr-1" />
                          <span>{project.date}</span>
                        </div>
                      </div>

                      {/* Technology Tags */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.tags.map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full text-xs text-gray-300 border border-white/20 hover:bg-white/20 transition-colors duration-200"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Client Info */}
                      <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center text-gray-400 text-sm">
                          <User className="w-4 h-4 mr-2" />
                          <span>{project.client}</span>
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex gap-3">
                        <button className={`flex-1 py-3 px-4 rounded-xl bg-gradient-to-r ${project.gradient} text-white font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg group/btn flex items-center justify-center`}>
                          <span>View Project</span>
                          <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover/btn:translate-x-1" />
                        </button>
                        
                        <button className="px-4 py-3 rounded-xl border border-white/20 text-white hover:bg-white/10 transition-colors duration-200 backdrop-blur-sm hover:scale-105">
                          <ExternalLink className="w-4 h-4" />
                        </button>
                        
                        <button className="px-4 py-3 rounded-xl border border-white/20 text-white hover:bg-white/10 transition-colors duration-200 backdrop-blur-sm hover:scale-105">
                          <Github className="w-4 h-4" />
                        </button>
                      </div>
                    </div>

                    {/* Hover Glow */}
                    <div className={`absolute inset-0 rounded-2xl transition-opacity duration-500 ${
                      isHovered ? 'opacity-100' : 'opacity-0'
                    }`} style={{
                      background: `linear-gradient(45deg, transparent, rgba(255,255,255,0.1), transparent)`,
                      animation: isHovered ? 'shimmer 2s infinite' : 'none'
                    }} />
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* View All Projects CTA */}
        {/* <div className="text-center">
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 inline-block">
            <h3 className="text-2xl font-bold text-white mb-4">
              Want to see more amazing projects?
            </h3>
            <p className="text-gray-300 mb-6 max-w-md">
              Explore our complete portfolio and discover how we can transform your business ideas into reality.
            </p>
            <button className="px-8 py-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white font-bold rounded-full text-lg hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-2xl flex items-center mx-auto">
              <Globe className="w-5 h-5 mr-2" />
              View All Projects
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
          </div>
        </div> */}
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

export default ProjectsShowcase;