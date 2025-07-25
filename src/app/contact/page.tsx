'use client';

import { useState } from 'react';
import { FaEnvelope, FaMapMarkerAlt, FaUserTie, FaUserCheck } from 'react-icons/fa';

export default function ContactPage() {
  const [activeTab, setActiveTab] = useState('client');
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
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Get in touch with our team. We&apos;re here to help and answer any questions you might have.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-lg p-8 h-full">
              <h2 className="text-2xl font-bold text-[#1C2331] mb-6">Get in Touch</h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-blue-50 p-3 rounded-lg">
                    <FaEnvelope className="h-6 w-6 text-[#2E5AAC]" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-[#1C2331]">Email Us</h3>
                    <p className="mt-1 text-[#3A4256]">opsalphava@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-blue-50 p-3 rounded-lg">
                    <FaMapMarkerAlt className="h-6 w-6 text-[#2E5AAC]" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-[#1C2331]">Location</h3>
                    <p className="mt-1 text-[#3A4256]">Manila, Philippines</p>
                    <p className="text-sm text-gray-500">Serving clients worldwide</p>
                  </div>
                </div>

                <div className="pt-4 border-t border-gray-200">
                  <h3 className="text-lg font-medium text-[#1C2331] mb-3">Business Hours</h3>
                  <p className="text-[#3A4256]">Monday - Friday: 9:00 AM - 6:00 PM (PHT)</p>
                  <p className="text-sm text-gray-500 mt-1">Weekends: Available by appointment</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              {/* Tabs */}
              <div className="flex border-b border-gray-200">
                <button
                  onClick={() => setActiveTab('client')}
                  className={`flex-1 py-4 px-6 text-center font-medium flex items-center justify-center space-x-2 ${
                    activeTab === 'client'
                      ? 'text-[#2E5AAC] border-b-2 border-[#2E5AAC]'
                      : 'text-gray-500 hover:text-[#1C2331]'
                  }`}
                >
                  <FaUserTie className="h-5 w-5" />
                  <span>I&apos;m a Client</span>
                </button>
                <button
                  onClick={() => setActiveTab('va')}
                  className={`flex-1 py-4 px-6 text-center font-medium flex items-center justify-center space-x-2 ${
                    activeTab === 'va'
                      ? 'text-[#2E5AAC] border-b-2 border-[#2E5AAC]'
                      : 'text-gray-500 hover:text-[#1C2331]'
                  }`}
                >
                  <FaUserCheck className="h-5 w-5" />
                  <span>I&apos;m a VA</span>
                </button>
              </div>

              {/* Form Content */}
              <div className="p-8">
                {activeTab === 'client' ? (
                  <>
                    <h3 className="text-2xl font-bold text-[#1C2331] mb-6">How can we help you?</h3>
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
                  </>
                ) : (
                  <>
                    <h3 className="text-2xl font-bold text-[#1C2331] mb-6">Join Our Team</h3>
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
                        <label htmlFor="phone" className="block text-sm font-medium text-[#1C2331] mb-1">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2E5AAC] focus:border-transparent"
                        />
                      </div>

                      <div>
                        <label htmlFor="experience" className="block text-sm font-medium text-[#1C2331] mb-1">
                          Experience Level *
                        </label>
                        <select
                          id="experience"
                          name="experience"
                          required
                          value={formData.experience}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2E5AAC] focus:border-transparent"
                        >
                          <option value="">Select experience level</option>
                          <option value="entry">Entry Level (0-1 years)</option>
                          <option value="mid">Mid Level (2-4 years)</option>
                          <option value="senior">Senior Level (5+ years)</option>
                        </select>
                      </div>

                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-[#1C2331] mb-1">
                          Tell us about yourself and why you&apos;d be a great fit *
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
                          Submit Application
                        </button>
                      </div>
                    </form>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
