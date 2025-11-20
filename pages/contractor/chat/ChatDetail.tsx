import React, { useState, useRef, useEffect } from 'react';
import { Send } from 'lucide-react';
import { PageHeader } from '../../../components/PageHeader';

const MOCK_MESSAGES = [
    { id: '1', text: 'สวัสดีครับ สนใจงานต่อเติมครัวครับ', sender: 'OTHER', time: '10:00' },
    { id: '2', text: 'สวัสดีครับ ยังว่างอยู่ไหมครับ?', sender: 'OTHER', time: '10:01' },
    { id: '3', text: 'ว่างครับ เคยทำครัวไทยมาก่อนไหมครับ?', sender: 'ME', time: '10:05' },
    { id: '4', text: 'เคยครับ ทำมา 3 ปีแล้วครับ พรุ่งนี้ผมเข้าไปดูหน้างานได้ไหมครับ?', sender: 'OTHER', time: '10:30' },
];

export const ChatDetail: React.FC = () => {
  const [messages, setMessages] = useState(MOCK_MESSAGES);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(scrollToBottom, [messages]);

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    
    const newMsg = {
        id: Date.now().toString(),
        text: input,
        sender: 'ME',
        time: new Date().toLocaleTimeString('th-TH', { hour: '2-digit', minute: '2-digit' })
    };
    
    setMessages([...messages, newMsg]);
    setInput('');
  };

  return (
    <div className="flex flex-col h-screen bg-bg-soft">
      <PageHeader title="สมชาย ใจดี" subtitle="งาน: ต่อเติมครัวไทย" />

      <div className="flex-1 overflow-y-auto p-4 space-y-4">
         {messages.map((msg) => (
             <div key={msg.id} className={`flex ${msg.sender === 'ME' ? 'justify-end' : 'justify-start'}`}>
                 <div className={`max-w-[75%] px-4 py-3 rounded-2xl text-sm ${
                     msg.sender === 'ME' 
                     ? 'bg-primary text-white rounded-tr-none' 
                     : 'bg-white text-gray-800 shadow-sm rounded-tl-none'
                 }`}>
                     <p>{msg.text}</p>
                     <p className={`text-[10px] mt-1 text-right ${msg.sender === 'ME' ? 'text-white/70' : 'text-gray-400'}`}>
                        {msg.time}
                     </p>
                 </div>
             </div>
         ))}
         <div ref={messagesEndRef} />
      </div>

      <div className="p-4 bg-white border-t border-gray-100">
         <form onSubmit={handleSend} className="flex items-center space-x-3">
             <input 
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="พิมพ์ข้อความ..."
                className="flex-1 bg-gray-100 px-4 py-3 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-secondary/50"
             />
             <button 
                type="submit" 
                disabled={!input.trim()}
                className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center text-white hover:bg-secondary/90 disabled:opacity-50 transition-colors"
             >
                 <Send size={18} />
             </button>
         </form>
      </div>
    </div>
  );
};