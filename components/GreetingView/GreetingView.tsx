import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {GreetingViewPropType} from '../../types/GreetingViewPropType';
const GreetingView = ({initialText}: GreetingViewPropType) => {
  return (
    <View style={styles.greetingViewContainer}>
      <Text style={styles.greetingViewText}>{initialText}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  greetingViewContainer: {
    flex: 1,
    marginBottom: 10,
    padding: 10,
    justifyContent: 'center',
  },
  greetingViewText: {
    fontSize: 30,
    fontWeight: '600',
    color: 'white',
  },
});
export default GreetingView;
