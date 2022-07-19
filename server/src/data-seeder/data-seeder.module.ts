import { Module } from '@nestjs/common';
import { DataSeederService } from './data-seeder.service';
import { DataSeederController } from './data-seeder.controller';
import { WorkoutModule } from '~/workout/workout.module';
import { ExerciseService } from '~/workout/exercise.service';

@Module({
    providers: [DataSeederService],
    controllers: [DataSeederController],
    imports: [WorkoutModule],
})
export class DataSeederModule {}
