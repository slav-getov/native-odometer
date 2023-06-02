import React from 'react';
import {Pressable, View, Text, StyleSheet} from 'react-native';
import {PagerCarouselButtonPropType} from '../../types/PagerCarouselButtonPropType';

const PagerCarouselButton = ({buttonText}: PagerCarouselButtonPropType) => {
  return (
    <Pressable
      onPress={() => {
        console.log('pressed');
      }}>
      <View style={styles.buttonWrapper}>
        <Text style={styles.buttonTextFill}>{buttonText}</Text>
      </View>
    </Pressable>
  );
};
const styles = StyleSheet.create({
  buttonWrapper: {
    borderRadius: 10,
    padding: 5,
    borderWidth: 2,
    borderColor: 'white',
    fontSize: 10,
    width: '40%',
  },
  buttonTextFill: {
    color: 'white',
    textAlign: 'center',
  },
});
export default PagerCarouselButton;
