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
function App(): JSX.Element {
  return (
    <View style={styles.backgroundContainer}>
      <GreetingView initialText="Choose template" />
      <PagerCarousel />
    </View>
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
