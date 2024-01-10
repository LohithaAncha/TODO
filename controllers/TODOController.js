const ToDo = require('../models/TodoModel')
const asyncHandler = require('express-async-handler');



const getTodo = asyncHandler(async (req, res) => {
    try {
        const todo = await ToDo.find({});
        res.status(200).json(todo);
    } catch (error) {
        res.status(500)
        throw new Error(error.message)
    };
});
const saveTodo = asyncHandler(async (req, res) => {
    try {
        const { text } = req.body
        const data = await ToDo.create(req.body)
        res.status(200).json(data)      
    } catch (error) {
        res.status(500)
        throw new Error(error.message);
    };
});
const updateTodo = asyncHandler(async(req, res) => {
    try {
        const { id } = req.params
        const task=await ToDo.findByIdAndUpdate(id, req.body)
        const updated = await ToDo.findById(id);
        if (!task) {
            res.status(404);
            throw new error("Task not found");
        }
        res.status(200).json(updated);

    } catch (error) {
        res.status(500);
        throw new Error(error.message);
    }
});
const deleteTodo = async (req, res) => {
    const { _id } = req.body
    ToDo
        .findByIdAndDelete(_id)
        .then(() => res.send("Deleted successfully"))
        .catch((err)=>console.log(err))
};






module.exports = {
    getTodo,
    saveTodo,
    updateTodo,
    deleteTodo
};