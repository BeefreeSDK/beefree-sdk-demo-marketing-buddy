import React, { useState, useEffect } from 'react';
import marketingBuddy from '@/assets/marketing-buddy.png';
import buddyWelcome from '@/assets/buddy-welcome.png';

interface BuddyMascotProps {
  variant?: 'default' | 'welcome' | 'thinking' | 'celebrating';
  message?: string;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

const BuddyMascot: React.FC<BuddyMascotProps> = ({ 
  variant = 'default', 
  message, 
  className = '', 
  size = 'md' 
}) => {
  const [currentMessage, setCurrentMessage] = useState(message);
  const [showMessage, setShowMessage] = useState(false);

  const sizeClasses = {
    sm: 'w-12 h-12',
    md: 'w-16 h-16',
    lg: 'w-24 h-24'
  };

  const buddyImage = variant === 'welcome' ? buddyWelcome : marketingBuddy;

  useEffect(() => {
    if (message) {
      setShowMessage(true);
      const timer = setTimeout(() => setShowMessage(false), 4000);
      return () => clearTimeout(timer);
    }
  }, [message]);

  const getAnimationClass = () => {
    switch (variant) {
      case 'welcome':
        return 'animate-gentle-bounce';
      case 'thinking':
        return 'animate-buddy-pulse';
      case 'celebrating':
        return 'animate-gentle-bounce';
      default:
        return 'animate-float';
    }
  };

  return (
    <div className={`relative ${className}`}>
      <div className={`${sizeClasses[size]} ${getAnimationClass()} transition-all duration-300`}>
        <img 
          src={buddyImage} 
          alt="Marketing Buddy" 
          className="w-full h-full object-contain drop-shadow-lg"
        />
      </div>
      
      {showMessage && currentMessage && (
        <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-white rounded-lg px-3 py-2 shadow-lg border border-border animate-fade-in-up">
          <div className="text-xs text-foreground font-medium whitespace-nowrap">
            {currentMessage}
          </div>
          <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-white"></div>
        </div>
      )}
    </div>
  );
};

export default BuddyMascot;