import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  onBack?: () => void;
  rightAction?: React.ReactNode;
}

export const PageHeader: React.FC<PageHeaderProps> = ({ title, subtitle, onBack, rightAction }) => {
  const navigate = useNavigate();

  return (
    <div className="bg-white px-6 pt-6 pb-4 rounded-b-3xl shadow-sm sticky top-0 z-30">
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <button 
            onClick={onBack || (() => navigate(-1))} 
            className="p-2 -ml-2 mr-2 text-gray-600 hover:text-primary rounded-full hover:bg-gray-50"
          >
            <ArrowLeft size={24} />
          </button>
          <div>
            <h1 className="text-xl font-bold text-primary">{title}</h1>
            {subtitle && <p className="text-gray-500 text-xs">{subtitle}</p>}
          </div>
        </div>
        {rightAction && <div>{rightAction}</div>}
      </div>
    </div>
  );
};