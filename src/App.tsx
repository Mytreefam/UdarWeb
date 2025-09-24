import { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Benefits } from './components/Benefits';
import { Services } from './components/Services';
import { Contact } from './components/Contact';
import { AboutUs } from './components/AboutUs';
import { Footer } from './components/Footer';
import { LegalModal } from './components/LegalModal';
import { FloatingCTA } from './components/FloatingCTA';

export default function App() {
  const [legalModalOpen, setLegalModalOpen] = useState(false);
  const [legalContent, setLegalContent] = useState('');

  const openLegalModal = (content: string) => {
    setLegalContent(content);
    setLegalModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-black">
      <Header />
      <Hero />
      <Benefits />
      <Services />
      <Contact />
      <AboutUs />
      <Footer onOpenLegal={openLegalModal} />
      <FloatingCTA />
      <LegalModal 
        isOpen={legalModalOpen} 
        onClose={() => setLegalModalOpen(false)} 
        content={legalContent} 
      />
    </div>
  );
}