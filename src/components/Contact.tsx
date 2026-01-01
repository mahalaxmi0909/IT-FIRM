import { useState } from 'react';
import { Send, MapPin, Phone, Mail, Clock, Calendar, MessageCircle, File } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. We'll get back to you within 24 hours.",
    });
    setFormData({ name: '', contact: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-16 relative overflow-hidden bg-slate-50">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-slate-50" />

      <div className="container mx-auto relative">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-blue-600 font-semibold text-sm tracking-wider uppercase">
            Get In Touch
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-6">
            Start Your
            <span className="gradient-text"> Transformation</span>
          </h2>
          <p className="text-slate-600 text-lg">
            Ready to elevate your IT infrastructure? Let's discuss how our enterprise solutions can address your specific challenges.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2 mb-6">
          {/* Contact Form */}
          <div className="bg-amber-50/30 rounded-2xl p-6 shadow-lg border border-blue-100">
            <h3 className="text-xl font-bold mb-6 text-slate-900">Send us a message</h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-slate-900 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all text-slate-900 placeholder-slate-500"
                  placeholder="John Smith"
                />
              </div>

              <div>
                <label htmlFor="contact" className="block text-sm font-semibold text-slate-900 mb-2">
                  Email or Phone
                </label>
                <input
                  type="text"
                  id="contact"
                  name="contact"
                  value={formData.contact}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all text-slate-900 placeholder-slate-500"
                  placeholder="john@company.com or +1 (555) 123-4567"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-slate-900 mb-2">
                  Project Details
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all resize-none text-slate-900 placeholder-slate-500"
                  placeholder="Tell us about your project requirements..."
                />
              </div>

              <Button variant="default" size="lg" type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-xl transition-all duration-300">
                Send Message
                <Send className="ml-2 w-5 h-5" />
              </Button>
            </form>
          </div>

          {/* Business Details */}
          <div className="bg-amber-50/30 rounded-2xl p-6 shadow-lg border border-blue-100">
            <h3 className="text-xl font-bold mb-6 text-slate-900">Business Details</h3>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <div className="font-semibold text-slate-900 mb-1">Headquarters</div>
                  <div className="text-slate-600">
                    123 Tech Boulevard, Suite 456<br />
                    San Francisco, CA 94105
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <div className="font-semibold text-slate-900 mb-1">Phone</div>
                  <div className="text-slate-600">+1 (555) 123-4567</div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <div className="font-semibold text-slate-900 mb-1">Email</div>
                  <div className="text-slate-600">hello@orbittech.com</div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <div className="font-semibold text-slate-900 mb-1">Business Hours</div>
                  <div className="text-slate-600">
                    Mon - Fri: 9:00 AM - 6:00 PM PST<br />
                    Emergency Support: 24/7
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Location and Quick Actions Grid */}
        <div className="grid gap-6 lg:grid-cols-2">
          {/* Location Grid */}
          <div className="bg-amber-50/30 rounded-2xl p-8 shadow-lg border border-blue-100 overflow-hidden">
            <h3 className="text-xl font-bold mb-6 text-slate-900">Our Location</h3>
            <div className="relative w-full overflow-hidden rounded-xl border border-slate-200 bg-slate-50">
              <iframe
                title="Orbit Tech Location"
                src="https://www.google.com/maps?q=San%20Francisco%20CA%2094105&output=embed"
                className="w-full h-[300px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-amber-50/30 rounded-2xl p-6 shadow-lg border border-blue-100">
            <h4 className="font-bold text-slate-900 mb-6">Quick Actions</h4>
            <div className="space-y-6 h-full">
              {/* Primary Actions */}
              <div>
                <h5 className="text-sm font-semibold text-slate-700 mb-3 uppercase tracking-wider">Get Started</h5>
                <div className="grid gap-3 grid-cols-1">
                  <a href="#" className="group p-4 bg-slate-50 rounded-lg hover:bg-blue-50 transition-all duration-300 border border-slate-200 hover:border-blue-300">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-blue-100 group-hover:bg-blue-200 flex items-center justify-center transition-colors flex-shrink-0">
                        <Calendar className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <div className="font-semibold text-slate-900">Schedule Consultation</div>
                        <div className="text-sm text-slate-600">Free 30-minute strategy session</div>
                      </div>
                    </div>
                  </a>
                  <a href="#" className="group p-4 bg-slate-50 rounded-lg hover:bg-blue-50 transition-all duration-300 border border-slate-200 hover:border-blue-300">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-blue-100 group-hover:bg-blue-200 flex items-center justify-center transition-colors flex-shrink-0">
                        <Phone className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <div className="font-semibold text-slate-900">Request Callback</div>
                        <div className="text-sm text-slate-600">We'll call you within 24 hours</div>
                      </div>
                    </div>
                  </a>
                </div>
              </div>

              {/* Support Actions */}
              <div>
                <h5 className="text-sm font-semibold text-slate-700 mb-3 uppercase tracking-wider">Support</h5>
                <div className="grid gap-3 grid-cols-2">
                  <a href="#" className="group p-3 bg-slate-50 rounded-lg hover:bg-blue-50 transition-all duration-300 border border-slate-200 hover:border-blue-300 text-center">
                    <div className="w-8 h-8 rounded-lg bg-blue-100 group-hover:bg-blue-200 flex items-center justify-center transition-colors mx-auto mb-2">
                      <MessageCircle className="w-4 h-4 text-blue-600" />
                    </div>
                    <div className="font-medium text-slate-900 text-sm">Quick Support</div>
                    <div className="text-xs text-slate-600">Get help now</div>
                  </a>
                  <a href="#" className="group p-3 bg-slate-50 rounded-lg hover:bg-blue-50 transition-all duration-300 border border-slate-200 hover:border-blue-300 text-center">
                    <div className="w-8 h-8 rounded-lg bg-blue-100 group-hover:bg-blue-200 flex items-center justify-center transition-colors mx-auto mb-2">
                      <File className="w-4 h-4 text-blue-600" />
                    </div>
                    <div className="font-medium text-slate-900 text-sm">Documentation</div>
                    <div className="text-xs text-slate-600">View guides</div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
