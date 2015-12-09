module.exports = function(app){
    app.actions = {};
    app.actions.todos = require('./todos')(app);
    app.actions.todos = require('./auth')(app);
    app.actions.todos = require('./users')(app);
};