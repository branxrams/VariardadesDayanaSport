var express = require("express");
const mainController = require("../controllers/mainController");
var router = express.Router();

/* Rutas */

router.get("/", mainController.index);
router.get("/login", mainController.login);
router.get("/opcprincipales", mainController.opcPrincipales);

module.exports = router;
