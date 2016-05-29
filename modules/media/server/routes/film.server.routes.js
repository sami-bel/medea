'use strict';

module.exports = function(app) {
  var film = require('../controllers/film.server.controller');

  app.route('/films')
     .get(film.list);
};
