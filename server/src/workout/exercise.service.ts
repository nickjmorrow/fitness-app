import { Injectable } from '@nestjs/common';
import { CreateExerciseRequest } from './create-exercise-request.type';
import { ExerciseRepository } from './exercise.repository';
import { GetExerciseRequest } from './get-exercise-request.type';

@Injectable()
export class ExerciseService {
    constructor(private readonly exerciseRepository: ExerciseRepository) {}

    create = async (request: CreateExerciseRequest) => {
        return this.exerciseRepository.create(request);
    };

    get = async (request: GetExerciseRequest) => {
        return this.exerciseRepository.get(request);
    };

    createIfNotExists = async (request: CreateExerciseRequest) => {
        const existingExercise = await this.get(request);

        if (existingExercise === null) {
            await this.create(request);
            return {
                request,
                didCreate: true,
            };
        }

        return {
            request,
            didCreate: false,
        };
    };

    delete = async (request: CreateExerciseRequest) => {
        return await this.exerciseRepository.delete(request);
    };
}
