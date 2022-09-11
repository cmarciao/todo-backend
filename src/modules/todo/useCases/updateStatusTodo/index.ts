import { TodoRepository } from "../../repositories/implementations/TodosRepository";
import { UpdateStatusTodoController } from "./UpdateStatusTodoController";
import { UpdateStatusTodoUseCase } from "./UpdateStatusTodoUseCase";

const todosRepository = new TodoRepository();
const updateStatusTodoUseCase = new UpdateStatusTodoUseCase(todosRepository);
const updateStatusTodoController = new UpdateStatusTodoController(updateStatusTodoUseCase);

export { updateStatusTodoController };