const router = require("express").Router();
const eventRoutes = require("./events");

// // Book routes
router.use("/events", eventRoutes);

module.exports = router;