# **MindCare - Mental Health & Counseling Platform**

![MindCare](https://img.shields.io/badge/MindCare-Mental%20Health%20Platform-00D9FF?style=for-the-badge&logo=heart&logoColor=white)

![License: MIT](https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge)
![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=for-the-badge)
![Health Tech](https://img.shields.io/badge/Health-Tech-FF6B9D?style=for-the-badge&logo=plus&logoColor=white)

![React](https://img.shields.io/badge/React-18-61DAFB?style=flat-square&logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=flat-square&logo=typescript&logoColor=white)
![AI Powered](https://img.shields.io/badge/AI-Powered-FF6F00?style=flat-square&logo=openai&logoColor=white)
![Mental Health](https://img.shields.io/badge/Mental-Health-9C27B0?style=flat-square&logo=psychology&logoColor=white)
![Crisis Support](https://img.shields.io/badge/Crisis-Support-E53935?style=flat-square&logo=phone&logoColor=white)
![Community](https://img.shields.io/badge/Community-Forum-4CAF50?style=flat-square&logo=people&logoColor=white)
![Appointments](https://img.shields.io/badge/Appointments-Scheduling-2196F3?style=flat-square&logo=calendar&logoColor=white)
![Resources](https://img.shields.io/badge/Resources-Educational-FFC107?style=flat-square&logo=book&logoColor=white)
![Assessment](https://img.shields.io/badge/Assessment-Tools-00BCD4?style=flat-square&logo=clipboard&logoColor=white)
![Responsive](https://img.shields.io/badge/Design-Responsive-FF4081?style=flat-square&logo=mobile&logoColor=white)

**A comprehensive mental health and counseling platform featuring AI-powered support, professional appointments, peer community, crisis resources, and evidence-based assessments.**

[Live Demo](#) • [Report Bug](https://github.com/yourusername/mindcare/issues/new?template=bug_report.md) • [Request Feature](https://github.com/yourusername/mindcare/issues/new?template=feature_request.md)

---

## **🌟 Features**

### **Core Features**

- **AI-Powered Chat** - 24/7 conversational AI support for mental health guidance
- **Professional Appointments** - Schedule and manage sessions with licensed counselors
- **Mental Health Assessments** - Evidence-based screening tools and questionnaires
- **Educational Resources** - Curated articles, guides, and self-help materials
- **Peer Community** - Safe forum for sharing experiences and mutual support
- **Crisis Support** - Emergency helplines and immediate assistance resources
- **User Dashboard** - Personalized overview with insights and progress tracking
- **Admin Panel** - Comprehensive management for users, content, and appointments

### **Advanced Features**

- **Context-Aware AI** - Empathetic chatbot trained on mental health protocols
- **Appointment Reminders** - Email/SMS notifications for scheduled sessions
- **Progress Tracking** - Monitor mental health journey with analytics
- **Anonymous Mode** - Participate in community discussions anonymously
- **Resource Library** - Searchable database of coping strategies and techniques
- **Multi-role System** - User, Counselor, and Admin access levels
- **Mobile Responsive** - Seamless experience across all devices
- **Privacy First** - HIPAA-compliant data handling and encryption

---


## **🛠️ Tech Stack**

| **Layer** | **Technologies** |
|-----------|------------------|
| **Frontend** | React 18, TypeScript, React Router, Context API |
| **UI Framework** | Tailwind CSS, Material-UI, Framer Motion |
| **AI Integration** | OpenAI GPT-4, LangChain (optional) |
| **Backend** | Node.js/Express or Python/FastAPI |
| **Database** | MongoDB, MySQL |
| **Authentication** | JWT, OAuth 2.0, Passport.js |
| **Real-time** | Socket.io for chat and notifications |
| **Deployment** | Vercel/Netlify (Frontend), Railway/Render (Backend) |

---

## **📁 Project Structure**

```
mindcare/
├── src/
│   ├── components/
│   │   ├── Header.tsx           # Navigation header
│   │   ├── Footer.tsx           # Footer component
│   │   ├── Dashboard.tsx        # User dashboard
│   │   ├── AIChat.tsx           # AI chatbot interface
│   │   ├── Assessment.tsx       # Mental health assessments
│   │   ├── Appointments.tsx     # Appointment management
│   │   ├── Resources.tsx        # Educational resources
│   │   ├── Community.tsx        # Peer support forum
│   │   ├── CrisisSupport.tsx    # Emergency resources
│   │   └── AdminDashboard.tsx   # Admin panel
│   ├── context/
│   │   ├── UserContext.tsx      # User state management
│   │   └── AppContext.tsx       # Global app state
│   ├── hooks/
│   │   ├── useAuth.ts           # Authentication hook
│   │   ├── useAppointments.ts   # Appointment logic
│   │   └── useChat.ts           # Chat functionality
│   ├── utils/
│   │   ├── api.ts               # API client
│   │   ├── helpers.ts           # Utility functions
│   │   └── constants.ts         # App constants
│   ├── types/
│   │   └── index.ts             # TypeScript types
│   ├── styles/
│   │   └── global.css           # Global styles
│   ├── App.tsx                  # Main app component
│   └── main.tsx                 # Entry point
├── public/
│   ├── assets/                  # Images, icons
│   └── index.html
├── package.json
├── tsconfig.json
└── README.md
```

---

## **🚀 Quick Start**

### **Prerequisites**

- Node.js 18+ or Python 3.8+
- npm or yarn
- OpenAI API key (for AI chat)
- MongoDB or PostgreSQL (optional for backend)

### **Installation**

```bash
# Clone the repository
git clone https://github.com/yourusername/mindcare.git
cd mindcare

# Install dependencies
npm install
# or
yarn install

# Configure environment variables
cp .env.example .env
# Edit .env with your API keys and configuration

# Start development server
npm run dev
# or
yarn dev

# Application runs at http://localhost:5173
```

### **Environment Configuration**

Create a `.env` file in the root directory:

```env
# AI Configuration
VITE_OPENAI_API_KEY=your_openai_api_key_here

# Backend API (if using separate backend)
VITE_API_URL=http://localhost:3000/api

# Authentication
VITE_JWT_SECRET=your_jwt_secret_here

# Email Service (for notifications)
VITE_SMTP_HOST=smtp.gmail.com
VITE_SMTP_PORT=587
VITE_SMTP_USER=your-email@gmail.com
VITE_SMTP_PASS=your-app-password

# Crisis Hotlines (customize for your region)
VITE_CRISIS_HOTLINE=1-800-273-8255
VITE_TEXT_CRISIS_LINE=741741
```

---

## **🗺️ Routes Overview**

MindCare features **8 main application routes**, each designed for specific mental health support needs:

| **Route** | **Component** | **Purpose** | **Access Level** |
|-----------|---------------|-------------|------------------|
| `/dashboard` | `Dashboard` | Home page with user overview, mental health insights, and personalized recommendations | All Users |
| `/chat` | `AIChat` | AI-powered chatbot for 24/7 mental health support and guided conversations | All Users |
| `/assessment` | `Assessment` | Mental health screening tools, questionnaires (PHQ-9, GAD-7, etc.) | All Users |
| `/appointments` | `Appointments` | Schedule, manage, and track appointments with licensed counselors/therapists | All Users |
| `/resources` | `Resources` | Mental health articles, coping strategies, guides, and educational materials | All Users |
| `/community` | `Community` | Peer support forum for sharing experiences, moderated discussions | All Users |
| `/crisis` | `CrisisSupport` | Emergency crisis support, helpline resources, immediate assistance | All Users |
| `/admin` | `AdminDashboard` | Platform management: users, appointments, content moderation, analytics | Admin Only |

### **Navigation Structure**

- **State Management**: Routes managed via `currentPage` state
- **Default Route**: `/dashboard` (landing page)
- **Navigation**: Handled through `Header` and `Footer` components
- **User Context**: Global user state passed throughout the app
- **Route Protection**: Authentication required for certain features
- **Role-Based Access**: Admin routes restricted to authorized users

---

## **🔌 Key Components**

### **1. Dashboard**
```typescript
// User overview with mental health insights
- Welcome message and user profile
- Recent activity summary
- Mood tracking visualization
- Quick access to assessments and appointments
- Personalized recommendations
```

### **2. AI Chat**
```typescript
// 24/7 AI-powered mental health support
- Real-time conversational interface
- Context-aware responses
- Empathetic tone and crisis detection
- Chat history and session management
- Export conversations for therapist review
```

### **3. Assessment**
```typescript
// Evidence-based mental health screening
- PHQ-9 (Depression screening)
- GAD-7 (Anxiety screening)
- PCL-5 (PTSD checklist)
- Custom questionnaires
- Results interpretation and recommendations
- Progress tracking over time
```

### **4. Appointments**
```typescript
// Professional counselor scheduling
- Browse available therapists/counselors
- Filter by specialty, availability, insurance
- Book, reschedule, or cancel appointments
- Video/phone/in-person session options
- Reminders and notifications
- Session notes and history
```

### **5. Resources**
```typescript
// Educational mental health content
- Articles organized by category (anxiety, depression, stress, etc.)
- Video tutorials and guided meditations
- Downloadable worksheets and PDFs
- Coping strategies and techniques
- Self-help guides
- Search and filter functionality
```

### **6. Community**
```typescript
// Peer support forum
- Topic-based discussion boards
- Anonymous posting option
- Upvote/downvote system
- Comment threads
- Moderation tools
- Report inappropriate content
- User reputation system
```

### **7. Crisis Support**
```typescript
// Emergency mental health resources
- National crisis hotlines (phone and text)
- Local emergency services
- Suicide prevention resources
- Immediate coping strategies
- Chat with crisis counselor
- Safety planning tools
```

### **8. Admin Dashboard**
```typescript
// Platform management (Admin only)
- User management and analytics
- Appointment oversight
- Content moderation (community posts)
- Resource library management
- Crisis report tracking
- System health monitoring
```

---

## **💾 Data Models**

### **User Model**
```typescript
interface User {
  id: string;
  name: string;
  email: string;
  role: 'user' | 'counselor' | 'admin';
  profile: {
    age?: number;
    gender?: string;
    avatar?: string;
  };
  assessments: Assessment[];
  appointments: Appointment[];
  createdAt: Date;
  lastLogin: Date;
}
```

### **Appointment Model**
```typescript
interface Appointment {
  id: string;
  userId: string;
  counselorId: string;
  dateTime: Date;
  duration: number; // minutes
  type: 'video' | 'phone' | 'in-person';
  status: 'scheduled' | 'completed' | 'cancelled';
  notes?: string;
  reminderSent: boolean;
}
```

### **Assessment Model**
```typescript
interface Assessment {
  id: string;
  userId: string;
  type: 'PHQ-9' | 'GAD-7' | 'PCL-5' | 'custom';
  responses: Record<string, any>;
  score: number;
  severity: 'minimal' | 'mild' | 'moderate' | 'severe';
  recommendations: string[];
  completedAt: Date;
}
```

### **Community Post Model**
```typescript
interface Post {
  id: string;
  authorId: string;
  isAnonymous: boolean;
  title: string;
  content: string;
  category: string;
  upvotes: number;
  downvotes: number;
  comments: Comment[];
  createdAt: Date;
  moderated: boolean;
}
```

---

## **🤖 AI Chat Features**

### **Capabilities**
- **Crisis Detection**: Identifies urgent mental health situations
- **Empathetic Responses**: Trained on mental health counseling principles
- **Resource Suggestions**: Recommends relevant articles and coping strategies
- **Assessment Prompts**: Suggests when professional evaluation is needed
- **Conversation Memory**: Maintains context within session

### **Safety Features**
- Auto-escalation to crisis resources when needed
- Disclaimers about AI limitations
- Professional help recommendations
- Chat history for therapist review
- User feedback and rating system

---

## **🔐 Security & Privacy**

### **Data Protection**
- **Encryption**: End-to-end encryption for sensitive data
- **HIPAA Compliance**: Follows healthcare data protection standards
- **Anonymization**: Option for anonymous community participation
- **Data Minimization**: Collect only necessary information
- **Secure Storage**: Encrypted databases and backups

### **Authentication**
- **JWT Tokens**: Secure session management
- **OAuth 2.0**: Third-party login options (Google, Microsoft)
- **2FA Support**: Two-factor authentication for added security
- **Password Requirements**: Strong password policies
- **Session Timeouts**: Auto-logout after inactivity

### **Privacy Controls**
- **User Consent**: Clear consent for data usage
- **Data Export**: Users can download their data
- **Account Deletion**: Complete data removal option
- **Privacy Settings**: Granular control over profile visibility
- **Audit Logs**: Track access to sensitive information

---

## **📊 Mental Health Assessments**

### **Available Screening Tools**

| **Assessment** | **Purpose** | **Questions** | **Time** |
|----------------|-------------|---------------|----------|
| **PHQ-9** | Depression screening | 9 | 5 min |
| **GAD-7** | Anxiety screening | 7 | 3 min |
| **PCL-5** | PTSD checklist | 20 | 10 min |
| **PSS-10** | Perceived stress scale | 10 | 5 min |
| **MDQ** | Bipolar disorder screening | 13 | 5 min |
| **AUDIT** | Alcohol use assessment | 10 | 5 min |

### **Assessment Flow**
1. User selects assessment type
2. Completes questionnaire (Likert scale)
3. Automatic scoring and interpretation
4. Severity level determination
5. Personalized recommendations
6. Option to share results with counselor
7. Progress tracking over time

---

## **🗓️ Appointment System**

### **Features**
- **Counselor Profiles**: Bio, specialties, availability, ratings
- **Smart Scheduling**: AI-suggested optimal appointment times
- **Calendar Integration**: Sync with Google Calendar, Outlook
- **Reminders**: Email/SMS notifications (24h, 1h before)
- **Virtual Sessions**: Built-in video conferencing
- **Session Notes**: Counselor can add post-session notes
- **Insurance Integration**: Check coverage and co-pay

### **Booking Flow**
1. Browse counselors by specialty/availability
2. View counselor profile and reviews
3. Select date/time from available slots
4. Choose session type (video/phone/in-person)
5. Confirm insurance and payment
6. Receive confirmation and calendar invite
7. Join session at scheduled time

---

## **📚 Resource Library**

### **Content Categories**
- **Anxiety Management**: Breathing exercises, CBT techniques
- **Depression Support**: Activity scheduling, thought records
- **Stress Relief**: Mindfulness, meditation guides
- **Sleep Hygiene**: Sleep improvement strategies
- **Relationship Help**: Communication skills, boundaries
- **Trauma Recovery**: Grounding techniques, EMDR info
- **Substance Use**: Recovery resources, support groups

### **Content Types**
- Written articles (500-2000 words)
- Video tutorials (5-15 minutes)
- Audio meditations (10-30 minutes)
- Downloadable worksheets (PDF)
- Interactive exercises
- External resource links

---

## **👥 Community Guidelines**

### **Forum Rules**
- Be respectful and supportive
- No medical advice (use licensed professionals)
- Protect privacy (no personal identifying info)
- Report crisis situations to moderators
- No spam or promotional content
- Trigger warnings for sensitive topics

### **Moderation**
- AI-powered content filtering
- Human moderator review
- User reporting system
- Warning system for violations
- Temporary/permanent bans for severe issues

---

## **🚨 Crisis Support Resources**

### **Immediate Help**
- **National Suicide Prevention Lifeline**: 1-800-273-8255
- **Crisis Text Line**: Text HOME to 741741
- **Veterans Crisis Line**: 1-800-273-8255 (Press 1)
- **SAMHSA Helpline**: 1-800-662-4357
- **International**: Country-specific crisis lines

### **Crisis Features**
- One-click access to crisis hotlines
- Live chat with crisis counselors
- Safety planning tool
- Local emergency services finder
- Immediate coping strategies
- Follow-up check-ins

---

## **🔧 Admin Panel**

### **Admin Capabilities**
- **User Management**: View, edit, suspend accounts
- **Appointment Oversight**: View all bookings, resolve conflicts
- **Content Moderation**: Review flagged community posts
- **Resource Management**: Add/edit/delete library content
- **Analytics Dashboard**: User engagement, popular resources
- **Crisis Monitoring**: Track crisis support usage
- **System Health**: Monitor performance, errors

---

## **🐛 Troubleshooting**

### **Common Issues**

#### **1. AI Chat Not Responding**
**Solution**:
- Check OpenAI API key in `.env`
- Verify API quota and billing
- Check browser console for errors
- Ensure internet connection is stable

#### **2. Appointments Not Showing**
**Solution**:
- Verify backend API connection
- Check user authentication status
- Clear browser cache and cookies
- Ensure database is accessible

#### **3. Assessment Scores Incorrect**
**Solution**:
- Verify assessment scoring algorithms
- Check for incomplete responses
- Review questionnaire data structure
- Test with known sample responses

#### **4. Video Sessions Not Working**
**Solution**:
- Allow camera/microphone permissions
- Check WebRTC browser support
- Verify TURN/STUN server configuration
- Test with different browsers

---

## **🚀 Deployment**

### **Frontend Deployment (Vercel/Netlify)**
```bash
# Build for production
npm run build

# Deploy to Vercel
vercel --prod

# Deploy to Netlify
netlify deploy --prod
```

### **Backend Deployment (Railway/Render)**
```bash
# Configure environment variables on platform
# Push to GitHub repository
# Connect repository to Railway/Render
# Auto-deploy on push
```

### **Production Checklist**
- [ ] Set secure `JWT_SECRET` and `OPENAI_API_KEY`
- [ ] Configure production database (PostgreSQL)
- [ ] Enable HTTPS (SSL/TLS)
- [ ] Set up CORS for frontend domain
- [ ] Configure email service (SendGrid, AWS SES)
- [ ] Enable error monitoring (Sentry)
- [ ] Set up analytics (Google Analytics, Mixpanel)
- [ ] Configure CDN for assets (Cloudinary, AWS S3)
- [ ] Enable rate limiting (Redis)
- [ ] Set up automated backups
- [ ] Test all crisis support features
- [ ] HIPAA compliance review

---


## **📊 Testing**

```bash
# Run unit tests
npm test

# Run E2E tests
npm run test:e2e

# Run with coverage
npm run test:coverage

# Lint code
npm run lint

# Type checking
npm run type-check
```

---

## **📚 Dependencies**

```json
{
  "dependencies": {
    "react": "^18.2.0",
    "react-router-dom": "^6.20.0",
    "typescript": "^5.0.0",
    "tailwindcss": "^3.3.0",
    "@mui/material": "^5.14.0",
    "axios": "^1.6.0",
    "socket.io-client": "^4.7.0",
    "framer-motion": "^10.16.0",
    "date-fns": "^2.30.0",
    "react-hook-form": "^7.48.0",
    "zod": "^3.22.0"
  }
}
```

---

## **📄 License**

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## **⚠️ Disclaimer**

**MindCare is a supplementary mental health resource and not a substitute for professional medical advice, diagnosis, or treatment.** Always seek the advice of qualified health providers with any questions regarding mental health conditions.

---

## **🙏 Acknowledgments**

- Mental health professionals for clinical guidance
- Open source community for amazing tools
- Crisis support organizations for resources
- Beta testers and early users for feedback
- NAMI, SAMHSA, and mental health advocacy groups

---

## **📞 Support**

- 📧 Create an issue for bugs or questions
- 💬 Join our community forum for peer support
- 🔒 Privacy concerns: privacy@mindcare.com
- ⭐ Star this repo to support mental health tech!

---

**Built with Team SPROUD💙**

![GitHub stars](https://img.shields.io/github/stars/yourusername/mindcare?style=social)
![GitHub forks](https://img.shields.io/github/forks/yourusername/mindcare?style=social)
![GitHub watchers](https://img.shields.io/github/watchers/yourusername/mindcare?style=social)
![GitHub issues](https://img.shields.io/github/issues/yourusername/mindcare?style=social)
