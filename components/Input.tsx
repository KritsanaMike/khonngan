import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  icon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  onRightIconClick?: () => void;
}

export const Input: React.FC<InputProps> = ({ 
  label, 
  error, 
  icon, 
  rightIcon, 
  onRightIconClick, 
  className = '', 
  ...props 
}) => {
  return (
    <div className="w-full mb-4">
      {label && <label className="block text-sm font-medium text-gray-700 mb-1.5 ml-1">{label}</label>}
      <div className="relative">
        <input
          className={`w-full px-4 py-3.5 bg-gray-50 border ${error ? 'border-red-500' : 'border-gray-200'} rounded-xl focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-secondary transition-all text-text-main placeholder-gray-400 ${icon ? 'pl-11' : ''} ${rightIcon ? 'pr-11' : ''} ${className}`}
          {...props}
        />
        {icon && (
          <div className="absolute left-3.5 top-1/2 transform -translate-y-1/2 text-gray-400">
            {icon}
          </div>
        )}
        {rightIcon && (
          <button 
            type="button"
            onClick={onRightIconClick}
            className={`absolute right-3.5 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 ${onRightIconClick ? 'cursor-pointer' : 'cursor-default'}`}
          >
            {rightIcon}
          </button>
        )}
      </div>
      {error && <p className="mt-1 text-xs text-red-500 ml-1">{error}</p>}
    </div>
  );
};