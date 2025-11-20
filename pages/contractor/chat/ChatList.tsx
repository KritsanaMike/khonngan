import React from 'react';
import { useNavigate } from 'react-router-dom';
import { User, Search } from 'lucide-react';
import { PageHeader } from '../../../components/PageHeader';

const CHATS = [
  { id: '1', name: 'สมชาย ใจดี', job: 'ต่อเติมครัวไทย', message: 'พรุ่งนี้ผมเข้าไปดูหน้างานได้ไหมครับ?', time: '10:30', unread: 2 },
  { id: '2', name: 'วิชัย การช่าง', job: 'ต่อเติมครัวไทย', message: 'ขอบคุณครับที่รับเข้าทำงาน', time: 'เมื่อวาน', unread: 0 },
  { id: '3', name: 'มานะ อดทน', job: 'ช่างทาสี', message: 'ตกลงตามราคาที่คุยกันนะครับ', time: '2 วันที่แล้ว', unread: 0 },
];

export const ChatList: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-bg-soft pb-24">
      <div className="bg-white px-6 pt-6 pb-2 rounded-b-3xl shadow-sm sticky top-0 z-30">
          <h1 className="text-2xl font-bold text-primary mb-4">ข้อความ</h1>
          <div className="bg-gray-100 p-2 rounded-xl flex items-center mb-2">
            <Search size={20} className="text-gray-400 ml-2 mr-2" />
            <input 
                type="text" 
                placeholder="ค้นหาชื่อ..." 
                className="bg-transparent flex-1 outline-none text-sm"
            />
          </div>
      </div>

      <div className="px-6 py-4 space-y-2">
        {CHATS.map(chat => (
            <div 
                key={chat.id}
                onClick={() => navigate(`/contractor/chat/${chat.id}`)}
                className="bg-white p-4 rounded-2xl shadow-sm active:bg-gray-50 flex items-center"
            >
                <div className="relative mr-4">
                    <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center text-secondary font-bold text-lg">
                        {chat.name.charAt(0)}
                    </div>
                    {chat.unread > 0 && (
                        <div className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center border-2 border-white">
                            <span className="text-[10px] text-white font-bold">{chat.unread}</span>
                        </div>
                    )}
                </div>
                
                <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-baseline mb-1">
                        <h3 className="font-bold text-primary text-sm truncate">{chat.name}</h3>
                        <span className="text-[10px] text-gray-400">{chat.time}</span>
                    </div>
                    <p className="text-xs text-secondary font-medium mb-1">{chat.job}</p>
                    <p className={`text-xs truncate ${chat.unread > 0 ? 'text-gray-800 font-medium' : 'text-gray-500'}`}>
                        {chat.message}
                    </p>
                </div>
            </div>
        ))}
      </div>
    </div>
  );
};