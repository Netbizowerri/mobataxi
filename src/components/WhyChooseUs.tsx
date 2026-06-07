import { motion } from "motion/react";
import { ShieldCheck, Heart, Users, Landmark, Award, ChevronUp } from "lucide-react";

export default function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="relative py-24 bg-[#050505] overflow-hidden border-t border-zinc-900/40">
      
      {/* Background radial highlight */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] rounded-full bg-amber-500/[0.03] blur-[120px] pointer-events-none" />
        <div className="absolute bottom-10 left-10 w-[300px] h-[300px] rounded-full bg-red-600/[0.02] blur-[100px] pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-amber-500 bg-amber-500/10 px-3.5 py-1 rounded-full">
            The Canadian Alternative
          </span>
          <h2 className="font-sans font-extrabold text-3xl sm:text-4xl text-white mt-4 tracking-tight">
            Why Choose Moba Taxi?
          </h2>
          <p className="text-zinc-400 font-light mt-4 text-base sm:text-lg">
            We are building a secure Canadian mobility network that connects local people, creates high-value local jobs, and reinvests in community safety.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-auto">
          
          {/* Card 1: Main Vision Highlight (Takes 2 Columns on Medium/Large screens) */}
          <div className="md:col-span-2 p-8 rounded-[36px] bg-neutral-900/30 border border-zinc-900 hover:border-amber-500/20 transition-all duration-300 flex flex-col justify-between space-y-8 shadow-xl">
            <div className="space-y-4">
              <div className="h-10 w-10 bg-red-500/10 rounded-2xl flex items-center justify-center text-red-500">
                <Heart className="w-5 h-5 fill-red-500/20" />
              </div>
              <h3 className="font-sans font-extrabold text-2xl text-white leading-tight">
                Our Vision: Empowering Local Canadian Mobility
              </h3>
              <p className="text-zinc-300 font-light text-base leading-relaxed">
                We are more than a ride-hailing app. Moba Taxi is engineering a robust, nationwide transportation network that keeps safety strict, rewards hard-working drivers, and ensures fares remain local and affordable. 
              </p>
              <p className="text-zinc-400 font-light text-sm leading-relaxed">
                Every booking made inside Newfoundland & Labrador assists in sustaining local employment and supporting families across local towns. Let’s make it grow together.
              </p>
            </div>
          </div>

          {/* Card 2: Proudly Made in Canada (1 Column) */}
          <div className="p-8 rounded-[36px] bg-neutral-900/30 border border-zinc-900 hover:border-amber-500/20 transition-all duration-300 flex flex-col justify-between shadow-xl">
            <div className="space-y-4">
              <div className="h-10 w-10 bg-zinc-800/80 rounded-2xl flex items-center justify-center text-red-500 text-xl font-bold">
                🇨🇦
              </div>
              <h3 className="font-sans font-extrabold text-xl text-white">
                Proudly Made in Canada
              </h3>
              <p className="text-zinc-400 font-light text-sm leading-relaxed">
                Enjoy a local ride-sharing option owned, developed, and maintained right here in Canada. We operate within complete compliance of all regional municipal bylaws, ensuring strict adherence to the Canadian safety framework.
              </p>
            </div>
            
            <div className="bg-zinc-950/60 p-3.5 rounded-2xl border border-zinc-900 mt-6 text-xs text-zinc-400 flex items-center gap-2">
              <span className="text-red-500 text-base leading-none">🍁</span>
              <span>Headquartered & operated fully in-province.</span>
            </div>
          </div>

          {/* Card 3: Safe, Reliable & Easy to Use (1 Column) */}
          <div className="p-8 rounded-[36px] bg-neutral-900/30 border border-zinc-900 hover:border-amber-500/20 transition-all duration-300 flex flex-col justify-between shadow-xl">
            <div className="space-y-4">
              <div className="h-10 w-10 bg-amber-500/10 rounded-2xl flex items-center justify-center text-amber-500">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="font-sans font-extrabold text-xl text-white">
                Safe & Verified Transport
              </h3>
              <p className="text-zinc-400 font-light text-sm leading-relaxed">
                We take commuter safety with absolute seriousness. Every single active Moba partner possesses a verified Class 4 professional driver’s license, a clean police certificate, and drives a certified inspection-passed vehicle.
              </p>
            </div>

            <div className="bg-zinc-950/60 p-3.5 rounded-2xl border border-zinc-900 mt-6 text-xs text-zinc-300 flex items-center justify-between font-mono">
              <span className="text-zinc-400 uppercase tracking-widest text-[9px]">background sweep:</span>
              <span className="text-emerald-400 font-bold uppercase">100% CLEANED</span>
            </div>
          </div>

          {/* Card 4: Built for Local Communities (1 Column) */}
          <div className="p-8 rounded-[36px] bg-neutral-900/30 border border-zinc-900 hover:border-amber-500/20 transition-all duration-300 flex flex-col justify-between shadow-xl">
            <div className="space-y-4">
              <div className="h-10 w-10 bg-amber-500/10 rounded-2xl flex items-center justify-center text-amber-500">
                <Users className="w-5 h-5" />
              </div>
              <h3 className="font-sans font-extrabold text-xl text-white">
                Built for Local Communities
              </h3>
              <p className="text-zinc-400 font-light text-sm leading-relaxed">
                Unlike global gig-economy giants, Moba is fine-tuned to Newfoundland & Labrador's regional transit schedules. We provide specialized coverage in St. John's, Mount Pearl, CBS, and Corner Brook.
              </p>
            </div>

            <div className="bg-zinc-950/60 p-3.5 rounded-2xl border border-zinc-900 mt-6 text-xs text-zinc-400">
              <p className="italic text-[11px] text-amber-400/90 leading-tight">"A refreshing, reliable and friendly team that finally supports our towns properly."</p>
            </div>
          </div>

          {/* Card 5: Opportunity to Earn & Grow (1 Column) */}
          <div className="p-8 rounded-[36px] bg-neutral-900/30 border border-zinc-900 hover:border-amber-500/20 transition-all duration-300 flex flex-col justify-between shadow-xl">
            <div className="space-y-4">
              <div className="h-10 w-10 bg-amber-500/10 rounded-2xl flex items-center justify-center text-amber-500">
                <Landmark className="w-5 h-5" />
              </div>
              <h3 className="font-sans font-extrabold text-xl text-white">
                Opportunity to Earn & Grow
              </h3>
              <p className="text-zinc-400 font-light text-sm leading-relaxed">
                Take control of your personal income schedule. Driver payouts occurs on a guaranteed, rapid weekly cycle with straightforward 82% platform payout metrics. We believe if you do the driving, you should keep the profit.
              </p>
            </div>

            <div className="bg-zinc-950/60 p-3.5 rounded-2xl border border-zinc-900 mt-6 text-xs text-zinc-300 flex items-center justify-between font-mono">
              <span className="text-zinc-400 uppercase tracking-widest text-[9px]">driver payout:</span>
              <span className="text-amber-500 font-bold uppercase">82% Split Share</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
