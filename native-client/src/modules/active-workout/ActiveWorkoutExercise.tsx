import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { getTheme } from '../core/getTheme';
import { ExerciseType, WorkoutTemplateExerciseModel } from '../core/workout-template.model';


export type ActiveWorkoutExerciseSet = {
    orderId: number;
} & ({
    exerciseType: ExerciseType.REPETITION;
    weight: number | null;
    repetition: number | null;
} | {
    exerciseType: ExerciseType.DURATION;
    weight: number | null;
    duration: number | null;
})

interface Props {
    name: string;
    exerciseType: ExerciseType;
    sets: ActiveWorkoutExerciseSet[];
}

export const ActiveWorkoutExercise = ({ name, sets }: Props) => {
    return <View style={styles.container}>
        <Text style={styles.name}>{name}</Text>
        <View>
            {sets.map((set) => (
                <Set {...set} />
            ))}
        </View>
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

type SetProps = ActiveWorkoutExerciseSet;

const Set = (props: SetProps) => {
    const { orderId, exerciseType } = props;
    if (exerciseType === ExerciseType.REPETITION) {
        return <RepetitionSet orderId={orderId} weight={props.weight} repCount={props.repetition} />
    } else if (exerciseType === ExerciseType.DURATION) {
        return <DurationSet orderId={orderId} weight={props.weight} duration={props.duration} />
    } else {
        throw new Error(`ExerciseType not expected: ${exerciseType}`)
    }
}

interface RepititionSetProps {
    orderId: number;
    weight: number | null;
    repCount: number | null;
}

const RepetitionSet = ({ orderId, weight, repCount }: RepititionSetProps) => {
    return <View style={setStyles.container}>
        <View><Text>{orderId}</Text></View>
        <View style={setStyles.inputContainer}><Text>{weight}</Text></View>
        <View style={setStyles.inputContainer}><Text>{repCount}</Text></View>
    </View>;
}

interface DurationSetProps {
    orderId: number;
    weight: number | null;
    duration: number | null;
}

const DurationSet = ({ orderId, weight, duration }: DurationSetProps) => {
    return <Text>Not implemented!</Text>
}

const setStyles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row'
    },
    inputContainer: {
        backgroundColor: getTheme().colors.lightGray,
        width: 50
    }
})