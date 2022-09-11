import { Todo } from "../../models/Todo";
import { ITodo } from "../../types/ITodo";

import { ICreateTodo } from "../../dtos/ICreateTodo";
import { IUpdateTodo } from "../../dtos/IUpdateTodo";

import { ITodosRepository } from "../ITodosRepository";
import { AppError } from "../../../../errors/AppError";

class TodoRepository implements ITodosRepository {
  async listTodos(): Promise<ITodo[]> {
    const todos: ITodo[] = [];
    
    await Todo.find().then(todosList => {
      
      todosList.forEach(todo => {
        todos.push({
          _id: todo._id.toString(),
          title: todo.title,
          created_at: todo.created_at,
          isCompleted: todo.isCompleted
        });
      });
      
    });


    return todos;
  }

  async craeteTodo({ title }: ICreateTodo): Promise<ITodo> {
    const newTodo: ITodo = {
      title,
      isCompleted : false,
      created_at: new Date()
    }
    const todo = new Todo(newTodo);

    await todo.save().then(item => {

      newTodo._id = item._id.toString();

    }).catch(err => {
      throw new AppError(`Error creating task - ${err.message}`);
    });

    return newTodo;
  }
  
  async updateStatusTodo({ id, isCompleted }: IUpdateTodo): Promise<ITodo> {    
    const todo: ITodo = {} as ITodo;
    
    await Todo.findByIdAndUpdate(id, { isCompleted }).then(updatedTodo => {
      
      Object.assign(todo, {
        _id: updatedTodo._id.toString(),
        title: updatedTodo.title,
        isCompleted,
        created_at: updatedTodo.created_at
      });

    }).catch(err => {
      throw new AppError(`Error updating task - ${err.message}`);
    })

    return todo;
  }
  
  async deleteTodo(id: string) {
    await Todo.findByIdAndDelete(id).catch(err => {
      throw new AppError(`Error deleting task - ${err.message}`);
    });
  }
}

export { TodoRepository };