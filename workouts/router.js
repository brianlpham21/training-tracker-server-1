'use strict';
const express = require('express');
const bodyParser = require('body-parser');

const { Workout } = require('./models');

const router = express.Router();

const jsonParser = bodyParser.json();

router.get('/users/:id/workouts', (req, res) => {
  return Workout.find()
    .then(workouts => res.json(workouts.map(workout => workout.serialize())))
    .catch(err => res.status(500).json({message: 'Internal server error'}));
});
