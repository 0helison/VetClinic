const TutorService = require('../service/TutorService');

module.exports = class TutorController {
    static async createTutor(req, res) {
        try {
            const tutorData = req.body;
            await TutorService.createTutor(tutorData);
            res.status(201).json({ message: 'Tutor created successfully' });
        } catch (error) {
            console.error('Error creating tutor:', error);
            res.status(500).json({ error: 'An error occurred while creating the tutor' });
        } 
    }

    static async getAllTutors(req, res) {
        try {
            const tutors = await TutorService.getAllTutors();
            res.status(200).json(tutors)
        } catch (error) {
            console.error("Failed to get tutors: ", error);
            res.status(500).json({ error: "An error occurred while getting the tutors"})
        }
    }
    
};
