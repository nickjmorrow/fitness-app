import React from 'react';
import { Text, View } from 'react-native';
import { useRecoilValue } from 'recoil';
import { currentWorkoutsQuery } from './state/workouts.state';
import { Workout } from './Workout';

export const WorkoutList = () => {
    const workouts = useRecoilValue(currentWorkoutsQuery);
    return <View>
        {workouts.map(w => <Workout key={w.id} id={w.id} name={w.name} />)}
    </View>;
};
