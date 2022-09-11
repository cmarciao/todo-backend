import { Request, Response } from "express";
import { CreateTodoUseCase } from "./CreateTodoUseCase";

class CreateTodoController {
  constructor(private createTodoUseCase: CreateTodoUseCase) {}

  async handle(req: Request, res: Response): Promise<Response> {
    const { title } = req.body;

    const todo = await this.createTodoUseCase.execute({ title });

    return res.status(200).json(todo);
  }
}

export { CreateTodoController };