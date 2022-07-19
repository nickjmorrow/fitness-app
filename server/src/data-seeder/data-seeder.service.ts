import { Injectable } from '@nestjs/common';
import { ExerciseService } from '~/workout/exercise.service';

const EXERCISE_NAMES = {
    SQUAT: 'Squat',
    LEG_EXTENSION: 'Leg Extension',
    LEG_PRESS: 'Leg Press',
};

const SEEDED_EXERCISES = [
    {
        name: EXERCISE_NAMES.SQUAT,
    },
    {
        name: EXERCISE_NAMES.LEG_EXTENSION,
    },
    {
        name: EXERCISE_NAMES.LEG_PRESS,
    },
];

@Injectable()
export class DataSeederService {
    constructor(private readonly exerciseService: ExerciseService) {}

    async seedData(): Promise<void> {
        console.log(`Deleting exercises.`);
        await Promise.all(SEEDED_EXERCISES.map(this.exerciseService.delete));

        console.log(`Creating exercises.`);
        const results = await Promise.all(SEEDED_EXERCISES.map(this.exerciseService.createIfNotExists));
        results.filter((r) => r.didCreate).map((r) => console.log(`Created exercise ${r.request.name}`));
    }
}
