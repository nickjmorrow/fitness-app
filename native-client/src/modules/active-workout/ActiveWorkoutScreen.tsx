import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { getTheme } from '../core/getTheme';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../core/root-stack-param-list.type';
import { Header } from '../core/Header';
import { currentWorkoutTemplatesQuery } from '../start-workout/state/workout-templates.state';
import { useRecoilValue } from 'recoil';
import { ActiveWorkoutExercise } from './ActiveWorkoutExercise';

interface OwnProps {
    workoutId: string;
}

type Props = OwnProps & NativeStackScreenProps<RootStackParamList, 'ActiveWorkout'>;


export const ActiveWorkoutScreen = ({ route }: Props) => {
    const currentWorkoutTemplates = useRecoilValue(currentWorkoutTemplatesQuery);
    const activeWorkoutTemplate = currentWorkoutTemplates.find(cwt => cwt.id === route.params.workoutId)!;
    const initialActiveWorkoutState = {
        exercises: activeWorkoutTemplate.exercises.map(e => ({
            id: e.id,
            name: e.name,
            sets: e.sets
        }))
    };
    const [currentActiveWorkoutState, setActiveWorkoutState] = React.useState(initialActiveWorkoutState);
    return <View style={styles.container}>
        <Header title={'Active Workout'} />
        <Text style={styles.workoutName}>{activeWorkoutTemplate.name}</Text>
        {activeWorkoutTemplate.exercises.map(e => <ActiveWorkoutExercise name={e.name} key={e.id} />)}
    </View>;
};

const styles = StyleSheet.create({
    container: {
        minHeight: '100%',
        backgroundColor: getTheme().colors.background,
        display: 'flex'
    },
    text: {
        color: 'white'
    },
    workoutName: {
        fontSize: 24,
        color: getTheme().typography.title.color
    }
})
