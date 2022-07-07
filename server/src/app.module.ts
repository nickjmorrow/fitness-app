import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { configuration } from './config/configuration';
import { HealthcheckModule } from './healthcheck/healthcheck.module';
import { WorkoutModule } from './workout/workout.module';

@Module({
  imports: [HealthcheckModule, WorkoutModule, ConfigModule.forRoot({
    envFilePath: ['.env.development.local'],
    load: [configuration]
  })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
