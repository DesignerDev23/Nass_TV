import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, Linking } from 'react-native';
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons'; // Import MaterialCommunityIcons
// Make sure you have installed the '@expo/vector-icons' package

const Sidebar = ({ navigation }) => {
  const handleSidebarItemPress = (routeName) => {
    navigation.navigate(routeName);
  };

  const SocialMediaIcons = () => {
    const handleSocialMediaPress = (url) => {
      Linking.openURL(url).catch((err) => console.error('An error occurred', err));
    };

    return (
      <View style={styles.socialMediaContainer}>
        <TouchableOpacity onPress={() => handleSocialMediaPress('https://web.facebook.com/dailynews24ng')}>
          <MaterialCommunityIcons name="facebook" size={24} color="#4267B2" style={styles.socialMediaIcon} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleSocialMediaPress('https://twitter.com/dailynews24_NG')}>
          <MaterialCommunityIcons name="twitter" size={24} color="#1DA1F2" style={styles.socialMediaIcon} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleSocialMediaPress('https://instagram.com/dailynews24.ng/')}>
          <MaterialCommunityIcons name="instagram" size={24} color="#E4405F" style={styles.socialMediaIcon} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleSocialMediaPress('https://www.youtube.com/@DailyNews24TV')}>
          <MaterialCommunityIcons name="youtube" size={24} color="#E4405F" style={styles.socialMediaIcon} />
        </TouchableOpacity>
        {/* Add more social media icons as needed */}
      </View>
    );
  };

  const SidebarItem = ({ icon, text, onPress, backgroundColor }) => (
    <TouchableOpacity style={[styles.sidebarItemContainer, { backgroundColor }]} onPress={onPress}>
      <View style={styles.iconContainer}>
        {icon && <MaterialIcons name={icon} size={20} color="#fff" />}
      </View>
      <Text style={styles.sidebarItemText}>{text}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {/* Rounded App Icon and Text */}
      <View style={styles.appIconContainer}>
        <Image source={require('./assets/icon.png')} style={styles.appIcon} />
        <Text style={styles.appName}>Nasstv</Text>
      </View>

      {/* Sidebar Items */}
      <SidebarItem icon="info" text="About Us" onPress={() => handleSidebarItemPress('AboutUs')} backgroundColor="rgba(0, 146, 63, 0.2)" />
      <SidebarItem icon="contacts" text="Contact Us" onPress={() => handleSidebarItemPress('ContactUs')} backgroundColor="rgba(0, 146, 63, 0.2)" />
      {/* Privacy Policy */}
      <SidebarItem icon="privacy-tip" text="Privacy Policy" onPress={() => handleSidebarItemPress('PrivacyPolicy')} backgroundColor="rgba(0, 146, 63, 0.2)" />

      {/* Horizontal Line */}
      <View style={styles.horizontalLine} />
      
      {/* Social Media Section */}
      <Text style={styles.sectionTitle}>Follow Us</Text>
      <SocialMediaIcons />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  appIconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 60,
    marginTop: 36,
  },
  appIcon: {
    width: 50,
    height: 50,
    borderRadius: 10,
    margin: 10,
  },
  appName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  sidebarItemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    padding: 10,
    borderRadius: 8,
  },
  iconContainer: {
    width: 30,
    height: 30,
    borderRadius: 6,
    backgroundColor: '#00923F',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  sidebarItemText: {
    fontSize: 14.5,
    fontWeight: '800',
    color: '#00923F',
  },
  horizontalLine: {
    height: 1,
    backgroundColor: '#ddd',
    marginVertical: 16,
    marginTop: 260,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 16,
    marginBottom: 8,
  },
  socialMediaContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  socialMediaIcon: {
    padding: 8,
    borderRadius: 50,
    backgroundColor: '#f0f0f0',
  },
});

export default Sidebar;
