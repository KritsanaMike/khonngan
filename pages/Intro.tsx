import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Search, Users } from 'lucide-react';
import { Button } from '../components/Button';

export const Intro: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col min-h-screen bg-bg-soft p-6 relative">
      <div className="flex-1 flex flex-col items-center justify-center mt-10">
        {/* Illustration Placeholder */}
        <div className="w-full aspect-square max-w-sm bg-secondary-light/30 rounded-full flex items-center justify-center mb-10 relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-secondary/20 to-transparent rounded-full" />
            <Users size={120} className="text-secondary drop-shadow-lg" />
            <div className="absolute bottom-10 right-10 bg-white p-4 rounded-2xl shadow-lg">
                <Search size={32} className="text-primary" />
            </div>
        </div>

        <div className="w-full text-left space-y-2">
          <h1 className="text-5xl font-bold text-primary leading-tight">
            คนค้น<span className="text-secondary">งาน</span>
          </h1>
          <h1 className="text-5xl font-bold text-secondary leading-tight">
            งานค้น<span className="text-primary">คน</span>
          </h1>
        </div>
        
        <p className="text-gray-500 mt-6 text-lg leading-relaxed">
          เชื่อมต่อผู้รับเหมาและคนงานก่อสร้างมืออาชีพ ง่าย รวดเร็ว และเชื่อถือได้ในที่เดียว
        </p>
      </div>

      <div className="mt-auto pb-8 flex justify-end">
        <button 
            onClick={() => navigate('/select-role')}
            className="bg-primary text-white p-5 rounded-full shadow-lg shadow-primary/30 hover:scale-105 transition-transform"
        >
            <ArrowRight size={28} />
        </button>
      </div>
    </div>
  );
};