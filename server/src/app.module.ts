import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HealthcheckModule } from './healthcheck/healthcheck.module';
import { WorkoutModule } from './workout/workout.module';

@Module({
  imports: [HealthcheckModule, WorkoutModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
