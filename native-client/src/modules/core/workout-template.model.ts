export interface WorkoutTemplateModel {
    id: string;
    name: string;
    exercises: WorkoutTemplateExerciseModel[];
}

export interface WorkoutTemplateExerciseModel {
    id: string;
    name: string;
    sets: WorkoutTemplateExerciseSetModel[];
}

type WorkoutTemplateExerciseSetModel = {
    isEmpty: true
};