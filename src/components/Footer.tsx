import { MapPin, Phone, Mail, Facebook, Globe } from "lucide-react";
import { Button } from "./ui/button";

const Footer = () => {
  return (
    <footer className="bg-earth-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold mb-4">Crescent Heights LTD</h3>
            <p className="text-primary-foreground/80 mb-6 max-w-md">
              Your trusted partner in land investment and settlement in Juja. 
              We make land ownership accessible, legal, and affordable for every Kenyan family.
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span className="text-sm">Greenspot Tower, Eastern Bypass, 00618</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span className="text-sm">0746 333777</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span className="text-sm">info@chlrealtors.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#listings" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Available Plots
                </a>
              </li>
              <li>
                <a href="#about" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#contact" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>Land Sales</li>
              <li>Title Deed Processing</li>
              <li>Site Visits</li>
              <li>Investment Consultation</li>
              <li>Payment Plans</li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-primary-foreground/20 mt-8 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-primary-foreground/80 text-sm">
              © {new Date().getFullYear()} Crescent Heights LTD. All rights reserved.
            </p>
            
            <div className="flex items-center gap-4">
              <span className="text-primary-foreground/80 text-sm">Follow us:</span>
              <div className="flex gap-2">
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-primary-foreground hover:bg-primary-foreground/10"
                  asChild
                >
                  <a href="#" aria-label="Facebook">
                    <Facebook className="h-5 w-5" />
                  </a>
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-primary-foreground hover:bg-primary-foreground/10"
                  asChild
                >
                  <a href="#" aria-label="TikTok">
                    <div className="h-5 w-5 flex items-center justify-center text-sm font-bold">T</div>
                  </a>
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-primary-foreground hover:bg-primary-foreground/10"
                  asChild
                >
                  <a href="http://chlrealtors.com/" aria-label="Website">
                    <Globe className="h-5 w-5" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;