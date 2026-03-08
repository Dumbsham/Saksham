# PROJECT_DOCUMENTATION.md

---

## 1. Project Overview

**Project Name:** Saksham

**Description:**  
Saksham is an AI-powered, voice-first career guidance and opportunity platform designed to empower Indian women—especially housewives and partially educated women—to discover skills, access verified job opportunities, and earn sustainable income. The platform leverages conversational AI, speech recognition, and personalized recommendations to bridge the gap between skill acquisition and income generation, focusing on accessibility, safety, and inclusivity.

**Problem Solved:**  
Millions of Indian women face barriers to employment due to lack of guidance, unsafe job listings, language constraints, and limited time. Saksham addresses these by providing:
- AI-driven career and skill suggestions via natural conversation (voice/text)
- Bilingual support (Hindi/English)
- Curated learning resources and job platforms
- Safe, verified opportunities
- Personalized dashboards and progress tracking

**Main Features:**
- Voice input for onboarding and interaction
- AI career and skill recommendations
- Personalized learning and job suggestions
- Bilingual interface (Hindi/English)
- Secure authentication (Clerk)
- Progress dashboard and recent activity
- Modern, mobile-friendly UI with dark/light mode

**Target Users:**  
- Indian women (housewives, partially educated, or those with limited digital literacy) seeking to earn ₹10,000–15,000/month through safe, accessible, and verified opportunities.

**High-Level Architecture:**
- **Frontend:** React + TypeScript SPA (Vite, TailwindCSS)
- **Backend:** Node.js + Express REST API, Python microservices (agent)
- **Database:** MongoDB (Mongoose ODM)
- **AI/Voice Services:** Amazon Bedrock, Google Cloud Speech/Text-to-Speech, AWS S3
- **Authentication:** Clerk
- **Deployment:** AWS (Amplify, Elastic Beanstalk), CloudFront CDN

---

## 2. Tech Stack

**Frontend:**
- React (TypeScript)
- Vite (build tool)
- TailwindCSS (UI styling)
- React Router (navigation)
- Clerk (authentication)
- Lucide React (icons)
- Framer Motion (animations)
- Context API (state management)
- Three.js, @react-three/fiber, @react-three/drei (3D/visuals)

**Backend:**
- Node.js
- Express
- Mongoose (MongoDB ODM)
- Clerk (Express middleware)
- Google Cloud APIs (Speech, Text-to-Speech, VertexAI)
- Amazon Bedrock (AI/LLM)
- Multer (file uploads)
- dotenv (env management)
- express-rate-limit (security)

**Python Agent Service:**
- FastAPI
- Uvicorn
- langchain-google-vertexai, langchain-core, langgraph
- google-cloud-texttospeech, google-cloud-speech, google-auth
- python-dotenv
- playwright (browser automation)

**Database:**
- MongoDB (Atlas or self-hosted)

**Authentication:**
- Clerk (JWT, session management)

**Deployment/Infra:**
- AWS Amplify (frontend)
- AWS Elastic Beanstalk (backend)
- AWS S3 (media storage)
- AWS CloudFront (CDN)

**APIs Used:**
- Google Cloud Speech-to-Text
- Google Cloud Text-to-Speech
- Amazon Bedrock (Claude, LLM)
- YouTube Data API (course search)
- Clerk API

**Package Managers:**
- npm (Node.js)
- pip (Python)

---

## 3. Project Folder Structure

