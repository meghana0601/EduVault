const express = require('express');
const router = express.Router();
const studentController = require('../controllers/studentController.cjs');

router.post('/', studentController.createStudent);

// Get all students
router.get('/', studentController.getAllStudents);

// Get a single student by ID
router.get('/:id', studentController.getStudentById);

// Update a student by ID
router.put('/:id', studentController.updateStudentById);

// Delete a student by ID
router.delete('/:id', studentController.deleteStudentById);

module.exports = router;
