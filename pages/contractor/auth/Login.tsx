import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Eye, EyeOff, ArrowLeft, Smartphone, Lock } from 'lucide-react';
import { Button } from '../../../components/Button';
import { Input } from '../../../components/Input';
import { UserRole } from '../../../types';

interface LoginProps {
  setUserRole: (role: UserRole) => void;
}

export const ContractorLogin: React.FC<LoginProps> = ({ setUserRole }) => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setUserRole(UserRole.CONTRACTOR);
      navigate('/contractor/home');
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-bg-soft flex flex-col">
      <div className="px-6 pt-8 pb-4">
        <button onClick={() => navigate('/select-role')} className="p-2 -ml-2 text-gray-600 hover:text-primary">
          <ArrowLeft size={24} />
        </button>
      </div>

      <div className="flex-1 px-6 pb-8 flex flex-col justify-center">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-primary mb-2">ยินดีต้อนรับ</h1>
          <p className="text-gray-500">
            กรุณากรอกเบอร์โทรศัพท์และรหัสผ่านเพื่อเข้าสู่ระบบ
          </p>
        </div>

        <form onSubmit={handleLogin} className="space-y-6 bg-white p-6 rounded-3xl shadow-sm">
          <Input 
            label="เบอร์โทรศัพท์" 
            placeholder="+66 1234 5678" 
            type="tel"
            icon={<Smartphone size={20} />}
            required
          />
          
          <Input 
            label="รหัสผ่าน" 
            placeholder="••••••••" 
            type={showPassword ? "text" : "password"} 
            icon={<Lock size={20} />}
            rightIcon={showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            onRightIconClick={() => setShowPassword(!showPassword)}
            required
          />

          <div className="flex justify-between items-center text-sm">
            <label className="flex items-center text-gray-500">
              <input type="checkbox" className="mr-2 rounded border-gray-300 text-secondary focus:ring-secondary" />
              จดจำฉันไว้
            </label>
            <button 
              type="button" 
              onClick={() => navigate('/contractor/auth/forgot-password')}
              className="text-secondary font-medium hover:underline"
            >
              ลืมรหัสผ่าน?
            </button>
          </div>

          <Button type="submit" fullWidth disabled={isLoading}>
            {isLoading ? 'กำลังเข้าสู่ระบบ...' : 'เข้าสู่ระบบ'}
          </Button>

          <div className="relative py-2">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-100"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-400">หรือ</span>
            </div>
          </div>

          <Button type="button" variant="secondary" fullWidth className="bg-orange-50 text-secondary hover:bg-orange-100 shadow-none">
            SIGN IN WITH GOOGLE
          </Button>
        </form>

        <div className="mt-8 text-center">
          <p className="text-gray-500">
            ยังไม่มีบัญชีผู้ใช้?{' '}
            <button 
              type="button"
              onClick={() => navigate('/contractor/auth/register')}
              className="text-primary font-bold hover:underline"
            >
              สมัครสมาชิก
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};