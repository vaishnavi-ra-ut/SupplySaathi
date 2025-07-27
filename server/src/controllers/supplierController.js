const Supplier = require('../models/Supplier');

exports.createSupplier = async (req, res) => {
  try {
    if (req.user.role !== 'supplier') return res.status(403).json({ message: 'Only suppliers can add suppliers' });
    const { name, category, location } = req.body;
    if (!name || !category || !location) return res.status(400).json({ message: 'All fields required' });
    const supplier = await Supplier.create({ name, category, location, createdBy: req.user.id });
    res.status(201).json(supplier);
  } catch (err) {
    res.status(500).json({ message: 'Failed to add supplier' });
  }
};

exports.getSuppliers = async (req, res) => {
  try {
    const suppliers = await Supplier.find().populate('createdBy', 'name role');
    res.json(suppliers);
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch suppliers' });
  }
}; 