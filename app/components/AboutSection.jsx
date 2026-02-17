"use client"
import { motion } from 'framer-motion';

export default function AboutSection({ aboutRef }) {
  return (
    <section 
      ref={aboutRef}
      className="py-16 px-4 bg-linear-to-t from-black to-gray-900 min-h-screen flex items-center"
    >
      <motion.div 
        initial={{ opacity: 0, y: 48 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1 }}
        className="max-w-4xl mx-auto text-center"
      >
        <motion.h2 
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-serif mb-6"
        >
          The Liora Philosophy
        </motion.h2>
        <motion.div 
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="h-1 w-64 bg-gradient-to-r from-transparent via-amber-300 to-transparent mx-auto mb-8"
        ></motion.div>
        <motion.p 
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl text-amber-100 mb-6"
        >
          At Liora, we believe makeup is an art form—a way to express your 
          inner radiance and confidence. Our black and gold collection 
          embodies sophistication, luxury, and timeless beauty.
        </motion.p>
        <motion.p 
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-lg text-amber-200 mb-6"
        >
          Each product is carefully crafted with premium ingredients, 
          designed to make you feel as luxurious as you look.
        </motion.p>
        <motion.div 
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="h-1 w-64 bg-gradient-to-r from-transparent via-amber-300 to-transparent mx-auto mb-8"
        ></motion.div>
      </motion.div>
    </section>
  );
}
