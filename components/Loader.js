// components/Loader.js
import React from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';

const Loader = ({ size = 'large', color = '#00923F', style }) => {
  return (
    <View style={[styles.loaderContainer, style]}>
      <ActivityIndicator size={size} color={color} />
    </View>
  );
};

const styles = StyleSheet.create({
  loaderContainer: {
    flex: 1,
    top: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Loader;
