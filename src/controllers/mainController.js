const { validationResult } = require("express-validator");
const db = require("../models");
const { Op } = require("sequelize");
const hash = require('../helpers/hash');
const Empleados = db.Empleado;

const mainController = {
  index: (req, res) => {
    res.render('index', {title: 'Inicio'});
  },
  signinPage: (req, res)=> {
    res.render('signin', {title: 'Registro'})
  },
  loginPage: (req, res) => {
    res.render('login', {title: 'Iniciar Sesión'})
  },
  signin: (req, res) => { 
    let errors = validationResult(req);

    if (!errors.isEmpty()) {
      res.render('signin', {title: 'Registro', errors: errors.mapped(), oldData: req.body});
    }else{
      hash.generateHashAsync(req.body.password)
        .then(hash => {
          let data = {
            nombre: req.body.nombre,
            usuario: req.body.celular,
            contrasena: hash,
            rol: req.body.cargo,
          };
          Empleados.create(data)
            .then(status => {
              res.render('login', {title: 'Iniciar Sesión', status: status});
            })
            .catch(error => console.log(error));
        })
        .catch(error => console.log(error))
    }
  },
  login: (req, res) => {
    let errors =  validationResult(req);

    if (!errors.isEmpty()) {
      res.render('login', {title: "Iniciar Sesión", errors: errors.mapped(), oldData: req.body.celular});
    }else{
      const { celular, password} = req.body;
      Empleados.findAll({
        where: {
          usuario: {[Op.like]: celular }
        }
      })
      .then( user => {
        if (user.length === 0) {
          return res.render('login', {
            title: 'Iniciar Sesión',
            errors: {
              badUser:{
                msg: 'Usuario no econtrado'
              }
            }
          });
        }else{
          const data = user[0];
          hash.comparePasswordAsync(password, data.contrasena)
            .then(match => {
              console.log(data.contrasena);
              if(!match){
              return res.render('login', {
                  title: 'Iniciar Sesión',
                  errors: {
                    badPass:{
                      msg: 'Contraseña Invalida'
                    }
                  }
                });
              }
              res.send(data);
            })
            .catch(error => {
              console.log(error);
            })
        }
        
      })
      .catch(error => console.log(error));
    }
  },
  opcPrincipales: (req, res) => {
    res.render("opcPrincipales", { title: "Opciones Principales" });
  }
};

module.exports = mainController;
