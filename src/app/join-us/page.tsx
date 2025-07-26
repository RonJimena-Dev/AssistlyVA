'use client';

import React, { useState } from 'react';

export default function JoinUsPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    experience: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle submission logic
    alert('Application submitted!');
  };

  return (
    <section className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-24">
      <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-2xl p-10 border border-gray-100">
        <h1 className="text-4xl font-bold text-[#1C2331] mb-4 text-center font-poppins">Join OpsAlpha's Elite VA Team</h1>
        <p className="text-lg text-[#3A4256] mb-8 text-center">Ready to deliver white-glove service for top-tier clients? Apply below to start your journey with a luxury, growth-focused team.</p>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-[#1C2331] mb-1">Full Name *</label>
              <input type="text" id="name" name="name" required value={formData.name} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2E5AAC] focus:border-transparent" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-[#1C2331] mb-1">Email Address *</label>
              <input type="email" id="email" name="email" required value={formData.email} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2E5AAC] focus:border-transparent" />
            </div>
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-[#1C2331] mb-1">Phone Number</label>
            <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2E5AAC] focus:border-transparent" />
          </div>
          <div>
            <label htmlFor="experience" className="block text-sm font-medium text-[#1C2331] mb-1">Experience Level *</label>
            <select id="experience" name="experience" required value={formData.experience} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2E5AAC] focus:border-transparent">
              <option value="">Select experience level</option>
              <option value="entry">Entry Level (0-1 years)</option>
              <option value="mid">Mid Level (2-4 years)</option>
              <option value="senior">Senior Level (5+ years)</option>
            </select>
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-[#1C2331] mb-1">Why do you want to join OpsAlpha?</label>
            <textarea id="message" name="message" rows={4} value={formData.message} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2E5AAC] focus:border-transparent"></textarea>
          </div>
          <div className="pt-2">
            <button type="submit" className="w-full bg-[#2E5AAC] text-white font-semibold py-3 px-6 rounded-lg hover:bg-[#1C2331] transition-colors duration-200">Submit Application</button>
          </div>
        </form>
      </div>
    </section>
  );
}
