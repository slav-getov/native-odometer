import React from 'react';
import PagerView from 'react-native-pager-view';
import {View, Text, StyleSheet} from 'react-native';
import PagerCarouselItem from './PagerCarouselItem';
const PagerCarousel = () => {
  return (
    <PagerView style={styles.pagerViewContainer} initialPage={0}>
      <View style={styles.pageViewSingleCard} key={1}>
        <Text style={styles.pagerViewDataText}>Sample data1</Text>
      </View>
      <PagerCarouselItem key={2} />
    </PagerView>
  );
};
const styles = StyleSheet.create({
  pageViewSingleCard: {
    padding: 20,
    borderWidth: 3,
    borderColor: 'gray',
  },
  pagerViewDataText: {
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
  },
  pagerViewContainer: {
    flex: 4,
    alignSelf: 'stretch',
  },
});
export default PagerCarousel;
