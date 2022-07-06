import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ActiveWorkoutScreen } from '../active-workout/ActiveWorkoutScreen';
import { getTheme } from '../core/getTheme';
import { WorkoutList } from './WorkoutList';
import { RootStackParamList } from '../core/root-stack-param-list.type';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { SelectWorkoutScreen } from './SelectWorkoutScreen';

const Stack = createNativeStackNavigator();

type Props = {
  navigation: NativeStackScreenProps<RootStackParamList>['navigation'];
};

export const StartWorkoutScreen = ({ navigation }: Props) => {
  return (<View style={styles.container}>
    <Stack.Navigator initialRouteName={'SelectWorkout'} screenOptions={{ headerShown: false }}>
      <Stack.Screen name="ActiveWorkout" component={ActiveWorkoutScreen} />
      <Stack.Screen name="SelectWorkout" component={SelectWorkoutScreen} />
    </Stack.Navigator>
  </View>);
};

const styles = StyleSheet.create({
  container: {
    minHeight: '100%',
    backgroundColor: getTheme().colors.background,
    display: 'flex'
  }
})
