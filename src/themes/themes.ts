import {ExtendTheme} from '@react-navigation/native';
//Light theme
export const lightTheme: ExtendTheme = {
  dark: false,
  colors: {
    primary: '#16282b',
    background: 'white',
    card: '#FFFFFF',
    text: '#000000',
    //Border color
    border: '#000000',
    notification: '#000000',
    notification2: '#000000',
  },
};
//Dark theme
export const darkTheme: ExtendTheme = {
  dark: true,
  colors: {...lightTheme.colors, text: 'red'},
};
//Remox
//Light theme
export const lightRemoxTheme: ExtendTheme = {
  dark: false,
  colors: {
    ...lightTheme.colors,
  },
};
//Dark theme
export const darkRemoxTheme = {
  dark: true,
  colors: lightRemoxTheme.colors,
};
export const Themes = {
  light: true ? lightTheme : lightRemoxTheme,
  dark: true ? darkTheme : darkRemoxTheme,
};
