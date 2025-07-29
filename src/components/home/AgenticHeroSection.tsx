import React, { useState, useEffect, useRef } from 'react';
import { 
  Bot, 
  Brain, 
  BarChart3, 
  ArrowRight, 
  Sparkles, 
  Users, 
  Clock, 
  TrendingUp,
  MessageSquare,
  Zap,
  Shield,
  Target,
  Star,
  ChevronDown,
  Play,
  Pause
} from 'lucide-react';

const FloatingOrb = ({ delay, size, color, duration = 6 }) => {
  return (
    <div
      className={`absolute ${size} ${color} rounded-full blur-sm animate-pulse`}
      style={{
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        animationDelay: `${delay}s`,
        animationDuration: `${duration}s`,
        transform: `scale(${0.5 + Math.random() * 0.5})`,
      }}
    />
  );
};

const MorphingBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Dynamic Gradient Blobs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 rounded-full opacity-30 animate-pulse blur-3xl" style={{animationDuration: '4s'}} />
      <div className="absolute top-3/4 right-1/4 w-80 h-80 bg-gradient-to-r from-pink-400 via-purple-500 to-indigo-600 rounded-full opacity-25 animate-pulse blur-3xl" style={{animationDuration: '6s', animationDelay: '2s'}} />
      <div className="absolute top-1/2 left-3/4 w-72 h-72 bg-gradient-to-r from-emerald-400 via-teal-500 to-cyan-600 rounded-full opacity-20 animate-pulse blur-3xl" style={{animationDuration: '8s', animationDelay: '4s'}} />
      
      {/* Floating Orbs */}
      {[...Array(30)].map((_, i) => (
        <FloatingOrb 
          key={i} 
          delay={i * 0.4} 
          size={i % 4 === 0 ? 'w-4 h-4' : i % 3 === 0 ? 'w-3 h-3' : 'w-2 h-2'}
          color={i % 5 === 0 ? 'bg-cyan-400' : i % 3 === 0 ? 'bg-purple-400' : 'bg-pink-400'}
          duration={4 + Math.random() * 6}
        />
      ))}
    </div>
  );
};

const CounterAnimation = ({ end, duration = 2000, suffix = "" }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let startTime;
    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      setCount(Math.floor(progress * end));
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    
    requestAnimationFrame(animate);
  }, [isVisible, end, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
};

const services = [
  {
    id: 'agentic-chatbots',
    title: 'Agentic AI Chatbots',
    description: 'Revolutionary AI agents that don\'t just chat—they act, automate, and integrate seamlessly into your workflow. Experience the future of customer interaction.',
    icon: MessageSquare,
    gradient: 'from-cyan-400 via-blue-500 to-purple-600',
    accentColor: 'cyan',
    features: ['Autonomous Task Execution', 'Multi-Platform Integration', 'Predictive Responses', 'Real-time Learning'],
    stats: { projects: 150, satisfaction: 98, metric: 'Response Time', value: '0.3s' }
  },
  {
    id: 'custom-ai',
    title: 'Custom AI Solutions',
    description: 'Bespoke intelligence tailored to your unique challenges. From predictive analytics to automated decision-making, we craft AI that thinks like your business.',
    icon: Brain,
    gradient: 'from-purple-500 via-pink-500 to-red-500',
    accentColor: 'purple',
    features: ['Deep Learning Models', 'Behavioral Prediction', 'Adaptive Algorithms', 'Custom Integrations'],
    stats: { projects: 120, satisfaction: 96, metric: 'Accuracy', value: '99.2%' }
  },
  {
    id: 'ai-dashboards',
    title: 'Intelligent Dashboards',
    description: 'Data visualization that thinks ahead. Our AI-powered dashboards don\'t just show information—they predict trends, suggest actions, and automate insights.',
    icon: BarChart3,
    gradient: 'from-emerald-500 via-teal-500 to-blue-500',
    accentColor: 'emerald',
    features: ['Predictive Analytics', 'Auto-Generated Insights', 'Dynamic Visualizations', 'Smart Alerts'],
    stats: { projects: 200, satisfaction: 99, metric: 'Insights/Day', value: '2.4K' }
  }
];

