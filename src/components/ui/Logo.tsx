import React from 'react';
import { Globe } from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';

const Logo: React.FC = () => {
  const { theme } = useTheme();
  
  return (
    <div className="flex items-center">
      <div className="flex items-center justify-center w-10 h-10 rounded-md bg-gradient-to-br from-primary-500 to-secondary-500 text-white">
        <Globe size={24} />
      </div>
      <span className="ml-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
        Cloud<span className="text-primary-500">acq</span>
      </span>
    </div>
  );
};

export default Logo;