// import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
// import { User} from "../models/user.model.js"
// import {uploadOnCloudinary} from "../utils/cloudinary.js"
import { ApiResponse } from "../utils/ApiResponse.js";
// import jwt from "jsonwebtoken"
// import mongoose from "mongoose";

//Register Controller
const registerUser = (req, res) => {
  const { username } = req.body;
  if (!username) {
    throw new ApiError(400, "username is required...");
  }
  return res
    .status(200)
    .json(
      new ApiResponse(200, channel[0], "User channel fetched successfully")
    );
};

export { registerUser };
