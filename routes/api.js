const router = require("express").Router();
const Workout = require("../models/workout");

//get route of last workout
router.get("/api/workouts", (req, res) => {
    Workout.find()
    .limit(1)
    //sort by object, key/value pair; sort asc or desc
    .sort({ _id: -1 })
    .then((workout) => {
        res.json(workout);
    })
    .catch(err => {
      res.json(err);
    });
});

//post route for new workout
router.post("/api/workouts", (req, res) => {
  Workout.create(req.body)
    .then((newWorkout) => {
      res.json(newWorkout);
    })
    .catch(err => {
      res.json(err);
    });
});

//put route for new workout
router.put("/api/workouts/:id", (req, res) => {
  const id = req.params.id;
  Workout
    .findByIdAndUpdate({_id: id}, {$set: (req.body)})
    .then((updateWorkout) => {
      res.json(updateWorkout);
    })
    .catch(err => {
      //can send back 404 if user/id not found
      res.json(err);
    });
});

//get route for past workouts
router.get("/api/workouts/range", (req, res) => {
  Workout
    .find({})
    .limit(7)
    .sort({ _id: -1 })
    .then((workouts) => {
      res.json(workouts);
    })
    .catch(err => {
      res.json(err);
    })
})

module.exports = router;