'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

/**
 * Validation
 */
function validateLength (v) {
    return v.length <= 15;
}

/**
 * Film Schema
 */
var FilmSchema = new Schema({
    created: {
        type: Date,
        default: Date.now
    },
    actors:[{
        name:{
            type: String,
            default: '',
            required: 'name cannot be blank'
        },
        lastName: {
            type: String,
            default: '',
            required: 'lastName cannot be blank'
        },
        description: {
            type: String,
            default: '',
            required: 'description cannot be blank'
        },
        timeIn: {
            type: Date,
            default: Date.now,
            required: 'time in cannot be blank'
        },

        timeOut: {
            type: Date,
            default: Date.now,
            required: 'time out cannot be blank'
        }

    }],
    description: {
        type: String,
        default: '',
        trim: true
    },
    name: {
        type: String,
        default: '',
        trim: true,
        unique : true,
        // make this a required field
        required: 'name cannot be blank',
        // wires in a custom validator function (http://mongoosejs.com/docs/api.html#schematype_SchemaType-validate).
        validate: [validateLength, 'name must be 15 chars in length or less']
    }
});

mongoose.model('Film', FilmSchema);
