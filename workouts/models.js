'use strict';

const mongoose = require('mongoose');
const {Exercise} = require('../exercises/models');

mongoose.Promise = global.Promise;

const WorkoutSchema = mongoose.Schema({
    date: {type: Date, required: true},
    name: {type: String, required: true},
    exercises: [Exercise]
});

WorkoutSchema.methods.serialize = function() {
  return {
    date: this.date || '',
    name: this.name || ''
  };
};

const Workout = mongoose.model('Workout', WorkoutSchema);

module.exports = {Workout};
