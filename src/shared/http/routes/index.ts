import { Request, Response, Router } from "express";
import UserController from "../../../modules/admin/controllers";
import AvaliationController from "../../../modules/avaliation/controllers";

const router = Router();
const userController = new UserController();

const avaliationController = new AvaliationController();

router.post("/registrar", userController.create);
router.post("/login", userController.authenticate);
router.delete("/remover/:id", userController.delete);

router.post("/avaliar", avaliationController.create);
router.get("/", (request: Request, response: Response) => {
  return response.json("rota raiz");
});

export default router;
