import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Listings from "@/components/Listings";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <Listings />
      <About />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
