import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { ExerciseData, ExerciseType } from './exercise.model';

@Entity({ schema: 'public', name: 'exercises' })
export class Exercise {
    @PrimaryGeneratedColumn('uuid', { name: 'exercise_id' })
    public exerciseId!: string;

    @Column({ name: 'name' })
    public name!: string;

    @Column({ name: 'exercise_type', type: 'varchar' })
    public exerciseType!: ExerciseType;

    @UpdateDateColumn({ name: 'date_updated' })
    public updatedAt!: Date;

    @CreateDateColumn({ name: 'date_created' })
    public createdAt!: Date;
}