const AgenticHeroSection = () => {
  const [activeService, setActiveService] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const interval = setInterval(() => {
      if (isPlaying) {
        setActiveService((prev) => (prev + 1) % services.length);
      }
    }, 4000);

    return () => clearInterval(interval);
  }, [isPlaying]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleContactRedirect = () => {
    // You can customize this based on your routing setup
    // For React Router: navigate('/contact')
    // For Next.js: router.push('/contact')
    // For simple redirect: window.location.href = '/contact'
    
    window.location.href = '/contact';
  };
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden">
      {/* Interactive Background */}
      <MorphingBackground />
      
      {/* Mouse-following Gradient */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(59, 130, 246, 0.3), transparent 50%)`
        }}
      />

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-6 py-20">
        
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-6 py-3 mb-8">
            <Sparkles className="w-5 h-5 text-cyan-400 mr-2" />
            <span className="text-white font-medium">Next-Generation AI Solutions</span>
          </div>
          
          <h2 className="text-4xl md:text-7xl font-black mb-8 leading-tight">
            <span className="bg-gradient-to-r from-white via-cyan-200 to-purple-200 bg-clip-text text-transparent">
              Build Your Own
            </span>
            <span className="block bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-pulse">
              Agentic Customer System
            </span>
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Transform customer interactions with autonomous AI agents that understand, reason, and act. 
            <span className="text-cyan-400 font-semibold"> Revolutionary intelligence</span> that works 24/7 
            to enhance satisfaction and accelerate growth.
          </p>
        </div>

        {/* Interactive Service Showcase */}
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 xl:gap-10">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              const isActive = activeService === index;
              
              return (
                <div
                  key={service.id}
                  className={`group relative cursor-pointer transition-all duration-700 transform ${
                    isActive ? 'scale-105' : 'hover:scale-102'
                  }`}
                  onClick={() => {
                    setActiveService(index);
                    setIsPlaying(false);
                    setTimeout(() => setIsPlaying(true), 8000);
                  }}
                >
                  {/* Card */}
                  <div className={`relative bg-white/5 backdrop-blur-md border-2 rounded-3xl p-6 xl:p-8 overflow-hidden transition-all duration-500 h-full ${
                    isActive 
                      ? 'border-cyan-400 bg-white/10 shadow-2xl shadow-cyan-500/20' 
                      : 'border-white/10 hover:border-white/20 hover:bg-white/8'
                  }`}>
                    
                    {/* Active Indicator */}
                    {isActive && (
                      <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${service.gradient}`} />
                    )}
                    
                    {/* Icon and Stats Row */}
                    <div className="flex items-start justify-between mb-6">
                      <div className={`w-14 h-14 xl:w-16 xl:h-16 rounded-2xl bg-gradient-to-r ${service.gradient} p-3 transition-all duration-500 ${
                        isActive ? 'rotate-6 scale-110' : 'group-hover:rotate-3'
                      }`}>
                        <IconComponent className="w-full h-full text-white" />
                      </div>
                      
                      <div className="text-right">
                        <div className="text-xl xl:text-2xl font-bold text-white">
                          <CounterAnimation end={service.stats.projects} suffix="+" />
                        </div>
                        <div className="text-gray-400 text-xs xl:text-sm">Projects</div>
                      </div>
                    </div>

                    {/* Content */}
                    <h3 className={`text-xl xl:text-2xl font-bold mb-4 bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent`}>
                      {service.title}
                    </h3>
                    
                    <p className="text-gray-300 mb-6 leading-relaxed text-sm xl:text-base">
                      {service.description}
                    </p>

                    {/* Features Grid */}
                    <div className="grid grid-cols-1 xl:grid-cols-2 gap-3 mb-6">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center text-xs xl:text-sm">
                          <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${service.gradient} mr-3 animate-pulse`} />
                          <span className="text-gray-300">{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* Performance Metrics */}
                    <div className="flex justify-between items-center pt-4 border-t border-white/10">
                      <div className="flex items-center space-x-4">
                        <div className="text-center">
                          <div className="text-white font-bold text-sm xl:text-base">
                            <CounterAnimation end={service.stats.satisfaction} suffix="%" />
                          </div>
                          <div className="text-gray-400 text-xs">Satisfaction</div>
                        </div>
                        <div className="text-center">
                          <div className="text-white font-bold text-sm xl:text-base">{service.stats.value}</div>
                          <div className="text-gray-400 text-xs">{service.stats.metric}</div>
                        </div>
                      </div>
                      
                      <ArrowRight className={`w-4 h-4 xl:w-5 xl:h-5 transition-all duration-300 ${
                        isActive ? 'text-cyan-400 translate-x-2' : 'text-gray-400 group-hover:translate-x-1'
                      }`} />
                    </div>

                    {/* Shimmer Effect */}
                    {isActive && (
                      <div className="absolute inset-0 rounded-3xl opacity-30"
                           style={{
                             background: `linear-gradient(45deg, transparent, rgba(255,255,255,0.1), transparent)`,
                             animation: 'shimmer 3s infinite'
                           }} 
                      />
                    )}
                  </div>
                </div>
              );
            })}
          </div>
          
          {/* Navigation Dots */}
          <div className="flex justify-center space-x-3 mt-8 xl:mt-12">
            {services.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setActiveService(index);
                  setIsPlaying(false);
                  setTimeout(() => setIsPlaying(true), 8000);
                }}
                className={`w-3 h-3 xl:w-4 xl:h-4 rounded-full transition-all duration-300 ${
                  activeService === index 
                    ? `bg-gradient-to-r ${services[index].gradient} scale-125` 
                    : 'bg-white/30 hover:bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-20">
          <div className="max-w-4xl mx-auto">
            {/* <h2 className="text-5xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your <br></br>
               <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Customer Experience?
              </span>
            </h2> */}
             <h2 className="text-4xl md:text-7xl font-black mb-8 leading-tight">
            <span className="bg-gradient-to-r from-white via-cyan-200 to-purple-200 bg-clip-text text-transparent">
              Ready to Transform Your
            </span>
            <span className="block bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-pulse">
              Customer Experience?
            </span>
          </h2>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
              <button 
                onClick={handleContactRedirect}
                className="group px-10 py-5 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 text-white font-bold rounded-full text-xl hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-blue-500/25 flex items-center"
              >
                <Zap className="w-6 h-6 mr-3" />
                Start Building Now
                <ArrowRight className="w-6 h-6 ml-3 transition-transform duration-300 group-hover:translate-x-2" />
              </button>
              
              {/* <button className="px-10 py-5 border-2 border-white/30 text-white font-semibold rounded-full text-xl hover:bg-white/10 transition-all duration-300 backdrop-blur-sm hover:scale-105 hover:border-white/50">
                Schedule Demo
              </button> */}
            </div>

            {/* Trust Indicators */}
            {/* <div className="flex justify-center items-center space-x-8 text-gray-400">
              <div className="flex items-center">
                <Star className="w-5 h-5 text-yellow-400 mr-2" />
                <span>4.9/5 Rating</span>
              </div>
              <div className="flex items-center">
                <Shield className="w-5 h-5 text-green-400 mr-2" />
                <span>Enterprise Security</span>
              </div>
              <div className="flex items-center">
                <Users className="w-5 h-5 text-blue-400 mr-2" />
                <span>500+ Companies</span>
              </div>
            </div> */}
          </div>
        </div>
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

export default AgenticHeroSection;