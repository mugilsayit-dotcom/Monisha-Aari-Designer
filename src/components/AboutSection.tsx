import { Award, Users, Clock, Heart } from 'lucide-react';

const AboutSection = () => {
  const stats = [
    {
      icon: <Users className="w-8 h-8 text-primary" />,
      number: "500+",
      label: "Happy Students"
    },
    {
      icon: <Award className="w-8 h-8 text-primary" />,
      number: "10+",
      label: "Years Experience"
    },
    {
      icon: <Clock className="w-8 h-8 text-primary" />,
      number: "1000+",
      label: "Hours Taught"
    },
    {
      icon: <Heart className="w-8 h-8 text-primary" />,
      number: "100%",
      label: "Satisfaction Rate"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-soft">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-display font-bold mb-6 text-gradient-primary fade-in">
            About Monisha Aari Designer
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto slide-up">
            Empowering women through the beautiful art of aari embroidery
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* About Content */}
          <div className="order-2 lg:order-1">
            <div className="bg-background rounded-3xl p-8 lg:p-12 shadow-elegant">
              <h3 className="text-3xl font-display font-semibold mb-6 text-gradient-primary">
                Our Story
              </h3>
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p>
                  Welcome to Monisha Aari Designer, where passion meets craftsmanship. With over a decade of experience in the art of aari embroidery, I have dedicated my life to preserving and sharing this beautiful traditional craft.
                </p>
                <p>
                  What started as a personal passion has grown into a mission to empower women by teaching them valuable skills that can transform their lives. Our comprehensive training program is designed to take complete beginners and turn them into confident aari embroidery artists.
                </p>
                <p>
                  We believe that every woman has the potential to create beautiful art and build a successful business from home. Through our carefully crafted curriculum, personalized attention, and lifetime support, we ensure that each student not only learns the techniques but also gains the confidence to pursue their entrepreneurial dreams.
                </p>
              </div>

              <div className="mt-8 p-6 bg-gradient-hero rounded-2xl">
                <h4 className="font-display font-semibold text-lg mb-3 text-foreground">
                  Our Mission
                </h4>
                <p className="text-muted-foreground leading-relaxed">
                  To preserve the traditional art of aari embroidery while empowering modern women with skills that can provide financial independence and creative fulfillment.
                </p>
              </div>
            </div>
          </div>

          {/* Stats and Achievements */}
          <div className="order-1 lg:order-2">
            <div className="space-y-8">
              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                  <div 
                    key={index} 
                    className="card-feature"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="mb-4">{stat.icon}</div>
                    <div className="counter text-2xl lg:text-3xl">{stat.number}</div>
                    <p className="text-muted-foreground font-medium">{stat.label}</p>
                  </div>
                ))}
              </div>

              {/* Why Choose Us */}
              <div className="card-elegant">
                <h4 className="text-2xl font-display font-semibold mb-6 text-gradient-primary">
                  Why Choose Our Classes?
                </h4>
                <ul className="space-y-4">
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <strong className="text-foreground">Expert Guidance:</strong>
                      <span className="text-muted-foreground"> Learn from a master craftsperson with years of experience</span>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <strong className="text-foreground">Personalized Attention:</strong>
                      <span className="text-muted-foreground"> Small batch sizes ensure individual focus for every student</span>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <strong className="text-foreground">Comprehensive Curriculum:</strong>
                      <span className="text-muted-foreground"> From basics to advanced techniques, we cover everything</span>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <strong className="text-foreground">Business Support:</strong>
                      <span className="text-muted-foreground"> Guidance on starting your own embroidery business</span>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Call to Action */}
              <div className="text-center">
                <button className="btn-primary">
                  Start Your Journey Today
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="mt-20">
          <h3 className="text-3xl font-display font-semibold text-center mb-12 text-gradient-primary">
            Our Values
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-glow rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="w-8 h-8 text-primary-foreground" />
              </div>
              <h4 className="text-xl font-display font-semibold mb-4 text-foreground">Passion</h4>
              <p className="text-muted-foreground leading-relaxed">
                We are passionate about preserving traditional arts and sharing them with the next generation.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-secondary to-secondary-light rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-secondary-foreground" />
              </div>
              <h4 className="text-xl font-display font-semibold mb-4 text-foreground">Community</h4>
              <p className="text-muted-foreground leading-relaxed">
                We believe in building a supportive community of artists who inspire and help each other grow.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-accent to-primary-light rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="w-8 h-8 text-accent-foreground" />
              </div>
              <h4 className="text-xl font-display font-semibold mb-4 text-foreground">Excellence</h4>
              <p className="text-muted-foreground leading-relaxed">
                We strive for excellence in everything we do, from teaching methods to student support.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;