import { ExerciseType } from './exercise.model';

export interface WorkoutTemplateExerciseModel {
    orderId: number;
    exercise: RepetitionExercise | DurationExercise;
}

type BaseExercise = {
    exerciseId: string;
    name: string;
};

type WorkoutData<T> = {
    workoutEntries: {
        workoutEntryId: string;
        dateCreated: Date;
        exercises: {
            exerciseId: string;
            orderId: number;
            sets: T[];
        }[];
    }[];
};

type RepetitionExercise = BaseExercise & {
    exerciseType: ExerciseType.REPETITION;
    historicalData: WorkoutData<{
        repCount: number;
        weight: number;
    }>;
};

type DurationExercise = BaseExercise & {
    exerciseType: ExerciseType.DURATION;
    historicalData: WorkoutData<{
        duration: number;
        weight: number;
    }>;
};
