import { Router } from "express";

import { todoRoutes } from "./todo.routes";

const routes = Router();

routes.use("/todos", todoRoutes);

export { routes };