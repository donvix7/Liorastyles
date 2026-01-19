// components/ServiceCard.jsx
"use client"
import { Clock, CheckCircle } from 'lucide-react'
import Image from 'next/image' // If using Next.js Image component

export default function ServiceCard({ service, addToCart }) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-amber-900/30 bg-gradient-to-br from-gray-900 to-black hover:border-amber-600 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-amber-900/20">
      
      {/* OPTION 1: Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        {/* Image Background */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${service.imageUrl})` }}
        >
          {/* Dark overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/70 to-black/50 group-hover:from-black/80 group-hover:via-black/60 group-hover:to-black/40 transition-all duration-500"></div>
          
          {/* Gold gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-tr from-amber-900/10 via-transparent to-yellow-800/5 opacity-50 group-hover:opacity-70 transition-opacity duration-500"></div>
        </div>
      </div>
      
      {/* OPTION 2: Using Next.js Image Component (Better Performance) */}
      {/* 
      <div className="absolute inset-0 z-0">
        <Image
          src={service.imageUrl}
          alt={service.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover"
          priority={false}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/70 to-black/50 group-hover:from-black/80 group-hover:via-black/60 group-hover:to-black/40 transition-all duration-500"></div>
        <div className="absolute inset-0 bg-gradient-to-tr from-amber-900/10 via-transparent to-yellow-800/5 opacity-50 group-hover:opacity-70 transition-opacity duration-500"></div>
      </div>
      */}
      
      {/* OPTION 3: Using img tag (Simplest) */}
      {/*
      <div className="absolute inset-0 z-0">
        <img 
          src={service.imageUrl} 
          alt={service.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/70 to-black/50 group-hover:from-black/80 group-hover:via-black/60 group-hover:to-black/40 transition-all duration-500"></div>
        <div className="absolute inset-0 bg-gradient-to-tr from-amber-900/10 via-transparent to-yellow-800/5 opacity-50 group-hover:opacity-70 transition-opacity duration-500"></div>
      </div>
      */}
      
      <div className="relative p-6 z-10 h-full flex flex-col">
        <div className="absolute inset-0 z-0">
        <Image
          src={service.imageUrl}
          alt={service.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover"
          priority={false}
        />
        
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/70 to-black/50 group-hover:from-black/80 group-hover:via-black/60 group-hover:to-black/40 transition-all duration-500"></div>
        <div className="absolute inset-0 bg-gradient-to-tr from-amber-900/10 via-transparent to-yellow-800/5 opacity-50 group-hover:opacity-70 transition-opacity duration-500"></div>
      </div>
        
       
        
        {/* Service Name */}
        <h3 className="z-1 mt-100 text-xl font-serif font-semibold text-amber-100 mb-2">{service.name}</h3>
        
        {/* Description */}
        <p className="z-1 text-amber-200/90 text-sm mb-4">{service.description}</p>
        
        {/* Duration */}
        <div className="z-1     flex items-center gap-2 text-amber-300 mb-4">
          <Clock size={14} />
          <span className="text-sm">{service.duration}</span>
        </div>
        
        {/* Features */}
        <ul className="z-1 space-y-2 mb-6 flex-grow">
          {service.features.map((feature, index) => (
            <li key={index} className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-amber-400 mt-0.5 flex-shrink-0" />
              <span className="text-sm text-amber-100/90">{feature}</span>
            </li>
          ))}
        </ul>
        
        {/* Price & CTA - Pushed to bottom */}
        <div className="z-1 flex items-center justify-between pt-4 border-t border-amber-700/30 mt-auto">
          <div>
            <span className="text-2xl font-serif font-bold text-amber-300">{service.price}</span>
            <span className="text-xs text-amber-400/70 block">Starting at</span>
          </div>
          <button 
            onClick={addToCart}
            className="px-5 py-2 bg-gradient-to-r from-amber-700 to-amber-900 text-amber-50 font-medium rounded-full hover:from-amber-600 hover:to-yellow-800 transition-all duration-300 text-sm hover:shadow-lg hover:shadow-amber-900/30"
          >
            Book Now
          </button>
        </div>
      </div>
    </div>
  )
}