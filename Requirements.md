# Saksham
## Skills + Opportunity Platform for Women

---

## Project Overview

**Platform Name:** Saksham *(Sanskrit: "Capable, Empowered")*
**Tagline:** AI-Powered Economic Inclusion for Underutilized Women in India
**Target Segment:** Housewives and partially educated women aiming to earn ₹10,000–15,000/month
**Hackathon:** AI Bharat 2025
**Live Demo:** https://www.saksham-ai.online

Saksham is a voice-first, AI-driven platform that bridges the gap between skill acquisition and income generation for women constrained by literacy, time, and access barriers.

---

## Problem Statement

Over 10 million women in India aspire to earn but face five structural barriers:

| Barrier | Impact |
|---|---|
| Don't know what skills to learn | Miss opportunities |
| Can't find safe, verified work | Exploitation risk |
| Can't balance learning with household work | Never start |
| Resources only in English | Can't access |
| Jobs require degrees they don't have | Excluded |

### Why Existing Solutions Fail

- Skill platforms assume high literacy and digital fluency.
- Job portals lack contextual filtering and are scam-prone.
- Learning systems ignore domestic schedules and energy patterns.
- No integrated solution connects skill acquisition directly to verified income.

---

## Vision

To create India's most accessible AI-driven employability bridge for women — guiding them from skill discovery to sustainable income through adaptive, voice-first intelligence in Hindi.

---

## Hackathon Success Criteria (MVP Scope)

### Must Have

- Hindi + English bilingual onboarding and UI
- AI-driven skill pathway generation via conversational profiling
- 50+ vetted job/gig listings
- Routine-aware micro-learning planner
- Voice-first interface (speech-to-text and text-to-speech)
- Demo with realistic user personas
- Secure authentication via Clerk
- Progress dashboard with recent activity and stats

### Should Have

- Interest history tracking and AI suggestion logging
- WhatsApp reminders
- Income projection estimator
- Peer community layer

### Nice to Have

- NEEM/NAPS integration
- Gig platform partnerships
- Gamified milestones

---

## Core Functional Modules

### 1. Intelligent User Profiling

**Data Inputs:**
- Demographics (Name, Age, Location)
- Education Level
- Household Responsibility Hours
- Language Preference (Hindi / English)
- Available Time Windows
- Existing Skills
- Income Target

**AI Intelligence Layer:**
- Google Vertex AI (Gemini) for conversational onboarding and career reasoning
- Google Cloud Speech-to-Text for voice input processing
- Skill extraction via NLP
- Constraint-based opportunity filtering

**Example Voice Input:**
```
User speaks: "मैं दिन में 2 घंटे काम कर सकती हूं"
AI understands: "I can work 2 hours per day"
Output: Structured user profile created automatically
```

**Output:**
- Skill readiness score
- Recommended skill path
- Opportunity cluster suggestions
- Weekly feasibility estimate

---

### 2. Adaptive Skill Learning Engine

**Resource Library:**
- Micro-lessons (5–30 mins)
- Audio-first content
- Beginner-level resources
- Local-language learning content
- YouTube-sourced courses via YouTube Data API

**AI Capabilities:**
- Adaptive learning paths (behavior-driven optimization)
- Difficulty calibration
- Voice-based quizzes
- Fast career comparison via Groq LLM inference

**Metrics:**
- Completion rate
- Weekly learning minutes
- Skill proficiency score
- Certificate milestones

**Frontend Pages:**
- Course listing and detail pages
- Lesson viewer
- In-lesson quiz module

---

### 3. Opportunity Matching Engine

**Opportunity Types:**
- **Online:** Data entry, moderation, tutoring
- **Offline:** Tailoring, catering, daycare
- **Hybrid:** Reselling, survey work, field collection

**Filtering Criteria:**
- No degree required
- Skill-based only
- Safe and verified listings
- Fits user's available time and location

**AI Matching Model:**
```
Score = (Skill_Match    × 0.4) +
        (Time_Fit       × 0.3) +
        (Location_Fit   × 0.2) +
        (Language_Match × 0.1)
```

**Outputs:**
- Ranked opportunity list
- Simplified job descriptions in plain Hindi
- Estimated monthly income potential (₹10–15k/month)

---

### 4. Smart Routine Optimization

**Inputs:**
- Household schedule
- Energy preference mapping
- Free-time windows

**AI Functions:**
- Conflict-aware schedule generation
- Engagement-based reminder timing

**Outputs:**
- Daily micro-learning plan
- Weekly earning plan
- Behavioral nudges

---

### 5. Voice-First Interface

**Why Critical?**
30–40% of target users prefer voice interaction over text. Hindi voice support is essential for accessibility.

**Stack:**
- Google Cloud Speech-to-Text (Hindi STT)
- Google Cloud Text-to-Speech (Hindi TTS)
- Google Vertex AI (Gemini) for intent understanding and response generation

**Capabilities:**
- Voice-based onboarding
- Spoken lesson summaries
- Voice job search
- Audio performance feedback

---

### 6. AI Agent Chat

An always-available conversational AI assistant embedded across the platform.

