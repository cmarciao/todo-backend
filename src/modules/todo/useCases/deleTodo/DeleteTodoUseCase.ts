import { TodoRepository } from "../../repositories/implementations/TodosRepository";

interface IRequest {
  id: string;
}

class DeleteTodoUseCase {
  constructor(private todosRepository: TodoRepository) {}

  async execute({ id }: IRequest) {
    await this.todosRepository.deleteTodo(id);
  }
}

export { DeleteTodoUseCase };