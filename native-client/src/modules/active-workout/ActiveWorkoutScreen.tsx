import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { getTheme } from '../core/getTheme';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../core/root-stack-param-list.type';
import { Header } from '../core/Header';
import { currentWorkoutTemplatesQuery } from '../start-workout/state/workout-templates.state';
import { useRecoilValue } from 'recoil';
import { ActiveWorkoutExercise, ActiveWorkoutExerciseSet } from './ActiveWorkoutExercise';
import { ExerciseType } from '../core/workout-template.model';

interface OwnProps {
    workoutId: string;
}

type Props = OwnProps & NativeStackScreenProps<RootStackParamList, 'ActiveWorkout'>;

export const ActiveWorkoutScreen = ({ route, navigation }: Props) => {
    const currentWorkoutTemplates = useRecoilValue(currentWorkoutTemplatesQuery);
    const activeWorkoutTemplate = currentWorkoutTemplates.find(cwt => cwt.id === route.params.workoutId)!;
    const initialActiveWorkoutState = {
        exercises: activeWorkoutTemplate.exercises.map(e => ({
            id: e.id,
            name: e.name,
            exerciseType: e.exerciseType,
            sets: e.sets.map((set, setIndex): ActiveWorkoutExerciseSet => ({
                orderId: setIndex + 1,
                weight: null,
                ...(e.exerciseType === ExerciseType.DURATION ? { duration: null, exerciseType: ExerciseType.DURATION } : { repetition: null, exerciseType: ExerciseType.REPETITION })
            }))
        }))
    };
    const [currentActiveWorkoutState, setActiveWorkoutState] = React.useState(initialActiveWorkoutState);

    return <View style={styles.container}>
        <Header title={'Active Workout'} />
        <Button onPress={() => navigation.goBack()} title={'Back'} />
        <Text style={styles.workoutName}>{activeWorkoutTemplate.name}</Text>
        {currentActiveWorkoutState.exercises.map(e => <ActiveWorkoutExercise sets={e.sets} exerciseType={e.exerciseType} name={e.name} key={e.id} />)}
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
