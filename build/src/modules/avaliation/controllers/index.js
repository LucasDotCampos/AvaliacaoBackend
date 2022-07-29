"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const services_1 = __importDefault(require("../services"));
class AvaliationController {
    async create(request, response) {
        try {
            const { sector, device, avaliation, company } = request.body;
            const avaliationService = new services_1.default();
            const createAvaliation = avaliationService.create({
                sector,
                device,
                avaliation,
                company,
            });
            return response.status(200).json(createAvaliation);
        }
        catch (err) {
            return response.status(400).json(err.message);
        }
    }
    async getBySector(request, response) {
        try {
            const { sector } = request.params;
            const avaliationService = new services_1.default();
            const search = avaliationService.getBySector(sector);
            return response.status(200).json(search);
        }
        catch (err) {
            return response.status(400).json(err.message);
        }
    }
}
exports.default = AvaliationController;
