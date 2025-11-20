import React from 'react';
import { Check } from 'lucide-react';
import { Button } from './Button';

interface SuccessScreenProps {
  title: string;
  subtitle: string;
  buttonText: string;
  onButtonClick: () => void;
  icon?: React.ReactNode;
}

export const SuccessScreen: React.FC<SuccessScreenProps> = ({ 
  title, 
  subtitle, 
  buttonText, 
  onButtonClick,
  icon 
}) => {
  return (
    <div className="min-h-screen bg-bg-soft flex flex-col px-6 py-12">
      <div className="flex-1 flex flex-col items-center justify-center text-center">
        <div className="w-32 h-32 bg-orange-100 rounded-full flex items-center justify-center mb-8 relative">
           <div className="absolute inset-0 bg-secondary/10 rounded-full animate-pulse"></div>
           {icon || <Check size={64} className="text-secondary" />}
        </div>
        
        <h1 className="text-2xl font-bold text-primary mb-2">{title}</h1>
        <p className="text-gray-500">{subtitle}</p>
      </div>
      
      <div className="mt-auto">
        <Button fullWidth onClick={onButtonClick}>
          {buttonText}
        </Button>
      </div>
    </div>
  );
};