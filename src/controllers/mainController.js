const db = require('../models');

const mainController = {
    index: (req, res) => {
        res.render('index', {title: 'Express'});
    }
}

module.exports = mainController;