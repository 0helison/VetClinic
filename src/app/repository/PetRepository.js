const Pet = require('../model/PetModel')

class PetRepository {
    static async createPet(petData) {
        return await Pet.create(petData);
    }

    static async updatePet(petId, petData) {
        return await Pet.update(petData, { where: { id: petId } })
    }
}

module.exports = PetRepository;

 