"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controllers_1 = __importDefault(require("../../../modules/admin/controllers"));
const controllers_2 = __importDefault(require("../../../modules/avaliation/controllers"));
const router = (0, express_1.Router)();
const userController = new controllers_1.default();
const avaliationController = new controllers_2.default();
router.post("/registrar", userController.create);
router.post("/login", userController.authenticate);
router.delete("/remover/:id", userController.delete);
router.post("/avaliar", avaliationController.create);
router.get("/", (request, response) => {
    return response.json("rota raiz");
});
exports.default = router;
