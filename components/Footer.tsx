import { Utensils, Phone, Clock, MapPin } from 'lucide-react';

export default function Footer() {
  const navLinks = [
    { href: '#services', label: 'Our Menu' },
    { href: '#feature', label: 'Our Story' },
    { href: '#testimonials', label: 'Reviews' },
    { href: '#contact', label: 'Visit Us' },
  ];

  const services = [
    'Lunch and Dinner',
    'Weekend Brunch',
    'Private Event Hosting',
    'Corporate Catering',
    'Takeout and Curbside',
    "Chef's Tasting Menu",
  ];

  return (
    <footer className="bg-brand-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12">
          <div className="lg:col-span-1">
            <a href="#" className="flex items-center gap-3 mb-5">
              <div className="w-9 h-9 rounded-full bg-brand-accent flex items-center justify-center flex-shrink-0">
                <Utensils className="w-5 h-5 text-brand-primary" strokeWidth={2} />
              </div>
              <span className="font-heading text-lg font-700 text-white leading-tight">
                Copper Skillet Kitchen
              </span>
            </a>
            <p className="font-body font-300 text-white/60 text-sm leading-relaxed mb-6">
              Scratch-made Sonoran comfort food served fresh daily in Tucson, Arizona. Family-run since 2014.
            </p>
            <a
              href="tel:5558891322"
              className="flex items-center gap-2 text-brand-accent hover:text-white font-body font-500 text-sm transition-colors duration-200"
            >
              <Phone className="w-4 h-4" strokeWidth={2} />
              (555) 889-1322
            </a>
          </div>

          <div>
            <h4 className="font-heading text-base font-700 text-white mb-5">Quick Links</h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="font-body font-300 text-white/60 hover:text-brand-accent text-sm transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-base font-700 text-white mb-5">What We Serve</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <span className="font-body font-300 text-white/60 text-sm">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-base font-700 text-white mb-5">Find Us</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-brand-accent flex-shrink-0 mt-0.5" strokeWidth={1.5} />
                <div>
                  <p className="font-body font-300 text-white/60 text-sm">Tucson, AZ</p>
                  <p className="font-body font-300 text-white/40 text-xs mt-0.5">
                    Serving Marana, Oro Valley, Sahuarita
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-brand-accent flex-shrink-0 mt-0.5" strokeWidth={1.5} />
                <div>
                  <p className="font-body font-300 text-white/60 text-sm">Tue to Sun, 11am to 9pm</p>
                  <p className="font-body font-300 text-white/40 text-xs mt-0.5">Closed Mondays</p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-brand-accent hover:bg-brand-secondary text-white font-body font-600 text-sm px-6 py-3 rounded-full transition-all duration-300"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-body font-300 text-white/40 text-sm text-center sm:text-left">
            &copy; {new Date().getFullYear()} Copper Skillet Kitchen. All rights reserved.
          </p>
          <a
            href="https://thesitesmith.co"
            target="_blank"
            rel="noopener noreferrer"
            className="font-body font-300 text-white/40 hover:text-brand-accent text-sm transition-colors duration-200"
          >
            Website by The Sitesmith
          </a>
        </div>
      </div>
    </footer>
  );
}
