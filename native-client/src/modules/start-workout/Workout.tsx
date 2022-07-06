import React from 'react';
import { StyleSheet, Text, View, Button, StyleProp, ViewStyle } from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';
import { getTheme } from '../core/getTheme';

interface Props {
  id: string;
  name: string;
  onPress: (workoutId: string) => void;
  style: StyleProp<ViewStyle>;
}

export const Workout = ({ id, name, onPress: handlePress, style }: Props) => {
  return (
    <TouchableHighlight style={[styles.container, style]} onPress={() => handlePress(id)}>
      <Text style={styles.title}>{name}</Text>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 120,
    height: 90,
    backgroundColor: getTheme().colors.background,
    borderColor: getTheme().colors.lightGray,
    borderWidth: 1,
    borderStyle: 'solid',
    marginTop: 30,
    borderRadius: 10,
    padding: 6
  },
  title: {
    color: getTheme().typography.title.color
  }
})