const db = require("../models");

const mainController = {
  index: (req, res) => {
    res.render("index", { title: "Express" });
  },
  login: (req, res) => {
    res.render("login", { title: "Iniciar Sesión" });
  },
};

module.exports = mainController;
