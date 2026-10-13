import { useState } from 'react';
import { MapPin, Phone, Mail, Instagram, Send, Clock, MessageCircle } from 'lucide-react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', phone: '', email: '', message: '' });
    // You could add a toast notification here
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-display font-bold mb-6 text-gradient-primary fade-in">
            Get In Touch
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto slide-up">
            Ready to start your aari embroidery journey? Contact us today to learn more about our classes
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="card-elegant">
              <h3 className="text-2xl font-display font-semibold mb-6 text-gradient-primary">
                Visit Our Studio
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Address</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      No. 78/2, 1st Floor, NH Office Opposite,<br />
                      Anna Silai, New Vellore Road,<br />
                      Arcot – 632503, Tamil Nadu
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Phone className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Phone</h4>
                    <a 
                      href="tel:+919876543210" 
                      className="text-primary hover:text-primary-glow transition-colors duration-300"
                    >
                      +91 98765 43210
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Mail className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Email</h4>
                    <a 
                      href="mailto:monisha.aari@gmail.com" 
                      className="text-primary hover:text-primary-glow transition-colors duration-300"
                    >
                      monisha.aari@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Clock className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Class Timings</h4>
                    <div className="text-muted-foreground">
                      <p>Morning: 9:00 AM - 12:00 PM</p>
                      <p>Evening: 2:00 PM - 5:00 PM</p>
                      <p>Weekend batches available</p>
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Instagram className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Social Media</h4>
                    <a 
                      href="https://instagram.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-primary hover:text-primary-glow transition-colors duration-300"
                    >
                      @MonishaAariDesigner
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="card-elegant">
              <h4 className="text-xl font-display font-semibold mb-4 text-foreground">
                Find Us Here
              </h4>
              <div className="aspect-video bg-gradient-to-br from-accent to-accent-soft rounded-xl overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3903.7751935094567!2d79.31919931483445!3d12.90395059090456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52f4f4f4f4f4f4%3A0x4f4f4f4f4f4f4f4f!2sArcot%2C%20Tamil%20Nadu%20632503!5e0!3m2!1sen!2sin!4v1635151234567!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Monisha Aari Designer Location"
                />
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="card-elegant">
            <h3 className="text-2xl font-display font-semibold mb-6 text-gradient-primary">
              Send Us a Message
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-border rounded-xl bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-border rounded-xl bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                  placeholder="Enter your phone number"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-border rounded-xl bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                  placeholder="Enter your email address"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-border rounded-xl bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 resize-none"
                  placeholder="Tell us about your interest in aari embroidery..."
                />
              </div>

              <button
                type="submit"
                className="btn-primary w-full inline-flex items-center justify-center space-x-2"
              >
                <Send className="w-5 h-5" />
                <span>Send Message</span>
              </button>
            </form>

            <div className="mt-8 p-6 bg-gradient-hero rounded-xl">
              <div className="flex items-center space-x-3 mb-3">
                <MessageCircle className="w-6 h-6 text-primary" />
                <h4 className="font-semibold text-foreground">Quick Response</h4>
              </div>
              <p className="text-muted-foreground">
                We typically respond to all inquiries within 24 hours. For urgent matters, please call us directly.
              </p>
            </div>
          </div>
        </div>

        {/* WhatsApp CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-3xl p-8 text-center inline-block">
            <MessageCircle className="w-16 h-16 text-white mx-auto mb-6" />
            <h3 className="text-3xl font-display font-bold text-white mb-4">
              Chat with Us on WhatsApp
            </h3>
            <p className="text-lg text-white/90 mb-8 max-w-md">
              Get instant answers to your questions and quick enrollment assistance
            </p>
            <a 
              href="https://wa.me/919876543210" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white text-green-600 px-8 py-3 rounded-full font-medium transition-all duration-300 hover:shadow-glow hover:scale-105 inline-flex items-center space-x-2"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Start WhatsApp Chat</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;