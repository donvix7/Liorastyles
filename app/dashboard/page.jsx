"use client"
import Head from 'next/head';
import Navigation from '../components/Navigation';
import { useState, useEffect } from 'react';
import { 
  User, Package, Settings, Bell, MapPin, Edit, Camera, Mail, 
  Calendar, Crown, X, Save, Loader2, Plus, LayoutDashboard, 
  ShoppingBag, Megaphone, Video, Globe, Smartphone, Music, Twitter, 
  Instagram, Facebook
} from 'lucide-react';
import { fetchProfile, fetchDashboard, updateProfile, addDashboardItem, fetchOrders } from '../utils/service';

export default function Dashboard() {
  const [activeSection, setActiveSection] = useState('overview');
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isAddContentModalOpen, setIsAddContentModalOpen] = useState(false);
  const [isAddPromotionModalOpen, setIsAddPromotionModalOpen] = useState(false);
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
    role: "user",
    membership: "Gold Tier",
    avatarColor: "from-amber-700 to-yellow-600",
    socials: { instagram: "", facebook: "", twitter: "", tiktok: "" }
  });
  
  const [editFormData, setEditFormData] = useState({ ...userData });
  const [dashboardData, setDashboardData] = useState({ contents: [], promotions: [] });

  const [orders, setOrders] = useState([]);


  const fetchData = async () => {
    try {
      setIsFetching(true);
      setError(null);

      // Parallel fetch for better performance
      const [id] = ["69709ceb0841a926ad18e444"];
      const [profileResult, ordersResult] = await Promise.all([
        fetchProfile(id),
        fetchOrders()
      ]);
      
      if (!profileResult.success) throw new Error(profileResult.error || "Failed to fetch profile");
      
      const { data } = profileResult;
      setUserData(data);
      setEditFormData(data);
      
      if (ordersResult.success) setOrders(ordersResult.data || []);

      // Fetch dashboard data if admin
      if (data.role === 'admin') {
        const dashResult = await fetchDashboard();
        if (dashResult.success) {
          setDashboardData(dashResult.data);
        } else {
          console.error("Dashboard fetch error:", dashResult.error);
        }
      }
    } catch(error) {
      console.error("Fetch data error:", error);
      setError(error.message);
    } finally {
      setIsFetching(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleSaveProfile = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const result = await updateProfile(userData._id, editFormData);
      if (!result.success) throw new Error(result.error);
      
      setUserData(result.data);
      setIsEditModalOpen(false);
    } catch(err) {
      console.error("Save profile error:", err);
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  const addItem = async (type, formData) => {
    setIsLoading(true);
    setError(null);
    try {
      const result = await addDashboardItem(type, formData);
      if (!result.success) throw new Error(result.error);
      
      fetchData(); // Refresh all data
      setIsAddContentModalOpen(false);
      setIsAddPromotionModalOpen(false);
    } catch(err) {
      console.error("Add item error:", err);
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  if (isFetching) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <Loader2 className="w-10 h-10 text-amber-500 animate-spin" />
      </div>
    );
  }

  const isAdmin = userData.role === 'admin';

  return (
    <div className="min-h-screen bg-black text-amber-50">
      <Head>
        <title>{isAdmin ? "Admin Dashboard" : "My Profile"} | Liora</title>
      </Head>

      <Navigation />
      
      <main className="pt-24 pb-20 px-4 md:px-8 max-w-7xl mx-auto space-y-8">
        
        {/* Header Section */}
        <div className="relative overflow-hidden rounded-3xl bg-neutral-900/40 backdrop-blur-xl border border-neutral-800/50 p-8 md:p-12 flex flex-col md:flex-row gap-8 items-center md:items-start text-center md:text-left transition-all hover:bg-neutral-900/50">
          <div className="relative shrink-0">
            <div className={`w-32 h-32 md:w-40 md:h-40 rounded-full bg-gradient-to-br ${userData.avatarColor} ring-4 ring-black flex items-center justify-center`}>
              <User size={64} className="text-white" />
            </div>
            <button onClick={() => setIsEditModalOpen(true)} className="absolute bottom-1 right-1 p-2.5 bg-neutral-900 border border-neutral-700 rounded-full text-amber-400 hover:bg-neutral-800 transition-all shadow-lg">
              <Camera size={18} />
            </button>
          </div>

          <div className="flex-1 space-y-4">
            <div className="flex flex-col md:flex-row items-center gap-4">
              <h1 className="text-3xl md:text-4xl font-serif">{userData.name || "Member Name"}</h1>
              <span className="px-3 py-1 bg-amber-900/40 border border-amber-700/30 text-amber-300 text-xs font-bold uppercase tracking-widest rounded-full flex items-center gap-2">
                <Crown size={12} /> {userData.role === 'admin' ? "Liora Admin" : userData.membership}
              </span>
            </div>
            <p className="text-neutral-400 max-w-2xl leading-relaxed">{userData.bio}</p>
            
            <div className="flex flex-wrap gap-6 justify-center md:justify-start text-sm text-neutral-500">
              {userData.socials?.instagram && <a href="#" className="flex items-center gap-2 hover:text-amber-400"> <Instagram size={16} /> @{userData.socials.instagram} </a>}
              {userData.socials?.facebook && <a href="#" className="flex items-center gap-2 hover:text-amber-400"> <Facebook size={16} /> {userData.socials.facebook} </a>}
              {userData.socials?.twitter && <a href="#" className="flex items-center gap-2 hover:text-amber-400"> <Twitter size={16} /> @{userData.socials.twitter} </a>}
              {userData.email && <div className="flex items-center gap-2"> <Mail size={16} /> {userData.email} </div>}
            </div>
          </div>

          <button onClick={() => setIsEditModalOpen(true)} className="px-6 py-3 rounded-full border border-neutral-700 hover:border-amber-700 hover:bg-amber-950/10 text-neutral-300 transition-all flex items-center gap-2">
            <Edit size={16} /> Settings
          </button>
        </div>

        <div className="grid lg:grid-cols-4 gap-8 px-2">
          {/* Navigation Sidebar */}
          <nav className="lg:col-span-1 space-y-2 sticky top-28 h-fit bg-neutral-900/40 backdrop-blur-xl rounded-3xl p-3 border border-neutral-800/50 shadow-2xl">
            {[
              { id: 'overview', icon: LayoutDashboard, label: 'Dashboard' },
              { id: 'orders', icon: ShoppingBag, label: 'My Orders' },
              ...(isAdmin ? [
                { id: 'management', icon: Settings, label: 'Content Manager' },
                { id: 'promotions', icon: Megaphone, label: 'Ads & Offers' },
              ] : [])
            ].map(({ id, icon: Icon, label }) => (
              <button key={id} onClick={() => setActiveSection(id)} className={`w-full flex items-center gap-4 px-6 py-4 rounded-2xl transition-all font-medium text-left ${activeSection === id ? 'bg-amber-900/20 text-amber-400 border border-amber-700/30 shadow-[0_0_20px_rgba(180,83,9,0.1)]' : 'text-neutral-500 hover:text-neutral-200 hover:bg-neutral-900/50'}`}>
                <Icon size={20} /> {label}
              </button>
            ))}
          </nav>

          {/* Main Content Area */}
          <div className="lg:col-span-3 space-y-8 animate-fade-in relative">
            {isLoading && (
               <div className="absolute inset-x-0 top-0 h-1 bg-amber-600/20 overflow-hidden rounded-full z-10">
                 <div className="h-full bg-amber-500 w-1/3 animate-progress"></div>
               </div>
            )}
            
            {error && <div className="p-4 bg-red-900/20 border border-red-500/50 rounded-xl text-red-400 text-sm flex items-center gap-3"> <X className="cursor-pointer" onClick={() => setError(null)} size={16} /> {error} </div>}
            
            {activeSection === 'overview' && (
              <div className="space-y-8">
                <div className="grid sm:grid-cols-3 gap-6">
                   {[
                    { label: 'Purchases', val: orders.length, icon: Package },
                    { label: 'Active Ads', val: dashboardData.promotions.length, icon: Megaphone }
                  ].map((stat, i) => (
                    <div key={i} className="p-8 rounded-3xl bg-neutral-900/40 backdrop-blur-md border border-neutral-800/50 hover:bg-neutral-900/60 transition-all hover:scale-[1.02] cursor-default shadow-lg">
                      <stat.icon className="text-amber-500/70 mb-4" size={24} />
                      <div className="text-neutral-500 text-sm">{stat.label}</div>
                      <div className="text-3xl font-serif text-white mt-1">{stat.val}</div>
                    </div>
                  ))}
                </div>
                
                <h3 className="text-2xl font-serif pt-4">Latest Insights</h3>
                <div className="grid sm:grid-cols-2 gap-6">
                  {dashboardData.contents.length > 0 ? (
                    dashboardData.contents.slice(0, 2).map((c, i) => (
                      <div key={i} className="group relative rounded-2xl overflow-hidden border border-neutral-800/50 bg-neutral-900/40 backdrop-blur-md hover:bg-neutral-900/60 transition-all">
                        <div className="p-6">
                          <span className="text-xs font-bold text-amber-500/60 uppercase">{c.category}</span>
                          <h4 className="text-xl font-serif mt-2">{c.title}</h4>
                          <p className="text-sm text-neutral-500 mt-3 line-clamp-2">{c.description}</p>
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="sm:col-span-2">
                       <EmptyState icon={LayoutDashboard} message="No insights available yet." />
                    </div>
                  )}
                </div>
              </div>
            )}

            {activeSection === 'management' && (
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <h3 className="text-2xl font-serif">Content Library</h3>
                  <button onClick={() => setIsAddContentModalOpen(true)} className="px-5 py-2.5 bg-amber-600 hover:bg-amber-500 rounded-full flex items-center gap-2 text-sm font-bold shadow-lg shadow-amber-900/40">
                    <Plus size={18} /> Add Content
                  </button>
                </div>
                <div className="grid gap-4">
                  {dashboardData.contents.length > 0 ? (
                    dashboardData.contents.map((item, i) => (
                      <div key={i} className="p-6 rounded-2xl bg-neutral-900/40 backdrop-blur-md border border-neutral-800/50 flex justify-between items-center transition-all hover:bg-neutral-900/60 group">
                        <div className="flex gap-4 items-center">
                          <div className="w-12 h-12 bg-neutral-800/50 rounded-lg flex items-center justify-center group-hover:bg-amber-900/20 transition-colors"> <Video className="text-amber-500/50" /> </div>
                          <div>
                            <p className="font-medium">{item.title}</p>
                            <p className="text-sm text-neutral-500">{item.category} • {new Date(item.createdAt).toLocaleDateString()}</p>
                          </div>
                        </div>
                        <button className="p-2 text-neutral-500 hover:text-red-400"> <X size={18} /> </button>
                      </div>
                    ))
                  ) : (
                    <EmptyState icon={Video} message="No content items found in library." />
                  )}
                </div>
              </div>
            )}

            {activeSection === 'promotions' && (
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <h3 className="text-2xl font-serif">Promotion Banners</h3>
                  <button onClick={() => setIsAddPromotionModalOpen(true)} className="px-5 py-2.5 bg-amber-600 hover:bg-amber-500 rounded-full flex items-center gap-2 text-sm font-bold shadow-lg shadow-amber-900/40">
                    <Plus size={18} /> New Promotion
                  </button>
                </div>
                <div className="grid gap-6 sm:grid-cols-2">
                  {dashboardData.promotions.length > 0 ? (
                    dashboardData.promotions.map((ad, i) => (
                      <div key={i} className="p-6 rounded-3xl bg-neutral-900/40 backdrop-blur-md border border-neutral-800/50 space-y-4 hover:bg-neutral-900/60 transition-all">
                        <div className="flex justify-between">
                          <Megaphone className="text-amber-500" />
                          <span className={`text-[10px] px-2 py-1 rounded-full uppercase font-bold ${ad.isActive ? "bg-emerald-950/50 text-emerald-400" : "bg-neutral-800 text-neutral-500"}`}>{ad.isActive ? "Live" : "Ended"}</span>
                        </div>
                        <h4 className="text-xl font-serif">{ad.title}</h4>
                        <div className="flex justify-between items-baseline">
                          <span className="text-2xl font-bold text-amber-500">{ad.discount} OFF</span>
                          <span className="text-xs text-neutral-500">Exp: {new Date(ad.expiryDate).toLocaleDateString()}</span>
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="sm:col-span-2">
                      <EmptyState icon={Megaphone} message="No active promotions at the moment." />
                    </div>
                  )}
                </div>
              </div>
            )}

            {activeSection === 'orders' && (
              <div className="space-y-6">
                <h3 className="text-2xl font-serif">Purchase History</h3>
                <div className="grid gap-4">
                  {orders.length > 0 ? (
                    orders.map((order, i) => (
                      <div key={i} className="p-6 rounded-2xl bg-neutral-900/30 border border-neutral-800 flex justify-between items-center">
                        <div className="flex gap-4 items-center">
                          <div className="w-12 h-12 bg-neutral-800 rounded-lg flex items-center justify-center font-bold text-amber-500/50"> #{order.id || i+1} </div>
                          <div>
                            <p className="font-medium">{order.items ? order.items.join(', ') : "Beauty Package"}</p>
                            <p className="text-sm text-neutral-500">{new Date(order.date).toLocaleDateString()} • {order.status}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="font-bold text-lg">{order.total}</p>
                          <span className="text-[10px] px-2 py-0.5 rounded-full bg-neutral-800 text-neutral-400 uppercase">{order.status}</span>
                        </div>
                      </div>
                    ))
                  ) : (
                    <EmptyState icon={ShoppingBag} message="You haven't made any purchases yet." />
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </main>

      {/* Shared Edit Profile Modal */}
      {isEditModalOpen && (
        <div className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="w-full max-w-2xl bg-neutral-900 border border-neutral-800 rounded-3xl overflow-hidden max-h-[90vh] flex flex-col">
            <div className="p-6 border-b border-neutral-800 flex justify-between items-center bg-neutral-900">
              <h2 className="text-xl font-serif">Settings</h2>
              <button onClick={() => setIsEditModalOpen(false)} className="text-neutral-500 hover:text-white"> <X size={24} /> </button>
            </div>
            <div className="p-8 overflow-y-auto space-y-8 custom-scrollbar">
              <div className="grid sm:grid-cols-2 gap-6">
                <Input label="Display Name" name="name" value={editFormData.name} onChange={handleInputChange} />
                <Input label="Email" name="email" value={editFormData.email} onChange={handleInputChange} />
                <Input label="Location" name="location" value={editFormData.location} onChange={handleInputChange} />
                <Input label="Phone" name="phone" value={editFormData.phone} onChange={handleInputChange} />
              </div>
              <div className="space-y-4 pt-4 border-t border-neutral-800">
                <span className="text-xs font-bold text-amber-500 uppercase">Social Media Handles</span>
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-neutral-500">Instagram</label>
                    <div className="relative">
                      <Instagram className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-600" size={16} />
                      <input name="instagram" value={editFormData.socials?.instagram} onChange={(e) => setEditFormData(p => ({ ...p, socials: { ...p.socials, instagram: e.target.value }}))} className="w-full bg-neutral-800/30 border border-neutral-700/50 rounded-xl pl-12 pr-4 py-3 text-white focus:border-amber-500/50 outline-none transition-all" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-neutral-500">Twitter</label>
                    <div className="relative">
                      <Twitter className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-600" size={16} />
                      <input name="twitter" value={editFormData.socials?.twitter} onChange={(e) => setEditFormData(p => ({ ...p, socials: { ...p.socials, twitter: e.target.value }}))} className="w-full bg-neutral-800/30 border border-neutral-700/50 rounded-xl pl-12 pr-4 py-3 text-white focus:border-amber-500/50 outline-none transition-all" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-neutral-500">Biography</label>
                <textarea name="bio" value={editFormData.bio} onChange={handleInputChange} rows="2" className="w-full bg-neutral-800/30 border border-neutral-700/50 rounded-xl px-4 py-3 text-white resize-none focus:border-amber-500/50 outline-none" />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-neutral-500">About Me</label>
                <textarea name="aboutMe" value={editFormData.aboutMe || ''} onChange={handleInputChange} rows="4" className="w-full bg-neutral-800/30 border border-neutral-700/50 rounded-xl px-4 py-3 text-white resize-none focus:border-amber-500/50 outline-none" />
              </div>

              {/* Achievements Management */}
              <div className="space-y-4 pt-4 border-t border-neutral-800">
                <div className="flex justify-between items-center">
                  <span className="text-xs font-bold text-amber-500 uppercase">Founder Achievements</span>
                  <button 
                    onClick={() => setEditFormData(p => ({ ...p, achievements: [...(p.achievements || []), { title: '', description: '' }] }))}
                    className="text-[10px] bg-amber-900/30 text-amber-500 px-2 py-1 rounded border border-amber-700/30 hover:bg-amber-900/50 transition-all"
                  >
                    + Add New
                  </button>
                </div>
                <div className="space-y-3">
                  {(editFormData.achievements || []).map((achievement, idx) => (
                    <div key={idx} className="flex gap-3 group">
                      <input 
                        value={achievement.title} 
                        onChange={(e) => {
                          const newAch = [...editFormData.achievements];
                          newAch[idx].title = e.target.value;
                          setEditFormData(p => ({ ...p, achievements: newAch }));
                        }}
                        placeholder="e.g., 15+ Years Industry Expertise"
                        className="flex-1 bg-neutral-800/30 border border-neutral-700/50 rounded-xl px-4 py-2 text-sm text-white focus:border-amber-500/50 outline-none" 
                      />
                      <button 
                        onClick={() => {
                          const newAch = editFormData.achievements.filter((_, i) => i !== idx);
                          setEditFormData(p => ({ ...p, achievements: newAch }));
                        }}
                        className="p-2 text-neutral-600 hover:text-red-500"
                      >
                        <X size={14} />
                      </button>
                    </div>
                  ))}
                  {(!editFormData.achievements || editFormData.achievements.length === 0) && (
                    <p className="text-xs text-neutral-600 italic">No achievements added. These will appear on the About page.</p>
                  )}
                </div>
              </div>
            </div>
            <div className="p-6 border-t border-neutral-800 flex justify-end gap-3 bg-neutral-900">
              <button onClick={() => setIsEditModalOpen(false)} className="px-6 py-2.5 rounded-full text-neutral-400 hover:bg-neutral-800 transition-colors">Cancel</button>
              <button onClick={handleSaveProfile} disabled={isLoading} className="px-8 py-2.5 rounded-full bg-amber-600 text-white font-bold flex items-center gap-2"> {isLoading ? <Loader2 size={18} className="animate-spin" /> : <Save size={18} />} Save Changes </button>
            </div>
          </div>
        </div>
      )}

      {/* Add Content Modal */}
      {isAddContentModalOpen && (
        <Modal title="Add New Content" onClose={() => setIsAddContentModalOpen(false)}>
          <ContentForm onSave={(data) => addItem('content', data)} isLoading={isLoading} />
        </Modal>
      )}

      {/* Add Promotion Modal */}
      {isAddPromotionModalOpen && (
        <Modal title="Create New Promotion" onClose={() => setIsAddPromotionModalOpen(false)}>
          <PromotionForm onSave={(data) => addItem('promotion', data)} isLoading={isLoading} />
        </Modal>
      )}

      <style jsx global>{`
        @keyframes fade-in { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes progress { 0% { left: -100%; width: 100%; } 100% { left: 100%; width: 100%; } }
        .animate-fade-in { animation: fade-in 0.5s cubic-bezier(0.22, 1, 0.36, 1) forwards; }
        .animate-progress { animation: progress 1.5s ease-in-out infinite; }
        .custom-scrollbar::-webkit-scrollbar { width: 5px; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #333; border-radius: 10px; }
      `}</style>
    </div>
  );

  function handleInputChange(e) {
    const { name, value } = e.target;
    setEditFormData(prev => ({ ...prev, [name]: value }));
  }
}

// Helper Components
function EmptyState({ icon: Icon, message }) {
  return (
    <div className="flex flex-col items-center justify-center p-12 rounded-3xl bg-neutral-900/20 border border-dashed border-neutral-800 animate-fade-in">
      <div className="w-16 h-16 rounded-2xl bg-neutral-900 flex items-center justify-center mb-4">
        <Icon className="text-neutral-700" size={32} />
      </div>
      <p className="text-neutral-500 font-medium">{message}</p>
    </div>
  );
}

function Modal({ title, children, onClose }) {
  return (
    <div className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-xl flex items-center justify-center p-4">
      <div className="w-full max-w-xl bg-neutral-900 border border-neutral-800 rounded-3xl overflow-hidden animate-fade-in shadow-2xl">
        <div className="p-6 border-b border-neutral-800 flex justify-between items-center">
          <h2 className="text-xl font-serif">{title}</h2>
          <button onClick={onClose} className="text-neutral-500 hover:text-white"> <X size={24} /> </button>
        </div>
        <div className="p-8">{children}</div>
      </div>
    </div>
  );
}

function Input({ label, ...props }) {
  return (
    <div className="space-y-2">
      <label className="text-sm font-medium text-neutral-500">{label}</label>
      <input 
        {...props} 
        className="w-full bg-neutral-800/30 border border-neutral-700/50 rounded-xl px-4 py-3 text-white focus:border-amber-500/50 outline-none transition-all placeholder:text-neutral-700" 
      />
    </div>
  );
}

function ContentForm({ onSave, isLoading }) {
  const [data, setData] = useState({ title: '', category: 'Tutorial', description: '', videoUrl: '' });
  return (
    <div className="space-y-6">
      <Input label="Title" placeholder="The Gold Collection Review" value={data.title} onChange={e => setData({...data, title: e.target.value})} />
      <div className="space-y-2">
        <label className="text-sm font-medium text-neutral-500">Category</label>
        <select value={data.category} onChange={e => setData({...data, category: e.target.value})} className="w-full bg-neutral-800/30 border border-neutral-700/50 rounded-xl px-4 py-3 text-white outline-none">
          <option>Tutorial</option>
          <option>News</option>
          <option>Collection</option>
        </select>
      </div>
      <div className="space-y-2">
        <label className="text-sm font-medium text-neutral-500">Description</label>
        <textarea value={data.description} onChange={e => setData({...data, description: e.target.value})} className="w-full bg-neutral-800/30 border border-neutral-700/50 rounded-xl px-4 py-3 text-white resize-none outline-none" rows="3" />
      </div>
      <button onClick={() => onSave(data)} disabled={isLoading} className="w-full py-4 bg-amber-600 rounded-full font-bold shadow-lg flex justify-center items-center gap-2">
        {isLoading ? <Loader2 className="animate-spin" size={20} /> : <Plus size={20} />} Add Content
      </button>
    </div>
  );
}

function PromotionForm({ onSave, isLoading }) {
  const [data, setData] = useState({ title: '', discount: '', expiryDate: '' });
  return (
    <div className="space-y-6">
      <Input label="Promo Title" placeholder="Spring Sale 2024" value={data.title} onChange={e => setData({...data, title: e.target.value})} />
      <Input label="Discount (e.g. 20%)" placeholder="20%" value={data.discount} onChange={e => setData({...data, discount: e.target.value})} />
      <Input label="Expiry Date" type="date" value={data.expiryDate} onChange={e => setData({...data, expiryDate: e.target.value})} />
      <button onClick={() => onSave(data)} disabled={isLoading} className="w-full py-4 bg-amber-600 rounded-full font-bold shadow-lg flex justify-center items-center gap-2">
        {isLoading ? <Loader2 className="animate-spin" size={20} /> : <Save size={20} />} Create Ad
      </button>
    </div>
  );
}