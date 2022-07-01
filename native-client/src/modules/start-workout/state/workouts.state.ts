import axios from "axios";
import { selector } from "recoil";
import { Workout } from "../../core/workout.type";

export const currentWorkoutsQuery = selector({
    key: 'CurrentWorkouts',
    get: async () => {
        const { data: workouts } = await axios.get<Workout[]>('/workout');
        console.log(workouts);
        return workouts;
    }
})