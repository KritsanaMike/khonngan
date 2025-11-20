import React from 'react';
import { useNavigate } from 'react-router-dom';
import { User, MapPin, Phone, Star, MessageSquare, CheckCircle } from 'lucide-react';
import { PageHeader } from '../../../components/PageHeader';
import { Button } from '../../../components/Button';

export const WorkerProfile: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-bg-soft pb-24">
      <PageHeader title="โปรไฟล์คนงาน" />
      
      <div className="px-6 py-6">
        {/* Profile Header */}
        <div className="bg-white p-6 rounded-3xl shadow-sm text-center mb-6 relative overflow-hidden">
           <div className="absolute top-0 left-0 w-full h-24 bg-primary/5"></div>
           <div className="relative z-10">
                <div className="w-24 h-24 bg-white rounded-full mx-auto p-1 shadow-md mb-3">
                    <div className="w-full h-full bg-gray-200 rounded-full flex items-center justify-center text-gray-400">
                        <User size={40} />
                    </div>
                </div>
                <h2 className="text-xl font-bold text-primary">สมชาย ใจดี</h2>
                <p className="text-gray-500 text-sm">ช่างปูน • ช่างกระเบื้อง</p>
                
                <div className="flex justify-center items-center mt-2 space-x-1 text-secondary">
                    <Star size={16} fill="currentColor" />
                    <span className="font-bold text-lg">4.5</span>
                    <span className="text-gray-400 text-xs">(24 รีวิว)</span>
                </div>
           </div>
        </div>

        {/* Details */}
        <div className="space-y-4 mb-8">
             <div className="bg-white p-5 rounded-2xl shadow-sm flex items-center">
                 <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 mr-4">
                    <Phone size={20} />
                 </div>
                 <div>
                     <p className="text-xs text-gray-400">เบอร์โทรศัพท์</p>
                     <p className="text-primary font-medium">089-123-4567</p>
                 </div>
             </div>

             <div className="bg-white p-5 rounded-2xl shadow-sm flex items-center">
                 <div className="w-10 h-10 rounded-full bg-orange-50 flex items-center justify-center text-orange-500 mr-4">
                    <MapPin size={20} />
                 </div>
                 <div>
                     <p className="text-xs text-gray-400">พื้นที่ทำงาน</p>
                     <p className="text-primary font-medium">บางนา, พระโขนง, สมุทรปราการ</p>
                 </div>
             </div>
             
             <div className="bg-white p-6 rounded-2xl shadow-sm">
                 <h3 className="font-bold text-primary mb-3">เกี่ยวกับฉัน</h3>
                 <p className="text-gray-600 text-sm leading-relaxed">
                    ช่างปูนประสบการณ์กว่า 10 ปี รับงานปูกระเบื้อง ฉาบผนัง เทพื้น งานเนี้ยบ ตรงต่อเวลา ไม่ทิ้งงาน มีทีมงานพร้อม 3 คนครับ
                 </p>
             </div>

             <div className="bg-white p-6 rounded-2xl shadow-sm">
                 <h3 className="font-bold text-primary mb-3">ทักษะความสามารถ</h3>
                 <div className="flex flex-wrap gap-2">
                    {['ช่างปูน', 'ปูกระเบื้อง', 'ก่ออิฐ', 'ฉาบปูน', 'เทพื้นคอนกรีต'].map(skill => (
                        <span key={skill} className="px-3 py-1 bg-gray-100 text-gray-600 rounded-lg text-sm font-medium">
                            {skill}
                        </span>
                    ))}
                 </div>
             </div>
        </div>

        {/* Actions */}
        <div className="space-y-3">
            <Button fullWidth icon={<CheckCircle size={20}/>} className="bg-green-600 hover:bg-green-700 shadow-green-200">
                อนุมัติรับเข้าทำงาน
            </Button>
            <Button 
                fullWidth 
                variant="secondary" 
                icon={<MessageSquare size={20}/>}
                onClick={() => navigate('/contractor/chat/chat-101')}
            >
                เริ่มแชท
            </Button>
        </div>
      </div>
    </div>
  );
};