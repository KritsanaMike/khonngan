import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FileText, ChevronRight, Star } from 'lucide-react';
import { PageHeader } from '../../../components/PageHeader';
import { StatusBadge } from '../../../components/StatusBadge';
import { StarRating } from '../../../components/StarRating';
import { Payment } from '../../../types';

const PAYMENTS: Payment[] = [
    { 
      id: '1', 
      jobTitle: 'ค่าแรงงวดที่ 1', 
      workerName: 'สมชาย ใจดี', 
      workerId: '101',
      amount: '3,000', 
      status: 'COMPLETED', 
      date: '15 ต.ค. 66',
      rating: { stars: 4, comment: 'งานดี' } 
    },
    { 
      id: '2', 
      jobTitle: 'ค่าวัสดุอุปกรณ์', 
      workerName: 'วิชัย การช่าง', 
      workerId: '102',
      amount: '1,500', 
      status: 'PENDING', 
      date: '14 ต.ค. 66' 
    },
    { 
      id: '3', 
      jobTitle: 'ค่าแรงงวดสุดท้าย', 
      workerName: 'มานะ อดทน', 
      workerId: '103',
      amount: '5,000', 
      status: 'COMPLETED', // Completed but not rated yet
      date: '10 ต.ค. 66' 
    },
];

export const PaymentList: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-bg-soft pb-24">
       <PageHeader title="การชำระเงิน" rightAction={<span className="text-xs text-primary font-bold underline">รายงาน</span>}/>
       
       <div className="px-6 py-4">
            <div className="flex p-1 bg-white rounded-xl shadow-sm mb-6">
                <button className="flex-1 py-2 text-sm font-medium bg-primary text-white rounded-lg shadow-md">ทั้งหมด</button>
                <button className="flex-1 py-2 text-sm font-medium text-gray-500">รอชำระ</button>
                <button className="flex-1 py-2 text-sm font-medium text-gray-500">ชำระแล้ว</button>
            </div>

            <div className="space-y-4">
                {PAYMENTS.map(pay => (
                    <div 
                      key={pay.id} 
                      onClick={() => navigate(`/contractor/payments/${pay.id}`)}
                      className="bg-white p-5 rounded-3xl shadow-sm border border-gray-100 relative overflow-hidden cursor-pointer active:scale-[0.98] transition-transform"
                    >
                        <div className="flex justify-between items-start mb-3">
                            <div>
                                <h3 className="font-bold text-primary">{pay.jobTitle}</h3>
                                <p className="text-xs text-gray-500 mt-1">จ่ายให้: {pay.workerName}</p>
                            </div>
                            <StatusBadge status={pay.status} type="PAYMENT" />
                        </div>
                        
                        <div className="flex justify-between items-end">
                            <div>
                                <p className="text-[10px] text-gray-400">วันที่สร้างรายการ</p>
                                <p className="text-xs text-gray-600">{pay.date}</p>
                                
                                {/* Rating Indicator */}
                                <div className="mt-2">
                                  {pay.status === 'COMPLETED' ? (
                                    pay.rating ? (
                                      <div className="flex items-center text-xs text-secondary font-medium bg-orange-50 px-2 py-1 rounded-lg w-fit">
                                        <span className="mr-1">ให้คะแนนแล้ว:</span>
                                        <StarRating rating={pay.rating.stars} size={10} readonly />
                                      </div>
                                    ) : (
                                      <div className="flex items-center text-xs text-primary underline decoration-secondary decoration-2 underline-offset-2">
                                        <Star size={12} className="mr-1 text-secondary" />
                                        ให้คะแนนคนงาน
                                      </div>
                                    )
                                  ) : null}
                                </div>
                            </div>
                            <div className="text-right">
                                <p className="text-lg font-bold text-secondary">{pay.amount} <span className="text-xs font-normal text-gray-400">บาท</span></p>
                            </div>
                        </div>
                        
                        <div className="absolute right-0 top-0 h-full w-1 bg-gray-50 group-hover:bg-secondary transition-colors"></div>
                    </div>
                ))}
            </div>
       </div>
    </div>
  );
};