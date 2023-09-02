/* eslint-disable @typescript-eslint/no-unused-vars */
import {Button, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import * as Icons from './Icons';
import {PropsScreen} from '~/navigation/type';
import {useTheme} from '@react-navigation/native';
import useBoundStore from '~/stores';

const HomeScreen: React.FC<PropsScreen> = ({navigation, route}) => {
  const theme = useTheme();
  const {getFish, getFish2, fishes, fishes2, addFish} = useBoundStore();

  //navigation.navigate('Home', {id: '1'});
  return (
    <View style={styles.container}>
      <Text style={{color: theme.colors.text}}>{getFish()}</Text>
      <Text style={{color: theme.colors.text}}>{getFish2()}</Text>
      <Text style={{color: theme.colors.primary}}>{fishes}</Text>
      <Text style={{color: theme.colors.primary}}>{fishes2}</Text>
      <Icons.TestIco fill={'red'} />
      <Button
        title="Add"
        onPress={() => {
          addFish();
          navigation.navigate('Welcome');
        }}
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {alignItems: 'center', justifyContent: 'center'},
});
