export enum UserRole {
  WORKER = 'WORKER',
  CONTRACTOR = 'CONTRACTOR',
  ADMIN = 'ADMIN',
  GUEST = 'GUEST'
}

export interface User {
  id: string;
  name: string;
  role: UserRole;
  phoneNumber: string;
  avatarUrl?: string;
}

export interface JobPost {
  id: string;
  title: string;
  description: string;
  location: string;
  price: string;
  priceType: 'DAILY' | 'LUMP_SUM';
  status: 'OPEN' | 'CLOSED';
  category: string;
  startDate?: string;
  endDate?: string;
  requirements?: string;
  applicantCount: number;
  postedDate: string;
}

export interface WorkerRating {
  stars: number;
  comment?: string;
  createdAt?: string;
}

export interface Applicant {
  id: string;
  name: string;
  phoneNumber: string;
  skills: string[];
  experience: string;
  status: 'PENDING' | 'APPROVED' | 'REJECTED';
  jobId: string;
  jobTitle: string;
  avatarUrl?: string;
  rating?: number;
  reviewCount?: number;
}

export interface Payment {
  id: string;
  jobTitle: string;
  workerName: string;
  workerId?: string;
  amount: string;
  status: 'PENDING' | 'COMPLETED' | 'FAILED';
  date: string;
  rating?: WorkerRating;
}

export interface ChatPreview {
  id: string;
  workerName: string;
  jobTitle: string;
  lastMessage: string;
  time: string;
  unreadCount: number;
  avatarUrl?: string;
}

export interface ChatMessage {
  id: string;
  text: string;
  sender: 'ME' | 'OTHER';
  time: string;
}