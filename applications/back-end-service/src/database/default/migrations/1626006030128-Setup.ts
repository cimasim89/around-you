import { MigrationInterface, QueryRunner } from 'typeorm'

export class Setup1626006030128 implements MigrationInterface {
  name = 'Setup1626006030128'

  async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "area"
       (
           "parentAreaUuid" character varying,
           "name"           character varying NOT NULL,
           "uuid"           uuid              NOT NULL DEFAULT uuid_generate_v4(),
           CONSTRAINT "PK_2c4e7fb8874d167a2c288301ab5" PRIMARY KEY ("uuid")
       )`
    )
    await queryRunner.query(
      `CREATE TABLE "activity"
       (
           "active"    boolean           NOT NULL,
           "address"   character varying NOT NULL,
           "areaUuid"  uuid              NOT NULL,
           "closing"   smallint          NOT NULL,
           "latitude"  double precision  NOT NULL,
           "longitude" double precision  NOT NULL,
           "name"      character varying NOT NULL,
           "opening"   smallint          NOT NULL,
           "uuid"      uuid              NOT NULL DEFAULT uuid_generate_v4(),
           CONSTRAINT "PK_d848e62c1a30e6fd2091b935c43" PRIMARY KEY ("uuid")
       )`
    )
    await queryRunner.query(
      `CREATE TABLE "device_event_delta"
       (
           "uuid" uuid NOT NULL DEFAULT uuid_generate_v4(),
           CONSTRAINT "PK_11f0ed8bee75afd5ac40200028b" PRIMARY KEY ("uuid")
       )`
    )
    await queryRunner.query(
      `CREATE TABLE "device_movements"
       (
           "areaUuid"     character varying NOT NULL,
           "dateTime"     TIMESTAMP         NOT NULL,
           "deviceUuid"   character varying NOT NULL,
           "movementType" integer           NOT NULL,
           "uuid"         uuid              NOT NULL DEFAULT uuid_generate_v4(),
           CONSTRAINT "PK_ac87f5f93be390414ff73aab851" PRIMARY KEY ("uuid")
       )`
    )
    await queryRunner.query(
      `ALTER TABLE "activity"
          ADD CONSTRAINT "FK_82f1a6dd579bfca10949aaccbb3" FOREIGN KEY ("areaUuid") 
              REFERENCES "area" ("uuid") ON DELETE NO ACTION ON UPDATE CASCADE`
    )
  }

  async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "activity"
        DROP CONSTRAINT "FK_82f1a6dd579bfca10949aaccbb3"`)
    await queryRunner.query(`DROP TABLE "device_movements"`)
    await queryRunner.query(`DROP TABLE "device_event_delta"`)
    await queryRunner.query(`DROP TABLE "activity"`)
    await queryRunner.query(`DROP TABLE "area"`)
  }
}
