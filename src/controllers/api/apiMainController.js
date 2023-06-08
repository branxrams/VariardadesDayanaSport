const db = require('../../models');
const Colegios = db.Colegio;
const Productos = db.Producto;
const Servicios = db.Servicio;
const Bordados = db.Bordado;
const Pedidos = db.Pedido;

const apiMainController = {
    colegios: (req, res) => {
        Colegios.findAll()
            .then(listaColegios => {
                res.status(200).json({
                   meta:{
                    status: 200,
                    total: listaColegios.length,
                    url: 'api/colegios'
                   },
                   data: listaColegios
                });
            })
            .catch(error => res.json(error))
    },
    servicios: (req, res) => {
        Servicios.findAll()
         .then(listaServicios => {
            res.status(200).json({
                meta: {
                    status: 200,
                    total: listaServicios.length,
                    url: 'api/servicios'
                },
                data: listaServicios
            })
         })
         .catch(error => res.json(error));
    },
    bordados: (req, res) => {
        Bordados.findAll()
            .then(listaBordados => {
                res.status(200).json({
                    meta: {
                        status: 200,
                        total: listaBordados.length,
                        url: 'api/bordados'
                    },
                    data: listaBordados
                })
            })
            .catch(error => res.json(error));
    },
    pedidos: (req, res) => {
        Pedidos.findAll()
            .then( listaPedidos => {
                res.status(200).json({
                    meta: {
                        status: 200,
                        total: listaPedidos.length,
                        url: 'api/pedidos'
                    },
                    data: listaPedidos
                })
            })
            .catch(error => res.json(error))
    },
    productos: (req, res) => {
        Productos.findAll()
            .then( listaProductos => {
                res.status(200).json({
                    meta: {
                        status: 200,
                        total: listaProductos.length,
                        url: 'api/productos'
                    },
                    data: listaProductos
                })
            })
            .catch(error => res.json(error))
    }
}

module.exports = apiMainController;