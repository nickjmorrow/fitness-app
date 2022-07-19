import { WorkoutEntryExercise } from './workout-entry-exercise.entity';
import { WorkoutTemplate } from './workout-template.entity';

export class WorkoutEntry {
    public workoutEntryId!: string;

    public workoutTemplate?: WorkoutTemplate;

    public workoutEntryExercises!: WorkoutEntryExercise[];
}
