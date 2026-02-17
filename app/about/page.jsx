"use client"
// pages/about.js
import Head from 'next/head';
import Navigation from '../components/Navigation';
import { Crown, Sparkles, Heart, Users, Award, Globe, Instagram, Facebook, X , User, Loader2 } from 'lucide-react';
import { useState, useEffect } from 'react';
import { fetchProfile } from '../utils/service';

export default function About() {
  const [activeTab, setActiveTab] = useState('mission');
  const [adminProfile, setAdminProfile] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getAdminData = async () => {
      setIsLoading(true);
      try {
        const id = "69709ceb0841a926ad18e444"; // Gloria's Admin ID
        const result = await fetchProfile(id);
        if (result.success) {
          setAdminProfile(result.data);
        }
      } catch (err) {
        console.error("Failed to fetch admin profile:", err);
      } finally {
        setIsLoading(false);
      }
    };
    getAdminData();
  }, []);

  const values = [
    {
      icon: <Crown size={32} />,
      title: "Luxury Quality",
      description: "Only the finest ingredients and packaging materials"
    },
    {
      icon: <Sparkles size={32} />,
      title: "Innovation",
      description: "Constantly pushing boundaries in cosmetic science"
    },
    {
      icon: <Heart size={32} />,
      title: "Cruelty-Free",
      description: "Never tested on animals, certified by PETA"
    },
    {
      icon: <Globe size={32} />,
      title: "Sustainability",
      description: "Eco-conscious packaging and responsible sourcing"
    }
  ];

  return (
    <>
      <Head>
        <title>About Us | Liora</title>
        <meta name="description" content="Our story, mission, and values" />
      </Head>

      <Navigation />
      
      <main className="min-h-screen bg-black text-amber-50">
        {/* Hero Section */}
        <section className="min-h-screen flex flex-col justify-center items-center relative overflow-hidden pt-12 pb-24">
          <div className="relative z-10 flex justify-center pt-4">
                <div className="h-1 w-48 md:w-64 bg-gradient-to-r from-transparent via-amber-500 to-transparent"></div>
              </div>
          <div className="absolute inset-0 bg-linear-to-b from-black via-gray-900 to-black z-0"></div>
          <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-amber-900/10 rounded-full blur-3xl"></div>
          
          <div className="relative z-10 max-w-6xl mx-auto px-4">
            <div className="text-center mb-12 mt-12">
              <h1 className="text-5xl md:text-6xl font-serif mb-6">
                <span className="block">Our Story of</span>
                <span className="gradient-text">Elegance & Innovation</span>
              </h1>
               
              <p className="mt-6 text-xl text-amber-200 max-w-3xl mx-auto">
                Since 2015, Liora has redefined luxury makeup by merging 
                timeless elegance with cutting-edge cosmetic science.
              </p>
            </div>
          </div>
          <div className="relative z-10 flex justify-center pt-4">
                <div className="h-1 w-48 md:w-64 bg-gradient-to-r from-transparent via-amber-500 to-transparent"></div>
              </div>
        </section>

        {/* Tabs Section */}
        <section className="min-h-screen flex flex-col justify-center items-center py-16 px-4 bg-linear-to-b from-black to-gray-900">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {['mission', 'story', 'values', 'team'].map((tab) => (
                <button 
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`relative flex items-center justify-center gap-2 px-8 py-4 border rounded-full transition-all duration-500 overflow-hidden font-medium ${
                    activeTab === tab 
                      ? 'bg-amber-900/20 text-amber-400 border-amber-500/50 shadow-[0_0_25px_rgba(180,83,9,0.2)]' 
                      : 'border-neutral-800 text-neutral-500 hover:text-amber-200 hover:bg-neutral-900/40 backdrop-blur-sm'
                  }`}
                >
                  {tab === 'team' ? 'Our Founder' : tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </div>

            <div className="bg-neutral-900/40 backdrop-blur-xl border border-neutral-800/50 rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/5 rounded-full blur-[100px] -mr-32 -mt-32"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-amber-900/5 rounded-full blur-[100px] -ml-32 -mb-32"></div>
              {activeTab === 'mission' && (
                <div>
                  <h2 className="text-3xl font-serif mb-6">Our Mission</h2>
                  <p className="text-amber-200 text-lg mb-6">
                    At Liora, we believe that true beauty lies in confidence and self-expression. 
                    Our mission is to create luxurious, high-performance makeup that empowers 
                    individuals to reveal their most authentic selves.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                    <div className="text-center p-6 border border-gray-500/30 rounded-xl">
                      <div className="text-4xl font-bold gradient-text mb-2">100K+</div>
                      <div className="text-gray-500">Satisfied Customers</div>
                    </div>
                    <div className="text-center p-6 border border-gray-500/30 rounded-xl">
                      <div className="text-4xl font-bold gradient-text mb-2">50+</div>
                      <div className="text-gray-500">Award-Winning Products</div>
                    </div>
                    <div className="text-center p-6 border border-gray-500/30 rounded-xl">
                      <div className="text-4xl font-bold gradient-text mb-2">40</div>
                      <div className="text-gray-500">Countries Worldwide</div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'story' && (
                <div>
                  <h2 className="text-3xl font-serif mb-6">The Liora Journey</h2>
                  <div className="space-y-6">
                    <div className="border-l-4 border-gray-500/50 pl-6 py-2">
                      <h3 className="text-xl font-semibold mb-2">2015: The Beginning</h3>
                      <p className="text-amber-200">
                        Founded by Elena Rossi, a renowned makeup artist who saw a gap 
                        in the market for truly luxurious, performance-driven cosmetics.
                      </p>
                    </div>
                    <div className="border-l-4 border-amber-600 pl-6 py-2">
                      <h3 className="text-xl font-semibold mb-2">2018: Breakthrough</h3>
                      <p className="text-amber-200">
                        Launch of our signature Gold Luxe Collection, which quickly 
                        became a cult favorite among beauty editors and influencers.
                      </p>
                    </div>
                    <div className="border-l-4 border-amber-600 pl-6 py-2">
                      <h3 className="text-xl font-semibold mb-2">2021: Global Expansion</h3>
                      <p className="text-amber-200">
                        Expanded to 40+ countries and achieved carbon-neutral certification 
                        for all our operations and products.
                      </p>
                    </div>
                    <div className="border-l-4 border-amber-600 pl-6 py-2">
                      <h3 className="text-xl font-semibold mb-2">Today: Innovation</h3>
                      <p className="text-amber-200">
                        Continuing to push boundaries with sustainable packaging, 
                        innovative formulas, and digital beauty experiences.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'values' && (
                <div>
                  <h2 className="text-3xl font-serif mb-8">Our Core Values</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {values.map((value, index) => (
                      <div key={index} className="text-center p-6 border border-gray-500/30 rounded-xl hover:border-gray-700 transition-colors">
                        <div className="inline-flex p-3 rounded-full bg-linear-to-br from-gray-900/30 to-gray-800/30 mb-4">
                          <div className="text-gray-400">{value.icon}</div>
                        </div>
                        <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                        <p className="text-gray-300">{value.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'team' && (
                isLoading ? (
                  <div className="flex flex-col items-center justify-center py-20 animate-pulse">
                    <Loader2 size={40} className="text-amber-500 animate-spin mb-4" />
                    <p className="text-neutral-500 font-serif">Curating the Founder's story...</p>
                  </div>
                ) : adminProfile ? (
                  <div className="flex flex-col md:flex-row items-center gap-12 animate-fade-in">
                    <div className="w-full md:w-1/3">
                      <div className={`aspect-square rounded-3xl bg-linear-to-br ${adminProfile.avatarColor || "from-amber-700 to-yellow-600"} relative overflow-hidden shadow-2xl group`}>
                        <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-500"></div>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <User size={80} className="text-white/20" />
                        </div>
                        <div className="absolute bottom-0 left-0 right-0 p-6 bg-linear-to-t from-black/80 to-transparent">
                          <div className="text-3xl font-serif text-white">{adminProfile.name}</div>
                        </div>
                      </div>
                    </div>
                    <div className="flex-1 space-y-6">
                      <div>
                        <span className="text-xs font-bold text-amber-500 uppercase tracking-widest bg-amber-900/20 px-3 py-1 rounded-full border border-amber-700/30">Founder & CEO</span>
                        <h2 className="text-4xl font-serif mt-4">{adminProfile.name}</h2>
                      </div>
                      <p className="text-neutral-300 text-lg leading-relaxed">{adminProfile.aboutMe || adminProfile.bio || "The visionary behind Liora, combining a passion for timeless elegance with a dedication to innovative cosmetic science."}</p>
                      
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                        {(adminProfile.achievements && adminProfile.achievements.length > 0) ? (
                          adminProfile.achievements.map((item, i) => (
                            <div key={i} className="flex items-center gap-3 text-neutral-400 bg-black/20 p-4 rounded-2xl border border-neutral-800/50">
                              <Crown size={18} className="text-amber-500/60" />
                              <span className="text-sm font-medium">{item.title}</span>
                            </div>
                          ))
                        ) : (
                          <div className="col-span-2 text-neutral-600 italic text-sm">Credentials being updated in the Admin Dashboard.</div>
                        )}
                      </div>
                      
                      <div className="flex gap-4 pt-6">
                        <button className="px-8 py-3 bg-amber-600 text-white font-bold rounded-full hover:bg-amber-500 transition-all shadow-lg shadow-amber-900/30">Connect</button>
                        <div className="flex items-center gap-4 text-neutral-500 px-4">
                          {adminProfile.socials?.instagram && <Instagram className="hover:text-amber-400 cursor-pointer transition-colors" size={20} />}
                          {adminProfile.socials?.X && <X className="hover:text-amber-400 cursor-pointer transition-colors" size={20} />}
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="text-center py-20 text-neutral-500 font-serif">
                    Experience the legacy of Liora soon.
                  </div>
                )
              )}
            </div>
          </div>
        </section>

        
      </main>

   {/* Footer */}
        <footer 
          
          className="bg-black border-t border-gray-300 py-8 px-4"
        >
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div 
               
                className="mb-6 md:mb-0"
              >
                <h2 className="text-3xl font-serif text-amber-100 sm:text-center">LIORA</h2>
                <p className="text-gray-300 mt-2">Luxury Makeup & Beauty</p>
              </div>
              <div 
                
                className="flex gap-6"
              >
                <a href="https://www.instagram.com/ihekauche?igsh=MWttNjNibG44ejJtZg==" className="text-gray-300 hover:text-gray-100 transition-colors">        
                  <Instagram size={24} />
                </a>
                <a href="https://www.facebook.com/share/18B2QgMSek/?mibextid=wwXIfr" className="text-gray-300 hover:text-gray-100 transition-colors">
                  <Facebook size={24} />
                </a>
                <a href="#" className="text-gray-300 hover:text-gray-100 transition-colors">
                  <X size={24} />
                </a>
              </div>
            </div>
            <div 
              
              className="text-center mt-8 pt-6 text-amber-300 text-sm"
            >
              <p>&copy; {new Date().getFullYear()} Liora Luxury Cosmetics. All rights reserved.</p>
            </div>
          </div>
        </footer>
    </>
  );
}