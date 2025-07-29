import React from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  interactive?: boolean;
  elevation?: 'none' | 'low' | 'medium' | 'high';
}

const Card: React.FC<CardProps> = ({
  children,
  className = '',
  onClick,
  interactive = false,
  elevation = 'medium',
}) => {
  const elevationClasses = {
    none: '',
    low: 'shadow-soft',
    medium: 'shadow-medium',
    high: 'shadow-hard',
  };

  const hoverClasses = interactive
    ? 'cursor-pointer transform transition-transform duration-300 hover:-translate-y-1 hover:shadow-hard'
    : '';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.4 }}
      onClick={onClick}
      className={`
        bg-white dark:bg-gray-800 rounded-lg overflow-hidden 
        transition-all duration-300
        ${elevationClasses[elevation]} 
        ${hoverClasses} 
        ${className}
      `}
    >
      {children}
    </motion.div>
  );
};

export default Card;