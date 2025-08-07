import { Button } from "./ui/button";
import { ArrowRight, MapPin, CheckCircle } from "lucide-react";
import heroImage from "@/assets/hero-land.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-earth-primary/80 to-forest/60"></div>
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 py-20">
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 mb-4">
            <MapPin className="h-5 w-5 text-primary-foreground" />
            <span className="text-primary-foreground/90">Prime Location in Juja, Kenya</span>
          </div>
          
          <h1 className="text-4xl lg:text-6xl font-bold text-primary-foreground mb-6">
            Own Your Piece of 
            <span className="block text-sage">Paradise Today</span>
          </h1>
          
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl">
            Secure your future with premium 1/8-acre plots in Juja's most sought-after locations. 
            Ready title deeds, affordable prices, and unmatched investment potential.
          </p>

          {/* Key Benefits */}
          <div className="flex flex-wrap gap-6 mb-8">
            <div className="flex items-center gap-2 text-primary-foreground">
              <CheckCircle className="h-5 w-5 text-sage" />
              <span>Ready Title Deeds</span>
            </div>
            <div className="flex items-center gap-2 text-primary-foreground">
              <CheckCircle className="h-5 w-5 text-sage" />
              <span>Prime Locations</span>
            </div>
            <div className="flex items-center gap-2 text-primary-foreground">
              <CheckCircle className="h-5 w-5 text-sage" />
              <span>Affordable Prices</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg" 
              variant="earth"
              className="text-lg px-8 py-6"
            >
              View Available Plots
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="text-lg px-8 py-6 bg-primary-foreground/10 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/20"
            >
              Schedule Site Visit
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;