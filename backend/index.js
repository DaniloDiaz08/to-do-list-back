const express = require("express");
const mongoose = require("mongoose");

const PORT = 3030;
const app = express();

const todoRoutes = require("./routes/todoRoutes");

mongoose.connect("mongodb://localhost:27017/To-Do-List-Project")
    .then(() => console.log("The Conection is OK"))
    .catch((err) => console.err(err));

app.use("/todos", todoRoutes);

app.listen(PORT, () => {
    console.log("The server is listening in port "+ PORT);
});