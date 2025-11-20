
import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { 
  Briefcase, 
  MapPin, 
  DollarSign, 
  Users, 
  ChevronDown, 
  ChevronUp, 
  Upload, 
  Image as ImageIcon, 
  X,
  CheckSquare,
  Square,
  Circle,
  CheckCircle2
} from 'lucide-react';
import { PageHeader } from '../../../components/PageHeader';
import { Input } from '../../../components/Input';
import { Button } from '../../../components/Button';

// Mock contractor info
const CONTRACTOR_INFO = {
  name: 'บริษัท บิวดิ้ง จำกัด',
  contact: 'คุณสมชาย (ผู้จัดการโครงการ)',
  phone: '089-123-4567',
  avatarUrl: null // null means show initial
};

const BENEFITS_OPTIONS = [
  'มีรถรับส่ง',
  'มีประกันอุบัติเหตุ',
  'มีประกันสังคม (เมื่อผ่านโปร)',
  'มีอาหารกลางวันเลี้ยง',
  'มีเบี้ยขยัน / โบนัส',
  'มีที่พักให้',
  'มีโอที (OT)'
];

const EMPLOYMENT_TYPES = [
  { id: 'daily', label: 'รายวัน' },
  { id: 'weekly', label: 'รายสัปดาห์' },
  { id: 'monthly', label: 'รายเดือน' },
  { id: 'lumpsum', label: 'เหมางาน' },
];

