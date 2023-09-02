import '@react-navigation/native'; //require import
/*
  - Document theme react navigation
  - Link: https://reactnavigation.org/docs/themes/
*/
declare module '@react-navigation/native' {
  export type ExtendTheme = {
    dark: boolean;
    colors: {
      //The primary color of the app used to tint various elements.
      //Usually you'll want to use your brand color for this.
      primary: string;
      //The color of various backgrounds,
      //such as background color for the screens.
      background: string;
      //The background color of card-like elements,
      //such as headers, tab bars etc.
      card: string;
      //The text color of various elements.
      text: string;
      //The color of borders, e.g. header border, tab bar border etc.
      border: string;
      notification: string;
      notification2: string;
    };
  };
  export function useTheme(): ExtendTheme;
}
