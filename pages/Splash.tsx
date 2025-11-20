import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { HardHat } from 'lucide-react';

export const Splash: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/intro');
    }, 2500);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-secondary relative overflow-hidden">
      <div className="absolute top-[-10%] right-[-10%] w-64 h-64 bg-white/10 rounded-full blur-3xl" />
      <div className="absolute bottom-[-10%] left-[-10%] w-64 h-64 bg-white/10 rounded-full blur-3xl" />
      
      <div className="z-10 flex flex-col items-center animate-pulse">
        <div className="w-28 h-28 bg-white rounded-3xl shadow-xl flex items-center justify-center mb-6 transform rotate-3">
          <HardHat size={64} className="text-secondary" />
        </div>
        <h1 className="text-4xl font-bold text-white tracking-wide">คนงาน</h1>
        <p className="text-white/80 mt-2 text-sm">แพลตฟอร์มงานก่อสร้างครบวงจร</p>
      </div>
    </div>
  );
};