import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { WorkoutEntryProvider } from './workout-entry-provider.service';
import { WorkoutTemplateProvider } from './workout-template-provider.service';
import { WorkoutController } from './workout.controller';

@Module({
  controllers: [WorkoutController],
  imports: [ConfigModule],
  providers: [
    WorkoutEntryProvider,
    WorkoutTemplateProvider,
  ]
})
export class WorkoutModule { }
