import Cluster from '../models/Cluster.js';

// POST /api/clusters
export const createCluster = async (req, res) => {
    try {
        const { name, marketLocation, meetingTime, icon, description, coordinates } = req.body;

        if (!name || !marketLocation || !meetingTime || !coordinates)
            return res.status(400).json({ message: 'Required fields missing' });

        const newCluster = new Cluster({
            name,
            marketLocation,
            meetingTime,
            icon,
            description,
            createdBy: req.user._id, // from auth middleware
            location: {
                type: 'Point',
                coordinates: [coordinates.lng, coordinates.lat],
            }
        });

        const saved = await newCluster.save();
        res.status(201).json(saved);

    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Failed to create cluster' });
    }
};

// GET /api/clusters
export const getAllClusters = async (req, res) => {
    try {
        const clusters = await Cluster.find().sort({ createdAt: -1 });
        res.json(clusters);
    } catch (err) {
        res.status(500).json({ message: 'Error fetching clusters' });
    }
};

// GET /api/clusters/nearby?lat=xx&lng=yy
export const getNearbyClusters = async (req, res) => {
    const { lat, lng } = req.query;

    if (!lat || !lng)
        return res.status(400).json({ message: 'Missing coordinates' });

    try {
        const clusters = await Cluster.find({
            location: {
                $near: {
                    $geometry: {
                        type: 'Point',
                        coordinates: [parseFloat(lng), parseFloat(lat)],
                    },
                    $maxDistance: 5000, // 5 km
                }
            }
        });

        res.json(clusters);
    } catch (err) {
        res.status(500).json({ message: 'Error fetching nearby clusters' });
    }
};

// POST /api/clusters/:id/join
export const joinCluster = async (req, res) => {
    const clusterId = req.params.id;

    try {
        const cluster = await Cluster.findById(clusterId);
        if (!cluster) return res.status(404).json({ message: 'Cluster not found' });

        // Prevent duplicate join
        if (cluster.joinedUsers.includes(req.user._id)) {
            return res.status(400).json({ message: 'You already joined this cluster' });
        }

        cluster.joinedUsers.push(req.user._id);
        cluster.vendorsGoing += 1;

        await cluster.save();
        res.json({ message: 'Joined cluster successfully', cluster });

    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Failed to join cluster' });
    }
};
