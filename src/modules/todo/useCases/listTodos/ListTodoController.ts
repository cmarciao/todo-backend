import { Request, Response } from "express";
import { ListTodoUseCase } from "./ListTodosUseCase";

class ListTodoController {
  constructor(private listTodoUseCase: ListTodoUseCase) {}

  async handle(req: Request, res: Response): Promise<Response> {
    const todos = await this.listTodoUseCase.execute();

    return res.status(200).json(todos);
   }
}

export { ListTodoController };