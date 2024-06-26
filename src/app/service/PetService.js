const PetRepository = require('../repository/PetRepository');
const TutorService = require('./TutorService');

module.exports = class PetService {
    static async createPet(petData, tutorId) {
        try {
            const tutor = await TutorService.getByTutorId(tutorId);
            
            if (!tutor) {
                throw new Error('Tutor not found');
            }

            await PetRepository.createPet(petData);
        } catch (error) {
            throw new Error(error.message);
        } 
    }

    static async updatePet(petId, petData, tutorId) {
        try {
            const pet = await PetService.getByPetId(petId);

            if (!pet) {
                throw new Error('Pet not found');
            }

            const tutor = await TutorService.getByTutorId(tutorId);
            
            if (!tutor) {
                throw new Error('Tutor not found');
            }

            await PetRepository.updatePet(petId, petData);
        } catch (error) {
            throw new Error(error.message);
        }
    }

    static async removePet(petId) {
        try {
            const pet = await PetService.getByPetId(petId);

            if (!pet) {
                throw new Error('Pet not found');
            }

            await PetRepository.removePet(petId);
        } catch (error) {
            throw new Error(error.message);
        }  
    }

    static async getByPetId(petId) {
        try {
            return await PetRepository.getByPetId(petId);
        } catch (error) {
            throw new Error(error.message);
        }
    }
};  
