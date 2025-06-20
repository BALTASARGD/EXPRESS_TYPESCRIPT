import { Todo } from "../models/Todo.js";
// Get all todos
export const getAllTodos = async (req, res, next) => {
    try {
        const todos = await Todo.find().sort({ createdAt: -1 });
        res.json(todos);
    }
    catch (error) {
        next(error); // Pass error to Express error handler
    }
};
// Get single todo
export const getTodoById = async (req, res, next) => {
    try {
        const todo = await Todo.findById(req.params.id);
        if (!todo) {
            return res.status(404).json({ error: "Todo not found" });
        }
        res.json(todo);
    }
    catch (error) {
        next(error);
    }
};
// Create new todo
export const createTodo = async (req, res, next) => {
    try {
        const { title, description } = req.body;
        if (!title) {
            return res.status(400).json({ error: "Title is required" });
        }
        const todo = new Todo({ title, description });
        const savedTodo = await todo.save();
        res.status(201).json(savedTodo);
    }
    catch (error) {
        next(error);
    }
};
// Update todo
export const updateTodo = async (req, res, next) => {
    try {
        const { title, description, completed } = req.body;
        const todo = await Todo.findByIdAndUpdate(req.params.id, { title, description, completed }, { new: true, runValidators: true });
        if (!todo) {
            return res.status(404).json({ error: "Todo not found" });
        }
        res.json(todo);
    }
    catch (error) {
        next(error);
    }
};
// Delete todo
export const deleteTodo = async (req, res, next) => {
    try {
        const todo = await Todo.findByIdAndDelete(req.params.id);
        if (!todo) {
            return res.status(404).json({ error: "Todo not found" });
        }
        res.json({ message: "Todo deleted successfully" });
    }
    catch (error) {
        next(error);
    }
};
