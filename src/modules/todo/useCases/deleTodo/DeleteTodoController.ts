import { Request, Response } from "express";
import { DeleteTodoUseCase } from "./DeleteTodoUseCase";

class DeleteTodoController {
  constructor(private deleteTodoUseCase: DeleteTodoUseCase) {}

  async handle(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

    await this.deleteTodoUseCase.execute({ id });

    return res.status(200).json({
      message: "Todo deleted successfully"
    })
   }
}

export { DeleteTodoController };