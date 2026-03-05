# 🏗️ Design Document: Saksham

## AI-Powered Economic Inclusion for Women

Saksham is a voice-first, AI-driven platform designed to bridge the gap between household-constrained women in India and sustainable income opportunities through personalized skill-building and routine-aware scheduling.

---

## 1. System Architecture

The application follows a **serverless, cloud-native architecture** to ensure scalability, low latency for voice processing, and cost-efficiency during the MVP phase.

### 1.1 High-Level Components

- **Frontend** – Progressive Web App (PWA) built with Next.js and Tailwind CSS, optimized for low-end Android devices.
- **Backend** – AWS Lambda (Node.js/Python) exposed via Amazon API Gateway.
- **AI Orchestration** – Amazon Bedrock (Claude 3 Haiku) for LLM reasoning and intent extraction.
- **Voice Layer** – Amazon Transcribe (speech-to-text) and Amazon Polly (text-to-speech) with regional Indian accents.
- **Storage** – DynamoDB (user profiles & progress) and Amazon S3 (audio content & media).

---

## 2. Technical Stack

| Layer              | Technology                                 | Rationale                                                      |
|-------------------|--------------------------------------------|----------------------------------------------------------------|
| Frontend          | React (Next.js)                            | SEO, PWA capabilities, fast rendering                          |
| LLM Engine        | Amazon Bedrock (Claude 3 Haiku)            | High speed, low cost, strong multilingual support              |
| Voice Processing  | Amazon Transcribe & Polly                  | Native support for Hindi and regional dialects                |
| Database          | Amazon DynamoDB                            | Schema-less flexibility for evolving user profiles             |
| Notifications     | Amazon SNS + WhatsApp API                  | High engagement via preferred communication channels           |
| Fraud Detection   | Amazon Comprehend                          | Analyze job descriptions for predatory patterns                |

---

## 3. Core Functional Logic

### 3.1 AI Conversational Profiling

Rather than lengthy forms, Saksham uses a conversational  coffee-chat onboarding flow.

**Flow:**
1. **Input:** User speaks about their day, education, and interests in Hindi or a regional language.
2. **Processing:**
   - Amazon Transcribe converts audio to text.
   - Amazon Bedrock extracts structured entities (e.g. ree_time: 14:00-16:00, skill: basic_stitching).
3. **Output:** A structured JSON profile is persisted in DynamoDB.

### 3.2 Opportunity-Matching Algorithm

The **Opportunity Match Score** prioritizes listings that best fit a woman’s constraints.

**Scoring factors:**
- Skill match (0–1)
- Time compatibility (0–1)
- Location/remote feasibility (0–1)
- Verification/trust (0–1)

**Formula:**
`
Score = (Skill_Match × 0.4) +
        (Time_Fit   × 0.3) +
        (Location_Fit × 0.2) +
        (Trust_Score × 0.1)
`

Listings are sorted by descending score.

---

## 4. Data Model

### 4.1 DynamoDB Schemas

**User profile:**
`json
{
  userId: UUID,
  language: hi-IN,
  education_level: 8th Pass,
  time_slots: [
    { start: 14:00, end: 16:00, label: Afternoon }
  ],
  skills_identified: [Tailoring, Basic Math],
  income_goal: 12000
}
`

**Job listing:**
`json
{
  jobId: JOB123,
  category: Gig-Work,
  type: Remote,
  verified: true,
  pay_per_unit: 50,
  estimated_monthly: 8000
}
`

---

## 5. UI/UX Design Principles

The interface is crafted for users with low digital literacy:

1. **Voice-first interaction:** Persistent, large microphone button on every screen.
2. **Visual cues:** High-contrast icons (e.g. sewing machine for tailoring).
3. **Zero jargon:** Use simple terms like Kamai (earnings).
4. **Progress visualization:** A growth tree that blooms as lessons are completed.
5. **Micro-interactions:** Short confirmations after voice commands (e.g., _Samajh gaya chaliye shuru karte hain_).

---

## 6. Implementation Roadmap

### Phase 1 – Foundation (Hackathon Week)
- Deploy AWS Lambda with Bedrock integration.
- Build voice-to-profile onboarding flow.
- Load a static list of 50 verified jobs.
- Implement basic opportunity-ranking logic.

### Phase 2 – Intelligence (Post-Hackathon)
- Integrate Amazon Q for real-time learning support.
- Add automated WhatsApp nudges via routine optimizer.
- Include behavioral learning adaptation.

### Phase 3 – Ecosystem Expansion
- API integration with gig platforms (Apna, WorkIndia).
- Develop community peer-learning voice rooms.
- Introduce earnings verification and referral network.

---

## 7. Risk Mitigation

| Risk        | Mitigation                                                      |
|------------|-----------------------------------------------------------------|
| Accuracy   | Human-in-the-loop validation for early job listings             |
| Latency    | Use SWR (stale-while-revalidate) for frontend responsiveness     |
| Trust      | Amazon Comprehend flags suspicious keywords (e.g. security deposit) |
| AWS Cost   | Monitor token usage and set billing alerts                      |

---

## Architecture Summary

Saksham’s modular serverless design enables:

- Scalable, AI-driven personalization
- Low-latency voice interaction
- Secure, privacy-conscious user handling
- Future expansion across languages and cities

---

## Conclusion

Saksham is more than a learning platform; it is a voice-first AI employability bridge that converts domestic constraints into structured earning pathways for under-utilized women.
