import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Star, Navigation } from 'lucide-react';
import { shopInfo } from '../mock';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mock form submission
    alert('Thank you for your message! We\'ll get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  const contactInfo = [
    {
      icon: Phone,
      label: 'Phone',
      value: shopInfo.phone,
      action: `tel:${shopInfo.phone}`,
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Mail,
      label: 'Email',
      value: shopInfo.email,
      action: `mailto:${shopInfo.email}`,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: MapPin,
      label: 'Address',
      value: shopInfo.address,
      action: `https://maps.google.com/?q=${encodeURIComponent(shopInfo.address)}`,
      color: 'from-red-500 to-pink-500'
    },
    {
      icon: Clock,
      label: 'Hours',
      value: `${shopInfo.hours.weekdays}`,
      color: 'from-yellow-500 to-orange-500'
    }
  ];

  return (
    <div className="min-h-screen bg-black pt-16">
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-black via-gray-900 to-black py-20">
        <div className="absolute inset-0 bg-gradient-to-br from-black/10 to-yellow-500/5 opacity-50"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Get in <span className="text-yellow-400">Touch</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Visit us for an unforgettable coffee and dining experience. 
            We'd love to serve you our signature creations.
          </p>
        </div>
      </section>

      {/* Contact Information Cards */}
      <section className="py-16 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="group bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 hover:border-yellow-500/30 transition-all duration-300 hover:transform hover:scale-105 text-center"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${info.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <info.icon className="text-white" size={24} />
                </div>
                
                <h3 className="text-lg font-bold text-white mb-2">{info.label}</h3>
                
                {info.action ? (
                  <a
                    href={info.action}
                    target={info.action.startsWith('http') ? '_blank' : undefined}
                    rel={info.action.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="text-gray-300 hover:text-yellow-400 transition-colors duration-300 text-sm leading-relaxed block"
                  >
                    {info.value}
                  </a>
                ) : (
                  <p className="text-gray-300 text-sm leading-relaxed">{info.value}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Contact Content */}
      <section className="py-16 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-white mb-8">Send us a Message</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-gray-300 text-sm font-semibold mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-lg py-3 px-4 text-white placeholder-gray-400 focus:outline-none focus:border-yellow-500 transition-colors duration-300"
                    placeholder="Your full name"
                  />
                </div>
                
                <div>
                  <label className="block text-gray-300 text-sm font-semibold mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-lg py-3 px-4 text-white placeholder-gray-400 focus:outline-none focus:border-yellow-500 transition-colors duration-300"
                    placeholder="your@email.com"
                  />
                </div>
                
                <div>
                  <label className="block text-gray-300 text-sm font-semibold mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-lg py-3 px-4 text-white placeholder-gray-400 focus:outline-none focus:border-yellow-500 transition-colors duration-300 resize-none"
                    placeholder="Tell us about your inquiry, feedback, or special requests..."
                  />
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-400 hover:to-yellow-500 text-black font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-yellow-500/25"
                >
                  Send Message
                </button>
              </form>
            </div>
            
            {/* Location & Info */}
            <div>
              <h2 className="text-3xl font-bold text-white mb-8">Visit Our Location</h2>
              
              <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 mb-8">
                <div className="flex items-start space-x-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-pink-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-white" size={20} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2">Address</h3>
                    <p className="text-gray-300 leading-relaxed">{shopInfo.address}</p>
                  </div>
                </div>
                
                <a
                  href={`https://maps.google.com/?q=${encodeURIComponent(shopInfo.address)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-gradient-to-r from-blue-500/20 to-cyan-500/20 hover:from-blue-500 hover:to-cyan-500 text-blue-400 hover:text-white border border-blue-500/30 hover:border-blue-500 font-semibold py-2 px-4 rounded-lg transition-all duration-300 space-x-2"
                >
                  <Navigation size={16} />
                  <span>Get Directions</span>
                </a>
              </div>
              
              {/* Operating Hours */}
              <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 mb-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="text-white" size={20} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-4">Operating Hours</h3>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-gray-300">Monday - Friday</span>
                        <span className="text-yellow-400 font-semibold">{shopInfo.hours.weekdays}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-300">Saturday - Sunday</span>
                        <span className="text-yellow-400 font-semibold">{shopInfo.hours.weekends}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floor Information */}
              <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700">
                <h3 className="text-lg font-bold text-white mb-4">Our Floors</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold">G</span>
                    </div>
                    <div>
                      <p className="text-white font-semibold">Ground Floor</p>
                      <p className="text-gray-400 text-sm">Coffee Shop - Premium beverages & light snacks</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold">1</span>
                    </div>
                    <div>
                      <p className="text-white font-semibold">First Floor</p>
                      <p className="text-gray-400 text-sm">Food Shop - Full meals, fried rice, kottu & desserts</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Google Maps Embed */}
      <section className="py-16 bg-gradient-to-t from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Find Us on the Map
            </h2>
            <p className="text-gray-400">Located in the heart of Jaffna on Kandy Road</p>
          </div>
          
          <div className="rounded-2xl overflow-hidden border border-gray-700 shadow-2xl">
          <iframe
            src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyBNn6LzAwtpTaGg0kZsUpR5CESQOQ-d8MY&q=${encodeURIComponent(shopInfo.address)}&zoom=16`}
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Creamy Creations Location"
            className="grayscale hover:grayscale-0 transition-all duration-500"
          />
</div>

        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-black border-t border-yellow-500/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Experience Our Creations?
          </h2>
          <p className="text-gray-300 mb-8 text-lg">
            Come visit us today and taste the difference quality makes
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <a
              href={`tel:${shopInfo.phone}`}
              className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-400 hover:to-emerald-500 text-white font-semibold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-green-500/25 flex items-center space-x-2"
            >
              <Phone size={20} />
              <span>Call Now</span>
            </a>
            
            <a
              href={`https://maps.google.com/?q=${encodeURIComponent(shopInfo.address)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black font-semibold py-4 px-8 rounded-full transition-all duration-300 flex items-center space-x-2"
            >
              <MapPin size={20} />
              <span>Visit Us</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;