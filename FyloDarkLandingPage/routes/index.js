var express = require('express');
var router = express.Router();
const mainController = require('../controllers/mainController');
const {body} = require('express-validator');


const validacion = [
    body('email').notEmpty().withMessage("Debes ingresar un correo electrónico").bail()
        .isEmail().withMessage("El correo es inválido")
]
/* GET home page. */
router.get('/' ,mainController.index);

module.exports = router;
