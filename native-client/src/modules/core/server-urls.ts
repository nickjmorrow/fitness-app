import axios from "axios";
import { WorkoutEntryModel } from "./workout-entry.model";
import { WorkoutTemplateModel } from "./workout-template.model";

interface GetWorkoutTemplatesDto {
    workoutTemplates: WorkoutTemplateModel[];
}

interface GetWorkoutEntriesDto {
    workoutEntries: WorkoutEntryModel[];
}


export const serverUrls = {
    workout: {
        getWorkoutEntries: async (): Promise<WorkoutEntryModel[]> => (await axios.get<GetWorkoutEntriesDto>('/workout/workout-entries')).data.workoutEntries,
        getWorkoutTemplates: async (): Promise<WorkoutTemplateModel[]> => (await axios.get<GetWorkoutTemplatesDto>('/workout/workout-templates')).data.workoutTemplates,
    }
}