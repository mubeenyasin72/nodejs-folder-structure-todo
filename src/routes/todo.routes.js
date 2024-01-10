import { Router } from "express";
import {
    createTodo
} from "../controllers/todo.controller.js";
import { upload } from "../middlewares/multer.middleware.js";
import { verifyJwt } from "../middlewares/auth.middleware.js";
const router = Router();

router.route("/create").post(createTodo)


export default router;