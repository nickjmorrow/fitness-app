import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { configuration } from './config/configuration';
import { HealthcheckModule } from './healthcheck/healthcheck.module';
import { WorkoutModule } from './workout/workout.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSeederModule } from './data-seeder/data-seeder.module';
import { CoreModule } from './core/core.module';
import ormConfig from './config/ormConfig';

@Module({
    imports: [
        TypeOrmModule.forRoot(ormConfig),
        HealthcheckModule,
        WorkoutModule,
        ConfigModule.forRoot({
            envFilePath: ['.env.development.local'],
            load: [configuration],
        }),
        DataSeederModule,
        CoreModule,
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
