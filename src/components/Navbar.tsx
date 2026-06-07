import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Car, Smartphone, Award, Globe, Navigation } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Drivers", href: "#drivers", icon: Car },
    { name: "Riders", href: "#riders", icon: Navigation },
    { name: "How It Works", href: "#how-it-works", icon: Award },
    { name: "Why Us", href: "#why-choose-us", icon: Globe },
    { name: "Download", href: "#download-app", icon: Smartphone },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    
    const wasOpen = isOpen;
    setIsOpen(false);
    
    const targetId = href.startsWith("#") ? href.substring(1) : "";
    
    // Use a timeout if the mobile menu was open to let the collapse transition complete
    // so layout updates do not interrupt or cancel smooth scroll behavior on mobile screens.
    const scrollDelay = wasOpen ? 320 : 0;

    setTimeout(() => {
      if (!targetId || href === "#") {
        window.scrollTo({ top: 0, behavior: "smooth" });
        window.history.pushState(null, "", " ");
        return;
      }

      const element = document.getElementById(targetId);
      if (element) {
        // Use a clean offset to clear the fixed headers beautifully across screen densities
        const navbarOffset = scrolled ? 76 : 96;
        const elementPosition = element.getBoundingClientRect().top + window.scrollY;
        const offsetPosition = elementPosition - navbarOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
        
        // Update URL state smoothly without jump
        window.history.pushState(null, "", href);
      }
    }, scrollDelay);
  };

  return (
    <>
      {/* Skip to main content — keyboard/screen reader accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[999] focus:bg-amber-500 focus:text-neutral-950 focus:px-4 focus:py-2 focus:rounded-lg focus:font-bold focus:text-sm"
      >
        Skip to main content
      </a>

      <motion.header
        role="banner"
        aria-label="Moba Taxi site header"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#050505]/80 backdrop-blur-md border-b border-amber-500/15 py-3 shadow-[0_4px_30px_rgba(0,0,0,0.4)]"
            : "bg-transparent py-5"
        }`}
      >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo Brand */}
          <a href="#" onClick={(e) => handleLinkClick(e, "#")} className="flex items-center group">
            <img 
              src="https://i.ibb.co/gZc6XcwN/MOBA-TAXI.jpg" 
              alt="Moba Taxi Logo" 
              className="h-12 sm:h-[58px] w-auto rounded-lg object-contain border border-zinc-800/60 shadow-[0_4px_12px_rgba(0,0,0,0.5)] transition-all duration-300 group-hover:border-amber-500/30 group-hover:opacity-95"
            />
          </a>

          {/* Desktop Navigation */}
          <nav aria-label="Main navigation" className="hidden md:flex items-center gap-1.5 lg:gap-3 bg-neutral-900/40 border border-zinc-800/80 px-6 py-2 rounded-full backdrop-blur-sm">
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="font-sans text-sm font-medium text-zinc-300 hover:text-amber-400 px-3.5 py-1.5 rounded-full transition-all duration-250 flex items-center gap-1.5 hover:bg-zinc-800/30"
                >
                  <Icon className="w-3.5 h-3.5 text-zinc-400 group-hover:text-amber-400" />
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Action CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="#driver-signup"
              onClick={(e) => handleLinkClick(e, "#driver-signup")}
              className="font-sans text-sm font-semibold bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-neutral-950 px-5 py-2.5 rounded-full shadow-[0_4px_15px_rgba(245,184,0,0.25)] hover:shadow-[0_4px_20px_rgba(245,184,0,0.4)] transition-all duration-200 transform hover:-translate-y-0.5"
            >
              Become a Driver 🚗
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg bg-neutral-900/80 border border-zinc-800 text-zinc-200 hover:text-amber-400 hover:border-amber-500/20 transition-all duration-200"
            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            id="mobile-menu"
            role="navigation"
            aria-label="Mobile navigation"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-[#050505]/95 border-b border-zinc-800/80 backdrop-blur-md overflow-hidden"
          >
            <div className="px-4 pt-3 pb-6 space-y-2">
              {navLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className="flex items-center gap-3 font-sans text-base font-semibold text-zinc-200 hover:text-amber-400 p-3 rounded-xl hover:bg-zinc-900/50 transition-all duration-200"
                  >
                    <Icon className="w-5 h-5 text-amber-500" />
                    {link.name}
                  </a>
                );
              })}
              <div className="pt-4 border-t border-zinc-800/60 pb-1">
                <a
                  href="#driver-signup"
                  onClick={(e) => handleLinkClick(e, "#driver-signup")}
                  className="block text-center bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-neutral-950 px-4 py-3 rounded-xl font-sans font-bold shadow-lg transition-transform duration-200"
                >
                  🚗 Become a Driver Now
                </a>
              </div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
    </>
  );
}
