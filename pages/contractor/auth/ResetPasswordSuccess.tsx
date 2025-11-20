import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Key, Check } from 'lucide-react';
import { SuccessScreen } from '../../../components/SuccessScreen';

export const ContractorResetPasswordSuccess: React.FC = () => {
  const navigate = useNavigate();

  return (
    <SuccessScreen
      title="บันทึกรหัสผ่านสำเร็จ"
      subtitle="คุณสามารถใช้รหัสผ่านใหม่เพื่อเข้าสู่ระบบได้ทันที"
      buttonText="เข้าสู่ระบบ"
      onButtonClick={() => navigate('/contractor/auth/login')}
      icon={
        <div className="relative">
            <Key size={64} className="text-secondary" />
            <div className="absolute -bottom-2 -right-2 bg-white rounded-full p-1">
                <div className="bg-green-500 rounded-full p-1">
                    <Check size={16} className="text-white" />
                </div>
            </div>
        </div>
      }
    />
  );
};