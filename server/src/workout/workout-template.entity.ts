import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { WorkoutTemplateExerciseModel } from './workout-template-exercise.model';

@Entity({ schema: 'public', name: 'workout_templates' })
export class WorkoutTemplate {
    @PrimaryGeneratedColumn('uuid', { name: 'workout_template_id' })
    public workoutTemplateId!: string;

    @Column({ name: 'name' })
    public name!: string;

    @Column({ name: 'workout_template_exercises', type: 'jsonb' })
    public workoutTemplateExercises!: WorkoutTemplateExerciseModel[];

    @UpdateDateColumn({ name: 'date_updated' })
    public updatedAt!: Date;

    @CreateDateColumn({ name: 'date_created' })
    public createdAt!: Date;
}
