import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { getTheme } from '../core/getTheme';
import { WorkoutList } from './WorkoutList';

export const StartWorkoutScreen = () => {
  return <View style={styles.container}>
    <Text>Workouts</Text>
    <React.Suspense fallback={<Text>Loading...</Text>}>
      <WorkoutList />
    </React.Suspense>
  </View>;
};

const styles = StyleSheet.create({
  container: {
    minHeight: '100%',
    backgroundColor: getTheme().colors.background,
    display: 'flex'
  }
})
