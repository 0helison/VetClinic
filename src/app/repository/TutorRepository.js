const Tutor = require('../model/TutorModel');
const Pet = require('../model/PetModel');

class TutorRepository {
    static async createTutor(tutorData) {
        return await Tutor.create(tutorData);
    }

    static async getAllTutors() {
        return await Tutor.findAll({ 
            include: [{ model: Pet, as: 'pets' }],
            limit: 10,
        });
    }

    static async updateTutor(tutorId, tutorData) {
        await Tutor.update(tutorData, { where: { id: tutorId } });
    }

    static async removeTutor(tutorId) {
        return await Tutor.findByPk(tutorId, { include: [{ model: Pet, as: 'pets' }] })
        .then(tutor => Promise.all(tutor.pets.map(pet => pet.destroy())).then(() => tutor.destroy()));
    }

    static async getByTutorId(tutorId) {
        const tutor = await Tutor.findByPk(tutorId);
        return tutor;
    }
}

module.exports = TutorRepository;
