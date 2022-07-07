import { Exercise } from "./exercise.entity";
import { WorkoutEntryExerciseSet } from "./workout-entry-exercise-set.type";
import { WorkoutEntry } from "./workout-entry.entity";

export type WorkoutEntryExercise = {
    workoutEntry: WorkoutEntry;
    exercise: Exercise;
    sets: WorkoutEntryExerciseSet[];
}