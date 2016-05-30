'use strict';

/**
 * Module dependencies.
 */
var path = require('path'),
  mongoose = require('mongoose'),
  errorHandler = require(path.resolve('./modules/core/server/controllers/errors.server.controller')),
  Film = mongoose.model('Film'),
  _ = require('lodash');

/**
 * Create a Film
 */
exports.create = function (req, res) {

    var film = new Film(req.body);
    film.save(function(err) {
        if (err) {
            return res.status(400).send({
                message: errorHandler.getErrorMessage(err)
            });
        } else {
            res.status(201).json(film);
        }
    })
};

/**
 * Show the current Film
 */
exports.read = function (req, res) {

};

/**
 * Update a Film
 */
exports.update = function (req, res) {

};

/**
 * Delete an Film
 */
exports.delete = function (req, res) {
    Film.findById(req.params.id).remove(function (err) {

        if (err) {
            return res.status(400).send({
                message: errorHandler.getErrorMessage(err)
            });
        } else {
            return res.send(200).json({"resultat": "this entity was removed "});
        }
    });

};


/**
 * List of Films
 */
exports.list = function (req, res) {

    Film.find().exec(function(err , films){

        if (err) {
            return res.status(400).send({
                message: errorHandler.getErrorMessage(err)
            });
        } else {
            res.json(films);
        }
        
    })

};
