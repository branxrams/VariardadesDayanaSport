var express = require('express');
const apiMainController = require('../../controllers/api/apiMainController');
var router = express.Router();


router.get('/api/colegios', apiMainController.colegios);
router.get('/api/servicios', apiMainController.servicios);
router.get('/api/pedidos', apiMainController.pedidos);
router.get('/api/bordados', apiMainController.bordados);
router.get('/api/productos', apiMainController.productos);


module.exports = router;