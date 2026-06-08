import { motion } from "motion/react";
import { Check, ShieldCheck, Sparkles, Smartphone, Star } from "lucide-react";
import { RIDER_FEATURES } from "../data";

export default function RiderSection() {
  return (
    <section id="riders" className="relative py-24 bg-[#050505] overflow-hidden">
      
      {/* Background Ambience */}
      <div className="absolute inset-0 z-0">
        <div className="absolute bottom-1/4 right-0 w-[450px] h-[450px] rounded-full bg-amber-500/5 blur-[95px] pointer-events-none" />
        <div className="absolute top-10 left-10 w-[350px] h-[350px] rounded-full bg-red-600/5 blur-[120px] pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Beautiful Image Showcase (5 columns) - Displayed Left on Desk, Order 2 on Mobile */}
          <div className="lg:col-span-5 order-2 lg:order-1 w-full relative">
            
            {/* Ambient amber radial highlights matching brand style */}
            <div className="absolute inset-0 bg-gradient-to-tr from-amber-500/5 via-transparent to-transparent rounded-[36px] blur-[40px] z-0 pointer-events-none" />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative rounded-[36px] overflow-hidden bg-neutral-900/45 border border-zinc-800/80 p-2 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9)] z-10 group"
            >
              <div className="relative h-[480px] w-full rounded-[28px] overflow-hidden">
                {/* Integrated Moba Booking Passenger Image */}
                <img
                  src="https://i.ibb.co/5xG8d7Ff/Moba-Taxi-2.jpg"
                  alt="Happy Moba passenger enjoying a comfortable, safe ride"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Subtle overlay to preserve design theme on hover */}
                <div className="absolute inset-0 bg-[#050505]/10 group-hover:bg-transparent transition-colors duration-300 pointer-events-none" />

              </div>
            </motion.div>

          </div>

          {/* Rider Copy Section (7 columns) - Order 1 on Mobile */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-8 text-left lg:pl-4">
            <div>
              <div className="inline-flex items-center gap-1.5 bg-red-600/10 border border-red-500/20 rounded-full px-3.5 py-1 mb-4">
                <span className="text-xs">🇨🇦</span>
                <span className="text-red-400 font-mono text-xs font-semibold uppercase tracking-wider">
                  For Riders
                </span>
                <span className="text-zinc-600">•</span>
                <span className="text-zinc-300 font-sans text-xs">Move Smarter</span>
              </div>
              <h2 className="font-sans font-extrabold text-3xl sm:text-4xl text-white tracking-tight leading-tight">
                Book Rides Anytime, <br />
                <span className="bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
                  Anywhere across Canada
                </span>
              </h2>
              <p className="mt-4 font-sans text-white leading-relaxed font-light text-lg sm:text-xl">
                Need to reach the airport, medical clinics, or catch up with friends downtown? Moba Taxi immediately matches you with background-screened, fully certified local Canadian operators.
              </p>
            </div>

            {/* Features Rows Checklist */}
            <div className="space-y-4">
              {RIDER_FEATURES.map((feature, idx) => (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.08, duration: 0.5 }}
                  key={feature.id}
                  className="flex gap-4 p-4 rounded-2xl bg-neutral-900/35 border border-zinc-900/60 hover:bg-neutral-900/60 hover:border-amber-500/10 transition-all duration-300"
                >
                  <div className="h-9 w-9 shrink-0 flex items-center justify-center rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-500">
                    <Check className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-white font-sans font-bold text-base">{feature.title}</h4>
                    <p className="text-white/90 text-base font-light mt-1 leading-relaxed">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="pt-2 flex flex-col sm:flex-row gap-4">
              <a
                href="#download-app"
                className="inline-flex justify-center items-center gap-2 bg-amber-500 hover:bg-amber-400 text-neutral-950 px-7 py-3 rounded-2xl font-sans font-bold shadow-md hover:shadow-lg transition-all duration-200"
              >
                <Smartphone className="w-4 h-4 fill-neutral-950" />
                Download Moba Taxi App
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
