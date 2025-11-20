import React from 'react';
import { Plus, Users, MoreHorizontal, MapPin } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { StatusBadge } from '../../components/StatusBadge';

const MY_JOBS = [
  {
    id: '1',
    title: 'รับเหมาต่อเติมครัวไทย',
    location: 'บางนา, กรุงเทพฯ',
    status: 'OPEN',
    applicants: 5,
    posted: '2 วันที่แล้ว'
  },
  {
    id: '2',
    title: 'ช่างทาสีตึกแถว 3 ชั้น',
    location: 'เมือง, นนทบุรี',
    status: 'CLOSED',
    applicants: 2,
    posted: '1 สัปดาห์ที่แล้ว'
  }
];

export const ContractorHome: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="pb-24 bg-bg-soft min-h-screen relative">
      {/* Floating Action Button */}
      <button 
        onClick={() => navigate('/contractor/jobs/new')}
        className="fixed bottom-24 right-6 z-40 w-14 h-14 bg-secondary text-white rounded-full shadow-xl shadow-secondary/30 flex items-center justify-center hover:scale-110 transition-transform active:scale-95"
      >
        <Plus size={28} />
      </button>

      {/* Header */}
      <div className="bg-white px-6 pt-8 pb-4 rounded-b-3xl shadow-sm mb-6 sticky top-0 z-30">
        <div className="flex justify-between items-center">
          <div>
             <h1 className="text-2xl font-bold text-primary">งานของฉัน</h1>
             <p className="text-gray-500 text-sm">จัดการประกาศงานและผู้สมัคร</p>
          </div>
          <button onClick={() => navigate('/contractor/profile')} className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-bold shadow-md">
            บจ
          </button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 gap-4 px-6 mb-6">
        <div className="bg-primary p-4 rounded-2xl text-white shadow-lg shadow-primary/20">
           <div className="text-3xl font-bold">2</div>
           <div className="text-sm opacity-80">ประกาศงานที่เปิดอยู่</div>
        </div>
        <div className="bg-white p-4 rounded-2xl text-primary shadow-sm border border-gray-100">
           <div className="text-3xl font-bold">7</div>
           <div className="text-sm text-gray-500">ผู้สมัครรอตรวจสอบ</div>
        </div>
      </div>

      {/* Job List */}
      <div className="px-6 space-y-4">
        <div className="flex justify-between items-center">
          <h2 className="font-bold text-lg text-gray-700">รายการประกาศ</h2>
          <span className="text-xs text-gray-400">ทั้งหมด {MY_JOBS.length} รายการ</span>
        </div>
        
        {MY_JOBS.map((job) => (
          <div 
            key={job.id} 
            onClick={() => navigate(`/contractor/jobs/${job.id}`)}
            className="bg-white p-5 rounded-3xl shadow-sm border border-gray-100 active:scale-[0.99] transition-transform cursor-pointer"
          >
            <div className="flex justify-between items-start mb-3">
              <h3 className="font-bold text-lg text-primary pr-4 line-clamp-1">{job.title}</h3>
              <button className="text-gray-400 p-1">
                <MoreHorizontal size={20} />
              </button>
            </div>
            
            <div className="flex items-center space-x-3 mb-3">
                <StatusBadge status={job.status} type="JOB" />
                <span className="text-xs text-gray-400 flex items-center">
                  <MapPin size={12} className="mr-1" />
                  {job.location}
                </span>
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-gray-100">
              <div className="flex items-center text-gray-600">
                <Users size={18} className="mr-2 text-secondary" />
                <span className="font-bold text-primary mr-1">{job.applicants}</span> ผู้สมัคร
              </div>
              <span className="text-secondary text-sm font-medium">
                ดูรายละเอียด
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};