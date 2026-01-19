// components/Hero.js
import { ShoppingCart, Menu, X, Eye, Instagram, Facebook, Twitter, FileStack } from 'lucide-react';
import Image from 'next/image';

const Hero = () => {
  return (
    <section className="min-h-screen relative overflow-hidden flex flex-col justify-between w-full">
         {/* Decorative divider */}
      <div className="relative z-10 flex justify-center">
        <div className="h-1 w-64 bg-gradient-to-r from-transparent via-amber-500 to-transparent"></div>
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
    
    {/* Gradient Overlays - Responsive fading */}
    {/* For desktop: fade to left */}
    <div className="hidden lg:block absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent"></div>
    
    {/* For tablet: balanced fade */}
    <div className="hidden md:block lg:hidden absolute inset-0 bg-gradient-to-r from-black via-black/80 via-60% to-transparent"></div>
    
    {/* For mobile: fade downwards */}
    <div className="md:hidden absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent"></div>
    
    {/* Gold tint overlay for theme */}
    <div className="absolute inset-0 bg-gradient-to-tr from-amber-900/10 via-transparent to-yellow-800/5"></div>
    
    {/* Pattern overlay for texture */}
    <div className="absolute inset-0 opacity-5"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23fbbf24' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        backgroundSize: '60px 60px'
      }}
    ></div>
  </div>
  
  {/* Gold decorative elements (floating) */}
  <div className="absolute top-20 -left-20 w-80 h-80 bg-amber-900/10 rounded-full blur-3xl animate-float"></div>
  <div className="absolute bottom-20 -right-20 w-80 h-80 bg-yellow-800/10 rounded-full blur-3xl animate-float-delayed"></div>
  <div className="absolute top-1/2 left-1/3 w-40 h-40 bg-amber-700/5 rounded-full blur-2xl"></div>
  
  {/* Content Overlay */}
  <div className="relative z-10 h-full min-h-screen flex items-center">
    <div className="max-w-7xl mx-auto px-4 py-20 md:py-32 w-full">
      <div className="max-w-2xl">
        {/* Premium Badge */}
        <div className="inline-flex items-center gap-3 px-5 py-2.5 bg-gradient-to-r from-black/70 to-amber-900/30 rounded-full border border-amber-600/40 backdrop-blur-sm mb-8 animate-fade-in">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-amber-400 rounded-full animate-pulse"></div>
            <span className="text-amber-300 text-sm font-medium tracking-wider">EXCLUSIVE OFFER</span>
          </div>
          <div className="w-px h-4 bg-amber-600/50"></div>
          <span className="text-amber-400/80 text-xs">{new Date().getFullYear()}</span>
        </div>
        
        {/* Main Headline */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif mb-6 leading-tight animate-fade-in-up">
          <span className="block text-gray-50">Elegance in</span>
          <span className="block bg-gradient-to-r from-amber-300 via-yellow-200 to-amber-300 bg-clip-text text-transparent">
            Black & Gold
          </span>
        </h1>
        
        {/* Subtitle */}
        <div className="relative mb-10 max-w-xl">
          <div className="h-px w-20 bg-gradient-to-r from-amber-500 to-transparent mb-6"></div>
          <p className="text-xl md:text-2xl text-gray-200 font-light leading-relaxed">
            Where timeless sophistication meets modern beauty. 
            <span className="text-amber-200 font-medium"> Experience luxury</span> redefined.
          </p>
          <div className="h-px w-20 bg-gradient-to-r from-transparent to-amber-500 mt-6 ml-auto"></div>
        </div>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mb-16 animate-fade-in-up-delayed">
          <button className="group relative flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-amber-600 to-amber-800 text-amber-50 font-semibold rounded-full transition-all duration-500 transform hover:-translate-y-1 hover:shadow-2xl hover:shadow-amber-900/50 overflow-hidden">
            {/* Shine effect */}
            <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
            
            {/* Gold border glow */}
            <div className="absolute inset-0 rounded-full border border-amber-500/50 group-hover:border-amber-400/80 transition-colors duration-500"></div>
            
            <FileStack className="relative z-10 text-amber-300 group-hover:scale-110 transition-transform duration-300" size={24} />
            <span className="relative z-10">Book a Consultation</span>
          </button>
          
          <button className="group relative flex items-center justify-center gap-3 px-8 py-4 bg-transparent text-amber-300 font-semibold rounded-full border-2 border-amber-600/60 hover:border-amber-500 hover:bg-amber-900/20 transition-all duration-500 backdrop-blur-sm">
            <Eye className="group-hover:scale-110 transition-transform duration-300" size={24} />
            <span>View Tutorials</span>
            
            {/* Hover glow */}
            <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 shadow-[0_0_20px_5px_rgba(180,83,9,0.3)]"></div>
          </button>
        </div>
        
        
        
        
        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 hidden md:block animate-bounce-slow">
          <div className="flex flex-col items-center">
            <span className="text-amber-400/60 text-sm mb-2">Explore</span>
            <div className="w-px h-16 bg-gradient-to-b from-amber-500/60 to-transparent"></div>
          </div>
        </div>
      </div>
    </div>
    
    {/* Social links on right side (desktop only) */}
    <div className="hidden lg:block absolute right-10 top-1/2 transform -translate-y-1/2">
      <div className="flex flex-col gap-6 items-center">
        <div className="w-px h-32 bg-gradient-to-b from-amber-600/50 to-transparent"></div>
        <a href="#" className="text-amber-400/70 hover:text-amber-300 transition-colors hover:scale-110">
          <Instagram size={20} />
        </a>
        <a href="#" className="text-amber-400/70 hover:text-amber-300 transition-colors hover:scale-110">
          <Facebook size={20} />
        </a>
        <a href="#" className="text-amber-400/70 hover:text-amber-300 transition-colors hover:scale-110">
          <Twitter size={20} />
        </a>
        <div className="w-px h-32 bg-gradient-to-t from-amber-600/50 to-transparent"></div>
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