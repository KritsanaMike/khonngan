import React from 'react';
import { useNavigate } from 'react-router-dom';
import { User, Star } from 'lucide-react';
import { PageHeader } from '../../../components/PageHeader';
import { StatusBadge } from '../../../components/StatusBadge';

const ALL_APPLICANTS = [
  { id: '101', name: 'สมชาย ใจดี', job: 'รับเหมาต่อเติมครัวไทย', status: 'PENDING', date: 'วันนี้', rating: 4.5 },
  { id: '102', name: 'วิชัย การช่าง', job: 'รับเหมาต่อเติมครัวไทย', status: 'APPROVED', date: 'เมื่อวาน', rating: 4.8 },
  { id: '104', name: 'มานะ อดทน', job: 'ช่างทาสีตึกแถว 3 ชั้น', status: 'PENDING', date: '2 วันที่แล้ว', rating: 3.5 },
  { id: '103', name: 'เอกพล คนขยัน', job: 'รับเหมาต่อเติมครัวไทย', status: 'REJECTED', date: '3 วันที่แล้ว', rating: 0 },
];

export const ApplicantsList: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-bg-soft pb-24">
      <PageHeader title="ผู้สมัครทั้งหมด" />

      <div className="px-6 py-4">
        {/* Filter Bar */}
        <div className="flex space-x-2 overflow-x-auto no-scrollbar mb-4">
            <button className="bg-white px-4 py-2 rounded-full text-sm font-medium text-primary border border-gray-200 whitespace-nowrap shadow-sm">
            ทั้งหมด
            </button>
            <button className="bg-white px-4 py-2 rounded-full text-sm font-medium text-gray-500 border border-gray-200 whitespace-nowrap">
            รอตรวจสอบ
            </button>
            <button className="bg-white px-4 py-2 rounded-full text-sm font-medium text-gray-500 border border-gray-200 whitespace-nowrap">
            รับเข้าทำงาน
            </button>
        </div>

        <div className="space-y-3">
            {ALL_APPLICANTS.map(app => (
                <div 
                    key={app.id} 
                    onClick={() => navigate(`/contractor/applicants/${app.id}`)}
                    className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 flex items-center active:bg-gray-50 cursor-pointer"
                >
                    <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-gray-500 mr-4 shrink-0">
                        <User size={24} />
                    </div>
                    <div className="flex-1 min-w-0">
                        <div className="flex justify-between items-center mb-1">
                            <h4 className="font-bold text-primary truncate">{app.name}</h4>
                            <span className="text-[10px] text-gray-400">{app.date}</span>
                        </div>
                        <p className="text-xs text-gray-500 truncate mb-1.5">{app.job}</p>
                        
                        <div className="flex justify-between items-center">
                            <StatusBadge status={app.status} type="APPLICATION" />
                            
                            {app.rating > 0 && (
                                <div className="flex items-center text-secondary text-xs font-medium">
                                    <Star size={10} fill="currentColor" className="mr-0.5" />
                                    {app.rating}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </div>
  );
};