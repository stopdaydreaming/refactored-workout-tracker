const express = require("express");
const mongoose = require("mongoose");
// const Workout = require("./models/Workout");

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI ||  "mongodb://localhost/workout", { 
    useNewURLParser: true,
    useFindAndModify: false
});

//routes
app.use(require("./routes/api"));
app.use(require("./routes/views"));

app.listen(PORT, () => {
    console.log(`App running on port http://localhost:${PORT}`);
})
