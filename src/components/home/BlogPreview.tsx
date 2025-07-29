import React from 'react';
import { motion } from 'framer-motion';
import { Clock, ChevronRight, Calendar, User, Tag, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

// Floating Particle Component
const FloatingParticle = ({ delay }) => (
  <div
    className="absolute w-1 h-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-30 animate-bounce"
    style={{
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      animationDelay: `${delay}s`,
      animationDuration: `${3 + Math.random() * 4}s`
    }}
  />
);

const BlogPreview = () => {
  const blogPosts = [
    {
      id: 'web-design-trends-2025',
      title: 'Web Design Trends to Watch in 2025',
      excerpt: 'Discover the cutting-edge design trends that will dominate the web development landscape in 2025, from AI-powered interfaces to immersive 3D experiences.',
      content: '',
      author: 'Alex Rivera',
      date: 'May 15, 2025',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      category: 'Design',
      tags: ['Web Design', 'UX', 'Trends'],
      readTime: 7,
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      id: 'optimizing-site-performance',
      title: 'Ultimate Guide to Website Performance Optimization',
      excerpt: 'Learn how to improve your website\'s speed and performance with these proven techniques, advanced caching strategies, and modern optimization tools.',
      content: '',
      author: 'Sophia Chen',
      date: 'April 28, 2025',
      image: 'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      category: 'Development',
      tags: ['Performance', 'Optimization', 'Core Web Vitals'],
      readTime: 10,
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      id: 'ai-in-web-development',
      title: 'How AI is Revolutionizing Web Development',
      excerpt: 'Explore the transformative impact of artificial intelligence on modern web development practices, automated coding, and intelligent user experiences.',
      content: '',
      author: 'Marcus Johnson',
      date: 'April 12, 2025',
      image: 'https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      category: 'Technology',
      tags: ['AI', 'Machine Learning', 'Automation'],
      readTime: 8,
      gradient: 'from-emerald-500 to-teal-500'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
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
    <section className="relative bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20 overflow-hidden">
      {/* Floating Particles Background */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <FloatingParticle key={i} delay={i * 0.4} />
        ))}
      </div>

      {/* Animated Background Gradient */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-pink-500 to-orange-500 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full blur-3xl animate-pulse" style={{animationDelay: '4s'}} />
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-block mb-6"
          >
            <span className="px-6 py-3 text-sm font-semibold bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-md border border-white/20 text-blue-200 rounded-full">
              📚 Latest Insights
            </span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            <span className="bg-gradient-to-r from-white via-blue-200 to-white bg-clip-text text-transparent">
              Industry
            </span>
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              {" "}Insights
            </span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            Stay ahead of the curve with our expert insights on web development trends, best practices, and emerging technologies
          </motion.p>
        </div>

        {/* Blog Posts Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
        >
          {blogPosts.map((post, index) => (
            <motion.div
              key={post.id}
              variants={cardVariants}
              className="group"
            >
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl overflow-hidden h-full flex flex-col hover:bg-white/15 transition-all duration-500 hover:scale-105 hover:shadow-2xl relative">
                {/* Card Glow Effect */}
                <div className={`absolute inset-0 bg-gradient-to-r ${post.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-xl`} />
                
                <div className="relative z-10">
                  {/* Image Section */}
                  <Link to={`/blog/${post.id}`} className="block relative overflow-hidden">
                    <div className="aspect-video relative">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      
                      {/* Image Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                      
                      {/* Category Badge */}
                      <div className="absolute top-4 left-4">
                        <span className={`px-3 py-1 text-xs font-semibold bg-gradient-to-r ${post.gradient} text-white rounded-full shadow-lg backdrop-blur-sm`}>
                          {post.category}
                        </span>
                      </div>
                      
                      {/* Read Time Badge */}
                      <div className="absolute top-4 right-4">
                        <span className="px-3 py-1 text-xs font-medium bg-white/20 backdrop-blur-md border border-white/30 text-white rounded-full">
                          <Clock className="w-3 h-3 inline mr-1" />
                          {post.readTime} min
                        </span>
                      </div>
                    </div>
                  </Link>
                  
                  {/* Content Section */}
                  <div className="p-6 flex flex-col flex-grow">
                    {/* Meta Information */}
                    <div className="flex items-center justify-between text-gray-400 text-sm mb-4">
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-2" />
                        <span>{post.date}</span>
                      </div>
                      <div className="flex items-center">
                        <User className="w-4 h-4 mr-2" />
                        <span>{post.author}</span>
                      </div>
                    </div>
                    
                    {/* Title */}
                    <Link to={`/blog/${post.id}`} className="group/title">
                      <h3 className={`text-xl font-bold mb-3 text-white group-hover/title:text-transparent group-hover/title:bg-clip-text group-hover/title:bg-gradient-to-r ${post.gradient} transition-all duration-300 line-clamp-2`}>
                        {post.title}
                      </h3>
                    </Link>
                    
                    {/* Excerpt */}
                    <p className="text-gray-300 mb-4 flex-grow leading-relaxed line-clamp-3 group-hover:text-gray-200 transition-colors duration-300">
                      {post.excerpt}
                    </p>
                    
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.slice(0, 2).map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="inline-flex items-center px-2 py-1 text-xs bg-white/10 backdrop-blur-sm border border-white/20 text-gray-300 rounded-md"
                        >
                          <Tag className="w-3 h-3 mr-1" />
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    {/* Read More Link */}
                    <Link
                      to={`/blog/${post.id}`}
                      className={`inline-flex items-center font-medium bg-gradient-to-r ${post.gradient} bg-clip-text text-transparent hover:scale-105 transition-all duration-300 group/link`}
                    >
                      Read Full Article
                      <ArrowRight className="ml-2 w-4 h-4 text-white group-hover/link:translate-x-1 transition-transform duration-300" />
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
          ))}
        </motion.div>

        {/* View All Articles CTA */}
        {/* <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center"
        >
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 md:p-12 relative overflow-hidden max-w-4xl mx-auto">
       
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
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
              </motion.div>

              <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Want More{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                  Expert Insights?
                </span>
              </h3>
              
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Explore our complete library of in-depth articles, tutorials, and industry analysis to stay ahead in the digital world.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.a
                  href="/blog"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  View All Articles
                  <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </motion.a>

                <motion.a
                  href="/newsletter"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center px-8 py-4 bg-transparent border-2 border-white/30 text-white font-semibold rounded-full hover:bg-white/10 hover:border-white/60 transition-all duration-300 backdrop-blur-sm"
                >
                  Subscribe to Newsletter
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </motion.a>
              </div>

              
              <div className="mt-8 pt-8 border-t border-white/10">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                  <div>
                    <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-1">50+</div>
                    <div className="text-sm text-gray-400">Expert Articles</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-1">10K+</div>
                    <div className="text-sm text-gray-400">Monthly Readers</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-1">Weekly</div>
                    <div className="text-sm text-gray-400">New Content</div>
                  </div>
                </div>
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
    </section>
  );
};

export default BlogPreview;