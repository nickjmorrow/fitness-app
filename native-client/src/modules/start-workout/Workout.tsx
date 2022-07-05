import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { getTheme } from '../core/getTheme';

interface Props {
  id: string;
  name: string;
}

export const Workout = ({ id, name }: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '50%',
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
    color: getTheme().typography.title
  }
})