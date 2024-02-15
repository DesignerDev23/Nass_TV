// CustomHeader.js
import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const CustomHeader = ({ navigation, title }) => {
  return {
    headerTitle: () => (
      <View style={styles.searchBox}>
        <TextInput
          style={styles.input}
          onChangeText={(text) => {
            // Add your logic for handling search input
          }}
        />
        <Ionicons name="search" size={20} color="#00923F" style={styles.searchIcon} />
      </View>
    ),
  };
};

const styles = StyleSheet.create({
  searchBox: {
    flexDirection: 'row',
    width: '185%',
    alignItems: 'center',
    backgroundColor: ' rgba(0, 146, 63, 0.1)',
    marginRight: 64,
    borderRadius: 10,
    paddingHorizontal: 12,
    borderColor: '#00923F',
  },
  input: {
    flex: 1,
    height: 40,
    paddingHorizontal: 10,
  },
  searchIcon: {
    marginHorizontal: 8,
  },
});

export default CustomHeader;
