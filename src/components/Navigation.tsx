import { useState } from "react";
import { Menu, X, MapPin, Phone, Mail } from "lucide-react";
import { Button } from "./ui/button";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-background border-b border-border">
      {/* Contact Bar */}
      <div className="bg-earth-primary text-primary-foreground">
        <div className="container mx-auto px-4 py-2">
          <div className="flex flex-wrap items-center justify-center lg:justify-between text-sm">
            <div className="flex flex-wrap items-center gap-4 lg:gap-6">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>Greenspot Tower, Eastern Bypass, 00618</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span>0746 333777</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span>info@chlrealtors.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <h1 className="text-2xl lg:text-3xl font-bold text-earth-primary">
              Crescent Heights LTD
            </h1>
            <p className="hidden lg:block ml-4 text-muted-foreground">
              Your Trusted Land Partner in Juja
            </p>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <a href="#home" className="text-foreground hover:text-earth-primary transition-colors">
              Home
            </a>
            <a href="#listings" className="text-foreground hover:text-earth-primary transition-colors">
              Listings
            </a>
            <a href="#about" className="text-foreground hover:text-earth-primary transition-colors">
              About Us
            </a>
            <a href="#contact" className="text-foreground hover:text-earth-primary transition-colors">
              Contact
            </a>
            <Button variant="earth" className="ml-4">
              View Available Plots
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden mt-4 pb-4 border-t border-border pt-4">
            <div className="flex flex-col space-y-4">
              <a href="#home" className="text-foreground hover:text-earth-primary transition-colors">
                Home
              </a>
              <a href="#listings" className="text-foreground hover:text-earth-primary transition-colors">
                Listings
              </a>
              <a href="#about" className="text-foreground hover:text-earth-primary transition-colors">
                About Us
              </a>
              <a href="#contact" className="text-foreground hover:text-earth-primary transition-colors">
                Contact
              </a>
              <Button variant="earth" className="w-full">
                View Available Plots
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Navigation;