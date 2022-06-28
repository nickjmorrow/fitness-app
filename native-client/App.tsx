/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import {HomeScreen} from './src/modules/home/HomeScreen';
import {NavigationContainer} from '@react-navigation/native';
import {ExercisesScreen} from './src/modules/exercises/ExercisesScreen';
import {HistoryScreen} from './src/modules/history/HistoryScreen';
import {StartWorkoutScreen} from './src/modules/start-workout/StartWorkoutScreen';
import {createStackNavigator} from '@react-navigation/stack';

type RootStackParamList = {
  Home: undefined;
  History: undefined;
  StartWorkout: undefined;
  Exercises: undefined;
};

const RootStack = createStackNavigator<RootStackParamList>();

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <NavigationContainer>
      <RootStack.Navigator initialRouteName="Home">
        <RootStack.Screen name="Home" component={HomeScreen} />
        <RootStack.Screen name="History" component={HistoryScreen} />
        <RootStack.Screen name="Start Workout" component={StartWorkoutScreen} />
        <RootStack.Screen name="Exercises" component={ExercisesScreen} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
