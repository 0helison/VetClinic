const { body } = require('express-validator');

const petCreateValidation = () => {
    return [
        body('name')
            .isString().withMessage('The name is mandatory.')
            .isLength({ min: 2 }).withMessage('The name must have at least 2 characters.')
            .isLength({ max: 30 }).withMessage('The name must have a maximum of 30 characters.'),

        body('species')
            .isString().withMessage('The species is mandatory.')
            .isLength({ min: 2 }).withMessage('The species must have at least 2 characters.')
            .isLength({ max: 20 }).withMessage('The species must have a maximum of 30 characters.'),

        body("carry")
            .isString().withMessage('The carry is mandatory.')
            .isLength({ min: 1 }).withMessage('The carry must have at least 2 characters.')
            .isLength({ max: 1 }).withMessage('The carry must have a maximum of 1 character.'),

        body("weight")
            .isNumeric().withMessage('The weight needs to be a number.')
            .custom((value) => {
                if (value < 0) {
                    throw new Error('Invalid value, there is no negative weight!');
                } 
                return true;
            }),

        body("date_of_birth")
            .isString().withMessage('The date of birth is mandatory.')
            .matches(/^\d{4}-\d{2}-\d{2} \d{2}:\d{2}$/).withMessage('The date of birth must be in the format "YYYY-MM-DD HH:mm"')
    ];
};

module.exports = petCreateValidation;
