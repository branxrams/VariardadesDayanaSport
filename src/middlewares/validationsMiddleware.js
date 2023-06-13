const { check } = require("express-validator");


const validations = {
    validationsLogin: [
        check('celular')
            .notEmpty().withMessage('Debes llenar este campo').bail()
            .isNumeric().withMessage('Formato de usuario debe ser numerico'),
        check('password')
            .notEmpty().withMessage('Debes llenar este campo')
    ],
    validationsSignin: [
        check('nombre')
            .notEmpty().withMessage('Debes llenar este campo').bail()
            .matches(/^[A-Za-z\s]+$/).withMessage('Formato de nombre no valido'),
        check('celular')
            .notEmpty().withMessage('Debes llenar este campo').bail()
            .isNumeric().withMessage('Este campo debe ser numerico'),
        check('password')
            .notEmpty().withMessage('Debes llenar este campo').bail()
            .isLength({min: 6}).withMessage('Debe contener al menos 6 caracteres')
    ]
}

module.exports = validations;