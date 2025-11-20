import React from 'react';
import { Home, Search, MessageSquare, User, Wallet, Briefcase } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';
import { UserRole } from '../types';

interface BottomNavProps {
  role: UserRole;
}

export const BottomNav: React.FC<BottomNavProps> = ({ role }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const isActive = (path: string) => location.pathname === path;

  const NavItem = ({ path, icon: Icon, label }: { path: string; icon: any; label: string }) => (
    <button
      onClick={() => navigate(path)}
      className={`flex flex-col items-center justify-center w-full h-full space-y-1 ${
        isActive(path) ? 'text-secondary' : 'text-gray-400 hover:text-gray-600'
      }`}
    >
      <Icon size={24} strokeWidth={isActive(path) ? 2.5 : 2} />
      <span className="text-[10px] font-medium">{label}</span>
    </button>
  );

  if (role === UserRole.WORKER) {
    return (
      <div className="fixed bottom-0 left-0 right-0 z-50 h-[80px] pb-4 bg-white border-t border-gray-100 shadow-[0_-4px_20px_rgba(0,0,0,0.05)] max-w-md mx-auto">
        <div className="grid grid-cols-5 h-full">
          <NavItem path="/worker/home" icon={Search} label="หางาน" />
          <NavItem path="/worker/applications" icon={Briefcase} label="การสมัคร" />
          <NavItem path="/worker/chat" icon={MessageSquare} label="แชท" />
          <NavItem path="/worker/wallet" icon={Wallet} label="กระเป๋า" />
          <NavItem path="/worker/profile" icon={User} label="โปรไฟล์" />
        </div>
      </div>
    );
  }

  if (role === UserRole.CONTRACTOR) {
    return (
      <div className="fixed bottom-0 left-0 right-0 z-50 h-[80px] pb-4 bg-white border-t border-gray-100 shadow-[0_-4px_20px_rgba(0,0,0,0.05)] max-w-md mx-auto">
        <div className="grid grid-cols-5 h-full">
          <NavItem path="/contractor/home" icon={Briefcase} label="งานของฉัน" />
          <NavItem path="/contractor/applicants" icon={User} label="ผู้สมัคร" />
          <NavItem path="/contractor/chat" icon={MessageSquare} label="แชท" />
          <NavItem path="/contractor/payments" icon={Wallet} label="ชำระเงิน" />
          <NavItem path="/contractor/profile" icon={User} label="โปรไฟล์" />
        </div>
      </div>
    );
  }

  return null;
};