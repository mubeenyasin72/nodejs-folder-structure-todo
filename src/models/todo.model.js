import mongoose, { Schema } from "mongoose";

const todoTaskSchema = new Schema(
  {
    taskName: {
      type: String,
      required: true,
    },
    isCompleted: {
      type: Boolean,
      default: false,
    },
    subTodoTask: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref:"SubTodoTask"
      },
    ],
  },
  {
    timestamps: true,
  }
);

export const TodoTask = mongoose.model("TodoTask",todoTaskSchema);
