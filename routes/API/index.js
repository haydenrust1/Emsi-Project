const router = require('express').Router();
const jobRoutes = require('./jobData');

// Job Data Route: "/api/jobs"
router.use("/jobs", jobRoutes);

module.exports = router;