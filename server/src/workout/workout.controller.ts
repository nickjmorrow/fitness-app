import { Controller, Get } from '@nestjs/common';
import { WorkoutEntryProvider } from './workout-entry-provider.service';
import { WorkoutEntryModel } from './workout-entry.model';
import { WorkoutTemplateModel } from './workout-template.model';
import { WorkoutTemplateService } from './workout-template.service';

interface GetWorkoutTemplatesDto {
    workoutTemplates: WorkoutTemplateModel[];
}

interface GetWorkoutEntriesDto {
    workoutEntries: WorkoutEntryModel[];
}

@Controller('workout')
export class WorkoutController {
    constructor(
        private readonly workoutTemplateService: WorkoutTemplateService,
        private readonly workoutEntryProvider: WorkoutEntryProvider,
    ) {}

    @Get('/workout-entries')
    getWorkoutEntries(): GetWorkoutEntriesDto {
        const workoutEntries = this.workoutEntryProvider.getWorkoutEntries();
        return { workoutEntries };
    }

    @Get('/workout-templates')
    async getWorkoutTemplates(): Promise<GetWorkoutTemplatesDto> {
        const workoutTemplates = await this.workoutTemplateService.getWorkoutTemplates();
        return { workoutTemplates };
    }
}
