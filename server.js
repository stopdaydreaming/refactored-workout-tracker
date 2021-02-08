const express = require("express");
const mongoose = require("mongoose");
// const Workout = require("./models/Workout");

const PORT = process.env.PORT || 3000;

const app = express();

const apiController = require("./routes/api");
const viewsController = require("./routes/views");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI ||  "mongodb://localhost/workout", { 
    useNewURLParser: true,
    useFindAndModify: false
});

//routes
app.use(require(apiController));
app.use(require(viewsController));

app.listen(PORT, () => {
    console.log(`App running on port http://localhost:${PORT}`);
})
