import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { AppSettingConfig } from "src/config/app-setting-config.type";
import { WorkoutEntryModel } from "./workout-entry.model";

@Injectable()
export class WorkoutEntryProvider {
    constructor(private readonly configService: ConfigService<AppSettingConfig, true>) { }

    getWorkoutEntries(): WorkoutEntryModel[] {
        const useTestData = this.configService.get('useTestData', { infer: true });

        if (useTestData) {
            return this.getWorkoutEntriesTestData();
        }
    }

    private getWorkoutEntriesTestData(): WorkoutEntryModel[] {
        return [
            {
                name: 'Legs',
                id: 'legs'
            },
            {
                name: 'Chest',
                id: 'chest'
            }
        ]
    }
}