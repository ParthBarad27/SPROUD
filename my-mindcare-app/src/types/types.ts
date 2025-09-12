// src/types/types.ts



export type UserType = {
  id: string;
  name: string;
  email: string;
  role: 'student' | 'admin' | 'counselor';
  isAnonymous: boolean; // add this field
};

export type PageType =
  | 'dashboard'
  | 'chat'
  | 'assessment'
  | 'appointments'
  | 'resources'
  | 'community'
  | 'crisis'
  | 'admin';

export type ChatMessage = {
  id: string;
  content: string;
  timestamp: string;
  sender: 'user' | 'ai';
  type: 'text';
};

export type ForumPost = {
  id: string;
  title: string;
  content: string;
  author: string;
  category: string;
  timestamp: string;
  likes: number;
  replies: number;
  isAnonymous: boolean;
};

export type Appointment = {
  id: string;
  date: string;
  time: string;
  studentName: string;
  counselorName: string;
};

