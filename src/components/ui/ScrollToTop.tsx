import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface ScrollToTopProps {
  threshold?: number; // Scroll threshold to show button (default: 300px)
  className?: string; // Additional custom classes
  position?: 'bottom-right' | 'bottom-left' | 'bottom-center'; // Button position
}

const ScrollToTop: React.FC<ScrollToTopProps> = ({ 
  threshold = 300, 
  className = '',
  position = 'bottom-right'
}) => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Show scroll to top button when user scrolls down
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.pageYOffset > threshold);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [threshold]);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // Position classes based on prop
  const getPositionClasses = () => {
    switch (position) {
      case 'bottom-left':
        return 'bottom-8 left-8';
      case 'bottom-center':
        return 'bottom-8 left-1/2 transform -translate-x-1/2';
      case 'bottom-right':
      default:
        return 'bottom-8 right-8';
    }
  };

  return (
    <AnimatePresence>
      {showScrollTop && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={scrollToTop}
          className={`fixed ${getPositionClasses()} z-50 p-3 bg-gradient-to-r from-primary-500 to-secondary-500 text-white rounded-full shadow-lg hover:shadow-xl transition-shadow duration-300 ${className}`}
          aria-label="Scroll to top"
        >
          <svg 
            className="w-6 h-6" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M5 10l7-7m0 0l7 7m-7-7v18" 
            />
          </svg>
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTop;

// USAGE EXAMPLES:

// Basic usage (default settings):
// <ScrollToTop />

// Custom threshold (show button after 500px scroll):
// <ScrollToTop threshold={500} />

// Different position:
// <ScrollToTop position="bottom-left" />

// With custom styling:
// <ScrollToTop className="opacity-80" />

// Full customization:
// <ScrollToTop 
//   threshold={200} 
//   position="bottom-center" 
//   className="bg-red-500 hover:bg-red-600" 
// />