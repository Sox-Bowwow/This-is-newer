
import React, { useState } from 'react';
import { Send, CheckCircle, MessageSquare, Building2, User, ChevronDown, Mail } from 'lucide-react';

const ContactUs = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    title: 'Mr.',
    name: '',
    email: '',
    company: '',
    content: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call
    setSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center px-4 animate-in fade-in duration-700">
        <div className="text-center max-w-md">
          <div className="w-24 h-24 bg-howzit-red/10 rounded-full flex items-center justify-center mx-auto mb-8 animate-bounce">
            <CheckCircle size={48} className="text-howzit-red" />
          </div>
          <h2 className="text-4xl font-black text-howzit-dark mb-4 uppercase tracking-tighter font-heading italic">Thank <span className="text-howzit-red">You!</span></h2>
          <p className="text-gray-500 font-medium leading-relaxed mb-8">
            Your message has been received. Our "Local Besties" will reach out to you within 24 hours to start planning your dream Japan journey.
          </p>
          <button 
            onClick={() => setSubmitted(false)}
            className="text-[10px] font-black text-howzit-red uppercase tracking-widest hover:underline"
          >
            Send another message
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="py-12 bg-white min-h-screen px-4">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 text-center">
          <h1 className="text-6xl md:text-8xl font-black mb-4 tracking-tighter uppercase leading-[0.85] text-howzit-dark font-heading">
            Contact<br/><span className="text-howzit-red">Us.</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-400 font-medium max-w-2xl leading-relaxed mx-auto">
            Ready to experience the real Japan? Tell us about your plans, your group, and your dreams. We're here to make it happen.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {/* Form Side */}
          <div className="bg-gray-50/50 p-8 md:p-12 rounded-[3rem] border border-gray-100 shadow-sm">
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Title Selection */}
                <div className="space-y-3">
                  <label className="text-[10px] font-black uppercase text-gray-400 tracking-[0.2em] flex items-center gap-2 px-1">
                    <ChevronDown size={14} className="text-howzit-red" /> Prefix / Title
                  </label>
                  <select 
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    className="w-full px-6 py-4 rounded-2xl bg-white border border-gray-200 focus:border-howzit-red focus:ring-4 focus:ring-howzit-red/10 focus:outline-none transition-all font-bold text-howzit-dark shadow-sm appearance-none cursor-pointer text-sm"
                  >
                    <option value="Mr.">Mr.</option>
                    <option value="Ms.">Ms.</option>
                    <option value="Dr.">Dr.</option>
                    <option value="Prof.">Prof.</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                {/* Name Input */}
                <div className="space-y-3">
                  <label className="text-[10px] font-black uppercase text-gray-400 tracking-[0.2em] flex items-center gap-2 px-1">
                    <User size={14} className="text-howzit-red" /> Full Name
                  </label>
                  <input 
                    type="text"
                    name="name"
                    required
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-6 py-4 rounded-2xl bg-white border border-gray-200 focus:border-howzit-red focus:ring-4 focus:ring-howzit-red/10 focus:outline-none transition-all font-bold text-howzit-dark shadow-sm text-sm"
                  />
                </div>
              </div>

              {/* Email Input */}
              <div className="space-y-3">
                <label className="text-[10px] font-black uppercase text-gray-400 tracking-[0.2em] flex items-center gap-2 px-1">
                  <Mail size={14} className="text-howzit-red" /> Email Address
                </label>
                <input 
                  type="email"
                  name="email"
                  required
                  placeholder="hello@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-6 py-4 rounded-2xl bg-white border border-gray-200 focus:border-howzit-red focus:ring-4 focus:ring-howzit-red/10 focus:outline-none transition-all font-bold text-howzit-dark shadow-sm text-sm"
                />
              </div>

              {/* Company Input */}
              <div className="space-y-3">
                <label className="text-[10px] font-black uppercase text-gray-400 tracking-[0.2em] flex items-center gap-2 px-1">
                  <Building2 size={14} className="text-howzit-red" /> Company Name (Optional)
                </label>
                <input 
                  type="text"
                  name="company"
                  placeholder="ACME Corp"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-6 py-4 rounded-2xl bg-white border border-gray-200 focus:border-howzit-red focus:ring-4 focus:ring-howzit-red/10 focus:outline-none transition-all font-bold text-howzit-dark shadow-sm text-sm"
                />
              </div>

              {/* Message Content */}
              <div className="space-y-3">
                <label className="text-[10px] font-black uppercase text-gray-400 tracking-[0.2em] flex items-center gap-2 px-1">
                  <MessageSquare size={14} className="text-howzit-red" /> Your Request
                </label>
                <textarea 
                  name="content"
                  required
                  rows={6}
                  placeholder="Tell us about your trip dates, group size, and what interests you most about Japan..."
                  value={formData.content}
                  onChange={handleChange}
                  className="w-full px-6 py-4 rounded-2xl bg-white border border-gray-200 focus:border-howzit-red focus:ring-4 focus:ring-howzit-red/10 focus:outline-none transition-all font-medium text-gray-600 shadow-sm text-sm leading-relaxed"
                />
              </div>

              <div className="flex justify-center pt-4">
                <button 
                  type="submit"
                  className="w-full md:w-auto bg-howzit-red text-white px-16 py-5 rounded-full font-black text-sm uppercase tracking-widest shadow-2xl shadow-howzit-red/20 hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-3 group"
                >
                  Send Message
                  <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </div>
            </form>
          </div>
          
          <div className="mt-12 text-center">
             <p className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-300">
                Our "Local Besties" aim to respond within 1 business day.
             </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
