import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronRight, Zap } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';

// Types
interface NavItem {
  label: string;
  href: string;
}

interface FloatingParticleProps {
  delay: number;
}

// Updated Logo Component
const Logo: React.FC = () => (
  <div className="cursor-pointer">
    <img 
      src="/logo.png"
      alt="CloudACQ Logo" 
      className="h-8 w-auto"
    />
  </div>
);

const navItems: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'About Us', href: '/about' },
  { label: 'Projects', href: '/projects' },
  { label: 'Blog', href: '/blog' },
];

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  
  // Use React Router hooks instead of manual navigation
  const navigate = useNavigate();
  const location = useLocation();
  const activeItem: string = location.pathname;

  // // Handle scroll effect
  // useEffect(() => {
  //   const handleScroll = (): void => {
  //     setIsScrolled(window.scrollY > 10);
  //   };
    
  //   window.addEventListener('scroll', handleScroll);
  //   return () => window.removeEventListener('scroll', handleScroll);
  // }, []);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = (): void => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll to top when route changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);


  const handleNavClick = (href: string): void => {
    setIsMenuOpen(false);
    navigate(href); // Use navigate instead of window.location.href
  };

  return (
    <>
      {/* Top Background Gradient */}
      <div className="fixed top-0 left-0 right-0 h-32 bg-gradient-to-b from-slate-900 via-violet-900/50 to-transparent z-40 pointer-events-none" />
      <div className="fixed top-0 left-0 right-0 bg-gradient-to-r from-cyan-500/10 via-violet-500/15 to-fuchsia-500/10 z-40 pointer-events-none" />
      
      {/* Full Width Header */}
      <motion.header 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="fixed top-0 left-0 right-0 z-50 px-4 pt-4"
      >
        <motion.div 
          className={`max-w-full mx-auto transition-all duration-700 ease-out ${
            isScrolled 
              ? 'bg-black/80 backdrop-blur-2xl border border-white/10 shadow-2xl shadow-violet-500/20' 
              : 'bg-black/70 backdrop-blur-xl border border-white/10 shadow-lg shadow-violet-500/10'
          } rounded-full px-6 py-3 flex items-center justify-between`}
          whileHover={{ scale: 1.01 }}
          transition={{ duration: 0.3 }}
        >
          {/* Animated border */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500/20 via-violet-500/20 to-fuchsia-500/20 opacity-0 hover:opacity-100 transition-opacity duration-500" />
          
          {/* Logo */}
          <div onClick={() => handleNavClick('/')}>
            <Logo />
          </div>

          {/* Desktop Navigation - Centered */}
          <nav className="hidden lg:flex items-center space-x-1 absolute left-1/2 transform -translate-x-1/2">
            {navItems.map((item: NavItem, index: number) => {
              const isActive: boolean = activeItem === item.href;
              const isHovered: boolean = hoveredItem === item.href;
              
              return (
                <motion.button
                  key={item.href}
                  onClick={() => handleNavClick(item.href)}
                  onMouseEnter={() => setHoveredItem(item.href)}
                  onMouseLeave={() => setHoveredItem(null)}
                  className={`relative px-4 py-2 rounded-full font-medium text-sm transition-all duration-300 ${
                    isActive 
                      ? 'text-white' 
                      : 'text-slate-300 hover:text-white'
                  }`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {/* Active background */}
                  {isActive && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-violet-500 to-fuchsia-500 rounded-full"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                  
                  {/* Hover glow */}
                  {isHovered && !isActive && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="absolute inset-0 bg-white/10 rounded-full backdrop-blur-sm"
                    />
                  )}
                  
                  <span className="relative z-10">{item.label}</span>
                </motion.button>
              );
            })}
          </nav>

          {/* Right Side - Action Button */}
          <div className="hidden lg:flex items-center">
            <motion.button
              onClick={() => handleNavClick('/contact')}
              className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-cyan-500 to-violet-500 text-white text-sm font-semibold rounded-full hover:shadow-lg hover:shadow-violet-500/25 transition-all duration-300 group relative overflow-hidden"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {/* Shimmer effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-1000" />
              
              <Zap className="w-4 h-4 relative z-10" />
              <span className="relative z-10">Let's Connect</span>
            </motion.button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="lg:hidden">
            <motion.button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <motion.div
                animate={{ rotate: isMenuOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {isMenuOpen ? <X className="w-4 h-4 text-white" /> : <Menu className="w-4 h-4 text-white" />}
              </motion.div>
            </motion.button>
          </div>
        </motion.div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden"
              onClick={() => setIsMenuOpen(false)}
            />
            
            {/* Mobile Menu Panel */}
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="fixed top-20 left-4 right-4 bg-black/90 backdrop-blur-2xl border border-white/10 rounded-3xl z-50 lg:hidden overflow-hidden"
            >
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-violet-500/5 to-fuchsia-500/5" />
              
              <div className="relative p-6 space-y-4">
                {/* Mobile Navigation */}
                {navItems.map((item: NavItem, index: number) => {
                  const isActive: boolean = activeItem === item.href;
                  
                  return (
                    <motion.button
                      key={item.href}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      onClick={() => handleNavClick(item.href)}
                      className={`w-full flex items-center justify-between p-4 rounded-2xl font-medium transition-all duration-300 group ${
                        isActive 
                          ? 'bg-gradient-to-r from-cyan-500/20 to-violet-500/20 text-white border border-white/20' 
                          : 'text-slate-300 hover:text-white hover:bg-white/5'
                      }`}
                      whileHover={{ x: 4 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <span>{item.label}</span>
                      <ChevronRight className={`w-4 h-4 transition-transform duration-300 ${
                        isActive ? 'text-cyan-400' : 'text-slate-500 group-hover:text-white group-hover:translate-x-1'
                      }`} />
                    </motion.button>
                  );
                })}
                
                {/* Mobile CTA */}
                <motion.button
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.6 }}
                  onClick={() => handleNavClick('/contact')}
                  className="w-full mt-6 p-4 bg-gradient-to-r from-cyan-500 to-violet-500 text-white font-semibold rounded-2xl hover:shadow-lg hover:shadow-violet-500/25 transition-all duration-300 flex items-center justify-center space-x-2 group"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Zap className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                  <span>Start Your Project</span>
                </motion.button>

                {/* Mobile Footer */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.4, delay: 0.8 }}
                  className="pt-6 border-t border-white/10 text-center"
                >
                  <p className="text-slate-400 text-sm">Trusted by 500+ companies worldwide</p>
                  <div className="flex justify-center mt-3 space-x-2">
                    {[...Array(5)].map((_, i: number) => (
                      <motion.div
                        key={i}
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.3, delay: 1 + i * 0.1 }}
                        className="w-6 h-6 rounded-full bg-gradient-to-r from-cyan-400 to-violet-500 opacity-60"
                      />
                    ))}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;