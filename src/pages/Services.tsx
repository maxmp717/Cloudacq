import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Code, Smartphone, Palette, Database, BarChart, Bot, CheckCircle, ArrowRight, Search,
  ShoppingCart, Globe, Server, Shield, Zap, Users, Settings, FileText, Briefcase,
  TrendingUp, Target, PenTool, Monitor, Cloud, Lock, Gauge, Star, Clock, ChevronDown
} from 'lucide-react';
import ScrollToTop from '../components/ui/ScrollToTop';

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

// Comprehensive services data with glassmorphism styling
const services = [
  {
    id: 'web-development',
    title: 'Custom Web Development',
    description: 'Modern, responsive websites and web applications built with cutting-edge technologies for optimal performance, scalability, and user experience.',
    icon: Code,
    category: 'Web Development',
    gradient: 'from-blue-500 via-purple-500 to-pink-500',
    features: [
      'Responsive web design',
      'Frontend & backend development',
      'Progressive Web Apps (PWA)',
      'API development & integration',
      'Performance optimization',
      'Cross-browser compatibility',
      'SEO-friendly architecture',
      'Accessibility compliance (WCAG)'
    ],
    technologies: ['React', 'Node.js', 'MongoDB', 'AWS']
  },
  {
    id: 'ecommerce-development',
    title: 'E-commerce Solutions',
    description: 'Complete online stores with secure payment processing, inventory management, and powerful features to drive sales and conversions.',
    icon: ShoppingCart,
    category: 'Web Development',
    gradient: 'from-green-500 via-teal-500 to-blue-500',
    features: [
      'Custom shopping cart development',
      'Payment gateway integration',
      'Inventory management systems',
      'Order tracking & management',
      'Multi-vendor marketplace',
      'Subscription & recurring billing',
      'Product catalog management',
      'Sales analytics & reporting'
    ],
    technologies: ['Shopify', 'WooCommerce', 'Stripe', 'PayPal']
  },
  {
    id: 'cms-development',
    title: 'CMS Development',
    description: 'Content management systems that empower you to easily update and manage your website content without technical expertise.',
    icon: FileText,
    category: 'Web Development',
    gradient: 'from-orange-500 via-red-500 to-pink-500',
    features: [
      'WordPress development',
      'Custom CMS solutions',
      'Headless CMS implementation',
      'Content workflow management',
      'Multi-language support',
      'User role management',
      'SEO optimization tools',
      'Media management systems'
    ],
    technologies: ['WordPress', 'Strapi', 'Contentful', 'Sanity']
  },
  {
    id: 'mobile-app-development',
    title: 'Mobile App Development',
    description: 'Native and cross-platform mobile applications that deliver exceptional user experiences across iOS and Android devices.',
    icon: Smartphone,
    category: 'Mobile & Apps',
    gradient: 'from-purple-500 via-indigo-500 to-blue-600',
    features: [
      'iOS & Android native apps',
      'React Native development',
      'Flutter development',
      'App Store optimization',
      'Push notification systems',
      'Offline functionality',
      'In-app purchases',
      'Real-time synchronization'
    ],
    technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin']
  },
  {
    id: 'progressive-web-apps',
    title: 'Progressive Web Apps',
    description: 'Fast, reliable web applications that work offline and provide native app-like experiences across all devices.',
    icon: Globe,
    category: 'Mobile & Apps',
    gradient: 'from-cyan-500 via-blue-500 to-purple-600',
    features: [
      'Offline functionality',
      'Push notifications',
      'App-like interface',
      'Fast loading speeds',
      'Cross-platform compatibility',
      'Automatic updates',
      'Background sync',
      'Installation prompts'
    ],
    technologies: ['PWA', 'Service Workers', 'Manifest', 'IndexedDB']
  },
  {
    id: 'ui-ux-design',
    title: 'UI/UX Design',
    description: 'User-centered design solutions that create intuitive, engaging, and accessible digital experiences that convert visitors into customers.',
    icon: Palette,
    category: 'Design & Branding',
    gradient: 'from-pink-500 via-red-500 to-orange-500',
    features: [
      'User research & personas',
      'Information architecture',
      'Wireframing & prototyping',
      'Visual design systems',
      'Usability testing',
      'Interaction design',
      'Mobile-first design',
      'Conversion optimization'
    ],
    technologies: ['Figma', 'Adobe XD', 'Sketch', 'Principle']
  },
  {
    id: 'graphic-design',
    title: 'Graphic Design',
    description: 'Professional graphic design services including logos, branding materials, marketing collateral, and digital assets.',
    icon: PenTool,
    category: 'Design & Branding',
    gradient: 'from-yellow-500 via-orange-500 to-red-500',
    features: [
      'Logo design & branding',
      'Print design materials',
      'Digital marketing graphics',
      'Social media assets',
      'Infographic design',
      'Packaging design',
      'Brand guidelines',
      'Marketing collateral'
    ],
    technologies: ['Adobe Creative Suite', 'Illustrator', 'Photoshop', 'InDesign']
  },
  {
    id: 'branding',
    title: 'Brand Identity',
    description: 'Comprehensive branding solutions that establish strong brand identity and create lasting impressions in your target market.',
    icon: Target,
    category: 'Design & Branding',
    gradient: 'from-indigo-500 via-purple-500 to-pink-500',
    features: [
      'Brand strategy development',
      'Logo & visual identity',
      'Brand guidelines creation',
      'Color palette & typography',
      'Brand voice & messaging',
      'Marketing material design',
      'Digital brand assets',
      'Brand consistency audits'
    ],
    technologies: ['Brand Strategy', 'Logo Design', 'Guidelines', 'Typography']
  },
  {
    id: 'cloud-solutions',
    title: 'Cloud Solutions',
    description: 'Scalable cloud infrastructure and migration services using AWS, Azure, and Google Cloud for enhanced performance and reliability.',
    icon: Cloud,
    category: 'Cloud & Infrastructure',
    gradient: 'from-blue-600 via-indigo-600 to-purple-700',
    features: [
      'Cloud migration strategy',
      'AWS & Azure deployment',
      'Serverless architecture',
      'Auto-scaling solutions',
      'Load balancing',
      'Disaster recovery planning',
      'Cost optimization',
      'Multi-region deployment'
    ],
    technologies: ['AWS', 'Azure', 'Docker', 'Kubernetes']
  },
  {
    id: 'devops',
    title: 'DevOps & CI/CD',
    description: 'Streamlined development workflows with continuous integration, automated testing, and deployment pipelines for faster releases.',
    icon: Settings,
    category: 'Cloud & Infrastructure',
    gradient: 'from-emerald-500 via-teal-500 to-cyan-500',
    features: [
      'CI/CD pipeline setup',
      'Automated testing',
      'Infrastructure as Code',
      'Container orchestration',
      'Monitoring & logging',
      'Security integration',
      'Performance monitoring',
      'Release automation'
    ],
    technologies: ['Jenkins', 'GitLab CI', 'Docker', 'Terraform']
  },
  {
    id: 'web-hosting',
    title: 'Managed Web Hosting',
    description: 'Reliable, secure, and high-performance web hosting solutions with 24/7 monitoring and expert technical support.',
    icon: Server,
    category: 'Cloud & Infrastructure',
    gradient: 'from-slate-500 via-gray-600 to-zinc-700',
    features: [
      'High-performance servers',
      'SSL certificates included',
      '24/7 monitoring & support',
      'Daily backups',
      'CDN integration',
      'Database optimization',
      'Security hardening',
      'Scalable resources'
    ],
    technologies: ['Linux', 'Nginx', 'Apache', 'CloudFlare']
  },
  {
    id: 'seo-services',
    title: 'SEO Services',
    description: 'Comprehensive search engine optimization strategies to improve rankings, increase organic traffic, and drive qualified leads.',
    icon: Search,
    category: 'Digital Marketing',
    gradient: 'from-green-600 via-emerald-600 to-teal-600',
    features: [
      'Technical SEO audits',
      'Keyword research & strategy',
      'On-page optimization',
      'Content optimization',
      'Link building campaigns',
      'Local SEO optimization',
      'Competitor analysis',
      'Performance tracking'
    ],
    technologies: ['Google Analytics', 'SEMrush', 'Ahrefs', 'Search Console']
  },
  {
    id: 'digital-marketing',
    title: 'Digital Marketing',
    description: 'Full-service digital marketing including PPC, social media, content marketing, and email campaigns to grow your business.',
    icon: TrendingUp,
    category: 'Digital Marketing',
    gradient: 'from-rose-500 via-pink-500 to-fuchsia-500',
    features: [
      'PPC campaign management',
      'Social media marketing',
      'Content marketing strategy',
      'Email marketing automation',
      'Marketing automation',
      'Lead generation campaigns',
      'Conversion optimization',
      'ROI tracking & reporting'
    ],
    technologies: ['Google Ads', 'Facebook Ads', 'HubSpot', 'Mailchimp']
  },
  {
    id: 'analytics-insights',
    title: 'Analytics & Insights',
    description: 'Advanced analytics solutions and business intelligence tools to measure performance and make data-driven decisions.',
    icon: BarChart,
    category: 'Analytics & AI',
    gradient: 'from-amber-500 via-yellow-500 to-orange-500',
    features: [
      'Custom analytics dashboards',
      'Google Analytics setup',
      'Conversion tracking',
      'A/B testing implementation',
      'User behavior analysis',
      'Performance monitoring',
      'ROI measurement',
      'Predictive analytics'
    ],
    technologies: ['Google Analytics', 'Mixpanel', 'Tableau', 'Power BI']
  },
  {
    id: 'ai-chatbot-development',
    title: 'AI Chatbot Development',
    description: 'Intelligent chatbot solutions powered by AI and machine learning to enhance customer support and automate interactions.',
    icon: Bot,
    category: 'Analytics & AI',
    gradient: 'from-violet-500 via-purple-500 to-indigo-500',
    features: [
      'Natural language processing',
      'Multi-platform integration',
      'Custom AI training',
      'Automated customer support',
      'Sentiment analysis',
      'Live chat handoff',
      'Analytics & insights',
      'Continuous learning algorithms'
    ],
    technologies: ['OpenAI', 'Dialogflow', 'TensorFlow', 'Python']
  }
];

