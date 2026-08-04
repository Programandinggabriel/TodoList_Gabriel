function errorNotFound(req, res, next){
    if(!req.route){
        return new next(Error('404'));
    }
    next()
}

module.exports = errorNotFound;