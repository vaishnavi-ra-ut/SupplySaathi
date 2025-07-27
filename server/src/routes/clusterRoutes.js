import express from 'express';
import {
    createCluster,
    getAllClusters,
    getNearbyClusters,
    joinCluster
} from '../controllers/clusterController.js';
import { authenticateUser } from '../middleware/authMiddleware.js'; // If using auth

const router = express.Router();

router.post('/', authenticateUser, createCluster);
router.get('/', getAllClusters);
router.get('/nearby', getNearbyClusters);
router.post('/:id/join', authenticateUser, joinCluster);

export default router;
