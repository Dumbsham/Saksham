# 🏗️ Design Document: Saksham

## AI-Powered Economic Inclusion for Women

**Live:** https://www.saksham-ai.online
**Repo:** https://github.com/Dumbsham/Saksham

Saksham is a voice-first, AI-driven platform designed to bridge the gap between household-constrained women in India and sustainable income opportunities through personalized skill-building and routine-aware scheduling.

---

## 1. System Architecture

The application follows a **full-stack, cloud-assisted architecture** combining a React SPA frontend, a Node.js/Express REST API backend, a MongoDB Atlas database, and cloud AI/voice services from Google Cloud, Groq, and AWS.

### 1.1 High-Level Components

- **Frontend** – React 18 + TypeScript SPA built with Vite and TailwindCSS. Includes dark/light mode, bilingual UI (Hindi/English), Framer Motion animations, and Three.js 3D visuals. Hosted on AWS S3 + CloudFront.
- **Backend** – Node.js + Express REST API handling authentication, AI orchestration, speech processing, career suggestions, and data persistence. Hosted on AWS EC2 (ap-south-1) with PM2 process management.
- **Database** – MongoDB Atlas via Mongoose ODM, storing user profiles, sessions, and interest history.
- **AI / LLM Layer** – Google Vertex AI (Gemini) for primary conversational intelligence and career suggestion generation; Groq for fast LLM inference (career comparisons, agent responses).
- **Voice Layer** – Google Cloud Speech-to-Text (Hindi STT) and Google Cloud Text-to-Speech (Hindi TTS).
- **Storage & CDN** – AWS S3 for media and audio file storage; AWS CloudFront for global content delivery with low latency to Indian users.
- **Authentication** – Clerk for JWT-based session management across frontend and backend.

---

## 2. Technical Stack

| Layer               | Technology                                      | Rationale                                                      |
|---------------------|-------------------------------------------------|----------------------------------------------------------------|
| Frontend            | React 18 (TypeScript) + Vite                    | Fast HMR, modern build tooling, TypeScript safety              |
| Styling             | TailwindCSS                                     | Utility-first, mobile-first responsive design                  |
| Animations / 3D     | Framer Motion, Three.js, @react-three/fiber     | Engaging onboarding and landing visuals                        |
| Routing             | React Router v7                                 | Client-side navigation with protected routes                   |
| Authentication      | Clerk                                           | Drop-in JWT auth, supports email/social/phone sign-in          |
| Backend             | Node.js + Express                               | Lightweight REST API, broad ecosystem                          |
| Database            | MongoDB Atlas + Mongoose                        | Schema-flexible for evolving user profiles and history         |
| Primary AI / LLM    | Google Vertex AI (Gemini)                       | High-quality multilingual reasoning; strong Hindi support      |
| Fast LLM Inference  | Groq                                            | Sub-second responses for career comparisons and agent chat     |
| Voice STT           | Google Cloud Speech-to-Text                     | Strong Hindi and regional dialect recognition                  |
| Voice TTS           | Google Cloud Text-to-Speech                     | Natural Hindi and English voice output                         |
| Course Discovery    | YouTube Data API                                | Rich catalogue of free, beginner-level learning content        |
| Media Storage       | AWS S3                                          | Scalable audio and asset storage                               |
| CDN                 | AWS CloudFront                                  | Low-latency delivery from Mumbai (ap-south-1)                  |
| Frontend Hosting    | AWS S3 + CloudFront                             | Cost-effective static hosting with global CDN                  |
| Backend Hosting     | AWS EC2 (ap-south-1) + PM2                      | Persistent Node.js process management, low-latency India region|

---

## 3. Core Functional Logic

### 3.1 AI Conversational Profiling

Rather than lengthy forms, Saksham uses a conversational coffee-chat onboarding flow.

**Flow:**
1. **Input:** User speaks or types about their day, education, and interests in Hindi or English.
2. **Processing:**
   - Google Cloud Speech-to-Text converts audio to text.
   - Google Vertex AI (Gemini) extracts structured entities (e.g. `free_time: 14:00–16:00`, `skill: basic_stitching`).
3. **Output:** A structured user profile is persisted in MongoDB (`UserProfile` collection).

**Example:**
```
Input (voice): "मैं दिन में 2 घंटे काम कर सकती हूं"
Extracted:     { available_hours: 2, time_preference: "flexible" }
```

### 3.2 AI Agent Chat

An always-available conversational assistant powered by the LLM backend.

**Flow:**
1. User sends a message (text or voice) via the `AgentChat` frontend component.
2. Frontend calls `POST /api/agent/chat` with `{ message, history, context }`.
3. Backend routes the request to Google Vertex AI (Gemini) or Groq with the full conversation history.
4. AI response is returned and rendered; conversation history is maintained client-side per session.

