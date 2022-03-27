exports.middleware = (req, res, next) => {
    console.log('a');

    if (req.body.cliente) {
        console.log(`vi que vc postou ${req.body.cliente}`);
    }
    console.log('passei no middleware global');
    console.log('c');
    next();
}

exports.outroMiddleware = (req, res, next) => {
    console.log('Outro Middleware')
    next();
}