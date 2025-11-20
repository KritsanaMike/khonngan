import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Camera, User, Building, MapPin, FileText, Phone, Mail } from 'lucide-react';
import { PageHeader } from '../../../components/PageHeader';
import { Input } from '../../../components/Input';
import { Button } from '../../../components/Button';

export const ContractorEditProfile: React.FC = () => {
  const navigate = useNavigate();

  // Mock initial data
  const [formData, setFormData] = useState({
    type: 'JURISTIC', // JURISTIC | INDIVIDUAL
    companyName: 'บริษัท บิวดิ้ง จำกัด',
    contactName: 'คุณสมชาย',
    taxId: '0105551234567',
    phone: '02-999-9999',
    email: 'contact@building.co.th',
    province: 'กรุงเทพมหานคร',
    address: '123/45 ถ.สุขุมวิท แขวงคลองตัน เขตคลองเตย 10110',
    description: 'รับเหมาก่อสร้าง ต่อเติม รีโนเวทบ้านและอาคารพาณิชย์...'
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleTypeChange = (type: string) => {
    setFormData(prev => ({ ...prev, type }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API save
    setTimeout(() => {
      navigate('/contractor/profile/edit/success');
    }, 800);
  };

  return (
    <div className="min-h-screen bg-bg-soft pb-24">
      <PageHeader title="แก้ไขโปรไฟล์ผู้รับเหมา" onBack={() => navigate('/contractor/profile')} />

      <form onSubmit={handleSubmit} className="px-6 py-6 space-y-6">
        
        {/* Avatar Edit */}
        <div className="flex justify-center mb-6">
            <div className="relative group cursor-pointer">
                <div className="w-28 h-28 bg-secondary rounded-full flex items-center justify-center border-4 border-white shadow-md overflow-hidden">
                     <span className="text-white text-3xl font-bold">บจ</span>
                </div>
                <div className="absolute inset-0 bg-black/20 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <Camera className="text-white" size={24} />
                </div>
                <div className="absolute bottom-0 right-0 bg-white p-2 rounded-full shadow-sm border border-gray-100">
                    <Camera size={16} className="text-secondary" />
                </div>
            </div>
        </div>

        <div className="bg-white p-6 rounded-3xl shadow-sm space-y-5">
          {/* Business Type */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2 ml-1">ประเภทธุรกิจ</label>
            <div className="flex space-x-3">
                <button
                    type="button"
                    onClick={() => handleTypeChange('JURISTIC')}
                    className={`flex-1 py-3 rounded-xl border text-sm font-bold transition-all ${
                        formData.type === 'JURISTIC' 
                        ? 'bg-orange-50 border-secondary text-secondary' 
                        : 'bg-white border-gray-200 text-gray-500 hover:bg-gray-50'
                    }`}
                >
                    นิติบุคคล
                </button>
                <button
                    type="button"
                    onClick={() => handleTypeChange('INDIVIDUAL')}
                    className={`flex-1 py-3 rounded-xl border text-sm font-bold transition-all ${
                        formData.type === 'INDIVIDUAL' 
                        ? 'bg-orange-50 border-secondary text-secondary' 
                        : 'bg-white border-gray-200 text-gray-500 hover:bg-gray-50'
                    }`}
                >
                    บุคคลธรรมดา
                </button>
            </div>
          </div>

          <Input 
            label="ชื่อบริษัท" 
            name="companyName"
            value={formData.companyName}
            onChange={handleChange}
            icon={<Building size={20} />}
            required
          />

          <Input 
            label="ชื่อผู้ติดต่อ" 
            name="contactName"
            value={formData.contactName}
            onChange={handleChange}
            icon={<User size={20} />}
          />

          <Input 
            label="เลขประจำตัวผู้เสียภาษี" 
            name="taxId"
            value={formData.taxId}
            onChange={handleChange}
            icon={<FileText size={20} />}
            required
          />

          <div className="grid grid-cols-1 gap-4">
            <Input 
                label="เบอร์โทรศัพท์" 
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                icon={<Phone size={20} />}
                required
            />
            <Input 
                label="อีเมล" 
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                icon={<Mail size={20} />}
            />
          </div>

          <div className="w-full">
            <label className="block text-sm font-medium text-gray-700 mb-1.5 ml-1">พื้นที่ให้บริการ (เลือกจังหวัด)</label>
            <div className="relative">
              <div className="absolute left-3.5 top-1/2 transform -translate-y-1/2 text-gray-400">
                 <MapPin size={20} />
              </div>
              <select 
                name="province"
                value={formData.province}
                onChange={handleChange}
                className="w-full pl-11 pr-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-secondary/50 appearance-none text-text-main"
              >
                <option value="">เลือกจังหวัด</option>
                <option value="กรุงเทพมหานคร">กรุงเทพมหานคร</option>
                <option value="นนทบุรี">นนทบุรี</option>
                <option value="สมุทรปราการ">สมุทรปราการ</option>
                <option value="ปทุมธานี">ปทุมธานี</option>
                <option value="นครปฐม">นครปฐม</option>
                <option value="สมุทรสาคร">สมุทรสาคร</option>
              </select>
              <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none text-gray-500">▼</div>
            </div>
          </div>

          <div className="w-full">
            <label className="block text-sm font-medium text-gray-700 mb-1.5 ml-1">ที่อยู่ติดต่อ</label>
            <textarea
              name="address"
              rows={2}
              value={formData.address}
              onChange={handleChange}
              className="w-full px-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-secondary/50 transition-all text-text-main placeholder-gray-400 resize-none"
              placeholder="บ้านเลขที่ หมู่ ถนน แขวง/ตำบล เขต/อำเภอ..."
            />
          </div>

          <div className="w-full">
            <label className="block text-sm font-medium text-gray-700 mb-1.5 ml-1">คำอธิบายเพิ่มเติม</label>
            <textarea
              name="description"
              rows={4}
              value={formData.description}
              onChange={handleChange}
              className="w-full px-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-secondary/50 transition-all text-text-main placeholder-gray-400 resize-none"
              placeholder="อธิบายเกี่ยวกับงานหรือทีมของคุณเพื่อให้คนงานรู้จักมากขึ้น"
            />
          </div>
        </div>

        <div className="mt-4 pt-2">
            <Button type="submit" fullWidth>
                บันทึกโปรไฟล์
            </Button>
            <button 
                type="button"
                onClick={() => navigate('/contractor/profile')}
                className="w-full mt-3 py-3 text-gray-500 text-sm font-medium hover:bg-gray-100 rounded-xl transition-colors"
            >
                ยกเลิก
            </button>
        </div>
      </form>
    </div>
  );
};