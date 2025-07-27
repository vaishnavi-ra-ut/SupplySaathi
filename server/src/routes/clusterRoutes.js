const express = require('express');
const router = express.Router();
const clusterController = require('../controllers/clusterController');
const authMiddleware = require('../middleware/authMiddleware');

router.post('/create', authMiddleware, clusterController.createCluster);
router.get('/', clusterController.getClusters);
router.post('/:id/join', authMiddleware, clusterController.joinCluster);

module.exports = router; 