'use client';

import { useState } from 'react';
import { FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

export default function ContactPage() {
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    service: '',
    experience: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
    // Reset form or show success message
  };

  return (
    <div className="pt-24 pb-16 bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-[#1C2331] to-[#2E5AAC] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Looking for a VA?</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Get in touch with our team. We&apos;re here to help and answer any questions you might have.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              {/* Form Content */}
              <div className="p-8">
                <h3 className="text-2xl font-bold text-[#1C2331] mb-6">Let&apos;s Elevate Your Operations</h3>
                <p className="text-[#3A4256] mb-8 text-lg">Fill out the form below and our Client Success team will match you with a world-class virtual assistant or remote operations expert. Experience luxury support, tailored to your needs.</p>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="name" className="block text-sm font-medium text-[#1C2331] mb-1">
                            Full Name *
                          </label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            required
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2E5AAC] focus:border-transparent"
                          />
                        </div>
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium text-[#1C2331] mb-1">
                            Email Address *
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2E5AAC] focus:border-transparent"
                          />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="service" className="block text-sm font-medium text-[#1C2331] mb-1">
                          Service Interested In
                        </label>
                        <select
                          id="service"
                          name="service"
                          value={formData.service}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2E5AAC] focus:border-transparent"
                        >
                          <option value="">Select a service</option>
                          <option value="executive">Virtual Executive Assistance</option>
                          <option value="salesforce">Salesforce Admin & Optimization</option>
                          <option value="web">Project-Based Web Development</option>
                          <option value="admin">Admin & Back Office Solutions</option>
                          <option value="other">Other</option>
                        </select>
                      </div>

                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-[#1C2331] mb-1">
                          How can we help you? *
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          rows={4}
                          required
                          value={formData.message}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2E5AAC] focus:border-transparent"
                        ></textarea>
                      </div>
                      <div className="pt-2">
                        <button
                          type="submit"
                          className="w-full bg-[#2E5AAC] text-white font-semibold py-3 px-6 rounded-lg hover:bg-[#1C2331] transition-colors duration-200"
                        >
                          Send Message
                        </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
