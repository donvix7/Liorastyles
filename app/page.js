"use client"

import Head from 'next/head';
import { useState, useRef } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import ServiceCard from './components/ServiceCard';
import AboutSection from './components/AboutSection';
import BookingSection from './components/BookingSection';
import Footer from './components/Footer.jsx';
import { makeupServices } from './utils/data';
import { motion } from 'framer-motion';

export default function Home() {
  const [cartCount, setCartCount] = useState(0);
  
  const featuredRef = useRef(null);
  const aboutRef = useRef(null);
  const newsletterRef = useRef(null);
  const footerRef = useRef(null);

  const addToCart = () => {
    setCartCount(prev => prev + 1);
  };

  return (
    <>
      <Head>
        <title>Liora | Luxury Makeup</title>
        <meta name="description" content="Premium black and gold themed makeup brand" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navigation 
        cartCount={cartCount} 
      />
      
      <main className="min-h-screen bg-black text-amber-50">
        <Hero />
        
        {/* Featured Products Section */}
        <section 
          ref={featuredRef}
          className="py-24 px-4 max-w-7xl mx-auto"
        >
          <motion.div 
            initial={{ opacity: 0, y: 48 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl font-serif mb-6 tracking-wide">Premium Makeup Services</h2>
            <div className="flex justify-center mb-8">
              <div className="h-1 w-64 bg-linear-to-r from-transparent via-amber-500 to-transparent"></div>
            </div>
            <p className="mt-6 text-amber-200/70 max-w-2xl mx-auto text-lg font-light leading-relaxed font-sans">
              Discover our signature line of luxury makeup services, 
              where timeless elegance meets modern innovation.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {makeupServices.map((service, index) => (
              <ServiceCard 
                key={service.id}
                service={service} 
                addToCart={addToCart}
                index={index}
              />
            ))}
          </div>
        </section>
        
        <AboutSection aboutRef={aboutRef} />
        
        <BookingSection newsletterRef={newsletterRef} />
        
        <Footer footerRef={footerRef} />
      </main>
    </>
  );
}