### 3.3 Opportunity-Matching Algorithm

The **Opportunity Match Score** prioritizes listings that best fit a woman's constraints.

**Scoring factors:**
- Skill match (0–1)
- Time compatibility (0–1)
- Location / remote feasibility (0–1)
- Verification / trust score (0–1)

**Formula:**
```
Score = (Skill_Match   × 0.4) +
        (Time_Fit      × 0.3) +
        (Location_Fit  × 0.2) +
        (Trust_Score   × 0.1)
```

Listings are sorted by descending score and returned via `GET /api/jobs`.

### 3.4 Course Recommendation

Career suggestions generated by the AI are cross-referenced against the YouTube Data API to surface relevant, free, beginner-level courses. Results are returned via `GET /api/courses` and rendered in the Course and Lesson pages.

---

## 4. Data Model

### 4.1 MongoDB Schemas

**UserProfile:**
```json
{
  "userId": "clerk_user_id",
  "language": "hi-IN",
  "education_level": "8th Pass",
  "time_slots": [
    { "start": "14:00", "end": "16:00", "label": "Afternoon" }
  ],
  "skills_identified": ["Tailoring", "Basic Math"],
  "income_goal": 12000,
  "onboarding_complete": true
}
```

**Session:**
```json
{
  "sessionId": "uuid",
  "userId": "clerk_user_id",
  "chat_history": [],
  "career_suggestions": [],
  "course_suggestions": [],
  "job_suggestions": [],
  "created_at": "ISO8601"
}
```

**InterestHistory:**
```json
{
  "userId": "clerk_user_id",
  "interests": ["Teaching", "Tailoring"],
  "ai_suggestions": ["Online Tutor", "Boutique Owner"],
  "selected_career": "Online Tutor",
  "resources": ["youtube.com/..."],
  "progress": {
    "lessons_completed": 3,
    "milestones": ["First Lesson", "Quiz Passed"]
  }
}
```

**Job Listing:**
```json
{
  "jobId": "JOB123",
  "category": "Gig-Work",
  "type": "Remote",
  "verified": true,
  "pay_per_unit": 50,
  "estimated_monthly": 8000
}
```

---

## 5. API Structure

All protected endpoints require a valid Clerk JWT passed in the `Authorization` header.

| Method | Endpoint                  | Description                                    |
|--------|---------------------------|------------------------------------------------|
| POST   | `/api/agent/chat`         | AI agent conversation turn                     |
| GET    | `/api/user/profile`       | Fetch user profile, sessions, and stats        |
| POST   | `/api/speech/transcribe`  | Audio file → transcript + career suggestions   |
| POST   | `/api/speech/speak`       | Text → TTS audio response                      |
| POST   | `/api/career/suggest`     | Transcript → ranked career suggestions         |
| GET    | `/api/courses`            | Fetch YouTube-sourced course recommendations   |
| GET    | `/api/jobs`               | Fetch ranked job/gig opportunities             |

**Example — `POST /api/agent/chat`:**

Request:
```json
{ "message": "I like teaching children", "history": [], "context": {} }
```

Response:
```json
{
  "reply": "That's great! Online tutoring could be a perfect fit for you...",
  "suggestions": ["Online Tutor", "Content Creator"]
}
```

---

## 6. Environment Variables

