import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Check, Mail } from 'lucide-react';
import { SuccessScreen } from '../../../components/SuccessScreen';

export const ContractorVerifySuccess: React.FC = () => {
  const navigate = useNavigate();

  return (
    <SuccessScreen
      title="ยืนยันตัวตนสำเร็จ"
      subtitle="บัญชีของคุณได้รับการยืนยันเรียบร้อยแล้ว"
      buttonText="ดำเนินการต่อ"
      onButtonClick={() => navigate('/contractor/profile-setup')}
      icon={
        <div className="relative">
            <Mail size={64} className="text-secondary" />
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