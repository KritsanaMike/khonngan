import React, { useState } from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Splash } from './pages/Splash';
import { Intro } from './pages/Intro';
import { RoleSelection } from './pages/RoleSelection';
import { Login } from './pages/auth/Login';
import { WorkerHome } from './pages/worker/Home';
import { BottomNav } from './components/BottomNav';
import { UserRole } from './types';

// Contractor Pages
import { ContractorHome } from './pages/contractor/Home';
import { CreateEditJob } from './pages/contractor/jobs/CreateEditJob';
import { JobDetail } from './pages/contractor/jobs/JobDetail';
import { ApplicantsList } from './pages/contractor/applicants/ApplicantsList';
import { WorkerProfile } from './pages/contractor/applicants/WorkerProfile';
import { ChatList } from './pages/contractor/chat/ChatList';
import { ChatDetail } from './pages/contractor/chat/ChatDetail';
import { PaymentList } from './pages/contractor/payments/PaymentList';
import { ContractorProfile } from './pages/contractor/profile/Profile';
import { ContractorEditProfile } from './pages/contractor/profile/EditProfile';
import { ContractorEditProfileSuccess } from './pages/contractor/profile/EditProfileSuccess';
import { ContractorProfileSetup } from './pages/contractor/ProfileSetup';

// Contractor Auth Pages
import { ContractorLogin } from './pages/contractor/auth/Login';
import { ContractorRegister } from './pages/contractor/auth/Register';
import { ContractorVerifyOTP } from './pages/contractor/auth/VerifyOTP';
import { ContractorVerifySuccess } from './pages/contractor/auth/VerifySuccess';
import { ContractorForgotPassword } from './pages/contractor/auth/ForgotPassword';
import { ContractorForgotPasswordVerifyOTP } from './pages/contractor/auth/ForgotPasswordVerifyOTP';
import { ContractorForgotPasswordVerified } from './pages/contractor/auth/ForgotPasswordVerified';
import { ContractorResetPassword } from './pages/contractor/auth/ResetPassword';
import { ContractorResetPasswordSuccess } from './pages/contractor/auth/ResetPasswordSuccess';

const MobileLayout: React.FC<{ children: React.ReactNode; role: UserRole }> = ({ children, role }) => {
  return (
    <div className="min-h-screen bg-gray-100 flex justify-center">
      <div className="w-full max-w-md bg-bg-soft min-h-screen shadow-2xl relative overflow-hidden flex flex-col">
        <main className="flex-1 overflow-y-auto no-scrollbar">
          {children}
        </main>
        {/* Show Nav only if logged in and not admin/guest */}
        {(role === UserRole.WORKER || role === UserRole.CONTRACTOR) && (
           <BottomNav role={role} />
        )}
      </div>
    </div>
  );
};

const App: React.FC = () => {
  const [userRole, setUserRole] = useState<UserRole>(UserRole.GUEST);

  return (
    <HashRouter>
      <MobileLayout role={userRole}>
        <Routes>
          <Route path="/" element={<Navigate to="/splash" replace />} />
          <Route path="/splash" element={<Splash />} />
          <Route path="/intro" element={<Intro />} />
          <Route path="/select-role" element={<RoleSelection />} />
          
          {/* Generic Auth (for worker) */}
          <Route path="/auth/login" element={<Login setUserRole={setUserRole} />} />
          
          {/* Contractor Auth Flow */}
          <Route path="/contractor/auth/login" element={<ContractorLogin setUserRole={setUserRole} />} />
          <Route path="/contractor/auth/register" element={<ContractorRegister />} />
          <Route path="/contractor/auth/verify-otp" element={<ContractorVerifyOTP />} />
          <Route path="/contractor/auth/verify-success" element={<ContractorVerifySuccess />} />
          <Route path="/contractor/auth/forgot-password" element={<ContractorForgotPassword />} />
          <Route path="/contractor/auth/forgot-password/verify-otp" element={<ContractorForgotPasswordVerifyOTP />} />
          <Route path="/contractor/auth/forgot-password/verified" element={<ContractorForgotPasswordVerified />} />
          <Route path="/contractor/auth/reset-password" element={<ContractorResetPassword />} />
          <Route path="/contractor/auth/reset-password/success" element={<ContractorResetPasswordSuccess />} />
          
          {/* Worker Routes */}
          <Route path="/worker/home" element={<WorkerHome />} />
          <Route path="/worker/*" element={<div className="p-10 text-center text-primary">Worker Feature Placeholder</div>} />
          
          {/* Contractor Routes */}
          <Route path="/contractor/home" element={<ContractorHome />} />
          <Route path="/contractor/profile-setup" element={<ContractorProfileSetup setUserRole={setUserRole} />} />
          
          {/* Job Management */}
          <Route path="/contractor/jobs/new" element={<CreateEditJob />} />
          <Route path="/contractor/jobs/:id" element={<JobDetail />} />
          <Route path="/contractor/jobs/:id/edit" element={<CreateEditJob />} />
          
          {/* Applicants */}
          <Route path="/contractor/applicants" element={<ApplicantsList />} />
          <Route path="/contractor/applicants/:id" element={<WorkerProfile />} />
          
          {/* Chat */}
          <Route path="/contractor/chat" element={<ChatList />} />
          <Route path="/contractor/chat/:id" element={<ChatDetail />} />
          
          {/* Payments */}
          <Route path="/contractor/payments" element={<PaymentList />} />
          
          {/* Profile */}
          <Route path="/contractor/profile" element={<ContractorProfile />} />
          <Route path="/contractor/profile/edit" element={<ContractorEditProfile />} />
          <Route path="/contractor/profile/edit/success" element={<ContractorEditProfileSuccess />} />
          
        </Routes>
      </MobileLayout>
    </HashRouter>
  );
};

export default App;