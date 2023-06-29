const express = require("express");
const mainController = require("../controllers/mainController");
const validations = require("../middlewares/validationsMiddleware");
const authMiddleware = require("../middlewares/authMiddleware");
const router = express.Router();

/* Rutas */

router.get("/", mainController.index);
router.get("/signin", mainController.signinPage);
router.post("/signin", validations.validationsSignin, mainController.signin);
router.get("/login", mainController.loginPage);
router.post("/login", validations.validationsLogin, mainController.login);
router.get("/opcprincipales", authMiddleware, mainController.opcPrincipales);
router.post("/logout", mainController.logout);
router.get("/ingresarPedido", mainController.ingresarPedido);

module.exports = router;
