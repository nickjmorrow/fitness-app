import { MigrationInterface, QueryRunner } from 'typeorm';

export class InitialDataModelSetup1658267537649 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
        `);
        await queryRunner.query(`
            CREATE TABLE public.exercises (
                exercise_id UUID NOT NULL PRIMARY KEY DEFAULT uuid_generate_v4()
                , name VARCHAR NOT NULL
                , date_updated DATE NOT NULL DEFAULT CURRENT_TIMESTAMP
                , date_created DATE NOT NULL DEFAULT CURRENT_TIMESTAMP
            );
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            DROP TABLE public.exercises;
        `);
    }
}
