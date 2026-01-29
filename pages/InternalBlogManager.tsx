
import React, { useState, useEffect, useMemo } from 'react';
import { Layout, FileText, Globe, Image as ImageIcon, Youtube, Save, Eye, ChevronLeft, MapPin, Calendar, Tag, Search, Plus, Trash2, Edit3, ShoppingBag, Sparkles, X, Car, Navigation } from 'lucide-react';
import { Link } from 'react-router-dom';

type TabType = 'guide' | 'experience' | 'car';

const InternalBlogManager = () => {
  const [activeTab, setActiveTab] = useState<TabType>('guide');
  const [editingId, setEditingId] = useState<string | null>(null);
  const [listSearchTerm, setListSearchTerm] = useState('');

  // Local State for all content types
  const [guideItems, setGuideItems] = useState([
    {
      id: 'g1',
      title: 'Kyoto’s Fiery Autumn',
      category: 'Culture',
      location: 'Kyoto',
      season: 'Autumn',
      date: '2024-11-15',
      excerpt: 'Avoid the crowds and find peace in the secluded temples of Kyoto during the peak foliage season.',
      cardImage: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&q=80',
      youtubeId: 'Ssh71hePR8Q',
      pageBody: 'Autumn in Kyoto is more than just a season; it\'s a profound spiritual event...'
    }
  ]);

  const [expItems, setExpItems] = useState([
    {
      id: 'e1',
      title: 'Home Visit & Family Cooking',
      provider: 'Howzit Japan Exclusive',
      price: '¥15,000',
      category: 'AUTHENTIC',
      img: 'https://images.unsplash.com/photo-1528164344705-47542687000d?auto=format&fit=crop&q=80',
      tags: 'Home Meal, Cultural Exchange',
      description: 'Enter a real Japanese home, learn traditional family recipes...'
    }
  ]);

  const [carItems, setCarItems] = useState([
    {
      id: 'c1',
      title: "Mt. Fuji & Hakone Expedition",
      img: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&q=80",
      price: "¥130,000~",
      description: "Experience Japan's most iconic mountain and the relaxing hot spring town of Hakone.",
      highlights: 'Lake Ashi Cruise, Owakudani Valley, Mt. Fuji 5th Station',
      location: "Mt. Fuji",
      departure: "Tokyo",
    }
  ]);

  // Search/Filter Logic
  const filteredList = useMemo(() => {
    let list: any[] = [];
    if (activeTab === 'guide') list = guideItems;
    if (activeTab === 'experience') list = expItems;
    if (activeTab === 'car') list = carItems;
    
    return list.filter(item => 
      item.title.toLowerCase().includes(listSearchTerm.toLowerCase())
    );
  }, [activeTab, guideItems, expItems, carItems, listSearchTerm]);

  // Form states
  const [guideForm, setGuideForm] = useState(guideItems[0]);
  const [expForm, setExpForm] = useState(expItems[0]);
  const [carForm, setCarForm] = useState(carItems[0]);

  const handleGuideChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setGuideForm({ ...guideForm, [e.target.name]: e.target.value });
  };

  const handleExpChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setExpForm({ ...expForm, [e.target.name]: e.target.value });
  };

  const handleCarChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setCarForm({ ...carForm, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    if (activeTab === 'guide') {
      if (editingId) {
        setGuideItems(guideItems.map(item => item.id === editingId ? { ...guideForm, id: editingId } : item));
      } else {
        const newItem = { ...guideForm, id: Date.now().toString() };
        setGuideItems([newItem, ...guideItems]);
        setEditingId(newItem.id);
      }
    } else if (activeTab === 'experience') {
      if (editingId) {
        setExpItems(expItems.map(item => item.id === editingId ? { ...expForm, id: editingId } : item));
      } else {
        const newItem = { ...expForm, id: Date.now().toString() };
        setExpItems([newItem, ...expItems]);
        setEditingId(newItem.id);
      }
    } else {
      if (editingId) {
        setCarItems(carItems.map(item => item.id === editingId ? { ...carForm, id: editingId } : item));
      } else {
        const newItem = { ...carForm, id: Date.now().toString() };
        setCarItems([newItem, ...carItems]);
        setEditingId(newItem.id);
      }
    }
    alert('Content Saved Locally!');
  };

  const handleDelete = (id: string, type: TabType) => {
    if (!window.confirm('Delete this item?')) return;
    if (type === 'guide') {
      setGuideItems(guideItems.filter(i => i.id !== id));
      if (editingId === id) handleNew();
    } else if (type === 'experience') {
      setExpItems(expItems.filter(i => i.id !== id));
      if (editingId === id) handleNew();
    } else {
      setCarItems(carItems.filter(i => i.id !== id));
      if (editingId === id) handleNew();
    }
  };

  const handleEdit = (id: string) => {
    setEditingId(id);
    if (activeTab === 'guide') {
      const item = guideItems.find(i => i.id === id);
      if (item) setGuideForm(item);
    } else if (activeTab === 'experience') {
      const item = expItems.find(i => i.id === id);
      if (item) setExpForm(item);
    } else {
      const item = carItems.find(i => i.id === id);
      if (item) setCarForm(item);
    }
  };

  const handleNew = () => {
    setEditingId(null);
    if (activeTab === 'guide') {
      setGuideForm({
        id: '', title: '', category: 'Food', location: '', season: 'Spring',
        date: new Date().toISOString().split('T')[0], excerpt: '', cardImage: '', youtubeId: '', pageBody: ''
      });
    } else if (activeTab === 'experience') {
      setExpForm({
        id: '', title: '', provider: '', price: '', category: 'AUTHENTIC', img: '', tags: '', description: ''
      });
    } else {
      setCarForm({
        id: '', title: '', img: '', price: '', description: '', highlights: '', location: '', departure: 'Tokyo'
      });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-20 pb-32">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-12 gap-6">
          <div>
            <Link to="/" className="text-[10px] font-black text-gray-400 uppercase tracking-widest flex items-center gap-2 mb-2 hover:text-howzit-red transition-all">
              <ChevronLeft size={14} /> Back to Site
            </Link>
            <h1 className="text-4xl font-black text-howzit-dark uppercase tracking-tight font-heading">Content <span className="text-howzit-red">Studio</span></h1>
          </div>

          <div className="flex gap-2 bg-white p-1.5 rounded-2xl shadow-sm border border-gray-100 overflow-x-auto no-scrollbar max-w-full">
            <button 
              onClick={() => { setActiveTab('guide'); handleNew(); setListSearchTerm(''); }}
              className={`px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all flex items-center gap-2 shrink-0 ${activeTab === 'guide' ? 'bg-howzit-red text-white shadow-lg shadow-howzit-red/20' : 'text-gray-400 hover:text-howzit-dark'}`}
            >
              <FileText size={14} /> Guide
            </button>
            <button 
              onClick={() => { setActiveTab('experience'); handleNew(); setListSearchTerm(''); }}
              className={`px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all flex items-center gap-2 shrink-0 ${activeTab === 'experience' ? 'bg-howzit-red text-white shadow-lg shadow-howzit-red/20' : 'text-gray-400 hover:text-howzit-dark'}`}
            >
              <ShoppingBag size={14} /> Experience
            </button>
            <button 
              onClick={() => { setActiveTab('car'); handleNew(); setListSearchTerm(''); }}
              className={`px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all flex items-center gap-2 shrink-0 ${activeTab === 'car' ? 'bg-howzit-red text-white shadow-lg shadow-howzit-red/20' : 'text-gray-400 hover:text-howzit-dark'}`}
            >
              <Car size={14} /> Car Tour
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Sidebar with Search */}
          <div className="lg:col-span-3 space-y-4">
            <div className="flex items-center justify-between mb-4 px-2">
               <h3 className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Manage List</h3>
               <button onClick={handleNew} className="p-1.5 bg-howzit-red text-white rounded-lg hover:rotate-90 transition-transform">
                 <Plus size={16} />
               </button>
            </div>

            <div className="px-1 mb-6 relative group">
              <Search size={14} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-howzit-red transition-colors" />
              <input 
                type="text"
                placeholder="Search list..."
                value={listSearchTerm}
                onChange={(e) => setListSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-xl bg-white border border-gray-100 focus:border-howzit-red focus:ring-4 focus:ring-howzit-red/5 focus:outline-none transition-all font-bold text-howzit-dark text-xs shadow-sm"
              />
            </div>
            
            <div className="space-y-3 max-h-[70vh] overflow-y-auto pr-2 no-scrollbar">
              {filteredList.map((item) => (
                <div 
                  key={item.id}
                  className={`group flex items-center gap-3 p-3 rounded-2xl border transition-all cursor-pointer ${editingId === item.id ? 'bg-white border-howzit-red shadow-md' : 'bg-white/50 border-gray-100 hover:bg-white hover:border-gray-200'}`}
                  onClick={() => handleEdit(item.id)}
                >
                  <div className="w-12 h-12 rounded-xl overflow-hidden shrink-0 border border-gray-100 bg-gray-50">
                    <img src={(item as any).cardImage || (item as any).img || ''} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-grow min-w-0">
                    <h4 className="text-[11px] font-black text-howzit-dark uppercase truncate mb-0.5">{item.title || '(Untitled)'}</h4>
                    <span className="text-[9px] font-bold text-gray-400 uppercase tracking-widest">{(item as any).category || (item as any).location}</span>
                  </div>
                  <button onClick={(e) => { e.stopPropagation(); handleDelete(item.id, activeTab); }} className="p-2 text-gray-300 hover:text-howzit-red transition-colors">
                    <Trash2 size={14} />
                  </button>
                </div>
              ))}
              {filteredList.length === 0 && (
                <div className="py-12 text-center text-gray-300 italic text-[10px] font-bold uppercase tracking-widest border border-dashed border-gray-200 rounded-[2rem]">
                  No matches found
                </div>
              )}
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-white rounded-[2.5rem] p-8 shadow-sm border border-gray-100">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-xl font-black uppercase text-howzit-dark tracking-tight font-heading">{editingId ? 'Edit' : 'Create'} {activeTab}</h2>
                <button onClick={handleSave} className="bg-howzit-red text-white px-6 py-2.5 rounded-full font-black text-xs shadow-lg hover:scale-105 transition-all flex items-center gap-2"><Save size={16} /> Save</button>
              </div>

              {activeTab === 'guide' && (
                <div className="grid grid-cols-2 gap-5">
                  <div className="col-span-2 space-y-1.5">
                    <label className="text-[9px] font-black uppercase text-gray-400 tracking-widest px-1">Story Title</label>
                    <input name="title" value={guideForm.title} onChange={handleGuideChange} className="w-full px-5 py-3 rounded-xl bg-gray-50 border-transparent focus:bg-white focus:ring-4 focus:ring-howzit-red/10 focus:outline-none transition-all font-bold text-howzit-dark text-xs" />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[9px] font-black uppercase text-gray-400 tracking-widest px-1">Genre</label>
                    <select name="category" value={guideForm.category} onChange={handleGuideChange} className="w-full px-5 py-3 rounded-xl bg-gray-50 border-transparent focus:bg-white focus:ring-4 focus:ring-howzit-red/10 focus:outline-none transition-all font-bold text-howzit-dark text-xs">
                      {['Food', 'Culture', 'Guide', 'Nature'].map(g => <option key={g} value={g}>{g}</option>)}
                    </select>
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[9px] font-black uppercase text-gray-400 tracking-widest px-1">Location</label>
                    <input name="location" value={guideForm.location} onChange={handleGuideChange} className="w-full px-5 py-3 rounded-xl bg-gray-50 border-transparent focus:bg-white focus:ring-4 focus:ring-howzit-red/10 focus:outline-none transition-all font-bold text-howzit-dark text-xs" />
                  </div>
                  <div className="col-span-2 space-y-1.5 pt-4">
                    <label className="text-[9px] font-black uppercase text-gray-400 tracking-widest px-1 flex items-center gap-2"><ImageIcon size={12} className="text-howzit-red" /> Image URL</label>
                    <input name="cardImage" value={guideForm.cardImage} onChange={handleGuideChange} className="w-full px-5 py-3 rounded-xl bg-gray-50 border-transparent focus:bg-white focus:ring-4 focus:ring-howzit-red/10 focus:outline-none transition-all font-bold text-howzit-dark text-xs" />
                  </div>
                  <div className="col-span-2 space-y-1.5">
                    <label className="text-[9px] font-black uppercase text-gray-400 tracking-widest px-1">Article Body</label>
                    <textarea name="pageBody" value={guideForm.pageBody} onChange={handleGuideChange} rows={8} className="w-full px-5 py-3 rounded-xl bg-gray-50 border-transparent focus:bg-white focus:ring-4 focus:ring-howzit-red/10 focus:outline-none transition-all font-medium text-gray-600 text-xs" />
                  </div>
                </div>
              )}

              {activeTab === 'experience' && (
                <div className="grid grid-cols-2 gap-5">
                  <div className="col-span-2 space-y-1.5">
                    <label className="text-[9px] font-black uppercase text-gray-400 tracking-widest px-1">Experience Title</label>
                    <input name="title" value={expForm.title} onChange={handleExpChange} className="w-full px-5 py-3 rounded-xl bg-gray-50 border-transparent focus:bg-white focus:ring-4 focus:ring-howzit-red/10 focus:outline-none transition-all font-bold text-howzit-dark text-xs" />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[9px] font-black uppercase text-gray-400 tracking-widest px-1">Price</label>
                    <input name="price" value={expForm.price} onChange={handleExpChange} className="w-full px-5 py-3 rounded-xl bg-gray-50 border-transparent focus:bg-white focus:ring-4 focus:ring-howzit-red/10 focus:outline-none transition-all font-bold text-howzit-dark text-xs" />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[9px] font-black uppercase text-gray-400 tracking-widest px-1">Category</label>
                    <select name="category" value={expForm.category} onChange={handleExpChange} className="w-full px-5 py-3 rounded-xl bg-gray-50 border-transparent focus:bg-white focus:ring-4 focus:ring-howzit-red/10 focus:outline-none transition-all font-bold text-howzit-dark text-xs">
                      {['AUTHENTIC', 'SPIRITUAL', 'CRAFT', 'PERFORMANCE'].map(c => <option key={c} value={c}>{c}</option>)}
                    </select>
                  </div>
                  <div className="col-span-2 space-y-1.5">
                    <label className="text-[9px] font-black uppercase text-gray-400 tracking-widest px-1">Main Image URL</label>
                    <input name="img" value={expForm.img} onChange={handleExpChange} className="w-full px-5 py-3 rounded-xl bg-gray-50 border-transparent focus:bg-white focus:ring-4 focus:ring-howzit-red/10 focus:outline-none transition-all font-bold text-howzit-dark text-xs" />
                  </div>
                  <div className="col-span-2 space-y-1.5">
                    <label className="text-[9px] font-black uppercase text-gray-400 tracking-widest px-1">Short Description</label>
                    <textarea name="description" value={expForm.description} onChange={handleExpChange} rows={4} className="w-full px-5 py-3 rounded-xl bg-gray-50 border-transparent focus:bg-white focus:ring-4 focus:ring-howzit-red/10 focus:outline-none transition-all font-medium text-gray-600 text-xs" />
                  </div>
                </div>
              )}

              {activeTab === 'car' && (
                <div className="grid grid-cols-2 gap-5">
                  <div className="col-span-2 space-y-1.5">
                    <label className="text-[9px] font-black uppercase text-gray-400 tracking-widest px-1">Tour Title</label>
                    <input name="title" value={carForm.title} onChange={handleCarChange} className="w-full px-5 py-3 rounded-xl bg-gray-50 border-transparent focus:bg-white focus:ring-4 focus:ring-howzit-red/10 focus:outline-none transition-all font-bold text-howzit-dark text-xs" />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[9px] font-black uppercase text-gray-400 tracking-widest px-1">Departure From</label>
                    <select name="departure" value={carForm.departure} onChange={handleCarChange} className="w-full px-5 py-3 rounded-xl bg-gray-50 border-transparent focus:bg-white focus:ring-4 focus:ring-howzit-red/10 focus:outline-none transition-all font-bold text-howzit-dark text-xs">
                      {['Tokyo', 'Kyoto', 'Osaka', 'Nagoya'].map(d => <option key={d} value={d}>{d}</option>)}
                    </select>
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[9px] font-black uppercase text-gray-400 tracking-widest px-1">Location</label>
                    <input name="location" value={carForm.location} onChange={handleCarChange} className="w-full px-5 py-3 rounded-xl bg-gray-50 border-transparent focus:bg-white focus:ring-4 focus:ring-howzit-red/10 focus:outline-none transition-all font-bold text-howzit-dark text-xs" />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[9px] font-black uppercase text-gray-400 tracking-widest px-1">Price Tag</label>
                    <input name="price" value={carForm.price} onChange={handleCarChange} className="w-full px-5 py-3 rounded-xl bg-gray-50 border-transparent focus:bg-white focus:ring-4 focus:ring-howzit-red/10 focus:outline-none transition-all font-bold text-howzit-dark text-xs" placeholder="¥130,000~" />
                  </div>
                  <div className="col-span-2 space-y-1.5 pt-4">
                    <label className="text-[9px] font-black uppercase text-gray-400 tracking-widest px-1 flex items-center gap-2"><ImageIcon size={12} className="text-howzit-red" /> Main Image URL</label>
                    <input name="img" value={carForm.img} onChange={handleCarChange} className="w-full px-5 py-3 rounded-xl bg-gray-50 border-transparent focus:bg-white focus:ring-4 focus:ring-howzit-red/10 focus:outline-none transition-all font-bold text-howzit-dark text-xs" />
                  </div>
                  <div className="col-span-2 space-y-1.5">
                    <label className="text-[9px] font-black uppercase text-gray-400 tracking-widest px-1">Highlights (Comma separated)</label>
                    <input name="highlights" value={carForm.highlights} onChange={handleCarChange} className="w-full px-5 py-3 rounded-xl bg-gray-50 border-transparent focus:bg-white focus:ring-4 focus:ring-howzit-red/10 focus:outline-none transition-all font-bold text-howzit-dark text-xs" placeholder="Lake Cruise, Owakudani Valley, Fuji Views" />
                  </div>
                  <div className="col-span-2 space-y-1.5">
                    <label className="text-[9px] font-black uppercase text-gray-400 tracking-widest px-1">Description</label>
                    <textarea name="description" value={carForm.description} onChange={handleCarChange} rows={3} className="w-full px-5 py-3 rounded-xl bg-gray-50 border-transparent focus:bg-white focus:ring-4 focus:ring-howzit-red/10 focus:outline-none transition-all font-medium text-gray-600 text-xs" />
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Live Preview */}
          <div className="lg:col-span-4 sticky top-24 h-fit space-y-6">
            <div className="bg-white rounded-[2.5rem] p-8 shadow-xl border border-howzit-red/20 ring-4 ring-howzit-red/5">
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-howzit-red">Live Preview</h3>
                <Eye size={16} className="text-howzit-red" />
              </div>

              {activeTab === 'guide' && (
                <div className="max-w-[280px] mx-auto border border-gray-100 rounded-2xl p-1 bg-white shadow-lg pointer-events-none animate-in fade-in zoom-in-95">
                  <div className="aspect-[16/11] rounded-xl overflow-hidden mb-3 relative">
                    <img src={guideForm.cardImage} className="w-full h-full object-cover bg-gray-50" />
                    <div className="absolute top-2.5 left-2.5 bg-howzit-red text-white text-[7px] font-black px-2 py-0.5 rounded-full uppercase tracking-widest shadow-lg">{guideForm.category}</div>
                  </div>
                  <div className="px-2 pb-3">
                    <h4 className="text-[11px] font-black text-howzit-dark uppercase mb-1 font-heading">{guideForm.title || 'Title'}</h4>
                    <p className="text-[9px] text-gray-400 line-clamp-2 leading-tight">{guideForm.excerpt}</p>
                  </div>
                </div>
              )}

              {activeTab === 'experience' && (
                <div className="max-w-[280px] mx-auto border border-gray-100 rounded-2xl p-1 bg-white shadow-lg pointer-events-none animate-in fade-in zoom-in-95">
                  <div className="aspect-video rounded-xl overflow-hidden mb-3 relative">
                    <img src={expForm.img} className="w-full h-full object-cover bg-gray-50" />
                    <div className="absolute top-2.5 left-2.5 bg-howzit-red text-white text-[7px] font-black px-2 py-0.5 rounded-full uppercase tracking-widest shadow-lg">{expForm.category}</div>
                  </div>
                  <div className="px-2 pb-3">
                    <h4 className="text-[11px] font-black text-howzit-dark uppercase mb-1 font-heading">{expForm.title}</h4>
                    <p className="text-[9px] text-gray-500 line-clamp-2 mb-2">{expForm.description}</p>
                    <div className="flex items-center justify-between pt-2 border-t border-gray-50">
                       <span className="text-[11px] font-black text-howzit-dark font-heading">{expForm.price}</span>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'car' && (
                <div className="max-w-[280px] mx-auto border border-gray-100 rounded-2xl p-1 bg-white shadow-lg pointer-events-none animate-in fade-in zoom-in-95">
                  <div className="h-32 rounded-xl overflow-hidden mb-3 relative">
                    <img src={carForm.img} className="w-full h-full object-cover bg-gray-50" />
                    <div className="absolute top-2 left-2 bg-howzit-red text-white px-2 py-0.5 rounded-full text-[7px] font-black uppercase tracking-widest flex items-center gap-1 shadow-md">
                      <Car size={10} /> Private Car
                    </div>
                  </div>
                  <div className="px-2 pb-3">
                    <div className="flex items-center gap-1 text-gray-400 text-[8px] font-black uppercase tracking-widest mb-1.5">
                      <Navigation size={8} className="text-howzit-red" /> From {carForm.departure}
                    </div>
                    <h3 className="text-[12px] font-black text-howzit-dark leading-tight mb-2 uppercase tracking-tight font-heading italic">{carForm.title}</h3>
                    <p className="text-[9px] text-gray-500 line-clamp-2 mb-3 leading-relaxed">{carForm.description}</p>
                    <div className="space-y-1 mb-4">
                      {carForm.highlights.split(',').slice(0, 3).map((h, i) => (
                        <div key={i} className="flex items-center gap-1 text-[8px] font-bold text-gray-700">
                          <div className="w-1 h-1 rounded-full bg-howzit-red shrink-0"></div>
                          {h.trim()}
                        </div>
                      ))}
                    </div>
                    <div className="flex items-center justify-between pt-2 border-t border-gray-50">
                      <span className="text-[11px] font-black text-howzit-dark font-heading">{carForm.price}</span>
                      <div className="bg-howzit-dark text-white px-3 py-1 rounded-full text-[8px] font-bold">Details</div>
                    </div>
                  </div>
                </div>
              )}
            </div>
            
            <div className="bg-howzit-dark p-6 rounded-[2rem] text-white">
              <h4 className="text-[10px] font-black uppercase tracking-widest mb-3 flex items-center gap-2 font-heading"><Sparkles size={12} className="text-howzit-red" /> Pro Studio</h4>
              <p className="text-[10px] text-gray-400 leading-relaxed font-medium">Internal content is managed locally for this session. Use searchable list to find existing items. Car tour highlights will render as bullet points.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InternalBlogManager;
