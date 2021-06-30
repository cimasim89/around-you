import { MigrationInterface, QueryRunner } from 'typeorm'

export class CreateActivityTable1624803887987 implements MigrationInterface {
  name = 'CreateActivityTable1624803887987'

  async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "activity"
       (
           "closing"   smallint          NOT NULL,
           "latitude"  double precision  NOT NULL,
           "longitude" double precision  NOT NULL,
           "name"      character varying NOT NULL,
           "opening"   smallint          NOT NULL,
           "uuid"      uuid              NOT NULL DEFAULT uuid_generate_v4(),
           CONSTRAINT "PK_d848e62c1a30e6fd2091b935c43" PRIMARY KEY ("uuid")
       )`
    )
  }

  async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "activity"`)
  }
}
