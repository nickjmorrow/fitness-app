import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Exercise } from './exercise.entity';
import { ExerciseRepository } from './exercise.repository';
import { ExerciseService } from './exercise.service';
import { WorkoutEntryProvider } from './workout-entry-provider.service';
import { WorkoutTemplateProvider } from './workout-template-provider.service';
import { WorkoutController } from './workout.controller';

@Module({
    controllers: [WorkoutController],
    imports: [ConfigModule, TypeOrmModule.forFeature([Exercise])],
    providers: [WorkoutEntryProvider, WorkoutTemplateProvider, ExerciseService, ExerciseRepository],
    exports: [ExerciseService],
})
export class WorkoutModule {}
