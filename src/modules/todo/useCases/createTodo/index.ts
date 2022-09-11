import { TodoRepository } from "../../repositories/implementations/TodosRepository";
import { CreateTodoController } from "./CreateTodoController";
import { CreateTodoUseCase } from "./CreateTodoUseCase";

const todosRepository = new TodoRepository();
const createTodoUseCase = new CreateTodoUseCase(todosRepository);
const createTodoController = new CreateTodoController(createTodoUseCase);

export { createTodoController };