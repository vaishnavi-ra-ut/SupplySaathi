import { Link } from 'react-router-dom';
import { useState } from 'react';
import { suppliers } from '../utils/suppliersData';
import{Store, Grid, Leaf, Apple, Flame, Wheat, Milk, Phone, Heart, UserCheck, Truck, Check, UserRoundPlus} from 'lucide-react'

export default function Supplier() {
  const [hoveredSupplier, setHoveredSupplier] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('all');

const categories = [
  { id: 'all', name: 'All', icon: Grid },
  { id: 'vegetables', name: 'Vegetables', icon: Leaf },
  { id: 'fruits', name: 'Fruits', icon: Apple },
  { id: 'spices', name: 'Spices', icon: Flame },
  { id: 'grains', name: 'Grains', icon: Wheat },
  { id: 'dairy', name: 'Dairy', icon: Milk }
];


  const filteredSuppliers = selectedCategory === 'all' 
    ? suppliers 
    : suppliers.filter(supplier => supplier.category === selectedCategory);

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <i key={i} className="ri-star-fill text-yellow-400"></i>
      );
    }

    if (hasHalfStar) {
      stars.push(
        <i key="half" className="ri-star-half-fill text-yellow-400"></i>
      );
    }

    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <i key={`empty-${i}`} className="ri-star-line text-gray-300"></i>
      );
    }

    return stars;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-yellow-50 mt-14">
     
      {/* Main Content */}
      <div className="pt-4 md:pt-8 pb-24 md:pb-8">
        {/* Header */}
        <div className="mx-4 md:mx-8 mb-6">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            <div className="w-9 h-9 inline-block mr-3 bg-blue-100 rounded-full align-middle">
              <Store className="text-2xl text-blue-600 flex items-center justify-center h-full ml-1.5"/>
            </div>
            Trusted Suppliers
          </h1>
          <p className="text-lg text-gray-600">भरोसेमंद आपूर्तिकर्ता खोजें</p>
        </div>

        {/* Category Filter */}
        <div className="mx-4 md:mx-8 mb-6">
          <div className="flex space-x-2 overflow-x-auto pb-2">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center px-4 py-2 rounded-full transition-colors whitespace-nowrap ${
                  selectedCategory === category.id
                    ? 'bg-orange-600 text-white'
                    : 'bg-white text-gray-600 hover:bg-orange-50 hover:text-orange-600'
                }`}
              >
                <div className="w-5 h-5 mr-2 flex items-center justify-center">
                  <category.icon className="w-5 h-5" />
                </div>
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Suppliers Grid */}
        <div className="mx-4 md:mx-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredSuppliers.map((supplier) => (
              <div
                key={supplier.id}
                className={`bg-white rounded-3xl shadow-lg overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-xl hover:scale-105 ${
                  hoveredSupplier === supplier.id ? 'transform scale-105' : ''
                }`}
                onMouseEnter={() => setHoveredSupplier(supplier.id)}
                onMouseLeave={() => setHoveredSupplier(null)}
              >
                {/* Supplier Image */}
                <div className="relative h-48 bg-gray-100">
                  <img
                    src={supplier.image}
                    alt={supplier.name}
                    className="w-full h-full object-cover object-top"
                  />
                  {supplier.verified && (
                    <div className="absolute top-3 right-3 bg-green-600 text-white px-2 py-1 rounded-full text-xs font-semibold flex items-center">
    <Check className="w-4 h-4 mr-1" />
    Verified
  </div>
)}

{supplier.delivery && (
  <div className="absolute top-3 left-3 bg-blue-600 text-white px-2 py-1 rounded-full text-xs font-semibold flex items-center">
    <Truck className="w-4 h-4 mr-1" />
    Delivery
  </div>
                  )}
                </div>

                {/* Supplier Info */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="text-xl font-bold text-gray-800">{supplier.name}</h3>
                      <p className="text-sm text-gray-600">{supplier.location}</p>
                    </div>
                    <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded-full text-xs font-semibold">
                      {supplier.priceRange}
                    </span>
                  </div>

                  {/* Rating */}
                  <div className="flex items-center mb-3">
                    <div className="flex items-center mr-1">
                      {renderStars(supplier.rating)}
                    </div>
                    <span className="text-sm font-semibold text-gray-700">★ {supplier.rating}</span>
                  </div>

                  {/* Trusted By */}
                  <div className="flex items-center mb-4">
                    <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center mr-2">
                      <UserCheck className='text-green-600'/>
                    </div>
                    <span className="text-sm text-gray-600">Trusted by {supplier.trustedBy} vendors</span>
                  </div>

                  {/* Specialties */}
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-1">
                      {supplier.specialties.map((specialty, index) => (
                        <span
                          key={index}
                          className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs"
                        >
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-2">
                    <button className="flex-1 bg-orange-600 text-white py-3 px-4 rounded-2xl font-semibold hover:bg-orange-700 transition-colors whitespace-nowrap">
                      <div className="w-5 h-5 inline-block mr-2">
                        <i className="ri-eye-fill"></i>
                      </div>
                      View Details
                    </button>
                    <button className="px-4 py-3 bg-gray-100 text-gray-700 rounded-2xl hover:bg-gray-200 transition-colors">
                      <div className="w-5 h-5 flex items-center justify-center">
                        <Phone/>
                      </div>
                    </button>
                    <button className="px-4 py-3 bg-gray-100 text-gray-700 rounded-2xl hover:bg-gray-200 transition-colors">
                      <div className="w-5 h-5 flex items-center justify-center">
                        <Heart/>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Add Supplier CTA */}
        <div className="mx-4 md:mx-8 mt-8">
          <div className="bg-gradient-to-r from-blue-400 to-purple-400 rounded-3xl p-6 shadow-lg">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Know a great supplier?</h3>
                <p className="text-white opacity-90">Help the community by adding trusted suppliers</p>
              </div>
              <button className="bg-white text-blue-600 px-6 py-3 rounded-2xl font-semibold hover:bg-gray-100 transition-colors whitespace-nowrap">
                <div className="w-5 h-4 inline-block mr-2">
                  <UserRoundPlus/>
                </div>
                Add Supplier
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
