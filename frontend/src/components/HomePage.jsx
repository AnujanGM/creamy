import React from 'react';
import { Link } from 'react-router-dom';
import { Star, MapPin, Clock, Coffee, Utensils, ChevronRight } from 'lucide-react';
import FeaturedItem from './FeaturedItem';
import { menuItems, shopInfo, testimonials } from '../mock';

const HomePage = () => {
  const featuredItem = menuItems.hotDrinks.find(item => item.featured);

  const quickStats = [
    { icon: Coffee, label: "Premium Coffee", value: "15+ Varieties" },
    { icon: Utensils, label: "Fresh Food", value: "25+ Items" },
    { icon: Clock, label: "Open Daily", value: "7AM - 10PM" },
    { icon: Star, label: "Rating", value: "4.9/5" }
  ];

  return (
    <div className="min-h-screen bg-black pt-16">
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-black via-gray-900 to-black">
        <div className="absolute inset-0 bg-gradient-to-br from-black/10 to-yellow-500/5 opacity-20"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 py-20 sm:px-6 lg:px-8">
          <div className="text-center">
            <img 
              src="https://customer-assets.emergentagent.com/job_70ecc632-a415-4311-976a-3ef4a79fcfdc/artifacts/y2iq3wf6_447264785_999914622144139_7335207405736880486_n.jpg" 
              alt="Creamy Creations" 
              className="mx-auto h-20 w-auto mb-8"
            />
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Welcome to <span className="text-yellow-400">Creamy Creations</span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Experience the perfect of coffee artistry and culinary excellence. 
              Ground floor coffee paradise, first floor food haven.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <Link
                to="/menu"
                className="group bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-400 hover:to-yellow-500 text-black font-semibold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-yellow-500/25 flex items-center space-x-2"
              >
                <span>View Full Menu</span>
                <ChevronRight className="group-hover:translate-x-1 transition-transform duration-300" size={20} />
              </Link>
              
              <Link
                to="/contact"
                className="group border-2 border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black font-semibold py-4 px-8 rounded-full transition-all duration-300 flex items-center space-x-2"
              >
                <MapPin size={20} />
                <span>Find Us</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-16 bg-gradient-to-r from-gray-900 to-black border-y border-yellow-500/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {quickStats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="bg-gradient-to-br from-yellow-500/10 to-yellow-600/10 rounded-full p-4 w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="text-yellow-400" size={24} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">{stat.value}</h3>
                <p className="text-gray-400">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Item with 3D Animation */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Today's Special Creation
            </h2>
            <p className="text-gray-400 text-lg">
              Watch our signature drink come together layer by layer
            </p>
          </div>
          
          {featuredItem && <FeaturedItem item={featuredItem} />}
        </div>
      </section>

      {/* Quick Menu Preview */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Popular Categories
            </h2>
            <p className="text-gray-400 text-lg">
              Discover our carefully crafted menu selections
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: "Hot Drinks", items: menuItems.hotDrinks.slice(0, 3), color: "from-orange-600 to-red-600", icon: Coffee },
              { name: "Cold Drinks", items: menuItems.coldDrinks.slice(0, 3), color: "from-blue-600 to-cyan-600", icon: Coffee },
              { name: "Food", items: menuItems.food.slice(0, 3), color: "from-green-600 to-emerald-600", icon: Utensils },
              { name: "Desserts", items: menuItems.desserts.slice(0, 3), color: "from-pink-600 to-purple-600", icon: Star }
            ].map((category, index) => (
              <div key={index} className="group bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 hover:border-yellow-500/30 transition-all duration-300 hover:transform hover:scale-105">
                <div className={`bg-gradient-to-r ${category.color} rounded-full p-3 w-12 h-12 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <category.icon className="text-white" size={20} />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-4">{category.name}</h3>
                
                <div className="space-y-3">
                  {category.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex justify-between items-center">
                      <span className="text-gray-300 text-sm">{item.name}</span>
                      <span className="text-yellow-400 font-semibold text-sm">{item.price}</span>
                    </div>
                  ))}
                </div>
                
                <Link
                  to="/menu"
                  className="inline-flex items-center text-yellow-400 hover:text-yellow-300 text-sm font-semibold mt-4 group-hover:translate-x-1 transition-transform duration-300"
                >
                  View All
                  <ChevronRight size={14} className="ml-1" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              What Our Customers Say
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-6 border border-gray-700">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="text-yellow-400 fill-current" size={16} />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic">"{testimonial.text}"</p>
                <p className="text-yellow-400 font-semibold">- {testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location Preview */}
      <section className="py-20 bg-gradient-to-t from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
            Visit Us Today
          </h2>
          <p className="text-gray-300 mb-8 text-lg">
            {shopInfo.address}
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-400 hover:to-yellow-500 text-black font-semibold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-yellow-500/25 space-x-2"
          >
            <MapPin size={20} />
            <span>Get Directions</span>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;