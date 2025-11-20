import React from 'react';
import { useNavigate } from 'react-router-dom';
import { User, MapPin, Phone, Star, MessageSquare, CheckCircle, ThumbsUp } from 'lucide-react';
import { PageHeader } from '../../../components/PageHeader';
import { Button } from '../../../components/Button';
import { StarRating } from '../../../components/StarRating';

export const WorkerProfile: React.FC = () => {
  const navigate = useNavigate();

  // Mock Reviews Data
  const reviews = [
    { id: 1, contractor: 'บจก. เอสพี คอนสตรัคชั่น', stars: 5, comment: 'งานเรียบร้อยมาก ตรงเวลาครับ', date: '10 ต.ค. 66', job: 'งานฉาบปูน' },
    { id: 2, contractor: 'ช่างใหญ่ รับเหมา', stars: 4, comment: 'ฝีมือดี แต่มาช้านิดหน่อย', date: '25 ก.ย. 66', job: 'ปูกระเบื้อง' },
  ];

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
                
                {/* Rating Summary */}
                <div className="flex justify-center items-center mt-3 p-2 bg-orange-50 rounded-xl inline-flex mx-auto">
                    <StarRating rating={4.5} size={18} readonly />
                    <span className="font-bold text-lg text-secondary ml-2">4.5</span>
                    <span className="text-gray-400 text-xs ml-1">(12 รีวิว)</span>
                </div>
           </div>
        </div>

        {/* Details */}
        <div className="space-y-4 mb-8">
             <div className="bg-white p-5 rounded-2xl shadow-sm flex items-center">
                 <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 mr-4 shrink-0">
                    <Phone size={20} />
                 </div>
                 <div>
                     <p className="text-xs text-gray-400">เบอร์โทรศัพท์</p>
                     <p className="text-primary font-medium">089-123-4567</p>
                 </div>
             </div>

             <div className="bg-white p-5 rounded-2xl shadow-sm flex items-center">
                 <div className="w-10 h-10 rounded-full bg-orange-50 flex items-center justify-center text-orange-500 mr-4 shrink-0">
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

             {/* Recent Reviews */}
             <div className="bg-white p-6 rounded-2xl shadow-sm">
                <div className="flex justify-between items-center mb-4">
                    <h3 className="font-bold text-primary">รีวิวจากผู้รับเหมา</h3>
                    <span className="text-xs text-secondary font-medium">ดูทั้งหมด</span>
                </div>
                <div className="space-y-4 divide-y divide-gray-50">
                    {reviews.map(review => (
                        <div key={review.id} className="pt-3 first:pt-0">
                            <div className="flex justify-between items-start mb-1">
                                <p className="text-sm font-bold text-gray-800">{review.contractor}</p>
                                <span className="text-[10px] text-gray-400">{review.date}</span>
                            </div>
                            <div className="mb-1">
                                <StarRating rating={review.stars} size={12} readonly />
                            </div>
                            <p className="text-xs text-gray-600 italic">"{review.comment}"</p>
                            <p className="text-[10px] text-gray-400 mt-1">งาน: {review.job}</p>
                        </div>
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