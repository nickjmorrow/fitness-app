import { WorkoutTemplateExerciseModel } from './workout-template-exercise.model';

export interface CreateWorkoutTemplateRequest {
    name: string;
    workoutTemplateExercises: WorkoutTemplateExerciseModel[];
}
