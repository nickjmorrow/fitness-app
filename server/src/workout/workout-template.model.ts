export interface WorkoutTemplateModel {
    id: string;
    name: string;
    exercises: WorkoutTemplateExerciseModel[];
}

export interface WorkoutTemplateExerciseModel {
    id: string;
    name: string;
    exerciseType: ExerciseType;
    sets: WorkoutTemplateExerciseSetModel[];
}

type WorkoutTemplateExerciseSetModel = {
    isEmpty: true
};

export enum ExerciseType {
    DURATION = 'DURATION',
    REPETITION = 'REPETITION'
}