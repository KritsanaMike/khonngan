import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Smartphone } from 'lucide-react';
import { Button } from '../../../components/Button';
import { Input } from '../../../components/Input';

export const ContractorForgotPassword: React.FC = () => {
  const navigate = useNavigate();

  const handleReset = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/contractor/auth/forgot-password/verify-otp');
  };

  return (
    <div className="min-h-screen bg-bg-soft flex flex-col px-6 pt-8 pb-8">
      <div className="mb-8">
        <button onClick={() => navigate(-1)} className="p-2 -ml-2 text-gray-600 hover:text-primary">
          <ArrowLeft size={24} />
        </button>
      </div>

      <div className="flex-1 flex flex-col">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-primary mb-2">ลืมรหัสผ่าน?</h1>
          <p className="text-gray-500">
            ในการรีเซ็ตรหัสผ่านคุณต้องใช้เบอร์โทรศัพท์เพื่อยืนยันตัวตน
          </p>
        </div>

        <form onSubmit={handleReset} className="space-y-6 bg-white p-6 rounded-3xl shadow-sm mb-6">
          <Input 
            label="เบอร์โทรศัพท์" 
            placeholder="+66 1234 5678" 
            type="tel"
            icon={<Smartphone size={20} />}
            required
          />
          
          <Button type="submit" fullWidth>
            รีเซ็ตรหัสผ่าน
          </Button>
        </form>

        <div className="mt-auto">
           <Button 
            type="button" 
            variant="outline" 
            fullWidth 
            onClick={() => navigate('/contractor/auth/login')}
            className="bg-transparent border-secondary text-secondary hover:bg-secondary/10"
           >
             กลับไปหน้าเข้าสู่ระบบ
           </Button>
        </div>
      </div>
    </div>
  );
};