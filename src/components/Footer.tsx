import { Instagram, Phone, Mail, MapPin, Heart, ArrowUp } from 'lucide-react';
import logo from '@/assets/monisha-aari-logo.png';

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-muted/30 border-t border-border">
      <div className="container mx-auto px-4 py-16">
        {/* Header with Logo */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-4 mb-4">
            <img 
              src={logo} 
              alt="Monisha Aari Designer Logo" 
              className="h-12 w-auto"
            />
            <h3 className="text-3xl font-display font-bold text-foreground">
              Monisha Aari Designer
            </h3>
          </div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Empowering women through the beautiful art of aari embroidery
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <p className="text-muted-foreground leading-relaxed mb-6">
              Join our community of passionate artists and start your creative journey today. 
              Transform your skills into a thriving business with our comprehensive training.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-4">
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 bg-primary/10 text-primary rounded-lg hover:bg-primary/20 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="tel:+919876543210"
                className="p-3 bg-secondary/10 text-secondary rounded-lg hover:bg-secondary/20 transition-colors"
              >
                <Phone className="w-5 h-5" />
              </a>
              <a 
                href="mailto:monisha.aari@gmail.com"
                className="p-3 bg-accent/10 text-accent rounded-lg hover:bg-accent/20 transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {[
                { label: 'Home', id: 'home' },
                { label: 'Courses', id: 'courses' },
                { label: 'Gallery', id: 'gallery' },
                { label: 'About', id: 'about' },
                { label: 'Contact', id: 'contact' }
              ].map((link) => (
                <li key={link.id}>
                  <button 
                    onClick={() => scrollToSection(link.id)}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-4">
              Contact Info
            </h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <div className="text-muted-foreground text-sm">
                  No. 78/2, 1st Floor, NH Office Opposite,<br />
                  Anna Silai, New Vellore Road,<br />
                  Arcot – 632503, Tamil Nadu
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-secondary flex-shrink-0" />
                <a 
                  href="tel:+919876543210"
                  className="text-muted-foreground hover:text-secondary transition-colors"
                >
                  +91 98765 43210
                </a>
              </div>
              
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-accent flex-shrink-0" />
                <a 
                  href="mailto:monisha.aari@gmail.com"
                  className="text-muted-foreground hover:text-accent transition-colors"
                >
                  monisha.aari@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-center md:text-left">
            <p className="text-muted-foreground text-sm">
              © 2024 Monisha Aari Designer. All rights reserved.
            </p>
            <p className="text-muted-foreground/60 text-xs mt-1">
              Crafting dreams, one stitch at a time
            </p>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-400 fill-current" />
              <span>for our creative community</span>
            </div>
            
            <button 
              onClick={scrollToTop}
              className="p-2 bg-primary/10 text-primary rounded-lg hover:bg-primary/20 transition-colors"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;