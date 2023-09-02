/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {useColorScheme} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Provider as PaperProvider} from 'react-native-paper';
import MainStack from './MainStack';

let App = () => {
  const currentTheme = useColorScheme();
  //const isHermes = () => !!global.HermesInternal;
  //ignoreAppWarningLogs();

  // useEffect(() => {
  //   AppSentry.start();
  // }, []);

  return (
    <SafeAreaProvider>
      <PaperProvider>
        <MainStack currentTheme={currentTheme} />
      </PaperProvider>
    </SafeAreaProvider>
  );
};
// let codePushOptions = {
//   updateDialog: true, // show button IGNORE when not use mode -m (-m is force update)
//   checkFrequency: codePush.CheckFrequency.ON_APP_RESUME,
//   installMode: codePush.InstallMode.IMMEDIATE,
//   //Message: An update is available that must be installed.
//   //Ref message: https://github.com/microsoft/react-native-code-push/blob/master/docs/api-js.md
// };
// App = codePush(codePushOptions)(App);
export default App;