```
finalSaksham/
│
├── Backend/
│   ├── agent_service/         # Python microservice for AI agent and browser automation
│   ├── config/                # Database connection config
│   ├── models/                # Mongoose schemas for User, Session, InterestHistory
│   ├── routes/                # Express route handlers (REST API endpoints)
│   ├── services/              # Business logic (AI, TTS, YouTube, etc.)
│   ├── speech/                # Speech processing scripts
│   ├── checkvoices.js         # Utility for voice services
│   ├── convertkey.js          # Utility for key conversion
│   ├── listvoices.js          # Utility for listing voices
│   ├── server.js              # Main Express server entry point
│   ├── testbedrock.js         # Test script for Bedrock AI
│   ├── package.json           # Backend dependencies and scripts
│   └── .env / .env.example    # Environment variables
│
├── Frontend/
│   ├── public/                # Static assets (avatars, images, video)
│   ├── src/
│   │   ├── components/        # React UI components
│   │   ├── contexts/          # React Context providers (User, Theme, Language)
│   │   ├── hooks/             # Custom React hooks
│   │   ├── i18n/              # Translations
│   │   ├── layout/            # Layout components
│   │   ├── pages/             # Page components (Dashboard, Profile, etc.)
│   │   ├── routes/            # App routing (AppRoutes.jsx)
│   │   ├── types/             # TypeScript types/interfaces
│   │   └── utils/             # Utility functions (e.g., tts)
│   ├── index.html             # Main HTML entry
│   ├── package.json           # Frontend dependencies and scripts
│   ├── tailwind.config.js     # TailwindCSS config
│   ├── vite.config.ts         # Vite build config
│   ├── tsconfig*.json         # TypeScript configs
│   └── .env / .env.example    # Environment variables
│
├── Design.md                  # System and UI design document
├── Requirements.md            # Project requirements and vision
├── README.md                  # Project overview and setup
└── LICENSE                    # License file
```

**Major Folder Purposes:**
- **Backend/agent_service:** Python-based AI agent and browser automation microservice.
- **Backend/config:** Database connection logic.
- **Backend/models:** MongoDB schemas for users, sessions, and interest history.
- **Backend/routes:** API endpoints for user, agent, conversation, speech, career, etc.
- **Backend/services:** Core business logic (AI, TTS, YouTube, etc.).
- **Frontend/public:** Static files (avatars, images, video).
- **Frontend/src/components:** Reusable UI components.
- **Frontend/src/pages:** Main app pages (dashboard, onboarding, etc.).
- **Frontend/src/contexts:** Global state management.
- **Frontend/src/types:** TypeScript interfaces for data models.

---

## 4. Environment Variables (.env)

**Backend (.env.example):**
```
PORT=
MONGO_URI=
GOOGLE_PROJECT_ID=
GOOGLE_APPLICATION_CREDENTIALS=
YOUTUBE_API_KEY=
GCP_CREDENTIALS_JSON=
CLERK_SECRET_KEY=
CLERK_PUBLISHABLE_KEY=
AWS_ACCESS_KEY_ID=
AWS_SECRET_ACCESS_KEY=
AWS_REGION=
AWS_S3_BUCKET=
FRONTEND_URLS=
PYTHON_AGENT_URL=
```
- `PORT`: Port for backend server (default 5000)
- `MONGO_URI`: MongoDB connection string
- `GOOGLE_PROJECT_ID`: Google Cloud project ID
- `GOOGLE_APPLICATION_CREDENTIALS`: Path to Google service account JSON
- `YOUTUBE_API_KEY`: API key for YouTube Data API
- `GCP_CREDENTIALS_JSON`: Google Cloud credentials (for TTS)
- `CLERK_SECRET_KEY`: Clerk backend secret key
- `CLERK_PUBLISHABLE_KEY`: Clerk frontend key (for SSR)
- `AWS_ACCESS_KEY_ID`, `AWS_SECRET_ACCESS_KEY`, `AWS_REGION`, `AWS_S3_BUCKET`: AWS credentials for S3 storage
- `FRONTEND_URLS`: Comma-separated list of allowed frontend origins (CORS)
- `PYTHON_AGENT_URL`: URL for Python agent microservice

**Frontend (.env.example):**
```
VITE_CLERK_PUBLISHABLE_KEY=
```
- `VITE_CLERK_PUBLISHABLE_KEY`: Clerk publishable key for frontend authentication

---

## 5. Dependencies

### Backend (`Backend/package.json`)

