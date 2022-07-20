import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateInitialWorkoutTemplateTable1658277368027 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE public.workout_templates (
                workout_template_id UUID NOT NULL PRIMARY KEY DEFAULT uuid_generate_v4()
                , name VARCHAR NOT NULL
                , workout_template_exercises JSONB NOT NULL
                , date_updated DATE NOT NULL DEFAULT CURRENT_TIMESTAMP
                , date_created DATE NOT NULL DEFAULT CURRENT_TIMESTAMP
            );
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            DROP TABLE public.workout_templates;
        `);
    }
}
