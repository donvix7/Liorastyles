"use client"
// pages/about.js
import Head from 'next/head';
import Navigation from '../components/Navigation';
import { Crown, Sparkles, Heart, Users, Award, Globe, Instagram, Facebook, Twitter } from 'lucide-react';
import { useState } from 'react';

export default function About() {
  const [activeTab, setActiveTab] = useState('mission');

  const teamMembers = [
    {
      id: 1,
      name: "Elena Rossi",
      role: "Founder & Creative Director",
      imageColor: "bg-gradient-to-br from-amber-800 to-yellow-600",
      description: "Former luxury fashion makeup artist with 15+ years experience"
    },
    {
      id: 2,
      name: "Marcus Chen",
      role: "Head of Product Development",
      imageColor: "bg-gradient-to-br from-gray-800 to-amber-900",
      description: "Specialist in cosmetic chemistry and sustainable ingredients"
    },
    {
      id: 3,
      name: "Isabelle Laurent",
      role: "Global Art Director",
      imageColor: "bg-gradient-to-br from-yellow-900 to-amber-700",
      description: "Award-winning makeup artist and beauty influencer"
    },
    {
      id: 4,
      name: "David Park",
      role: "Sustainability Lead",
      imageColor: "bg-gradient-to-br from-gray-900 to-yellow-800",
      description: "Focus on ethical sourcing and environmental initiatives"
    }
  ];

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
          <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black z-0"></div>
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
        <section className="min-h-screen flex flex-col justify-center items-center py-16 px-4 bg-gradient-to-b from-black to-gray-900">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {['mission', 'story', 'values', 'team'].map((tab) => (
                  
                <button 
                key={tab}
                onClick={() => setActiveTab(tab)}
                className=" relative flex items-center justify-center gap-2 md:gap-2 px-6 py-3 md:px-8 md:py-4 border border-amber-300 text-amber-300 font-semibold rounded-full transition-all duration-500 transform hover:-translate-y-1 hover:shadow-xl md:hover:shadow-2xl hover:shadow-amber-900/50 overflow-hidden">
                    {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </div>

            <div className="bg-gradient-to-br from-gray-900 to-black border border-gray-500/50 rounded-2xl p-8 md:p-12">
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
                        <div className="inline-flex p-3 rounded-full bg-gradient-to-br from-gray-900/30 to-gray-800/30 mb-4">
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
                <div>
                  <h2 className="text-3xl font-serif mb-8">Meet Our Leadership</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {teamMembers.map(member => (
                      <div key={member.id} className="text-center">
                        <div className={`${member.imageColor} h-48 rounded-2xl mb-4 flex items-center justify-center`}>
                          <div className="text-4xl font-serif text-amber-100/60">{member.name.charAt(0)}</div>
                        </div>
                        <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                        <p className="text-amber-400 mb-3">{member.role}</p>
                        <p className="text-sm text-amber-300/80">{member.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
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
                  <Twitter size={24} />
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