export const CreateEditJob: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const isEdit = !!id;

  // Form State
  const [formData, setFormData] = useState({
    title: isEdit ? 'ช่างปูนฉาบผนัง (ด่วน)' : '',
    wage: isEdit ? '600' : '',
    headcount: isEdit ? '3' : '',
    locationName: isEdit ? 'โครงการก่อสร้างหมู่บ้านจัดสรร The Park' : '',
    subdistrict: isEdit ? 'บางนา' : '',
    province: isEdit ? 'กรุงเทพฯ' : '',
    requirements: isEdit ? '• มีประสบการณ์งานฉาบ 1 ปีขึ้นไป\n• ขยัน อดทน ไม่ทิ้งงาน\n• สามารถเริ่มงานได้ทันที' : '',
    employmentType: 'daily',
    benefits: isEdit ? ['มีอาหารกลางวันเลี้ยง', 'มีโอที (OT)'] : [] as string[],
    images: isEdit ? ['https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=300&q=80', 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=300&q=80'] : [] as string[]
  });

  // UI State for collapsible sections
  const [isBenefitsOpen, setIsBenefitsOpen] = useState(true);
  const [isEmpTypeOpen, setIsEmpTypeOpen] = useState(true);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const toggleBenefit = (benefit: string) => {
    setFormData(prev => {
      const exists = prev.benefits.includes(benefit);
      if (exists) {
        return { ...prev, benefits: prev.benefits.filter(b => b !== benefit) };
      } else {
        return { ...prev, benefits: [...prev.benefits, benefit] };
      }
    });
  };

  const handleUpload = () => {
    // Mock upload - add a placeholder image
    const newImage = 'https://images.unsplash.com/photo-1590069261209-f8e9b8642343?auto=format&fit=crop&w=300&q=80';
    setFormData(prev => ({ ...prev, images: [...prev.images, newImage] }));
  };

  const removeImage = (indexToRemove: number) => {
    setFormData(prev => ({ ...prev, images: prev.images.filter((_, i) => i !== indexToRemove) }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock API call
    console.log('Submitting:', formData);
    navigate('/contractor/home');
  };

  return (
    <div className="min-h-screen bg-bg-soft pb-24">
      <PageHeader title={isEdit ? "แก้ไขประกาศงาน" : "สร้างประกาศงาน"} />

      <form onSubmit={handleSubmit} className="px-4 py-4 space-y-4 max-w-md mx-auto">
        
        {/* 1. Contractor Info Header (Read-only) */}
        <div className="bg-white p-4 rounded-3xl shadow-sm flex items-center space-x-4">
          <div className="w-14 h-14 bg-secondary rounded-full flex items-center justify-center text-white text-xl font-bold shadow-md shrink-0">
             {CONTRACTOR_INFO.avatarUrl ? (
               <img src={CONTRACTOR_INFO.avatarUrl} alt="Avatar" className="w-full h-full rounded-full object-cover" />
             ) : (
               'บจ'
             )}
          </div>
          <div>
            <h3 className="font-bold text-primary text-lg">{CONTRACTOR_INFO.name}</h3>
            <p className="text-gray-500 text-sm">{CONTRACTOR_INFO.contact}</p>
          </div>
        </div>

        {/* 2. Main Job Information Form */}
        <div className="bg-white p-5 rounded-3xl shadow-sm space-y-4">
          <div className="flex items-center mb-1">
             <div className="w-1 h-6 bg-primary rounded-full mr-2"></div>
             <h3 className="text-lg font-bold text-primary">ข้อมูลงาน</h3>
          </div>

          <Input 
            label="ชื่องาน / ตำแหน่ง" 
            name="title"
            placeholder="เช่น ช่างปูน, กรรมกร, ช่างเชื่อม" 
            value={formData.title}
            onChange={handleChange}
            required
          />

          <div className="grid grid-cols-2 gap-4">
            <Input 
              label="ค่าจ้าง (บาท/วัน)" 
              name="wage"
              type="number"
              placeholder="เช่น 600"
              value={formData.wage}
              onChange={handleChange}
              required
            />
            <Input 
              label="จำนวนคนรับ" 
              name="headcount"
              type="number"
              placeholder="เช่น 3"
              value={formData.headcount}
              onChange={handleChange}
              required
            />
          </div>

          <Input 
            label="สถานที่ปฏิบัติงาน" 
            name="locationName"
            placeholder="ชื่อโครงการ หรือ สถานที่" 
            value={formData.locationName}
            onChange={handleChange}
          />

          <div className="grid grid-cols-2 gap-4">
            <Input 
              label="ตำบล / แขวง" 
              name="subdistrict"
              placeholder="เช่น บางนา"
              value={formData.subdistrict}
              onChange={handleChange}
              required
            />
            <Input 
              label="จังหวัด" 
              name="province"
              placeholder="เช่น กรุงเทพฯ"
              value={formData.province}
              onChange={handleChange}
              required
            />
          </div>

          <div className="w-full">
            <label className="block text-sm font-medium text-gray-700 mb-1.5 ml-1">คุณสมบัติผู้สมัครและรายละเอียด</label>
            <textarea
              name="requirements"
              rows={5}
              className="w-full px-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-secondary/50 transition-all text-text-main placeholder-gray-400 resize-none"
              placeholder={"• มีประสบการณ์ทำงาน...\n• ขยัน อดทน\n• เริ่มงานได้ทันที"}
              value={formData.requirements}
              onChange={handleChange}
            />
          </div>
        </div>

        {/* 3. Benefits Section (Collapsible) */}
        <div className="bg-white rounded-3xl shadow-sm overflow-hidden">
          <button 
            type="button"
            onClick={() => setIsBenefitsOpen(!isBenefitsOpen)}
            className="w-full flex justify-between items-center p-5 bg-white active:bg-gray-50 transition-colors"
          >
            <div className="flex items-center">
               <div className="w-1 h-6 bg-secondary rounded-full mr-2"></div>
               <h3 className="text-lg font-bold text-primary">สวัสดิการ</h3>
            </div>
            {isBenefitsOpen ? <ChevronUp className="text-gray-400"/> : <ChevronDown className="text-gray-400"/>}
          </button>
          
          {isBenefitsOpen && (
            <div className="px-5 pb-5 space-y-3">
              {BENEFITS_OPTIONS.map((benefit) => {
                const isSelected = formData.benefits.includes(benefit);
                return (
                  <div 
                    key={benefit} 
                    onClick={() => toggleBenefit(benefit)}
                    className="flex items-center cursor-pointer group"
                  >
                    <div className={`w-6 h-6 rounded-md border-2 flex items-center justify-center mr-3 transition-all ${isSelected ? 'bg-secondary border-secondary' : 'border-gray-300 bg-white'}`}>
                      {isSelected && <CheckSquare size={16} className="text-white" />}
                    </div>
                    <span className={`text-sm ${isSelected ? 'text-primary font-medium' : 'text-gray-600 group-hover:text-gray-800'}`}>
                      {benefit}
                    </span>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* 4. Employment Type Section (Collapsible) */}
        <div className="bg-white rounded-3xl shadow-sm overflow-hidden">
          <button 
            type="button"
            onClick={() => setIsEmpTypeOpen(!isEmpTypeOpen)}
            className="w-full flex justify-between items-center p-5 bg-white active:bg-gray-50 transition-colors"
          >
            <div className="flex items-center">
               <div className="w-1 h-6 bg-blue-400 rounded-full mr-2"></div>
               <h3 className="text-lg font-bold text-primary">ประเภทการจ้าง</h3>
            </div>
            {isEmpTypeOpen ? <ChevronUp className="text-gray-400"/> : <ChevronDown className="text-gray-400"/>}
          </button>
          
          {isEmpTypeOpen && (
            <div className="px-5 pb-5 space-y-3">
              {EMPLOYMENT_TYPES.map((type) => {
                const isSelected = formData.employmentType === type.id;
                return (
                  <div 
                    key={type.id} 
                    onClick={() => setFormData(prev => ({...prev, employmentType: type.id}))}
                    className="flex items-center cursor-pointer group"
                  >
                    <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center mr-3 transition-all ${isSelected ? 'border-primary' : 'border-gray-300'}`}>
                       {isSelected && <div className="w-2.5 h-2.5 bg-primary rounded-full" />}
                    </div>
                    <span className={`text-sm ${isSelected ? 'text-primary font-medium' : 'text-gray-600 group-hover:text-gray-800'}`}>
                      {type.label}
                    </span>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* 5. Worksite Images */}
        <div className="bg-white p-5 rounded-3xl shadow-sm space-y-4">
          <div className="flex items-center mb-1">
             <div className="w-1 h-6 bg-orange-400 rounded-full mr-2"></div>
             <h3 className="text-lg font-bold text-primary">สภาพหน้างาน</h3>
          </div>
          
          {/* Upload Area */}
          <div 
            onClick={handleUpload}
            className="border-2 border-dashed border-secondary/40 bg-orange-50/50 rounded-2xl p-8 flex flex-col items-center justify-center cursor-pointer hover:bg-orange-50 transition-colors"
          >
            <div className="w-12 h-12 bg-white rounded-full shadow-sm flex items-center justify-center mb-2">
               <Upload size={24} className="text-secondary" />
            </div>
            <p className="text-secondary font-bold">อัปโหลดรูปภาพ</p>
            <p className="text-xs text-gray-400 mt-1">Select file (jpg, png)</p>
          </div>

          {/* Image Gallery */}
          {formData.images.length > 0 && (
            <div className="grid grid-cols-2 gap-3 mt-4">
               {formData.images.map((img, idx) => (
                 <div key={idx} className="relative aspect-video rounded-xl overflow-hidden shadow-sm group">
                    <img src={img} alt={`Worksite ${idx}`} className="w-full h-full object-cover" />
                    <button 
                      type="button"
                      onClick={() => removeImage(idx)}
                      className="absolute top-2 right-2 w-6 h-6 bg-black/50 text-white rounded-full flex items-center justify-center hover:bg-red-500 transition-colors"
                    >
                      <X size={14} />
                    </button>
                 </div>
               ))}
            </div>
          )}
        </div>

        {/* Bottom Action */}
        <div className="pt-4 pb-8">
           <Button type="submit" fullWidth className="text-lg py-4 shadow-xl shadow-primary/20">
             {isEdit ? 'บันทึกการแก้ไข' : 'สร้างประกาศ'}
           </Button>
           
           {isEdit && (
             <button 
                type="button"
                className="w-full mt-4 py-3 text-red-500 font-medium hover:bg-red-50 rounded-xl transition-colors"
             >
               ลบประกาศงาน
             </button>
           )}
        </div>

      </form>
    </div>
  );
};
