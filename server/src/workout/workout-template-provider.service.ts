import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { AppSettingConfig } from '../config/app-setting-config.type';
import { WorkoutTemplateModel } from "./workout-template.model";

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
                        sets: []
                    },
                    {
                        id: 'incline bench press',
                        name: 'Incline Bench Press',
                        sets: []
                    },
                    {
                        id: 'decline bench press',
                        name: 'Decline Bench Press',
                        sets: []
                    },
                    {
                        id: 'flye',
                        name: 'Flye',
                        sets: []
                    },
                    {
                        id: 'overhead press',
                        name: 'Overhead Press',
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
                        sets: []
                    },
                    {
                        id: 'bent over row',
                        name: 'Bent Over Row',
                        sets: []
                    },
                    {
                        id: 'shrug',
                        name: 'Shrug',
                        sets: []
                    },
                ]
            }
        ]
    }
}