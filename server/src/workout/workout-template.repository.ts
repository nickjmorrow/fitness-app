import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateWorkoutTemplateRequest } from './create-workout-template-request.type';
import { WorkoutTemplate } from './workout-template.entity';

@Injectable()
export class WorkoutTemplateRepository {
    constructor(
        @InjectRepository(WorkoutTemplate)
        private repository: Repository<WorkoutTemplate>,
    ) {}

    create = (request: CreateWorkoutTemplateRequest) => {
        return this.repository.insert(request);
    };

    getAll = () => {
        return this.repository.find();
    };

    deleteAll = async () => {
        const allEntities = await this.repository.find();
        return this.repository.remove(allEntities);
    };
}
