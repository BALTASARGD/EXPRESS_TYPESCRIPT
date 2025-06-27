       import express from "express";
import { getAllTodos, getTodoById, createTodo, updateTodo, deleteTodo, } from "../controllers/todoController.js";
import { asyncHandler } from "../utils/asyncHandler.js";
const router = express.Router();
// GET /api/todos - Get all todos
router.get("/", asyncHandler(getAllTodos));
// GET /api/todos/:id - Get single todo
router.get("/:id", asyncHandler(getTodoById));
// POST /api/todos - Create new todo
router.post("/", asyncHandler(createTodo));
// PUT /api/todos/:id - Update todo
router.put("/:id", asyncHandler(updateTodo));
// DELETE /api/todos/:id - Delete todo
router.delete("/:id", asyncHandler(deleteTodo));
export default router;
