import React from 'react';
import {Text} from 'react-native';
import {NativeBaseProvider, Box} from 'native-base';
import {NavigationContainer} from '@react-navigation/native';
import MainNavigator from './src/navigation/MainNavigator';

const App = () => {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <MainNavigator />
      </NavigationContainer>
    </NativeBaseProvider>
  );
};

export default App;
