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
//Get Single Todo Task Controller
const getSingleTodoTask = asyncHandler(async (req, res, next) => {
})
//Delete Todo task
const deleteTodoTask = asyncHandler(async (req, res, next) => {
    
})
export {
    createTodo,
    getAllTodoTask,
    updateTodoController,
    getSingleTodoTask,
}








/////////////////////////////////////////////////////////////////////////////
// const https = require('https');

// https.get('https://coderbyte.com/api/challenges/json/json-cleaning', (resp) => {
//   let data = '';

//   resp.on('data', (chunk) => {
//     data += chunk;
//   });

//   resp.on('end', () => {
//     try {
//       console.log("Raw Data: ", data);
//       const jsonData = JSON.parse(data);
//       const cleanedObject = cleanObject(jsonData);
//       console.log(JSON.stringify(cleanedObject));
//     } catch (error) {
//       console.error("Error While Parsing: ", error);
//     }
//   });

// }).on("error", (err) => {
//   console.error("Error While Fetching Data: ", err);
// });

function cleanObject(obj) {
  const cleanedObj = {};
  let itemsRemoved = 0;

  for (const [key, value] of Object.entries(obj)) {
    if (Array.isArray(value)) {
      const cleanedArray = value.filter(item =>
        item !== 'N/A' && item !== '-' && item !== ''
      );
      if (cleanedArray.length !== value.length) {
        itemsRemoved += value.length - cleanedArray.length;
      }
      cleanedObj[key] = cleanedArray;
    } else if (typeof value === 'object' && value !== null) {
      cleanedObj[key] = cleanObject(value);
    } else {
      if (value !== 'N/A' && value !== '-' && value !== '') {
        cleanedObj[key] = value;
      } else {
        itemsRemoved++;
      }
    }
  }

  if (itemsRemoved > 0) {
    cleanedObj['items_removed'] = itemsRemoved;
  }

  return cleanedObj;
}