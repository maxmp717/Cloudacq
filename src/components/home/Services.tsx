import React, { useState, useEffect } from 'react';
import { Code, Smartphone, Palette, Database, BarChart, Bot, Star, Users, Clock, ArrowRight, CheckCircle, Zap } from 'lucide-react';

const services = [
  {
    id: 'web-development',
    title: 'Web Development',
    description: 'Custom websites and web applications built with modern technologies for optimal performance and scalability.',
    icon: Code,
    gradient: 'from-blue-500 via-purple-500 to-pink-500',
    features: [
      'Responsive design',
      'Frontend & backend development',
      'CMS integration',
      'Performance optimization'
    ],
    technologies: ['React', 'Node.js', 'MongoDB', 'AWS'],
    projects: 150,
    satisfaction: 98,
    timeline: '2-8 weeks',
    details: 'We create cutting-edge web applications using the latest technologies and best practices. Our development process ensures scalable, maintainable, and high-performance solutions that drive business growth.'
  },
  {
    id: 'mobile-apps',
    title: 'Mobile App Development',
    description: 'Native and cross-platform mobile applications that deliver seamless experiences across devices.',
    icon: Smartphone,
    gradient: 'from-green-500 via-teal-500 to-blue-500',
    features: [
      'iOS & Android apps',
      'React Native development',
      'App Store optimization',
      'Maintenance & support'
    ],
    technologies: ['React Native', 'Swift', 'Kotlin', 'Firebase'],
    projects: 89,
    satisfaction: 96,
    timeline: '3-12 weeks',
    details: 'From concept to app store, we deliver mobile experiences that users love. Our cross-platform expertise ensures your app reaches the widest audience while maintaining native performance.'
  },
  {
    id: 'ui-ux-design',
    title: 'UI/UX Design',
    description: 'User-centered design that creates intuitive, engaging, and accessible digital experiences.',
    icon: Palette,
    gradient: 'from-pink-500 via-red-500 to-orange-500',
    features: [
      'User research',
      'Wireframing & prototyping',
      'Visual design',
      'Usability testing'
    ],
    technologies: ['Figma', 'Adobe XD', 'Sketch', 'Principle'],
    projects: 200,
    satisfaction: 99,
    timeline: '1-6 weeks',
    details: 'We craft beautiful, intuitive interfaces that not only look stunning but drive conversions. Our design process is rooted in user research and data-driven decisions.'
  },
  {
    id: 'cloud-solutions',
    title: 'Cloud Solutions',
    description: 'Scalable cloud infrastructure and services that provide reliability, security, and performance.',
    icon: Database,
    gradient: 'from-purple-500 via-indigo-500 to-blue-600',
    features: [
      'Cloud migration',
      'AWS & Azure solutions',
      'DevOps automation',
      'Managed services'
    ],
    technologies: ['AWS', 'Azure', 'Docker', 'Kubernetes'],
    projects: 75,
    satisfaction: 97,
    timeline: '2-16 weeks',
    details: 'Migrate to the cloud with confidence. Our certified cloud architects design robust, scalable infrastructure that grows with your business while optimizing costs.'
  },
  {
    id: 'analytics',
    title: 'Analytics & Insights',
    description: 'Data-driven strategies to measure performance, track user behavior, and drive business decisions.',
    icon: BarChart,
    gradient: 'from-yellow-500 via-orange-500 to-red-500',
    features: [
      'Custom dashboards',
      'Performance monitoring',
      'User behavior analysis',
      'Conversion optimization'
    ],
    technologies: ['Google Analytics', 'Mixpanel', 'Tableau', 'Python'],
    projects: 120,
    satisfaction: 95,
    timeline: '1-8 weeks',
    details: 'Turn data into actionable insights. Our analytics solutions help you understand your users, optimize conversions, and make informed business decisions.'
  },
  {
    id: 'ai-chatbot',
    title: 'AI Chatbot Development',
    description: 'Intelligent chatbot solutions that enhance customer engagement and automate support processes.',
    icon: Bot,
    gradient: 'from-cyan-500 via-blue-500 to-purple-600',
    features: [
      'Natural language processing',
      'Multi-platform integration',
      'Custom AI training',
      'Automated responses'
    ],
    technologies: ['OpenAI', 'Dialogflow', 'TensorFlow', 'Python'],
    projects: 45,
    satisfaction: 94,
    timeline: '2-10 weeks',
    details: 'Enhance customer support with intelligent AI chatbots. Our solutions integrate seamlessly with your existing systems and learn from every interaction.'
  }
];

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

