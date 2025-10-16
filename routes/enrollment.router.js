const express = require('express');
const router = express.Router();

const { getAllEnrollment, getEnrollmentById, createEnrollment, updateEnrollment, deleteEnrollment, clearEnrollments 
} = require('../controllers/enrollment.controller');

router.get('/', getAllEnrollment)
router.get('/:id', getEnrollmentById)
router.post('/', createEnrollment)
router.put('/:id', updateEnrollment)
router.delete('/:id', deleteEnrollment)
router.delete('/clear', clearEnrollments);

module.exports = router;