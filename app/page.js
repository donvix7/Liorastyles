"use client"

// pages/index.js
import Head from 'next/head';
import { useState, useEffect, useRef } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import ProductCard from './components/ProductCard';
import { Facebook, Twitter, Instagram, Github, FileStack, Palette, Sparkles, Brush, Eye, Users, BookOpen, Calendar, Award, Shield, } from 'lucide-react'
import ServiceCard from './components/ProductCard';

export default function Home() {
  const [cartCount, setCartCount] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  // Refs for each section
  const featuredRef = useRef(null);
  const aboutRef = useRef(null);
  const newsletterRef = useRef(null);
  const footerRef = useRef(null);

  const addToCart = () => {
    setCartCount(cartCount + 1);
  };

  // Intersection Observer for fade-in animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Add animation classes
            entry.target.classList.add('opacity-100', 'translate-y-0');
            entry.target.classList.remove('opacity-0', 'translate-y-12');
            
            // Also animate child elements with delays
            const animatedChildren = entry.target.querySelectorAll('[data-animate]');
            animatedChildren.forEach((child, index) => {
              setTimeout(() => {
                child.classList.add('opacity-100', 'translate-y-0');
                child.classList.remove('opacity-0', 'translate-y-6');
              }, index * 200);
            });
          }
        });
      },
      {
        threshold: 0.15, // Trigger when 15% of element is visible
        rootMargin: '0px 0px -100px 0px' // Slight offset
      }
    );

    // Observe all sections
    const sections = [featuredRef.current, aboutRef.current, newsletterRef.current, footerRef.current];
    sections.forEach(section => {
      if (section) observer.observe(section);
    });

    return () => {
      sections.forEach(section => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  const makeupServices = [
    {
      id: 1,
      name: "Bridal Glamour Package",
      imageUrl: "/images/services/70+ Glam Bridal Makeup Looks.jpeg",
      category: "Full Face",
      price: "$250",
      duration: "3-4 hours",
      icon: <Sparkles className="w-12 h-12 text-amber-300" />,
      imageColor: "bg-gradient-to-br from-amber-900 via-amber-700 to-yellow-500",
      description: "Complete bridal makeup with trial, premium products, and touch-up kit",
      features: ["Pre-wedding trial", "Luxury products", "Touch-up kit", "False lashes included"]
    },
    {
      id: 2,
      name: "Evening Glam Transformation",
      imageUrl: "/images/services/gal.jpg",

      category: "Special Event",
      price: "$180",
      duration: "2 hours",
      icon: <Palette className="w-12 h-12 text-amber-300" />,
      imageColor: "bg-gradient-to-br from-purple-900 via-violet-800 to-amber-700",
      description: "Dramatic evening look perfect for galas, parties, and special occasions",
      features: ["Smokey eye option", "Contour & highlight", "Long-lasting setting", "Lash application"]
    },
    {
      id: 3,
      name: "Natural Daytime Makeover",
      imageUrl: "/images/services/daily.jpg",

      category: "Day Makeup",
      price: "$120",
      duration: "1.5 hours",
      icon: <Brush className="w-12 h-12 text-amber-300" />,
      imageColor: "bg-gradient-to-br from-amber-200 via-amber-400 to-yellow-600",
      description: "Fresh, natural look enhanced with subtle definition and glowing skin",
      features: ["Skin prep & prime", "Natural enhancement", "Waterproof products", "Skincare focus"]
    },
    {
      id: 4,
      name: "Editorial Photoshoot Makeup",
      imageUrl: "/images/services/shoot.jpg",
      
      category: "Professional",
      price: "$300",
      duration: "4+ hours",
      icon: <Eye className="w-12 h-12 text-amber-300" />,
      imageColor: "bg-gradient-to-br from-gray-900 via-amber-800 to-black",
      description: "High-fashion looks designed for photography and video production",
      features: ["Camera-ready finish", "Multiple looks", "HD makeup", "Artist on set"]
    },
    {
      id: 5,
      name: "Group Makeup Sessions",
      imageUrl: "/images/services/Your Foundation Dilemmas Solved _ Essence.jpeg",

      category: "Group Service",
      price: "$90/person",
      duration: "1 hour/person",
      icon: <Users className="w-12 h-12 text-amber-300" />, // Add Users import
      imageColor: "bg-gradient-to-br from-amber-800 via-yellow-700 to-amber-900",
      description: "Perfect for bridal parties, proms, or group events with customized looks",
      features: ["Minimum 3 people", "Customized looks", "Group discount", "Travel available"]
    },
    {
      id: 6,
      name: "Makeup Lesson & Consultation",
      imageUrl: "/images/services/lesson.jpg",

      category: "Education",
      price: "$150",
      duration: "2 hours",
      icon: <BookOpen className="w-12 h-12 text-amber-300" />, // Add BookOpen import
      imageColor: "bg-gradient-to-br from-amber-600 via-yellow-500 to-amber-800",
      description: "Personalized lesson teaching you how to recreate your favorite Liora looks",
      features: ["Product guidance", "Technique tutorial", "Take-home notes", "Product samples"]
    }
  ];

  return (
    <>
      <Head>
        <title>Liora | Luxury Makeup</title>
        <meta name="description" content="Premium black and gold themed makeup brand" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navigation 
        cartCount={cartCount} 
        isMenuOpen={isMenuOpen} 
        setIsMenuOpen={setIsMenuOpen}
      />
      
      {/* REMOVED snap scrolling classes from main */}
      <main className="min-h-screen bg-black text-amber-50">
        {/* Hero section */}
        <section>
          <Hero />
        </section>
        
        {/* Featured Products Section */}
        <section 
          ref={featuredRef}
          className="py-16 px-4 max-w-7xl mx-auto opacity-0 translate-y-12 transition-all duration-1000 ease-out"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif mb-4" data-animate="true">Featured Collection</h2>
            <div className="relative z-10 flex justify-center" data-animate="true">
              <div className="h-1 w-64 bg-gradient-to-r from-transparent via-amber-500 to-transparent"></div>
            </div>
            <p className="mt-6 text-amber-200 max-w-2xl mx-auto opacity-0 translate-y-6 transition-all duration-800 ease-out delay-300" data-animate="true">
              Discover our signature line of luxury makeup products, 
              where timeless elegance meets modern innovation.
            </p>
          </div>
          
          {/* Product cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {makeupServices.map((service, index) => (
              <div 
                key={service.id}
                className="opacity-0 translate-y-8 transition-all duration-700 ease-out"
                style={{ 
                  transitionDelay: `${index * 150}ms`,
                  transitionProperty: 'opacity, transform'
                }}
                data-animate="true"
              >
                <ServiceCard 
                  service={service} 
                  addToCart={addToCart}
                />
              </div>
            ))}
          </div>
        </section>
        
        {/* About Section */}
        <section 
          ref={aboutRef}
          className="py-16 px-4 bg-gradient-to-t from-black to-gray-900 min-h-screen flex items-center opacity-0 translate-y-12 transition-all duration-1000 ease-out"
        >
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-serif mb-6 opacity-0 translate-y-6 transition-all duration-800 ease-out" data-animate="true">The Liora Philosophy</h2>
            <div className="h-1 w-64 bg-gradient-to-r from-transparent via-amber-300 to-transparent mx-auto mb-8 opacity-0 translate-y-6 transition-all duration-800 ease-out delay-200" data-animate="true"></div>
            <p className="text-xl text-amber-100 mb-6 opacity-0 translate-y-6 transition-all duration-800 ease-out delay-400" data-animate="true">
              At Liora, we believe makeup is an art form—a way to express your 
              inner radiance and confidence. Our black and gold collection 
              embodies sophistication, luxury, and timeless beauty.
            </p>
            <p className="text-lg text-amber-200 mb-6 opacity-0 translate-y-6 transition-all duration-800 ease-out delay-600" data-animate="true">
              Each product is carefully crafted with premium ingredients, 
              designed to make you feel as luxurious as you look.
            </p>
            <div className="h-1 w-64 bg-gradient-to-r from-transparent via-amber-300 to-transparent mx-auto mb-8 opacity-0 translate-y-6 transition-all duration-800 ease-out delay-800" data-animate="true"></div>
          </div>
        </section>

        
       
        
        {/* Newsletter/Booking Section - Updated */}
        <section 
          ref={newsletterRef}
          className="py-16 px-4 min-h-screen flex items-center opacity-0 translate-y-12 transition-all duration-1000 ease-out"
        >
          <div className="mb-5 max-w-2xl mx-auto text-center w-full">
            <div className=" rounded-2xl p-8 bg-gradient-to-r from-black to-gray-900/90 backdrop-blur-sm opacity-0 translate-y-6 transition-all duration-800 ease-out delay-300" data-animate="true">
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
                  className="px-4 py-3 rounded-lg bg-gray-800/50 text-amber-50 border border-gray-500/50 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                />
                <input 
                  type="email" 
                  placeholder="Email Address"    
                  className="px-4 py-3 rounded-lg bg-gray-800/50 text-amber-50 border border-gray-500/50 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                />
                <select className="px-4 py-3 rounded-lg bg-gray-800/50 text-amber-50 border border-gray-500/50 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent">
                  <option value="">Select Service</option>
                  {makeupServices.map(service => (
                    <option key={service.id} value={service.id}>{service.name}</option>
                  ))}
                </select>
                <button className="flex gap-2 justify-center items-center px-6 py-4 bg-gradient-to-r from-amber-700 to-amber-900 text-amber-50 font-semibold rounded-lg hover:from-amber-600 hover:to-yellow-800 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl hover:shadow-amber-900/30">
                  <FileStack size={20}/>
                  Request Booking
                </button>
              </div>
              <p className="text-gray-300 text-sm mt-6">
                A Liora consultant will contact you within 24 hours to confirm your appointment.
              </p>
            </div>
            <div className="max-w-2xl mx-auto text-center w-full">

          </div>
          </div>

        </section>
        
        {/* Footer */}
        <footer 
          ref={footerRef}
          className="bg-black border-t border-gray-300 py-8 px-4 opacity-0 translate-y-12 transition-all duration-1000 ease-out"
        >
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="mb-6 md:mb-0 opacity-0 translate-y-6 transition-all duration-800 ease-out delay-300" data-animate="true">
                <h2 className="text-3xl font-serif text-amber-100 sm:text-center">LIORA</h2>
                <p className="text-gray-300 mt-2">Luxury Makeup & Beauty</p>
              </div>
              <div className="flex gap-6 opacity-0 translate-y-6 transition-all duration-800 ease-out delay-500" data-animate="true">
                <a href="#" className="text-gray-300 hover:text-gray-100 transition-colors">        
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
            <div className="text-center mt-8 pt-6 text-amber-300 text-sm opacity-0 translate-y-6 transition-all duration-800 ease-out delay-700" data-animate="true">
              <p>&copy; {new Date().getFullYear()} Liora Luxury Cosmetics. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}