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
import axios from 'axios';
import { HomeScreen } from './src/modules/home/HomeScreen';
import { NavigationContainer } from '@react-navigation/native';
import { ExercisesScreen } from './src/modules/exercises/ExercisesScreen';
import { HistoryScreen } from './src/modules/history/HistoryScreen';
import { StartWorkoutScreen } from './src/modules/start-workout/StartWorkoutScreen';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { getBaseUrl } from './src/modules/core/getBaseUrl';
import { RecoilRoot } from 'recoil';

axios.defaults.baseURL = getBaseUrl();

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <RecoilRoot>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <NavigationContainer>
          <Tab.Navigator>
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="StartWorkout" component={StartWorkoutScreen} />
            <Tab.Screen name="Exercises" component={ExercisesScreen} />
            <Tab.Screen name="History" component={HistoryScreen} />
          </Tab.Navigator>
        </NavigationContainer>
      </GestureHandlerRootView>
    </RecoilRoot>
  );
};

export default App;
