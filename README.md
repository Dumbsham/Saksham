# 🌟 Saksham 🇮🇳

> AI-Powered Skilling and Opportunity Platform for Women in India

[![Status](https://img.shields.io/badge/Status-Live-brightgreen?style=for-the-badge)]()
[![Hackathon](https://img.shields.io/badge/Hackathon-AI%20Bharat%202025-blue?style=for-the-badge)]()
[![Live Demo](https://img.shields.io/badge/Live%20Demo-Click%20Here-orange?style=for-the-badge)](https://www.saksham-ai.online)

**🚀 [Live Demo → https://www.saksham-ai.online](https://www.saksham-ai.online)**

---

## 💡 What is Saksham?

An AI-powered platform empowering **10 million Indian women** to learn skills, find safe opportunities, and earn **₹10–15k/month** through:

- 🎤 **Voice-First Onboarding** — speak in Hindi, get a personalized profile instantly
- 🤖 **AI Career Recommendations** — smart, personalized skill and career guidance via Google Vertex AI (Gemini)
- 💼 **Verified Job Matching** — no degree required, safe and trusted opportunities
- 📚 **Personalized Learning** that fits household schedules, powered by YouTube course discovery
- 💬 **AI Agent Chat** — always-available bilingual assistant (Hindi/English)
- 📊 **Progress Dashboard** — track skills, courses, and earnings milestones
- ✅ **Safe & Trusted** ecosystem built for Indian women

---

## 🎯 The Problem We're Solving

**10M+ Indian women want to earn income but face barriers:**

| Barrier | Impact |
|---------|--------|
| 🤷‍♀️ Don't know what skills to learn | Miss opportunities |
| 🚫 Can't find safe, verified work | Exploitation risk |
| ⏰ Can't balance learning with household work | Never start |
| 🌐 Resources only in English | Can't access |
| 🎓 Jobs require degrees they don't have | Excluded |

**Our solution:** AI that understands their reality and guides them in Hindi.

---

## ✨ Features (Live & Working)

### 🎤 Voice-Based Onboarding
```
User speaks in Hindi: "मैं दिन में 2 घंटे काम कर सकती हूं"
AI understands: "I can work 2 hours per day"
Creates profile automatically
```

### 🤖 AI Career Recommendations
```
Input: User profile (education, time, location)
Output: Personalized career matches with:
  - Earning potential (₹10–15k/month)
  - Time to learn
  - Why it's perfect for YOU
```

### 💬 AI Agent Chat
```
Always-available bilingual assistant
Understands Hindi and English
Context-aware across the full conversation
Powered by Google Vertex AI (Gemini) + Groq
```

### 💼 Smart Job Matching
```
Filters jobs by:
✅ No degree required
✅ Skill-based only
✅ Safe & verified
✅ Fits user's time & location
```

### 📊 Progress Dashboard
```
Tracks:
- Courses in progress and completed
- Interest history and AI suggestions
- Job applications and status
- Skill milestones and earnings progress
```

---

## 🛠️ Tech Stack

### **AI & Voice**
- 🎤 **Google Cloud Speech-to-Text** — Hindi voice transcription
- 🔊 **Google Cloud Text-to-Speech** — Hindi voice responses
- 🤖 **Google Vertex AI (Gemini)** — Career recommendations & AI agent
- ⚡ **Groq** — Fast LLM inference for career comparison and agent chat

### **Application**
- ⚛️ **React 18 + TypeScript + Vite** — Fast, modern frontend
- 🎨 **Tailwind CSS + Framer Motion** — Beautiful, animated UI
- 🌐 **Three.js + React Three Fiber** — 3D interactive experience
- 🟢 **Node.js + Express** — Backend REST API
- 🍃 **MongoDB Atlas** — Database (Mongoose ODM)
- 🔐 **Clerk** — Authentication (JWT, protected routes)
- 📺 **YouTube Data API** — Course discovery

### **Infrastructure**
- ☁️ **AWS S3 + CloudFront** — Frontend hosting & CDN
- 🚀 **AWS EC2 + PM2** — Backend hosting and process management
- 🌍 **Mumbai Region (ap-south-1)** — Low latency for Indian users

---

## 🚀 Deployment

| Service      | Details                              |
|--------------|--------------------------------------|
| Frontend     | https://www.saksham-ai.online        |
| Backend API  | AWS EC2 (ap-south-1) + PM2           |
| Database     | MongoDB Atlas                        |
| CDN          | AWS CloudFront                       |

---

## 🏃 Running Locally

### Frontend
```bash
cd Frontend
npm install --legacy-peer-deps
cp .env.example .env  # add your keys
npm run dev
```

### Backend
```bash
cd Backend
npm install
cp .env.example .env  # add your keys
node server.js
```

### Environment Variables

**Frontend (`.env`):**
```
VITE_API_URL=http://localhost:5000/api
VITE_CLERK_PUBLISHABLE_KEY=your_key
VITE_GROQ_API_KEY=your_key
```

**Backend (`.env`):**
```
PORT=5000
MONGO_URI=your_mongodb_uri
GOOGLE_PROJECT_ID=your_project_id
GCP_CREDENTIALS_JSON={"type":"service_account",...}
YOUTUBE_API_KEY=your_key
CLERK_PUBLISHABLE_KEY=your_key
CLERK_SECRET_KEY=your_key
FRONTEND_URLS=http://localhost:5173
```

---

## 🎯 Target Impact

**By Year 1:**
- 🎯 **10,000 active users**
- 💰 **₹8–15k average monthly earnings** per user
- 📈 **60% skill completion rate**
- ✅ **Safe, verified opportunities only**

**By Year 2:**
- 🚀 **1 million users** across India
- 🌍 **5 states covered**
- 💼 **50,000 women earning consistently**
- 📊 **₹600 crore economic impact**

---

## 👥 Team

| Name         | Role                                         |
|--------------|----------------------------------------------|
| **Saksham**  | AWS Infrastructure, AI Integration, Backend  |
| **Radhika**  | Full-stack Development, UI/UX                |

**Built for:** AI Bharat Hackathon 2025

---

## 📁 Project Structure

```
Saksham/
├── Backend/
│   ├── config/          # Database connection
│   ├── models/          # MongoDB schemas (User, Session, InterestHistory)
│   ├── routes/          # API endpoints (user, agent, speech, career, jobs, courses)
│   ├── services/        # Business logic (AI, TTS, YouTube, Gemini)
│   ├── agent_service/   # Python microservice (FastAPI, LangChain, LangGraph)
│   └── server.js        # Express entry point
└── Frontend/
    ├── src/
    │   ├── components/  # Reusable UI components (AgentChat, Navbar, etc.)
    │   ├── contexts/    # UserContext, ThemeContext, LanguageContext
    │   ├── pages/       # Dashboard, Onboarding, Course, Jobs, Chat, Profile
    │   ├── i18n/        # Hindi & English translations
    │   └── routes/      # AppRoutes with protected route handling
    └── public/          # Static assets
```

---

## 🙏 Acknowledgments

- **Google Cloud** for AI & voice services
- **Groq** for fast LLM inference
- **AI Bharat Hackathon** for the opportunity
- **All the women** this will empower

---

<div align="center">

### 🌟 Live Now 🌟

**[Try Saksham → https://www.saksham-ai.online](https://www.saksham-ai.online)**

**Building something meaningful for 10 million women**

---

[![Built with Google Cloud](https://img.shields.io/badge/Built%20with-Google%20Cloud-4285F4?style=for-the-badge&logo=google-cloud)](https://cloud.google.com)
[![Hosted on AWS](https://img.shields.io/badge/Hosted%20on-AWS-orange?style=for-the-badge&logo=amazon-aws)](https://aws.amazon.com)
[![Made in India](https://img.shields.io/badge/Made%20in-India-green?style=for-the-badge)](https://en.wikipedia.org/wiki/India)

</div>
