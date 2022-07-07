import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useRecoilValue } from 'recoil';
import { currentWorkoutTemplatesQuery } from './state/workout-templates.state';
import { Workout } from './Workout';

interface Props {
    onPress: (workoutId: string) => void;
}

export const WorkoutList = ({ onPress: handlePress }: Props) => {
    const workouts = useRecoilValue(currentWorkoutTemplatesQuery);
    console.log(workouts);
    return (<View style={style.container}><View style={style.innerContainer}>
        {workouts.map((w, i) => <Workout style={i % 2 === 0 ? style.left : undefined} key={w.id} id={w.id} name={w.name} onPress={handlePress} />)}
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
        justifyContent: 'center',
        width: '100%',
        flexWrap: 'wrap'
    },
    left: {
        marginRight: 20
    }
})
