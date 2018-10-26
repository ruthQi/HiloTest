'use strict';
var index = require('./pages/index');

module.exports = function(app) {
    app.use('/', index);

    app.get('/rich', function (req, res, next) {
      res.render('pages/rich.ejs')
    })

};