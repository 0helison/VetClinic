const PetService = require('../service/PetService');

module.exports = class PetController {
    static async createPet(req, res) {
        try {
            const petData = req.body;
            const tutorId = req.params.tutorId 
            petData.tutor_id = tutorId
            await PetService.createPet(petData);
            res.status(201).json({ message: 'Pet created successfully' });
        } catch (error) {
            console.error('Error creating pet:', error);
            res.status(500).json({ error: 'An error occurred while creating the pet' });
        } 
    }
    
};
