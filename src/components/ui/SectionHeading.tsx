import React from 'react';
import { motion } from 'framer-motion';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({
  title,
  subtitle,
  centered = false,
  className = '',
}) => {
  const titleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut'
      }
    },
  };

  const subtitleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
        delay: 0.1,
        ease: 'easeOut'
      }
    },
  };

  return (
    <div className={`mb-12 ${centered ? 'text-center' : ''} ${className}`}>
      <motion.h2 
        variants={titleVariants}
        className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white tracking-tight mb-4"
      >
        {title}
      </motion.h2>
      
      {subtitle && (
        <motion.p 
          variants={subtitleVariants}
          className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
};

export default SectionHeading;