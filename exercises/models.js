'use strict';

const mongoose = require('mongoose');
const {Set} = require('../sets/models');

mongoose.Promise = global.Promise;

const ExerciseSchema = mongoose.Schema({
    name: {type: String, required: true},
    set: [Set]
});

ExerciseSchema.methods.serialize = function() {
  return {
    name: this.name || '',
    set: this.set || ''
  };
};

const Exercise = mongoose.model('Exercise', ExerciseSchema);

module.exports = {Exercise};
