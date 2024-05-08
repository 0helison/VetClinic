const PetRepository = require('../repository/PetRepository');

module.exports = class PetService {
    static async createPet(petData) {
        try {
            await PetRepository.createPet(petData);
        } catch (error) {
            throw new Error(error.message)
        } 
    }
};