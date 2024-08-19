import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateUsers1724046179427 implements MigrationInterface {
  name = 'CreateUsers1724046179427';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "users" ADD "username" character varying NOT NULL`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "username"`);
  }
}
