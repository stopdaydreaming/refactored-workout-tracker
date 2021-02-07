const router = require("express").Router();
const Workout = require("../models/Workout.js");

router.get("/api/workouts", (req, res) => {
    Workout.find().then((workout) => {
        res.json(workout);
    })
});

router.post("/api/workouts", ({ body }, res) => {
  Workout.create(req.body)
    .then(workout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.put("/api/workouts/:id", (req, res) => {
  const id = req.params.id;
  Workout
    .findByIdAndUpdate({_id: id}, {$set: (req.body)})
    .then((workout) => {
      res.json(workout);
    })
})
module.exports = router;