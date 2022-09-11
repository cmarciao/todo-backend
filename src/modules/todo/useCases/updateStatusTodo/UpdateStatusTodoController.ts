import { Request, Response } from "express";
import { UpdateStatusTodoUseCase } from "./UpdateStatusTodoUseCase";

class UpdateStatusTodoController {
  constructor(private updateStatusTodoUseCase: UpdateStatusTodoUseCase) {}

  async handle(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const { isCompleted } = req.body;

    const todo = await this.updateStatusTodoUseCase.execute({ id, isCompleted });

    return res.status(200).json(todo);
  }
}

export { UpdateStatusTodoController };