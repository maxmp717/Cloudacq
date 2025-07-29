import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Star, Quote, Award, TrendingUp, Users, CheckCircle, ArrowLeft, ArrowRight } from 'lucide-react';

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

const testimonials = [
  {
    id: '1',
    name: 'Sarah Johnson',
    position: 'Marketing Director',
    company: 'GrowthWave',
    avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    content: 'Cloudacq transformed our online presence completely. Their team was professional, responsive, and delivered beyond our expectations. Our new website has increased our lead generation by 150% within just two months.',
    rating: 5,
    gradient: 'from-blue-500 to-cyan-500',
    project: 'Website Redesign',
    result: '150% Lead Increase',
    duration: '2 months'
  },
  {
    id: '2',
    name: 'Michael Chen',
    position: 'CEO',
    company: 'InnovateTech',
    avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    content: 'Working with Cloudacq was a game-changer for our startup. They understood our vision perfectly and created an application that our users love. Their technical expertise and attention to detail are unmatched.',
    rating: 5,
    gradient: 'from-emerald-500 to-teal-500',
    project: 'Mobile App Development',
    result: '4.9★ App Store Rating',
    duration: '3 months'
  },
  {
    id: '3',
    name: 'Emily Rodriguez',
    position: 'E-commerce Manager',
    company: 'StyleShop',
    avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    content: 'Our e-commerce platform has seen a 75% increase in conversions since Cloudacq rebuilt it. The user experience is seamless, and the backend system is incredibly easy to manage. I highly recommend their services!',
    rating: 5,
    gradient: 'from-purple-500 to-pink-500',
    project: 'E-commerce Platform',
    result: '75% Conversion Boost',
    duration: '4 months'
  },
  {
    id: '4',
    name: 'David Kim',
    position: 'CTO',
    company: 'DataFlow Solutions',
    avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    content: 'The custom dashboard Cloudacq built for us has revolutionized how we handle data analytics. The real-time insights and intuitive interface have made our team 3x more productive. Outstanding work!',
    rating: 5,
    gradient: 'from-orange-500 to-red-500',
    project: 'Analytics Dashboard',
    result: '3x Productivity Gain',
    duration: '6 weeks'
  },
  {
    id: '5',
    name: 'Lisa Thompson',
    position: 'Operations Director',
    company: 'HealthCare Plus',
    avatar: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    content: 'Cloudacq delivered a patient management system that exceeded all our requirements. The security, usability, and integration with our existing systems were flawless. Our patient satisfaction scores have improved dramatically.',
    rating: 5,
    gradient: 'from-indigo-500 to-purple-500',
    project: 'Healthcare Portal',
    result: '40% Better Patient Experience',
    duration: '5 months'
  },
  {
    id: '6',
    name: 'Robert Garcia',
    position: 'Marketing Head',
    company: 'Real Estate Pro',
    avatar: 'https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    content: 'The property listing platform Cloudacq created has transformed our business. With virtual tours and advanced search features, we\'ve seen a 200% increase in qualified leads. Exceptional quality and support!',
    rating: 5,
    gradient: 'from-violet-500 to-purple-500',
    project: 'Real Estate Platform',
    result: '200% More Qualified Leads',
    duration: '7 weeks'
  }
];

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  
  // Check if screen is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  
  // Calculate visible testimonials based on screen size
  const cardsToShow = isMobile ? 1 : 3;
  const maxSlides = testimonials.length - cardsToShow;
  const visibleTestimonials = testimonials.slice(currentSlide, currentSlide + cardsToShow);
  
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % (maxSlides + 1));
  };
  
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + maxSlides + 1) % (maxSlides + 1));
  };

  return (
    <div className="relative bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20 overflow-hidden">
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
              ✨ Client Testimonials
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
              What Our Clients
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Say About Us
            </span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            Hear from businesses that have transformed their digital presence with our expert solutions
          </motion.p>
        </div>

        {/* Testimonials Grid - Responsive layout */}
        <div className={`grid gap-8 mb-16 ${isMobile ? 'grid-cols-1' : 'grid-cols-1 md:grid-cols-3'}`}>
          {visibleTestimonials.map((testimonial, index) => {
            const isHovered = hoveredCard === testimonial.id;
            
            return (
              <motion.div
                key={`${testimonial.id}-${currentSlide}`}
                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`group relative cursor-pointer transition-all duration-500 ${
                  isHovered ? 'scale-105 -translate-y-2' : ''
                }`}
                onMouseEnter={() => setHoveredCard(testimonial.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Main Card */}
                <div className="relative h-full bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 overflow-hidden">
                  {/* Card Glow Effect */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${testimonial.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-xl`} />
                  
                  {/* Quote Icon */}
                  <div className="absolute top-4 right-4 opacity-20">
                    <Quote className="w-12 h-12 text-white transform rotate-180" />
                  </div>

                  {/* Rating Stars */}
                  <div className="flex mb-6 relative z-10">
                    {[...Array(5)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: 0.5 + i * 0.1 }}
                      >
                        <Star
                          size={20}
                          fill={i < testimonial.rating ? 'currentColor' : 'none'}
                          className={`${
                            i < testimonial.rating 
                              ? `text-yellow-400 drop-shadow-lg` 
                              : 'text-gray-500'
                          } transition-all duration-300 hover:scale-110`}
                        />
                      </motion.div>
                    ))}
                  </div>
                  
                  {/* Content */}
                  <div className="relative z-10 mb-6">
                    <p className="text-gray-300 italic leading-relaxed text-sm group-hover:text-white transition-colors duration-300">
                      "{testimonial.content}"
                    </p>
                  </div>

                  {/* Project Info */}
                  <div className="relative z-10 mb-6">
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div className="bg-white/10 rounded-lg p-3 backdrop-blur-sm border border-white/10">
                        <p className="text-gray-400 text-xs mb-1">Project</p>
                        <p className="text-white font-semibold">{testimonial.project}</p>
                      </div>
                      <div className="bg-white/10 rounded-lg p-3 backdrop-blur-sm border border-white/10">
                        <p className="text-gray-400 text-xs mb-1">Duration</p>
                        <p className="text-white font-semibold">{testimonial.duration}</p>
                      </div>
                    </div>
                    
                    {/* Result Badge */}
                    <div className={`mt-4 p-3 rounded-lg bg-gradient-to-r ${testimonial.gradient} bg-opacity-20 border border-white/20`}>
                      <div className="flex items-center">
                        <TrendingUp className="w-4 h-4 text-green-400 mr-2" />
                        <span className="text-white font-semibold text-sm">{testimonial.result}</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Client Info */}
                  <div className="relative z-10 flex items-center">
                    <div className="relative">
                      <img
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        className="w-14 h-14 rounded-full object-cover border-2 border-white/30 group-hover:border-white/60 transition-colors duration-300"
                      />
                      {/* Online Status Indicator */}
                      <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-slate-900 animate-pulse"></div>
                    </div>
                    <div className="ml-4 flex-1">
                      <h4 className={`font-bold mb-1 bg-gradient-to-r ${testimonial.gradient} bg-clip-text text-transparent`}>
                        {testimonial.name}
                      </h4>
                      <p className="text-gray-400 text-sm">
                        {testimonial.position}
                      </p>
                      <p className="text-gray-500 text-xs">
                        {testimonial.company}
                      </p>
                    </div>
                    
                    {/* Verified Badge */}
                    <div className="ml-2">
                      <div className={`w-8 h-8 rounded-full bg-gradient-to-r ${testimonial.gradient} flex items-center justify-center`}>
                        <CheckCircle className="w-4 h-4 text-white" />
                      </div>
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
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-center gap-4 mb-6">
          <button
            onClick={prevSlide}
            className="p-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white hover:bg-white/20 transition-all duration-300 hover:scale-110"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <button
            onClick={nextSlide}
            className="p-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white hover:bg-white/20 transition-all duration-300 hover:scale-110"
          >
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>

        {/* Slide Indicators */}
        {/* <div className="flex justify-center gap-2 mt-8">
          {Array.from({ length: maxSlides + 1 }, (_, i) => (
            <button
              key={i}
              onClick={() => setCurrentSlide(i)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentSlide === i 
                  ? 'bg-gradient-to-r from-blue-500 to-purple-500 scale-125' 
                  : 'bg-white/30 hover:bg-white/50'
              }`}
            />
          ))}
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

export default Testimonials;