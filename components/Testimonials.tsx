'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Star } from 'lucide-react';

const reviews = [
  {
    name: 'Sandra M.',
    text: 'The green chile pork hash at brunch is something I dream about. Nothing else in Tucson comes close to the flavor they pull off with local ingredients.',
  },
  {
    name: 'David R.',
    text: 'We hired Copper Skillet to cater our company luncheon for 60 people and every single dish arrived hot, fresh, and absolutely delicious. Professional from start to finish.',
  },
  {
    name: 'Teresa V.',
    text: 'Marco came out to our table just to make sure the meal was right. The posole was rich and perfectly spiced, and the housemade cornbread finished us off. We will be back every week.',
  },
];

export default function Testimonials() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="testimonials" className="py-24 md:py-32 bg-brand-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-brand-accent font-body font-500 text-sm tracking-[0.2em] uppercase mb-3"
          >
            From Our Regulars
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-heading text-4xl md:text-5xl font-700 text-brand-primary leading-tight"
          >
            Tucson Keeps
            <br />
            <span className="text-brand-secondary">Coming Back</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={review.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 * index + 0.2 }}
              className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-lg border border-brand-accent/10 transition-shadow duration-300 flex flex-col"
            >
              <div className="flex gap-1 mb-5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-brand-accent text-brand-accent" strokeWidth={0} />
                ))}
              </div>
              <p className="text-brand-text/80 font-body font-300 text-base leading-relaxed flex-1 mb-6 italic">
                &ldquo;{review.text}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-brand-accent/15 flex items-center justify-center flex-shrink-0">
                  <span className="font-heading font-700 text-brand-accent text-base">
                    {review.name.charAt(0)}
                  </span>
                </div>
                <p className="font-body font-600 text-brand-primary text-sm">{review.name}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <p className="text-brand-text/60 font-body font-300 text-base mb-6">
            Join hundreds of Tucsonans who call Copper Skillet Kitchen their regular spot.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-brand-accent hover:bg-brand-secondary text-white font-body font-600 text-base px-8 py-4 rounded-full transition-all duration-300 hover:shadow-xl"
          >
            Contact Us
          </a>
        </motion.div>
      </div>
    </section>
  );
}
