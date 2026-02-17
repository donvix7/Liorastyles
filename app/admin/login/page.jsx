"use client"
import { useState } from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { Lock, Mail, Loader2, ChevronRight, AlertCircle } from 'lucide-react';
import Navigation from '@/app/components/Navigation';

export default function AdminLogin() {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const result = await res.json();

      if (result.success) {
        // Store user in localStorage (simple auth for this demo)
        localStorage.setItem('liora_user', JSON.stringify(result.data));
        window.location.href = '/dashboard';
      } else {
        setError(result.error || 'Login failed. Please check your credentials.');
      }
    } catch (err) {
      setError('An error occurred. Please try again later.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-black text-amber-50 selection:bg-amber-500/30">
      <Head>
        <title>Admin Login | LIORA</title>
      </Head>
      
      <Navigation />

      <main className="relative flex items-center justify-center pt-32 pb-20 px-4">
        {/* Background glow effects */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-amber-900/10 rounded-full blur-[120px] -z-10 animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-amber-700/5 rounded-full blur-[120px] -z-10"></div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="w-full max-w-md"
        >
          <div className="text-center mb-10">
            <h1 className="text-4xl font-serif tracking-widest text-amber-100 mb-3 uppercase">Management</h1>
            <p className="text-amber-200/50 font-light tracking-wide">Enter your credentials to access the studio dashboard</p>
          </div>

          <div className="bg-neutral-900 border border-neutral-800 rounded-4xl p-8 md:p-12 shadow-2xl relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-transparent via-amber-500/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            
            <form onSubmit={handleLogin} className="space-y-6">
              {error && (
                <motion.div 
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  className="p-4 bg-red-950/20 border border-red-500/20 rounded-2xl flex items-start gap-3 text-red-400 text-sm"
                >
                  <AlertCircle size={18} className="shrink-0 mt-0.5" />
                  <p>{error}</p>
                </motion.div>
              )}

              <div className="space-y-2">
                <label className="text-sm font-medium text-neutral-500 ml-1">Email Address</label>
                <div className="relative group/input">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-600 group-focus-within/input:text-amber-500/50 transition-colors" size={20} />
                  <input 
                    type="email" 
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full bg-neutral-950/30 border border-neutral-800 focus:border-amber-500/30 rounded-2xl pl-12 pr-4 py-4 text-white outline-none transition-all placeholder:text-neutral-700" 
                    placeholder="admin@liora.com"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-neutral-500 ml-1">Password</label>
                <div className="relative group/input">
                  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-600 group-focus-within/input:text-amber-500/50 transition-colors" size={20} />
                  <input 
                    type="password" 
                    required
                    value={formData.password}
                    onChange={(e) => setFormData({...formData, password: e.target.value})}
                    className="w-full bg-neutral-950/30 border border-neutral-800 focus:border-amber-500/30 rounded-2xl pl-12 pr-4 py-4 text-white outline-none transition-all placeholder:text-neutral-700" 
                    placeholder="••••••••"
                  />
                </div>
              </div>

              <button 
                type="submit" 
                disabled={isLoading}
                className="w-full relative group/btn overflow-hidden"
              >
                <div className="absolute inset-0 bg-linear-to-r from-amber-600 to-amber-400 translate-y-[101%] group-hover/btn:translate-y-0 transition-transform duration-500"></div>
                <div className="relative flex items-center justify-center gap-3 bg-amber-600 text-black font-bold py-4 px-8 rounded-2xl transition-all group-hover/btn:bg-transparent">
                  {isLoading ? (
                    <Loader2 className="animate-spin" size={20} />
                  ) : (
                    <>
                      <span>Sign In</span>
                      <ChevronRight size={20} />
                    </>
                  )}
                </div>
              </button>
            </form>
          </div>
          
          <p className="mt-8 text-center text-neutral-600 text-sm">
            Restricted access. Dedicated to Liora Studio Administrators only.
          </p>
        </motion.div>
      </main>

      <style jsx global>{`
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.1; }
          50% { opacity: 0.3; }
        }
        .animate-pulse-slow {
          animation: pulse-slow 8s infinite;
        }
      `}</style>
    </div>
  );
}
