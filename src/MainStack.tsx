import {ColorSchemeName} from 'react-native';
import React, {useEffect} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootStackParamList} from './navigation/type';
import {NavigationContainer} from '@react-navigation/native';
import SplashScreen from 'react-native-splash-screen';
import {allScreenBeforeLogin} from './navigation';
import {Themes} from './themes/themes';

interface Props {
  currentTheme: ColorSchemeName;
}

const RootStack = createNativeStackNavigator<RootStackParamList>();

const MainStack: React.FC<Props> = ({currentTheme}) => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <NavigationContainer
      theme={currentTheme === 'dark' ? Themes.dark : Themes.light}>
      <RootStack.Navigator
        initialRouteName="Home"
        screenOptions={{
          gestureEnabled: false,
          headerShown: false,
        }}>
        {allScreenBeforeLogin.map(item => (
          <RootStack.Screen
            key={item.name}
            name={item.name}
            component={item.component}
          />
        ))}
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default MainStack;
