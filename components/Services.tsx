'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Utensils, Coffee, Users, Briefcase, Heart, Sparkles } from 'lucide-react';

const services = [
  {
    icon: Utensils,
    title: 'Lunch and Dinner',
    description:
      'Enjoy a full menu of Sonoran-inspired comfort food served daily. From green chile posole to slow-braised short ribs, every dish is made from scratch and built to satisfy.',
  },
  {
    icon: Coffee,
    title: 'Weekend Brunch',
    description:
      'Our Saturday and Sunday brunch brings the best of both worlds: classic morning favorites reimagined with Southwestern ingredients and Marco\'s signature touch.',
  },
  {
    icon: Users,
    title: 'Private Event Hosting',
    description:
      'Host your next birthday, anniversary, or family celebration with us. We create a warm, personalized experience your guests will talk about long after the plates are cleared.',
  },
  {
    icon: Briefcase,
    title: 'Corporate and Social Catering',
    description:
      'From office luncheons to wedding receptions, our catering team delivers the same scratch-made quality you love at Copper Skillet right to your venue, hot and on time.',
  },
  {
    icon: Heart,
    title: 'Takeout and Curbside Pickup',
    description:
      'Same great food, at your pace. Call ahead and your order will be ready warm and packed with care for pickup at your convenience -- no compromises on quality.',
  },
  {
    icon: Sparkles,
    title: "Chef's Seasonal Tasting Menu",
    description:
      'Marco curates a rotating tasting menu built around what is fresh and in season from our farm partners. A guided, intimate experience of the very best the Sonoran table has to offer.',
  },
];

export default function Services() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="services" className="py-24 md:py-32 bg-brand-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className="text-center mb-16 md:mb-20">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-brand-accent font-body font-500 text-sm tracking-[0.2em] uppercase mb-3"
          >
            What We Serve
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-heading text-4xl md:text-5xl font-700 text-brand-primary leading-tight"
          >
            A Full Table,
            <br />
            <span className="text-brand-secondary">Every Day of the Week</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-5 text-brand-text/70 font-body font-300 text-lg max-w-2xl mx-auto leading-relaxed"
          >
            Whether you come for a quiet lunch, a weekend brunch with friends, or need someone to feed a crowd, Copper Skillet Kitchen has you covered with honest, made-from-scratch food.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 * index + 0.2 }}
                className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl border border-brand-accent/10 hover:border-brand-accent/30 transition-all duration-400"
              >
                <div className="w-12 h-12 rounded-xl bg-brand-accent/10 flex items-center justify-center mb-5 group-hover:bg-brand-accent group-hover:scale-110 transition-all duration-300">
                  <Icon className="w-6 h-6 text-brand-accent group-hover:text-white transition-colors duration-300" strokeWidth={1.5} />
                </div>
                <h3 className="font-heading text-xl font-700 text-brand-primary mb-3 leading-snug">
                  {service.title}
                </h3>
                <p className="text-brand-text/65 font-body font-300 text-base leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
