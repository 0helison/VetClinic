const express = require('express');
const router = express.Router();
const PetController = require('../app/controller/PetController');

router.post('/pet/:tutorId', PetController.createPet);

module.exports = router; 