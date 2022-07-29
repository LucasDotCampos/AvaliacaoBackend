"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const connection_1 = require("../../../shared/typeorm/connection");
const entities_1 = __importDefault(require("../entities"));
class AvaliationService {
    async create({ sector, device, avaliation, company, }) {
        const avaliationRepository = connection_1.dataSource.manager.getRepository(entities_1.default);
        const createAvaliation = avaliationRepository.create({
            sector,
            device,
            avaliation,
            company,
        });
        connection_1.dataSource.manager.save(createAvaliation);
        return createAvaliation;
    }
    async getBySector(sector) {
        const avaliationRepository = connection_1.dataSource.manager.getRepository(entities_1.default);
        const search = avaliationRepository.find({
            where: {
                sector,
            },
        });
        return search;
    }
}
exports.default = AvaliationService;
