import {MigrationInterface, QueryRunner} from "typeorm";

export class ProductMigration1603204117171 implements MigrationInterface {
    name = 'ProductMigration1603204117171'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "product_model" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "qty" integer NOT NULL, "price" integer NOT NULL, CONSTRAINT "PK_deef06ea1075a8678683d25c718" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "product_model"`);
    }

}
