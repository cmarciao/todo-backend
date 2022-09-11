import { ITodo } from "../../types/ITodo";
import { ITodosRepository } from "../../repositories/ITodosRepository";

interface IRequest {
  title: string;
}

class CreateTodoUseCase {
  constructor(private todosRepository: ITodosRepository) {}

  async execute({ title }: IRequest): Promise<ITodo> {
    const todo = await this.todosRepository.craeteTodo({ title });

    return todo;
  }
}

export { CreateTodoUseCase };