const Services = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [activeService, setActiveService] = useState(null);
  const [hoveredCard, setHoveredCard] = useState(null);
  
  const categories = [
    'All',
    'Web Development',
    'Mobile & Apps',
    'Design & Branding',
    'Cloud & Infrastructure',
    'Digital Marketing',
    'Analytics & AI'
  ];
  
  const filteredServices = activeCategory === 'All'
    ? services
    : services.filter(service => service.category === activeCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-x-hidden">
      {/* Floating Particles Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(30)].map((_, i) => (
          <FloatingParticle key={i} delay={i * 0.3} />
        ))}
      </div>

      {/* Animated Background Gradient */}
      <div className="absolute inset-0 opacity-30 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-r from-pink-500 to-yellow-500 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full blur-3xl animate-pulse" style={{animationDelay: '4s'}} />
      </div>

      {/* Hero Section */}
      <section className="relative z-10 pt-24 md:pt-32 ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent leading-tight"
            >
              Professional <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Digital Services</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg sm:text-xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed"
            >
              Transform your business with our comprehensive web development, mobile app development, UI/UX design, 
              SEO services, and digital marketing solutions. We deliver cutting-edge technology solutions that drive growth.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <button className="px-6 sm:px-8 py-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white font-bold rounded-full text-lg hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-2xl flex items-center justify-center">
                Get Free Consultation<ArrowRight className="ml-2 w-5 h-5" />
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="relative z-10 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filter */}
          {/* <div className="flex flex-wrap justify-center gap-3 mb-12 overflow-x-auto">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`flex-shrink-0 px-4 sm:px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 backdrop-blur-md border ${
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
<div className="flex justify-start gap-3 mb-12 overflow-x-auto pb-2 px-4 sm:px-0 sm:justify-center sm:flex-wrap sm:overflow-x-visible">
  {categories.map((category) => (
    <button
      key={category}
      onClick={() => setActiveCategory(category)}
      className={`flex-shrink-0 px-4 sm:px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 backdrop-blur-md border ${
        activeCategory === category
          ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg border-transparent'
          : 'bg-white/10 text-gray-300 hover:bg-white/20 border-white/20'
      }`}
    >
      {category}
    </button>
  ))}
</div>
          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-16">
            {filteredServices.map((service, index) => {
              const IconComponent = service.icon;
              const isHovered = hoveredCard === service.id;
              
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  layout
                  className={`group relative cursor-pointer transition-all duration-500 transform ${
                    isHovered ? 'scale-105 -translate-y-2' : ''
                  } ${activeService?.id === service.id ? 'ring-2 ring-blue-400' : ''}`}
                  onMouseEnter={() => setHoveredCard(service.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                  onClick={() => setActiveService(service)}
                >
                  {/* Glassmorphism Card */}
                  <div className="relative h-full bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 overflow-hidden">
                    {/* Card Glow Effect */}
                    <div className={`absolute inset-0 bg-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-xl`} />
                    
                    {/* Category Badge */}
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs text-gray-300 border border-white/20">
                        {service.category}
                      </span>
                    </div>

                    {/* Animated Icon */}
                    <div className="relative mb-6">
                      <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${service.gradient} p-3 transform transition-all duration-500 ${
                        isHovered ? 'rotate-12 scale-110' : ''
                      }`}>
                        <IconComponent className="w-full h-full text-white" />
                      </div>
                    </div>

                    {/* Title with Gradient */}
                    <h3 className={`text-xl font-bold mb-3 bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent`}>
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-300 mb-6 text-sm leading-relaxed">
                      {service.description}
                    </p>

                    {/* Technology Tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {service.technologies?.slice(0, 3).map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-2 py-1 bg-white/10 backdrop-blur-sm rounded-full text-xs text-gray-300 border border-white/20"
                        >
                          {tech}
                        </span>
                      ))}
                      {service.technologies?.length > 3 && (
                        <span className="px-2 py-1 bg-white/10 backdrop-blur-sm rounded-full text-xs text-gray-400 border border-white/20">
                          +{service.technologies.length - 3}
                        </span>
                      )}
                    </div>

                    {/* Features Preview */}
                    <div className="space-y-2 mb-6">
                      {service.features.slice(0, 3).map((feature, i) => (
                        <div key={i} className="flex items-center text-sm">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          <span className="text-gray-300">{feature}</span>
                        </div>
                      ))}
                      {service.features.length > 3 && (
                        <div className="text-sm text-blue-400 font-medium">
                          +{service.features.length - 3} more features
                        </div>
                      )}
                    </div>

                    {/* CTA Button */}
                    <button
                      className={`w-full py-3 px-4 rounded-xl bg-gradient-to-r ${service.gradient} text-white font-semibold transition-all duration-300 transform ${
                        isHovered ? 'scale-105 shadow-lg' : ''
                      } hover:shadow-2xl group flex items-center justify-center`}
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                    </button>

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
          </div>

          {/* Active Service Details */}
          {activeService && (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              transition={{ duration: 0.5 }}
              className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 sm:p-8 relative overflow-hidden"
            >
              <div className={`absolute inset-0 bg-gradient-to-r ${activeService.gradient} opacity-10`} />
              
              <div className="relative z-10">
                <div className="flex flex-col lg:flex-row gap-8">
                  {/* Left Side - Service Info */}
                  <div className="flex-1">
                    <div className="flex items-center mb-6">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${activeService.gradient} p-2 mr-4`}>
                        <activeService.icon className="w-full h-full text-white" />
                      </div>
                      <h3 className={`text-2xl sm:text-3xl font-bold bg-gradient-to-r ${activeService.gradient} bg-clip-text text-transparent`}>
                        {activeService.title}
                      </h3>
                    </div>

                    <p className="text-gray-300 text-base sm:text-lg leading-relaxed mb-6">
                      {activeService.description}
                    </p>

                    <div className="grid grid-cols-1 gap-6 mb-8">
                      <div className="text-center p-4 bg-white/5 rounded-xl border border-white/10">
                        <Zap className="w-8 h-8 text-purple-400 mx-auto mb-2" />
                        <p className="text-white font-semibold">Professional Service</p>
                        <p className="text-gray-400 text-sm">Quality Guaranteed</p>
                      </div>
                    </div>
                  </div>

                  {/* Right Side - Features & Technologies */}
                  <div className="flex-1">
                    <h4 className="text-xl font-semibold text-white mb-4">Key Features</h4>
                    <div className="space-y-3 mb-8">
                      {activeService.features.map((feature, index) => (
                        <div key={index} className="flex items-center">
                          <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                          <span className="text-gray-300 text-sm sm:text-base">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <h4 className="text-xl font-semibold text-white mb-4">Technologies</h4>
                    <div className="flex flex-wrap gap-3 mb-8">
                      {activeService.technologies?.map((tech, index) => (
                        <span
                          key={index}
                          className={`px-4 py-2 bg-gradient-to-r ${activeService.gradient} bg-opacity-20 backdrop-blur-sm rounded-full text-white border border-white/20 hover:scale-105 transition-transform duration-200`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4">
                      <button className={`flex-1 py-3 px-6 rounded-xl bg-gradient-to-r ${activeService.gradient} text-white font-semibold hover:scale-105 transition-transform duration-200 flex items-center justify-center`}>
                        <Zap className="w-5 h-5 mr-2" />
                        Get Started
                      </button>
                      <button className="px-6 py-3 rounded-xl border border-white/20 text-white hover:bg-white/10 transition-colors duration-200">
                        View Portfolio
                      </button>
                    </div>
                  </div>
                </div>

                {/* Close Button */}
                <button
                  onClick={() => setActiveService(null)}
                  className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/10 border border-white/20 text-white hover:bg-white/20 transition-colors duration-200 flex items-center justify-center"
                >
                  ×
                </button>
              </div>
            </motion.div>
          )}
        </div>
      </section>

      {/* Process Section */}
      <section className="relative z-10 py-20">
        <WaveAnimation position="top" inverted={true} className="-mt-1" />
        
        <div className="bg-white/5 backdrop-blur-sm py-20 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent">
                Our Proven Process
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
                We follow a collaborative, results-driven approach to ensure your project's success
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              {[
                { 
                  number: '01', 
                  title: 'Discovery & Strategy', 
                  description: 'We analyze your business goals, target audience, and technical requirements to create a comprehensive project strategy.',
                  gradient: 'from-blue-500 to-purple-500'
                },
                { 
                  number: '02', 
                  title: 'Design & Planning', 
                  description: 'Our design team creates wireframes, prototypes, and visual designs while planning the technical architecture.',
                  gradient: 'from-purple-500 to-pink-500'
                },
                { 
                  number: '03', 
                  title: 'Development & Testing', 
                  description: 'We build your solution using best practices, conduct thorough testing, and ensure quality at every step.',
                  gradient: 'from-pink-500 to-orange-500'
                },
                { 
                  number: '04', 
                  title: 'Launch & Optimization', 
                  description: 'After successful deployment, we provide ongoing support, monitoring, and optimization to ensure peak performance.',
                  gradient: 'from-orange-500 to-red-500'
                }
              ].map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative group"
                >
                  <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 h-full text-center hover:bg-white/15 transition-all duration-300">
                    <div className={`w-16 h-16 bg-gradient-to-r ${step.gradient} rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      {step.number}
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3">
                      {step.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
        
        <WaveAnimation />
      </section>

      {/* Technologies Section */}
      <section className="relative z-10 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent">
              Technologies We Use
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
              We work with modern, industry-leading technologies to deliver exceptional results
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-6">
            {[
              { name: 'React', gradient: 'from-blue-400 to-blue-600' },
              { name: 'Node.js', gradient: 'from-green-400 to-green-600' },
              { name: 'Python', gradient: 'from-yellow-400 to-yellow-600' },
              { name: 'AWS', gradient: 'from-orange-400 to-orange-600' },
              { name: 'MongoDB', gradient: 'from-green-500 to-green-700' },
              { name: 'PostgreSQL', gradient: 'from-blue-500 to-blue-700' },
              { name: 'Next.js', gradient: 'from-gray-600 to-gray-800' },
              { name: 'Vue.js', gradient: 'from-emerald-400 to-emerald-600' },
              { name: 'Laravel', gradient: 'from-red-400 to-red-600' },
              { name: 'Docker', gradient: 'from-cyan-400 to-cyan-600' },
              { name: 'Kubernetes', gradient: 'from-blue-600 to-indigo-600' },
              { name: 'TypeScript', gradient: 'from-blue-500 to-blue-700' }
            ].map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-xl hover:bg-white/15 transition-all duration-300 text-center group hover:scale-105"
              >
                <div className={`w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r ${tech.gradient} rounded-lg mx-auto mb-3 flex items-center justify-center group-hover:rotate-12 transition-transform duration-300`}>
                  <span className="text-white font-bold text-sm sm:text-lg">{tech.name.charAt(0)}</span>
                </div>
                <span className="font-medium text-white text-sm sm:text-base">{tech.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 sm:p-12 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20" />
            
            <div className="relative z-10">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent">
                Ready to Transform Your Business?
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Let's discuss your project and create something amazing together. 
                Get a free consultation and see how we can help you achieve your goals.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-6 sm:px-8 py-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white font-bold rounded-full text-lg hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-2xl">
                  Start Your Project
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
      `}</style>
          <ScrollToTop />
    </div>
  );
};

export default Services;