var express = require("express");
const mainController = require("../controllers/mainController");
const validations = require('../middlewares/validationsMiddleware');
var router = express.Router();

/* Rutas */

router.get("/", mainController.index);
router.get("/signin", mainController.signinPage);
router.post("/signin", validations.validationsSignin, mainController.signin);
router.get("/login", mainController.loginPage);
router.post("/login", validations.validationsLogin, mainController.login);
router.get("/opcprincipales", mainController.opcPrincipales);

module.exports = router;
