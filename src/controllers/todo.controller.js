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
    
})

//Update Todo Controller
const updateTodoController = asyncHandler(async(req, res, next) => {
    
})
//
const getSingleTodoTask = asyncHandler(async (req, res, next) => {
    
})
export {
    createTodo,
    getAllTodoTask,
    updateTodoController,
    getSingleTodoTask
    
}