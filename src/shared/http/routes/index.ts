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

router.get("/lista", avaliationController.getAllAvaliation);
router.get("/lista/:company/:sector", avaliationController.getBySector);
router.get(
  "/lista/:company/:sector/:avaliation",
  avaliationController.getByAvaliation
);

export default router;
