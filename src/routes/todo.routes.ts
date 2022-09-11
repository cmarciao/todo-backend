import { Router } from "express";
import { createTodoController } from "../modules/todo/useCases/createTodo";
import { deleteTodoController } from "../modules/todo/useCases/deleTodo";
import { listTodoController } from "../modules/todo/useCases/listTodos";
import { updateStatusTodoController } from "../modules/todo/useCases/updateStatusTodo";

const todoRoutes = Router();

todoRoutes.post("/", (req, res) => {
  return createTodoController.handle(req, res);
});

todoRoutes.get("/", (req, res) => {
  return listTodoController.handle(req, res);
});

todoRoutes.patch("/:id", (req, res) => {
  return updateStatusTodoController.handle(req, res);
});

todoRoutes.delete("/:id", (req, res) => {
  return deleteTodoController.handle(req, res);
});


export { todoRoutes };