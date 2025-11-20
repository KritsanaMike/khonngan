import React from 'react';
import { useNavigate } from 'react-router-dom';
import { SuccessScreen } from '../../../components/SuccessScreen';

export const ContractorEditProfileSuccess: React.FC = () => {
  const navigate = useNavigate();

  return (
    <SuccessScreen
      title="บันทึกข้อมูลสำเร็จ"
      subtitle="เราได้อัปเดตโปรไฟล์ของคุณเรียบร้อยแล้ว"
      buttonText="กลับไปหน้าโปรไฟล์"
      onButtonClick={() => navigate('/contractor/profile')}
    />
  );
};