const express = require('express');
const router = express.Router();

const { getAllEnrollment, getEnrollmentById, createEnrollment, updateEnrollment, deleteEnrollment 
} = require('../controllers/enrollment.controller');

router.get('/', getAllEnrollment)
router.get('/:id', getEnrollmentById)
router.post('/', createEnrollment)
router.put('/:id', updateEnrollment)
router.delete('/:id', deleteEnrollment)

module.exports = router;