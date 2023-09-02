import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {PropsScreen} from '../../navigation/type';
import useBoundStore from '~/stores';

const WelcomeScreen: React.FC<PropsScreen> = () => {
  const {fishes} = useBoundStore();
  return (
    <View style={styles.a}>
      <Text>{fishes}</Text>
    </View>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  a: {},
});
