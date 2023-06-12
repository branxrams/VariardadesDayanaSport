const db = require("../models");

const mainController = {
  index: (req, res) => {
    res.render("index", { title: "Express" });
  },
  login: (req, res) => {
    res.render("login", { title: "Iniciar Sesión" });
  },
  opcPrincipales: (req, res) => {
    res.render("opcPrincipales", { title: "Opciones Principales" });
  },
};

module.exports = mainController;
