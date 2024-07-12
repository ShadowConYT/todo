const express = require("express");
const router = express.Router();

const {
    getAllTodo,
    addTodo,
    updateTodo,
    deleteTodo
} = require("../controllers/todo")

// get all from the database
router.get("/", getAllTodo);


// post a TODO in Database
router.post("/", addTodo);


// update a TODO in Database
router.put("/:id", updateTodo);


// delete a TODO in Database
router.delete("/:id", deleteTodo);



module.exports = router;