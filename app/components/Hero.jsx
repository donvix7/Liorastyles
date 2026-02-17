"use client"
import { Eye, Instagram, Facebook, FileStack } from 'lucide-react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="min-h-screen relative overflow-hidden w-full bg-black">
      {/* Top decorative divider */}
      <div className="relative z-10 flex justify-center pt-4">
        <div className="h-1 w-48 md:w-64 bg-linear-to-r from-transparent via-amber-500 to-transparent"></div>
      </div>
      
      <div className="relative min-h-screen overflow-hidden">
        {/* Full Background Image Container */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/services/_.jpeg" 
            alt="Liora Luxury Makeup Collection"
            fill
            sizes="100vw"
            className="object-cover object-center scale-105"
            priority={true}
          />
          
          {/* Responsive gradient overlays */}
          <div className="absolute inset-0 bg-linear-to-t from-black via-black/80 to-transparent md:bg-linear-to-r md:from-black md:via-black/70 md:to-transparent"></div>
          <div className="absolute inset-0 bg-linear-to-tr from-amber-900/20 via-transparent to-yellow-800/10"></div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-10 -left-10 w-60 h-60 md:top-20 md:-left-20 md:w-80 md:h-80 bg-amber-900/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-10 -right-10 w-60 h-60 md:bottom-20 md:-right-20 md:w-80 md:h-80 bg-yellow-800/10 rounded-full blur-3xl animate-float-delayed"></div>
        
        {/* Content Overlay */}
        <div className="relative z-10 min-h-screen flex items-center justify-center px-4">
          <div className="w-full max-w-7xl mx-auto py-12 md:py-32">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-16">
              
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
                className="w-full lg:w-1/2 text-center lg:text-left"
              >
                {/* Premium Badge */}
                <div className="inline-flex items-center justify-center lg:justify-start gap-2 px-4 py-2 bg-black/70 rounded-full border border-amber-600/40 backdrop-blur-sm mb-6 md:mb-8">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-amber-400 rounded-full animate-pulse-slow"></div>
                    <span className="text-amber-300 text-sm font-medium tracking-widest uppercase">Exclusive Offer</span>
                  </div>
                  <div className="w-px h-4 bg-amber-600/50 mx-2"></div>
                  <span className="text-amber-400/80 text-xs">{new Date().getFullYear()}</span>
                </div>
                
                {/* Main Headline */}
                <motion.h1 
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 1 }}
                  className="text-7xl font-serif mb-4 md:mb-6 leading-tight"
                >
                  <span className="block text-gray-50">Elegance in</span>
                  <span className="bg-linear-to-r from-amber-300 via-amber-100 to-amber-600 text-transparent bg-clip-text pb-2">
                    Black & Gold
                  </span>
                </motion.h1>
                
                {/* Subtitle */}
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4, duration: 1 }}
                  className="relative mb-6 md:mb-10 max-w-xl mx-auto lg:mx-0"
                >
                  <div className="h-px w-20 bg-linear-to-r from-amber-500 to-transparent mb-6 mx-auto lg:mx-0"></div>
                  <p className="text-lg sm:text-xl md:text-2xl text-gray-200 font-light leading-relaxed">
                    Where timeless sophistication meets modern beauty. 
                    <span className="text-amber-200 font-medium"> Experience luxury</span> redefined.
                  </p>
                  <div className="h-px w-20 bg-linear-to-r from-transparent to-amber-500 mt-6 ml-auto lg:ml-0 lg:mr-auto lg:hidden md:block sm:block"></div>
                </motion.div>
                
                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 mb-8 md:mb-16 justify-center lg:justify-start">
                  <motion.button 
                    whileHover={{ scale: 1.05, y: -4 }}
                    whileTap={{ scale: 0.95 }}
                    className="relative flex items-center justify-center gap-3 px-8 py-4 bg-linear-to-r from-amber-600 to-amber-800 text-amber-50 font-semibold rounded-full shadow-lg shadow-amber-900/40"
                  >
                    <FileStack size={20} className="text-amber-200" />
                    <span>Book Consultation</span>
                  </motion.button>
                  
                  <motion.button 
                    whileHover={{ scale: 1.05, y: -4 }}
                    whileTap={{ scale: 0.95 }}
                    className="group relative flex items-center justify-center gap-3 px-8 py-4 bg-transparent text-amber-300 font-semibold rounded-full border-2 border-amber-600/60 hover:bg-amber-900/10 transition-colors backdrop-blur-sm"
                  >
                    <Eye size={20} />
                    <span>View Tutorials</span>
                  </motion.button>
                </div>
              </motion.div>
              
              {/* Social Links */}
              <div className="w-full lg:w-auto mt-8 lg:mt-0 lg:absolute lg:right-10 lg:top-1/2 lg:-translate-y-1/2">
                <div className="flex lg:flex-col justify-center gap-6 items-center">
                  <div className="hidden lg:block w-px h-24 bg-linear-to-b from-amber-600/50 to-transparent"></div>
                  
                  {[
                    { Icon: Instagram, href: "#" },
                    { Icon: Facebook, href: "#" },
                    { isX: true, href: "#" }
                  ].map((social, i) => (
                    <motion.a 
                      key={i}
                      whileHover={{ scale: 1.2, color: '#fcd34d' }}
                      href={social.href} 
                      className="p-3 rounded-full bg-black/40 border border-gray-800 text-amber-500/80 transition-shadow hover:shadow-[0_0_15px_rgba(245,158,11,0.2)] flex items-center justify-center"
                      aria-label={social.isX ? "X (formerly Twitter)" : ""}
                    >
                      {social.isX ? (
                        <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
                          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                        </svg>
                      ) : (
                        <social.Icon size={24} />
                      )}
                    </motion.a>
                  ))}
                  
                  <div className="hidden lg:block w-px h-24 bg-linear-to-t from-amber-600/50 to-transparent"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:block animate-bounce-slow">
          <div className="flex flex-col items-center gap-3">
            <span className="text-amber-500/40 text-xs uppercase tracking-widest">Explore</span>
            <div className="w-px h-16 bg-linear-to-b from-amber-500/40 to-transparent"></div>
          </div>
        </div>
      </div>
      
      {/* Bottom decorative divider */}
      <div className="relative z-10 flex justify-center pb-4">
        <div className="h-1 w-48 md:w-64 bg-linear-to-r from-transparent via-amber-500 to-transparent"></div>
      </div>
    </section>
  );
};

export default Hero;