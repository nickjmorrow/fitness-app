import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { getTheme } from '../core/getTheme';
import { Header } from '../core/Header';

export const ExercisesScreen = () => {
  return <View style={styles.container}><Header title={'Exercises'} /></View>;
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: getTheme().colors.background,
    flex: 1,
    height: 100
  }
})