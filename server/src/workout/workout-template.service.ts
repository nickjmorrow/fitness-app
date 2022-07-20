import { Injectable } from '@nestjs/common';
import { CreateWorkoutTemplateRequest } from './create-workout-template-request.type';
import { WorkoutTemplateExerciseModel } from './workout-template-exercise.model';
import { WorkoutTemplateModel } from './workout-template.model';
import { WorkoutTemplateRepository } from './workout-template.repository';

@Injectable()
export class WorkoutTemplateService {
    constructor(private readonly workouteTemplateRepository: WorkoutTemplateRepository) {}

    deleteAll = async () => {
        return this.workouteTemplateRepository.deleteAll();
    };

    create = async (request: CreateWorkoutTemplateRequest) => {
        return this.workouteTemplateRepository.create(request);
    };

    async getWorkoutTemplates(): Promise<WorkoutTemplateModel[]> {
        const workoutTemplateEntities = await this.workouteTemplateRepository.getAll();
        return workoutTemplateEntities.map(
            (wte): WorkoutTemplateModel => ({
                workoutTemplateId: wte.workoutTemplateId,
                name: wte.name,
                workoutTemplateExercises: wte.workoutTemplateExercises.map(
                    (wte): WorkoutTemplateExerciseModel => ({
                        orderId: wte.orderId,
                        // TODO: NJM Remove this and resolve please :)
                        // Did this so I could switch focus to shared package
                        // @ts-ignore
                        exercise: {
                            exerciseId: wte.exercise.exerciseId,
                            name: wte.exercise.name,
                            exerciseType: wte.exercise.exerciseType,
                        },
                    }),
                ),
            }),
        );
    }
}
