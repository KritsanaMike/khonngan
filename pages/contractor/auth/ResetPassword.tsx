import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Eye, EyeOff, Lock } from 'lucide-react';
import { Button } from '../../../components/Button';
import { Input } from '../../../components/Input';

export const ContractorResetPassword: React.FC = () => {
  const navigate = useNavigate();
  const [showPass, setShowPass] = useState(false);
  const [showConfirmPass, setShowConfirmPass] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/contractor/auth/reset-password/success');
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
          <h1 className="text-2xl font-bold text-primary mb-2">ตั้งรหัสผ่านใหม่</h1>
          <p className="text-gray-500">
            กรุณากรอกรหัสผ่านใหม่ของคุณ
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6 bg-white p-6 rounded-3xl shadow-sm">
          <div>
            <Input 
                label="รหัสผ่านใหม่" 
                placeholder="••••••••" 
                type={showPass ? "text" : "password"} 
                icon={<Lock size={20} />}
                rightIcon={showPass ? <EyeOff size={20} /> : <Eye size={20} />}
                onRightIconClick={() => setShowPass(!showPass)}
                required
            />
            <p className="text-xs text-gray-400 ml-1 -mt-2">**ต้องมีอย่างน้อย 8 ตัวอักษร</p>
          </div>
          
          <Input 
            label="ยืนยันรหัสผ่านใหม่" 
            placeholder="••••••••" 
            type={showConfirmPass ? "text" : "password"} 
            icon={<Lock size={20} />}
            rightIcon={showConfirmPass ? <EyeOff size={20} /> : <Eye size={20} />}
            onRightIconClick={() => setShowConfirmPass(!showConfirmPass)}
            required
          />

          <Button type="submit" fullWidth className="mt-4">
            บันทึกรหัสผ่านใหม่
          </Button>
        </form>
      </div>
    </div>
  );
};