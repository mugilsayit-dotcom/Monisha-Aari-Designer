import { CheckCircle, Award, Clock, Users, Infinity, BookOpen } from 'lucide-react';

const CourseSection = () => {
  const benefits = [
    {
      icon: <Award className="w-8 h-8 text-primary" />,
      title: "45+ Stitches",
      description: "Master over 45 different aari embroidery stitches from basic to advanced level"
    },
    {
      icon: <Clock className="w-8 h-8 text-primary" />,
      title: "₹7,000 Worth Skills",
      description: "Learn valuable skills that can help you earn ₹7,000+ monthly from home"
    },
    {
      icon: <BookOpen className="w-8 h-8 text-primary" />,
      title: "Theory + Practical",
      description: "Comprehensive training with both theoretical knowledge and hands-on practice"
    },
    {
      icon: <Users className="w-8 h-8 text-primary" />,
      title: "No Prerequisites",
      description: "No prior tailoring or embroidery knowledge required - beginners welcome!"
    },
    {
      icon: <Infinity className="w-8 h-8 text-primary" />,
      title: "Lifetime Support",
      description: "Get lifetime doubt clarification and support from our expert instructors"
    },
    {
      icon: <CheckCircle className="w-8 h-8 text-primary" />,
      title: "Certificate",
      description: "Receive a professional certificate upon successful completion of the course"
    }
  ];

  const features = [
    "Small batch sizes for personalized attention",
    "Flexible timing options available",
    "All materials and tools provided",
    "Practice sessions included",
    "Portfolio development guidance",
    "Business setup consultation"
  ];

  return (
    <section id="courses" className="py-20 bg-gradient-soft">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-display font-bold mb-6 text-gradient-primary fade-in">
            Course Details & Benefits
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto slide-up">
            Transform your passion for embroidery into a profitable skill with our comprehensive aari designing course
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="card-feature fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-display font-semibold mb-3 text-foreground">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        {/* Course Features */}
        <div className="bg-background rounded-3xl p-8 lg:p-12 shadow-elegant">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-display font-semibold mb-6 text-gradient-primary">
                What Makes Our Course Special?
              </h3>
              <ul className="space-y-4">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-foreground leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-gradient-hero rounded-2xl p-8 text-center">
              <h4 className="text-2xl font-display font-semibold mb-4 text-foreground">
                Start Your Boutique Journey Today!
              </h4>
              <p className="text-lg text-muted-foreground mb-6">
                Join hundreds of successful students who have transformed their lives through aari embroidery
              </p>
              <div className="space-y-4">
                <div className="bg-background/80 rounded-xl p-4">
                  <div className="text-3xl font-bold text-primary">Basic Level</div>
                  <div className="text-muted-foreground">Perfect for beginners</div>
                </div>
                <button className="btn-primary w-full">
                  Enroll Now
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-primary rounded-3xl p-8 lg:p-12 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary-glow opacity-90"></div>
            <div className="relative z-10">
              <h3 className="text-3xl lg:text-4xl font-display font-bold text-primary-foreground mb-4">
                Ready to Begin Your Creative Journey?
              </h3>
              <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
                Don't wait! Limited seats available. Start learning today and unlock your potential in aari embroidery.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-background text-primary px-8 py-3 rounded-full font-medium transition-all duration-300 hover:shadow-glow hover:scale-105">
                  Contact Us Now
                </button>
                <button className="border-2 border-primary-foreground text-primary-foreground px-8 py-3 rounded-full font-medium transition-all duration-300 hover:bg-primary-foreground hover:text-primary hover:scale-105">
                  View Gallery
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseSection;