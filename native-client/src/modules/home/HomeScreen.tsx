import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../core/root-stack-param-list.type';
import { Header } from '../core/Header';
import { getTheme } from '../core/getTheme';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

export const HomeScreen = ({ }: Props) => {
  return (
    <View style={styles.container}>
      <Header title={'Home'} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: getTheme().colors.background,
    flex: 1,
    height: 100
  }
})