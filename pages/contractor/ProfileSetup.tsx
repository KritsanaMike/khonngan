import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Camera } from 'lucide-react';
import { PageHeader } from '../../components/PageHeader';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { UserRole } from '../../types';

interface Props {
    setUserRole: (role: UserRole) => void;
}

export const ContractorProfileSetup: React.FC<Props> = ({ setUserRole }) => {
  const navigate = useNavigate();

  const handleSave = (e: React.FormEvent) => {
      e.preventDefault();
      setUserRole(UserRole.CONTRACTOR);
      navigate('/contractor/home');
  };

  return (
    <div className="min-h-screen bg-bg-soft pb-10">
      <PageHeader title="ตั้งค่าโปรไฟล์" />

      <form onSubmit={handleSave} className="px-6 py-6 space-y-6">
        <div className="flex justify-center mb-6">
            <div className="relative">
                <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center border-4 border-white shadow-md">
                    <span className="text-gray-400 text-3xl font-bold">รูป</span>
                </div>
                <button type="button" className="absolute bottom-0 right-0 bg-secondary text-white p-2 rounded-full shadow-sm hover:bg-secondary/90">
                    <Camera size={16} />
                </button>
            </div>
        </div>

        <div className="bg-white p-6 rounded-3xl shadow-sm space-y-4">
          <div className="flex space-x-4 mb-2">
            <label className="flex-1 flex items-center justify-center p-3 border border-secondary bg-orange-50 rounded-xl text-secondary font-bold cursor-pointer">
              <input type="radio" name="type" defaultChecked className="mr-2" />
              นิติบุคคล
            </label>
            <label className="flex-1 flex items-center justify-center p-3 border border-gray-200 rounded-xl text-gray-500 cursor-pointer">
              <input type="radio" name="type" className="mr-2" />
              บุคคลธรรมดา
            </label>
          </div>

          <Input 
            label="ชื่อบริษัท" 
            placeholder="ชื่อบริษัท หรือ ชื่อผู้รับเหมา" 
            required
          />

          <Input 
            label="เลขประจำตัวผู้เสียภาษี" 
            placeholder="13 หลัก" 
          />

          <div className="w-full mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1.5 ml-1">พื้นที่ให้บริการ</label>
            <div className="relative">
              <select className="w-full px-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-secondary/50 appearance-none text-text-main">
                <option>กรุงเทพมหานคร</option>
                <option>นนทบุรี</option>
                <option>สมุทรปราการ</option>
                <option>ปทุมธานี</option>
              </select>
              <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none text-gray-500">▼</div>
            </div>
          </div>

          <div className="w-full mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1.5 ml-1">คำอธิบายเพิ่มเติม</label>
            <textarea
              rows={3}
              className="w-full px-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-secondary/50 transition-all text-text-main placeholder-gray-400"
              placeholder="อธิบายเกี่ยวกับบริษัทหรือทีมงานของคุณ..."
            />
          </div>
        </div>

        <Button type="submit" fullWidth>
            บันทึกข้อมูล
        </Button>
      </form>
    </div>
  );
};