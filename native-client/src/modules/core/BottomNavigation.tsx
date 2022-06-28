import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { RootStackParamList } from './root-stack-param-list.type';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ExercisesScreen } from '../exercises/ExercisesScreen';
import { HistoryScreen } from '../history/HistoryScreen';
import { StartWorkoutScreen } from '../start-workout/StartWorkoutScreen';
import { HomeScreen } from '../home/HomeScreen';

const Tab = createBottomTabNavigator();

type Props = {
  navigation: NativeStackScreenProps<RootStackParamList>['navigation'];
};

export const BottomNavigation = ({ navigation }: Props) => {
  return (
    <Tab.Navigator initialRouteName="Home">
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="History" component={HistoryScreen} />
      <Tab.Screen name="StartWorkout" component={StartWorkoutScreen} />
      <Tab.Screen name="Exercises" component={ExercisesScreen} />
    </Tab.Navigator>
  );
};
