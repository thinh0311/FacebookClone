import HomeScreen from '~/screens/home';
import WelcomeScreen from '~/screens/welcome';
import {PropsScreen, RootStackParamList} from './type';
import React from 'react';

export interface IScreen {
  name: keyof RootStackParamList;
  component: React.FC<PropsScreen>;
}

export const allScreenBeforeLogin: IScreen[] = [
  {
    name: 'Home',
    component: HomeScreen,
  },
  {
    name: 'Welcome',
    component: WelcomeScreen,
  },
];
