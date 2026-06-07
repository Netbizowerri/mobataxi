import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Mail, ShieldAlert, CheckCircle, ArrowRight, User, Phone, MapPin, Car, HelpCircle, Trophy, Home, Smartphone, Navigation } from "lucide-react";
import { CANADIAN_REGIONS } from "../data";

export default function DriverSignupForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    city: CANADIAN_REGIONS[0].name,
    licenseClass: "Class 4 Professional License",
    vehicleInfo: "",
    backgroundApproved: false,
    additionalMessage: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submissionMode] = useState<"formspree" | "gmail">("formspree");
  const [errorToast, setErrorToast] = useState<string | null>(null);

  // Formspree endpoint can be configured by user, falling back to default
  const FORMSPREE_ENDPOINT = (import.meta as any).env.VITE_FORMSPREE_ENDPOINT || "https://formspree.io/f/xvonzgkq";

  const resetForm = () => {
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      city: CANADIAN_REGIONS[0]?.name ?? "",
      licenseClass: "Class 4 Professional License",
      vehicleInfo: "",
      backgroundApproved: false,
      additionalMessage: "",
    });
    setIsSubmitted(false);
    setErrorToast(null);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormData((prev) => ({ ...prev, [name]: checked }));
  };

  const generateMailtoLink = () => {
    const subject = encodeURIComponent(`Moba Taxi Driver Partnership Application - ${formData.fullName}`);
    const body = encodeURIComponent(
      `MOBA TAXI DRIVER PARTNERSHIP ENROLLMENT\n` +
      `==========================================\n\n` +
      `FULL NAME: ${formData.fullName}\n` +
      `EMAIL ADDRESS: ${formData.email}\n` +
      `PHONE NUMBER: ${formData.phone}\n` +
      `OPERATING CITY: ${formData.city}\n` +
      `LICENSE CLASSIFICATION: ${formData.licenseClass}\n` +
      `VEHICLE INFO (YEAR/MAKE/MODEL): ${formData.vehicleInfo}\n` +
      `CLEAN RECORD & BACKGROUND CHECK: ${formData.backgroundApproved ? "YES - Authorized" : "NO - Require Review"}\n\n` +
      `ADDITIONAL PARTICULARS:\n${formData.additionalMessage ? formData.additionalMessage : "N/A"}\n\n` +
      `------------------------------------------\n` +
      `Submitted proudly via Moba Taxi Canada.`
    );
    return `mailto:contact@mobscityservice.ca?subject=${subject}&body=${body}`;
  };

  const handleSubmitting = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorToast(null);

    if (submissionMode === "gmail") {
      setIsSubmitting(false);
      setIsSubmitted(true);
      window.location.href = generateMailtoLink();
    } else {
      try {
        const response = await fetch(FORMSPREE_ENDPOINT, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            fullName: formData.fullName,
            email: formData.email,
            phone: formData.phone,
            city: formData.city,
            licenseClass: formData.licenseClass,
            vehicleInfo: formData.vehicleInfo,
            backgroundApproved: formData.backgroundApproved ? "Authorized" : "Not Authorized",
            message: formData.additionalMessage,
          }),
        });

        if (response.ok) {
          setIsSubmitted(true);
        } else {
          // Show user-friendly error toast instead of jarring redirect
          setErrorToast("Submission failed. Tap 'Apply Now' again or contact us at contact@mobscityservice.ca");
          console.error("[Moba Form] Formspree returned non-OK status:", response.status);
        }
      } catch (err) {
        setErrorToast("Network error. Please check your connection and try again.");
        console.error("[Moba Form] Network error:", err);
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  return (
    <section id="driver-signup" className="relative py-24 bg-[#050505] overflow-hidden border-t border-zinc-900/40">
      
      {/* Absolute backgrounds */}
      <div className="absolute inset-0 z-0">
        <div className="absolute bottom-1/4 left-1/4 -translate-y-1/2 -translate-x-1/2 w-[350px] h-[350px] rounded-full bg-amber-500/[0.04] blur-[110px] pointer-events-none" />
        <div className="absolute top-1/4 right-10 w-[250px] h-[250px] rounded-full bg-red-600/[0.01] blur-[80px] pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Form Description Side (5 columns) */}
          <div className="lg:col-span-5 space-y-6 text-left">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-amber-500 bg-amber-500/10 px-3.5 py-1 rounded-full">
              Driver Enrollment
            </span>
            <h2 className="font-sans font-extrabold text-3xl sm:text-4xl text-white tracking-tight leading-tight">
              Ready to Start Earning?
            </h2>
            <p className="text-zinc-300 font-light text-base leading-relaxed">
              Join Moba Taxi today and become part of a fast-growing, homegrown Canadian ride-sharing network. Apply now, get cleared, and start driving.
            </p>

            <div className="space-y-4 pt-2">
              <div className="flex gap-3 p-4 rounded-2xl bg-neutral-900/30 border border-zinc-900">
                <Trophy className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-white text-xs font-bold uppercase tracking-wider font-mono">The 18% Platform Fee Cap</h4>
                  <p className="text-zinc-400 text-xs mt-1 leading-normal">Our transparent operational limits ensure you retain the majority share of standard passenger receipts.</p>
                </div>
              </div>

              <div className="flex gap-3 p-4 rounded-2xl bg-neutral-900/30 border border-zinc-900">
                <Mail className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-white text-xs font-bold uppercase tracking-wider font-mono">Direct Communication Channel</h4>
                  <p className="text-zinc-400 text-xs mt-1 leading-normal">Submit your inquiry and receive tailored feedback within 24 hours directly from our local vetting coordinators.</p>
                </div>
              </div>
            </div>

            <div className="bg-amber-500/5 p-4 rounded-2xl border border-amber-500/10 text-xs text-zinc-400 flex items-start gap-2.5">
              <ShieldAlert className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
              <span>By submitting, you represent that your uploaded licensing class remains active and legitimate within Canadian provincial transport registry structures.</span>
            </div>
          </div>

          {/* Form Element Side (7 columns) */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-[36px] bg-neutral-900/40 border border-zinc-850/80 backdrop-blur-md shadow-2xl space-y-6">
              
              {/* Form Submission Header */}
              <div className="flex items-center justify-between border-b border-zinc-900/30 pb-4">
                <div>
                  <h3 className="text-white text-lg font-extrabold font-sans">Partnership Registration</h3>
                  <p className="text-zinc-400 text-xs font-light">Fill out your information to apply as a driver partner</p>
                </div>
              </div>

              {!isSubmitted ? (
                <form onSubmit={handleSubmitting} className="space-y-4 text-left">
                  
                  {/* Row 1: Full Name & Email */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-zinc-300 text-xs font-mono uppercase tracking-wider flex items-center gap-1.5">
                        <User className="w-3.5 h-3.5 text-zinc-500" />
                        Full Legal Name
                      </label>
                      <input
                        type="text"
                        name="fullName"
                        required
                        placeholder="John Doe"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        className="w-full bg-[#0c0d10] border border-zinc-800 focus:border-amber-500 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none placeholder-zinc-600 transition"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-zinc-300 text-xs font-mono uppercase tracking-wider flex items-center gap-1.5">
                        <Mail className="w-3.5 h-3.5 text-zinc-500" />
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        placeholder="john.doe@gmail.com"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full bg-[#0c0d10] border border-zinc-800 focus:border-amber-500 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none placeholder-zinc-600 transition"
                      />
                    </div>
                  </div>

                  {/* Row 2: Phone & Operating City */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-zinc-300 text-xs font-mono uppercase tracking-wider flex items-center gap-1.5">
                        <Phone className="w-3.5 h-3.5 text-zinc-500" />
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        placeholder="+1 (709) 555-0199"
                        pattern="[\+]?[0-9\s\-\(\)]{7,20}"
                        title="Enter a valid phone number (e.g. +1 709 555-0199)"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full bg-[#0c0d10] border border-zinc-800 focus:border-amber-500 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none placeholder-zinc-600 transition"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-zinc-300 text-xs font-mono uppercase tracking-wider flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5 text-zinc-500" />
                        Preferred City (NL)
                      </label>
                      <select
                        name="city"
                        value={formData.city}
                        onChange={handleInputChange}
                        className="w-full bg-[#0c0d10] border border-zinc-800 focus:border-amber-500 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none cursor-pointer transition"
                      >
                        {CANADIAN_REGIONS.map((city) => (
                          <option key={city.name} value={city.name} className="bg-[#090A0C]">
                            {city.name}, NL
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Row 3: License Class & Vehicle structure */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-zinc-300 text-xs font-mono uppercase tracking-wider flex items-center gap-1.5">
                        <Trophy className="w-3.5 h-3.5 text-zinc-500" />
                        Drivers License Class
                      </label>
                      <select
                        name="licenseClass"
                        value={formData.licenseClass}
                        onChange={handleInputChange}
                        className="w-full bg-[#0c0d10] border border-zinc-800 focus:border-amber-500 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none cursor-pointer transition"
                      >
                        <option value="Class 4 Professional License" className="bg-[#090A0C]">Class 4 Professional</option>
                        <option value="Class 5 (Upgrading to Class 4 soon)" className="bg-[#090A0C]">Class 5 (Upgrading soon)</option>
                        <option value="Standard Domestic Out of Province License" className="bg-[#090A0C]">Other Canadian License</option>
                      </select>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-zinc-300 text-xs font-mono uppercase tracking-wider flex items-center gap-1.5">
                        <Car className="w-3.5 h-3.5 text-zinc-500" />
                        Vehicle (Year/Make/Model)
                      </label>
                      <input
                        type="text"
                        name="vehicleInfo"
                        required
                        placeholder="2021 Toyota RAV4"
                        value={formData.vehicleInfo}
                        onChange={handleInputChange}
                        className="w-full bg-[#0c0d10] border border-zinc-800 focus:border-amber-500 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none placeholder-zinc-600 transition"
                      />
                    </div>
                  </div>

                  {/* Message box */}
                  <div className="space-y-1.5">
                    <label className="text-zinc-300 text-xs font-mono uppercase tracking-wider flex items-center gap-1.5">
                      <HelpCircle className="w-3.5 h-3.5 text-zinc-500" />
                      Additional Details / Experience
                    </label>
                    <textarea
                      name="additionalMessage"
                      rows={3}
                      placeholder="Share driving background, details about your car or general schedule notes..."
                      value={formData.additionalMessage}
                      onChange={handleInputChange}
                      className="w-full bg-[#0c0d10] border border-zinc-800 focus:border-amber-500 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none placeholder-zinc-600 transition resize-none"
                    />
                  </div>

                  {/* Checkbox authorization */}
                  <div className="flex items-start gap-3 p-3 bg-neutral-950 rounded-xl border border-zinc-850/60 mt-2">
                    <input
                      type="checkbox"
                      id="backgroundApproved"
                      name="backgroundApproved"
                      required
                      checked={formData.backgroundApproved}
                      onChange={handleCheckboxChange}
                      className="mt-0.5 h-4 w-4 bg-[#0c0d10] border border-zinc-800 text-amber-500 focus:ring-0 rounded cursor-pointer accent-amber-500"
                    />
                    <label htmlFor="backgroundApproved" className="text-xs text-zinc-400 font-light select-none cursor-pointer leading-normal">
                      I authorize MobaCity Integrated Services to review my Class 4 documentation, inspect vehicle criteria and run safe vulnerability background screening loops.
                    </label>
                  </div>

                  {/* Error Toast */}
                  {errorToast && (
                    <div role="alert" aria-live="assertive" className="flex items-start gap-2.5 p-3.5 bg-red-950/40 border border-red-800/60 rounded-xl text-xs text-red-300">
                      <span className="shrink-0 text-red-400 mt-0.5">⚠</span>
                      <span>{errorToast}</span>
                    </div>
                  )}

                  {/* Submission Button */}
                  <button
                    type="submit"
                    id="driver-signup-submit"
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-2xl bg-gradient-to-r from-amber-500 to-amber-600 text-[#090A0C] font-sans font-bold text-base hover:from-amber-400 hover:to-amber-500 shadow-md hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 transform disabled:opacity-60 uppercase tracking-wider"
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin h-5 w-5 text-neutral-900" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                        </svg>
                        Submitting...
                      </>
                    ) : "APPLY NOW."}
                  </button>

                  {/* Backup message indicator under submission */}
                  <p className="text-[10px] text-zinc-500 font-mono text-center leading-normal">
                    {submissionMode === "gmail" ? "Clicking will pre-fill and launch your default email client with all details." : "Submit natively to secure Formspree API."}
                  </p>

                </form>
              ) : (
                /* Success screen inside card */
                <div className="py-12 text-center space-y-6">
                  <div className="h-16 w-16 bg-emerald-500/10 border border-emerald-500/30 rounded-full flex items-center justify-center text-emerald-400 mx-auto">
                    <CheckCircle className="w-10 h-10" />
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-white text-xl font-sans font-bold">Inquiry Sent Successfully!</h4>
                    <p className="text-zinc-300 text-sm max-w-[450px] mx-auto leading-normal">
                      Thank you, <strong className="text-white">{formData.fullName}</strong>. Your driver profile is logged for <strong className="text-white">{formData.city}, NL</strong>.
                    </p>
                  </div>
                  <button
                    onClick={resetForm}
                    className="px-6 py-2 bg-amber-500 text-neutral-950 hover:bg-amber-400 rounded-xl text-xs font-semibold font-sans transition"
                  >
                    Apply with Another Profile
                  </button>
                </div>
              )}

            </div>
          </div>

        </div>
      </div>

      {/* Floating Thank You Popout Modal Overlay */}
      <AnimatePresence>
        {isSubmitted && (
          <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 overflow-y-auto">
            {/* Dark glass backdrop layout */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={resetForm}
              className="fixed inset-0 bg-[#020202]/92 backdrop-blur-md cursor-pointer"
            />

            {/* Modal Dialog */}
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 30 }}
              transition={{ type: "spring", duration: 0.5, bounce: 0.2 }}
              className="relative max-w-lg w-full bg-neutral-900 border border-amber-500/20 p-6 sm:p-10 rounded-[36px] shadow-2xl text-center space-y-6 overflow-hidden z-[210] border-t-2 border-t-amber-500"
            >
              {/* Golden spotlight radial gradient */}
              <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-80 h-80 bg-amber-500/10 rounded-full blur-[70px] pointer-events-none" />

              {/* Success Badge */}
              <div className="relative mx-auto w-20 h-20 bg-emerald-500/10 rounded-full flex items-center justify-center text-emerald-400 border border-emerald-500/25 shadow-[0_0_30px_rgba(16,185,129,0.15)]">
                <CheckCircle className="w-10 h-10" />
                <span className="absolute inset-0 rounded-full border border-emerald-400/30 animate-pulse" />
              </div>

              {/* Typography block */}
              <div className="space-y-2">
                <span className="text-[10px] font-mono font-bold tracking-widest text-amber-500 bg-amber-500/10 px-3.5 py-1 rounded-full uppercase">
                  Submission Successful
                </span>
                <h3 className="text-3xl font-sans font-extrabold text-white tracking-tight leading-tight pt-2">
                  THANK YOU!
                </h3>
                <p className="text-zinc-300 text-sm font-light max-w-sm mx-auto leading-relaxed pt-1">
                  Hi <strong className="text-white font-semibold">{formData.fullName}</strong>! Your driver partnership inquiry was successfully routed to our secure Formspree database.
                </p>
              </div>

              {/* Captured Information Table */}
              <div className="bg-neutral-950/75 border border-zinc-900 p-4 rounded-2xl text-left text-xs space-y-2.5 font-mono">
                <div className="flex justify-between border-b border-zinc-900/60 pb-2 text-zinc-500 uppercase tracking-wider text-[9px] font-bold">
                  <span>Application Summary</span>
                  <span className="text-emerald-400">Secure Payload</span>
                </div>
                <div className="space-y-1.5 pt-0.5">
                  <div className="flex justify-between">
                    <span className="text-zinc-500">Service Area:</span>
                    <span className="text-white font-semibold">{formData.city}, NL</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-zinc-500">Contact Phone:</span>
                    <span className="text-white font-semibold">{formData.phone}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-zinc-500">License Tier:</span>
                    <span className="text-white font-semibold">{formData.licenseClass}</span>
                  </div>
                  {formData.vehicleInfo && (
                    <div className="flex justify-between">
                      <span className="text-zinc-500">Vehicle:</span>
                      <span className="text-white font-semibold">{formData.vehicleInfo}</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Status Note Details */}
              <div className="text-xs text-zinc-400 leading-normal max-w-sm mx-auto">
                {submissionMode === "gmail" ? (
                  <span>An email draft has been generated in your device's default mail client with all the above information.</span>
                ) : (
                  <span>Our vetting staff at <span className="text-white font-medium">MobaCity Integrated Services Inc.</span> will reach out within 24 hours at <span className="text-amber-400 font-semibold">{formData.email}</span> to verify your status.</span>
                )}
              </div>

              {/* Target Redirection CTA Buttons */}
              <div className="space-y-3 pt-2">
                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href="#"
                    onClick={() => {
                      resetForm();
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
                    className="flex-1 py-3.5 px-5 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-neutral-950 rounded-2xl text-xs sm:text-sm font-sans font-bold shadow-md hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <Home className="w-4 h-4 shrink-0" />
                    Reset & Core Page
                  </a>

                  <a
                    href="#riders"
                    onClick={resetForm}
                    className="flex-1 py-3.5 px-5 bg-zinc-900 border border-zinc-800 hover:bg-zinc-850 hover:border-zinc-700 text-white rounded-2xl text-xs sm:text-sm font-sans font-semibold transition-all duration-300 flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <Navigation className="w-4 h-4 text-zinc-400 shrink-0" />
                    Rider Features
                  </a>
                </div>

                <a
                  href="#download-app"
                  onClick={resetForm}
                  className="w-full py-3 px-4 bg-[#0c0d10] hover:bg-[#121318] border border-zinc-950/80 text-zinc-400 hover:text-white rounded-2xl text-xs font-mono uppercase tracking-widest transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Smartphone className="w-4 h-4 text-amber-500" />
                  Explore Native App Downloads
                </a>
              </div>

              {/* Close Button Trigger */}
              <button
                type="button"
                onClick={resetForm}
                className="text-xs text-zinc-500 hover:text-zinc-300 underline underline-offset-4 font-light cursor-pointer pt-2"
              >
                Dismiss & fill another form
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
