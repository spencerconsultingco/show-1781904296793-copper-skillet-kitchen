'use client';

import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Phone, Mail, Clock, MapPin, Send } from 'lucide-react';

export default function Contact() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-brand-secondary/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-brand-accent font-body font-500 text-sm tracking-[0.2em] uppercase mb-3"
            >
              Reach Out
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-heading text-4xl md:text-5xl font-700 text-brand-primary leading-tight mb-5"
            >
              Come Find Us
              <br />
              <span className="text-brand-secondary">in Tucson</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-brand-text/70 font-body font-300 text-lg leading-relaxed mb-10"
            >
              Whether you want to book a private event, arrange catering for your business, or just want to know what is on the seasonal menu, we are happy to hear from you.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-6"
            >
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-brand-accent/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-brand-accent" strokeWidth={1.5} />
                </div>
                <div>
                  <p className="font-body font-600 text-brand-primary text-sm mb-0.5">Phone</p>
                  <a
                    href="tel:5558891322"
                    className="font-body font-300 text-brand-text/70 text-base hover:text-brand-accent transition-colors duration-200"
                  >
                    (555) 889-1322
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-brand-accent/10 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5 text-brand-accent" strokeWidth={1.5} />
                </div>
                <div>
                  <p className="font-body font-600 text-brand-primary text-sm mb-0.5">Hours</p>
                  <p className="font-body font-300 text-brand-text/70 text-base">Tue to Sun, 11am to 9pm</p>
                  <p className="font-body font-300 text-brand-text/50 text-sm mt-0.5">Closed Mondays</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-brand-accent/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-brand-accent" strokeWidth={1.5} />
                </div>
                <div>
                  <p className="font-body font-600 text-brand-primary text-sm mb-0.5">Location</p>
                  <p className="font-body font-300 text-brand-text/70 text-base">Tucson, AZ</p>
                  <p className="font-body font-300 text-brand-text/50 text-sm mt-0.5">
                    Serving Marana, Oro Valley, and Sahuarita
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-brand-accent/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-brand-accent" strokeWidth={1.5} />
                </div>
                <div>
                  <p className="font-body font-600 text-brand-primary text-sm mb-0.5">Email</p>
                  <p className="font-body font-300 text-brand-text/70 text-base">
                    Use the form to reach our team directly.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="bg-white rounded-3xl p-8 md:p-10 shadow-lg border border-brand-accent/10">
              {submitted ? (
                <div className="flex flex-col items-center justify-center text-center py-12">
                  <div className="w-16 h-16 rounded-full bg-brand-accent/10 flex items-center justify-center mb-5">
                    <Send className="w-8 h-8 text-brand-accent" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-heading text-2xl font-700 text-brand-primary mb-3">
                    Message Received!
                  </h3>
                  <p className="font-body font-300 text-brand-text/70 text-base leading-relaxed">
                    Thank you for reaching out to Copper Skillet Kitchen. We will be in touch shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <h3 className="font-heading text-2xl font-700 text-brand-primary mb-6">
                    Send Us a Message
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block font-body font-500 text-brand-primary text-sm mb-2" htmlFor="name">
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        className="w-full px-4 py-3 rounded-xl border border-brand-accent/20 focus:border-brand-accent focus:outline-none focus:ring-2 focus:ring-brand-accent/20 font-body font-300 text-brand-text text-base bg-brand-background transition-all duration-200"
                      />
                    </div>
                    <div>
                      <label className="block font-body font-500 text-brand-primary text-sm mb-2" htmlFor="phone">
                        Phone
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="(555) 000-0000"
                        className="w-full px-4 py-3 rounded-xl border border-brand-accent/20 focus:border-brand-accent focus:outline-none focus:ring-2 focus:ring-brand-accent/20 font-body font-300 text-brand-text text-base bg-brand-background transition-all duration-200"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block font-body font-500 text-brand-primary text-sm mb-2" htmlFor="email">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      className="w-full px-4 py-3 rounded-xl border border-brand-accent/20 focus:border-brand-accent focus:outline-none focus:ring-2 focus:ring-brand-accent/20 font-body font-300 text-brand-text text-base bg-brand-background transition-all duration-200"
                    />
                  </div>

                  <div>
                    <label className="block font-body font-500 text-brand-primary text-sm mb-2" htmlFor="message">
                      How Can We Help?
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your event, catering needs, or any questions..."
                      className="w-full px-4 py-3 rounded-xl border border-brand-accent/20 focus:border-brand-accent focus:outline-none focus:ring-2 focus:ring-brand-accent/20 font-body font-300 text-brand-text text-base bg-brand-background transition-all duration-200 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 bg-brand-accent hover:bg-brand-secondary text-white font-body font-600 text-base px-8 py-4 rounded-xl transition-all duration-300 hover:shadow-lg"
                  >
                    <Send className="w-5 h-5" strokeWidth={1.5} />
                    Contact Us
                  </button>

                  <p className="text-brand-text/40 font-body font-300 text-xs text-center">
                    We respond within 24 hours during business hours.
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
