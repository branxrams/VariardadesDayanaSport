function authMiddleware(req, res, next){
    if (req.session.loggedUSer != undefined) {
        next();
    } else {
        
        setTimeout(() => {
            res.render('login', {
                title: 'Iniciar Sesion',
                errors: {
                    badLogin: {
                        msg: 'Debes Iniciar sesion primero'
                    }
                }
            });
        }, 5000);
            
    }
}

module.exports = authMiddleware;