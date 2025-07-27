import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Users , Store , CalendarCheck2 } from 'lucide-react';


export default function Home() {
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-yellow-50 mt-14">
          {/* Main Content */}
      <div className="pt-4 md:pt-8 pb-24 md:pb-8">
        {/* Hero Banner */}
        <div className="mx-4 md:mx-8 mb-8">
          <div
            className="relative bg-gradient-to-r from-orange-400 to-yellow-400 rounded-3xl p-8 md:p-12 overflow-hidden"
            style={{
  backgroundImage: `url('https://i.postimg.cc/Px6mzrpf/best-one.png')`,
  backgroundSize: 'cover',
  backgroundPosition: 'left',
}}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500/80 to-yellow-500/80"></div>
            <div className="relative z-10 text-white">
              <h1 className="text-3xl md:text-5xl font-bold mb-4">
                Welcome to Supply Saathi! 🛒
              </h1>
              <p className="text-xl md:text-2xl mb-2">साथ खरीदो, सस्ता पाओ</p>
              <p className="text-lg md:text-xl opacity-90">Join buying clusters & discover trusted suppliers</p>
            </div>
          </div>
        </div>

        {/* Action Cards */}
        <div className="mx-4 md:mx-8 mb-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <Link to="/clusters" onMouseEnter={() => setHoveredCard('cluster')} onMouseLeave={() => setHoveredCard(null)}>
  <div className={`bg-white rounded-3xl p-8 shadow-lg border-2 border-green-200 transition-all hover:shadow-xl hover:scale-105`}>
    <div className="text-center">
      <div className="w-20 h-20 mx-auto mb-4 bg-green-100 rounded-full flex items-center justify-center">
        <Users className="w-10 h-10 text-green-600" />
      </div>
      <h3 className="text-2xl font-bold text-gray-800 mb-2">Join Cluster</h3>
      <p className="text-lg text-green-600 font-semibold mb-4">साथ खरीदो</p>
      <p className="text-gray-600">Find vendors near you and buy together for better prices</p>
    </div>
  </div>
        </Link>

          <Link to="/supplier" onMouseEnter={() => setHoveredCard('suppliers')} onMouseLeave={() => setHoveredCard(null)}> 
  <div className="bg-white rounded-3xl p-8 shadow-lg border-2 border-blue-200 transition-all hover:shadow-xl hover:scale-105">
    <div className="text-center">
      <div className="w-20 h-20 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center">
        <Store className="w-10 h-10 text-blue-600" />
      </div>
      <h3 className="text-2xl font-bold text-gray-800 mb-2">Explore Suppliers</h3>
      <p className="text-lg text-blue-600 font-semibold mb-4">सस्ता सामान देखो</p>
      <p className="text-gray-600">Discover trusted suppliers with best prices and quality</p>
    </div>
  </div>
</Link>


          <Link to="/trips" onMouseEnter={() => setHoveredCard('trip')} onMouseLeave={() => setHoveredCard(null)}>
  <div className="bg-white rounded-3xl p-8 shadow-lg border-2 border-purple-200 transition-all hover:shadow-xl hover:scale-105">
    <div className="text-center">
      <div className="w-20 h-20 mx-auto mb-4 bg-purple-100 rounded-full flex items-center justify-center">
        <CalendarCheck2 className="w-10 h-10 text-purple-600" />
      </div>
      <h3 className="text-2xl font-bold text-gray-800 mb-2">Plan My Trip</h3>
      <p className="text-lg text-purple-600 font-semibold mb-4">यात्रा की योजना</p>
      <p className="text-gray-600">Schedule buying trips and coordinate with your cluster</p>
    </div>
  </div>
</Link>

        </div>

        {/* Quick Stats & Activity can be left unchanged, just be sure to use `to` instead of `href` */}
        {/* ... */}
      </div>
    </div>
  );
}
