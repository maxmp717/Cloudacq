import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { 
  CheckCircle, Award, Users, Heart, Zap, Lightbulb, Target, 
  Calendar, TrendingUp, Globe, Code, Rocket, Star,
  Linkedin, Twitter, Github, ExternalLink
} from 'lucide-react';

// Floating Particle Component
const FloatingParticle = ({ delay }) => (
  <div
    className="absolute w-2 h-2 bg-gradient-to-r from-purple-400 via-pink-400 to-rose-400 rounded-full opacity-20 animate-bounce"
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

const team = [
  {
    id: 'john-doe',
    name: 'John Doe',
    role: 'CEO & Founder',
    bio: 'John has over 15 years of experience in the tech industry and is passionate about helping businesses transform their digital presence.',
    image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    gradient: 'from-blue-500 to-cyan-500',
    socialLinks: {
      linkedin: 'https://linkedin.com',
      twitter: 'https://twitter.com',
      github: 'https://github.com'
    }
  },
  {
    id: 'jane-smith',
    name: 'Jane Smith',
    role: 'CTO',
    bio: 'Jane leads our technical team with expertise in web development, cloud architecture, and emerging technologies.',
    image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    gradient: 'from-purple-500 to-pink-500',
    socialLinks: {
      linkedin: 'https://linkedin.com',
      twitter: 'https://twitter.com',
      github: 'https://github.com'
    }
  },
  {
    id: 'david-johnson',
    name: 'David Johnson',
    role: 'Creative Director',
    bio: 'David brings creative vision to all our projects, ensuring they not only function well but look exceptional too.',
    image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    gradient: 'from-emerald-500 to-teal-500',
    socialLinks: {
      linkedin: 'https://linkedin.com',
      twitter: 'https://twitter.com'
    }
  },
  {
    id: 'emily-chen',
    name: 'Emily Chen',
    role: 'Lead Developer',
    bio: 'Emily is an expert full-stack developer with a talent for solving complex technical challenges.',
    image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    gradient: 'from-orange-500 to-red-500',
    socialLinks: {
      linkedin: 'https://linkedin.com',
      github: 'https://github.com'
    }
  }
];

const About = () => {
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
        <title>About Us | Cloudacq - Leading Digital Innovation Team</title>
        <meta name="description" content="Learn about Cloudacq, our mission, values, and the talented team behind our exceptional web development and digital services. Discover our journey from startup to industry leader." />
        <meta name="keywords" content="about cloudacq, web development team, digital agency, company mission, tech startup, innovation team" />
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
                  🚀 About Cloudacq
                </span>
              </motion.div>
              
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-4xl md:text-6xl font-bold mb-8"
              >
                <span className="bg-gradient-to-r from-white via-blue-200 to-white bg-clip-text text-transparent">
                  Crafting Digital
                </span>
                <br />
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Excellence
                </span>
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
              >
                We're a passionate team of experts committed to delivering exceptional digital experiences that drive real business results and transform the way companies connect with their audiences.
              </motion.p>
            </div>
          </div>
          
          <WaveAnimation />
        </section>

        {/* Our Story Section */}
        <section className="py-20 relative">
          <div className="max-w-7xl mx-auto px-4 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.6 }}
              >
                <div className="inline-block mb-6">
                  <span className="px-4 py-2 text-sm font-semibold bg-gradient-to-r from-emerald-500/20 to-teal-500/20 backdrop-blur-md border border-white/20 text-emerald-200 rounded-full">
                    📖 Our Story
                  </span>
                </div>
                
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  <span className="bg-gradient-to-r from-white via-blue-200 to-white bg-clip-text text-transparent">
                    From Startup to
                  </span>
                  <br />
                  <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
                    Industry Leader
                  </span>
                </h2>
                
                <div className="space-y-6 text-gray-300 leading-relaxed">
                  <p>
                    Founded in 2013, Cloudacq began as a small team of developers with a shared vision: to create beautiful, functional websites that deliver real business value. What started as a modest startup has since grown into a full-service digital agency with clients around the world.
                  </p>
                  <p>
                    Over the years, we've expanded our services to include mobile app development, UX/UI design, cloud solutions, and cutting-edge AI integrations. Throughout our growth, we've maintained our core commitment to quality, innovation, and client satisfaction.
                  </p>
                  <p>
                    Today, Cloudacq is trusted by startups, mid-sized businesses, and enterprise organizations alike. Our portfolio spans diverse industries, from healthcare and finance to education and retail, demonstrating our versatility and expertise.
                  </p>
                </div>

                {/* <div className="grid grid-cols-2 gap-6 mt-8">
                  <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-4 text-center">
                    <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-1">500+</div>
                    <div className="text-sm text-gray-400">Projects Delivered</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-4 text-center">
                    <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-1">12+</div>
                    <div className="text-sm text-gray-400">Years Experience</div>
                  </div>
                </div> */}
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.6 }}
                className="relative"
              >
                <div className="relative">
                  <div className="absolute -top-6 -left-6 w-32 h-32 bg-gradient-to-r from-blue-500/30 to-purple-500/30 rounded-full blur-xl animate-pulse" />
                  <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-r from-pink-500/30 to-orange-500/30 rounded-full blur-xl animate-pulse" />
                  
                  <div className="relative z-10 bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-2 hover:scale-105 transition-transform duration-500">
                    <img
                      src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                      alt="Cloudacq team collaboration"
                      className="w-full h-auto rounded-2xl"
                    />
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Mission & Values Section */}
        <section className="py-20 relative">
          <div className="max-w-7xl mx-auto px-4 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.6 }}
                className="order-2 lg:order-1"
              >
                <div className="grid grid-cols-2 gap-6">
                  {[
                    { icon: Target, value: 'Excellence', description: 'We strive for excellence in everything we do', color: 'from-blue-500 to-cyan-500' },
                    { icon: Heart, value: 'Passion', description: "We're passionate about technology and innovation", color: 'from-pink-500 to-rose-500' },
                    { icon: Users, value: 'Collaboration', description: 'We believe in the power of teamwork', color: 'from-purple-500 to-violet-500' },
                    { icon: Lightbulb, value: 'Innovation', description: 'We embrace new ideas and creative solutions', color: 'from-yellow-500 to-orange-500' },
                    { icon: Zap, value: 'Agility', description: 'We adapt quickly to changing needs and technologies', color: 'from-emerald-500 to-teal-500' },
                    { icon: Award, value: 'Integrity', description: 'We uphold the highest ethical standards', color: 'from-indigo-500 to-purple-500' }
                  ].map((item, index) => {
                    const IconComponent = item.icon;
                    return (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20, scale: 0.9 }}
                        whileInView={{ opacity: 1, y: 0, scale: 1 }}
                        viewport={{ once: true, amount: 0.1 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="group"
                      >
                        <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 h-full hover:bg-white/15 transition-all duration-300 hover:scale-105 relative overflow-hidden">
                          <div className={`absolute inset-0 bg-gradient-to-r ${item.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 blur-xl`} />
                          
                          <div className="relative z-10">
                            <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-r ${item.color} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                              <IconComponent size={24} className="text-white" />
                            </div>
                            <h3 className="text-lg font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r transition-all duration-300" style={{backgroundImage: `linear-gradient(to right, ${item.color.split(' ').join(', ')})`}}>
                              {item.value}
                            </h3>
                            <p className="text-sm text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                              {item.description}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.6 }}
                className="order-1 lg:order-2"
              >
                <div className="inline-block mb-6">
                  <span className="px-4 py-2 text-sm font-semibold bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-md border border-white/20 text-purple-200 rounded-full">
                    💫 Mission & Values
                  </span>
                </div>
                
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  <span className="bg-gradient-to-r from-white via-blue-200 to-white bg-clip-text text-transparent">
                    Our Mission &
                  </span>
                  <br />
                  <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-rose-400 bg-clip-text text-transparent">
                    Core Values
                  </span>
                </h2>
                
                <div className="space-y-6 text-gray-300 leading-relaxed">
                  <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6">
                    <h3 className="text-lg font-bold text-white mb-3 flex items-center">
                      <Rocket className="w-5 h-5 mr-2 text-blue-400" />
                      Our Mission
                    </h3>
                    <p>
                      To empower businesses with innovative digital solutions that drive growth, enhance user experiences, and create lasting value in an ever-evolving digital landscape.
                    </p>
                  </div>
                  
                  <p>
                    At Cloudacq, our values define who we are and guide how we work. They're the foundation of our culture and reflect our commitment to our clients, our team, and our craft.
                  </p>
                  
                  <p>
                    We believe in transparent communication, continuous learning, and delivering results that exceed expectations. By focusing on these principles, we've built long-lasting relationships with our clients and created a workplace where innovation thrives.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        {/* <section className="py-20 relative">
          <div className="max-w-7xl mx-auto px-4 relative z-10">
            <div className="text-center mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="inline-block mb-6"
              >
                <span className="px-6 py-3 text-sm font-semibold bg-gradient-to-r from-cyan-500/20 to-blue-500/20 backdrop-blur-md border border-white/20 text-cyan-200 rounded-full">
                  👥 Our Team
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
                  Meet Our
                </span>
                <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                  {" "}Expert Team
                </span>
              </motion.h2>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
              >
                The talented people behind our successful projects and innovative solutions
              </motion.p>
            </div>
            
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            >
              {team.map((member, index) => (
                <motion.div
                  key={member.id}
                  variants={itemVariants}
                  className="group"
                >
                  <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl overflow-hidden h-full hover:bg-white/15 transition-all duration-500 hover:scale-105 hover:shadow-2xl relative">
                   
                    <div className={`absolute inset-0 bg-gradient-to-r ${member.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-xl`} />
                    
                    <div className="relative z-10">
                    
                      <div className="aspect-[4/5] overflow-hidden relative">
                        <img
                          src={member.image}
                          alt={member.name}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        
                     
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        
                       
                        <div className="absolute top-4 left-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                          <span className={`px-3 py-1 text-xs font-semibold bg-gradient-to-r ${member.gradient} text-white rounded-full shadow-lg backdrop-blur-sm`}>
                            {member.role}
                          </span>
                        </div>
                      </div>
                      
                     
                      <div className="p-6">
                        <h3 className={`text-xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r ${member.gradient} transition-all duration-300`}>
                          {member.name}
                        </h3>
                        
                        <p className="text-gray-400 text-sm mb-4 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                          {member.bio}
                        </p>
                        
                        
                        <div className="flex space-x-3">
                          {member.socialLinks.linkedin && (
                            <a 
                              href={member.socialLinks.linkedin} 
                              target="_blank" 
                              rel="noopener noreferrer" 
                              className="text-gray-400 hover:text-white transition-colors duration-300 hover:scale-110 transform"
                            >
                              <Linkedin className="w-5 h-5" />
                            </a>
                          )}
                          {member.socialLinks.twitter && (
                            <a 
                              href={member.socialLinks.twitter} 
                              target="_blank" 
                              rel="noopener noreferrer" 
                              className="text-gray-400 hover:text-white transition-colors duration-300 hover:scale-110 transform"
                            >
                              <Twitter className="w-5 h-5" />
                            </a>
                          )}
                          {member.socialLinks.github && (
                            <a 
                              href={member.socialLinks.github} 
                              target="_blank" 
                              rel="noopener noreferrer" 
                              className="text-gray-400 hover:text-white transition-colors duration-300 hover:scale-110 transform"
                            >
                              <Github className="w-5 h-5" />
                            </a>
                          )}
                        </div>
                      </div>
                    </div>

                    
                    <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" style={{
                      background: 'linear-gradient(45deg, transparent, rgba(255,255,255,0.1), transparent)',
                      animation: 'shimmer 2s infinite'
                    }} />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section> */}

        {/* Stats Section - Modern Design */}
        <section className="relative pb-2 overflow-hidden">
          {/* <WaveAnimation position="top" inverted={true} className="-mt-1" /> */}
          
          {/* Enhanced gradient background with multiple layers */}
          <div className="relative">
            {/* Primary gradient background */}
            <div className="absolute inset-0 " />
            
            {/* Animated overlay gradients */}
            <div className="absolute inset-0 opacity-40">
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-cyan-500/30 to-transparent animate-pulse" style={{animationDuration: '4s'}} />
              <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-l from-pink-500/30 to-transparent animate-pulse" style={{animationDuration: '6s', animationDelay: '2s'}} />
            </div>
            
            {/* Floating orbs */}
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white/10 rounded-full blur-3xl animate-pulse" style={{animationDuration: '8s'}} />
              <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-white/5 rounded-full blur-3xl animate-pulse" style={{animationDuration: '10s', animationDelay: '3s'}} />
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse" style={{animationDuration: '12s', animationDelay: '1s'}} />
            </div>

            <div className="max-w-7xl mx-auto px-4 relative z-10 pt-10">
              {/* Enhanced Header */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="text-center mb-20"
              >
                <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-white/20 backdrop-blur-md border border-white/30 mb-8 mx-auto">
                  <TrendingUp size={40} className="text-white" />
                </div>
                
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 relative">
                  <span className="relative z-10">Our Impact by the</span>
                  <br />
                  <span className="relative z-10 bg-gradient-to-r from-yellow-300 via-pink-300 to-cyan-300 bg-clip-text text-transparent">
                    Numbers
                  </span>
                  {/* Decorative elements */}
                  <div className="absolute -top-2 -left-2 w-8 h-8 border-l-2 border-t-2 border-white/30 rounded-tl-lg" />
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 border-r-2 border-b-2 border-white/30 rounded-br-lg" />
                </h2>
                
                <p className="text-xl md:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
                  Delivering exceptional results and transforming businesses since 2013
                </p>
                
                {/* Animated underline */}
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, delay: 0.5 }}
                  className="h-1 bg-gradient-to-r from-yellow-400 via-pink-400 to-cyan-400 rounded-full mx-auto mt-6 max-w-md"
                />
              </motion.div>

              {/* Enhanced Stats Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
                {[
                  { 
                    value: '300+', 
                    label: 'Projects Completed', 
                    icon: CheckCircle, 
                    description: 'Successfully delivered worldwide',
                    gradient: 'from-emerald-400 via-cyan-400 to-blue-400',
                    delay: 0
                  },
                  { 
                    value: '100+', 
                    label: 'Happy Clients', 
                    icon: Users, 
                    description: 'Satisfied customers globally',
                    gradient: 'from-pink-400 via-rose-400 to-red-400',
                    delay: 0.2
                  },
                  { 
                    value: '4+', 
                    label: 'Years Experience', 
                    icon: Calendar, 
                    description: 'Proven industry expertise',
                    gradient: 'from-yellow-400 via-orange-400 to-red-400',
                    delay: 0.4
                  },
                  { 
                    value: '25+', 
                    label: 'Team Members', 
                    icon: Star, 
                    description: 'Expert professionals',
                    gradient: 'from-purple-400 via-violet-400 to-indigo-400',
                    delay: 0.6
                  }
                ].map((stat, index) => {
                  const IconComponent = stat.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 50, scale: 0.8 }}
                      whileInView={{ opacity: 1, y: 0, scale: 1 }}
                      viewport={{ once: true, amount: 0.1 }}
                      transition={{ 
                        duration: 0.8, 
                        delay: stat.delay,
                        type: "spring",
                        bounce: 0.4
                      }}
                      className="group relative"
                    >
                      {/* Background card with enhanced glassmorphism */}
                      <div className="relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 h-full hover:bg-white/15 transition-all duration-500 hover:scale-105 hover:shadow-2xl overflow-hidden">
                        {/* Animated background gradient */}
                        <div className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} opacity-0 group-hover:opacity-20 transition-all duration-700 blur-xl transform group-hover:scale-110`} />
                        
                        {/* Shimmer effect */}
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 animate-shimmer" />
                        </div>
                        
                        <div className="relative z-10 text-center">
                          {/* Icon with enhanced styling */}
                          <div className="relative mb-6">
                            <div className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br ${stat.gradient} shadow-2xl mx-auto group-hover:scale-110 transition-all duration-500 relative overflow-hidden`}>
                              {/* Icon glow effect */}
                              <div className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-500`} />
                              <IconComponent className="w-8 h-8 text-white relative z-10" />
                            </div>
                            
                            {/* Floating ring animation */}
                            <div className={`absolute inset-0 rounded-2xl border-2 border-gradient-to-br ${stat.gradient} opacity-0 group-hover:opacity-100 transition-all duration-500 animate-ping`} style={{animationDuration: '2s'}} />
                          </div>

                          {/* Counter with enhanced animation */}
                          <motion.div
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ 
                              duration: 1, 
                              delay: stat.delay + 0.3,
                              type: "spring",
                              bounce: 0.6
                            }}
                            className="mb-4"
                          >
                            <h3 className={`text-4xl md:text-5xl xl:text-6xl font-bold bg-gradient-to-br ${stat.gradient} bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300`}>
                              {stat.value}
                            </h3>
                          </motion.div>

                          {/* Label and description */}
                          <h4 className="text-xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r transition-all duration-300" style={{backgroundImage: `linear-gradient(to right, ${stat.gradient.split(' ').join(', ')})`}}>
                            {stat.label}
                          </h4>
                          
                          <p className="text-white/70 text-sm leading-relaxed group-hover:text-white/90 transition-colors duration-300">
                            {stat.description}
                          </p>

                          {/* Progress indicator */}
                          <div className="mt-6 relative">
                            <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                              <motion.div
                                initial={{ width: 0 }}
                                whileInView={{ width: "100%" }}
                                viewport={{ once: true }}
                                transition={{ duration: 2, delay: stat.delay + 0.8 }}
                                className={`h-full bg-gradient-to-r ${stat.gradient} rounded-full relative overflow-hidden`}
                              >
                                <div className="absolute inset-0 bg-white/30 animate-pulse" />
                              </motion.div>
                            </div>
                          </div>
                        </div>

                        {/* Corner decorations */}
                        <div className="absolute top-4 right-4 w-6 h-6 border-r-2 border-t-2 border-white/20 rounded-tr-lg opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-x-2 -translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0" />
                        <div className="absolute bottom-4 left-4 w-6 h-6 border-l-2 border-b-2 border-white/20 rounded-bl-lg opacity-0 group-hover:opacity-100 transition-all duration-500 transform -translate-x-2 translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0" />
                      </div>

                      {/* External glow effect */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} opacity-0 group-hover:opacity-30 transition-all duration-700 blur-2xl rounded-3xl transform scale-110 -z-10`} />
                    </motion.div>
                  );
                })}
              </div>

              {/* Additional metrics row */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 text-center"
              >
                {[
                  { metric: '99.9%', label: 'Uptime', sublabel: 'Reliability guaranteed' },
                  { metric: '24/7', label: 'Support', sublabel: 'Always available' },
                  { metric: '48h', label: 'Response', sublabel: 'Quick turnaround' },
                  { metric: '100%', label: 'Satisfaction', sublabel: 'Client happiness' }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                    className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105"
                  >
                    <div className="text-2xl md:text-3xl font-bold text-white mb-1">
                      {item.metric}
                    </div>
                    <div className="text-white/90 font-medium mb-1">
                      {item.label}
                    </div>
                    <div className="text-white/60 text-xs">
                      {item.sublabel}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
          
          {/* <WaveAnimation /> */}
        </section>

        {/* Contact CTA Section */}
        {/* <section className="py-20 relative">
          <div className="max-w-7xl mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
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
                    <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 mb-6">
                      <TrendingUp size={36} className="text-white" />
                    </div>
                  </motion.div>

                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                    Ready to Start Your{' '}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                      Digital Journey?
                    </span>
                  </h3>
                  
                  <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                    Let's work together to transform your business with innovative digital solutions that drive growth and success.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <motion.a
                      href="/contact"
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                    >
                      Start Your Project
                      <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </motion.a>

                    <motion.a
                      href="/portfolio"
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="inline-flex items-center px-8 py-4 bg-transparent border-2 border-white/30 text-white font-semibold rounded-full hover:bg-white/10 hover:border-white/60 transition-all duration-300 backdrop-blur-sm"
                    >
                      View Our Work
                      <ExternalLink className="ml-2 w-4 h-4" />
                    </motion.a>
                  </div>

                 
                  <div className="mt-8 pt-8 border-t border-white/10">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                      <div>
                        <div className="text-lg font-bold text-white mb-1">Free Consultation</div>
                        <div className="text-sm text-gray-400">No obligation project review</div>
                      </div>
                      <div>
                        <div className="text-lg font-bold text-white mb-1">24/7 Support</div>
                        <div className="text-sm text-gray-400">Round-the-clock assistance</div>
                      </div>
                      <div>
                        <div className="text-lg font-bold text-white mb-1">Global Reach</div>
                        <div className="text-sm text-gray-400">Serving clients worldwide</div>
                      </div>
                    </div>
                  </div>
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
        @keyframes shimmer {
          0% { transform: translateX(-200%) skewX(-12deg); }
          100% { transform: translateX(200%) skewX(-12deg); }
        }
        .animate-shimmer {
          animation: shimmer 3s infinite;
        }
      `}</style>
    </>
  );
};

export default About;