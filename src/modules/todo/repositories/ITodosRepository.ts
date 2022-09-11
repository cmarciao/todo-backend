import { ITodo } from "../types/ITodo";

import { ICreateTodo } from "../dtos/ICreateTodo";
import { IUpdateTodo } from "../dtos/IUpdateTodo";

interface ITodosRepository {
  listTodos: () => Promise<ITodo[]>;
  craeteTodo: (data: ICreateTodo) => Promise<ITodo>;
  updateStatusTodo: (data: IUpdateTodo) => Promise<ITodo>;
  deleteTodo: (id: string) => void;
}

export { ITodosRepository };