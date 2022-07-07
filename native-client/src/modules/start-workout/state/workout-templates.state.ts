import { selector } from "recoil";
import { serverUrls } from "../../core/server-urls";
import { WorkoutTemplateModel } from "../../core/workout-template.model";

export const currentWorkoutTemplatesQuery = selector({
    key: 'CurrentWorkoutTemplates',
    get: async (): Promise<WorkoutTemplateModel[]> => await serverUrls.workout.getWorkoutTemplates()
})