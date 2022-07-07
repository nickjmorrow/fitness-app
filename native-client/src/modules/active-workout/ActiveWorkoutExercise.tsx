import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { getTheme } from '../core/getTheme';
import { WorkoutTemplateExerciseModel } from '../core/workout-template.model';

type Props = {
    name: string;
};

export const ActiveWorkoutExercise = ({ name }: Props) => {
    return <View style={styles.container}>
        <Text style={styles.name}>{name}</Text>
    </View>;
};

const styles = StyleSheet.create({
    container: {
    },
    workoutName: {
        fontSize: 24,
        color: getTheme().typography.title.color
    },
    name: {
        color: getTheme().typography.paragraph.color
    }
})
