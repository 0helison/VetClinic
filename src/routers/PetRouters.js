const express = require('express');
const router = express.Router();
const PetController = require('../app/controller/PetController');

router.post('/pet/:tutorId', PetController.createPet);
router.put('/pet/:petId/tutor/:tutorId', PetController.updatePet)
router.delete('/pet/:petId/tutor/:tutorId', PetController.removePet)

module.exports = router;  