const Services = () => {
  const [activeService, setActiveService] = useState(null);
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20 px-4 relative overflow-hidden">
      {/* Floating Particles Background */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <FloatingParticle key={i} delay={i * 0.5} />
        ))}
      </div>

      {/* Animated Background Gradient */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-r from-pink-500 to-yellow-500 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}} />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent animate-pulse">
            Our Services
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            We provide end-to-end solutions to help businesses thrive in the digital landscape
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            const isHovered = hoveredCard === service.id;
            
            return (
              <div
                key={service.id}
                className={`group relative cursor-pointer transition-all duration-500 transform ${
                  isHovered ? 'scale-105 -translate-y-2' : ''
                } ${activeService?.id === service.id ? 'ring-2 ring-blue-400' : ''}`}
                onMouseEnter={() => setHoveredCard(service.id)}
                onMouseLeave={() => setHoveredCard(null)}
                onClick={() => setActiveService(service)}
                style={{
                  animationDelay: `${index * 0.1}s`
                }}
              >
                {/* Glassmorphism Card */}
                <div className="relative h-full bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 overflow-hidden">
                  {/* Card Glow Effect */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-xl`} />
                  
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
                    {service.technologies.slice(0, 3).map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-white/10 backdrop-blur-sm rounded-full text-xs text-gray-300 border border-white/20"
                      >
                        {tech}
                      </span>
                    ))}
                    {service.technologies.length > 3 && (
                      <span className="px-2 py-1 bg-white/10 backdrop-blur-sm rounded-full text-xs text-gray-400 border border-white/20">
                        +{service.technologies.length - 3}
                      </span>
                    )}
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="text-center">
                      <div className="flex items-center justify-center mb-1">
                        <Star className="w-4 h-4 text-yellow-400 mr-1" />
                        <span className="text-white font-semibold">{service.satisfaction}%</span>
                      </div>
                      <p className="text-xs text-gray-400">Satisfaction</p>
                    </div>
                    <div className="text-center">
                      <div className="flex items-center justify-center mb-1">
                        <Users className="w-4 h-4 text-blue-400 mr-1" />
                        <span className="text-white font-semibold">{service.projects}</span>
                      </div>
                      <p className="text-xs text-gray-400">Projects</p>
                    </div>
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
              </div>
            );
          })}
        </div>

        {/* Active Service Details */}
        {activeService && (
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 relative overflow-hidden animate-in slide-in-from-bottom duration-500">
            <div className={`absolute inset-0 bg-gradient-to-r ${activeService.gradient} opacity-10`} />
            
            <div className="relative z-10">
              <div className="flex flex-col lg:flex-row gap-8">
                {/* Left Side - Service Info */}
                <div className="flex-1">
                  <div className="flex items-center mb-6">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${activeService.gradient} p-2 mr-4`}>
                      <activeService.icon className="w-full h-full text-white" />
                    </div>
                    <h3 className={`text-3xl font-bold bg-gradient-to-r ${activeService.gradient} bg-clip-text text-transparent`}>
                      {activeService.title}
                    </h3>
                  </div>

                  <p className="text-gray-300 text-lg leading-relaxed mb-6">
                    {activeService.details}
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    <div className="text-center p-4 bg-white/5 rounded-xl border border-white/10">
                      <Clock className="w-8 h-8 text-blue-400 mx-auto mb-2" />
                      <p className="text-white font-semibold">{activeService.timeline}</p>
                      <p className="text-gray-400 text-sm">Timeline</p>
                    </div>
                    <div className="text-center p-4 bg-white/5 rounded-xl border border-white/10">
                      <Users className="w-8 h-8 text-green-400 mx-auto mb-2" />
                      <p className="text-white font-semibold">{activeService.projects}</p>
                      <p className="text-gray-400 text-sm">Projects</p>
                    </div>
                    <div className="text-center p-4 bg-white/5 rounded-xl border border-white/10">
                      <Star className="w-8 h-8 text-yellow-400 mx-auto mb-2" />
                      <p className="text-white font-semibold">{activeService.satisfaction}%</p>
                      <p className="text-gray-400 text-sm">Satisfaction</p>
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
                        <span className="text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <h4 className="text-xl font-semibold text-white mb-4">Technologies</h4>
                  <div className="flex flex-wrap gap-3 mb-8">
                    {activeService.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className={`px-4 py-2 bg-gradient-to-r ${activeService.gradient} bg-opacity-20 backdrop-blur-sm rounded-full text-white border border-white/20 hover:scale-105 transition-transform duration-200`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4">
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
          </div>
        )}

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <button className="px-8 py-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white font-bold rounded-full text-lg hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-2xl">
            View All Services
          </button>
        </div>
      </div>

      <style jsx>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        
        @keyframes animate-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-in {
          animation: animate-in 0.5s ease-out;
        }
        
        .slide-in-from-bottom {
          animation: slide-in-from-bottom 0.5s ease-out;
        }
        
        @keyframes slide-in-from-bottom {
          from {
            opacity: 0;
            transform: translateY(50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default Services;