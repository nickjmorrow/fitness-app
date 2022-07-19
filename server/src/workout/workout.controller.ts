import { Controller, Get } from '@nestjs/common';
import { WorkoutEntryProvider } from './workout-entry-provider.service';
import { WorkoutEntryModel } from './workout-entry.model';
import { WorkoutTemplateProvider } from './workout-template-provider.service';
import { WorkoutTemplateModel } from './workout-template.model';

interface GetWorkoutTemplatesDto {
    workoutTemplates: WorkoutTemplateModel[];
}

interface GetWorkoutEntriesDto {
    workoutEntries: WorkoutEntryModel[];
}

@Controller('workout')
export class WorkoutController {
    constructor(
        private readonly workoutTemplateProvider: WorkoutTemplateProvider,
        private readonly workoutEntryProvider: WorkoutEntryProvider,
    ) {}

    @Get('/workout-entries')
    getWorkoutEntries(): GetWorkoutEntriesDto {
        const workoutEntries = this.workoutEntryProvider.getWorkoutEntries();
        return { workoutEntries };
    }

    @Get('/workout-templates')
    getWorkoutTemplates(): GetWorkoutTemplatesDto {
        const workoutTemplates = this.workoutTemplateProvider.getWorkoutTemplates();
        return { workoutTemplates };
    }
}
