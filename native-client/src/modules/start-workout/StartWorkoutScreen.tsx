import React from 'react';
import { View, Text } from 'react-native';
import { WorkoutList } from './WorkoutList';

export const StartWorkoutScreen = () => {
  return <View>
    <React.Suspense fallback={<Text>Loading...</Text>}>
      <WorkoutList />
    </React.Suspense>
  </View>;
};
