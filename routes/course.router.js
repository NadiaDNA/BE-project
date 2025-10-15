const express = require('express');
const router = express.Router();

const { getAllCourse, getCourseById, createCourse, updateCourse, deleteCourse 
} = require('../controllers/course.controller');

router.get('/', getAllCourse)
router.get('/:id', getCourseById)
router.post('/', createCourse)
router.put('/:id', updateCourse)
router.delete('/:id', deleteCourse)

module.exports = router;