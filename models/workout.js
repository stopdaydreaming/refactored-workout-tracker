const mongoose = require("mongoose");

const Schema = mongoose.Schema;

//use virtuals in this file
const WorkoutSchema = new Schema(
  {
    day: {
      type: Date,
      default: Date.now
    },
    exercises: [
      {
        type: {
          type: String
        },
        name: {
          type: String
        },
        duration: {
          type: Number
        },
        weight: {
          type: Number
        },
        reps: {
          type: Number
        },
        sets: {
          type: Number
        },
        distance: {
          type: Number
        }
      }
    ]
  },
  {
    toJSON: {
      virtuals: true
    }
  }
);

//get the workout duration, without adding a new column to get total workout
//makes use of db optimization
WorkoutSchema.virtual("totalDuration").get(function() {
  return this.exercises.reduce(
    (accumulator, exercise) => accumulator + exercise.duration,
    0
    //need 0 as part of the built-in reduce function, start at 0
  );
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;
