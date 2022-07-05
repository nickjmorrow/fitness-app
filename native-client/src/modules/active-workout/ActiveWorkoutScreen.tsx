import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { getTheme } from '../core/getTheme';

export const ActiveWorkoutScreen = () => {
    return <View style={styles.container}>
        <Text>Active Workout</Text>
    </View>;
};

const styles = StyleSheet.create({
    container: {
        minHeight: '100%',
        backgroundColor: getTheme().colors.background,
        display: 'flex'
    }
})
