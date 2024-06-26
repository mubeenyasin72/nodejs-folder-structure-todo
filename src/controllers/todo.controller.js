import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import {TodoTask} from "../models/todo.model.js"
import mongoose from "mongoose";

//Create Todo Task
const createTodo = asyncHandler(async (req, res, next) => {
    const { taskName, isCompleted } = req.body;

    const todoTask = await TodoTask.create({
        taskName,
        isCompleted
    })
    return res
    .status(201)
    .json(new ApiResponse(200, todoTask, "Task Created Successfully"));
    
})
//Get All Todo Task
const getAllTodoTask = asyncHandler(async(req, res, next) => {
    const todoTask = await TodoTask.find()
    return res.status(201).json(new ApiResponse(200,todoTask,"Todo Task are loaded..."))
})

//Update Todo Controller
const updateTodoController = asyncHandler(async(req, res, next) => {
    
})
// Todo Get Single Todo Task Controller
const getSingleTodoTask = asyncHandler(async (req, res, next) => {
    const sinlgeTodo = await findById(req.params.id)
    return res.status(200).json(new ApiResponse(200,sinlgeTodo,"Your Single Todo  Task Is Loaded Sucessfully"))
})
//Delete Todo task
const deleteTodoTask = asyncHandler(async (req, res, next) => {
    const delTodo = await findByIdAndDelete(req.params.id)
    return res.status(200).json(new ApiResponse(200,delTodo,"Task Deleted Successfully..."))
})
export {
    createTodo,
    getAllTodoTask,
    updateTodoController,
    getSingleTodoTask,
    deleteTodoTask
}








/////////////////////////////////////////////////////////////////////////////