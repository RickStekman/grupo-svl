import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import Processes from '@/components/Processes';
import News from '@/components/News';
import ExecutiveTeam from '@/components/ExecutiveTeam';
import Testimonials from '@/components/Testimonials';
import Gallery from '@/components/Gallery';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import FloatingActions from '@/components/FloatingActions';

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero /> 

      <main>
        <About />
        <Services />
        <Processes />
        <News />
        <Testimonials />
        <Gallery />
        <ExecutiveTeam />
        <Contact />
      </main>

      <Footer />
      <FloatingActions />
    </>
  );
}