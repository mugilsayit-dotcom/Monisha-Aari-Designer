import { useState } from 'react';
import { Menu, X, Instagram, Phone } from 'lucide-react';
import logo from '@/assets/monisha-aari-logo.png';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <button 
            onClick={() => scrollToSection('home')}
            className="flex items-center gap-3 text-left focus:outline-none group cursor-pointer"
          >
            <img 
              src={logo} 
              alt="Monisha Aari Designer Logo" 
              className="h-10 w-10 object-contain rounded-full border border-primary/30 shadow-sm group-hover:scale-105 transition-transform duration-300"
            />
            <h1 className="text-xl font-display font-semibold text-gradient-primary">
              Monisha Aari Designer
            </h1>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('home')}
              className="text-foreground hover:text-primary transition-colors duration-300"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('courses')}
              className="text-foreground hover:text-primary transition-colors duration-300"
            >
              Courses
            </button>
            <button 
              onClick={() => scrollToSection('gallery')}
              className="text-foreground hover:text-primary transition-colors duration-300"
            >
              Gallery
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-foreground hover:text-primary transition-colors duration-300"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-foreground hover:text-primary transition-colors duration-300"
            >
              Contact
            </button>
            <div className="flex items-center space-x-3">
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 text-primary hover:text-primary-glow transition-colors duration-300"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="tel:+919876543210"
                className="p-2 text-primary hover:text-primary-glow transition-colors duration-300"
              >
                <Phone size={20} />
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-foreground hover:text-primary transition-colors duration-300"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-background/95 backdrop-blur-md border-b border-border">
            <div className="px-4 py-4 space-y-4">
              <button 
                onClick={() => scrollToSection('home')}
                className="block w-full text-left text-foreground hover:text-primary transition-colors duration-300"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('courses')}
                className="block w-full text-left text-foreground hover:text-primary transition-colors duration-300"
              >
                Courses
              </button>
              <button 
                onClick={() => scrollToSection('gallery')}
                className="block w-full text-left text-foreground hover:text-primary transition-colors duration-300"
              >
                Gallery
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="block w-full text-left text-foreground hover:text-primary transition-colors duration-300"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="block w-full text-left text-foreground hover:text-primary transition-colors duration-300"
              >
                Contact
              </button>
              <div className="flex items-center space-x-3 pt-4 border-t border-border">
                <a 
                  href="https://instagram.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2 text-primary hover:text-primary-glow transition-colors duration-300"
                >
                  <Instagram size={20} />
                </a>
                <a 
                  href="tel:+919876543210"
                  className="p-2 text-primary hover:text-primary-glow transition-colors duration-300"
                >
                  <Phone size={20} />
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;