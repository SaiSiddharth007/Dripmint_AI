import Navbar from "@/components/navbar"
import HeroSection from "@/components/hero-section"
import MovingTextSlider from "@/components/moving-text-slider"
import FeaturesSection from "@/components/features-section"
import AboutMeSection from "@/components/about-me-section"
import AIStylerSection from "@/components/ai-styler-section"
import CustomizationSection from "@/components/customization-section"
import IllustrationsSection from "@/components/illustrations-section"
import SocialSection from "@/components/social-section"
import SustainabilitySection from "@/components/sustainability-section"
import Footer from "@/components/footer"
import LoginModal from "@/components/login-modal"

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#FFF8F0] to-[#FFF1E0] dark:from-gray-900 dark:to-black">
      <Navbar />
      <HeroSection />
      <MovingTextSlider />
      <FeaturesSection />
      <AboutMeSection />
      <AIStylerSection />
      <CustomizationSection />
      <IllustrationsSection />
      <SocialSection />
      <SustainabilitySection />
      <Footer />
      <LoginModal />
    </main>
  )
}