**Frontend (`.env`):**
```
VITE_API_URL=http://localhost:5000/api
VITE_CLERK_PUBLISHABLE_KEY=your_clerk_key
VITE_GROQ_API_KEY=your_groq_key
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

## 7. Frontend Architecture

### Pages

| Page          | Purpose                                              |
|---------------|------------------------------------------------------|
| Landing       | Marketing page with 3D hero and feature highlights   |
| Onboarding    | Voice/text conversational profiling flow             |
| Profile Setup | Manual profile editing post-onboarding               |
| Dashboard     | Personalized home with recent activity and stats     |
| Skills        | Skill discovery and path recommendations             |
| Course        | Course listing from YouTube recommendations          |
| Lesson        | Individual lesson viewer                             |
| Quiz          | In-lesson assessment module                          |
| Jobs          | Ranked opportunity listings                          |
| Job Detail    | Full job description and apply flow                  |
| Chat          | AI Agent Chat interface                              |
| Profile       | User profile management                              |

### State Management

| Context           | Responsibility                                      |
|-------------------|-----------------------------------------------------|
| `UserContext`     | Authenticated user profile, onboarding state        |
| `ThemeContext`    | Dark / light mode preference                        |
| `LanguageContext` | Active language (Hindi / English), i18n switching   |

### Routing

- React Router v7 (`AppRoutes.jsx`)
- Public routes: Landing, Sign In, Sign Up
- Protected routes (via `ProtectedRoute`): all authenticated pages

---

## 8. Authentication Flow

1. User signs in via Clerk (email, social, or phone).
2. Clerk issues a JWT session token stored securely in the browser.
3. Frontend attaches the token to all API requests via the `Authorization` header.
4. Backend `requireAuth` middleware (Clerk Express SDK) validates the token.
5. `userId` from the Clerk token is used to scope all MongoDB queries.

---

## 9. Bilingual Interface

| Concern               | Implementation                                      |
|-----------------------|-----------------------------------------------------|
| Language switching    | `LanguageContext` React context provider            |
| Translation strings   | i18n files under `Frontend/src/i18n/`               |
| Voice input language  | Passed as `languageCode` to Google STT API          |
| Voice output language | Passed as `languageCode` to Google TTS API          |
| AI response language  | System prompt instructs Gemini to respond in the user's preferred language |
| Persistence           | Language preference saved to `UserProfile`          |

---

## 10. UI/UX Design Principles

The interface is crafted for users with low digital literacy:

1. **Voice-first interaction:** Persistent, large microphone button on every interactive screen.
2. **Visual cues:** High-contrast icons (e.g. sewing machine for tailoring, book for learning).
3. **Zero jargon:** Simple terms — use *Kamai* (earnings) not "revenue".
4. **Progress visualization:** Growth-based visual indicators as lessons are completed.
5. **Micro-interactions:** Short spoken confirmations after voice commands (e.g., *Samajh gaya, chaliye shuru karte hain*).
6. **Dark/Light mode:** System-respecting theme toggle for low-glare usability.
7. **Mobile-first layout:** Designed for small Android screens with touch-friendly tap targets.

---

## 11. Deployment Architecture

```
User (Mobile/Web)
      │
      ▼
AWS CloudFront CDN  ←──  AWS S3 (Frontend Static Files)
      │
      ▼
https://www.saksham-ai.online
      │
      ▼
AWS EC2 (ap-south-1) + PM2
Node.js / Express API
      │
      ├──► MongoDB Atlas (User Profiles, Sessions, History)
      ├──► Google Vertex AI / Gemini (Career AI, Chat)
      ├──► Groq (Fast LLM Inference)
      ├──► Google Cloud STT/TTS (Voice)
      ├──► YouTube Data API (Courses)
      └──► AWS S3 (Media / Audio Storage)
```

---

## 12. Implementation Roadmap

### Phase 1 – Foundation (Hackathon MVP) ✅
- React + Express + MongoDB full-stack setup with Clerk auth.
- Voice-to-profile onboarding flow (Google STT + Gemini).
- AI Agent Chat component and backend endpoint (Gemini + Groq).
- Static list of 50 verified jobs with scoring logic.
- Course recommendations via YouTube Data API.
- Progress dashboard and interest history tracking.
- Bilingual UI (Hindi / English).
- Live at https://www.saksham-ai.online.

### Phase 2 – Intelligence (Post-Hackathon)
- WhatsApp nudges via routine optimizer.
- Behavioral learning adaptation and adaptive difficulty.
- Income projection estimator.
- Peer community layer.

### Phase 3 – Ecosystem Expansion
- API integration with gig platforms (Apna, WorkIndia).
- Community peer-learning voice rooms.
- Earnings verification and referral network.
- Government (NEEM/NAPS) integration.
- Android native application.

---

## 13. Risk Mitigation

| Risk         | Mitigation                                                        |
|--------------|-------------------------------------------------------------------|
| Accuracy     | Human-in-the-loop validation for early job listings              |
| Latency      | Groq for fast inference; optimistic UI updates with loading states|
| Trust        | AI-assisted keyword flagging for suspicious job descriptions      |
| Cloud cost   | Monitor token usage and set billing alerts                        |
| Voice errors | Fallback to text input when STT confidence is low                |
| Auth issues  | Clerk handles token refresh and session expiry gracefully        |

---

## 14. Architecture Summary

Saksham's modular, cloud-assisted full-stack design enables:

- Scalable, AI-driven personalization via Google Vertex AI (Gemini) and Groq
- Low-latency voice interaction using Google Cloud STT/TTS
- Secure, privacy-conscious user handling via Clerk JWT
- Flexible data modelling with MongoDB Atlas for evolving user profiles
- Cost-effective hosting on AWS (S3/CloudFront for frontend, EC2 for backend) in the Mumbai region
- Future expansion across languages, cities, and native mobile platforms

---

## Conclusion

Saksham is more than a learning platform. It is a voice-first AI employability bridge that converts domestic constraints into structured earning pathways for under-utilized women — built on a production-grade, cloud-native stack and live today at https://www.saksham-ai.online.
