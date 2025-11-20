import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { MapPin, Calendar, DollarSign, Users, Edit2, User, MessageSquare, Star } from 'lucide-react';
import { PageHeader } from '../../../components/PageHeader';
import { StatusBadge } from '../../../components/StatusBadge';
import { Button } from '../../../components/Button';
import { StarRating } from '../../../components/StarRating';
import { Applicant } from '../../../types';

// Mock Data
const JOB_DATA = {
  id: '1',
  title: 'รับเหมาต่อเติมครัวไทย',
  description: 'ต้องการช่างปูนและช่างกระเบื้องสำหรับต่อเติมครัวหลังบ้าน ขนาด 3x4 เมตร งานรวมปูกระเบื้องพื้นและผนัง',
  location: 'บางนา, กรุงเทพฯ',
  price: '800',
  priceType: 'รายวัน',
  status: 'OPEN',
  startDate: '15 ต.ค. 66',
  endDate: '30 ต.ค. 66',
  requirements: 'มีอาหารกลางวันเลี้ยง, ต้องนำเครื่องมือมาเอง',
  postedDate: '2 วันที่แล้ว'
};

const APPLICANTS: Applicant[] = [
  { id: '101', name: 'สมชาย ใจดี', phoneNumber: '081', skills: ['ช่างปูน', 'ช่างกระเบื้อง'], experience: '5 ปี', status: 'PENDING', jobId: '1', jobTitle: 'Job1', rating: 4.5, reviewCount: 12 },
  { id: '102', name: 'วิชัย การช่าง', phoneNumber: '082', skills: ['ช่างปูน', 'ช่างไม้'], experience: '8 ปี', status: 'APPROVED', jobId: '1', jobTitle: 'Job1', rating: 4.8, reviewCount: 30 },
  { id: '103', name: 'เอกพล คนขยัน', phoneNumber: '083', skills: ['กรรมกร'], experience: '2 ปี', status: 'REJECTED', jobId: '1', jobTitle: 'Job1', rating: 0, reviewCount: 0 }, // Unrated
];

export const JobDetail: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-bg-soft pb-24">
      <PageHeader 
        title="รายละเอียดงาน" 
        rightAction={
          <button 
            onClick={() => navigate(`/contractor/jobs/${id}/edit`)}
            className="text-primary p-2 bg-primary/5 rounded-full hover:bg-primary/10"
          >
            <Edit2 size={20} />
          </button>
        }
      />

      <div className="px-6 py-6 space-y-6">
        {/* Job Info Card */}
        <div className="bg-white p-6 rounded-3xl shadow-sm">
          <div className="flex justify-between items-start mb-4">
            <h2 className="text-xl font-bold text-primary">{JOB_DATA.title}</h2>
            <StatusBadge status={JOB_DATA.status} type="JOB" />
          </div>
          
          <div className="space-y-4">
            <div className="flex items-start text-gray-600">
              <MapPin size={20} className="mr-3 text-secondary shrink-0 mt-0.5" />
              <span>{JOB_DATA.location}</span>
            </div>
            <div className="flex items-start text-gray-600">
              <DollarSign size={20} className="mr-3 text-secondary shrink-0 mt-0.5" />
              <span className="font-bold text-primary">{JOB_DATA.price} บาท</span>
              <span className="ml-1 text-gray-500">/ {JOB_DATA.priceType}</span>
            </div>
            <div className="flex items-start text-gray-600">
              <Calendar size={20} className="mr-3 text-secondary shrink-0 mt-0.5" />
              <span>{JOB_DATA.startDate} - {JOB_DATA.endDate}</span>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-gray-100">
            <h3 className="font-bold text-gray-700 mb-2">รายละเอียด</h3>
            <p className="text-gray-600 text-sm leading-relaxed">{JOB_DATA.description}</p>
            
            <h3 className="font-bold text-gray-700 mt-4 mb-2">เงื่อนไขเพิ่มเติม</h3>
            <p className="text-gray-600 text-sm">{JOB_DATA.requirements}</p>
          </div>
          
          <div className="mt-6">
             <Button variant="outline" fullWidth className="py-2 text-sm border-red-500 text-red-500 hover:bg-red-50">
                ปิดประกาศงานนี้
             </Button>
          </div>
        </div>

        {/* Applicants Section */}
        <div>
            <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold text-primary">ผู้สมัคร ({APPLICANTS.length})</h3>
                <button onClick={() => navigate('/contractor/applicants')} className="text-sm text-secondary font-medium">ดูทั้งหมด</button>
            </div>

            <div className="space-y-3">
                {APPLICANTS.map(app => (
                    <div key={app.id} className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100">
                        <div className="flex justify-between mb-3">
                            <div className="flex items-center">
                                <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-gray-500 mr-3 shrink-0">
                                    <User size={24} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-primary">{app.name}</h4>
                                    <div className="flex items-center text-xs mt-1">
                                        {app.rating && app.rating > 0 ? (
                                            <div className="flex items-center text-secondary font-medium mr-2">
                                               <Star size={10} fill="currentColor" className="mr-0.5" />
                                               {app.rating}
                                            </div>
                                        ) : (
                                            <span className="text-gray-400 mr-2">ยังไม่มีคะแนน</span>
                                        )}
                                        <span className="text-gray-500">Exp. {app.experience}</span>
                                    </div>
                                </div>
                            </div>
                            <StatusBadge status={app.status} type="APPLICATION" />
                        </div>
                        
                        <div className="flex flex-wrap gap-1 mb-4">
                            {app.skills.map(skill => (
                                <span key={skill} className="text-[10px] bg-gray-50 text-gray-600 px-2 py-1 rounded-md border border-gray-100">
                                    {skill}
                                </span>
                            ))}
                        </div>

                        <div className="grid grid-cols-2 gap-2">
                             <button 
                                onClick={() => navigate(`/contractor/applicants/${app.id}`)}
                                className="py-2 px-3 rounded-lg border border-primary text-primary text-xs font-medium hover:bg-primary/5"
                             >
                                ดูโปรไฟล์
                             </button>
                             <button 
                                onClick={() => navigate(`/contractor/chat/chat-${app.id}`)}
                                className="py-2 px-3 rounded-lg bg-secondary text-white text-xs font-medium hover:bg-secondary/90 flex items-center justify-center"
                             >
                                <MessageSquare size={14} className="mr-1" /> แชท
                             </button>
                        </div>
                        
                        {app.status === 'PENDING' && (
                            <div className="grid grid-cols-2 gap-2 mt-2">
                                <button className="py-2 rounded-lg bg-green-50 text-green-700 text-xs font-bold hover:bg-green-100">
                                    อนุมัติ
                                </button>
                                <button className="py-2 rounded-lg bg-red-50 text-red-500 text-xs font-bold hover:bg-red-100">
                                    ปฏิเสธ
                                </button>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
      </div>
    </div>
  );
};