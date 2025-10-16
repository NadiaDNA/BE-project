const express = require('express');
const router = express.Router();

const userRoutes = require('./user.router');
const authRoutes = require('./auth.router');
const courseRoutes = require('./course.router');
const enrollmentRoutes = require('./enrollment.router');
const { verifyToken } = require('../middleware/auth');

router.use("/users", userRoutes);
router.use("/auth", authRoutes);
router.use("/courses", verifyToken, courseRoutes);
router.use("/enrollments", verifyToken, enrollmentRoutes);

module.exports = router;
