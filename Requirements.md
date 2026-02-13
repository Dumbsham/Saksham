# Saksham  
## Skills + Opportunity Platform for Women  



## Project Overview

**Platform Name:** Saksham *(Sanskrit: "Capable, Empowered")*  
**Tagline:** AI-Powered Economic Inclusion for Underutilized Women in India  
**Target Segment:** Housewives and partially educated women aiming to earn ₹10,000–15,000/month  
**Hackathon:** AI Bharat 2026  

Saksham is a voice-first, AI-driven platform that bridges the gap between skill acquisition and income generation for women constrained by literacy, time, and access barriers.

---

## Problem Statement

Over 60 million women in India aspire to earn but face three structural barriers:

1. **Knowledge Gap** – Uncertainty about which skills are realistic, market-relevant, and accessible.  
2. **Opportunity Gap** – Difficulty identifying trustworthy, degree-free earning opportunities.  
3. **Time Constraint Barrier** – Household responsibilities limit structured learning and consistent work engagement.  

### Why Existing Solutions Fail

- Skill platforms assume high literacy and digital fluency.  
- Job portals lack contextual filtering and are scam-prone.  
- Learning systems ignore domestic schedules and energy patterns.  
- No integrated solution connects skill acquisition directly to verified income.  

---

## Vision

To create India’s most accessible AI-driven employability bridge for women — guiding them from skill discovery to sustainable income through adaptive, voice-first intelligence.

---

## Hackathon Success Criteria (MVP Scope)

### Must Have

- Hindi + one regional language onboarding  
- AI-driven skill pathway generation (under 5-minute conversational profiling)  
- 50+ vetted job/gig listings  
- Routine-aware micro-learning planner  
- Voice-first interface  
- Demo with 3 realistic user personas  

### Should Have

- Progress dashboard  
- WhatsApp reminders  
- Income projection estimator  
- Peer community layer  

### Nice to Have

- NEEM/NAPS integration  
- Gig platform partnerships  
- Gamified milestones  

---

# Core Functional Modules




## 1. Intelligent User Profiling

### Data Inputs

- Demographics (Name, Age, Location)  
- Education Level  
- Household Responsibility Hours  
- Language Preference  
- Available Time Windows  
- Existing Skills  
- Income Target  
- Device & Connectivity Constraints  

### AI Intelligence Layer

- Amazon Bedrock (Claude 3 Haiku) for conversational onboarding  
- Skill extraction via NLP  
- Constraint-based opportunity filtering  

### Output

- Skill readiness score  
- Recommended skill path  
- Opportunity cluster suggestions  
- Weekly feasibility estimate  

---

## 2. Adaptive Skill Learning Engine

### Resource Library

- Micro-lessons (5–30 mins)  
- Audio-first content  
- Beginner-level resources  
- Local-language learning content  

### AI Capabilities

- Content summarization (Amazon Q)  
- Adaptive learning paths (behavior-driven optimization)  
- Difficulty calibration  
- Voice-based quizzes  

### Metrics

- Completion rate  
- Weekly learning minutes  
- Skill proficiency score  
- Certificate milestones  

---

## 3. Opportunity Matching Engine

### Opportunity Types

- **Online:** Data entry, moderation, tutoring  
- **Offline:** Tailoring, catering, daycare  
- **Hybrid:** Reselling, survey work, field collection  

### AI Matching Model

Score = (Skill_Match × 0.4) +
(Time_Fit × 0.3) +
(Location_Fit × 0.2) +
(Language_Match × 0.1)


### AI Services Used

- Bedrock semantic matching  
- Scam detection via Amazon Comprehend  
- Constraint-based ranking  

### Outputs

- Ranked opportunity list  
- Simplified job descriptions in plain Hindi  
- Estimated monthly income potential  

---

## 4. Smart Routine Optimization

### Inputs

- Household schedule  
- Energy preference mapping  
- Free-time windows  

### AI Functions

- Conflict-aware schedule generation  
- Engagement-based reminder timing  
- Voice call nudges (Amazon Connect)  

### Outputs

- Daily micro-learning plan  
- Weekly earning plan  
- Behavioral nudges  

---

## 5. Voice-First Interface

### Why Critical?

30–40% of target users prefer voice interaction over text.

### Stack

- Amazon Transcribe (STT)  
- Amazon Bedrock (Intent & Response)  
- Amazon Polly (TTS)  

### Capabilities

- Voice-based onboarding  
- Spoken lesson summaries  
- Voice job search  
- Audio performance feedback  

---

# Non-Functional Requirements

## Performance

- < 2s API response time  
- < 500ms voice latency  
- Support 10,000 concurrent users (demo scale)  

## Accessibility

- Android 8+  
- Low-bandwidth mode  
- Offline lesson caching  
- Adjustable font sizes  

## Security

- No sensitive financial data stored (MVP phase)  
- Encrypted data transmission  
- Consent-based job application forwarding  

---

# Architecture Overview

## Infrastructure

- Serverless backend (AWS Lambda)  
- API Gateway  
- DynamoDB (User Profiles)  
- RDS (Content + Job Listings)  
- S3 (Media Storage)  
- CloudFront CDN  

## AI Services

- Amazon Bedrock (Core intelligence)  
- Amazon Q (Knowledge assistant)  
- Amazon Transcribe (Voice input)  
- Amazon Polly (Voice output)  
- Amazon Comprehend (Fraud detection)  

---

# Success Metrics

## User Outcomes

- 70% onboarding completion  
- 50% lesson initiation  
- 30% job application conversion  
- 15% users generate first ₹5,000 within 30 days (pilot phase)  

## AI Metrics

- 40% recommendation CTR  
- 4/5 job relevance rating  
- 80% successful voice task completion  

---

# Risks & Mitigation

| Risk            | Mitigation                      |
|-----------------|---------------------------------|
| Low trust       | NGO/SHG partnerships            |
| Scam listings   | Manual + AI validation          |
| Drop-off        | Micro-lessons + nudges          |
| AWS cost        | Token optimization + alerts     |

---

# Deliverables

- Fully working MVP (Web PWA)  
- 3-minute demo walkthrough  
- AWS architecture diagram  
- Investor-ready presentation deck  
- Documentation (README, API Docs, Architecture)  

---

# Post-Hackathon Roadmap

## Phase 1 (0–3 Months)

- Pilot in 1–2 cities  
- 500 user validation  
- NGO partnerships  

## Phase 2 (3–6 Months)

- Multi-language expansion  
- 500+ verified jobs  
- Android application  

## Phase 3 (6–12 Months)

- Commission-based monetization  
- Enterprise hiring partnerships  
- Government integration  

---

# Contact & Team

**Team Leader:** Saksham Sharma  
**Hackathon:** AI Bharat 2026  
**Repository:** (To be added)  

---

# Final Positioning Statement

Saksham is not a learning app.  
It is an AI-powered employability bridge that transforms underutilized women into income-generating contributors through personalized, voice-first intelligence.
