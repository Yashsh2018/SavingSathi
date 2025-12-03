// components/AdvancedLoader.tsx
import React from 'react';

interface LoaderProps {
  variant?: 'spinner' | 'dots' | 'pulse' | 'progress';
  size?: 'sm' | 'md' | 'lg';
  text?: string;
}

const Loader: React.FC<LoaderProps> = ({ 
  variant = 'spinner', 
  size = 'md', 
  text = 'Loading...' 
}) => {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-16 h-16',
    lg: 'w-24 h-24'
  };

  const renderLoader = () => {
    switch (variant) {
      case 'dots':
        return (
          <div className="flex space-x-2">
            {[0, 1, 2].map((index) => (
              <div
                key={index}
                className={`${sizeClasses[size]} bg-gradient-to-r from-rose-600 to-cyan-700 rounded-full animate-bounce`}
                style={{ animationDelay: `${index * 0.1}s` }}
              ></div>
            ))}
          </div>
        );
      
      case 'pulse':
        return (
          <div className={`${sizeClasses[size]} bg-gradient-to-r from-rose-600 to-cyan-700 rounded-full animate-pulse`}></div>
        );
      
      case 'progress':
        return (
          <div className="w-48">
            <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-rose-600 to-cyan-700 rounded-full animate-[progress_1.5s_ease-in-out_infinite]"></div>
            </div>
          </div>
        );
      
      default: // spinner
        return (
          <div className="relative">
            <div className={`${sizeClasses[size]} border-4 border-gray-800 rounded-full`}></div>
            <div className={`${sizeClasses[size]} border-4 border-transparent rounded-full animate-spin absolute top-0 left-0 border-t-rose-600 border-r-cyan-700`}></div>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center p-4">
      <div className="text-center space-y-6">
        {renderLoader()}
        <p className="text-xl font-semibold bg-gradient-to-r from-rose-600 to-cyan-700 bg-clip-text text-transparent">
          {text}
        </p>
      </div>
      
      <style jsx>{`
        @keyframes progress {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
      `}</style>
    </div>
  );
};

export default Loader;