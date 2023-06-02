import React from 'react';
import {Pressable, View, Text, StyleSheet} from 'react-native';
import {PagerCarouselButtonPropType} from '../../types/PagerCarouselButtonPropType';
let fontSizeDynamic = 10;
const PagerCarouselButton = ({buttonText}: PagerCarouselButtonPropType) => {
  return (
    <Pressable
      onHoverIn={() => {
        fontSizeDynamic += 10;
      }}
      onHoverOut={() => {
        fontSizeDynamic -= 10;
      }}>
      <View style={styles.buttonWrapper}>
        <Text style={styles.buttonTextFill}>{buttonText}</Text>
      </View>
    </Pressable>
  );
};
const styles = StyleSheet.create({
  buttonWrapper: {
    borderRadius: 4,
    padding: 5,
    border: 2,
    borderColor: 'gray',
    fontSize: fontSizeDynamic,
  },
  buttonTextFill: {
    color: 'white',
  },
});
export default PagerCarouselButton;
