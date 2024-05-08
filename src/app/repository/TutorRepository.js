const Tutor = require('../model/TutorModel')

class TutorRepository {
    static async createTutor(tutorData) {
        return await Tutor.create(tutorData);
    }
  
    
}

module.exports = TutorRepository;

