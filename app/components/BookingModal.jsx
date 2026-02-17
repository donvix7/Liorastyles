"use client"
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, User, Mail, Phone, MapPin, Loader2, CheckCircle, Sparkles } from 'lucide-react';

export default function BookingModal({ service, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    serviceId: service._id
  });
  const [status, setStatus] = useState('idle'); // idle, loading, success, error
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    setError(null);

    try {
      const res = await fetch('/api/bookings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      const data = await res.json();
      if (data.success) {
        setStatus('success');
      } else {
        throw new Error(data.error);
      }
    } catch (err) {
      setError(err.message);
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className="fixed inset-0 z-100 flex items-center justify-center p-4">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-neutral-900 border border-neutral-800 rounded-3xl p-12 text-center max-w-md w-full shadow-2xl"
        >
          <div className="w-20 h-20 bg-emerald-950/30 rounded-full flex items-center justify-center mx-auto mb-6 border border-emerald-500/20">
            <CheckCircle className="text-emerald-500" size={40} />
          </div>
          <h2 className="text-3xl font-serif text-white mb-4">Booking Requested!</h2>
          <p className="text-neutral-400 mb-8 leading-relaxed">
            Thank you for choosing Liora Styles. We've received your request for <span className="text-amber-400 font-medium">{service.name}</span> and will contact you shortly to confirm.
          </p>
          <button 
            onClick={onClose}
            className="w-full py-4 bg-amber-600 hover:bg-amber-500 text-black font-bold rounded-2xl transition-all"
          >
            Close
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-100 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-neutral-900 border border-neutral-800 rounded-3xl w-full max-w-lg overflow-hidden shadow-2xl relative"
      >
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 text-neutral-500 hover:text-white transition-colors z-10"
        >
          <X size={24} />
        </button>

        <div className="p-8 md:p-10">
          <div className="flex items-center gap-3 mb-2">
            <Sparkles className="text-amber-500" size={18} />
            <span className="text-xs font-bold text-amber-500 uppercase tracking-widest">Reserve Your Session</span>
          </div>
          <h2 className="text-3xl font-serif text-white mb-8">Book {service.name}</h2>
          
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="space-y-2">
              <label className="text-sm font-medium text-neutral-500 ml-1">Full Name</label>
              <div className="relative">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-600" size={18} />
                <input 
                  required
                  value={formData.name}
                  onChange={e => setFormData({...formData, name: e.target.value})}
                  className="w-full bg-neutral-800 border border-neutral-700/50 rounded-2xl pl-12 pr-4 py-4 text-white outline-none focus:border-amber-500/50 transition-all placeholder:text-neutral-700" 
                  placeholder="Jane Doe"
                />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-5">
              <div className="space-y-2">
                <label className="text-sm font-medium text-neutral-500 ml-1">Email</label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-600" size={18} />
                  <input 
                    type="email"
                    required
                    value={formData.email}
                    onChange={e => setFormData({...formData, email: e.target.value})}
                    className="w-full bg-neutral-800 border border-neutral-700/50 rounded-2xl pl-12 pr-4 py-4 text-white outline-none focus:border-amber-500/50 transition-all placeholder:text-neutral-700" 
                    placeholder="jane@example.com"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-neutral-500 ml-1">Phone</label>
                <div className="relative">
                  <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-600" size={18} />
                  <input 
                    required
                    value={formData.phone}
                    onChange={e => setFormData({...formData, phone: e.target.value})}
                    className="w-full bg-neutral-800 border border-neutral-700/50 rounded-2xl pl-12 pr-4 py-4 text-white outline-none focus:border-amber-500/50 transition-all placeholder:text-neutral-700" 
                    placeholder="+1 234 567 890"
                  />
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-neutral-500 ml-1">Service Address</label>
              <div className="relative">
                <MapPin className="absolute left-4 top-4 text-neutral-600" size={18} />
                <textarea 
                  required
                  rows="3"
                  value={formData.address}
                  onChange={e => setFormData({...formData, address: e.target.value})}
                  className="w-full bg-neutral-800 border border-neutral-700/50 rounded-2xl pl-12 pr-4 py-4 text-white outline-none focus:border-amber-500/50 transition-all placeholder:text-neutral-700 resize-none" 
                  placeholder="123 Beauty Lane, Glamour City"
                />
              </div>
            </div>

            {error && (
              <p className="text-red-400 text-sm bg-red-950/20 border border-red-500/20 p-4 rounded-xl">
                {error}
              </p>
            )}

            <button 
              type="submit"
              disabled={status === 'loading'}
              className="w-full h-16 bg-amber-600 hover:bg-amber-500 text-black font-bold rounded-2xl transition-all shadow-xl shadow-amber-900/20 flex items-center justify-center gap-3 disabled:opacity-50"
            >
              {status === 'loading' ? (
                <Loader2 className="animate-spin" size={20} />
              ) : (
                <>Submit Booking Request</>
              )}
            </button>
          </form>
        </div>
      </motion.div>
    </div>
  );
}
