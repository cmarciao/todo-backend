import { ListTodoUseCase } from "./ListTodosUseCase";
import { ListTodoController } from "./ListTodoController";
import { TodoRepository } from "../../repositories/implementations/TodosRepository";

const todosRepository = new TodoRepository();
const listTodoUseCase = new ListTodoUseCase(todosRepository);
const listTodoController = new ListTodoController(listTodoUseCase);

export { listTodoController }