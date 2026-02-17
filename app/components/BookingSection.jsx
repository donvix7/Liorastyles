"use client"
import { motion } from 'framer-motion';
import { Calendar, FileStack } from 'lucide-react';
import { makeupServices } from '../utils/data';

export default function BookingSection({ newsletterRef }) {
  return (
    <section 
      ref={newsletterRef}
      className="py-16 px-4 min-h-screen flex items-center"
    >
      <motion.div 
        initial={{ opacity: 0, y: 48 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1 }}
        className="mb-5 max-w-2xl mx-auto text-center w-full border border-gray-500/30"
      >
        <motion.div 
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="rounded-2xl p-8 bg-gradient-to-r from-black to-gray-900/90 backdrop-blur-sm"
        >
          <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-r from-amber-600 to-yellow-800 flex items-center justify-center">
            <Calendar className="w-8 h-8 text-amber-50" />
          </div>
          <h3 className="text-3xl font-serif mb-4">Book Your Transformation</h3>
          <p className="text-amber-200 mb-8">
            Schedule a consultation or book our premium makeup services. 
            Limited slots available for exclusive clientele.
          </p>  
          <div className="flex flex-col gap-4 max-w-md mx-auto">
            <input 
              type="text" 
              placeholder="Full Name"    
              className="px-4 py-3 rounded-lg bg-gray-800/50 text-amber-50 border border-gray-500/50 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
            />
            <input 
              type="email" 
              placeholder="Email Address"    
              className="px-4 py-3 rounded-lg bg-gray-800/50 text-amber-50 border border-gray-500/50 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
            />
            <select className="px-4 py-3 rounded-lg bg-gray-800/50 text-amber-50 border border-gray-500/50 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all">
              <option value="">Select Service</option>
              {makeupServices.map(service => (
                <option key={service.id} value={service.id}>{service.name}</option>
              ))}
            </select>
            <button className="inline-flex items-center gap-2 px-8 py-4 bg-linear-to-r from-amber-600 to-yellow-600 text-white font-bold rounded-full hover:scale-105 transition-all shadow-lg hover:shadow-amber-900/50">
              <FileStack size={20}/>
              Request Booking
            </button>
          </div>
          <p className="text-gray-300 text-sm mt-6">
            A Liora consultant will contact you within 24 hours to confirm your appointment.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}
