'use strict';

const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

const SetSchema = mongoose.Schema({
    setNumber: {type: Number, required: true},
    weight: {type: Number, required: true},
    repetitions: {type: Number, required: true}
});

SetSchema.methods.serialize = function() {
  return {
    setNumber: this.set || '',
    weight: this.weight || '',
    repetitions: this.repetitions || ''
  };
};

const Set = mongoose.model('Set', SetSchema);

module.exports = {Set};
