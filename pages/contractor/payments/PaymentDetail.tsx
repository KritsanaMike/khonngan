import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { DollarSign, Calendar, User, Briefcase, CheckCircle, AlertCircle } from 'lucide-react';
import { PageHeader } from '../../../components/PageHeader';
import { StatusBadge } from '../../../components/StatusBadge';
import { Button } from '../../../components/Button';
import { StarRating } from '../../../components/StarRating';
import { Payment } from '../../../types';

// Mock Data - In a real app, fetch by ID
const MOCK_PAYMENT: Payment = {
  id: '1',
  jobTitle: 'รับเหมาต่อเติมครัวไทย',
  workerName: 'สมชาย ใจดี',
  workerId: '101',
  amount: '3,000',
  status: 'COMPLETED', // Try changing to PENDING to see disabled state
  date: '15 ต.ค. 66',
  rating: { stars: 0, comment: '' } // Initial empty rating
};

export const PaymentDetail: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  // Local state for the form
  const [rating, setRating] = useState(MOCK_PAYMENT.rating?.stars || 0);
  const [comment, setComment] = useState(MOCK_PAYMENT.rating?.comment || '');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [saveSuccess, setSaveSuccess] = useState(false);

  // Star labels
  const starLabels: { [key: number]: string } = {
    1: 'แย่',
    2: 'พอใช้',
    3: 'ปานกลาง',
    4: 'ดี',
    5: 'ดีมาก'
  };

  const handleSaveRating = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSaveSuccess(true);
      // In real app, you would update the payment data here
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-bg-soft pb-24">
      <PageHeader title="รายละเอียดการชำระเงิน" />

      <div className="px-6 py-6 space-y-6">
        {/* Payment Info Card */}
        <div className="bg-white p-6 rounded-3xl shadow-sm space-y-4">
          <div className="flex justify-between items-start border-b border-gray-100 pb-4 mb-4">
             <div>
                <h2 className="font-bold text-primary text-lg">{MOCK_PAYMENT.jobTitle}</h2>
                <p className="text-xs text-gray-400 mt-1">รหัสรายการ #{MOCK_PAYMENT.id}</p>
             </div>
             <StatusBadge status={MOCK_PAYMENT.status} type="PAYMENT" />
          </div>

          <div className="grid grid-cols-2 gap-4">
             <div className="space-y-1">
                <p className="text-xs text-gray-400 flex items-center"><User size={12} className="mr-1"/> จ่ายให้</p>
                <p className="font-medium text-primary">{MOCK_PAYMENT.workerName}</p>
             </div>
             <div className="space-y-1">
                <p className="text-xs text-gray-400 flex items-center"><Calendar size={12} className="mr-1"/> วันที่ชำระ</p>
                <p className="font-medium text-primary">{MOCK_PAYMENT.date}</p>
             </div>
          </div>

          <div className="pt-4 flex justify-between items-center">
             <p className="text-gray-500 text-sm">จำนวนเงินสุทธิ</p>
             <p className="text-2xl font-bold text-secondary flex items-center">
                <DollarSign size={20} className="mr-1" />
                {MOCK_PAYMENT.amount}
             </p>
          </div>
        </div>

        {/* Rating Section */}
        <div className="bg-white p-6 rounded-3xl shadow-sm">
           <h3 className="font-bold text-primary text-lg mb-4 flex items-center">
             ให้คะแนนคนงาน
             {saveSuccess && <span className="ml-2 text-xs text-green-600 font-medium bg-green-50 px-2 py-1 rounded-full">บันทึกเรียบร้อย</span>}
           </h3>

           {MOCK_PAYMENT.status !== 'COMPLETED' ? (
             <div className="flex flex-col items-center justify-center py-6 text-center text-gray-400 bg-gray-50 rounded-2xl border border-dashed border-gray-200">
                <AlertCircle size={32} className="mb-2 opacity-50" />
                <p className="text-sm">สามารถให้คะแนนได้เมื่อ<br/>การชำระเงินเสร็จสมบูรณ์เท่านั้น</p>
             </div>
           ) : (
             <form onSubmit={handleSaveRating} className="space-y-6">
                {/* Stars */}
                <div className="flex flex-col items-center space-y-2">
                   <div className="flex space-x-2">
                      <StarRating 
                        rating={rating} 
                        onChange={setRating} 
                        readonly={false} 
                        size={36} 
                        maxStars={5}
                      />
                   </div>
                   <p className="text-sm font-medium text-secondary h-5">
                     {rating > 0 ? starLabels[rating] : 'แตะเพื่อใหคะแนน'}
                   </p>
                </div>

                {/* Comment */}
                <div className="space-y-2">
                   <label className="text-sm font-medium text-gray-700 ml-1">ความคิดเห็นเพิ่มเติม (ไม่บังคับ)</label>
                   <textarea
                      rows={3}
                      value={comment}
                      onChange={(e) => setComment(e.target.value)}
                      placeholder="เขียนความคิดเห็นเกี่ยวกับการทำงานของคนงานคนนี้ เช่น ความรับผิดชอบ ความตรงต่อเวลา..."
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-secondary/50 transition-all text-text-main placeholder-gray-400 resize-none text-sm"
                   />
                </div>

                <Button type="submit" fullWidth disabled={rating === 0 || isSubmitting}>
                   {isSubmitting ? 'กำลังบันทึก...' : saveSuccess ? 'อัปเดตคะแนน' : 'บันทึกคะแนน'}
                </Button>
             </form>
           )}
        </div>
      </div>
    </div>
  );
};