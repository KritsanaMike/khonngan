import React from 'react';

interface StatusBadgeProps {
  status: string;
  type: 'JOB' | 'APPLICATION' | 'PAYMENT';
}

export const StatusBadge: React.FC<StatusBadgeProps> = ({ status, type }) => {
  let colorClass = "bg-gray-100 text-gray-600";
  let label = status;

  if (type === 'JOB') {
    if (status === 'OPEN') {
      colorClass = "bg-green-100 text-green-700";
      label = "เปิดรับสมัคร";
    } else {
      colorClass = "bg-red-100 text-red-700";
      label = "ปิดรับแล้ว";
    }
  } else if (type === 'APPLICATION') {
    if (status === 'APPROVED') {
      colorClass = "bg-green-100 text-green-700";
      label = "รับเข้าทำงาน";
    } else if (status === 'REJECTED') {
      colorClass = "bg-red-100 text-red-700";
      label = "ปฏิเสธ";
    } else {
      colorClass = "bg-orange-100 text-orange-700";
      label = "รอตรวจสอบ";
    }
  } else if (type === 'PAYMENT') {
    if (status === 'COMPLETED') {
      colorClass = "bg-green-100 text-green-700";
      label = "ชำระแล้ว";
    } else if (status === 'FAILED') {
      colorClass = "bg-red-100 text-red-700";
      label = "ไม่สำเร็จ";
    } else {
      colorClass = "bg-orange-100 text-orange-700";
      label = "รอชำระ";
    }
  }

  return (
    <span className={`text-xs px-3 py-1 rounded-full font-medium ${colorClass}`}>
      {label}
    </span>
  );
};