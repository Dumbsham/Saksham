import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Mic,
  Sparkles,
  Globe,
  BookOpen,
  Briefcase,
  Users,
  Heart,
  Zap
} from "lucide-react";
import { ShimmerButton } from "../components/ShimmerButton";
import Hyperspeed from "../components/HyperSpeed";

function FeatureCard({ icon: Icon, title, desc }: any) {
  return (
    <div className="p-6 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900">
      <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-purple-100 dark:bg-purple-900 mb-4">
        <Icon className="w-5 h-5 text-purple-600 dark:text-purple-300" />
      </div>

      <h3 className="font-semibold text-lg mb-2">{title}</h3>

      <p className="text-sm text-gray-600 dark:text-gray-400">
        {desc}
      </p>
    </div>
  );
}

function Stat({ value, label }: any) {
  return (
    <div className="text-center">
      <h3 className="text-3xl font-bold text-purple-600">{value}</h3>
      <p className="text-sm text-gray-500 dark:text-gray-400">{label}</p>
    </div>
  );
}

export function LandingPage() {
  return (
    <div className="relative min-h-screen bg-white dark:bg-black overflow-hidden">

      {/* HYPERSPEED BACKGROUND */}
      <div className="absolute inset-0 w-full h-full -z-10">
        <Hyperspeed
          effectOptions={{
            distortion: "turbulentDistortion",
            length: 400,
            roadWidth: 10,
            islandWidth: 2,
            lanesPerRoad: 3,
            fov: 90,
            fovSpeedUp: 150,
            speedUp: 2,
            carLightsFade: 0.4,
            totalSideLightSticks: 20,
            lightPairsPerRoadWay: 40,
            shoulderLinesWidthPercentage: 0.05,
            brokenLinesWidthPercentage: 0.1,
            brokenLinesLengthPercentage: 0.5,
            lightStickWidth: [0.12, 0.5],
            lightStickHeight: [1.3, 1.7],
            movingAwaySpeed: [60, 80],
            movingCloserSpeed: [-120, -160],
            carLightsLength: [12, 80],
            carLightsRadius: [0.05, 0.14],
            carWidthPercentage: [0.3, 0.5],
            carShiftX: [-0.8, 0.8],
            carFloorSeparation: [0, 5],
            colors: {
              roadColor: 526344,
              islandColor: 657930,
              background: 0,
              shoulderLines: 1250072,
              brokenLines: 1250072,
              leftCars: [14177983, 6770850, 12732332],
              rightCars: [242627, 941733, 3294549],
              sticks: 242627
            }
          }}
        />
      </div>

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/40 -z-10"></div>

      {/* HERO */}
      <section className="relative z-10 min-h-[80vh] flex flex-col justify-center items-center max-w-6xl mx-auto px-6 text-center">

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl sm:text-6xl font-bold mb-6"
        >
          अपनी आवाज़ से
          <br />
          <span className="text-purple-600">
            करियर खोजो
          </span>
        </motion.h1>

        <p className="text-lg text-gray-200 max-w-xl mx-auto mb-10">
          Padhai kam ho ya zyada — Saksham har Indian mahila ke liye hai.
        </p>

        <ShimmerButton
          className="px-8 py-4 bg-purple-600 flex items-center gap-2"
          onClick={() => (window.location.href = "/onboarding")}
        >
          <Mic className="w-5 h-5" />
          Shuru Karo — Free
        </ShimmerButton>

        <p className="mt-4 text-sm text-gray-300">
          Hindi • தமிழ் • తెలుగు • मराठी
        </p>
      </section>

      {/* STATS */}
      <section className="border-y border-gray-200 dark:border-gray-800 py-16">

        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 px-6">

          <Stat value="200M+" label="Women can benefit" />
          <Stat value="4" label="Languages supported" />
          <Stat value="6+" label="Govt schemes" />
          <Stat value="100%" label="Free forever" />

        </div>

      </section>

      {/* HOW IT WORKS */}
      <section className="max-w-6xl mx-auto px-6 py-24">

        <h2 className="text-3xl font-bold text-center mb-12">
          Kaise kaam karta hai
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          <FeatureCard
            icon={Mic}
            title="Apni baat bolo"
            desc="Mic dabao aur apni bhasha mein bolo."
          />

          <FeatureCard
            icon={Sparkles}
            title="AI Career Suggest karega"
            desc="AI tumhari situation samajhkar career paths batayega."
          />

          <FeatureCard
            icon={Briefcase}
            title="Courses aur jobs"
            desc="Free courses, jobs aur govt schemes milenge."
          />

        </div>

      </section>

      {/* FEATURES */}
      <section className="bg-gray-50 dark:bg-gray-950 py-24">

        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-3xl font-bold text-center mb-12">
            Sab kuch ek jagah
          </h2>

          <div className="grid md:grid-cols-3 gap-6">

            <FeatureCard icon={Zap} title="AI Agent" desc="AI assistant jo tumhari madad karega career choose karne mein." />

            <FeatureCard icon={Globe} title="Indian Languages" desc="Hindi, Tamil, Telugu, Marathi mein guidance." />

            <FeatureCard icon={BookOpen} title="Free Courses" desc="Best YouTube aur online courses curated." />

            <FeatureCard icon={Briefcase} title="Job Platforms" desc="Apna App se LinkedIn tak jobs." />

            <FeatureCard icon={Users} title="Made for Bharat" desc="Indian women ke liye specially built." />

            <FeatureCard icon={Heart} title="Always Free" desc="Koi hidden charges nahi." />

          </div>

        </div>

      </section>

      {/* FINAL CTA */}
      <section className="text-center py-28 px-6">

        <h2 className="text-4xl font-bold mb-6">
          Aaj hi apna safar shuru karo
        </h2>

        <p className="text-gray-600 dark:text-gray-400 mb-8">
          Bas apni awaaz aur sapne chahiye.
        </p>

        <Link
          to="/onboarding"
          className="inline-flex items-center gap-2 px-10 py-4 rounded-lg bg-purple-600 text-white font-semibold hover:bg-purple-700 transition"
        >
          <Mic className="w-5 h-5" />
          Start Free
        </Link>

      </section>

      {/* FOOTER */}
      <footer className="border-t border-gray-200 dark:border-gray-800 py-8 text-center text-sm text-gray-500">
        © 2026 Saksham AI — Built for Indian Women
      </footer>

    </div>
  );
}