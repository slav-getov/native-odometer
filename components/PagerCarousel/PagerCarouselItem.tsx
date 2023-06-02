import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import PagerCarouselButton from './PagerCarouselButton';
const PagerCarouselItem = ({key}) => {
  return (
    <View style={styles.pageViewSingleCard} key={key}>
      <Text>Experimental</Text>
      <PagerCarouselButton buttonText="Select" />
    </View>
  );
};
const styles = StyleSheet.create({
  pageViewSingleCard: {
    padding: 20,
  },
});
export default PagerCarouselItem;
