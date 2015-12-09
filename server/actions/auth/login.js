module.exports = function(app){
    return function(req, res, next){
        app.models.User.findOne({
            username: req.body
        })
    }
}

