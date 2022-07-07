import { ConfigService } from "@nestjs/config";
import { WorkoutTemplate } from "./workout-template.entity";
import { AppSettingConfig } from '../config/app-setting-config.type';
import { Injectable } from "@nestjs/common";
import { WorkoutTemplateModel } from "./workout-template.model";

@Injectable()
export class WorkoutTemplateProvider {
    constructor(private configService: ConfigService<AppSettingConfig, true>) { }

    getWorkoutTemplates(): WorkoutTemplateModel[] {
        const useTestData = this.configService.get('useTestData', { infer: true });

        if (useTestData) {
            return this.getWorkoutTemplateTestData();
        }
    }

    private getWorkoutTemplateTestData(): WorkoutTemplateModel[] {
        return [{ name: 'Legs', id: 'legs' }, { name: 'Chest', id: 'chest' }, { name: 'Back', id: 'back' }, { name: 'Arms', id: 'arms' }];
    }
}