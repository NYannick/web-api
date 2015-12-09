var cookieParser = require('cookie-parser');
module.exports = function(app){
    require('./session')(app);
    app.use(require('cookie-parser')());

    app.middlewares =  {
        authenticated: require('./authenticated')
    };
};