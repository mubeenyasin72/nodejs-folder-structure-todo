import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import {TodoTask} from "../models/todo.model.js"
import mongoose from "mongoose";

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
const getAllTodoTask = asyncHandler(async(req, res, next) => {
    
})

export {
    createTodo
}