import { Link } from 'react-router-dom';
import { useState } from 'react';
import suppliers from '../utils/suppliersData'

export default function Suppliers() {
  const [hoveredSupplier, setHoveredSupplier] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All', icon: 'ri-grid-fill' },
    { id: 'vegetables', name: 'Vegetables', icon: 'ri-leaf-fill' },
    { id: 'fruits', name: 'Fruits', icon: 'ri-apple-fill' },
    { id: 'spices', name: 'Spices', icon: 'ri-fire-fill' },
    { id: 'grains', name: 'Grains', icon: 'ri-plant-fill' },
    { id: 'dairy', name: 'Dairy', icon: 'ri-drop-fill' }
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
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-yellow-50">
      {/* Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white shadow-lg border-t-2 border-orange-200 z-50 md:hidden">
        <div className="flex justify-around items-center py-3">
          <Link href="/" className="flex flex-col items-center p-2">
            <div className="w-8 h-8 flex items-center justify-center">
              <i className="ri-home-fill text-2xl text-gray-500"></i>
            </div>
            <span className="text-xs text-gray-600 mt-1">Home</span>
          </Link>
          <Link href="/clusters" className="flex flex-col items-center p-2">
            <div className="w-8 h-8 flex items-center justify-center">
              <i className="ri-group-fill text-2xl text-gray-500"></i>
            </div>
            <span className="text-xs text-gray-600 mt-1">Clusters</span>
          </Link>
          <Link href="/suppliers" className="flex flex-col items-center p-2">
            <div className="w-8 h-8 flex items-center justify-center">
              <i className="ri-store-2-fill text-2xl text-orange-600"></i>
            </div>
            <span className="text-xs text-gray-600 mt-1">Suppliers</span>
          </Link>
          <Link href="/profile" className="flex flex-col items-center p-2">
            <div className="w-8 h-8 flex items-center justify-center">
              <i className="ri-user-fill text-2xl text-gray-500"></i>
            </div>
            <span className="text-xs text-gray-600 mt-1">Profile</span>
          </Link>
        </div>
      </nav>

      {/* Desktop Top Navigation */}
      <nav className="hidden md:flex bg-white shadow-sm border-b-2 border-orange-200 px-8 py-4">
        <div className="flex items-center space-x-8">
          <Link href="/" className="text-2xl font-bold text-orange-600" style={{ fontFamily: 'Pacifico, serif' }}>
            SupplySathi
          </Link>
          <div className="flex space-x-6">
            <Link href="/" className="flex items-center space-x-2 px-4 py-2 text-gray-600 hover:text-orange-600 hover:bg-orange-50 rounded-full transition-colors">
              <div className="w-6 h-6 flex items-center justify-center">
                <i className="ri-home-fill text-xl"></i>
              </div>
              <span className="font-medium">Home</span>
            </Link>
            <Link href="/clusters" className="flex items-center space-x-2 px-4 py-2 text-gray-600 hover:text-orange-600 hover:bg-orange-50 rounded-full transition-colors">
              <div className="w-6 h-6 flex items-center justify-center">
                <i className="ri-group-fill text-xl"></i>
              </div>
              <span className="font-medium">My Clusters</span>
            </Link>
            <Link href="/suppliers" className="flex items-center space-x-2 px-4 py-2 text-orange-600 bg-orange-50 rounded-full">
              <div className="w-6 h-6 flex items-center justify-center">
                <i className="ri-store-2-fill text-xl"></i>
              </div>
              <span className="font-medium">Suppliers</span>
            </Link>
            <Link href="/profile" className="flex items-center space-x-2 px-4 py-2 text-gray-600 hover:text-orange-600 hover:bg-orange-50 rounded-full transition-colors">
              <div className="w-6 h-6 flex items-center justify-center">
                <i className="ri-user-fill text-xl"></i>
              </div>
              <span className="font-medium">Profile</span>
            </Link>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="pt-4 md:pt-8 pb-24 md:pb-8">
        {/* Header */}
        <div className="mx-4 md:mx-8 mb-6">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            <div className="w-8 h-8 inline-block mr-3 bg-blue-100 rounded-full align-middle">
              <i className="ri-store-2-fill text-2xl text-blue-600 flex items-center justify-center h-full"></i>
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
                  <i className={`${category.icon} text-lg`}></i>
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
                    <div className="absolute top-3 right-3 bg-green-600 text-white px-2 py-1 rounded-full text-xs font-semibold">
                      <div className="w-3 h-3 inline-block mr-1">
                        <i className="ri-check-fill"></i>
                      </div>
                      Verified
                    </div>
                  )}
                  {supplier.delivery && (
                    <div className="absolute top-3 left-3 bg-blue-600 text-white px-2 py-1 rounded-full text-xs font-semibold">
                      <div className="w-3 h-3 inline-block mr-1">
                        <i className="ri-truck-fill"></i>
                      </div>
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
                    <div className="flex items-center mr-2">
                      {renderStars(supplier.rating)}
                    </div>
                    <span className="text-sm font-semibold text-gray-700">{supplier.rating}</span>
                  </div>

                  {/* Trusted By */}
                  <div className="flex items-center mb-4">
                    <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center mr-2">
                      <i className="ri-shield-check-fill text-green-600"></i>
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
                        <i className="ri-phone-fill"></i>
                      </div>
                    </button>
                    <button className="px-4 py-3 bg-gray-100 text-gray-700 rounded-2xl hover:bg-gray-200 transition-colors">
                      <div className="w-5 h-5 flex items-center justify-center">
                        <i className="ri-heart-fill"></i>
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
                <div className="w-5 h-5 inline-block mr-2">
                  <i className="ri-add-fill"></i>
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
