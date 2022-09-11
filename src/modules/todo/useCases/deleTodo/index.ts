import { DeleteTodoUseCase } from "./DeleteTodoUseCase";
import { DeleteTodoController } from "./DeleteTodoController";
import { TodoRepository } from "../../repositories/implementations/TodosRepository";

const todosRepository = new TodoRepository();
const deleteTodoUseCase = new DeleteTodoUseCase(todosRepository);
const deleteTodoController = new DeleteTodoController(deleteTodoUseCase);

export { deleteTodoController };
