const Cluster = require("../models/Cluster");

const createCluster = async (req, res) => {
  try {
    const {
      name,
      city,
      area,
      meetingDay,
      meetingTime,
      coordinates,
    } = req.body;

    if (
      !name || !city || !area || !meetingDay || !meetingTime ||
      !coordinates?.type || !Array.isArray(coordinates?.coordinates)
    ) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    const newCluster = new Cluster({
      name,
      city,
      area,
      meetingDay,
      meetingTime,
      coordinates,
    });

    const saved = await newCluster.save();
    res.status(201).json({ message: "Cluster created", cluster: saved });
  } catch (err) {
    console.error("Error creating cluster:", err);
    res.status(500).json({ error: "Internal server error" });
  }
};

const getAllClusters = async (req, res) => {
  try {
    const clusters = await Cluster.find().sort({ createdAt: -1 });
    res.json(clusters);
  } catch (err) {
    res.status(500).json({ message: "Error fetching clusters" });
  }
};

const getNearbyClusters = async (req, res) => {
  const { lat, lng } = req.query;

  if (!lat || !lng)
    return res.status(400).json({ message: "Missing coordinates" });

  try {
    const clusters = await Cluster.find({
      coordinates: {
        $near: {
          $geometry: {
            type: "Point",
            coordinates: [parseFloat(lng), parseFloat(lat)],
          },
          $maxDistance: 5000,
        },
      },
    });

    res.json(clusters);
  } catch (err) {
    res.status(500).json({ message: "Error fetching nearby clusters" });
  }
};

const joinCluster = async (req, res) => {
  const clusterId = req.params.id;

  try {
    const cluster = await Cluster.findById(clusterId);
    if (!cluster)
      return res.status(404).json({ message: "Cluster not found" });

    if (cluster.joinedUsers.includes(req.user._id)) {
      return res.status(400).json({ message: "You already joined this cluster" });
    }

    cluster.joinedUsers.push(req.user._id);
    cluster.vendorsGoing += 1;

    await cluster.save();
    res.json({ message: "Joined cluster successfully", cluster });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to join cluster" });
  }
};

module.exports = {
  createCluster,
  getAllClusters,
  getNearbyClusters,
  joinCluster,
};
