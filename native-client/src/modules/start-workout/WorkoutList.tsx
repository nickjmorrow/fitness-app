import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useRecoilValue } from 'recoil';
import { currentWorkoutsQuery } from './state/workouts.state';
import { Workout } from './Workout';

export const WorkoutList = () => {
    const workouts = useRecoilValue(currentWorkoutsQuery);
    return (<View style={style.container}><View style={style.innerContainer}>
        {workouts.map(w => <Workout key={w.id} id={w.id} name={w.name} />)}
    </View></View>);
};

const style = StyleSheet.create({
    container: {
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'row',
    },
    innerContainer: {
        display: 'flex',
        flexDirection: 'row',
        marginHorizontal: 70,
    }
})
