const router = require("express").Router();
const Todo = require("../models/Todo");

router.get("/", (req, res) => {
    Todo.find((err, result) => {
        if(err) throw new Error(err);
        console.log(result);
    })
    //console.log("You are in the index page");
});

module.exports = router;