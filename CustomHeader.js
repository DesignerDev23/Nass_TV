// CustomHeader.js
import React from 'react';
import { Image, TouchableOpacity, View } from 'react-native';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';

const CustomHeader = ({ navigation, title }) => {
  return {
    headerTitle: () => (
      <View style={{ flexDirection: 'row', alignItems: 'center', gap: 78, }}>
        {/* Drawer Toggle Icon */}
        {/* <TouchableOpacity
          style={{  }}
          onPress={() => navigation.toggleDrawer()}
        >
          <Ionicons name="menu" size={24} color="#00923F" />
        </TouchableOpacity> */}

    

        {/* Bell Icon */}
        <TouchableOpacity
          style={{ marginRight: 15 }}
          onPress={() => {
            // Add your logic for bell icon press
          }}
        >
          <FontAwesomeIcon name="bell-o" size={20} color="#00923F" />
        </TouchableOpacity>
      </View>
    ),
    headerTitleAlign: 'center',
    headerTitleStyle: {
      fontWeight: 'bold',
      fontSize: 20,
      // color: '#00923F',
    },
  };
};

export default CustomHeader;
