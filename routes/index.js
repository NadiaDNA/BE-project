const express = require('express');
const router = express.Router();

const userRoutes = require('./user');
const courseRoutes = require('./course');
const enrollmentRoutes = require('./enrollment');

router.use("/users", userRoutes);
router.use("/courses", courseRoutes);
router.use("/enrollments", enrollmentRoutes);

module.exports = router;
