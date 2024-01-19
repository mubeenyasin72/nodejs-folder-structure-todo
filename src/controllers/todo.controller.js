import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import mongoose from "mongoose";

const createTodo = asyncHandler(async (req, res, next) => {
    const { taskName, isCompleted } = req.body;
    
})


export {
    createTodo
}