'use strict';

/**
 * Module dependencies.
 */
var path = require('path'),
  mongoose = require('mongoose'),
  errorHandler = require(path.resolve('./modules/core/server/controllers/errors.server.controller')),
  film = mongoose.model('Film'),
  _ = require('lodash');

/**
 * Create a Film
 */
exports.create = function (req, res) {

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

};

/**
 * List of Films
 */
exports.list = function (req, res) {

    film.find().exec(function(err , films){

        if (err) {
            return res.status(400).send({
                message: errorHandler.getErrorMessage(err)
            });
        } else {
            res.json(films);
        }
        
    })

};
