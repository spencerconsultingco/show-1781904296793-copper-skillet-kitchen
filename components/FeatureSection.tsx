'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
import { CheckCircle, ArrowRight } from 'lucide-react';

const pillars = [
  'Ingredients sourced from three local farms within 40 miles',
  'Every dish made from scratch -- no frozen shortcuts, ever',
  'Marco personally oversees every menu and every plate',
  'Reflecting the season and the region in each bite',
  'Serving the Tucson community since 2014',
  'Regulars know us by name, first-timers feel like family',
];

export default function FeatureSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  const imageRef = useRef<HTMLDivElement>(null);
  const imageInView = useInView(imageRef, { once: true, margin: '-60px' });

  return (
    <section id="feature" className="py-24 md:py-32 bg-brand-primary overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div ref={imageRef} className="relative">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={imageInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="relative rounded-3xl overflow-hidden aspect-[4/5] shadow-2xl"
            >
              <Image
                src="/images/gallery-1.jpg"
                alt="Marco preparing a Sonoran dish in the Copper Skillet Kitchen"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-primary/60 via-transparent to-transparent" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={imageInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="absolute -bottom-6 -right-4 md:right-0 bg-brand-accent rounded-2xl px-6 py-5 shadow-2xl max-w-[200px]"
            >
              <p className="font-heading text-3xl font-800 text-white leading-none">10+</p>
              <p className="font-body text-white/85 text-sm font-500 mt-1 leading-snug">Years Serving Tucson</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={imageInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.7, delay: 0.55 }}
              className="absolute -top-4 -right-4 md:right-0 bg-white rounded-2xl px-6 py-4 shadow-xl max-w-[210px]"
            >
              <p className="font-heading text-3xl font-800 text-brand-primary leading-none">3</p>
              <p className="font-body text-brand-text/70 text-sm font-500 mt-1 leading-snug">Local Farm Partners</p>
            </motion.div>
          </div>

          <div ref={ref}>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-brand-accent font-body font-500 text-sm tracking-[0.2em] uppercase mb-4"
            >
              Why Copper Skillet
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-heading text-4xl md:text-5xl font-700 text-white leading-tight mb-6"
            >
              Honest Food,
              <br />
              <span className="text-brand-accent">Real Ingredients,</span>
              <br />
              No Shortcuts.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-white/70 font-body font-300 text-lg leading-relaxed mb-10"
            >
              Copper Skillet Kitchen was built on a simple belief: food should taste like someone actually cared about making it. Marco sources every ingredient with intention, cooks every dish from scratch, and keeps the menu rooted in the flavors that make Southern Arizona feel like home.
            </motion.p>

            <ul className="space-y-4 mb-10">
              {pillars.map((pillar, index) => (
                <motion.li
                  key={pillar}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.15 * index + 0.3 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle className="w-5 h-5 text-brand-accent flex-shrink-0 mt-0.5" strokeWidth={2} />
                  <span className="text-white/80 font-body font-400 text-base leading-relaxed">{pillar}</span>
                </motion.li>
              ))}
            </ul>

            <motion.a
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8 }}
              href="#contact"
              className="group inline-flex items-center gap-2 bg-brand-accent hover:bg-white text-white hover:text-brand-primary font-body font-600 text-base px-8 py-4 rounded-full transition-all duration-300 hover:shadow-xl"
            >
              Contact Us
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" strokeWidth={2} />
            </motion.a>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-20 md:mt-28 relative rounded-3xl overflow-hidden aspect-[21/9] shadow-2xl hidden md:block"
        >
          <Image
            src="/images/gallery-2.jpg"
            alt="Copper Skillet Kitchen dining room and fresh dishes"
            fill
            className="object-cover object-center"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-primary/70 via-transparent to-transparent" />
          <div className="absolute inset-0 flex items-center">
            <div className="px-12">
              <p className="font-heading text-3xl md:text-4xl font-700 text-white max-w-md leading-tight">
                Farm-to-table flavors, Sonoran style.
              </p>
              <a
                href="#contact"
                className="mt-6 inline-flex items-center gap-2 bg-brand-accent hover:bg-white text-white hover:text-brand-primary font-body font-600 text-sm px-7 py-3.5 rounded-full transition-all duration-300"
              >
                Contact Us
                <ArrowRight className="w-4 h-4" strokeWidth={2} />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
