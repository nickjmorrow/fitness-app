import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { AppSettingConfig } from '../config/app-setting-config.type';
import { ExerciseType, WorkoutTemplateModel } from './workout-template.model';

@Injectable()
export class WorkoutTemplateProvider {
    constructor(private configService: ConfigService<AppSettingConfig>) {}

    getWorkoutTemplates(): WorkoutTemplateModel[] {
        const useTestData = this.configService.get('useTestData', { infer: true });

        if (useTestData) {
            return this.getWorkoutTemplateTestData();
        }

        return [];
    }

    private getWorkoutTemplateTestData(): WorkoutTemplateModel[] {
        return [
            {
                name: 'Legs',
                id: 'legs',
                exercises: [
                    {
                        id: 'squat',
                        name: 'Squat',
                        exerciseType: ExerciseType.REPETITION,
                        sets: [
                            {
                                isEmpty: true,
                            },
                            {
                                isEmpty: true,
                            },
                            {
                                isEmpty: true,
                            },
                        ],
                    },
                    {
                        id: 'leg press',
                        name: 'Leg Press',
                        exerciseType: ExerciseType.REPETITION,
                        sets: [
                            {
                                isEmpty: true,
                            },
                            {
                                isEmpty: true,
                            },
                            {
                                isEmpty: true,
                            },
                        ],
                    },
                    {
                        id: 'leg extension',
                        name: 'Leg Extension',
                        exerciseType: ExerciseType.REPETITION,
                        sets: [
                            {
                                isEmpty: true,
                            },
                            {
                                isEmpty: true,
                            },
                            {
                                isEmpty: true,
                            },
                        ],
                    },
                    {
                        id: 'wall sit',
                        name: 'Wall Sit',
                        exerciseType: ExerciseType.DURATION,
                        sets: [
                            {
                                isEmpty: true,
                            },
                            {
                                isEmpty: true,
                            },
                            {
                                isEmpty: true,
                            },
                        ],
                    },
                ],
            },
            {
                name: 'Chest and Shoulders',
                id: 'chest and shoulders',
                exercises: [
                    {
                        id: 'bench press',
                        name: 'Bench Press',
                        exerciseType: ExerciseType.REPETITION,
                        sets: [],
                    },
                    {
                        id: 'incline bench press',
                        name: 'Incline Bench Press',
                        exerciseType: ExerciseType.REPETITION,
                        sets: [],
                    },
                    {
                        id: 'decline bench press',
                        name: 'Decline Bench Press',
                        exerciseType: ExerciseType.REPETITION,
                        sets: [],
                    },
                    {
                        id: 'flye',
                        name: 'Flye',
                        exerciseType: ExerciseType.REPETITION,
                        sets: [],
                    },
                    {
                        id: 'overhead press',
                        name: 'Overhead Press',
                        exerciseType: ExerciseType.REPETITION,
                        sets: [],
                    },
                ],
            },
            {
                name: 'Back',
                id: 'back',
                exercises: [
                    {
                        id: 'deadlift',
                        name: 'Deadlift',
                        exerciseType: ExerciseType.REPETITION,
                        sets: [],
                    },
                    {
                        id: 'bent over row',
                        name: 'Bent Over Row',
                        exerciseType: ExerciseType.REPETITION,
                        sets: [],
                    },
                    {
                        id: 'shrug',
                        name: 'Shrug',
                        exerciseType: ExerciseType.REPETITION,
                        sets: [],
                    },
                ],
            },
        ];
    }
}
