import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Exercise } from './exercise.entity';
import { ExerciseRepository } from './exercise.repository';
import { ExerciseService } from './exercise.service';
import { WorkoutEntryProvider } from './workout-entry-provider.service';
import { WorkoutTemplate } from './workout-template.entity';
import { WorkoutTemplateRepository } from './workout-template.repository';
import { WorkoutTemplateService } from './workout-template.service';
import { WorkoutController } from './workout.controller';

@Module({
    controllers: [WorkoutController],
    imports: [ConfigModule, TypeOrmModule.forFeature([Exercise, WorkoutTemplate])],
    providers: [
        WorkoutEntryProvider,
        WorkoutTemplateService,
        ExerciseService,
        ExerciseRepository,
        WorkoutTemplateRepository,
    ],
    exports: [ExerciseService, WorkoutTemplateService],
})
export class WorkoutModule {}
