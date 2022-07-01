import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface Props {
  id: string;
  name: string;
}

export const Workout = ({ id, name }: Props) => {
  return (
    <View style={styles.container}>
      <Text>{name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 90,
    height: 40,
    backgroundColor: 'darkgray',
    margin: 10
  }
})