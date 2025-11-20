import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Button } from '../../../components/Button';
import { OTPInput } from '../../../components/OTPInput';

export const ContractorForgotPasswordVerifyOTP: React.FC = () => {
  const navigate = useNavigate();

  const handleVerify = () => {
    navigate('/contractor/auth/forgot-password/verified');
  };

  return (
    <div className="min-h-screen bg-bg-soft flex flex-col px-6 pt-8 pb-8">
      <div className="mb-8">
        <button onClick={() => navigate(-1)} className="p-2 -ml-2 text-gray-600 hover:text-primary">
          <ArrowLeft size={24} />
        </button>
      </div>

      <div className="flex-1 flex flex-col items-center text-center">
        <h1 className="text-2xl font-bold text-primary mb-2">OTP ยืนยันตัวตน</h1>
        <p className="text-gray-500 mb-8 max-w-xs">
          กรอกรหัสยืนยัน (OTP) ที่เราส่งไปยังเบอร์โทรศัพท์ของคุณ
        </p>

        <div className="mb-10">
          <OTPInput onChange={(otp) => console.log(otp)} />
        </div>

        <Button fullWidth onClick={handleVerify} className="mb-4">
          ยืนยัน
        </Button>

        <p className="text-gray-500 text-sm">
          ไม่ได้รับรหัส?{' '}
          <button className="text-secondary font-bold hover:underline">
            ส่งอีกครั้ง
          </button>
        </p>
      </div>
    </div>
  );
};