import { Injectable } from '@nestjs/common';
import { CreateWorkoutTemplateRequest } from './create-workout-template-request.type';
import { WorkoutTemplateRepository } from './workout-template.repository';

@Injectable()
export class WorkoutTemplateCreator {
    constructor(private readonly workoutTemplateRepository: WorkoutTemplateRepository) {}
    create = async (request: CreateWorkoutTemplateRequest) => {
        return this.workoutTemplateRepository.create(request);
    };
}
