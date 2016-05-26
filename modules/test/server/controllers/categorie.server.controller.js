'use strict';

/**
 * Module dependencies.
 */
var path = require('path'),
  mongoose = require('mongoose'),
  errorHandler = require(path.resolve('./modules/core/server/controllers/errors.server.controller')),
  Category = mongoose.model('Category'),
  _ = require('lodash');

/**
 * Create a Categorie
 */
exports.create = function (req, res) {

       var category = new Category(req.body);

        category.save(function(err) {
            if (err) {
                return res.status(400).send({
                    message: errorHandler.getErrorMessage(err)
                });
            } else {
                res.status(201).json(category);
            }
        });

};

/**
 * Show the current Categorie
 */
exports.read = function (req, res) {

    

};

/**
 * Update a Categorie
 */
exports.update = function (req, res) {

};

/**
 * Delete an Categorie
 */
exports.delete = function (req, res) {

};

/**
 * List of Categories
 */
exports.list = function (req, res) {


};


