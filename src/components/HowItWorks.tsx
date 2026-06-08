import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Smartphone, Car, ClipboardCheck, Play, Smile, CreditCard, ChevronRight } from "lucide-react";

interface Step {
  stepNumber: string;
  title: string;
  description: string;
  icon: any;
}

const RIDER_STEPS: Step[] = [
  {
    stepNumber: "01",
    title: "Download the App",
    description: "Install the secure Moba Taxi application from the Apple App Store or Google Play Store directly on your device.",
    icon: Smartphone,
  },
  {
    stepNumber: "02",
    title: "Request a Ride",
    description: "Input your destination, choose your riding tier, preview your upfront fare, and match with verified local drivers near you in seconds.",
    icon: Play,
  },
  {
    stepNumber: "03",
    title: "Get Picked Up & Enjoy!",
    description: "Track your driver's real-time arrival on the map, hop in, and experience a safe, cashless Canadian ride to your destination.",
    icon: Smile,
  },
];

const DRIVER_STEPS: Step[] = [
  {
    stepNumber: "01",
    title: "Sign Up & Get Approved",
    description: "Submit our simple driver enrollment form, upload your Class 4 license, vehicle safety inspection, and pass the prompt background sweep.",
    icon: ClipboardCheck,
  },
  {
    stepNumber: "02",
    title: "Go Online When Ready",
    description: "Open the Moba Driver portal and change your status to online anytime. No pre-set hours or static weekly scheduling quotas.",
    icon: Car,
  },
  {
    stepNumber: "03",
    title: "Accept Rides & Earn Cash",
    description: "Instantly preview incoming passenger requests, get turn-by-turn routing, complete trips safely, and keep 82% of your total fares.",
    icon: CreditCard,
  },
];

export default function HowItWorks() {
  const [activeTab, setActiveTab] = useState<"riders" | "drivers">("riders");

  const stepsToRender = activeTab === "riders" ? RIDER_STEPS : DRIVER_STEPS;

  return (
    <section id="how-it-works" className="relative py-24 bg-[#050505] overflow-hidden border-t border-zinc-900/60">
      
      {/* Visual background lines */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-full bg-gradient-to-b from-amber-500/5 via-transparent to-transparent pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-amber-500 bg-amber-500/10 px-3 py-1 rounded-full">
            Simple Process
          </span>
          <h2 className="font-sans font-extrabold text-3xl sm:text-4xl text-white mt-4 tracking-tight">
            How Moba Taxi Works
          </h2>
          <p className="text-white font-light mt-4 text-lg sm:text-xl">
            Whether you want to move smarter across town or turn your driving time into consistent cash, getting started is designed to be frictionless.
          </p>

          {/* Tab Control Toggles */}
          <div className="mt-8 inline-flex items-center p-1.5 rounded-2xl bg-neutral-950 border border-zinc-800/80">
            <button
              onClick={() => setActiveTab("riders")}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 ${
                activeTab === "riders"
                  ? "bg-amber-500 text-neutral-950 font-bold shadow-[0_2px_10px_rgba(245,184,0,0.3)]"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              <Smartphone className="w-4 h-4" />
              For Riders
            </button>
            <button
              onClick={() => setActiveTab("drivers")}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 ${
                activeTab === "drivers"
                  ? "bg-amber-500 text-neutral-950 font-bold shadow-[0_2px_10px_rgba(245,184,0,0.3)]"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              <Car className="w-4 h-4" />
              For Drivers
            </button>
          </div>
        </div>

        {/* Steps Cards Board */}
        <div className="grid md:grid-cols-3 gap-8 relative">
          <AnimatePresence mode="wait">
            {stepsToRender.map((step, idx) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={`${activeTab}-${step.stepNumber}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ delay: idx * 0.1, duration: 0.4 }}
                  className="relative group p-8 rounded-[32px] bg-neutral-900/30 border border-zinc-900/80 hover:border-amber-500/25 transition-all duration-300 text-left flex flex-col justify-between"
                >
                  {/* Glowing card dot indicator */}
                  <div className="absolute top-0 right-10 -translate-y-1/2 bg-gradient-to-r from-amber-400 to-amber-500 text-neutral-950 font-sans font-black text-sm tracking-tighter px-4 py-1.5 rounded-full shadow-[0_4px_12px_rgba(245,184,0,0.3)]">
                    STEP {step.stepNumber}
                  </div>

                  {/* Icon Shield */}
                  <div className="space-y-6">
                    <div className="h-12 w-12 rounded-2xl bg-amber-500/10 border border-amber-500/15 flex items-center justify-center text-amber-500 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                      <Icon className="w-6 h-6" />
                    </div>

                    <div className="space-y-2">
                      <h3 className="font-sans font-extrabold text-xl text-white group-hover:text-amber-400 transition-colors duration-200">
                        {step.title}
                      </h3>
                      <p className="text-white/90 text-base font-light leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>

                  {/* Decorative link arrows on non-last elements in desktop */}
                  {idx < 2 && (
                    <div className="hidden md:block absolute top-1/2 -right-4 translate-x-1/2 -translate-y-1/2 z-20 bg-neutral-900 border border-zinc-800 p-1 rounded-full text-zinc-500">
                      <ChevronRight className="w-4 h-4" />
                    </div>
                  )}

                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Dynamic callout banner under steps */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 p-6 rounded-3xl bg-neutral-900/20 border border-zinc-900 mx-auto max-w-4xl text-center flex flex-col sm:flex-row items-center justify-between gap-6"
        >
          <div className="text-left space-y-1.5">
            <h4 className="text-white text-base font-bold flex items-center gap-2">
              <span className="text-red-500">🍁</span>
              Homegrown Canadian Support
            </h4>
            <p className="text-white/80 text-sm sm:text-base font-light leading-relaxed">
              Have questions? Our support officers are based in NL to handle setup verification or rider services instantly.
            </p>
          </div>
          <a
            href={activeTab === "drivers" ? "#driver-signup" : "#download-app"}
            className="shrink-0 bg-neutral-950 text-white border border-zinc-800 hover:border-amber-500/30 px-6 py-2.5 rounded-xl font-sans text-xs font-bold uppercase tracking-wider transition duration-200"
          >
            {activeTab === "drivers" ? "Start Applying Now" : "Download App"}
          </a>
        </motion.div>

      </div>
    </section>
  );
}
