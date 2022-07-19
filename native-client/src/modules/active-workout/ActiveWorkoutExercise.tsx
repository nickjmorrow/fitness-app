import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { getTheme } from '../core/getTheme';
import { ExerciseType, WorkoutTemplateExerciseModel } from '../core/workout-template.model';

export type ActiveWorkoutRepetitionExerciseSet = {
    orderId: number;
    setId: string;
    exerciseType: ExerciseType.REPETITION;
    weight: number | null;
    repetition: number | null;
    onChangeWeightText: (weightText: number | null) => void;
    onChangeRepText: (repText: number | null) => void;
}

export type ActiveWorkoutDurationExerciseSet = {
    orderId: number;
    setId: string;
    exerciseType: ExerciseType.DURATION;
    weight: number | null;
    duration: number | null;
    onChangeWeightText: (weightText: number | null) => void;
}

export const isActiveWorkoutRepetitionExerciseSet = (set: ActiveWorkoutExerciseSet): set is ActiveWorkoutRepetitionExerciseSet => {
    return set.exerciseType === ExerciseType.REPETITION;
}

export const isActiveWorkoutDurationExerciseSet = (set: ActiveWorkoutExerciseSet): set is ActiveWorkoutDurationExerciseSet => {
    return set.exerciseType === ExerciseType.DURATION;
}


export type ActiveWorkoutExerciseSet = ActiveWorkoutRepetitionExerciseSet
    | ActiveWorkoutDurationExerciseSet;

export interface ActiveWorkoutExerciseProps {
    name: string;
    exerciseType: ExerciseType;
    sets: ActiveWorkoutExerciseSet[];
}

const CELL_WIDTH = '20%';
const CELL_MARGIN_HORIZONTAL = '5%';

const LEFT_CELL_WIDTH = 100;

export const ActiveWorkoutExercise = ({ name, sets, exerciseType }: ActiveWorkoutExerciseProps) => {
    const exerciseTypeToHeaderMapping = {
        [ExerciseType.REPETITION]: (
            <View style={styles.dynamicHeaderListContainer}>
                <View style={styles.individualHeaderContainer}><Text style={styles.headerText}>Weight</Text></View>
                <View style={styles.individualHeaderContainer}><Text style={styles.headerText}>Reps</Text></View>
            </View>
        ),
        [ExerciseType.DURATION]: (
            <View style={styles.dynamicHeaderListContainer}>
                <View style={styles.individualHeaderContainer}><Text style={styles.headerText}>Weight</Text></View>
                <View style={styles.individualHeaderContainer}><Text style={styles.headerText}>Dur</Text></View>
            </View>
        )
    }
    return <View style={styles.container}>
        <View style={styles.totalHeaderListContainer}>
            <View style={styles.nameContainer}>
                <Text style={styles.name}>{name}</Text>
            </View>
            {exerciseTypeToHeaderMapping[exerciseType]}
        </View>
        {sets.map((set) => (
            <Set key={set.setId} {...set} />
        ))}
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
    },
    nameContainer: {
        width: LEFT_CELL_WIDTH,
    },
    totalHeaderListContainer: {
        // backgroundColor: 'red',
        display: 'flex',
        flexDirection: 'row',
    },
    dynamicHeaderListContainer: {
        display: 'flex',
        flexDirection: 'row',
    },
    individualHeaderContainer: {
        width: '28%',
        marginHorizontal: CELL_MARGIN_HORIZONTAL,
    },
    headerText: {
        color: getTheme().typography.paragraph.color
    }
})

type SetProps = ActiveWorkoutExerciseSet;

const Set = (props: SetProps) => {
    const { orderId, exerciseType } = props;
    if (exerciseType === ExerciseType.REPETITION) {
        return <RepetitionSet orderId={orderId} weight={props.weight} repCount={props.repetition}
            onChangeWeightText={props.onChangeWeightText} onChangeRepText={props.onChangeRepText} />
    } else if (exerciseType === ExerciseType.DURATION) {
        return <DurationSet orderId={orderId} weight={props.weight} duration={props.duration} onChangeWeightText={props.onChangeWeightText} />
    } else {
        throw new Error(`ExerciseType not expected: ${exerciseType}`)
    }
}

interface RepititionSetProps {
    orderId: number;
    weight: number | null;
    repCount: number | null;
    onChangeWeightText: (weightText: number | null) => void;
    onChangeRepText: (repText: number | null) => void;
}

const RepetitionSet = ({ orderId, weight, repCount, onChangeWeightText: handleChangeWeightText, onChangeRepText: handleChangeRepText }: RepititionSetProps) => {
    return <View style={setStyles.container}>
        <View style={setStyles.orderIdContainer}><Text style={setStyles.orderIdText}>{orderId}</Text></View>
        <TextInput keyboardType={'numeric'} style={setStyles.inputContainer} value={weight?.toString() ?? ''} onChangeText={text => handleChangeWeightText(parseInt(text, 10))} />
        <TextInput keyboardType={'numeric'} style={setStyles.inputContainer} value={repCount?.toString() ?? ''} onChangeText={text => handleChangeRepText(parseInt(text, 10))} />
        <View style={setStyles.checkmark} />
    </View>;
}

interface DurationSetProps {
    orderId: number;
    weight: number | null;
    duration: number | null;
    onChangeWeightText: (weightText: number | null) => void;
}

const DurationSet = ({ orderId, weight, duration, onChangeWeightText: handleChangeWeightText }: DurationSetProps) => {
    return <View style={setStyles.container}>
        <View style={setStyles.orderIdContainer}><Text style={setStyles.orderIdText}>{orderId}</Text></View>
        <TextInput keyboardType={'numeric'} style={setStyles.inputContainer} value={weight?.toString() ?? ''} onChangeText={text => handleChangeWeightText(parseInt(text, 10))} />
        <View style={setStyles.inputContainer}><Text>{duration}</Text></View>
        <View style={setStyles.checkmark} />
    </View>;
}

const setStyles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        marginVertical: 10,
        borderWidth: 2,
        borderColor: 'blue'
    },
    inputContainer: {
        backgroundColor: getTheme().colors.grayscale.c1,
        width: CELL_WIDTH,
        marginHorizontal: CELL_MARGIN_HORIZONTAL,
        color: getTheme().typography.paragraph.color
    },
    orderIdContainer: {
        width: LEFT_CELL_WIDTH
    },
    orderIdText: {
        color: getTheme().typography.paragraph.color
    },
    checkmark: {
        width: '10%',
        backgroundColor: 'green'
    }
})