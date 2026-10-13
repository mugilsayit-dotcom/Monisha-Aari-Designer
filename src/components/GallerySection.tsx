import { Instagram, Heart, MessageCircle, Sparkles, TrendingUp } from 'lucide-react';

const GallerySection = () => {
  // Real gallery items with uploaded aari embroidery images
  const galleryItems = [
    {
      id: 1,
      title: "Maroon Velvet Blouse",
      description: "Intricate floral patterns with gold thread work on maroon velvet",
      image: "/gallery-images/f1580368-09da-4fb8-a445-f2ec72d31985.png",
      likes: 156,
      comments: 23,
      trending: true
    },
    {
      id: 2,
      title: "Emerald Stone Work",
      description: "Traditional paisley design with emerald stone embellishment",
      image: "/gallery-images/31dd266e-9076-4f37-8d0d-df0fc1d41dad.png",
      likes: 134,
      comments: 18,
      trending: false
    },
    {
      id: 3,
      title: "Pink Geometric Design",
      description: "Contemporary geometric patterns with golden embellishment",
      image: "/gallery-images/c5490167-eede-4da7-834c-8422ad268557.png",
      likes: 189,
      comments: 31,
      trending: true
    },
    {
      id: 4,
      title: "Bridal Red Collection",
      description: "Rich red bridal blouse with heavy gold work and brocade",
      image: "/gallery-images/114f5529-7f32-4624-afb3-0873d47f278c.png",
      likes: 167,
      comments: 25,
      trending: false
    },
    {
      id: 5,
      title: "Green Designer Blouse",
      description: "Elegant green blouse with floral motifs and golden beadwork",
      image: "/gallery-images/533d2b70-ff69-4eb9-b9ac-9e2930756d05.png",
      likes: 142,
      comments: 19,
      trending: true
    },
    {
      id: 6,
      title: "Burgundy Bridal Blouse",
      description: "Exquisite burgundy blouse with golden floral embroidery and traditional jewelry set",
      image: "/gallery-images/91ebdfeb-b954-43b4-9f68-4155822eb83e.png",
      likes: 203,
      comments: 28,
      trending: true
    }
  ];

  return (
    <section id="gallery" className="py-24 bg-gradient-to-br from-background via-accent-soft/20 to-background">
      <div className="container mx-auto px-4">
        {/* Modern Header with Glassmorphism */}
        <div className="text-center mb-20 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 rounded-3xl blur-3xl -z-10"></div>
          <div className="relative bg-card/30 backdrop-blur-sm border border-primary/20 rounded-3xl p-12 mx-auto max-w-4xl">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Sparkles className="w-8 h-8 text-primary animate-pulse" />
              <h2 className="text-5xl lg:text-6xl font-display font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                Artistry Showcase
              </h2>
              <Sparkles className="w-8 h-8 text-secondary animate-pulse" />
            </div>
            <p className="text-xl text-muted-foreground/80 leading-relaxed">
              ✨ Discover trending embroidery masterpieces that inspire creativity ✨
            </p>
          </div>
        </div>

        {/* Modern Masonry-style Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {galleryItems.map((item, index) => (
            <div 
              key={item.id} 
              className={`group relative overflow-hidden bg-card/50 backdrop-blur-sm border border-primary/10 
                hover:border-primary/30 transition-all duration-700 hover:shadow-glow hover:-translate-y-2
                ${index % 3 === 0 ? 'rounded-tl-3xl rounded-br-3xl' : 
                  index % 3 === 1 ? 'rounded-tr-3xl rounded-bl-3xl' : 'rounded-2xl'}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Trending Badge */}
              {item.trending && (
                <div className="absolute top-4 right-4 z-20 bg-gradient-to-r from-secondary to-accent text-accent-foreground px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1">
                  <TrendingUp className="w-3 h-3" />
                  Trending
                </div>
              )}
              
              {/* Real Aari Embroidery Images */}
              <div className="aspect-[4/5] bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 relative overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                
                {/* Gradient Overlay on Hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              </div>
              
              {/* Modern Content Card */}
              <div className="p-6 space-y-4">
                <div className="space-y-2">
                  <h3 className="font-display font-bold text-xl bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
                
                {/* Modern Social Stats */}
                <div className="flex items-center justify-between pt-4 border-t border-border/30">
                  <div className="flex items-center gap-6">
                    <div className="flex items-center gap-2 group/heart">
                      <div className="p-2 bg-primary/10 rounded-full group-hover/heart:bg-primary/20 transition-colors">
                        <Heart className="w-4 h-4 text-primary group-hover/heart:fill-primary transition-all" />
                      </div>
                      <span className="text-sm font-medium text-foreground">{item.likes}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="p-2 bg-secondary/10 rounded-full">
                        <MessageCircle className="w-4 h-4 text-secondary" />
                      </div>
                      <span className="text-sm font-medium text-foreground">{item.comments}</span>
                    </div>
                  </div>
                  <button className="p-2 bg-accent/10 rounded-full hover:bg-accent/20 transition-all duration-300 hover:scale-110">
                    <Instagram className="w-5 h-5 text-accent" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modern Instagram CTA with Floating Design */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 rounded-3xl blur-2xl"></div>
          <div className="relative bg-card/40 backdrop-blur-lg border border-primary/20 rounded-3xl p-10 lg:p-16 mx-auto max-w-2xl overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-primary/20 to-transparent rounded-full blur-2xl"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-secondary/20 to-transparent rounded-full blur-2xl"></div>
            
            <div className="relative text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-2xl mb-8 shadow-glow">
                <Instagram className="w-10 h-10 text-primary-foreground" />
              </div>
              <h3 className="text-4xl font-display font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                Join Our Creative Journey
              </h3>
              <p className="text-lg text-muted-foreground/80 mb-10 leading-relaxed">
                🌟 Daily inspiration • Behind-the-scenes • Exclusive tutorials 🌟
              </p>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-gradient-to-r from-primary to-secondary text-primary-foreground px-8 py-4 rounded-2xl font-semibold hover:shadow-glow hover:scale-105 transition-all duration-300"
              >
                <Instagram className="w-6 h-6" />
                <span>@MonishaAariDesigner</span>
                <div className="w-2 h-2 bg-primary-foreground rounded-full animate-pulse"></div>
              </a>
            </div>
          </div>
        </div>

        {/* Modern Student Testimonials */}
        <div className="mt-24">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-display font-bold mb-4 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Student Success Stories
            </h3>
            <p className="text-muted-foreground text-lg">Real transformations, real results ✨</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Priya S.",
                review: "Amazing classes! I learned so much and now I'm running my own boutique business.",
                rating: 5,
                achievement: "Started her own boutique"
              },
              {
                name: "Kavitha R.",
                review: "Monisha ma'am is an excellent teacher. Very patient and supportive throughout the course.",
                rating: 5,
                achievement: "Master craftsperson"
              },
              {
                name: "Meera K.",
                review: "Best investment I made for my career. The lifetime support is incredible!",
                rating: 5,
                achievement: "Career transformation"
              }
            ].map((testimonial, index) => (
              <div key={index} className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                <div className="relative bg-card/50 backdrop-blur-sm border border-primary/20 rounded-2xl p-6 h-full hover:border-primary/40 transition-all duration-300">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex space-x-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <div key={i} className="w-5 h-5 text-secondary animate-pulse" style={{ animationDelay: `${i * 0.1}s` }}>★</div>
                      ))}
                    </div>
                    <div className="bg-gradient-to-r from-primary/20 to-secondary/20 text-primary px-3 py-1 rounded-full text-xs font-medium">
                      {testimonial.achievement}
                    </div>
                  </div>
                  
                  <blockquote className="text-muted-foreground italic mb-6 leading-relaxed text-lg">
                    "{testimonial.review}"
                  </blockquote>
                  
                  <div className="flex items-center gap-3 pt-4 border-t border-border/30">
                    <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-primary-foreground font-bold">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div className="font-medium text-foreground">
                      {testimonial.name}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;