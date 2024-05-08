const PetRepository = require('../repository/PetRepository');

module.exports = class PetService {
    static async createPet(petData) {
        try {
            await PetRepository.createPet(petData);
        } catch (error) {
            throw new Error(error.message)
        } 
    }

    static async updatePet(petId, petData) {
        try {
            await PetRepository.updatePet(petId, petData); 
        } catch (error) {
            throw new Error(error.message);
        }
    }
}; 