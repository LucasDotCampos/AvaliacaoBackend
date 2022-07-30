import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class AvaliationMigration1658426814594 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "avaliation",
        columns: [
          {
            name: "id",
            type: "uuid",
            isPrimary: true,
            generationStrategy: "uuid",
            default: "uuid_generate_v4()",
          },
          {
            name: "sector",
            type: "varchar",
            isNullable: false,
          },
          {
            name: "device",
            type: "varchar",
            isNullable: false,
          },
          {
            name: "avaliation",
            type: "varchar",
            isNullable: false,
          },
          {
            name: "company",
            type: "varchar",
            isNullable: false,
          },
          {
            name: "created_at",
            type: "timestamp with time zone",
            default: "now()",
          },
          {
            name: "updated_at",
            type: "timestamp with time zone",
            default: "now()",
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("avaliation");
  }
}
