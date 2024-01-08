import { ApiError } from "../utils/ApiError.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import jwt from "jsonwebtoken";
import { User } from "../models/user.model.js";

export const verifyJwt = asyncHandler(async (req, _, res) => {
    try {
        
    } catch (error) {
        throw new ApiError(401, error?.message || "Invalid access token")
    }
});
