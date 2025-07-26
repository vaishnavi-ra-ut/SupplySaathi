import { useEffect, useState } from "react";
import Header from "../components/Header";

const Dashboard = () => {
  //   const [user, setUser] = useState({ fullName: "Vendor Ji" }); // Later: fetch from token
  //   const [clusters, setClusters] = useState([]);
  //   const [suppliers, setSuppliers] = useState([]);
  //   useEffect(() => {
  //     // Fetch joined clusters & supplier info (later from backend)
  //     setClusters([
  //       {
  //         id: 1,
  //         title: "Nagpur Market",
  //         location: "Nagpur",
  //         date: "26 July",
  //         members: 7,
  //       },
  //     ]);
  //     setSuppliers([
  //       { id: 1, name: "Sharma Wholesalers", rating: 4.5, location: "Nagpur" },
  //     ]);
  //   }, []);
  //   return (
  //     <div className="min-h-screen bg-pink-50">
  //       <Header title="Dashboard" />
  //       <div className="p-4">
  //         <h2 className="text-xl font-bold text-pink-700 mb-4">
  //           Welcome, {user.fullName.split(" ")[0]}! 👋
  //         </h2>
  //         {/* Actions */}
  //         <div className="grid grid-cols-2 gap-4 mb-6">
  //           <ActionCard title="Start a Trip" icon="🛺" link="/create-cluster" />
  //           <ActionCard title="Join a Trip" icon="👥" link="/clusters" />
  //           <ActionCard title="See Suppliers" icon="🏬" link="/suppliers" />
  //           <ActionCard title="My Ratings" icon="⭐" link="/profile" />
  //         </div>
  //         {/* Joined Clusters */}
  //         <section className="mb-6">
  //           <h3 className="text-lg font-semibold text-pink-600 mb-2">
  //             My Upcoming Trips
  //           </h3>
  //           {clusters.length === 0 ? (
  //             <p className="text-sm text-gray-500">
  //               You haven’t joined any cluster yet.
  //             </p>
  //           ) : (
  //             clusters.map((cluster) => (
  //               <div
  //                 key={cluster.id}
  //                 className="bg-white shadow rounded p-3 mb-2 border-l-4 border-green-500"
  //               >
  //                 <h4 className="font-bold text-md">{cluster.title}</h4>
  //                 <p className="text-sm text-gray-600">
  //                   {cluster.location} • {cluster.date}
  //                 </p>
  //                 <p className="text-xs text-gray-400">
  //                   {cluster.members} vendors going
  //                 </p>
  //               </div>
  //             ))
  //           )}
  //         </section>
  //         {/* Top Suppliers */}
  //         <section>
  //           <h3 className="text-lg font-semibold text-pink-600 mb-2">
  //             Top Nearby Suppliers
  //           </h3>
  //           {suppliers.length === 0 ? (
  //             <p className="text-sm text-gray-500">No supplier ratings yet.</p>
  //           ) : (
  //             suppliers.map((s) => (
  //               <div
  //                 key={s.id}
  //                 className="bg-white shadow rounded p-3 mb-2 border-l-4 border-yellow-500"
  //               >
  //                 <h4 className="font-bold text-md">{s.name}</h4>
  //                 <p className="text-sm text-gray-600">{s.location}</p>
  //                 <p className="text-xs text-yellow-600">⭐ {s.rating}/5</p>
  //               </div>
  //             ))
  //           )}
  //         </section>
  //       </div>
  //     </div>
  //   );
};

// const ActionCard = ({ title, icon, link }) => (
//   <a href={link}>
//     <div className="bg-white rounded shadow flex flex-col items-center justify-center p-4 hover:shadow-md transition">
//       <div className="text-3xl mb-2">{icon}</div>
//       <p className="text-center text-sm font-medium text-gray-700">{title}</p>
//     </div>
//   </a>
// );

export default Dashboard;
