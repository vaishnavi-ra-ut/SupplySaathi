const NewUserDetailsForm = ({
  fullName,
  setFullName,
  language,
  setLanguage,
  role,
  setRole,
}) => (
  <>
    <label className="block mb-1 text-sm text-gray-700">Full Name</label>
    <input
      type="text"
      className="w-full p-3 border border-orange-200 rounded-lg mb-3"
      placeholder="Your Name"
      value={fullName}
      onChange={(e) => setFullName(e.target.value)}
    />

    <label className="block mb-1 text-sm text-gray-700">
      Preferred Language
    </label>
    <select
      className="w-full p-3 border border-orange-200 rounded-lg mb-3"
      value={language}
      onChange={(e) => setLanguage(e.target.value)}
    >
      <option>Hindi</option>
      <option>English</option>
      <option>Marathi</option>
      <option>Tamil</option>
    </select>

    <label className="block mb-1 text-sm text-gray-700">Select Role</label>
    <select
      className="w-full p-3 border border-orange-200 rounded-lg mb-3"
      value={role}
      onChange={(e) => setRole(e.target.value)}
    >
      <option value="buyer">Buyer</option>
      <option value="supplier">Supplier</option>
    </select>
  </>
);

export default NewUserDetailsForm;
