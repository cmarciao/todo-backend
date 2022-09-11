import { TodoRepository } from "../../repositories/implementations/TodosRepository";
import { ITodo } from "../../types/ITodo";

class ListTodoUseCase {
  constructor(private todosRepository: TodoRepository) {}

  async execute(): Promise<ITodo[]> {
    const todos = await this.todosRepository.listTodos();

    return todos;
  }
}

export { ListTodoUseCase };