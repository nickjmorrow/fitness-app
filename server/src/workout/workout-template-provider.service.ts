import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { AppSettingConfig } from '../config/app-setting-config.type';
import { ExerciseType, WorkoutTemplateModel } from "./workout-template.model";

@Injectable()
export class WorkoutTemplateProvider {
    constructor(private configService: ConfigService<AppSettingConfig, true>) { }

    getWorkoutTemplates(): WorkoutTemplateModel[] {
        const useTestData = this.configService.get('useTestData', { infer: true });

        if (useTestData) {
            return this.getWorkoutTemplateTestData();
        }
    }

    private getWorkoutTemplateTestData(): WorkoutTemplateModel[] {
        return [
            {
                name: 'Legs', id: 'legs',
                exercises: [
                    {
                        id: 'squat',
                        name: 'Squat',
                        exerciseType: ExerciseType.RESISTANCE,
                        sets: [
                            {
                                isEmpty: true
                            },
                            {
                                isEmpty: true
                            },
                            {
                                isEmpty: true
                            },
                        ]
                    },
                    {
                        id: 'leg press',
                        name: 'Leg Press',
                        exerciseType: ExerciseType.RESISTANCE,
                        sets: [
                            {
                                isEmpty: true
                            },
                            {
                                isEmpty: true
                            },
                            {
                                isEmpty: true
                            },
                        ]
                    },
                    {
                        id: 'leg extension',
                        name: 'Leg Extension',
                        exerciseType: ExerciseType.RESISTANCE,
                        sets: [
                            {
                                isEmpty: true
                            },
                            {
                                isEmpty: true
                            },
                            {
                                isEmpty: true
                            },
                        ]
                    },
                    {
                        id: 'calf raise',
                        name: 'Calf Raise',
                        exerciseType: ExerciseType.RESISTANCE,
                        sets: [
                            {
                                isEmpty: true
                            },
                            {
                                isEmpty: true
                            },
                            {
                                isEmpty: true
                            },
                        ]
                    }
                ]
            },
            {
                name: 'Chest and Shoulders',
                id: 'chest and shoulders',
                exercises: [
                    {
                        id: 'bench press',
                        name: 'Bench Press',
                        exerciseType: ExerciseType.RESISTANCE,
                        sets: []
                    },
                    {
                        id: 'incline bench press',
                        name: 'Incline Bench Press',
                        exerciseType: ExerciseType.RESISTANCE,
                        sets: []
                    },
                    {
                        id: 'decline bench press',
                        name: 'Decline Bench Press',
                        exerciseType: ExerciseType.RESISTANCE,
                        sets: []
                    },
                    {
                        id: 'flye',
                        name: 'Flye',
                        exerciseType: ExerciseType.RESISTANCE,
                        sets: []
                    },
                    {
                        id: 'overhead press',
                        name: 'Overhead Press',
                        exerciseType: ExerciseType.RESISTANCE,
                        sets: []
                    }
                ]
            },
            {
                name: 'Back',
                id: 'back',
                exercises: [
                    {
                        id: 'deadlift',
                        name: 'Deadlift',
                        exerciseType: ExerciseType.RESISTANCE,
                        sets: []
                    },
                    {
                        id: 'bent over row',
                        name: 'Bent Over Row',
                        exerciseType: ExerciseType.RESISTANCE,
                        sets: []
                    },
                    {
                        id: 'shrug',
                        name: 'Shrug',
                        exerciseType: ExerciseType.RESISTANCE,
                        sets: []
                    },
                ]
            }
        ]
    }
}