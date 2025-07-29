import React from 'react';
import { motion } from 'framer-motion';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  fullWidth?: boolean;
  noPadding?: boolean;
}

const Section: React.FC<SectionProps> = ({
  children,
  className = '',
  id,
  fullWidth = false,
  noPadding = false,
}) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      }
    }
  };

  return (
    <section
      id={id}
      className={`py-16 md:py-24 ${className}`}
    >
      {fullWidth ? (
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={containerVariants}
          className={`w-full ${noPadding ? '' : 'px-4'}`}
        >
          {children}
        </motion.div>
      ) : (
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={containerVariants}
          className={`container mx-auto ${noPadding ? '' : 'px-4'}`}
        >
          {children}
        </motion.div>
      )}
    </section>
  );
};

export default Section;