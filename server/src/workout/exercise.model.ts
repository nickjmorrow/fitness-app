// import { ExerciseType } from './workout-template.model';

export enum ExerciseType {
    DURATION = 'DURATION',
    REPETITION = 'REPETITION',
}

export interface BaseExerciseModel {
    exerciseId: string;
    name: string;
}

export type ExerciseData = RepetitionExerciseData | DurationExerciseData;

export interface RepetitionExerciseData {
    sets: {
        weight: number;
        repCount: number;
    }[];
}

export interface DurationExerciseData {
    sets: {
        weight: number;
        duration: number;
    }[];
}

export type ExerciseModel =
    | BaseExerciseModel &
          (
              | {
                    exerciseType: ExerciseType.REPETITION;
                    data: RepetitionExerciseData;
                }
              | {
                    exerciseType: ExerciseType.DURATION;
                    data: DurationExerciseData;
                }
          );
