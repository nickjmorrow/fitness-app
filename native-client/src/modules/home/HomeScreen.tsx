import React from 'react';
import { View, Text } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../core/root-stack-param-list.type';
import { BottomNavigation } from '../core/BottomNavigation.tsx';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

export const HomeScreen = ({ navigation }: Props) => {
  console.log('HomeScreen.tsx');
  return (
    <View style={{ flex: 1, height: 100 }}>
      <Text>Hello, world!</Text>
    </View>
  );
};
