import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ChevronDown, HelpCircle, MessageCircle, Search, 
  Code, Smartphone, Palette, BarChart, Clock, 
  DollarSign, Shield, Users, Globe, Settings
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

const FAQPage = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = [
    { name: 'All', icon: Globe, color: 'from-blue-500 to-cyan-500' },
    { name: 'General', icon: HelpCircle, color: 'from-emerald-500 to-teal-500' },
    { name: 'Services', icon: Code, color: 'from-purple-500 to-pink-500' },
    { name: 'Timeline', icon: Clock, color: 'from-orange-500 to-red-500' },
    { name: 'Pricing', icon: DollarSign, color: 'from-yellow-500 to-orange-500' },
    { name: 'Support', icon: Users, color: 'from-indigo-500 to-purple-500' },
    { name: 'Security', icon: Shield, color: 'from-green-500 to-emerald-500' }
  ];

  const faqs = [
    {
      id: 1,
      category: 'General',
      question: 'What web development services does Cloudacq offer?',
      answer: 'Cloudacq offers comprehensive web development services including custom website development, e-commerce solutions, CMS development, progressive web apps, API integration, and performance optimization. We use modern technologies like React, Next.js, Node.js, and cloud platforms to deliver scalable, secure, and high-performance solutions that drive business growth.',
      icon: Code,
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      id: 2,
      category: 'Timeline',
      question: 'How long does it take to develop a custom website?',
      answer: 'Development timelines vary based on project complexity and requirements. A simple business website typically takes 2-4 weeks, while complex e-commerce or custom web applications can take 6-12 weeks. Enterprise-level solutions may require 3-6 months. We provide detailed project timelines with milestones during our initial consultation and keep you updated throughout the development process.',
      icon: Clock,
      gradient: 'from-emerald-500 to-teal-500'
    },
    {
      id: 3,
      category: 'Services',
      question: 'Do you provide mobile app development services?',
      answer: 'Yes, we develop both native iOS and Android apps, as well as cross-platform solutions using React Native and Flutter. Our mobile apps include features like push notifications, offline functionality, seamless API integration, real-time synchronization, app store optimization, and comprehensive analytics. We handle the entire process from concept to deployment and ongoing maintenance.',
      icon: Smartphone,
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      id: 4,
      category: 'Services',
      question: 'What is included in your SEO services?',
      answer: 'Our comprehensive SEO services include technical SEO audits, keyword research and strategy development, on-page optimization, content strategy creation, link building campaigns, local SEO optimization, competitor analysis, site speed optimization, mobile SEO, and monthly performance reporting with actionable insights. We use white-hat techniques and follow Google best practices to ensure sustainable rankings.',
      icon: BarChart,
      gradient: 'from-orange-500 to-red-500'
    },
    {
      id: 5,
      category: 'Support',
      question: 'Do you offer ongoing website maintenance and support?',
      answer: 'Yes, we provide comprehensive maintenance packages including security updates, performance monitoring, content updates, backup management, bug fixes, feature enhancements, and 24/7 technical support. Our support plans range from basic maintenance to full managed services. We offer different support levels to match your specific needs and budget, with guaranteed response times and proactive monitoring.',
      icon: Settings,
      gradient: 'from-indigo-500 to-purple-500'
    },
    {
      id: 6,
      category: 'Pricing',
      question: 'What are your pricing models and payment terms?',
      answer: 'We offer flexible pricing models including fixed-price projects, hourly rates, and retainer agreements. Project costs depend on complexity, features, and timeline. We typically require 50% upfront and 50% upon completion for smaller projects, with milestone-based payments for larger projects. We provide detailed quotes with no hidden fees and offer payment plans for qualifying projects.',
      icon: DollarSign,
      gradient: 'from-yellow-500 to-orange-500'
    },
    {
      id: 7,
      category: 'Services',
      question: 'Do you provide UI/UX design services?',
      answer: 'Absolutely! Our design team specializes in creating intuitive, engaging user experiences and beautiful interfaces. We provide wireframing, prototyping, user research, usability testing, responsive design, brand identity, and design system creation. Our design process focuses on user-centered design principles to ensure your digital products are both visually appealing and highly functional.',
      icon: Palette,
      gradient: 'from-violet-500 to-purple-500'
    },
    {
      id: 8,
      category: 'Security',
      question: 'How do you ensure website and application security?',
      answer: 'Security is our top priority. We implement multi-layered security measures including SSL certificates, secure hosting, regular security audits, penetration testing, GDPR compliance, data encryption, secure authentication systems, firewall protection, malware scanning, and regular security updates. We follow industry best practices and security standards to protect your data and users.',
      icon: Shield,
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      id: 9,
      category: 'General',
      question: 'What technologies and frameworks do you work with?',
      answer: 'We work with a wide range of modern technologies including React, Next.js, Vue.js, Angular for frontend; Node.js, Python, PHP, Laravel for backend; MongoDB, PostgreSQL, MySQL for databases; AWS, Azure, Google Cloud for hosting; and many other cutting-edge tools and frameworks. We choose the best technology stack based on your specific project requirements and business goals.',
      icon: Code,
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      id: 10,
      category: 'Timeline',
      question: 'Can you work with tight deadlines or rush projects?',
      answer: 'Yes, we can accommodate urgent projects and tight deadlines when possible. We have experience with rush projects and can allocate additional resources when needed. However, we always ensure quality is not compromised. For urgent projects, we may recommend a phased approach or MVP development to meet critical deadlines while planning for future enhancements.',
      icon: Clock,
      gradient: 'from-emerald-500 to-teal-500'
    },
    {
      id: 11,
      category: 'Support',
      question: 'Do you provide training for content management systems?',
      answer: 'Yes, we provide comprehensive training for all content management systems we implement. This includes video tutorials, documentation, live training sessions, and ongoing support to ensure your team can effectively manage and update your website. We also offer additional training sessions as needed and can provide training for new team members.',
      icon: Users,
      gradient: 'from-indigo-500 to-purple-500'
    },
    {
      id: 12,
      category: 'General',
      question: 'Do you work with international clients?',
      answer: 'Absolutely! We work with clients worldwide and have experience serving businesses across different time zones and cultural contexts. We use modern communication tools and project management systems to ensure smooth collaboration regardless of location. We are flexible with meeting times and provide regular updates to keep international projects on track.',
      icon: Globe,
      gradient: 'from-cyan-500 to-blue-500'
    }
  ];

  const filteredFAQs = faqs.filter(faq => {
    const matchesSearch = faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || faq.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="relative bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 min-h-screen overflow-hidden">
      {/* Floating Particles Background */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(25)].map((_, i) => (
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
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-block mb-6"
          >
            <span className="px-6 py-3 text-sm font-semibold bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-md border border-white/20 text-blue-200 rounded-full">
              ❓ Frequently Asked Questions
            </span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold mb-8"
          >
            <span className="bg-gradient-to-r from-white via-blue-200 to-white bg-clip-text text-transparent">
              Got Questions?
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              We Have Answers
            </span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-sm md:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
          >
            Find answers to common questions about our services, process, and how we can help transform your business
          </motion.p>
        </div>

        {/* Search and Filter Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-12"
        >
        
          {/* <div className="max-w-2xl mx-auto mb-8">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search for answers..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
              />
            </div>
          </div> */}

          
          {/* <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => {
              const IconComponent = category.icon;
              const isActive = selectedCategory === category.name;
              
              return (
                <button
                  key={category.name}
                  onClick={() => setSelectedCategory(category.name)}
                  className={`inline-flex items-center px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                    isActive
                      ? `bg-gradient-to-r ${category.color} text-white shadow-lg scale-105`
                      : 'bg-white/10 backdrop-blur-md border border-white/20 text-gray-300 hover:bg-white/20 hover:text-white'
                  }`}
                >
                  <IconComponent className="w-4 h-4 mr-2" />
                  {category.name}
                </button>
              );
            })}
          </div> */}
          <div className="flex flex-nowrap justify-center gap-3 overflow-x-auto pb-4 -mx-4 px-4">
  {categories.map((category) => {
    const IconComponent = category.icon;
    const isActive = selectedCategory === category.name;
    
    return (
      <button
        key={category.name}
        onClick={() => setSelectedCategory(category.name)}
        className={`inline-flex items-center px-4 py-2 rounded-full font-medium transition-all duration-300 whitespace-nowrap ${
          isActive
            ? `bg-gradient-to-r ${category.color} text-white shadow-lg scale-105`
            : 'bg-white/10 backdrop-blur-md border border-white/20 text-gray-300 hover:bg-white/20 hover:text-white'
        }`}
      >
        <IconComponent className="w-4 h-4 mr-2" />
        {category.name}
      </button>
    );
  })}
</div>
        </motion.div>

        {/* FAQ Grid */}
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 gap-6">
            {filteredFAQs.map((faq, index) => {
              const IconComponent = faq.icon;
              const isActive = activeIndex === index;
              
              return (
                <motion.div
                  key={faq.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="group"
                >
                  <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl overflow-hidden hover:bg-white/15 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl relative">
                    <button
                      onClick={() => toggleFAQ(index)}
                      className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-white/5 transition-colors duration-200"
                    >
                      <div className="flex items-center flex-1">
                        <div className={`flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-r ${faq.gradient} mr-4 flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                          <IconComponent size={20} className="text-white" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <span className="text-xs font-medium px-3 py-1 bg-white/10 backdrop-blur-sm text-gray-300 rounded-full border border-white/10">
                              {faq.category}
                            </span>
                          </div>
                          <h3 className="text-lg md:text-xl font-semibold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
                            {faq.question}
                          </h3>
                        </div>
                      </div>
                      <motion.div
                        animate={{ rotate: isActive ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                        className="ml-4 flex-shrink-0"
                      >
                        <ChevronDown size={24} className="text-gray-400 group-hover:text-white transition-colors duration-300" />
                      </motion.div>
                    </button>

                    <AnimatePresence>
                      {isActive && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: 'easeInOut' }}
                          className="overflow-hidden"
                        >
                          <div className="px-6 pb-6">
                            <div className="border-t border-white/10 pt-6">
                              <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                                {faq.answer}
                              </p>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* Glow Effect on Hover */}
                    <div className={`absolute inset-0 bg-gradient-to-r ${faq.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500 blur-xl pointer-events-none`} />
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* No Results Message */}
          {filteredFAQs.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8">
                <HelpCircle className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">No matching questions found</h3>
                <p className="text-gray-400">Try adjusting your search terms or browse different categories</p>
              </div>
            </motion.div>
          )}
        </div>

        {/* Contact Section */}
        {/* <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-20"
        >
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 md:p-12 relative overflow-hidden max-w-4xl mx-auto">
            
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse" />
            
            <div className="relative z-10">
              <div className="flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-8">
                <MessageCircle size={32} className="text-white" />
              </div>
              
              <h3 className="text-3xl md:text-4xl font-bold mb-6">
                <span className="bg-gradient-to-r from-white via-blue-200 to-white bg-clip-text text-transparent">
                  Still Have
                </span>
                <br />
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Questions?
                </span>
              </h3>
              
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
                Our team is here to help! Get in touch with us for personalized answers about your specific project requirements and how we can help your business grow.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.a
                  href="/contact"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Get Free Consultation
                  <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </motion.a>
                
                <motion.a
                  href="tel:+15551234567"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center px-8 py-4 bg-transparent border-2 border-white/30 text-white font-semibold rounded-full hover:bg-white/10 hover:border-white/60 transition-all duration-300 backdrop-blur-sm"
                >
                  Call Us Now
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </motion.a>

                <motion.a
                  href="/live-chat"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-semibold rounded-full hover:from-emerald-700 hover:to-teal-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Live Chat
                  <MessageCircle className="ml-2 w-4 h-4" />
                </motion.a>
              </div>

             
              <div className="mt-8 pt-8 border-t border-white/10">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                  <div>
                    <div className="text-lg font-bold text-white mb-1">24/7 Support</div>
                    <div className="text-sm text-gray-400">Round-the-clock assistance</div>
                  </div>
                  <div>
                    <div className="text-lg font-bold text-white mb-1">Free Consultation</div>
                    <div className="text-sm text-gray-400">No obligation project review</div>
                  </div>
                  <div>
                    <div className="text-lg font-bold text-white mb-1">Quick Response</div>
                    <div className="text-sm text-gray-400">Reply within 1 hour</div>
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
      `}</style>
    </div>
  );
};

export default FAQPage;