**Capabilities:**
- Natural language career and skill guidance
- Context-aware conversation history
- Bilingual responses (Hindi/English)
- Personalized suggestions based on user profile
- Fast response via Groq LLM inference

**Implementation:**
- `AgentChat` React component in the frontend
- Backend `/api/agent/chat` endpoint
- Powered by Google Vertex AI (Gemini) + Groq

---

### 7. Interest History & Progress Tracking

Tracks and persists user interactions, AI suggestions, and learning progress over time.

**Tracked Data:**
- User interests surfaced during onboarding and conversations
- AI-generated career and skill suggestions
- Selected career paths
- Recommended and completed learning resources
- Progress milestones

**Implementation:**
- `InterestHistory` MongoDB collection
- Surfaced on the Progress Dashboard

---

### 8. Progress Dashboard

A personalized home screen displaying the user's journey at a glance.

**Displayed Information:**
- Recent activity feed
- Courses in progress and completed
- Job applications and status
- AI-suggested next steps
- Earnings and skill milestone tracker

---

### 9. Authentication & User Management

Secure, frictionless sign-in using Clerk.

**Features:**
- JWT-based session management
- Protected routes on frontend and backend
- User profile linked to Clerk ID
- Supports email, social, and phone-based sign-in

---

### 10. Bilingual Interface (Hindi / English)

The entire platform supports seamless language switching.

**Implementation:**
- `LanguageContext` React context provider
- i18n translation files for Hindi and English
- All UI labels, prompts, and AI responses available in both languages
- Language preference saved to user profile

---

## Non-Functional Requirements

### Performance
- < 2s API response time
- < 500ms voice latency
- Infrastructure deployed in AWS Mumbai (ap-south-1) for low latency to Indian users

### Accessibility
- Mobile-first, responsive design (Android 8+)
- Low-bandwidth considerations
- Offline lesson caching (future)
- Adjustable font sizes
- Dark/light mode toggle

### Security
- Clerk JWT authentication on all sensitive endpoints
- CORS restricted to allowed origins
- Rate limiting (100 requests / 15 min per IP)
- No sensitive financial data stored in MVP phase
- Encrypted data transmission
- Consent-based job application forwarding

---

## Tech Stack

| Layer               | Technology                                      |
|---------------------|-------------------------------------------------|
| Frontend            | React 18 (TypeScript), Vite, TailwindCSS        |
| Routing             | React Router v7                                 |
| Animations / 3D     | Framer Motion, Three.js, @react-three/fiber     |
| Authentication      | Clerk                                           |
| Backend             | Node.js, Express                                |
| Database            | MongoDB Atlas (Mongoose ODM)                    |
| Primary AI / LLM    | Google Vertex AI (Gemini)                       |
| Fast LLM Inference  | Groq                                            |
| Voice STT           | Google Cloud Speech-to-Text                     |
| Voice TTS           | Google Cloud Text-to-Speech                     |
| Course Discovery    | YouTube Data API                                |
| Media Storage       | AWS S3                                          |
| CDN                 | AWS CloudFront                                  |
| Frontend Hosting    | AWS S3 + CloudFront                             |
| Backend Hosting     | AWS EC2 (ap-south-1) + PM2                      |

---

## Target Impact

### By Year 1
- 10,000 active users
- ₹8–15k average monthly earnings per user
- 60% skill completion rate
- Safe, verified opportunities only

### By Year 2
- 1 million users across India
- 5 states covered
- 50,000 women earning consistently
- ₹600 crore economic impact

---

## Risks & Mitigation

| Risk            | Mitigation                          |
|-----------------|-------------------------------------|
| Low trust       | NGO/SHG partnerships                |
| Scam listings   | Manual + AI validation              |
| Drop-off        | Micro-lessons + nudges              |
| Cloud cost      | Token optimization + billing alerts |
| Voice accuracy  | Fallback to text input              |

---

## Deliverables

- Fully working MVP (Web PWA)
- 3-minute demo walkthrough
- AWS architecture diagram
- Investor-ready presentation deck
- Documentation (README, API Docs, Architecture, Design)

---

## Post-Hackathon Roadmap

### Phase 1 (0–3 Months)
- Pilot in 1–2 cities
- 500 user validation
- NGO partnerships

### Phase 2 (3–6 Months)
- Multi-language expansion (regional languages beyond Hindi)
- 500+ verified jobs
- Android native application

### Phase 3 (6–12 Months)
- Commission-based monetization
- Enterprise hiring partnerships
- Government (NEEM/NAPS) integration
- Peer community voice rooms
- Gamified milestones and earnings verification

---

## Team

| Name        | Role                                         |
|-------------|----------------------------------------------|
| **Saksham** | AWS Infrastructure, AI Integration, Backend  |
| **Radhika** | Full-stack Development, UI/UX                |

**Built for:** AI Bharat Hackathon 2025

---

## Final Positioning Statement

Saksham is not a learning app.
It is an AI-powered employability bridge that transforms underutilized women into income-generating contributors through personalized, voice-first intelligence — built on a production-grade stack, live at https://www.saksham-ai.online.
