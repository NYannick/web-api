module.exports = function(app){
    return function(req, res, next){
        var userId = req.session.userId;

        app.models.User.findOne({
            id: userId
        }, function(err, instance){
            if(err)
                return res.status(500).send(err);
        })
    }
}