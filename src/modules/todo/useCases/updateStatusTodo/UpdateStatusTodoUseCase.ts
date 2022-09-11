import { ITodo } from "../../types/ITodo";
import { ITodosRepository } from "../../repositories/ITodosRepository";

interface IRequest {
  id: string;
  isCompleted: boolean;
}

class UpdateStatusTodoUseCase {
  constructor(private todosRepository: ITodosRepository) {}

  async execute({ id, isCompleted }: IRequest): Promise<ITodo> {
    const todo = await this.todosRepository.updateStatusTodo({ id, isCompleted });

    return todo;
  }
}

export { UpdateStatusTodoUseCase };