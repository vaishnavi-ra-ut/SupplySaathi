import { useEffect, useState } from "react";
import api from "../api";
import { useSelector } from "react-redux";
export default function Suppliers() {
  const user = useSelector((s) => s.user.user);
  const [suppliers, setSuppliers] = useState([]);
  const [form, setForm] = useState({ name: "", category: "", location: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  useEffect(() => { api.get("/suppliers").then(res => setSuppliers(res.data)); }, []);
  const handleCreate = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const res = await api.post("/suppliers/create", form);
      setSuppliers([res.data, ...suppliers]);
      setForm({ name: "", category: "", location: "" });
    } catch (err) {
      setError(err.response?.data?.message || "Error");
    }
    setLoading(false);
  };
  return (
    <div className="min-h-screen flex flex-col items-center bg-gradient-to-br from-orange-50 to-yellow-50 pt-8">
      <h2 className="text-2xl font-bold text-orange-700 mb-4">Suppliers</h2>
      {user.role === "supplier" && (
        <form className="bg-white rounded-xl shadow p-4 mb-6 w-full max-w-md" onSubmit={handleCreate}>
          <div className="mb-2"><input name="name" required placeholder="Supplier Name" className="w-full border rounded px-3 py-2" value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))} /></div>
          <div className="mb-2"><input name="category" required placeholder="Category" className="w-full border rounded px-3 py-2" value={form.category} onChange={e => setForm(f => ({ ...f, category: e.target.value }))} /></div>
          <div className="mb-2"><input name="location" required placeholder="Location" className="w-full border rounded px-3 py-2" value={form.location} onChange={e => setForm(f => ({ ...f, location: e.target.value }))} /></div>
          {error && <div className="text-red-500 text-sm mb-2">{error}</div>}
          <button className="w-full bg-orange-600 text-white py-2 rounded font-semibold" disabled={loading}>{loading ? "Adding..." : "Add Supplier"}</button>
        </form>
      )}
      <div className="w-full max-w-2xl">
        {suppliers.length === 0 && <div className="text-center text-gray-500">No suppliers yet.</div>}
        {suppliers.map((s) => (
          <div key={s._id} className="bg-white rounded-xl shadow p-4 mb-4 flex flex-col md:flex-row md:items-center md:justify-between">
            <div>
              <div className="font-bold text-lg text-orange-700">{s.name}</div>
              <div className="text-gray-600 text-sm">{s.category} - {s.location}</div>
              <div className="text-gray-500 text-xs">Added by: {s.createdBy?.name} ({s.createdBy?.role})</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 