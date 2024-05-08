
const express = require('express');
const router = express.Router();
const TutorController = require('../app/controller/TutorController');


router.post('/tutor', TutorController.createTutor);


module.exports = router;

