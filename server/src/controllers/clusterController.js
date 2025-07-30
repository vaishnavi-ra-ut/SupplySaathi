const Cluster = require('../models/Cluster');
const User = require('../models/User');

exports.createCluster = async (req, res) => {
  try {
    if (req.user.role !== 'vendor') return res.status(403).json({ message: 'Only vendors can create clusters' });
    const { name, city, area } = req.body;
    if (!name || !city || !area) return res.status(400).json({ message: 'All fields required' });
    const cluster = await Cluster.create({ name, city, area, createdBy: req.user.id, members: [req.user.id] });
    res.status(201).json(cluster);
  } catch (err) {
    res.status(500).json({ message: 'Failed to create cluster' });
  }
};

exports.getClusters = async (req, res) => {
  try {
    const clusters = await Cluster.find().populate('createdBy', 'name role').populate('members', 'name role');
    res.json(clusters);
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch clusters' });
  }
};

exports.joinCluster = async (req, res) => {
  try {
    if (req.user.role !== 'vendor') return res.status(403).json({ message: 'Only vendors can join clusters' });
    const cluster = await Cluster.findById(req.params.id);
    if (!cluster) return res.status(404).json({ message: 'Cluster not found' });
    if (cluster.members.includes(req.user.id)) return res.status(400).json({ message: 'Already joined' });
    cluster.members.push(req.user.id);
    await cluster.save();
    res.json(cluster);
  } catch (err) {
    res.status(500).json({ message: 'Failed to join cluster' });
  }
}; 