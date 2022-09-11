import mongoose from "mongoose";

const todoSchema = new mongoose.Schema({
  title: { type: String, required: true },
  isCompleted: { type: Boolean, required: true },
  created_at: { type: Date, required: true },
});

const Todo = mongoose.model("todo", todoSchema);

export { Todo };