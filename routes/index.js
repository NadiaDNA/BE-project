const express = require('express');
const router = express.Router();

const userRoutes = require('./user.router');
const courseRoutes = require('./course.router');
const enrollmentRoutes = require('./enrollment.router');

router.use("/users", userRoutes);
router.use("/courses", courseRoutes);
router.use("/enrollments", enrollmentRoutes);

module.exports = router;
