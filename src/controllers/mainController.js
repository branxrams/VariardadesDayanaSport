const { validationResult } = require("express-validator");
const db = require("../models");
const { Op } = require("sequelize");
const hash = require("../helpers/hash");
const Empleados = db.Empleado;
const ERROR_MESSAGES = require("../helpers/errorMessages");

const mainController = {
  index: (req, res) => {
    res.render("index");
  },
  signinPage: (req, res) => {
    res.render("signin");
  },
  loginPage: (req, res) => {
    res.render("login");
  },
  signin: (req, res) => {
    let errors = validationResult(req);

    if (!errors.isEmpty()) {
      res.render("signin", {
        errors: errors.mapped(),
        oldData: req.body,
      });
    } else {
      hash
        .generateHashAsync(req.body.password)
        .then((hash) => {
          let data = {
            nombre: req.body.nombre,
            usuario: req.body.celular,
            contrasena: hash,
            rol: req.body.cargo,
          };
          Empleados.create(data)
            .then((status) => {
              res.render("login", { status: status });
            })
            .catch((error) => console.log(error));
        })
        .catch((error) => console.log(error));
    }
  },
  login: (req, res) => {
    let errors = validationResult(req);

    if (!errors.isEmpty()) {
      res.render("login", {
        errors: errors.mapped(),
        oldData: req.body.celular,
      });
    } else {
      const { celular, password } = req.body;
      Empleados.findAll({
        where: {
          usuario: { [Op.like]: celular },
        },
      })
        .then((user) => {
          if (user.length === 0) {
            return res.render("login", {
              errors: {
                badUser: {
                  msg: ERROR_MESSAGES.NOT_FOUND_USER,
                },
              },
            });
          } else {
            const data = user[0];
            hash
              .comparePasswordAsync(password, data.contrasena)
              .then((match) => {
                console.log(data.contrasena);
                if (!match) {
                  return res.render("login", {
                    errors: {
                      badPass: {
                        msg: ERROR_MESSAGES.BAD_PASSWORD,
                      },
                    },
                  });
                }
                req.session.loggedUSer = data.usuario;
                req.session.name = data.nombre;
                res.render("opcPrincipales", {
                  name: req.session.name,
                });
              })
              .catch((error) => {
                console.log(error);
              });
          }
        })
        .catch((error) => console.log(error));
    }
  },
  opcPrincipales: (req, res) => {
    if (req.session.loggedUSer != undefined) {
      res.render("opcPrincipales", {
        name: req.session.name,
      });
    } else {
      setTimeout(() => {
        res.render("login", {
          errors: {
            badLogin: {
              msg: ERROR_MESSAGES.BAD_LOGIN,
            },
          },
        });
      }, 5000);
    }
  },
  logout: (req, res) => {
    delete req.session.loggedUSer;
    console.log(req.session.loggedUSer);

    setTimeout(() => {
      res.redirect("/login");
    }, 2000);
  },
};

module.exports = mainController;
