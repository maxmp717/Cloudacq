import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, MessageSquare, Phone, Mail, Calendar, Zap, Users, Award, Globe, Star, CheckCircle } from 'lucide-react';

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

const ContactCTA = () => {
  return (
    <div className="relative bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20 overflow-hidden">
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
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-br from-white/20 via-white/10 to-white/5 backdrop-blur-xl border border-white/30 rounded-3xl overflow-hidden shadow-2xl relative group hover:from-white/25 hover:via-white/15 hover:to-white/10 transition-all duration-700"
        >
          {/* Enhanced Background Effects */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/30 via-purple-600/30 to-pink-600/30 animate-pulse" />
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full blur-2xl animate-bounce" style={{animationDuration: '3s'}} />
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full blur-2xl animate-bounce" style={{animationDuration: '4s', animationDelay: '1s'}} />
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-full blur-2xl animate-bounce" style={{animationDuration: '3.5s', animationDelay: '2s'}} />
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-gradient-to-r from-orange-400 to-red-500 rounded-full blur-2xl animate-bounce" style={{animationDuration: '4.5s', animationDelay: '0.5s'}} />
          </div>
          
          {/* Floating Particles inside card */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="absolute w-3 h-3 bg-gradient-to-r from-white to-blue-200 rounded-full opacity-30 animate-float"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${i * 0.5}s`,
                  animationDuration: `${4 + Math.random() * 3}s`
                }}
              />
            ))}
          </div>
          
          <div className="relative z-10 p-8 md:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
              {/* Content Section */}
              <div className="lg:col-span-3">
                {/* Badge */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="inline-block mb-6"
                >
                  <span className="px-6 py-3 text-sm font-semibold bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-md border border-white/20 text-blue-200 rounded-full">
                    ✨ Let's Work Together
                  </span>
                </motion.div>

                {/* Main Heading */}
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-4xl md:text-5xl font-bold mb-6 leading-tight"
                >
                  <span className="bg-gradient-to-r from-white via-blue-200 to-white bg-clip-text text-transparent">
                    Ready to Transform Your
                  </span>
                  <br />
                  <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-pulse">
                    Digital Presence?
                  </span>
                </motion.h2>

                {/* Description */}
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="text-gray-300 text-lg md:text-xl mb-8 leading-relaxed"
                >
                  Contact us today to discuss your project and discover how our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 font-semibold">expertise</span> can help you achieve your goals and drive real business results.
                </motion.p>

                {/* Features List */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8"
                >
                  {[
                    { icon: CheckCircle, text: 'Free Consultation', color: 'text-green-400' },
                    { icon: Zap, text: 'Quick Response Time', color: 'text-yellow-400' },
                    { icon: Award, text: 'Expert Team', color: 'text-purple-400' },
                    { icon: Globe, text: 'Global Experience', color: 'text-blue-400' }
                  ].map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                      className="flex items-center"
                    >
                      <feature.icon className={`w-5 h-5 ${feature.color} mr-3`} />
                      <span className="text-gray-300">{feature.text}</span>
                    </motion.div>
                  ))}
                </motion.div>

                {/* CTA Buttons */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  className="flex flex-col sm:flex-row gap-4"
                >
                  <button className="group/btn relative px-8 py-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white font-bold rounded-2xl text-lg overflow-hidden transform hover:scale-110 transition-all duration-500 shadow-2xl hover:shadow-purple-500/50">
                    <span className="relative z-10 flex items-center justify-center">
                      🚀 Get Started
                      <ArrowRight className="ml-3 w-5 h-5 group-hover/btn:translate-x-2 transition-transform duration-300" />
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500" />
                    <div className="absolute inset-0 bg-white/20 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500 animate-pulse" />
                  </button>
                  
                  <button className="group/btn relative px-8 py-4 border-2 border-white/30 text-white hover:bg-white/10 transition-all duration-500 rounded-2xl text-lg font-semibold backdrop-blur-sm hover:border-white/60 hover:scale-110 overflow-hidden">
                    <span className="relative z-10 flex items-center justify-center">
                      <MessageSquare className="mr-3 w-5 h-5 group-hover/btn:rotate-12 transition-transform duration-300" />
                      Schedule a Call
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500" />
                  </button>
                </motion.div>

                {/* Contact Options */}
                {/* <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 1.0 }}
                  className="flex flex-wrap gap-6 mt-8 pt-8 border-t border-white/20"
                >
                  <div className="flex items-center text-gray-300 hover:text-white transition-colors duration-200 cursor-pointer">
                    <Phone className="w-5 h-5 mr-2 text-green-400" />
                    <span className="text-sm">+91 (812) 244-1337</span>
                  </div>
                  <div className="flex items-center text-gray-300 hover:text-white transition-colors duration-200 cursor-pointer">
                    <Mail className="w-5 h-5 mr-2 text-blue-400" />
                    <span className="text-sm">cloudacq@gmail.com</span>
                  </div>
                  <div className="flex items-center text-gray-300 hover:text-white transition-colors duration-200 cursor-pointer">
                    <Calendar className="w-5 h-5 mr-2 text-purple-400" />
                    <span className="text-sm">Book a Meeting</span>
                  </div>
                </motion.div> */}
              </div>
              
              {/* Image Section */}
              <div className="lg:col-span-2 relative">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9, x: 50 }}
                  whileInView={{ opacity: 1, scale: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="relative"
                >
                  {/* Floating Elements around image */}
                  <div className="absolute -top-6 -left-6 w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center animate-bounce z-20">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <div className="absolute -top-6 -right-6 w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center animate-bounce z-20" style={{animationDelay: '1s'}}>
                    <Star className="w-6 h-6 text-white" />
                  </div>
                  <div className="absolute -bottom-6 -left-6 w-12 h-12 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 flex items-center justify-center animate-bounce z-20" style={{animationDelay: '2s'}}>
                    <Award className="w-6 h-6 text-white" />
                  </div>

                  {/* Main Image Container */}
                  <div className="bg-white/20 backdrop-blur-md border border-white/30 rounded-2xl overflow-hidden shadow-2xl hover:scale-105 transition-transform duration-500 group/img">
                    <div className="relative">
                      <img
                        src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                        alt="Contact our expert team"
                        className="w-full h-auto object-cover group-hover/img:scale-110 transition-transform duration-700"
                      />
                      
                      {/* Image Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-purple-900/30 via-transparent to-blue-900/30" />
                      
                      {/* Floating Status Badge */}
                      <div className="absolute bottom-4 left-4 bg-white/20 backdrop-blur-md border border-white/30 rounded-xl p-3">
                        <div className="flex items-center space-x-2">
                          <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                          <span className="text-white font-semibold text-sm">Available Now</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Glow Effects */}
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-gradient-to-r from-blue-500/30 to-purple-500/30 rounded-full blur-2xl animate-pulse" />
                  <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-r from-pink-500/30 to-orange-500/30 rounded-full blur-2xl animate-pulse" style={{animationDelay: '1s'}} />
                </motion.div>
              </div>
            </div>

            {/* Bottom Stats */}
            {/* <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="mt-12 pt-8 border-t border-white/20"
            >
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                <div className="p-4 bg-white/5 rounded-xl border border-white/10">
                  <div className="text-2xl font-bold text-white mb-1">500+</div>
                  <p className="text-gray-400 text-sm">Happy Clients</p>
                </div>
                <div className="p-4 bg-white/5 rounded-xl border border-white/10">
                  <div className="text-2xl font-bold text-white mb-1">98%</div>
                  <p className="text-gray-400 text-sm">Success Rate</p>
                </div>
                <div className="p-4 bg-white/5 rounded-xl border border-white/10">
                  <div className="text-2xl font-bold text-white mb-1">24h</div>
                  <p className="text-gray-400 text-sm">Response Time</p>
                </div>
                <div className="p-4 bg-white/5 rounded-xl border border-white/10">
                  <div className="text-2xl font-bold text-white mb-1">5+</div>
                  <p className="text-gray-400 text-sm">Years Experience</p>
                </div>
              </div>
            </motion.div> */}
          </div>

          {/* Enhanced Glow Effects */}
          <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700">
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 animate-pulse" />
            <div className="absolute inset-0 rounded-3xl" style={{
              background: `conic-gradient(from 0deg, transparent, rgba(59, 130, 246, 0.1), transparent, rgba(147, 51, 234, 0.1), transparent, rgba(236, 72, 153, 0.1), transparent)`,
              animation: 'spin 8s linear infinite'
            }} />
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default ContactCTA;