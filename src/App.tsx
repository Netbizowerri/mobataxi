import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import DriverSection from "./components/DriverSection";
import RiderSection from "./components/RiderSection";
import HowItWorks from "./components/HowItWorks";
import WhyChooseUs from "./components/WhyChooseUs";
import DownloadSection from "./components/DownloadSection";
import DriverSignupForm from "./components/DriverSignupForm";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="font-sans antialiased text-white bg-[#050505] min-h-screen selection:bg-amber-400 selection:text-neutral-950">
      
      {/* 1. Glassmorphic Navigation Header */}
      <Navbar />

      <main id="main-content" role="main">
        {/* 2. Interactive App-mockup Hero section */}
        <HeroSection />

        {/* 3. Section 1: For Drivers with Earnings Calculator */}
        <DriverSection />

        {/* 4. Section 2: For Riders with Cost Estimator Playground */}
        <RiderSection />

        {/* 5. Section 3: Interactive Tabbed How It Works Funnels */}
        <HowItWorks />

        {/* 6. Section 4 & 5: Why Moba & Our Vision Bento Grid Map tracker */}
        <WhyChooseUs />

        {/* 7. Section 6: Native App Download CTA */}
        <DownloadSection />

        {/* 8. Section 7: Final Driver Application Intake panel */}
        <DriverSignupForm />
      </main>

      {/* 9. Footers & Regional Legal Declarations */}
      <Footer />

    </div>
  );
}
