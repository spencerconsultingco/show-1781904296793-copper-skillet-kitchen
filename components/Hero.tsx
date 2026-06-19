'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);

  return (
    <section ref={ref} className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      <motion.div
        className="absolute inset-0 z-0"
        style={{ y: imageY }}
      >
        <motion.div
          className="absolute inset-0"
          initial={{ scale: 1 }}
          animate={{ scale: 1.08 }}
          transition={{ duration: 10, ease: 'linear' }}
        >
          <Image
            src="/images/hero.jpg"
            alt="Copper Skillet Kitchen warm kitchen ambiance"
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />
        </motion.div>
      </motion.div>

      <div
        className="absolute inset-0 z-10"
        style={{
          background: 'linear-gradient(to bottom, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0.60) 100%)',
        }}
      />

      <div className="relative z-20 text-center px-4 sm:px-6 max-w-5xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-brand-accent font-body font-500 text-sm sm:text-base tracking-[0.2em] uppercase mb-4"
        >
          Tucson, Arizona -- Est. 2014
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-heading text-5xl sm:text-6xl md:text-7xl font-800 text-white leading-tight mb-6"
        >
          Sonoran Soul,
          <br />
          <span className="text-brand-accent">Scratch-Made Daily</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.65 }}
          className="text-white/85 font-body font-300 text-lg sm:text-xl md:text-2xl max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Family-run comfort food rooted in the flavors of the Southwest, made with ingredients sourced from local farms within 40 miles of our kitchen.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.85 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#contact"
            className="group flex items-center gap-2 bg-brand-accent hover:bg-brand-secondary text-white font-body font-600 text-base px-8 py-4 rounded-full transition-all duration-300 hover:shadow-2xl hover:scale-105"
          >
            Contact Us
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" strokeWidth={2} />
          </a>
          <a
            href="#services"
            className="flex items-center gap-2 border-2 border-white/60 hover:border-brand-accent text-white hover:text-brand-accent font-body font-500 text-base px-8 py-4 rounded-full transition-all duration-300"
          >
            View Our Menu
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.3 }}
          className="mt-14 flex items-center justify-center gap-8 text-white/70 text-sm font-body"
        >
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-accent inline-block"></span>
            Tue to Sun, 11am to 9pm
          </span>
          <span className="hidden sm:flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-accent inline-block"></span>
            Weekend Brunch Available
          </span>
          <span className="hidden sm:flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-accent inline-block"></span>
            Catering Available
          </span>
        </motion.div>
      </div>
    </section>
  );
}
