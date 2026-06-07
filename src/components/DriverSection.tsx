import { motion } from "motion/react";
import { Check, Shield, DollarSign, Sparkles, Star } from "lucide-react";
import { DRIVER_BENEFITS, DRIVER_REQUIREMENTS } from "../data";

export default function DriverSection() {
  return (
    <section id="drivers" className="relative py-24 bg-[#050505] overflow-hidden">
      
      {/* Background Ambience */}
      <div className="absolute inset-0 z-0 opacity-40">
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-amber-500/5 blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 right-10 w-[300px] h-[300px] rounded-full bg-neutral-900/40 border border-zinc-800/10 pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Driver Copy & Benefits (7 columns) */}
          <div className="lg:col-span-7 space-y-8">
            <div>
              <div className="inline-flex items-center gap-1.5 bg-amber-500/10 border border-amber-500/20 rounded-full px-3.5 py-1 mb-4">
                <DollarSign className="w-4 h-4 text-amber-500" />
                <span className="text-amber-400 font-mono text-xs font-semibold uppercase tracking-wider">
                  For Drivers
                </span>
                <span className="text-zinc-600">•</span>
                <span className="text-zinc-300 font-sans text-xs">Earn on Your Terms</span>
              </div>
              <h2 className="font-sans font-extrabold text-3xl sm:text-4xl text-white tracking-tight leading-tight">
                Drive with Moba Taxi & <br />
                <span className="bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
                  Start Earning Cash
                </span>
              </h2>
              <p className="mt-4 font-sans text-zinc-300 leading-relaxed font-light text-base sm:text-lg">
                Turn your car into consistent income. Join a fast-growing, homegrown Canadian ride-sharing network, set your own working hours, and retain most of your fares.
              </p>
            </div>

            {/* Benefit Row Items */}
            <div className="space-y-4">
              {DRIVER_BENEFITS.map((benefit, idx) => (
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.08, duration: 0.5 }}
                  key={benefit.id}
                  className="flex gap-4 p-4 rounded-2xl bg-neutral-900/35 border border-zinc-900/60 hover:bg-neutral-900/60 hover:border-amber-500/10 transition-all duration-300"
                >
                  <div className="h-9 w-9 shrink-0 flex items-center justify-center rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-500">
                    <Check className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-white font-sans font-bold text-base">{benefit.title}</h4>
                    <p className="text-zinc-400 text-sm font-light mt-1 leading-relaxed">{benefit.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Requirements Box */}
            <div className="p-5 sm:p-6 rounded-3xl bg-amber-500/[0.02] border border-amber-500/10 backdrop-blur-sm shadow-xl">
              <div className="flex items-center gap-2 mb-3">
                <Shield className="w-5 h-5 text-amber-500" />
                <h4 className="text-white font-sans font-extrabold text-sm uppercase tracking-wider">
                  Driver Requirements
                </h4>
              </div>
              <ul className="space-y-2.5">
                {DRIVER_REQUIREMENTS.map((req, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-zinc-300 text-sm">
                    <span className="block h-1.5 w-1.5 rounded-full bg-red-500 mt-2 shrink-0 animate-pulse" />
                    <span className="font-light">{req}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-2">
              <a
                href="#driver-signup"
                className="inline-flex items-center gap-2 bg-neutral-900 border border-amber-500/30 hover:border-amber-500 hover:bg-zinc-800 text-white px-7 py-3 rounded-2xl font-sans font-bold shadow-md transition-all duration-200"
              >
                Apply to Drive Now
                <span className="text-amber-500">→</span>
              </a>
            </div>

          </div>

          {/* Happy Client Drop Off Image Showcase (5 columns) */}
          <div className="lg:col-span-5 w-full relative">
            
            {/* Ambient golden radial background behind the image */}
            <div className="absolute inset-0 bg-gradient-to-tr from-amber-500/5 via-transparent to-transparent rounded-[36px] blur-[40px] z-0 pointer-events-none" />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative rounded-[36px] overflow-hidden bg-neutral-900/45 border border-zinc-800/80 p-2 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9)] z-10 group"
            >
              <div className="relative h-[480px] w-full rounded-[28px] overflow-hidden">
                {/* The beautifully generated driver image */}
                <img
                  src="https://i.ibb.co/x8jFjZM0/Moba-Taxi-3.jpg"
                  alt="Drive with Moba Taxi"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Dynamic Driver photo with subtle overlay to match design theme */}
                <div className="absolute inset-0 bg-[#050505]/10 group-hover:bg-transparent transition-colors duration-300 pointer-events-none" />

              </div>
            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
}

