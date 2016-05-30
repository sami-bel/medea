'use strict';

module.exports = function(app) {
  var film = require('../controllers/film.server.controller');

   app.route('/films')
      .get(film.list)
      .post(film.create);

   app.route('/remove/:id')
      .get(film.delete);
};
