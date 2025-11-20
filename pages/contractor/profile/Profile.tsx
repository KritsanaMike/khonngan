import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Building, Phone, Mail, MapPin, Edit, FileText, Users, Star, User } from 'lucide-react';
import { PageHeader } from '../../../components/PageHeader';
import { Button } from '../../../components/Button';

export const ContractorProfile: React.FC = () => {
  const navigate = useNavigate();

  // Mock Data
  const profile = {
    companyName: 'บริษัท บิวดิ้ง จำกัด',
    contactName: 'คุณสมชาย (ผู้จัดการ)',
    phone: '02-999-9999',
    email: 'contact@building.co.th',
    type: 'JURISTIC', // JURISTIC or INDIVIDUAL
    taxId: '0105551234567',
    province: 'กรุงเทพมหานคร',
    address: '123/45 ถ.สุขุมวิท แขวงคลองตัน เขตคลองเตย 10110',
    description: 'รับเหมาก่อสร้าง ต่อเติม รีโนเวทบ้านและอาคารพาณิชย์ มีทีมวิศวกรและช่างฝีมือประสบการณ์กว่า 15 ปี พร้อมให้บริการด้วยความเป็นมืออาชีพ งานเสร็จตรงเวลา',
    stats: {
      posts: 12,
      hired: 35,
      rating: 4.5
    }
  };

  return (
    <div className="min-h-screen bg-bg-soft pb-24">
      <PageHeader title="โปรไฟล์ผู้รับเหมา" subtitle="ข้อมูลบัญชีและรายละเอียดธุรกิจของคุณ" />

      <div className="px-6 py-6 space-y-6">
         {/* 1. Profile Card */}
         <div className="bg-white p-6 rounded-3xl shadow-sm flex items-start space-x-4">
            <div className="w-20 h-20 bg-secondary rounded-full flex items-center justify-center text-white text-2xl font-bold shadow-lg shadow-secondary/20 shrink-0">
                บจ
            </div>
            <div className="flex-1 min-w-0">
                <h2 className="text-xl font-bold text-primary truncate">{profile.companyName}</h2>
                <p className="text-gray-600 text-sm truncate">{profile.contactName}</p>
                <div className="flex flex-col mt-1 space-y-0.5">
                    <span className="text-xs text-gray-400 flex items-center">
                        <Phone size={12} className="mr-1" /> {profile.phone}
                    </span>
                    <span className="text-xs text-gray-400 flex items-center">
                        <Mail size={12} className="mr-1" /> {profile.email}
                    </span>
                </div>
                <div className="mt-3">
                    <span className={`px-3 py-1 rounded-full text-[10px] font-bold ${
                        profile.type === 'JURISTIC' 
                        ? 'bg-blue-50 text-primary border border-blue-100' 
                        : 'bg-orange-50 text-secondary border border-orange-100'
                    }`}>
                        {profile.type === 'JURISTIC' ? 'นิติบุคคล' : 'บุคคลธรรมดา'}
                    </span>
                </div>
            </div>
         </div>

         {/* 2. Stats Card */}
         <div className="bg-white p-5 rounded-3xl shadow-sm">
            <h3 className="font-bold text-primary mb-4 flex items-center">
                <Users size={18} className="mr-2 text-secondary" />
                สถิติการใช้งาน
            </h3>
            <div className="grid grid-cols-3 gap-2 text-center divide-x divide-gray-100">
                <div>
                    <p className="text-2xl font-bold text-primary">{profile.stats.posts}</p>
                    <p className="text-[10px] text-gray-400 mt-1">ประกาศงาน</p>
                </div>
                <div>
                    <p className="text-2xl font-bold text-primary">{profile.stats.hired}</p>
                    <p className="text-[10px] text-gray-400 mt-1">จ้างงานแล้ว</p>
                </div>
                <div>
                    <div className="flex items-center justify-center text-2xl font-bold text-secondary">
                        {profile.stats.rating} <Star size={16} fill="currentColor" className="ml-1" />
                    </div>
                    <p className="text-[10px] text-gray-400 mt-1">คะแนนรีวิว</p>
                </div>
            </div>
         </div>

         {/* 3. Business Details Card */}
         <div className="bg-white p-6 rounded-3xl shadow-sm space-y-5">
            <div className="flex items-center mb-2">
               <div className="w-1 h-6 bg-primary rounded-full mr-2"></div>
               <h3 className="text-lg font-bold text-primary">ข้อมูลธุรกิจ</h3>
            </div>
            
            <div className="space-y-4">
                <div className="grid grid-cols-3 gap-4">
                    <p className="text-xs text-gray-400 col-span-1">ชื่อบริษัท</p>
                    <p className="text-sm text-primary font-medium col-span-2">{profile.companyName}</p>
                </div>
                <div className="grid grid-cols-3 gap-4">
                    <p className="text-xs text-gray-400 col-span-1">เลขผู้เสียภาษี</p>
                    <p className="text-sm text-primary font-medium col-span-2">{profile.taxId}</p>
                </div>
                <div className="grid grid-cols-3 gap-4">
                    <p className="text-xs text-gray-400 col-span-1">พื้นที่ให้บริการ</p>
                    <p className="text-sm text-primary font-medium col-span-2">{profile.province}</p>
                </div>
                <div className="grid grid-cols-3 gap-4">
                    <p className="text-xs text-gray-400 col-span-1">ที่อยู่ติดต่อ</p>
                    <p className="text-sm text-primary font-medium col-span-2">{profile.address}</p>
                </div>
            </div>

            <div className="pt-4 border-t border-gray-50">
                <p className="text-xs text-gray-400 mb-2">คำอธิบายเพิ่มเติม</p>
                <p className="text-sm text-gray-600 leading-relaxed">
                    {profile.description}
                </p>
            </div>
         </div>

         {/* Action Buttons */}
         <div className="mt-4 space-y-3">
             <Button fullWidth onClick={() => navigate('/contractor/profile/edit')} icon={<Edit size={18}/>}>
                 แก้ไขโปรไฟล์
             </Button>
             <button 
                className="w-full py-3 text-red-500 text-sm font-medium hover:bg-red-50 rounded-xl transition-colors"
                onClick={() => navigate('/auth/login')}
             >
                 ออกจากระบบ
             </button>
         </div>
      </div>
    </div>
  );
};