import React from 'react';
import { useNavigate } from 'react-router-dom';
import { SuccessScreen } from '../../../components/SuccessScreen';

export const ContractorForgotPasswordVerified: React.FC = () => {
  const navigate = useNavigate();

  return (
    <SuccessScreen
      title="ยืนยันตัวตนสำเร็จ"
      subtitle="บัญชีของคุณได้รับการยืนยันเรียบร้อยแล้ว"
      buttonText="ดำเนินการต่อ"
      onButtonClick={() => navigate('/contractor/auth/reset-password')}
    />
  );
};