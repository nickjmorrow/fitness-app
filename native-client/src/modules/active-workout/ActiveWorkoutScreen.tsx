import React from 'react';
import { View, Text, StyleSheet, Button, ScrollView } from 'react-native';
import { getTheme } from '../core/getTheme';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../core/root-stack-param-list.type';
import { Header } from '../core/Header';
import { currentWorkoutTemplatesQuery } from '../start-workout/state/workout-templates.state';
import { useRecoilValue } from 'recoil';
import { ActiveWorkoutExercise, ActiveWorkoutExerciseSet, ActiveWorkoutRepetitionExerciseSet, isActiveWorkoutRepetitionExerciseSet } from './ActiveWorkoutExercise';
import { ExerciseType } from '../core/workout-template.model';
import produce from 'immer';
import { WritableDraft } from 'immer/dist/types/types-external';

interface OwnProps {
    workoutId: string;
}

type Props = OwnProps & NativeStackScreenProps<RootStackParamList, 'ActiveWorkout'>;

export const ActiveWorkoutScreen = ({ route, navigation }: Props) => {
    const currentWorkoutTemplates = useRecoilValue(currentWorkoutTemplatesQuery);
    const activeWorkoutTemplate = currentWorkoutTemplates.find(cwt => cwt.id === route.params.workoutId)!;

    const exerciseTypeToActiveWorkoutExerciseSetMapping = () => ({
        [ExerciseType.REPETITION]: {
            repetition: null,
            exerciseType: ExerciseType.REPETITION,
        },
        [ExerciseType.DURATION]: {
            duration: null,
            exerciseType: ExerciseType.DURATION
        }
    }) as const;

    const initialActiveWorkoutState = {
        exercises: activeWorkoutTemplate.exercises.map(e => ({
            id: e.id,
            name: e.name,
            exerciseType: e.exerciseType,
            sets: e.sets.map((_, setIndex) => ({
                setId: `${setIndex + 1}`,
                orderId: setIndex + 1,
                weight: null as number | null,
                ...(exerciseTypeToActiveWorkoutExerciseSetMapping()[e.exerciseType])
            }))
        }))
    };
    const [currentActiveWorkoutState, setActiveWorkoutState] = React.useState(initialActiveWorkoutState);

    return <View style={styles.screenContainer}>
        <View style={styles.innerContainer}>
            <Header title={'Active Workout'} />
            <View style={styles.backButtonContainer}>
                <Button onPress={() => navigation.goBack()} title={'Back'} />
            </View>
            <View style={styles.workoutNameContainer}>
                <Text style={styles.workoutName}>{activeWorkoutTemplate.name}</Text>
            </View>
            <ScrollView style={styles.activeWorkoutExerciseListContainer}>
                {currentActiveWorkoutState.exercises.map(e => {
                    const sets: ActiveWorkoutExerciseSet[] = e.sets.map((s) => {
                        if (s.exerciseType === ExerciseType.REPETITION) {
                            return {
                                ...s,
                                onChangeWeightText: (weight: number | null) => setActiveWorkoutState(produce(currentActiveWorkoutState, draft => {
                                    draft.exercises.find(de => de.id === e.id)!.sets.find(ds => ds.setId === s.setId)!.weight = weight;
                                })),
                                onChangeRepText: (repCount: number | null) => setActiveWorkoutState(produce(currentActiveWorkoutState, draft => {
                                    const set = draft.exercises.find(de => de.id === e.id)!.sets.find(ds => ds.setId === s.setId) as WritableDraft<ActiveWorkoutRepetitionExerciseSet>;
                                    set.repetition = repCount;
                                })),
                            };
                        } else if (s.exerciseType === ExerciseType.DURATION) {
                            return {
                                ...s,
                                onChangeWeightText: (weight: number | null) => setActiveWorkoutState(produce(currentActiveWorkoutState, draft => {
                                    const exerciseId = e.id;
                                    const setId = s.setId;
                                    draft.exercises.find(de => de.id === exerciseId)!.sets.find(ds => ds.setId === setId)!.weight = weight;
                                })),
                            }
                        } else {
                            throw new Error(`Unexpected exerciseType.`)
                        }
                    });

                    return (
                        <ActiveWorkoutExercise
                            sets={sets}
                            exerciseType={e.exerciseType}
                            name={e.name}
                            key={e.id}
                        />
                    )
                }
                )}
            </ScrollView>
        </View>
    </View>;
};

const styles = StyleSheet.create({
    screenContainer: {
        minHeight: '100%',
        backgroundColor: getTheme().colors.background,
        display: 'flex',
        alignItems: 'center',
    },
    backButtonContainer: {
        width: '100%',
        display: 'flex',
        alignItems: 'flex-start',
    },
    backButton: {
        backgroundColor: 'red',
    },
    innerContainer: {
        width: '90%',
    },
    text: {
        color: 'white'
    },
    workoutNameContainer: {
        display: 'flex',
        alignItems: 'flex-start',
        width: '100%',
        marginBottom: 12
    },
    workoutName: {
        fontSize: 24,
        color: getTheme().typography.title.color
    },
    activeWorkoutExerciseListContainer: {
        display: 'flex',
        borderWidth: 1,
    }
})
