import React from 'react';
import { Text, View } from 'react-native';

interface Props {
  id: string;
  name: string;
}

export const Workout = ({ id, name }: Props) => {
  return (
    <View>
      <Text>{name}</Text>
    </View>
  );
};
