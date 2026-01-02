
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import ProgramsSection from '@/components/ProgramsSection';
import AboutSection from '@/components/AboutSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import FAQSection from '@/components/FAQ/FAQSection';
import BlogSection from '@/components/Blog/BlogSection';
import TestimoniSection from '@/components/Testimoni/TestimoniSection';


export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <ProgramsSection />
      <AboutSection />
      <TestimoniSection />
      <FAQSection />
      <BlogSection />
      <ContactSection />
      <Footer />
    </main>
  );
}