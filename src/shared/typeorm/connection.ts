import { DataSource } from "typeorm";
import UserEntity from "../../modules/admin/entities/adminEntity";
import AvaliationEntity from "../../modules/avaliation/entities";
import { UserMigration1658376013976 } from "./migrations/1658376013976-UserMigration";
import { AvaliationMigration1658426814594 } from "./migrations/1658426814594-AvaliationMigration";
import "dotenv/config";

export const dataSource = new DataSource({
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
  entities: [UserEntity, AvaliationEntity],
  migrations: [UserMigration1658376013976, AvaliationMigration1658426814594],
});
