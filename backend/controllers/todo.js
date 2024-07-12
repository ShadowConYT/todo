const Todo = require('../models/todo');

exports.getAllTodo = (req, res) => {
    Todo.find()
    .then((todo) => res.json(todo))
    .catch((err) =>
        res
        .status(404)
        .json({message: "No Todos Found", error: err.message})
    );
};

exports.addTodo = (req, res) => {
    Todo.create(req.body)
    .then((data) => res.json({message: `Todo has been Added to the Database Successfully!`, data}))
    .catch((err) =>
        res
        .status(400)
        .json({message: "Failed to Add Todo", error: err.message})
    );
};

exports.updateTodo = (req, res) => {
    const ID = req.params.id
    Todo.findByIdAndUpdate(ID, req.body)
    .then((todo) => res.json({message: `The TODO with id ${ID} has been Updated`, todo}))
    .catch((err) =>
        res
        .status(400)
        .json({message: "Failed to Update the Todo", error: err.message})
    )
}

exports.deleteTodo = (req, res) => {
    Todo.findByIdAndDelete(req.params.id, req.body)
    .then((todo) => res.json({message: `The Todo has been Deleted`, todo}))
    .catch((err) =>
        res
        .status(404)
        .json({message: "The Task ID is Either Invalid or Does not Exist", error: err.message})
    )
}