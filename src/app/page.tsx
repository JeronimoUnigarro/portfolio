import HeroSection from '@/app/components/HeroSection'
import AboutSection from '@/app/components/AboutSection'
import ProjectsSection from '@/app/components/ProjectsSection'
import TestimonialsSection from '@/app/components/TestimonialsSection'
import AchievementsSection from '@/app/components/AchievementsSection'
import ContactSection from './components/ContactSection'

  export default function Home() {
    return (
      <>
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <TestimonialsSection />
        <AchievementsSection />
        <ContactSection />
        
      </>
    );
  }