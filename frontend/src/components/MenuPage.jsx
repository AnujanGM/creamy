import React, { useState } from 'react';
import { Star, Clock, ChefHat, Filter } from 'lucide-react';
import { menuItems } from '../mock';

const MenuPage = () => {
  const [activeCategory, setActiveCategory] = useState('hotDrinks');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    { id: 'hotDrinks', name: 'Hot Drinks', items: menuItems.hotDrinks, color: 'from-orange-500 to-red-500' },
    { id: 'coldDrinks', name: 'Cold Drinks', items: menuItems.coldDrinks, color: 'from-blue-500 to-cyan-500' },
    { id: 'food', name: 'Food', items: menuItems.food, color: 'from-green-500 to-emerald-500' },
    { id: 'desserts', name: 'Desserts', items: menuItems.desserts, color: 'from-pink-500 to-purple-500' }
  ];

  const activeItems = categories.find(cat => cat.id === activeCategory)?.items || [];
  const filteredItems = activeItems.filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-black pt-16">
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-black via-gray-900 to-black py-20">
        <div className="absolute inset-0 bg-gradient-to-br from-black/10 to-yellow-500/5 opacity-50"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Our <span className="text-yellow-400">Menu</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Discover our carefully crafted beverages and delicious food items, 
            made fresh daily with premium ingredients
          </p>
          
          {/* Search Bar */}
          <div className="max-w-md mx-auto">
            <div className="relative">
              <input
                type="text"
                placeholder="Search menu items..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-full py-3 px-6 pl-12 text-white placeholder-gray-400 focus:outline-none focus:border-yellow-500 transition-colors duration-300"
              />
              <Filter className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            </div>
          </div>
        </div>
      </section>

      {/* Category Navigation */}
      <section className="sticky top-16 z-40 bg-black/90 backdrop-blur-md border-b border-yellow-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex overflow-x-auto py-6 space-x-2">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex-shrink-0 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-gradient-to-r from-yellow-500 to-yellow-600 text-black shadow-lg'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Menu Items Grid */}
      <section className="py-16 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Category Header */}
          <div className="text-center mb-12">
            {categories.map((category) => (
              activeCategory === category.id && (
                <div key={category.id} className="inline-flex items-center space-x-3">
                  <div className={`w-12 h-12 bg-gradient-to-r ${category.color} rounded-full flex items-center justify-center`}>
                    <ChefHat className="text-white" size={24} />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-white">
                    {category.name}
                  </h2>
                </div>
              )
            ))}
          </div>

          {/* Items Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item, index) => (
              <div
                key={item.id}
                className="group bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 hover:border-yellow-500/30 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-xl hover:shadow-yellow-500/10"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Item Image */}
                {item.image && (
                  <div className="relative h-48 w-full mb-4 rounded-xl overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  </div>
                )}
                
                {/* Item Badge */}
                {item.featured && (
                  <div className="flex items-center space-x-1 mb-4">
                    <Star className="text-yellow-400 fill-current" size={16} />
                    <span className="text-yellow-400 text-sm font-semibold">Featured</span>
                  </div>
                )}
                
                {/* Item Content */}
                <div className="relative">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-yellow-400 transition-colors duration-300">
                    {item.name}
                  </h3>
                  
                  <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                    {item.description}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-yellow-400">
                      {item.price}
                    </span>
                    
                    <div className="flex items-center space-x-2 text-gray-400 text-sm">
                      <Clock size={14} />
                      <span>5-7 mins</span>
                    </div>
                  </div>
                  
                  {/* Layers Preview for Special Items */}
                  {item.layers && (
                    <div className="mt-4 p-3 bg-black/30 rounded-lg">
                      <p className="text-xs text-gray-400 mb-2">Layers:</p>
                      <div className="flex flex-wrap gap-1">
                        {item.layers.map((layer, layerIndex) => (
                          <span
                            key={layerIndex}
                            className="px-2 py-1 text-xs rounded-full text-white"
                            style={{ backgroundColor: layer.color + '80' }}
                          >
                            {layer.name}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
                
                {/* Order Button */}
                <button className="w-full mt-4 bg-gradient-to-r from-yellow-500/20 to-yellow-600/20 hover:from-yellow-500 hover:to-yellow-600 text-yellow-400 hover:text-black border border-yellow-500/30 hover:border-yellow-500 font-semibold py-2 px-4 rounded-lg transition-all duration-300">
                  Add to Order
                </button>
              </div>
            ))}
          </div>
          
          {/* No Results */}
          {filteredItems.length === 0 && (
            <div className="text-center py-16">
              <div className="w-24 h-24 bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-6">
                <Filter className="text-gray-400" size={32} />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">No items found</h3>
              <p className="text-gray-400">Try adjusting your search or browse other categories</p>
            </div>
          )}
        </div>
      </section>

      {/* Floor Information */}
      <section className="py-16 bg-gradient-to-t from-gray-900 to-black border-t border-yellow-500/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-2xl">G</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Ground Floor</h3>
              <p className="text-gray-300">Coffee Shop</p>
              <p className="text-sm text-gray-400 mt-2">Hot drinks, cold beverages, and light snacks</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-2xl">1</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">First Floor</h3>
              <p className="text-gray-300">Food Shop</p>
              <p className="text-sm text-gray-400 mt-2">Full meals, fried rice, kottu, and desserts</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MenuPage;