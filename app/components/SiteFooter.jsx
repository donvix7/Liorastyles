"use client"
import { motion } from 'framer-motion';
import { Facebook, Instagram, X } from 'lucide-react';

const SiteFooter = ({ footerRef }) => {
  return (
    <footer 
      ref={footerRef}
      className="bg-black border-t border-gray-800 py-12 px-4 shadow-2xl"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center md:text-left"
          >
            <h2 className="text-3xl font-serif text-amber-100 tracking-widest">LIORA</h2>
            <p className="text-amber-200/60 mt-2 font-light">Luxury Makeup & Beauty Redefined</p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex gap-8"
          >
            <a href="https://www.instagram.com/ihekauche?igsh=MWttNjNibG44ejJtZg==" 
               className="text-amber-200/70 hover:text-amber-400 transition-all transform hover:scale-110"
               aria-label="Instagram">        
              <Instagram size={24} />
            </a>
            <a href="https://www.facebook.com/share/18B2QgMSek/?mibextid=wwXIfr" 
               className="text-amber-200/70 hover:text-amber-400 transition-all transform hover:scale-110"
               aria-label="Facebook">
              <Facebook size={24} />
            </a>
            <a href="#" 
               className="text-amber-200/70 hover:text-amber-400 transition-all transform hover:scale-110"
               aria-label="X (formerly Twitter)">
              <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-center mt-12 pt-8 border-t border-gray-900 text-amber-500/40 text-xs tracking-widest uppercase"
        >
          <p>&copy; {new Date().getFullYear()} Liora Luxury Cosmetics. Curated for Excellence.</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default SiteFooter;
