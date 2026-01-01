import { Linkedin, Twitter, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Logo from '@/components/Logo';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 border-t border-blue-900/50">
      <div className="container mx-auto px-4 md:px-8 py-12">
       <div className="grid md:grid-cols-5 gap-8 mb-8">

          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <Logo size="lg" />
            </div>
            <p className="text-slate-400 max-w-md mb-8 leading-relaxed">
              Enterprise-grade IT consulting and solutions. We architect robust digital infrastructure that powers business transformation and drives sustainable growth.
            </p>
            {/* Social Links */}
            <div className="flex gap-4">
              <a
                href="#"
                className="w-12 h-12 rounded-xl bg-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-blue-600 transition-all duration-300 group"
                aria-label="LinkedIn"
              >
                <div className="relative">
                  <div className="absolute inset-0 bg-blue-600 rounded-xl opacity-0 group-hover:opacity-20 transition-opacity" />
                  <Linkedin className="w-6 h-6 relative z-10" />
                </div>
              </a>
              <a
                href="#"
                className="w-12 h-12 rounded-xl bg-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-sky-500 transition-all duration-300 group"
                aria-label="Twitter"
              >
                <div className="relative">
                  <div className="absolute inset-0 bg-sky-500 rounded-xl opacity-0 group-hover:opacity-20 transition-opacity" />
                  <Twitter className="w-6 h-6 relative z-10" />
                </div>
              </a>
              <a
                href="#"
                className="w-12 h-12 rounded-xl bg-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-gray-600 transition-all duration-300 group"
                aria-label="GitHub"
              >
                <div className="relative">
                  <div className="absolute inset-0 bg-gray-600 rounded-xl opacity-0 group-hover:opacity-20 transition-opacity" />
                  <Github className="w-6 h-6 relative z-10" />
                </div>
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <div className="flex flex-col">
            <h4 className="font-semibold text-white mb-6">Services</h4>
            <ul className="space-y-3">
              {['Enterprise Software', 'Cloud Infrastructure', 'Cybersecurity', 'AI & Automation', 'Data Analytics'].map((service) => (
                <li key={service}>
                  <a
                    href="#services"
                    className="text-slate-400 hover:text-white transition-colors duration-300"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div></div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-white mb-6">Company</h4>
            <ul className="space-y-3">
              {['About Us', 'Case Studies', 'Careers', 'Blog', 'Contact'].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase().replace(' ', '-')}`}
                    className="text-slate-400 hover:text-white transition-colors duration-300"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

         {/* Newsletter */}
<div className="flex flex-col">
  <h4 className="font-semibold text-white mb-6">Stay Updated</h4>

  <div className="max-w-xs space-y-3">
    <p className="text-slate-400 text-xs leading-relaxed">
      Subscribe to our newsletter for latest insights
    </p>

    <div className="flex gap-2">
      <input
        type="email"
        placeholder="Email"
        className="w-full px-2 py-1.5 rounded-md bg-slate-700 border border-slate-600 text-white placeholder-slate-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-500/20 outline-none transition-all text-xs h-8"
      />
    </div>

    <Button
      variant="default"
      className="w-fit bg-blue-600 hover:bg-blue-700 text-white px-4 py-1.5 text-xs h-8"
    >
      Subscribe
    </Button>
  </div>
</div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-blue-900/30 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-slate-400 text-sm">
            © {currentYear} Orbit Tech. All rights reserved.
          </p>
          <div className="flex gap-8 text-sm text-slate-400">
            <a href="#" className="hover:text-white transition-colors duration-300">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors duration-300">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors duration-300">Compliance</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
