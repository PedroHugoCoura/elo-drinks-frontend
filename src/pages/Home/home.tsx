import Navbar from '../../components/Navbar/navbar';
import Hero from '../../components/Hero/hero';
import Gallery from '../../components/Gallery/gallery';
import FloatingButtonWhatsApp from '../../components/FloatingButton/floatingbutton';

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Gallery />
      <FloatingButtonWhatsApp />
    </>
  );
}
