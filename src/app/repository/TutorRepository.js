const Tutor = require('../model/TutorModel')
const Pet = require('../model/PetModel')

class TutorRepository {
    static async createTutor(tutorData) {
        return await Tutor.create(tutorData);
    }

    static async getAllTutors() {
        return await Tutor.findAll({ 
            include: [{ model: Pet, as: 'pets'}],
            limit: 10,
        });
    }

    static async updateTutor(tutorId, tutorData) {
        return await Tutor.update(tutorData, { where: { id: tutorId } })
    }

}

module.exports = TutorRepository;

