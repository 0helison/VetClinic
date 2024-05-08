const Pet = require('../model/PetModel')

class PetRepository {
    static async createPet(petData) {
        return await Pet.create(petData);
    }
}

module.exports = PetRepository;

