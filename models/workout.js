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

WorkoutSchema.virtual("totalDuration").get(function() {
  return this.exercises.reduce(
    (accumulator, exercise) => accumulator + exercise.duration,
    0
  );
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;
