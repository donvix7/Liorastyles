"use client"
import { Clock, CheckCircle } from 'lucide-react'
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function ServiceCard({ service, addToCart, index }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: index * 0.1 }}
      className="group relative overflow-hidden rounded-2xl border border-amber-900/30 bg-black hover:border-amber-500/50 transition-all duration-500 hover:shadow-[0_0_30px_rgba(180,83,9,0.15)] flex flex-col h-full"
    >
      {/* Image Container with Fixed Aspect Ratio */}
      <div className="relative h-64 w-full overflow-hidden">
        <Image
          src={service.imageUrl}
          alt={service.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 group-hover:scale-110"
          priority={false}
        />
        <div className="absolute inset-0 bg-linear-to-t from-black via-black/20 to-transparent z-10"></div>
        <div className="absolute inset-0 bg-linear-to-tr from-amber-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
      </div>
      
      {/* Content */}
      <div className="relative p-6 flex flex-col grow z-10 bg-linear-to-b from-transparent to-black">
        <h3 className="text-xl font-serif font-semibold bg-linear-to-b from-white to-amber-200 bg-clip-text text-transparent mb-2 group-hover:text-amber-300 transition-colors">
          {service.name}
        </h3>
        
        <p className="text-amber-200/70 text-sm mb-4 line-clamp-2">
          {service.description}
        </p>
        
        <div className="flex items-center gap-2 text-amber-400 mb-6 font-medium">
          <Clock size={16} className="animate-pulse" />
          <span className="text-sm tracking-wide">{service.duration}</span>
        </div>
        
        <ul className="space-y-2 mb-8 grow">
          {service.features.map((feature, i) => (
            <li key={i} className="flex items-start gap-3">
              <CheckCircle className="w-4 h-4 text-amber-500 mt-0.5 shrink-0" />
              <span className="text-sm text-gray-300 group-hover:text-amber-50/80 transition-colors">{feature}</span>
            </li>
          ))}
        </ul>
        
        <div className="shrink-0 flex items-center justify-between pt-4 border-t border-amber-500/10">
          <div>
            <span className="text-2xl font-serif font-bold text-amber-400">{service.price}</span>
            <span className="text-[10px] text-amber-500/50 block uppercase tracking-tighter">Starting at</span>
          </div>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={addToCart}
            className="px-6 py-2.5 bg-linear-to-r from-amber-700 to-amber-900 text-amber-50 font-semibold rounded-full hover:from-amber-600 hover:to-amber-800 transition-all duration-300 text-sm shadow-lg shadow-amber-900/40"
          >
            Book Now
          </motion.button>
        </div>
      </div>
    </motion.div>
  )
}