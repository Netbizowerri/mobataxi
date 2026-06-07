import { useState } from "react";
import { motion } from "motion/react";
import { Smartphone, Download, CheckCircle, Info, X } from "lucide-react";

export default function DownloadSection() {
  const [activeApp, setActiveApp] = useState<"rider" | "driver">("rider");

  const appData = {
    rider: {
      tag: "Rider Application",
      title: "Book Rides Anytime, Anywhere",
      description: "Experience the ultimate convenience of homegrown ride-sharing. Safe, reliable, and localized specifically for Newfoundland & Labrador and across Canada.",
      checklist: [
        "📍 Enter your destination and view upfront pricing before you book",
        "🕒 Live vehicle tracking and accurate ETA status directly in-app",
        "⚡ Transparent, secure cash-free digital payment structures"
      ],
      iosLink: "https://apps.apple.com/ca/app/mobataxi/id6752707078",
      androidLink: "https://play.google.com/store/apps/details?id=com.moba.user"
    },
    driver: {
      tag: "Driver Application",
      title: "Drive & Earn Local Capital",
      description: "Take control of your monthly earnings on your own schedule. Keep a significantly higher cut of passenger fares with Moba's lower commission fees.",
      checklist: [
        "💰 Keep more of what you earn with highly competitive platform commission rates",
        "🚗 Flexible hours — make money driving when and where it suits you best",
        "🛡️ Rigorous background passenger screening alerts prioritizing your safety"
      ],
      iosLink: "https://apps.apple.com/ca/app/moba-taxi-driver/id6752898495",
      androidLink: "https://play.google.com/store/apps/details?id=com.moba.driver"
    }
  };

  const currentApp = appData[activeApp];

  return (
    <section id="download-app" className="relative py-24 bg-[#050505] overflow-hidden border-t border-zinc-900/60">
      
      {/* Background radial effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 right-[10%] -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-amber-500/5 blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 left-[5%] w-[350px] h-[350px] rounded-full bg-red-600/5 blur-[90px] pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-[40px] bg-neutral-900/45 border border-zinc-850/80 backdrop-blur-md p-8 sm:p-12 lg:p-16 overflow-hidden shadow-2xl">
          
          {/* Inner ambient glows */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 rounded-full blur-[60px] pointer-events-none" />
          
          <div className="grid md:grid-cols-12 gap-8 items-center relative z-10">
            
            {/* Copy side (7 cols) */}
            <div className="md:col-span-7 space-y-6 text-left">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-amber-500 bg-amber-500/10 px-3.5 py-1 rounded-full">
                {currentApp.tag}
              </span>

              {/* Seamless tab switcher pills */}
              <div className="flex gap-2 p-1 bg-neutral-950/80 border border-zinc-900 rounded-2xl w-fit">
                <button
                  type="button"
                  id="tab-rider-btn"
                  onClick={() => setActiveApp("rider")}
                  className={`px-5 py-2 rounded-xl text-xs sm:text-sm font-sans font-semibold transition-all duration-300 cursor-pointer ${
                    activeApp === "rider"
                      ? "bg-amber-500 text-neutral-950 shadow-md transform scale-102"
                      : "text-zinc-400 hover:text-zinc-200"
                  }`}
                >
                  Rider App
                </button>
                <button
                  type="button"
                  id="tab-driver-btn"
                  onClick={() => setActiveApp("driver")}
                  className={`px-5 py-2 rounded-xl text-xs sm:text-sm font-sans font-semibold transition-all duration-300 cursor-pointer ${
                    activeApp === "driver"
                      ? "bg-amber-500 text-neutral-950 shadow-md transform scale-102"
                      : "text-zinc-400 hover:text-zinc-200"
                  }`}
                >
                  Driver App
                </button>
              </div>

              <h2 className="font-sans font-extrabold text-3xl sm:text-4xl text-white tracking-tight leading-none">
                {currentApp.title}
              </h2>
              <p className="text-zinc-300 font-light text-base leading-relaxed">
                {currentApp.description}
              </p>

              {/* Verified Checklist */}
              <div className="space-y-3.5 pt-1">
                {currentApp.checklist.map((item, index) => (
                  <div key={index} className="flex items-center gap-3 text-zinc-300 text-sm">
                    <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              {/* Custom Badges for App Store / Play Store */}
              <div className="flex flex-row flex-wrap items-center gap-4 pt-4 justify-start">
                
                {/* iOS App Store Badge */}
                <a 
                  id="ios-download-link"
                  href={currentApp.iosLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block transition-all duration-250 transform hover:-translate-y-1 hover:brightness-110 active:scale-95"
                >
                  <img 
                    src="https://i.ibb.co/JFCvHrNH/DOWNLOAD.jpg" 
                    alt="Download on the App Store" 
                    className="h-[62px] sm:h-[72px] w-auto object-contain shadow-md rounded-lg"
                  />
                </a>

                {/* Google Play Store */}
                <a 
                  id="android-download-link"
                  href={currentApp.androidLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block transition-all duration-250 transform hover:-translate-y-1 hover:brightness-110 active:scale-95"
                >
                  <img 
                    src="https://i.ibb.co/7x7C50rZ/DOWNLOAD-1.jpg" 
                    alt="Get it on Google Play" 
                    className="h-[62px] sm:h-[72px] w-auto object-contain shadow-md rounded-lg"
                  />
                </a>

              </div>
              
              <p className="text-[11px] text-zinc-500 font-mono">
                * Available for Apple iOS 15.0+ and Google Android 10+. Fully localized in English and French.
              </p>
            </div>

            {/* Graphics side (5 cols) */}
            <div className="md:col-span-5 flex justify-center relative">
              <div className="absolute w-[300px] h-[300px] bg-amber-500/10 rounded-full blur-[80px] z-0 pointer-events-none" />
              
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                whileHover={{ scale: 1.02 }}
                className="relative rounded-[32px] overflow-hidden bg-neutral-900/40 border border-zinc-800/80 p-1.5 shadow-[0_20px_50px_rgba(0,0,0,0.8)] z-10 w-full max-w-[360px] h-[360px] group"
              >
                <div className="relative w-full h-full rounded-[24px] overflow-hidden">
                  <img
                    src="https://i.ibb.co/bg25144f/Moba-Taxi-1.jpg"
                    alt="Start your journey with Moba Taxi"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Subtle overlay to preserve design theme on hover */}
                  <div className="absolute inset-0 bg-[#050505]/10 group-hover:bg-transparent transition-colors duration-300 pointer-events-none" />
                </div>
              </motion.div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
