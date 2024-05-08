const express = require('express');
const router = express.Router();
const TutorController = require('../app/controller/TutorController');


router.post('/tutor', TutorController.createTutor);
router.get('/tutors', TutorController.getAllTutors);
router.put('/tutor/:id', TutorController.updateTutor)
router.delete('/tutor/:id', TutorController.removeTutor)


module.exports = router;

