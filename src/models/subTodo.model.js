import mongoose, { Schema } from "mongoose";

const subTodoTaskSchema = new Schema(
  {
    taskName: {
      type: String,
      required: true,
    },
    isCompleted: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

export const TodoTask = mongoose.model("SubTodoTask",subTodoTaskSchema);