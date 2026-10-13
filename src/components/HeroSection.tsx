import { ArrowRight, Instagram, Star } from 'lucide-react';
import heroImage from '@/assets/hero-aari.jpg';

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Beautiful aari embroidery work" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/70 to-background/50"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start space-x-2 mb-4">
              <div className="flex space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-secondary text-secondary" />
                ))}
              </div>
              <span className="text-muted-foreground font-medium">Trusted by 500+ Students</span>
            </div>

            <h1 className="text-5xl lg:text-7xl font-display font-bold mb-6 fade-in">
              <span className="text-gradient-primary">Monisha</span>
              <br />
              <span className="text-foreground">Aari Designer</span>
            </h1>

            <p className="text-xl lg:text-2xl text-muted-foreground mb-8 slide-up">
              Transform your creativity into a thriving business with our comprehensive aari embroidery classes
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8 bounce-in">
              <button 
                onClick={() => scrollToSection('courses')}
                className="btn-primary inline-flex items-center justify-center space-x-2"
              >
                <span>Join Our Classes</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-outline inline-flex items-center justify-center space-x-2"
              >
                <Instagram className="w-5 h-5" />
                <span>Follow on Instagram</span>
              </a>
            </div>

            {/* Key Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 fade-in">
              <div className="text-center lg:text-left">
                <div className="counter">45+</div>
                <p className="text-muted-foreground font-medium">Stitches to Learn</p>
              </div>
              <div className="text-center lg:text-left">
                <div className="counter">₹7,000</div>
                <p className="text-muted-foreground font-medium">Worth of Skills</p>
              </div>
              <div className="text-center lg:text-left">
                <div className="counter">100%</div>
                <p className="text-muted-foreground font-medium">Lifetime Support</p>
              </div>
            </div>
          </div>

          <div className="hidden lg:block">
            <div className="relative">
              <div className="bg-gradient-soft rounded-3xl p-8 shadow-elegant">
                <h3 className="text-2xl font-display font-semibold mb-6 text-center text-gradient-primary">
                  Why Choose Our Classes?
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-foreground">No prior tailoring knowledge required</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-foreground">Theory + Practical training</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-foreground">Lifetime doubt clarification</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-foreground">Start your boutique journey</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;