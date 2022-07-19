import { Exercise } from './exercise.entity';
import { WorkoutTemplate } from './workout-template.entity';

export type WorkoutTemplateExercise = {
    workoutTemplate: WorkoutTemplate;
    exercise: Exercise;
    orderId: number;
};
