"use client"

import Head from 'next/head';
import { useState, useRef, useEffect } from 'react';
import Navigation from '@/app/components/Navigation';
import Hero from '@/app/components/Hero';
import ServiceCard from '@/app/components/ServiceCard';
import BookingModal from '@/app/components/BookingModal';
import AboutSection from '@/app/components/AboutSection';
import BookingSection from '@/app/components/BookingSection';
import SiteFooter from './components/SiteFooter';
import { motion } from 'framer-motion';
import { fetchServices } from '@/app/utils/service';

export default function Home() {
  const [cartCount, setCartCount] = useState(0);
  const [services, setServices] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);
  
  const featuredRef = useRef(null);
  const aboutRef = useRef(null);
  const newsletterRef = useRef(null);
  const footerRef = useRef(null);

  useEffect(() => {
    const getServices = async () => {
      try {
        setIsLoading(true);
        const res = await fetchServices();
        if (res.success) {
          setServices(res.data);
        }
      } catch (err) {
        console.error("Error fetching services:", err);
      } finally {
        setIsLoading(false);
      }
    };
    getServices();
  }, []);

  const handleBook = (service) => {
    setSelectedService(service);
    setIsBookingModalOpen(true);
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
            {isLoading ? (
              [1, 2, 3].map(i => (
                <div key={i} className="h-[400px] rounded-3xl bg-neutral-900 animate-pulse"></div>
              ))
            ) : services.length > 0 ? (
              services.map((service, index) => (
                <ServiceCard 
                  key={service._id}
                  service={service} 
                  onBook={handleBook}
                  index={index}
                />
              ))
            ) : (
              <div className="col-span-full text-center py-20 text-neutral-500">
                No services available at the moment.
              </div>
            )}
          </div>
        </section>
        
        <AboutSection aboutRef={aboutRef} />
        
        <BookingSection newsletterRef={newsletterRef} />
        
        <SiteFooter footerRef={footerRef} />
      </main>

      {isBookingModalOpen && selectedService && (
        <BookingModal 
          service={selectedService} 
          onClose={() => setIsBookingModalOpen(false)} 
        />
      )}
    </>
  );
}