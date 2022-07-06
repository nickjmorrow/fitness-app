import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ActiveWorkoutScreen } from '../active-workout/ActiveWorkoutScreen';
import { getTheme } from '../core/getTheme';
import { WorkoutList } from './WorkoutList';
import { RootStackParamList } from '../core/root-stack-param-list.type';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Header } from '../core/Header';

type Props = {
    navigation: NativeStackScreenProps<RootStackParamList>['navigation'];
};

export const SelectWorkoutScreen = ({ navigation }: Props) => {
    return (<View style={styles.container}>
        <Header title={'Select Workout'} />
        <React.Suspense fallback={<Text>Loading...</Text>}>
            <WorkoutList onPress={(workoutId) => {
                navigation.navigate('ActiveWorkout', {
                    workoutId
                } as any);
            }} />
        </React.Suspense>
    </View>);
};

const styles = StyleSheet.create({
    container: {
        minHeight: '100%',
        backgroundColor: getTheme().colors.background,
        display: 'flex',
    },
    title: {
        color: getTheme().typography.title.color
    }
})
