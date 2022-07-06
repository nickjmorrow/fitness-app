import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ActiveWorkoutScreen } from '../active-workout/ActiveWorkoutScreen';
import { getTheme } from '../core/getTheme';
import { RootStackParamList } from '../core/root-stack-param-list.type';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

type Props = {
    title: string;
};

export const Header = ({ title }: Props) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 160,
        backgroundColor: getTheme().colors.background,
        display: 'flex',
    },
    title: {
        fontSize: getTheme().typography.title.fontSize,
        color: getTheme().typography.title.color,
        position: 'absolute',
        bottom: 20,
        left: 20
    }
})
