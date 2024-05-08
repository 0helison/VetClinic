const TutorRepository = require('../repository/TutorRepository');

module.exports = class TutorService {
    static async createTutor(tutorData) {
        try {
            await TutorRepository.createTutor(tutorData);
        } catch (error) {
            throw new Error(error.message)
        }
    }

    static async getAllTutors() {
        try {
            return await TutorRepository.getAllTutors({ includePets: true });
        } catch (error) {
            throw new Error(error.message)
        }
    }

    static async updateTutor(tutorId, tutorData) {
        try {
            await TutorRepository.updateTutor(tutorId, tutorData); 
        } catch (error) {
            throw new Error(error.message);
        }
    }
    
    static async removeTutor(tutorId) {
        try {
            await TutorRepository.removeTutor(tutorId)
        } catch (error) {
            throw new Error(error.message);
        }
        
    }
   
};