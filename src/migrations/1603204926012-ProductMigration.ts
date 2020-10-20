import {MigrationInterface, QueryRunner} from "typeorm";

export class ProductMigration1603204926012 implements MigrationInterface {
    name = 'ProductMigration1603204926012'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "product_model" ADD "created" TIMESTAMP NOT NULL DEFAULT now()`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "product_model" DROP COLUMN "created"`);
    }

}
