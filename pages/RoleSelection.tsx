import React from 'react';
import { useNavigate } from 'react-router-dom';
import { HardHat, Hammer } from 'lucide-react';

export const RoleSelection: React.FC = () => {
  const navigate = useNavigate();

  const handleSelect = (role: 'contractor' | 'worker') => {
    if (role === 'contractor') {
      navigate('/contractor/auth/login');
    } else {
      navigate(`/auth/login?role=${role}`);
    }
  };

  return (
    <div className="min-h-screen bg-bg-soft px-6 py-12 flex flex-col">
      <div className="text-center mb-10">
        <div className="inline-flex p-3 bg-secondary rounded-xl mb-4 shadow-lg shadow-secondary/20">
           <HardHat size={32} className="text-white" />
        </div>
        <h2 className="text-2xl font-bold text-primary">เริ่มต้นกันเลย</h2>
        <p className="text-gray-500 mt-2">โปรดเลือกประเภทผู้ใช้งานของคุณ</p>
      </div>

      <div className="space-y-6 flex-1 flex flex-col justify-center">
        <button
          onClick={() => handleSelect('worker')}
          className="group relative bg-white p-6 rounded-3xl shadow-sm hover:shadow-xl border-2 border-transparent hover:border-secondary transition-all duration-300 text-left flex items-center space-x-5"
        >
          <div className="bg-orange-50 p-4 rounded-2xl group-hover:bg-secondary transition-colors duration-300">
            <Hammer size={32} className="text-secondary group-hover:text-white transition-colors duration-300" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-primary">คนงาน</h3>
            <p className="text-sm text-gray-500 mt-1">หางานก่อสร้างที่ตรงกับทักษะ</p>
          </div>
        </button>

        <button
          onClick={() => handleSelect('contractor')}
          className="group relative bg-white p-6 rounded-3xl shadow-sm hover:shadow-xl border-2 border-transparent hover:border-primary transition-all duration-300 text-left flex items-center space-x-5"
        >
          <div className="bg-indigo-50 p-4 rounded-2xl group-hover:bg-primary transition-colors duration-300">
            <HardHat size={32} className="text-primary group-hover:text-white transition-colors duration-300" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-primary">ผู้รับเหมา</h3>
            <p className="text-sm text-gray-500 mt-1">หาคนงานและทีมช่างฝีมือ</p>
          </div>
        </button>
      </div>
      
      <div className="mt-8 text-center text-xs text-gray-400">
        v1.0.0 By Khon Ngan Platform
      </div>
    </div>
  );
};