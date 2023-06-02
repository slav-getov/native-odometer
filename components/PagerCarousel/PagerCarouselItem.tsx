import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import PagerCarouselButton from './PagerCarouselButton';
import {PagerCarouselItemPropType} from '../../types/PagerCarouselItemPropType';
const PagerCarouselItem = ({key}) => {
  return (
    <View style={styles.pageViewSingleCard} key={key}>
      <Text style={styles.pageViewDataText}>Experimental</Text>
      <PagerCarouselButton buttonText="Select" />
    </View>
  );
};
const styles = StyleSheet.create({
  pageViewSingleCard: {
    padding: 20,
    borderWidth: 2,
    borderColor: 'white',
    alignItems: 'center',
  },
  pageViewDataText: {
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
  },
});
export default PagerCarouselItem;
