import React from 'react';
import { MapPin, Calendar, DollarSign, Filter } from 'lucide-react';
import { Button } from '../../components/Button';

const MOCK_JOBS = [
  {
    id: '1',
    title: 'ช่างปูนฉาบผนัง',
    company: 'บริษัท บิวดิ้ง จำกัด',
    location: 'บางนา, กรุงเทพฯ',
    price: '800',
    type: 'รายวัน',
    tags: ['ช่างปูน', 'งานด่วน'],
    date: 'เริ่ม 15 ต.ค.'
  },
  {
    id: '2',
    title: 'ทีมช่างไฟฟ้าเดินสายไฟบ้าน',
    company: 'สยามรับเหมา',
    location: 'เมือง, นนทบุรี',
    price: '15,000',
    type: 'เหมา',
    tags: ['ช่างไฟฟ้า', 'โครงการ'],
    date: 'เริ่ม 20 ต.ค.'
  },
  {
    id: '3',
    title: 'กรรมกรแบกปูน',
    company: 'นายช่างใหญ่',
    location: 'ลาดพร้าว, กรุงเทพฯ',
    price: '500',
    type: 'รายวัน',
    tags: ['แรงงานทั่วไป'],
    date: 'พรุ่งนี้'
  }
];

export const WorkerHome: React.FC = () => {
  return (
    <div className="pb-24 bg-bg-soft min-h-screen">
      {/* Header */}
      <div className="bg-primary px-6 pt-8 pb-6 rounded-b-3xl shadow-lg">
        <div className="flex justify-between items-center mb-4">
          <div>
            <h1 className="text-2xl font-bold text-white">หางาน</h1>
            <p className="text-white/70 text-sm">งานดีๆ รอคุณอยู่ 24 รายการ</p>
          </div>
          <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center border border-white/30">
            <span className="text-white text-lg font-bold">สม</span>
          </div>
        </div>
        
        {/* Search */}
        <div className="bg-white p-2 rounded-xl flex items-center shadow-md">
          <input 
            type="text" 
            placeholder="ค้นหางาน, ตำแหน่ง, สถานที่..." 
            className="flex-1 px-3 py-2 outline-none text-text-main"
          />
          <button className="bg-secondary p-2 rounded-lg text-white">
            <Filter size={20} />
          </button>
        </div>
      </div>

      {/* Filters */}
      <div className="px-6 py-4 flex space-x-3 overflow-x-auto no-scrollbar">
        <button className="bg-white px-4 py-2 rounded-full text-sm font-medium text-primary border border-gray-200 whitespace-nowrap shadow-sm">
          ทั้งหมด
        </button>
        <button className="bg-white px-4 py-2 rounded-full text-sm font-medium text-gray-500 border border-gray-200 whitespace-nowrap hover:border-secondary hover:text-secondary shadow-sm transition-colors">
          รายวัน
        </button>
        <button className="bg-white px-4 py-2 rounded-full text-sm font-medium text-gray-500 border border-gray-200 whitespace-nowrap hover:border-secondary hover:text-secondary shadow-sm transition-colors">
          เหมา
        </button>
        <button className="bg-white px-4 py-2 rounded-full text-sm font-medium text-gray-500 border border-gray-200 whitespace-nowrap hover:border-secondary hover:text-secondary shadow-sm transition-colors">
          งานด่วน
        </button>
      </div>

      {/* Job List */}
      <div className="px-6 space-y-4">
        {MOCK_JOBS.map((job) => (
          <div key={job.id} className="bg-white p-5 rounded-3xl shadow-sm hover:shadow-md transition-shadow">
            <div className="flex justify-between items-start mb-2">
              <div>
                <h3 className="font-bold text-lg text-primary">{job.title}</h3>
                <p className="text-sm text-gray-500">{job.company}</p>
              </div>
              <span className="bg-secondary/10 text-secondary text-xs font-bold px-3 py-1 rounded-full">
                {job.type}
              </span>
            </div>

            <div className="flex flex-wrap gap-2 my-3">
              {job.tags.map(tag => (
                <span key={tag} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-md">
                  #{tag}
                </span>
              ))}
            </div>

            <div className="space-y-2 mb-4">
              <div className="flex items-center text-gray-500 text-sm">
                <MapPin size={16} className="mr-2 text-secondary" />
                {job.location}
              </div>
              <div className="flex items-center text-gray-500 text-sm">
                <Calendar size={16} className="mr-2 text-secondary" />
                {job.date}
              </div>
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-gray-100">
              <div className="text-primary font-bold text-lg flex items-center">
                <DollarSign size={18} className="text-secondary" />
                {job.price} <span className="text-xs font-normal text-gray-400 ml-1">บาท</span>
              </div>
              <button className="px-4 py-2 bg-primary text-white text-sm rounded-xl hover:bg-primary/90 transition-colors">
                ดูรายละเอียด
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};