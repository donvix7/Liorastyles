// components/Navigation.js
import { ShoppingCart, Menu, X, LogIn, ChevronRight, Video, Package, Layers, Info } from 'lucide-react';
import { motion } from 'framer-motion';
import { 
  Instagram,
  Facebook,
  Twitter 
} from 'lucide-react';

const Navigation = ({ cartCount, isMenuOpen, setIsMenuOpen }) => {
  return (
    <nav className="sticky top-0 z-50 bg-black/90 backdrop-blur-sm ">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <button 
              className="md:hidden mr-4 text-amber-300"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
            <h1 className="text-3xl font-serif text-amber-100 tracking-wider">LIORA</h1>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="flex gap-2 items-center text-amber-300 hover:text-amber-100 font-medium transition-colors"><Package size={24}/>Products</a>
            <a href="#" className="flex gap-2 items-center text-amber-300 hover:text-amber-100 font-medium transition-colors"><Layers size={24}/>Collections</a>
            <a href="/about" className="flex gap-2 items-center text-amber-300 hover:text-amber-100 font-medium transition-colors"><Info size={24}/>About</a>
            <a href="#" className="flex gap-2 items-center text-amber-300 hover:text-amber-100 font-medium transition-colors"><Video size={24}/>Tutorials</a>
          </div>
          
          {/* Cart & User */}
          <div className="flex items-center space-x-6">
            <div className="relative">
              <ShoppingCart className="text-amber-300 hover:text-amber-100 cursor-pointer transition-colors" size={24} />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-amber-600 text-amber-50 text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </div>
            
          </div>
        </div>
        
        {/* Mobile Menu */}
{/* Mobile Menu */}
{isMenuOpen && (
  <motion.div 
    initial={{ opacity: 0, height: 0 }}
    animate={{ opacity: 1, height: "auto" }}
    exit={{ opacity: 0, height: 0 }}
    transition={{ duration: 0.3, ease: "easeInOut" }}
    className="md:hidden overflow-hidden"
  >
    <div className="mt-4 pb-6 pt-6 border-t border-gray-500/50 bg-gradient-to-b from-black to-gray-900/90 backdrop-blur-sm">
      <div className="flex flex-col space-y-5 px-4">
        {/* Menu items with hover effects */}
        <motion.a 
          href="#"
          whileHover={{ x: 8 }}
          className="group flex items-center text-amber-200 hover:text-amber-50 font-medium transition-all duration-300 py-3 border-b border-amber-900/30"
        >
          <span className="flex items-center gap-3">
            <Package className="w-5 h-5 text-gray-500 hover:text-amber-500" />
            Products
          </span>
          <ChevronRight className="ml-auto w-4 h-4 text-gray-700 group-hover:text-amber-500 transition-colors duration-300" />
        </motion.a>

        <motion.a 
          href="#"
          whileHover={{ x: 8 }}
          className="group flex items-center text-amber-200 hover:text-amber-50 font-medium transition-all duration-300 py-3 border-b border-gray-500/30"
        >
          <span className="flex items-center gap-3">
            <Layers className="w-5 h-5 text-gray-500 hover:text-amber-500" />
            Collections
          </span>
          <ChevronRight className="ml-auto w-4 h-4 text-gray-700 group-hover:text-amber-500 transition-colors duration-300" />
        </motion.a>

        <motion.a 
          href="#"
          whileHover={{ x: 8 }}
          className="group flex items-center text-amber-200 hover:text-amber-50 font-medium transition-all duration-300 py-3 border-b border-gray-500/30"
        >
          <span className="flex items-center gap-3">
            <Info className="w-5 h-5 text-gray-500 hover:text-amber-500" />
            About
          </span>
          <ChevronRight className="ml-auto w-4 h-4 text-gray-700 group-hover:text-amber-500 transition-colors duration-300" />

        </motion.a>

        <motion.a 
          href="#"
          whileHover={{ x: 8 }}
          className="group flex items-center text-amber-200 hover:text-amber-50 font-medium transition-all duration-300 py-3 border-b border-gray-500/30"
        >
          <span className="flex items-center gap-3">
            <Video className="w-5 h-5 text-gray-500 hover:text-amber-500" />
            Tutorials
          </span>
          <ChevronRight className="ml-auto w-4 h-4 text-gray-700 group-hover:text-amber-500 transition-colors duration-300" />
        </motion.a>

        {/* Sign In Button with enhanced effect */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.4 }}
          className="pt-4 mt-2"
        >


          {/* Alternative sign up link */}
          <p className="text-center mt-4 text-amber-400/80 text-sm">
            New to Liora?{' '}
            <a href="#" className="text-amber-300 hover:text-amber-200 font-medium underline underline-offset-2 transition-colors duration-300">
              Book a session with us
            </a>
          </p>
        </motion.div>

        {/* Social links at bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="flex justify-center gap-6 pt-6 mt-4 border-t border-gray-500/50"
        >
          <a href="#" className="p-2 rounded-full bg-gradient-to-br from-gray-900 to-black border hover:scale-110 transition-all duration-300">
            <Instagram size={18} className="text-gray-300" />
          </a>
          <a href="#" className="p-2 rounded-full bg-gradient-to-br from-gray-900 to-black border hover:scale-110 transition-all duration-300">
            <Facebook size={18} className="text-gray-300" />
          </a>
          <a href="#" className="p-2 rounded-full bg-gradient-to-br from-gray-900 to-black border hover:scale-110 transition-all duration-300">
            <Twitter size={18} className="text-gray-300" />
          </a>
        </motion.div>
      </div>
    </div>
  </motion.div>
)}
      </div>
    </nav>
  );
};

export default Navigation;