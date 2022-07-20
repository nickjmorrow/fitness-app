import { ExerciseType } from './exercise.model';

export interface CreateExerciseRequest {
    name: string;
    exerciseType: ExerciseType;
}
