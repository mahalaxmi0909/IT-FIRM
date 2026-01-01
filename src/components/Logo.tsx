import React from 'react';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ size = 'md', className = '' }) => {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-12 h-12'
  };

  const textSizes = {
    sm: 'text-lg',
    md: 'text-xl',
    lg: 'text-2xl'
  };

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      {/* Logo Icon - Orbit representation */}
      <div className={`relative ${sizeClasses[size]}`}>
        {/* Outer orbit ring */}
        <div className="absolute inset-0 rounded-full border-2 border-blue-600 border-opacity-80" />
        
        {/* Inner orbit ring */}
        <div className="absolute inset-2 rounded-full border border-cyan-500 border-opacity-60" />
        
        {/* Center core */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-2 h-2 bg-blue-600 rounded-full" />
        </div>
        
        {/* Orbiting dots */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="w-1.5 h-1.5 bg-cyan-500 rounded-full" />
        </div>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2">
          <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
        </div>
        <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2">
          <div className="w-1.5 h-1.5 bg-cyan-600 rounded-full" />
        </div>
        <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2">
          <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
        </div>
      </div>

      {/* Brand Name */}
      <div className="flex flex-col">
        <span className={`${textSizes[size]} font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent leading-tight`}>
          Orbit
        </span>
        <span className={`${size === 'sm' ? 'text-xs' : 'text-sm'} font-semibold text-slate-600 leading-tight`}>
          Tech
        </span>
      </div>
    </div>
  );
};

export default Logo;
