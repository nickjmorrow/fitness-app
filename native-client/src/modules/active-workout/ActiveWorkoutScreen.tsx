import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { getTheme } from '../core/getTheme';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../core/root-stack-param-list.type';
import { Header } from '../core/Header';

interface OwnProps {
    workoutId: string;
}

type Props = OwnProps & NativeStackScreenProps<RootStackParamList, 'ActiveWorkout'>;


export const ActiveWorkoutScreen = ({ route }: Props) => {
    return <View style={styles.container}>
        <Header title={'Active Workout'} />
        <Text style={styles.text}>WorkoutId: {route.params.workoutId}</Text>
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
    }
})
