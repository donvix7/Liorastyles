// components/Hero.js
import { ShoppingCart, Menu, X, Eye } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-screen relative overflow-hidden flex flex-col justify-between w-full">
         {/* Decorative divider */}
      <div className="relative z-10 flex justify-center">
        <div className="h-1 w-64 bg-gradient-to-r from-transparent via-amber-500 to-transparent"></div>
      </div>
        <div>
                  {/* Background with gradient */}
            <div className=" absolute inset-0 bg-gradient-to-r from-black via-gray-900 to-black z-0"></div>
            
            {/* Gold decorative elements */}
            <div className="absolute top-1/4 -left-24 w-96 h-96 bg-amber-900/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/4 -right-24 w-96 h-96 bg-yellow-800/10 rounded-full blur-3xl"></div>
            
            <div className="relative z-10 max-w-7xl mx-auto px-4 py-20 md:py-32">

                <div className="text-center md:text-left md:w-2/3">
                
                
                <h1 className="text-5xl md:text-7xl font-serif mb-6 leading-tight">
                    <span className="block">Elegance in</span>
                    
                    <span className="block bg-gradient-to-r from-amber-400 to-yellow-400 bg-clip-text text-transparent">
                    Black & Gold
                    </span>

                </h1>
                
                <p className="text-xl text-gray-300 mb-10 max-w-2xl">
                    Discover luxury makeup that celebrates your radiance. 
                    Our exclusive black and gold collection merges timeless 
                    elegance with modern beauty innovation.
                </p>
                
                <div className="flex gap-3 justify-center md:justify-start">
                    <button className="flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-amber-500 to-amber-900 text-amber-50 font-semibold rounded-full transition-all duration-300 transform hover:-translate-y-1">
                        Shop the Collection
                        <ShoppingCart className="text-amber-300 hover:text-amber-100 cursor-pointer transition-colors" size={24} />
                    </button>
                    <button className="flex items-center gap-2 px-8 py-4 bg-transparent border-2 border-amber-500 text-amber-300 font-semibold rounded-full hover:bg-amber-900/30 transition-all duration-300">
                        View Tutorials
                        <Eye className="text-amber-300 hover:text-amber-100 cursor-pointer transition-colors" size={24} />
                    </button>
                    </div>
                </div>
            </div>
        </div>
      
      {/* Decorative divider */}
      <div className="relative z-10 flex justify-center">
        <div className="h-1 w-64 bg-gradient-to-r from-transparent via-amber-500 to-transparent"></div>
      </div>
    </section>
  );
};

export default Hero;