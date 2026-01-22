"use client"
import Head from 'next/head';
import Navigation from '../components/Navigation';
import { useState, useEffect } from 'react';
import { User, Package, Settings, Bell, MapPin, Edit, Camera, Mail, Calendar, Crown, X, Save, Loader2 } from 'lucide-react';

export default function Profile() {
  const [activeSection, setActiveSection] = useState('overview');
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isFetching, setIsFetching] = useState(true);
  const [error, setError] = useState(null);
  
  const [userData, setUserData] = useState({
    _id: "",
    name: "",
    email: "",
    phone: "",
    location: "",
    dateOfBirth: "",
    bio: "",
    joinDate: "",
    membership: "Gold Tier",
    avatarColor: "from-amber-700 to-yellow-600",
  });
  
  const [editFormData, setEditFormData] = useState({ ...userData });
 const API_URL = "http://localhost:3000/api"
  const [orders] = useState([
    { id: 1, date: "2023-11-15", total: "$142", status: "Delivered", items: ["Gold Luxe Lipstick", "Midnight Mascara"] },
    { id: 2, date: "2023-10-28", total: "$89", status: "Delivered", items: ["Golden Hour Palette"] },
    { id: 3, date: "2023-10-10", total: "$210", status: "Processing", items: ["Black Velvet Foundation", "Setting Powder"] },
  ]);

  const getUserData = async () => {
    try {
      setIsFetching(true);
      setError(null);
      // Hardcoded ID for demo purposes, in prod use session ID
      const response = await fetch(`${API_URL}/profile/69709ceb0841a926ad18e444`);
      
      if (!response.ok) {
        throw new Error(`Failed to fetch user data: ${response.status}`);
      }
      
      const data = await response.json();
      
      const transformedData = {
        _id: data._id,
        name: data.name || "",
        email: data.email || "",
        phone: data.phone || "",
        location: data.location || "",
        dateOfBirth: data.dateOfBirth || "",
        bio: data.bio || "No bio added yet.",
        joinDate: data.joinDate || "March 2022",
        membership: data.membership || "Gold Tier",
        avatarColor: data.avatarColor || "from-amber-700 to-yellow-600",
      };
      
      setUserData(transformedData);
      setEditFormData(transformedData);
    } catch(error) {
      console.error("Error fetching user data:", error);
      setError("Failed to load profile data");
    } finally {
      setIsFetching(false);
    }
  };

  useEffect(() => {
    getUserData();
  }, []);

  const handleEditProfile = () => {
    setEditFormData({ ...userData });
    setIsEditModalOpen(true);
  };
  
  const handleSaveProfile = async () => {
    setIsLoading(true);
    setError(null);
    
    try {
      const response = await fetch(`${API_URL}/profile/${userData._id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(editFormData)
      });
      
      const data = await response.json();
      
      if (!response.ok) throw new Error(data.error || "Failed to update profile");
      
      // Update local state deeply merging response to ensure consistency
      setUserData(prev => ({ ...prev, ...data.profile })); 
      setIsEditModalOpen(false);
      
    } catch(error) {
      console.error("Error updating profile:", error);
      alert(`Failed to update profile: ${error.message}`);
    } finally {
      setIsLoading(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleAvatarColorChange = (color) => {
    setEditFormData(prev => ({ ...prev, avatarColor: color }));
  };

  const avatarColors = [
    { value: "from-amber-700 to-yellow-600", label: "Gold", bg: "bg-gradient-to-br from-amber-700 to-yellow-600" },
    { value: "from-purple-700 to-pink-600", label: "Purple", bg: "bg-gradient-to-br from-purple-700 to-pink-600" },
    { value: "from-rose-700 to-red-600", label: "Rose", bg: "bg-gradient-to-br from-rose-700 to-red-600" },
    { value: "from-emerald-700 to-teal-600", label: "Emerald", bg: "bg-gradient-to-br from-emerald-700 to-teal-600" },
    { value: "from-blue-700 to-indigo-600", label: "Sapphire", bg: "bg-gradient-to-br from-blue-700 to-indigo-600" },
  ];

  if (isFetching) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <Loader2 className="w-10 h-10 text-amber-500 animate-spin" />
          <p className="text-amber-100/70">Loading profile...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-amber-50 selection:bg-amber-900/50 selection:text-white">
      <Head>
        <title>My Profile | Liora</title>
      </Head>

      <Navigation />
      
      <main className="pt-24 pb-20 px-4 md:px-8">
        <div className="max-w-7xl mx-auto space-y-8">
          
          {/* Header Card */}
          <div className="relative overflow-hidden rounded-3xl bg-neutral-900/50 border border-neutral-800 backdrop-blur-sm p-6 md:p-10">
            <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-amber-900/20 to-transparent pointer-events-none" />
            
            <div className="relative flex flex-col md:flex-row gap-8 items-center md:items-start text-center md:text-left">
              {/* Avatar */}
              <div className="relative group shrink-0">
                <div className={`w-32 h-32 md:w-40 md:h-40 rounded-full bg-gradient-to-br ${userData.avatarColor} shadow-2xl ring-4 ring-black flex items-center justify-center`}>
                  <User size={64} className="text-white/90 drop-shadow-md" />
                </div>
                <button 
                  onClick={handleEditProfile}
                  className="absolute bottom-1 right-1 p-2.5 bg-neutral-900 border border-neutral-700 rounded-full text-amber-400 hover:bg-neutral-800 transition-all shadow-lg group-hover:scale-110"
                >
                  <Camera size={18} />
                </button>
              </div>

              {/* Info */}
              <div className="flex-1 space-y-4">
                <div>
                  <div className="flex flex-col md:flex-row items-center gap-3 md:gap-5 mb-2 justify-center md:justify-start">
                    <h1 className="text-3xl md:text-4xl font-serif tracking-tight">{userData.name || "User Name"}</h1>
                    <span className="px-4 py-1.5 rounded-full bg-gradient-to-r from-amber-900/40 to-yellow-900/40 border border-amber-700/30 text-amber-300 text-sm font-medium flex items-center gap-1.5">
                      <Crown size={14} />
                      {userData.membership}
                    </span>
                  </div>
                  <p className="text-neutral-400 max-w-2xl text-lg leading-relaxed">{userData.bio}</p>
                </div>

                <div className="flex flex-wrap gap-4 md:gap-8 justify-center md:justify-start text-sm text-neutral-400 pt-2">
                  {userData.email && (
                    <div className="flex items-center gap-2">
                      <Mail size={16} className="text-amber-500/80" />
                      {userData.email}
                    </div>
                  )}
                  {userData.location && (
                    <div className="flex items-center gap-2">
                      <MapPin size={16} className="text-amber-500/80" />
                      {userData.location}
                    </div>
                  )}
                  {userData.joinDate && (
                    <div className="flex items-center gap-2">
                      <Calendar size={16} className="text-amber-500/80" />
                      Joined {userData.joinDate}
                    </div>
                  )}
                </div>
              </div>

              {/* Action */}
              <button 
                onClick={handleEditProfile}
                className="shrink-0 px-6 py-3 rounded-full border border-neutral-700 hover:border-amber-700/50 hover:bg-amber-950/10 text-neutral-300 hover:text-amber-200 transition-all flex items-center gap-2 font-medium"
              >
                <Edit size={16} />
                Edit Profile
              </button>
            </div>
          </div>

          <div className="grid lg:grid-cols-4 gap-8">
            {/* Sidebar Navigation */}
            <nav className="lg:col-span-1 space-y-2 sticky top-28 h-fit">
              {[
                { id: 'overview', icon: User, label: 'Overview' },
                { id: 'orders', icon: Package, label: 'Orders' },
                { id: 'settings', icon: Settings, label: 'Settings' },
              ].map(({ id, icon: Icon, label }) => (
                <button 
                  key={id}
                  onClick={() => setActiveSection(id)}
                  className={`w-full flex items-center gap-3 px-5 py-4 rounded-xl transition-all font-medium text-left ${
                    activeSection === id 
                      ? 'bg-gradient-to-r from-amber-950/40 to-transparent text-amber-400 border-l-2 border-amber-500' 
                      : 'text-neutral-400 hover:text-neutral-200 hover:bg-neutral-900/50'
                  }`}
                >
                  <Icon size={20} className={activeSection === id ? "text-amber-500" : "opacity-70"} />
                  {label}
                </button>
              ))}
            </nav>

            {/* Content Area */}
            <div className="lg:col-span-3 min-h-[500px]">
              {activeSection === 'overview' && (
                <div className="space-y-6 animate-fade-in">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="p-6 rounded-2xl bg-neutral-900/30 border border-neutral-800 hover:border-amber-900/30 transition-colors">
                      <div className="text-neutral-400 text-sm mb-1">Total Orders</div>
                      <div className="text-3xl font-serif text-white">{orders.length}</div>
                    </div>
                    <div className="p-6 rounded-2xl bg-neutral-900/30 border border-neutral-800 hover:border-amber-900/30 transition-colors">
                      <div className="text-neutral-400 text-sm mb-1">Member Status</div>
                      <div className="text-3xl font-serif text-amber-400">{userData.membership}</div>
                    </div>
                  </div>

                  <h3 className="text-xl font-serif pt-4">Recent Activity</h3>
                  <div className="space-y-3">
                    {orders.map(order => (
                      <div key={order.id} className="group p-5 rounded-2xl bg-neutral-900/30 border border-neutral-800 hover:border-amber-900/30 transition-all flex flex-col sm:flex-row justify-between gap-4">
                        <div className="space-y-1">
                          <div className="flex items-center gap-3">
                            <span className="font-medium text-white">Order #{order.id}</span>
                            <span className={`text-xs px-2.5 py-0.5 rounded-full border ${
                              order.status === 'Delivered' 
                                ? 'bg-emerald-950/30 border-emerald-900/50 text-emerald-400' 
                                : 'bg-blue-950/30 border-blue-900/50 text-blue-400'
                            }`}>{order.status}</span>
                          </div>
                          <p className="text-sm text-neutral-400">{order.items.join(", ")}</p>
                        </div>
                        <div className="text-right sm:self-center">
                          <div className="font-serif text-lg">{order.total}</div>
                          <span className="text-xs text-neutral-500">{order.date}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
                 
              {activeSection === 'orders' && (
                 <div className="space-y-4 animate-fade-in">
                    <h3 className="text-2xl font-serif mb-6">Order History</h3>
                    {orders.map(order => (
                        <div key={order.id} className="p-6 rounded-2xl bg-neutral-900/30 border border-neutral-800 flex justify-between items-center">
                             <div>
                                <div className="font-medium mb-1">Order #{order.id} </div>
                                <div className="text-sm text-neutral-400">{order.date} • {order.items.length} Items</div>
                             </div>
                             <div className="text-right"> 
                                <div className="font-serif text-xl mb-1">{order.total}</div>
                                <span className={`text-xs px-2 py-1 rounded-full ${order.status === 'Delivered' ? 'text-emerald-400 bg-emerald-950/50' : 'text-amber-400 bg-amber-950/50'}`}>{order.status} </span>
                             </div>
                        </div>
                    ))}
                 </div>
              )}

              {activeSection === 'settings' && (
                 <div className="p-8 rounded-2xl bg-neutral-900/30 border border-neutral-800 text-center py-20 animate-fade-in">
                    <Settings className="w-12 h-12 text-neutral-700 mx-auto mb-4"/>
                    <h3 className="text-lg font-medium text-neutral-300">Account Settings</h3>
                    <p className="text-neutral-500 mt-2 max-w-md mx-auto">Specific account settings and preferences area coming soon. Use the main Edit Profile button to update personal details.</p>
                 </div>
              )}
            </div>
          </div>
        </div>
      </main>

      {/* Edit Modal */}
      {isEditModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
           <div className="w-full max-w-2xl bg-neutral-900 rounded-3xl border border-neutral-800 shadow-2xl overflow-hidden max-h-[90vh] flex flex-col animate-scale-up">
              
              {/* Modal Header */}
              <div className="px-6 py-4 border-b border-neutral-800 flex justify-between items-center bg-neutral-900 sticky top-0 z-10">
                <h2 className="text-xl font-serif text-white">Edit Profile</h2>
                <button onClick={() => setIsEditModalOpen(false)} className="p-2 hover:bg-neutral-800 rounded-full text-neutral-400 hover:text-white transition-colors">
                    <X size={20} />
                </button>
              </div>

              {/* Scrollable Content */}
              <div className="p-6 md:p-8 overflow-y-auto space-y-8 custom-scrollbar">
                 <div className="flex flex-col sm:flex-row gap-6 items-center sm:items-start">
                    <div className="text-center sm:text-left space-y-3">
                        <label className="text-sm font-medium text-neutral-400">Profile Avatar</label>
                        <div className="flex gap-3 flex-wrap justify-center sm:justify-start">
                            {avatarColors.map((color) => (
                                <button
                                    key={color.value}
                                    onClick={() => handleAvatarColorChange(color.value)}
                                    className={`w-10 h-10 rounded-full ${color.bg} transition-transform hover:scale-110 ${editFormData.avatarColor === color.value ? 'ring-2 ring-white scale-110' : 'ring-1 ring-white/10'}`}
                                />
                            ))}
                        </div>
                    </div>
                 </div>

                 <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-neutral-400">Full Name</label>
                        <input name="name" value={editFormData.name} onChange={handleInputChange} className="w-full bg-neutral-800/50 border border-neutral-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-amber-600 focus:ring-1 focus:ring-amber-600 transition-all"/>
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-neutral-400">Email</label>
                        <input name="email" value={editFormData.email} onChange={handleInputChange} className="w-full bg-neutral-800/50 border border-neutral-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-amber-600 focus:ring-1 focus:ring-amber-600 transition-all"/>
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-neutral-400">Phone</label>
                        <input name="phone" value={editFormData.phone} onChange={handleInputChange} className="w-full bg-neutral-800/50 border border-neutral-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-amber-600 focus:ring-1 focus:ring-amber-600 transition-all"/>
                    </div>
                     <div className="space-y-2">
                        <label className="text-sm font-medium text-neutral-400">Location</label>
                        <input name="location" value={editFormData.location} onChange={handleInputChange} className="w-full bg-neutral-800/50 border border-neutral-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-amber-600 focus:ring-1 focus:ring-amber-600 transition-all"/>
                    </div>
                 </div>
                
                 <div className="space-y-2">
                    <label className="text-sm font-medium text-neutral-400">Bio</label>
                    <textarea name="bio" value={editFormData.bio} onChange={handleInputChange} rows="3" className="w-full bg-neutral-800/50 border border-neutral-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-amber-600 focus:ring-1 focus:ring-amber-600 transition-all resize-none"/>
                 </div>
              </div>

               {/* Footer */}
               <div className="p-6 border-t border-neutral-800 bg-neutral-900 sticky bottom-0 z-10 flex justify-end gap-3">
                  <button onClick={() => setIsEditModalOpen(false)} className="px-6 py-2.5 rounded-full border border-neutral-700 text-neutral-300 hover:bg-neutral-800 font-medium transition-colors">Cancel</button>
                  <button onClick={handleSaveProfile} disabled={isLoading} className="px-6 py-2.5 rounded-full bg-gradient-to-r from-amber-700 to-amber-600 hover:from-amber-600 hover:to-amber-500 text-white font-medium shadow-lg shadow-amber-900/20 transition-all flex items-center gap-2 disabled:opacity-70">
                     {isLoading ? <Loader2 size={18} className="animate-spin" /> : <Save size={18} />}
                     Save Changes
                  </button>
               </div>
           </div>
        </div>
      )}

      <style jsx global>{`
        @keyframes fade-in {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in { animation: fade-in 0.4s ease-out forwards; }
        
        @keyframes scale-up {
            from { opacity: 0; transform: scale(0.95); }
            to { opacity: 1; transform: scale(1); }
        }
        .animate-scale-up { animation: scale-up 0.3s ease-out forwards; }

        .custom-scrollbar::-webkit-scrollbar { width: 6px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #525252; border-radius: 10px; }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: #737373; }
      `}</style>
    </div>
  );
}