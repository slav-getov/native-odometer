/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {View, StyleSheet} from 'react-native';

import GreetingView from './components/GreetingView/GreetingView';
import PagerCarousel from './components/PagerCarousel/PagerCarousel';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
function App(): JSX.Element {
  return (
    <NavigationContainer>
      <View style={styles.backgroundContainer}>
        <GreetingView initialText="Choose template" />
        <PagerCarousel />
      </View>
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  backgroundContainer: {
    backgroundColor: 'black',
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 10,
  },
});
export default App;
