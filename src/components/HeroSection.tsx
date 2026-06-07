import { motion } from "motion/react";
import { Car, ShieldCheck, MapPin, Smartphone, ArrowRight, Play } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-36 lg:pt-44 pb-16 overflow-hidden bg-[#050505]">
      
      {/* Background spotlights & grid */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 -translate-y-1/2 -translate-x-1/2 w-[350px] sm:w-[500px] h-[350px] sm:h-[500px] rounded-full bg-amber-500/10 blur-[90px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 translate-y-1/2 translate-x-1/2 w-[300px] sm:w-[450px] h-[300px] sm:h-[450px] rounded-full bg-red-600/5 blur-[120px] pointer-events-none" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0)_95%,#050505_100%),radial-gradient(ellipse_at_center,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Main Copy Section (Columns 1-7) */}
          <div className="lg:col-span-7 flex flex-col space-y-6 md:space-y-8 text-left">
            
            {/* Proudly Canadian Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="inline-flex self-start items-center gap-2 bg-neutral-900/90 border border-zinc-800 rounded-full px-4 py-1.5 shadow-[0_4px_12px_rgba(0,0,0,0.5)]"
            >
              <span className="flex h-2.5 w-2.5 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-600"></span>
              </span>
              <span className="text-zinc-200 text-xs sm:text-sm font-semibold tracking-wide flex items-center gap-1.5">
                Proudly Made in Canada 🇨🇦 — Enjoy Local
              </span>
            </motion.div>

            {/* Core Headline */}
            <div className="space-y-3.5">
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="font-sans font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-white leading-[1.1] sm:leading-none"
              >
                Your Ride, <br />
                Your Earnings — <br />
                <span className="bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 bg-clip-text text-transparent drop-shadow-[0_2px_15px_rgba(245,184,0,0.2)]">
                  All in One App
                </span>
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="font-sans text-base sm:text-lg lg:text-xl text-zinc-300 max-w-2xl font-light leading-relaxed"
              >
                Join Moba Taxi today as a driver or rider. Safe, reliable, and built for <span className="text-white font-medium border-b border-amber-500 pb-0.5">Newfoundland & Labrador</span> — and expanding across Canada. Let’s make it grow together.
              </motion.p>
            </div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2"
            >
              <a
                href="#driver-signup"
                className="group flex items-center justify-center gap-2 bg-gradient-to-r from-amber-500 via-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-neutral-950 px-8 py-4 rounded-2xl font-sans font-bold text-lg shadow-[0_5px_20px_rgba(245,184,0,0.3)] hover:shadow-[0_5px_25px_rgba(245,184,0,0.45)] transition-all duration-300 transform hover:-translate-y-0.5"
              >
                <Car className="w-5 h-5 fill-neutral-900" />
                Become a Driver
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform duration-300" />
              </a>

              <a
                href="#download-app"
                className="group flex items-center justify-center gap-2 bg-neutral-900 border border-zinc-800 hover:border-amber-500 hover:bg-neutral-800 text-white px-8 py-4 rounded-2xl font-sans font-bold text-lg transition-all duration-250 transform hover:-translate-y-0.5"
              >
                <Smartphone className="w-5 h-5 text-amber-500" />
                Download App
              </a>
            </motion.div>

            {/* Trust Badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="flex flex-wrap items-center gap-y-3 gap-x-6 border-t border-zinc-900/60 pt-6 text-zinc-400 text-xs sm:text-sm font-mono uppercase tracking-wider"
            >
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-amber-500" />
                <span>100% Verified Drivers</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-red-500" />
                <span>Built in Canada for Canadians</span>
              </div>
            </motion.div>

          </div>

          {/* Hero Image Block (Columns 8-12) */}
          <div className="lg:col-span-5 relative flex justify-center items-center">
            
            {/* Ambient amber & gold glow backplate to match our brand */}
            <div className="absolute w-[320px] h-[320px] sm:w-[450px] sm:h-[450px] bg-amber-500/10 rounded-full blur-[100px] z-0 pointer-events-none -translate-y-5" />
            <div className="absolute w-[250px] h-[250px] bg-red-500/5 rounded-full blur-[80px] z-0 pointer-events-none translate-x-8 translate-y-8" />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
              whileHover={{ scale: 1.02, rotate: 0.5 }}
              className="relative w-full max-w-[500px] h-[320px] sm:h-[420px] lg:h-[460px] rounded-[32px] p-2 bg-gradient-to-br from-zinc-800/40 via-zinc-900/60 to-black/80 border border-zinc-800/80 shadow-[0_30px_70px_rgba(0,0,0,0.8),0_10px_30px_rgba(245,184,0,0.08)] z-10 overflow-hidden group"
            >
              <div className="relative w-full h-full rounded-[24px] overflow-hidden">
                {/* Hero Wallpaper Image from User */}
                <img 
                  src="https://i.ibb.co/7xvZD2gd/Whats-App-Image-2026-06-06-at-5-11-31-PM.jpg" 
                  alt="Moba Taxi Service" 
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center transform transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Soft natural hover overlay */}
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-all duration-300" />
              </div>
            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
}
