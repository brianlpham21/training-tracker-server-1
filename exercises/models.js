'use strict';

const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

const ExerciseSchema = mongoose.Schema({
    name: {type: String, required: true},
    set: {type: Number, required: true},
    weight: {type: Number, required: true},
    repetitions: {type: Number, required: true}
});

ExerciseSchema.methods.serialize = function() {
  return {
    name: this.name || '',
    set: this.set || '',
    weight: this.weight || '',
    repetitions: this.repetitions || ''
  };
};

const Exercise = mongoose.model('Exercise', ExerciseSchema);

module.exports = {Exercise};
