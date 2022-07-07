import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { WorkoutTemplateExercise } from './workout-template-exercise.type';

@Entity({ schema: 'public', name: 'workout_templates' })
export class WorkoutTemplate {
    @PrimaryGeneratedColumn({ name: 'workou_template_id' })
    public workoutTemplateId!: number;

    @Column({ name: 'name' })
    public name!: string;

    public workoutTemplateExercises!: WorkoutTemplateExercise[];

    @UpdateDateColumn({ name: 'updated_at' })
    public updatedAt!: Date;

    @CreateDateColumn({ name: 'created_at' })
    public createdAt!: Date;
}
