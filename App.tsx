/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import PagerView from 'react-native-pager-view';

function App(): JSX.Element {
  return (
    <View style={styles.backgroundContainer}>
      <View style={{flex: 1}}>
        <Text>Sample text</Text>
      </View>
      <PagerView style={styles.pagerViewContainer} initialPage={0}>
        <View key={1}>
          <Text style={styles.pagerViewDataText}>Sample data1</Text>
        </View>
        <View key={2}>
          <Text style={styles.pagerViewDataText}>Sample data2</Text>
        </View>
      </PagerView>
    </View>
  );
}
const styles = StyleSheet.create({
  backgroundContainer: {
    backgroundColor: 'black',
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  mainActionContainer: {
    margin: 10,
    padding: 10,
  },
  mainActionText: {
    fontSize: 30,
    fontWeight: '600',
    color: 'white',
  },
  pagerViewDataText: {
    color: 'white',
    fontSize: 20,
  },
  pagerViewContainer: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: 'red',
  },
});
export default App;
