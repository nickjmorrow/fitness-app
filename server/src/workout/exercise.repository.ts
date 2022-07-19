import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateExerciseRequest } from './create-exercise-request.type';
import { Exercise } from './exercise.entity';
import { GetExerciseRequest } from './get-exercise-request.type';

@Injectable()
export class ExerciseRepository {
    constructor(
        @InjectRepository(Exercise)
        private repository: Repository<Exercise>,
    ) {}

    create = (request: CreateExerciseRequest) => {
        return this.repository.insert(request);
    };

    get = async (request: GetExerciseRequest) => {
        return this.repository.findOneBy(request);
    };

    delete = async (request: GetExerciseRequest) => {
        return this.repository.delete(request);
    };
}
