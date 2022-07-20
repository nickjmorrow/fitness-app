import { Injectable } from '@nestjs/common';
import { CreateWorkoutTemplateRequest } from '~/workout/create-workout-template-request.type';
import { Exercise } from '~/workout/exercise.entity';
import { ExerciseType } from '~/workout/exercise.model';
import { ExerciseService } from '~/workout/exercise.service';
import { WorkoutTemplateExercise } from '~/workout/workout-template-exercise.type';
import { WorkoutTemplateService } from '~/workout/workout-template.service';

const EXERCISE_NAMES = {
    SQUAT: 'Squat',
    LEG_EXTENSION: 'Leg Extension',
    LEG_PRESS: 'Leg Press',
    WALL_SIT: 'Wall Sit',
};

const SEEDED_EXERCISES = [
    {
        name: EXERCISE_NAMES.SQUAT,
        exerciseType: ExerciseType.REPETITION,
    },
    {
        name: EXERCISE_NAMES.LEG_EXTENSION,
        exerciseType: ExerciseType.REPETITION,
    },
    {
        name: EXERCISE_NAMES.LEG_PRESS,
        exerciseType: ExerciseType.REPETITION,
    },
    {
        name: EXERCISE_NAMES.WALL_SIT,
        exerciseType: ExerciseType.DURATION,
    },
];

const SEEDED_WORKOUT_TEMPLATES = [
    {
        name: 'Legs',
        exercises: [
            {
                name: EXERCISE_NAMES.SQUAT,
            },
            {
                name: EXERCISE_NAMES.LEG_PRESS,
            },
            {
                name: EXERCISE_NAMES.LEG_EXTENSION,
            },
        ],
    },
];

@Injectable()
export class DataSeederService {
    private exerciseNameToExerciseMapping: Record<string, Exercise> = {};

    constructor(
        private readonly exerciseService: ExerciseService,
        private readonly workoutTemplateService: WorkoutTemplateService,
    ) {}

    async seedData(): Promise<void> {
        await this.seedExercises();
        this.exerciseNameToExerciseMapping = await this.buildExerciseMapping();
        await this.seedWorkoutTemplates();
    }

    private async seedWorkoutTemplates(): Promise<void> {
        await this.workoutTemplateService.deleteAll();

        const createWorkoutTemplateRequests: CreateWorkoutTemplateRequest[] = SEEDED_WORKOUT_TEMPLATES.map((swt) => {
            const exercises: WorkoutTemplateExercise[] = swt.exercises.map((e, i) => ({
                exercise: this.exerciseNameToExerciseMapping[e.name],
                orderId: i,
            }));

            return {
                name: swt.name,
                workoutTemplateExercises: exercises,
            };
        });

        await Promise.all(
            createWorkoutTemplateRequests.map((cwtr) =>
                this.workoutTemplateService
                    .create(cwtr)
                    .then(() => console.log(`Created workout template ${cwtr.name}.`)),
            ),
        );
    }

    private buildExerciseMapping = async () => {
        const mapping = await Promise.all(
            SEEDED_EXERCISES.map((se) =>
                this.exerciseService.get({ name: se.name }).then((e) => ({ name: se.name, exercise: e })),
            ),
        );

        return mapping.reduce<Record<string, Exercise>>((agg, cur) => {
            agg[cur.name] = cur.exercise;
            return agg;
        }, {});
    };

    private async seedExercises(): Promise<void> {
        console.log(`Deleting exercises.`);
        await Promise.all(SEEDED_EXERCISES.map(this.exerciseService.delete));

        console.log(`Creating exercises.`);
        await Promise.all(
            SEEDED_EXERCISES.map((e) =>
                this.exerciseService.create(e).then((r) => console.log(`Created exercise ${e.name}.`)),
            ),
        );
    }
}
