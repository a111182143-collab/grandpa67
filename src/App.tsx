import Header from './components/Header';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import TravelSection from './components/TravelSection';
import VideoSection from './components/VideoSection';
import AssetGallery from './components/AssetGallery';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-brand-bg flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Experience />
        <Projects />
        <TravelSection />
        <VideoSection />
        <AssetGallery />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}


