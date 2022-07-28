"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.dataSource = void 0;
const typeorm_1 = require("typeorm");
const adminEntity_1 = __importDefault(require("../../modules/admin/entities/adminEntity"));
const entities_1 = __importDefault(require("../../modules/avaliation/entities"));
const _1658376013976_UserMigration_1 = require("./migrations/1658376013976-UserMigration");
const _1658426814594_AvaliationMigration_1 = require("./migrations/1658426814594-AvaliationMigration");
require("dotenv/config");
exports.dataSource = new typeorm_1.DataSource({
    type: "postgres",
    host: `${process.env.DB_HOST}`,
    port: 5432,
    username: `${process.env.DB_USERNAME}`,
    password: `${process.env.DB_PASSWORD}`,
    database: `${process.env.DATABASE}`,
    extra: {
        ssl: {
            require: true,
            rejectUnauthorized: false,
        },
    },
    entities: [adminEntity_1.default, entities_1.default],
    migrations: [_1658376013976_UserMigration_1.UserMigration1658376013976, _1658426814594_AvaliationMigration_1.AvaliationMigration1658426814594],
});
