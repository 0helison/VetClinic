const PetService = require('../service/PetService');

module.exports = class PetController {

    static async createPet(req, res) { 
        try {
            const petData = req.body;
            const tutorId = req.params.tutorId;
            petData.tutor_id = tutorId;

            await PetService.createPet(petData);
            res.status(201).json({ message: 'Pet created successfully' });
            
        } catch (error) {
            console.error('Error creating pet:', error);
            res.status(500).json({ error: 'An error occurred while creating the pet' });
        } 
    };

    static async updatePet(req, res) {
        try {
            const petData = req.body;
            const petId = req.params.petId;
            const tutorId = req.params.tutorId;
            petData.tutor_id = tutorId;

            await PetService.updatePet(petId, petData, tutorId); 
            res.status(200).json({ message: "Pet updated successfully" }); 
        } catch (error) {
            if (error.message === 'Pet not found') {
                res.status(404).json({ error: "Pet not found" });
            } else {
                console.error("Failed to remove tutor: ", error);
                res.status(500).json({ error: "An error occurred while removing the pet" });
            }
        }
    }; 
    
    static async removePet(req, res) {
        try {
            const petId = req.params.petId;
            const tutorId = req.params.tutorId;

            await PetService.removePet(petId, tutorId);
            res.status(200).json({ message: "Pet removed successfully" });
        } catch (error) {
            if (error.message === 'Pet not found') {
                res.status(404).json({ error: "Pet not found" });
            } else {
                console.error("Failed to remove tutor: ", error);
                res.status(500).json({ error: "An error occurred while removing the pet" });
            }
        }
    };
};
