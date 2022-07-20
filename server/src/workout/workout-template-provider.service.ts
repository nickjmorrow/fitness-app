import { Injectable } from '@nestjs/common';
import { WorkoutTemplateModel } from './workout-template.model';
import { WorkoutTemplateRepository } from './workout-template.repository';

@Injectable()
export class WorkoutTemplateProvider {
    constructor(private readonly workouteTemplateRepository: WorkoutTemplateRepository) {}

    async getWorkoutTemplates(): Promise<WorkoutTemplateModel[]> {
        const workoutTemplateEntities = await this.workouteTemplateRepository.getAll();
        return workoutTemplateEntities.map(
            (wt): WorkoutTemplateModel => ({
                workoutTemplateId: wt.workoutTemplateId,
                name: wt.name,
                workoutTemplateExercises: wt.workoutTemplateExercises,
            }),
        );
    }
}
