import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Clock, ChevronRight, Search, BookOpen, Zap, Code, 
  Palette, Shield, TrendingUp, Globe, User, Calendar,
  Tag, ExternalLink, Filter, Sparkles
} from 'lucide-react';
import { Link } from 'react-router-dom';

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

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const blogPosts = [
    {
      id: 'web-design-trends-2025',
      title: 'Web Design Trends to Watch in 2025',
      excerpt: 'Discover the cutting-edge design trends that will dominate the web development landscape in 2025, from AI-powered interfaces to immersive experiences.',
      content: '',
      author: 'Alex Rivera',
      date: 'May 15, 2025',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      category: 'Design',
      tags: ['Web Design', 'UX', 'Trends'],
      readTime: 7,
      gradient: 'from-purple-500 to-pink-500',
      icon: Palette
    },
    {
      id: 'optimizing-site-performance',
      title: 'Ultimate Guide to Website Performance Optimization',
      excerpt: "Learn how to improve your website's speed and performance with these proven techniques and best practices for lightning-fast user experiences.",
      content: '',
      author: 'Sophia Chen',
      date: 'April 28, 2025',
      image: 'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      category: 'Development',
      tags: ['Performance', 'Optimization', 'Core Web Vitals'],
      readTime: 10,
      gradient: 'from-blue-500 to-cyan-500',
      icon: Zap
    },
    {
      id: 'ai-in-web-development',
      title: 'How AI is Revolutionizing Web Development',
      excerpt: 'Explore the transformative impact of artificial intelligence on modern web development practices and tools that are changing the industry.',
      content: '',
      author: 'Marcus Johnson',
      date: 'April 12, 2025',
      image: 'https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      category: 'Technology',
      tags: ['AI', 'Machine Learning', 'Automation'],
      readTime: 8,
      gradient: 'from-emerald-500 to-teal-500',
      icon: Code
    },
    {
      id: 'responsive-design-best-practices',
      title: 'Responsive Design Best Practices for 2025',
      excerpt: 'Master the art of creating responsive websites that deliver exceptional experiences across all devices with modern CSS techniques.',
      content: '',
      author: 'Emma Roberts',
      date: 'March 30, 2025',
      image: 'https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      category: 'Design',
      tags: ['Responsive Design', 'Mobile First', 'CSS Grid'],
      readTime: 6,
      gradient: 'from-orange-500 to-red-500',
      icon: Palette
    },
    {
      id: 'microservices-architecture',
      title: 'Microservices Architecture: Benefits and Challenges',
      excerpt: 'Dive into the world of microservices and learn when and how to implement this powerful architectural pattern for scalable applications.',
      content: '',
      author: 'David Zhang',
      date: 'March 15, 2025',
      image: 'https://images.pexels.com/photos/1181271/pexels-photo-1181271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      category: 'Development',
      tags: ['Microservices', 'Architecture', 'DevOps'],
      readTime: 12,
      gradient: 'from-indigo-500 to-purple-500',
      icon: Code
    },
    {
      id: 'cybersecurity-for-websites',
      title: 'Essential Cybersecurity Measures for Modern Websites',
      excerpt: 'Protect your website and user data with these crucial security practices and tools that every developer should implement.',
      content: '',
      author: 'Sarah Johnson',
      date: 'March 5, 2025',
      image: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      category: 'Security',
      tags: ['Cybersecurity', 'Data Protection', 'SSL'],
      readTime: 9,
      gradient: 'from-red-500 to-pink-500',
      icon: Shield
    },
    {
      id: 'seo-strategies-2025',
      title: 'Effective SEO Strategies for 2025 and Beyond',
      excerpt: 'Stay ahead of search engine algorithms with these proven SEO techniques for better visibility and rankings in the modern web.',
      content: '',
      author: 'Michael Brown',
      date: 'February 20, 2025',
      image: 'https://images.pexels.com/photos/534216/pexels-photo-534216.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      category: 'Marketing',
      tags: ['SEO', 'Digital Marketing', 'Content Strategy'],
      readTime: 11,
      gradient: 'from-green-500 to-emerald-500',
      icon: TrendingUp
    },
    {
      id: 'web3-blockchain-development',
      title: 'Getting Started with Web3 and Blockchain Development',
      excerpt: 'Learn the fundamentals of Web3 technologies and how to build decentralized applications for the future of the internet.',
      content: '',
      author: 'Jason Lee',
      date: 'February 8, 2025',
      image: 'https://images.pexels.com/photos/844124/pexels-photo-844124.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      category: 'Technology',
      tags: ['Web3', 'Blockchain', 'Cryptocurrency'],
      readTime: 14,
      gradient: 'from-yellow-500 to-orange-500',
      icon: Globe
    },
    {
      id: 'user-experience-principles',
      title: 'Core Principles of Outstanding User Experience Design',
      excerpt: 'Master the essential UX principles that lead to delightful, intuitive, and effective digital products that users love.',
      content: '',
      author: 'Nina Patel',
      date: 'January 25, 2025',
      image: 'https://images.pexels.com/photos/3182746/pexels-photo-3182746.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      category: 'Design',
      tags: ['UX Design', 'User Research', 'Prototyping'],
      readTime: 8,
      gradient: 'from-cyan-500 to-blue-500',
      icon: Palette
    }
  ];

  const categories = [
    { name: 'All', icon: BookOpen, color: 'from-blue-500 to-cyan-500' },
    { name: 'Design', icon: Palette, color: 'from-purple-500 to-pink-500' },
    { name: 'Development', icon: Code, color: 'from-blue-500 to-cyan-500' },
    { name: 'Technology', icon: Zap, color: 'from-emerald-500 to-teal-500' },
    { name: 'Security', icon: Shield, color: 'from-red-500 to-pink-500' },
    { name: 'Marketing', icon: TrendingUp, color: 'from-green-500 to-emerald-500' }
  ];

  const filteredPosts = blogPosts
    .filter(post => activeCategory === 'All' || post.category === activeCategory)
    .filter(post => 
      searchQuery === '' || 
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
    );

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
        <title>Blog | Cloudacq - Insights, Guides & Tech Trends</title>
        <meta name="description" content="Explore our latest articles, insights, and guides on web development, design, technology trends, AI, and digital transformation strategies." />
        <meta name="keywords" content="web development blog, design trends, technology insights, programming tutorials, digital transformation" />
      </Helmet>

      <div className="relative bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 min-h-screen overflow-hidden">
        {/* Floating Particles Background */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(30)].map((_, i) => (
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
                  📚 Knowledge Hub
                </span>
              </motion.div>
              
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-4xl md:text-6xl font-bold mb-8"
              >
                <span className="bg-gradient-to-r from-white via-blue-200 to-white bg-clip-text text-transparent">
                  Insights &
                </span>
                <br />
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Tech Trends
                </span>
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8"
              >
                Insights, guides, and industry trends to help you succeed in the digital world and stay ahead of the curve
              </motion.p>

              {/* Enhanced Search Bar */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="relative max-w-2xl mx-auto"
              >
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <Search size={20} className="text-gray-400" />
                  </div>
                  <input
                    type="text"
                    placeholder="Search articles, topics, or technologies..."
                    className="block w-full pl-12 pr-6 py-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                  <div className="absolute inset-y-0 right-0 pr-4 flex items-center">
                    <Sparkles size={16} className="text-purple-400" />
                  </div>
                </div>
                
                {/* Search results count */}
                {searchQuery && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-3 text-sm text-gray-400"
                  >
                    Found {filteredPosts.length} article{filteredPosts.length !== 1 ? 's' : ''} matching "{searchQuery}"
                  </motion.div>
                )}
              </motion.div>
            </div>
          </div>
          
          <WaveAnimation />
        </section>

        {/* Blog Content Section */}
        <section className="py-20 relative">
          <div className="max-w-7xl mx-auto px-4 relative z-10">
            {/* Category Filter */}
           <motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  className="mb-16"
>
  <div className="flex items-center justify-center mb-8">
    <Filter className="w-5 h-5 text-gray-400 mr-2" />
    <h2 className="text-xl font-semibold text-gray-300">Filter by Category</h2>
  </div>
  
  {/* Updated container with horizontal scrolling */}
  <div className="flex overflow-x-auto pb-4 -mx-4 px-4 scrollbar-hide">
    <div className="flex flex-nowrap gap-3">
      {categories.map((category) => {
        const IconComponent = category.icon;
        const isActive = activeCategory === category.name;
        const categoryCount = category.name === 'All' 
          ? blogPosts.length 
          : blogPosts.filter(post => post.category === category.name).length;
        
        return (
          <button
            key={category.name}
            onClick={() => setActiveCategory(category.name)}
            className={`inline-flex items-center flex-shrink-0 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
              isActive
                ? `bg-gradient-to-r ${category.color} text-white shadow-lg scale-105`
                : 'bg-white/10 backdrop-blur-md border border-white/20 text-gray-300 hover:bg-white/20 hover:text-white hover:scale-105'
            }`}
          >
            <IconComponent className="w-4 h-4 mr-2" />
            {category.name}
            <span className={`ml-2 px-2 py-1 rounded-full text-xs ${
              isActive ? 'bg-white/20' : 'bg-white/10'
            }`}>
              {categoryCount}
            </span>
          </button>
        );
      })}
    </div>
  </div>
</motion.div>

            {/* Blog Posts Grid */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              <AnimatePresence mode="wait">
                {filteredPosts.length > 0 ? (
                  filteredPosts.map((post, index) => {
                    const IconComponent = post.icon;
                    
                    return (
                      <motion.div
                        key={post.id}
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
                          <div className={`absolute inset-0 bg-gradient-to-r ${post.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-xl`} />
                          
                          <div className="relative z-10">
                            {/* Image Section */}
                            <Link to={`/blog/${post.id}`} className="block">
                              <div className="relative aspect-video overflow-hidden">
                                <img
                                  src={post.image}
                                  alt={post.title}
                                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                
                                {/* Image Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                                
                                {/* Category Badge */}
                                <div className="absolute top-4 left-4">
                                  <span className={`inline-flex items-center px-3 py-1 text-xs font-semibold bg-gradient-to-r ${post.gradient} text-white rounded-full shadow-lg backdrop-blur-sm`}>
                                    <IconComponent className="w-3 h-3 mr-1" />
                                    {post.category}
                                  </span>
                                </div>
                                
                                {/* Read Time Badge */}
                                <div className="absolute top-4 right-4">
                                  <span className="inline-flex items-center px-3 py-1 text-xs font-medium bg-white/20 backdrop-blur-md border border-white/30 text-white rounded-full">
                                    <Clock className="w-3 h-3 mr-1" />
                                    {post.readTime} min
                                  </span>
                                </div>

                                {/* Hover Overlay */}
                                <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                                  <div className="text-center text-white">
                                    <BookOpen className="w-12 h-12 mx-auto mb-2 opacity-80" />
                                    <p className="text-sm font-medium">Read Article</p>
                                  </div>
                                </div>
                              </div>
                            </Link>
                            
                            {/* Content Section */}
                            <div className="p-6">
                              {/* Meta Information */}
                              <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                                <div className="flex items-center">
                                  <User className="w-4 h-4 mr-1" />
                                  <span>{post.author}</span>
                                </div>
                                <div className="flex items-center">
                                  <Calendar className="w-4 h-4 mr-1" />
                                  <span>{post.date}</span>
                                </div>
                              </div>
                              
                              {/* Title */}
                              <Link to={`/blog/${post.id}`} className="group/title">
                                <h3 className={`text-xl font-bold mb-3 text-white group-hover/title:text-transparent group-hover/title:bg-clip-text group-hover/title:bg-gradient-to-r ${post.gradient} transition-all duration-300 line-clamp-2`}>
                                  {post.title}
                                </h3>
                              </Link>
                              
                              {/* Excerpt */}
                              <p className="text-gray-300 mb-4 leading-relaxed line-clamp-3 group-hover:text-gray-200 transition-colors duration-300">
                                {post.excerpt}
                              </p>
                              
                              {/* Tags */}
                              <div className="flex flex-wrap gap-2 mb-6">
                                {post.tags.slice(0, 3).map((tag, tagIndex) => (
                                  <span
                                    key={tagIndex}
                                    className="inline-flex items-center px-2 py-1 text-xs bg-white/10 backdrop-blur-sm border border-white/20 text-gray-300 rounded-md hover:bg-white/20 transition-colors duration-300"
                                  >
                                    <Tag className="w-3 h-3 mr-1" />
                                    {tag}
                                  </span>
                                ))}
                              </div>
                              
                              {/* Read More Button */}
                              <Link
                                to={`/blog/${post.id}`}
                                className={`inline-flex items-center w-full justify-center px-4 py-3 bg-gradient-to-r ${post.gradient} text-white font-medium rounded-xl hover:shadow-lg transition-all duration-300 hover:scale-105 group-hover:shadow-xl`}
                              >
                                Read Full Article
                                <ChevronRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                              </Link>
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
                  })
                ) : (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="col-span-full"
                  >
                    <div className="text-center py-16">
                      <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-12 max-w-md mx-auto">
                        <Search className="w-16 h-16 text-gray-400 mx-auto mb-6" />
                        <h3 className="text-2xl font-bold text-white mb-4">No Articles Found</h3>
                        <p className="text-gray-400 mb-6">
                          We couldn't find any articles matching your search criteria. Try adjusting your filters or search terms.
                        </p>
                        <button
                          onClick={() => {
                            setSearchQuery('');
                            setActiveCategory('All');
                          }}
                          className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium rounded-xl hover:shadow-lg transition-all duration-300 hover:scale-105"
                        >
                          Reset Filters
                        </button>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        </section>

       
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
                  <Sparkles size={32} className="text-white" />
                </div>
                
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Ready to Transform Your{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-pink-300">
                    Digital Presence?
                  </span>
                </h3>
                
                <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                  Let's collaborate to bring your vision to life with innovative digital solutions that drive results and exceed expectations.
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
                    Get Free Consultation
                    <ExternalLink className="ml-2 w-4 h-4" />
                  </motion.a>
                </div>

              
                <div className="mt-12 pt-8 border-t border-white/20">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                    <div>
                      <div className="text-lg font-bold text-white mb-1">Free Consultation</div>
                      <div className="text-sm text-white/70">No obligation project review</div>
                    </div>
                    <div>
                      <div className="text-lg font-bold text-white mb-1">Expert Guidance</div>
                      <div className="text-sm text-white/70">Industry-leading expertise</div>
                    </div>
                    <div>
                      <div className="text-lg font-bold text-white mb-1">Proven Results</div>
                      <div className="text-sm text-white/70">500+ successful projects</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
          
          <WaveAnimation />
        </section> */}

       
        {/* <section className="py-20 relative">
          <div className="max-w-4xl mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 md:p-12 relative overflow-hidden">
               
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse" />
                
                <div className="relative z-10">
                  <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mb-6"
                  >
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 mb-6">
                      <BookOpen size={28} className="text-white" />
                    </div>
                  </motion.div>

                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                    Stay Updated with{' '}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                      Latest Insights
                    </span>
                  </h3>
                  
                  <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
                    Subscribe to our newsletter and get the latest articles, trends, and exclusive content delivered to your inbox.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                    <input
                      type="email"
                      placeholder="Enter your email address"
                      className="flex-1 px-4 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-xl hover:shadow-lg transition-all duration-300"
                    >
                      Subscribe
                    </motion.button>
                  </div>

                  <p className="text-sm text-gray-400 mt-4">
                    No spam, unsubscribe at any time. Join 5,000+ developers who trust our content.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
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
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </>
  );
};

export default Blog;