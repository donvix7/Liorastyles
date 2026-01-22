// components/Hero.js
import { Eye, Instagram, Facebook, Twitter, FileStack } from 'lucide-react';
import Image from 'next/image';

const Hero = () => {
  return (
    <section className="min-h-screen relative overflow-hidden w-full">
      {/* Top decorative divider - mobile optimized */}
      <div className="relative z-10 flex justify-center pt-4">
        <div className="h-1 w-48 md:w-64 bg-gradient-to-r from-transparent via-amber-500 to-transparent"></div>
      </div>
      
      <div className="relative min-h-screen overflow-hidden">
        {/* Full Background Image Container */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/services/_.jpeg" 
            alt="Liora Luxury Makeup Collection"
            fill
            sizes="100vw"
            className="object-cover object-center"
            priority={true}
          />
          
          {/* Responsive gradient overlays */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent md:bg-gradient-to-r md:from-black md:via-black/70 md:to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-tr from-amber-900/10 via-transparent to-yellow-800/5"></div>
          
          {/* Pattern overlay for texture */}
          <div className="absolute inset-0 opacity-5"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23fbbf24' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              backgroundSize: '60px 60px'
            }}
          ></div>
        </div>
        
        {/* Gold decorative elements - scaled for mobile */}
        <div className="absolute top-10 -left-10 w-60 h-60 md:top-20 md:-left-20 md:w-80 md:h-80 bg-amber-900/10 rounded-full blur-3xl"
             style={{animation: 'float 8s ease-in-out infinite'}}></div>
        <div className="absolute bottom-10 -right-10 w-60 h-60 md:bottom-20 md:-right-20 md:w-80 md:h-80 bg-yellow-800/10 rounded-full blur-3xl"
             style={{animation: 'float-delayed 10s ease-in-out infinite'}}></div>
        
        {/* Content Overlay - Centered and responsive */}
        <div className="relative z-10 min-h-screen flex items-center justify-center px-4">
          <div className="w-full max-w-7xl mx-auto py-12 md:py-32">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-16">
              
              {/* Left Content Column - Full width on mobile */}
              <div className="w-full lg:w-1/2 text-center lg:text-left md:text-left">
                {/* Premium Badge - Mobile optimized */}
                <div className="inline-flex items-center justify-center lg:justify-start gap-2 px-4 py-2 bg-gradient-to-r from-black/70 to-amber-900/30 rounded-full border border-amber-600/40 backdrop-blur-sm mb-6 md:mb-8"
                     style={{animation: 'fadeIn 1s ease-out forwards'}}>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-amber-400 rounded-full"
                         style={{animation: 'pulse 2s ease-in-out infinite'}}></div>
                    <span className="text-amber-300 text-sm font-medium tracking-wider">EXCLUSIVE OFFER</span>
                  </div>
                  <div className="w-px h-4 bg-amber-600/50 mx-2"></div>
                  <span className="text-amber-400/80 text-xs">{new Date().getFullYear()}</span>
                </div>
                
                {/* Main Headline - Responsive sizing */}
                <h1 className="text-7xl font-serif mb-4 md:mb-6 leading-tight"
                    style={{animation: 'fadeInUp 1s ease-out 0.2s forwards'}}>
                  <span className="block text-gray-50">Elegance in</span>
                  <span className="bg-gradient-to-r from-amber-300 via-yellow-200 to-amber-600 text-transparent pb-1" style={{ WebkitBackgroundClip: 'text', backgroundClip: 'text' }}>
                    Black & Gold
                  </span>
                </h1>
                
                {/* Subtitle - Mobile optimized */}
                <div className="relative mb-6 md:mb-10 max-w-xl mx-auto lg:mx-0"
                     style={{animation: 'fadeInUp 1s ease-out 0.4s forwards'}}>
                  <div className="h-px w-16 md:w-20 bg-gradient-to-r from-amber-500 to-transparent mb-4 md:mb-6 mx-auto lg:mx-0"></div>
                  <p className="text-lg sm:text-xl md:text-2xl text-gray-200 font-light leading-relaxed">
                    Where timeless sophistication meets modern beauty. 
                    <span className="text-amber-200 font-medium"> Experience luxury</span> redefined.
                  </p>
                  <div className="h-px w-16 md:w-20 bg-gradient-to-r from-transparent to-amber-500 mt-4 md:mt-6 ml-auto lg:ml-auto"></div>
                </div>
                
                {/* CTA Buttons - Mobile optimized */}
                <div className="flex flex-col sm:flex-row gap-3 md:gap-4 mb-8 md:mb-16 justify-center lg:justify-start"
                     style={{animation: 'fadeInUp 1s ease-out 0.6s forwards'}}>
                  <button className=" relative flex items-center justify-center gap-2 md:gap-2 px-6 py-3 md:px-8 md:py-4 sm:bg-gradient-to-r sm:from-amber-600 sm:to-amber-800 text-amber-50 font-semibold rounded-full transition-all duration-500 transform hover:-translate-y-1 hover:shadow-xl md:hover:shadow-2xl hover:shadow-amber-900/50 overflow-hidden">
                  
                    {/* Shine effect */}
                    <div className="absolute inset-0 translate-x-full group-hover:-translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
                    
                    {/* Gold border glow */}
                    <div className="absolute inset-0 rounded-full border border-amber-500/50 group-hover:border-amber-400/80 transition-colors duration-500"></div>
                    
                    <FileStack className="relative z-10 text-amber-300 group-hover:scale-110 transition-transform duration-300" size={20} />
                    <span className="relative z-10 text-sm md:text-base">Book Consultation</span>
                  </button>
                  
                  <button className="group relative flex items-center justify-center gap-2 md:gap-3 px-6 py-3 md:px-8 md:py-4 bg-transparent text-amber-300 font-semibold rounded-full border-2 border-amber-600/60 hover:border-amber-500 hover:bg-amber-900/20 transition-all duration-500 backdrop-blur-sm">
                    <Eye className="group-hover:scale-110 transition-transform duration-300" size={20} />
                    <span className="text-sm md:text-base">View Tutorials</span>
                    
                    {/* Hover glow */}
                    <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 shadow-[0_0_15px_3px_rgba(180,83,9,0.3)] md:shadow-[0_0_20px_5px_rgba(180,83,9,0.3)]"></div>
                  </button>
                </div>
                
               
              </div>
              
              {/* Right Social Links Column - Visible on mobile at bottom */}
              <div className="w-full lg:w-auto mt-8 lg:mt-0 lg:absolute lg:right-10 lg:top-1/2 lg:transform lg:-translate-y-1/2">
                {/* Social links - Horizontal on mobile, vertical on desktop */}
                <div className="flex lg:flex-col justify-center gap-4 md:gap-6 items-center">
                  {/* Show divider only on desktop */}
                  <div className="hidden lg:block w-px h-24 bg-gradient-to-b from-amber-600/50 to-transparent"></div>
                  
                  <a href="https://www.instagram.com/ihekauche?igsh=MWttNjNibG44ejJtZg==" className="p-2 rounded-full bg-black/30 backdrop-blur-sm hover:text-amber-300 transition-colors hover:scale-110">
                    <Instagram size={20} className="size-12 " />
                  </a>
                  <a href="https://www.facebook.com/share/18B2QgMSek/?mibextid=wwXIfr" className="p-2 rounded-full bg-black/30 backdrop-blur-sm hover:text-amber-300 transition-colors hover:scale-110">
                    <Facebook size={20} className="size-12"/>
                  </a>
                  <a href="#" className="p-2 rounded-full bg-black/30 backdrop-blur-sm hover:text-amber-300 transition-colors hover:scale-110">

                    <Twitter size={20} className="size-12" />
                  </a>
                  
                  {/* Show divider only on desktop */}
                  <div className="hidden lg:block w-px h-24 bg-gradient-to-t from-amber-600/50 to-transparent"></div>
                </div>
                
                {/* Mobile-only social text */}
                <p className="text-center mt-4 lg:hidden text-amber-400/60 text-sm">
                  Follow us for exclusive content
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Scroll indicator - Mobile optimized */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 hidden md:block"
             style={{animation: 'bounceSlow 2s infinite'}}>
          <div className="flex flex-col items-center">
            <span className="text-amber-400/60 text-sm mb-2">Explore</span>
            <div className="w-px h-12 md:h-16 bg-gradient-to-b from-amber-500/60 to-transparent"></div>
          </div>
        </div>
      </div>
      
      {/* Bottom decorative divider */}
      <div className="relative z-10 flex justify-center pb-4">
        <div className="h-1 w-48 md:w-64 bg-gradient-to-r from-transparent via-amber-500 to-transparent"></div>
      </div>
      
      {/* Add inline CSS for animations */}
      <style jsx global>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(10px); }
        }
        
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
        
        @keyframes bounceSlow {
          0%, 100% { transform: translate(-50%, 0); }
          50% { transform: translate(-50%, -8px); }
        }
        

      `}</style>
    </section>
  );
};

export default Hero;