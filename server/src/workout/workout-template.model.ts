import { WorkoutTemplateExerciseModel } from './workout-template-exercise.model';

export interface WorkoutTemplateModel {
    workoutTemplateId: string;
    name: string;
    workoutTemplateExercises: WorkoutTemplateExerciseModel[];
}
