import { Car, Mail, MapPin, ShieldAlert, Heart, ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-[#050505] border-t border-zinc-900 overflow-hidden pt-16 pb-12">
      
      {/* Decorative Canada leaf outline as backdrop */}
      <div className="absolute -bottom-10 right-10 text-[180px] opacity-[0.015] pointer-events-none select-none">
        🍁
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-zinc-900">
          
          {/* Logo Brand / Disclosures (6 cols) */}
          <div className="md:col-span-6 space-y-4 text-left">
            <a href="#" className="flex items-center group">
              <img 
                src="https://i.ibb.co/gZc6XcwN/MOBA-TAXI.jpg" 
                alt="Moba Taxi Logo" 
                className="h-12 sm:h-[58px] w-auto rounded-lg object-contain border border-zinc-805/60 shadow-[0_4px_12px_rgba(0,0,0,0.5)] transition-all duration-300 group-hover:border-amber-500/30 group-hover:opacity-95"
              />
            </a>
            
            <p className="text-white text-sm sm:text-base font-light leading-relaxed max-w-md">
              Moba Taxi is a homegrown ride-sharing alternative platform proudly owned and operated by <strong className="text-zinc-200">MobaCity Integrated Services Inc.</strong> registered in Canada. We engineer local mobility solutions to sustain communities and expand regional driver opportunities.
            </p>

            <div className="flex items-center gap-3 text-sm text-white/70">
              <span>Class 4 Passenger Vetted Vetting System</span>
              <span>•</span>
              <span>Safety Bond Compliant 🇨🇦</span>
            </div>
          </div>

          {/* Quick Contact & Geographic specs (6 cols) */}
          <div className="md:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-8 text-left">
            
            {/* Contacts Column */}
            <div className="space-y-4">
              <h4 className="text-white text-xs font-mono uppercase tracking-widest font-bold">
                Get in Touch
              </h4>
              <ul className="space-y-3">
                <li className="flex items-center gap-2.5 text-white hover:text-amber-400 text-sm transition duration-150">
                  <Mail className="w-4 h-4 text-amber-500" />
                  <a href="mailto:contact@mobscityservice.ca">contact@mobscityservice.ca</a>
                </li>
                <li className="flex items-start gap-2.5 text-white text-sm">
                  <MapPin className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                  <span>📍 Made in Canada 🇨🇦 <br />Serving Newfoundland & Labrador</span>
                </li>
              </ul>
            </div>

            {/* Jurisdiction Column */}
            <div className="space-y-4">
              <h4 className="text-white text-xs font-mono uppercase tracking-widest font-bold">
                Operating Cities (NL)
              </h4>
              <ul className="grid grid-cols-2 gap-1.5 text-sm text-white/70">
                <li className="hover:text-amber-500 transition-colors cursor-pointer">St. John's</li>
                <li className="hover:text-amber-500 transition-colors cursor-pointer">Mount Pearl</li>
                <li className="hover:text-amber-500 transition-colors cursor-pointer">Corner Brook</li>
                <li className="hover:text-amber-500 transition-colors cursor-pointer">Conception Bay South</li>
                <li className="hover:text-amber-500 transition-colors cursor-pointer">Gander</li>
                <li className="hover:text-amber-500 transition-colors cursor-pointer">Grand Falls-Windsor</li>
              </ul>
            </div>

          </div>

        </div>

        {/* Brand footer bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-white/70 text-sm">
          
          <div className="flex flex-wrap items-center justify-center gap-2 text-center sm:text-left">
            <span>© {new Date().getFullYear()} Moba Taxi. Powered by MobaCity Integrated Services Inc. All Rights Reserved.</span>
          </div>

          {/* Scroll to top */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 hover:border-amber-500/20 text-zinc-400 hover:text-white transition-all text-xs font-mono font-bold"
          >
            Back to Top
            <ArrowUp className="w-3.5 h-3.5 text-amber-500" />
          </button>

        </div>

      </div>
    </footer>
  );
}
