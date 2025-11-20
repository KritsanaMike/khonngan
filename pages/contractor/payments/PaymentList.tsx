import React from 'react';
import { FileText, ChevronRight } from 'lucide-react';
import { PageHeader } from '../../../components/PageHeader';
import { StatusBadge } from '../../../components/StatusBadge';

const PAYMENTS = [
    { id: '1', title: 'ค่าแรงงวดที่ 1', worker: 'สมชาย ใจดี', amount: '3,000', status: 'COMPLETED', date: '15 ต.ค. 66' },
    { id: '2', title: 'ค่าวัสดุอุปกรณ์', worker: 'วิชัย การช่าง', amount: '1,500', status: 'PENDING', date: '14 ต.ค. 66' },
    { id: '3', title: 'ค่าแรงงวดสุดท้าย', worker: 'มานะ อดทน', amount: '5,000', status: 'FAILED', date: '10 ต.ค. 66' },
];

export const PaymentList: React.FC = () => {
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
                    <div key={pay.id} className="bg-white p-5 rounded-3xl shadow-sm border border-gray-100 relative overflow-hidden">
                        <div className="flex justify-between items-start mb-3">
                            <div>
                                <h3 className="font-bold text-primary">{pay.title}</h3>
                                <p className="text-xs text-gray-500 mt-1">จ่ายให้: {pay.worker}</p>
                            </div>
                            <StatusBadge status={pay.status} type="PAYMENT" />
                        </div>
                        
                        <div className="flex justify-between items-end">
                            <div>
                                <p className="text-[10px] text-gray-400">วันที่สร้างรายการ</p>
                                <p className="text-xs text-gray-600">{pay.date}</p>
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