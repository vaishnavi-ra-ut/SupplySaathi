import { useEffect, useState } from "react";
import api from "../api";
import { useSelector } from "react-redux";
export default function Clusters() {
  const user = useSelector((s) => s.user.user);
  const [clusters, setClusters] = useState([]);
  const [form, setForm] = useState({ name: "", city: "", area: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  useEffect(() => { api.get("/clusters").then(res => setClusters(res.data)); }, []);
  const handleCreate = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const res = await api.post("/clusters/create", form);
      setClusters([res.data, ...clusters]);
      setForm({ name: "", city: "", area: "" });
    } catch (err) {
      setError(err.response?.data?.message || "Error");
    }
    setLoading(false);
  };
  const handleJoin = async (id) => {
    try {
      const res = await api.post(`/clusters/${id}/join`);
      setClusters(clusters.map(c => c._id === id ? res.data : c));
    } catch {}
  };
  return (
    <div className="min-h-screen flex flex-col items-center bg-gradient-to-br from-orange-50 to-yellow-50 pt-8">
      <h2 className="text-2xl font-bold text-orange-700 mb-4">Clusters</h2>
      {user.role === "supplier" && (
        <form className="bg-white rounded-xl shadow p-4 mb-6 w-full max-w-md" onSubmit={handleCreate}>
          <div className="mb-2"><input name="name" required placeholder="Cluster Name" className="w-full border rounded px-3 py-2" value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))} /></div>
          <div className="mb-2"><input name="city" required placeholder="City" className="w-full border rounded px-3 py-2" value={form.city} onChange={e => setForm(f => ({ ...f, city: e.target.value }))} /></div>
          <div className="mb-2"><input name="area" required placeholder="Area" className="w-full border rounded px-3 py-2" value={form.area} onChange={e => setForm(f => ({ ...f, area: e.target.value }))} /></div>
          {error && <div className="text-red-500 text-sm mb-2">{error}</div>}
          <button className="w-full bg-orange-600 text-white py-2 rounded font-semibold" disabled={loading}>{loading ? "Creating..." : "Create Cluster"}</button>
        </form>
      )}
      <div className="w-full max-w-2xl">
        {clusters.length === 0 && <div className="text-center text-gray-500">No clusters yet.</div>}
        {clusters.map((c) => (
          <div key={c._id} className="bg-white rounded-xl shadow p-4 mb-4 flex flex-col md:flex-row md:items-center md:justify-between">
            <div>
              <div className="font-bold text-lg text-orange-700">{c.name}</div>
              <div className="text-gray-600 text-sm">{c.area}, {c.city}</div>
              <div className="text-gray-500 text-xs">Created by: {c.createdBy?.name} ({c.createdBy?.role})</div>
              <div className="text-gray-500 text-xs">Members: {c.members?.length}</div>
            </div>
            {user.role === "vendor" && !c.members?.some(m => m._id === user.id) && (
              <button className="mt-2 md:mt-0 bg-green-600 text-white px-4 py-2 rounded font-semibold" onClick={() => handleJoin(c._id)}>Join</button>
            )}
            {user.role === "vendor" && c.members?.some(m => m._id === user.id) && (
              <span className="mt-2 md:mt-0 text-green-700 font-semibold">Joined</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
} 