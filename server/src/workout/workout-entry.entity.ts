import { JoinColumn, OneToOne } from 'typeorm';
import { Exercise } from './exercise.entity';
import { WorkoutEntryExercise } from './workout-entry-exercise.entity';
import { WorkoutTemplate } from './workout-template.entity';

export class WorkoutEntry {
    public workoutEntryId!: string;

    public workoutTemplateId?: string;

    public name!: string;

    public workoutEntryExercises!: {
        exerciseId: string;
        name: string;
        sets: {}[];
    }[];
}
