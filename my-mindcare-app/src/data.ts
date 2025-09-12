
// data.ts
// All types and mock data


export interface UserType {
  id: string;
  name: string;
  role: 'student' | 'admin' | 'counselor';
  isAnonymous: boolean;
  email?: string;
  avatar?: string;
  mood?: string;
  lastActive?: string;
}

export interface Assessment {
  id: string;
  userId: string;
  type: 'PHQ-9' | 'GAD-7' | 'GHQ';
  questions?: AssessmentQuestion[];
  score: number;
  severity: 'minimal' | 'mild' | 'moderate' | 'severe';
  recommendations: string[];
  completedAt: string;
}

export interface AssessmentQuestion {
  id: string;
  question: string;
  answer: number;
  options: string[];
}

export interface Appointment {
  id: string;
  studentId: string;
  counselorId: string;
  counselorName: string;
  date: string;
  time: string;
  duration: number;
  status: 'scheduled' | 'completed' | 'cancelled' | 'no-show';
  type: 'individual' | 'group' | 'emergency';
  notes?: string;
}

export interface Resource {
  id: string;
  title: string;
  description: string;
  type: 'article' | 'video' | 'audio' | 'meditation';
  category: string;
  language: string;
  url: string;
  duration?: number;
  tags: string[];
  rating: number;
  views: number;
}

export interface ChatMessage {
  id: string;
  content: string;
  timestamp: string;
  sender: 'user' | 'ai';
  type: 'text' | 'suggestion' | 'resource' | 'emergency';
  emotion?: string;
}

export interface ForumPost {
  id: string;
  title: string;
  content: string;
  author: string;
  timestamp: string;
  category: string;
  replies: number;
  likes: number;
  isAnonymous: boolean;
}

// ---------------- Mock Data ----------------

export const mockUser: UserType = {
  id: 'user-1',
  name: 'Anonymous Student',
  role: 'student',
  isAnonymous: true,
  mood: 'neutral',
  lastActive: '2024-01-15T10:30:00Z',
};

export const mockAssessments: Assessment[] = [
  {
    id: '1',
    userId: 'user-1',
    type: 'PHQ-9',
    score: 8,
    severity: 'mild',
    recommendations: ['Consider talking to a counselor', 'Try relaxation techniques'],
    completedAt: '2024-01-15T09:00:00Z',
  },
  {
    id: '2',
    userId: 'user-1',
    type: 'GAD-7',
    score: 12,
    severity: 'moderate',
    recommendations: ['Schedule regular counseling sessions', 'Practice mindfulness'],
    completedAt: '2024-01-10T14:30:00Z',
  },
];

export const mockAppointments: Appointment[] = [
  {
    id: '1',
    studentId: 'user-1',
    counselorId: 'counselor-1',
    counselorName: 'Dr. Sarah Johnson',
    date: '2024-01-20',
    time: '14:00',
    duration: 60,
    status: 'scheduled',
    type: 'individual',
  },
  {
    id: '2',
    studentId: 'user-1',
    counselorId: 'counselor-2',
    counselorName: 'Dr. Raj Patel',
    date: '2024-01-18',
    time: '10:00',
    duration: 45,
    status: 'completed',
    type: 'individual',
  },
];

export const mockResources: Resource[] = [
  {
    id: '1',
    title: 'Managing Academic Stress',
    description: 'Learn effective techniques to handle academic pressure and exam anxiety.',
    type: 'article',
    category: 'Stress Management',
    language: 'English',
    url: '#',
    duration: 5,
    tags: ['stress', 'academic', 'anxiety'],
    rating: 4.8,
    views: 1250,
  },
  {
    id: '2',
    title: 'Guided Meditation for Sleep',
    description: '20-minute guided meditation to improve sleep quality and relaxation.',
    type: 'audio',
    category: 'Sleep & Relaxation',
    language: 'Hindi',
    url: '#',
    duration: 20,
    tags: ['meditation', 'sleep', 'relaxation'],
    rating: 4.9,
    views: 2100,
  },
  {
    id: '3',
    title: 'Understanding Depression',
    description: 'Educational video about recognizing and dealing with depression.',
    type: 'video',
    category: 'Mental Health Education',
    language: 'English',
    url: '#',
    duration: 15,
    tags: ['depression', 'education', 'awareness'],
    rating: 4.7,
    views: 980,
  },
];

export const mockForumPosts: ForumPost[] = [
  {
    id: '1',
    title: 'Feeling overwhelmed with final exams',
    content: 'Anyone else struggling with exam stress? Looking for study tips and stress management techniques.',
    author: 'Anonymous Student',
    timestamp: '2024-01-15T08:30:00Z',
    category: 'Academic Stress',
    replies: 12,
    likes: 8,
    isAnonymous: true,
  },
  {
    id: '2',
    title: 'Dealing with homesickness',
    content: 'First year student here. Missing home a lot and finding it hard to adjust. Any advice?',
    author: 'FirstYear2024',
    timestamp: '2024-01-14T19:45:00Z',
    category: 'Adjustment Issues',
    replies: 18,
    likes: 15,
    isAnonymous: false,
  },
];

