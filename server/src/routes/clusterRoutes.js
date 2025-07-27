const express = require("express");
const {
  createCluster,
  getAllClusters,
  getNearbyClusters,
  joinCluster,
} = require("../controllers/clusterController");
const authenticateUser = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/create", authenticateUser, createCluster);
router.get("/", getAllClusters);
router.get("/nearby", getNearbyClusters);
router.post("/:id/join", authenticateUser, joinCluster);

module.exports = router;
