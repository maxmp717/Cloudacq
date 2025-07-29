import React from 'react';
import { motion } from 'framer-motion';

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

const Partners = () => {
  // Partner logos with enhanced data
  const partnerLogos = [
    { 
      id: 1, 
      name: 'TechCorp', 
      logo: 'https://images.pexels.com/photos/218717/pexels-photo-218717.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      gradient: 'from-blue-500 to-cyan-500'
    },
    { 
      id: 2, 
      name: 'InnovateHub', 
      logo: 'https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      gradient: 'from-emerald-500 to-teal-500'
    },
    { 
      id: 3, 
      name: 'CloudSystems', 
      logo: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      gradient: 'from-purple-500 to-pink-500'
    },
    { 
      id: 4, 
      name: 'DataFlow', 
      logo: 'https://images.pexels.com/photos/270637/pexels-photo-270637.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      gradient: 'from-orange-500 to-red-500'
    },
    { 
      id: 5, 
      name: 'NextGen Solutions', 
      logo: 'https://images.pexels.com/photos/5935794/pexels-photo-5935794.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      gradient: 'from-indigo-500 to-purple-500'
    },
    { 
      id: 6, 
      name: 'FutureTech', 
      logo: 'https://images.pexels.com/photos/218717/pexels-photo-218717.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      gradient: 'from-violet-500 to-purple-500'
    }
  ];

  return (
    <div className="relative bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-16 md:py-24 overflow-hidden">
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
              🤝 Our Partners
            </span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            <span className="bg-gradient-to-r from-white via-blue-200 to-white bg-clip-text text-transparent">
              Trusted by
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Industry Leaders
            </span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed"
          >
            We collaborate with forward-thinking companies to deliver exceptional digital solutions
          </motion.p>
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 md:gap-12 items-center justify-items-center">
          {partnerLogos.map((partner, index) => (
            <motion.div
              key={partner.id}
              initial={{ opacity: 0, y: 20, scale: 0.8 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1,
                type: "spring",
                stiffness: 100 
              }}
              className="group relative"
            >
              {/* Partner Card */}
              <div className="relative w-24 h-24 md:w-32 md:h-32 lg:w-28 lg:h-28 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4 transition-all duration-500 hover:scale-110 hover:-translate-y-2 overflow-hidden">
                {/* Glow Effect on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-r ${partner.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-xl`} />
                
                {/* Logo Container */}
                <div className="relative z-10 w-full h-full flex items-center justify-center">
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="max-w-full max-h-full object-contain filter grayscale group-hover:grayscale-0 opacity-70 group-hover:opacity-100 transition-all duration-500"
                  />
                </div>

                {/* Animated Border on Hover */}
                <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-white/30 transition-all duration-500" />
                
                {/* Shimmer Effect */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{
                  background: 'linear-gradient(45deg, transparent, rgba(255,255,255,0.1), transparent)',
                  animation: 'shimmer 2s infinite'
                }} />
              </div>

              {/* Company Name Tooltip */}
              <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <div className={`px-3 py-2 bg-gradient-to-r ${partner.gradient} rounded-lg shadow-lg backdrop-blur-sm`}>
                  <p className="text-white text-xs font-semibold whitespace-nowrap">{partner.name}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        {/* <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 md:p-12 relative overflow-hidden">
           
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse" />
            
            <div className="relative z-10">
              <h3 className="text-2xl md:text-3xl font-bold mb-6">
                <span className="bg-gradient-to-r from-white via-blue-200 to-white bg-clip-text text-transparent">
                  Building Lasting
                </span>
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  {" "}Partnerships
                </span>
              </h3>
              
              <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
                From startups to enterprise companies, we help businesses of all sizes achieve their digital transformation goals
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="text-center p-4 bg-white/5 rounded-xl border border-white/10">
                  <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-2">500+</div>
                  <p className="text-gray-400 text-sm">Projects Delivered</p>
                </div>
                <div className="text-center p-4 bg-white/5 rounded-xl border border-white/10">
                  <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent mb-2">150+</div>
                  <p className="text-gray-400 text-sm">Happy Clients</p>
                </div>
                <div className="text-center p-4 bg-white/5 rounded-xl border border-white/10">
                  <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">5</div>
                  <p className="text-gray-400 text-sm">Years Experience</p>
                </div>
                <div className="text-center p-4 bg-white/5 rounded-xl border border-white/10">
                  <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent mb-2">24/7</div>
                  <p className="text-gray-400 text-sm">Support</p>
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

export default Partners;