| Dependency                | Purpose                                      |
|---------------------------|----------------------------------------------|
| express                   | Backend server (REST API)                    |
| mongoose                  | MongoDB ODM                                  |
| cors                      | Cross-origin requests                        |
| dotenv                    | Environment variable management              |
| @clerk/express            | Authentication middleware                    |
| express-rate-limit        | Rate limiting for API protection             |
| multer                    | File uploads (audio, etc.)                   |
| @google-cloud/speech      | Google Speech-to-Text API                    |
| @google-cloud/text-to-speech | Google Text-to-Speech API                |
| @google-cloud/vertexai    | Google Vertex AI API                         |
| googleapis                | Google APIs client                           |

**devDependencies:** None listed.

### Frontend (`Frontend/package.json`)

| Dependency                | Purpose                                      |
|---------------------------|----------------------------------------------|
| react, react-dom          | UI library                                   |
| react-router-dom          | Routing                                      |
| @clerk/clerk-react        | Authentication                               |
| @react-three/fiber, drei  | 3D/visuals                                   |
| framer-motion             | Animations                                   |
| lucide-react              | Icons                                        |
| dotenv                    | Env variable support                         |
| three                     | 3D graphics                                  |

**devDependencies:**
| Dependency                | Purpose                                      |
|---------------------------|----------------------------------------------|
| vite                      | Build tool                                   |
| tailwindcss               | CSS framework                                |
| eslint, @eslint/js        | Linting                                      |
| typescript, @types/*      | TypeScript support                           |
| postcss, autoprefixer     | CSS processing                               |

### Python Agent (`Backend/agent_service/requirements.txt`)
- langchain-google-vertexai, langchain-core, langgraph: AI orchestration
- google-cloud-texttospeech, google-cloud-speech, google-auth: Google Cloud APIs
- python-dotenv: Env management
- fastapi, uvicorn: Python web server
- python-multipart: File uploads
- pydantic: Data validation
- playwright: Browser automation

---

## 6. Backend Architecture

**Server Entry Point:**  
- `Backend/server.js` initializes Express, sets up CORS, JSON parsing, Clerk authentication, connects to MongoDB, applies rate limiting, and mounts all API routes.

**Routes:**
- `/api/user`: User profile and session data (protected)
- `/api/conversation`: Voice-based conversation (protected)
- `/api/agent`: AI agent chat (protected)
- `/api/speech`: Speech-to-text, text-to-speech, and transcription (protected)
- `/api/career`: Career suggestions (AI-powered)
- `/api/courses`, `/api/jobs`: Course and job recommendations

**Controllers/Services:**
- Business logic for AI, TTS, YouTube, Gemini (LLM), etc. is in `services/`.

**Middleware:**
- Clerk authentication (`requireAuth`)
- CORS with allowed origins from env
- Rate limiting (100 requests/15min)

**Database Models:**
- `UserProfile`: User info, preferences, onboarding status
- `Session`: User sessions, chat history, career/course/job data
- `InterestHistory`: Tracks user interests, AI suggestions, selected careers, resources, and progress

**Authentication Flow:**
- Clerk JWT/session validation on protected routes
- User ID extracted from Clerk for DB queries

**API Structure & Example Endpoints:**
- `POST /api/agent/chat`: { message, history, context } → AI response
- `GET /api/user/profile`: Returns user profile, sessions, stats, recent chats
- `POST /api/speech/transcribe`: Audio file → transcript + career suggestions
- `POST /api/speech/speak`: Text → audio (TTS)
- `POST /api/career/suggest`: Transcript → career suggestions

**Request/Response Example:**
- `POST /api/agent/chat`
  - Request: `{ message: "I like teaching", history: [], context: {} }`
  - Response: `{ reply: "...", suggestions: [...] }`

---

## 7. Frontend Architecture

**Pages:**
- Landing, Onboarding, Profile Setup, Dashboard, Skills, Course, Lesson, Quiz, Jobs, Job Detail, Chat, Profile

**Components:**
- AgentChat, AnimatedThemeToggler, Header, HyperSpeed, Layout, Navbar, PillNav, ShimmerButton, smooth-cursor, Textclippathreveal, landing/ (About, Features, Hero, Scroll, ThreeBackground)

**State Management:**
- React Context API (UserContext, ThemeContext, LanguageContext)

**Routing:**
- React Router v7 (AppRoutes.jsx)
- Public and protected routes (ProtectedRoute)

**API Communication:**
- Fetch/Axios (via utility functions)
- API base URL from env/config

**UI Libraries:**
- TailwindCSS, Lucide React, Framer Motion, Three.js

---

## 8. How Data Flows Through the System

1. **User Action:**  
   User speaks or types about their background/interests on the frontend.

2. **Frontend Request:**  
   Audio/text is sent to backend API (`/api/speech/transcribe`, `/api/agent/chat`).

3. **Backend Processing:**  
   - Audio is transcribed (Google/AWS)
   - AI (Bedrock/Gemini) generates career suggestions
   - User/session data is stored in MongoDB

4. **Database Interaction:**  
   - User profiles, sessions, and interest history are read/written as needed

5. **Response to Frontend:**  
   - Suggestions, transcripts, and user data are returned and rendered in the UI

---

## 9. Setup Instructions

**1. Clone the Repository**
```bash
git clone <repo>
cd finalSaksham
```

**2. Install Dependencies**

_Backend:_
```bash
cd Backend
npm install
```

_Frontend:_
```bash
cd ../Frontend
npm install
```

**3. Environment Setup**

_Backend:_
- Copy `.env.example` to `.env` and fill in all required variables (see above).

_Frontend:_
- Copy `.env.example` to `.env` and set `VITE_CLERK_PUBLISHABLE_KEY`.

**4. Run the Project**

_Backend:_
```bash
npm start
# or
node server.js
```

_Frontend:_
```bash
npm run dev
```

**5. (Optional) Python Agent Service**
```bash
cd Backend/agent_service
pip install -r requirements.txt
uvicorn main:app --reload
```

---

## 10. Scripts

**Backend (`package.json`):**
| Script | Description |
|--------|-------------|
| test   | Placeholder for backend tests |

**Frontend (`package.json`):**
| Script     | Description                                 |
|------------|---------------------------------------------|
| dev        | Start Vite dev server                       |
| build      | Build frontend for production               |
| lint       | Run ESLint on codebase                      |
| preview    | Preview production build                    |
| typecheck  | TypeScript type checking                    |

---

## 11. Deployment

- **Frontend:** Deploy via AWS Amplify, Vercel, or Netlify. Build with `npm run build`.
- **Backend:** Deploy via AWS Elastic Beanstalk, Render, or similar. Ensure all env variables are set.
- **Static Assets:** Store in AWS S3, serve via CloudFront CDN.
- **Python Agent:** Deploy as a microservice (e.g., AWS Lambda, EC2, or container).

**Build Commands:**
- Frontend: `npm run build`
- Backend: `npm start` or `node server.js`

---

## 12. Security Notes

- **Authentication:** All sensitive endpoints are protected by Clerk JWT/session.
- **Token Storage:** Clerk tokens are stored securely; never expose secrets in frontend code.
- **API Protection:** CORS is restricted to allowed origins; rate limiting is enabled.
- **Environment Variables:** Never commit secrets; use `.env` files and environment configs.

---

## 13. Future Improvements

- Add caching for API responses (Redis)
- Implement rate limiting per user/IP
- Add logging and monitoring (Winston, Sentry)
- Expand test coverage (Jest, Supertest)
- Add WhatsApp/SMS notifications
- Integrate more regional languages
- Add peer community and income projection features
- Enhance fraud detection for job listings

---

## 14. Project Summary

Saksham is a full-stack, AI-powered platform designed to empower Indian women with accessible, safe, and personalized career guidance and opportunities. Built with React, Node.js, Python, MongoDB, and leveraging cloud AI/voice services, it provides a modern, secure, and scalable solution to bridge the gap between skill discovery and income generation for millions of underutilized women in India.

---

**End of Documentation**

---
