import "react-native-gesture-handler";
import React from "react";
import {ThemeProvider} from 'styled-components';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {useThemeProvider} from './src/contexts/theme-provider/theme-provider';
import {NavigationContainer} from '@react-navigation/native';
import AppAuthContainer from 'src/app-auth-provider';

if (__DEV__) {
  import('src/config/ReactotronConfig').then(() =>
    console.log('Reactotron Configured'),
  );
}

const App = () => {
  const {theme} = useThemeProvider();

  return (
    <ThemeProvider theme={theme}>
      <SafeAreaProvider>
        <NavigationContainer>
          <AppAuthContainer />
        </NavigationContainer>
      </SafeAreaProvider>
    </ThemeProvider>
  );
};

export default App;
