import { useState } from 'react';
import { Menu, X, Package, Layers, Info, Video, User, ChevronRight, Instagram, Facebook, Twitter } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navigation = ({ cartCount }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuItems = [
    { name: "Products", icon: Package, href: "#" },
    { name: "Collections", icon: Layers, href: "#" },
    { name: "About", icon: Info, href: "/about" },
    { name: "Tutorials", icon: Video, href: "#" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-black/95 backdrop-blur-md border-b border-white/5 shadow-2xl">
      <div className="max-w-7xl mx-auto px-4 py-3 md:py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button 
              className="md:hidden text-amber-400 hover:text-amber-200 p-2 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle Menu"
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
            <a href="/" className="group">
              <h1 className="text-3xl font-serif text-amber-100 tracking-[0.2em] group-hover:text-amber-400 transition-colors duration-500">LIORA</h1>
            </a>
          </div>
          
          <div className="hidden md:flex items-center space-x-10">
            {menuItems.map((item) => (
              <a 
                key={item.name}
                href={item.href} 
                onClick={() => setIsMenuOpen(false)}
                className="group flex gap-2 items-center text-amber-300/80 hover:text-amber-200 font-medium tracking-wide transition-all"
              >
                <item.icon size={20} className="group-hover:scale-110 transition-transform text-amber-500/60 group-hover:text-amber-400" />
                {item.name}
              </a>
            ))}
          </div>
          
          <div className="flex items-center">
            <motion.a 
              whileHover={{ scale: 1.1 }}
              href='/dashboard'
              className="relative p-2 rounded-full bg-amber-900/10 border border-amber-600/30 text-amber-400 hover:bg-amber-900/20 hover:text-amber-200 transition-all"
            >
              <User size={22} />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-linear-to-r from-amber-600 to-amber-800 text-amber-50 text-[10px] font-bold rounded-full h-5 w-5 flex items-center justify-center shadow-lg animate-bounce-slow">
                  {cartCount}
                </span>
              )}
            </motion.a>
          </div>
        </div>
        
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0, y: -20 }}
              animate={{ opacity: 1, height: "auto", y: 0 }}
              exit={{ opacity: 0, height: 0, y: -20 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="md:hidden overflow-hidden border-t border-white/5 mt-4"
            >
              <div className="py-8 flex flex-col space-y-2">
                {menuItems.map((item, i) => (
                  <motion.a 
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="group flex items-center justify-between px-4 py-4 rounded-xl hover:bg-amber-900/10 transition-colors text-amber-100/90 font-medium"
                  >
                    <span className="flex items-center gap-4">
                      <item.icon size={20} className="text-amber-500/50 group-hover:text-amber-400" />
                      {item.name}
                    </span>
                    <ChevronRight size={18} className="text-amber-900/40 group-hover:text-amber-500 transition-colors" />
                  </motion.a>
                ))}
                
                <div className="pt-8 mt-4 border-t border-white/5 flex justify-center gap-8">
                  {[Instagram, Facebook, Twitter].map((Icon, i) => (
                    <motion.a 
                      key={i}
                      whileHover={{ scale: 1.2 }}
                      href="#" 
                      className="p-3 rounded-full bg-amber-900/5 border border-amber-600/20 text-amber-400/70"
                    >
                      <Icon size={20} />
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navigation;