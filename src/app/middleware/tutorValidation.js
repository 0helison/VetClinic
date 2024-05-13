const { body } = require('express-validator');

const tutorCreateValidation = () => {
    return [
        body('name')
            .isString().withMessage('The name is mandatory.')
            .isLength({ min: 2 }).withMessage('The name must have at least 2 characters.')
            .isLength({ max: 30 }).withMessage('The name must have a maximum of 30 characters.'),

        body('phone')
            .isString().withMessage('The phone is mandatory.')
            .matches(/^[0-9]{11}$/).withMessage('The phone number must contain 11 digits, without spaces or special characters.'),

        body("email")
            .isString().withMessage('The email is mandatory.')
            .isEmail().withMessage('The email provided is not valid'),

        body("date_of_birth")
            .isString().withMessage('The date of birth is mandatory.')
            .matches(/^\d{4}-\d{2}-\d{2} \d{2}:\d{2}$/).withMessage('The date of birth must be in the format "YYYY-MM-DD HH:mm"'),

        body("zip_code")
            .isString().withMessage('The ZIP code is mandatory.')
            .matches(/^\d{8}$/).withMessage('The ZIP code must contain 8 digits, without spaces or special characters.')
    ];
};

module.exports = tutorCreateValidation;
