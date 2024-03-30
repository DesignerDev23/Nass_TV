// App.js
import React from 'react';
import { Image } from 'react-native';
import { useFonts } from '@expo-google-fonts/poppins';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import appStyles from './appStyles';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather, Ionicons, MaterialIcons } from '@expo/vector-icons';

// Custom Components
import CustomHeader from './CustomHeader';
import Sidebar from './Sidebar';
import { MaterialCommunityIcons } from '@expo/vector-icons';


// Screens
import HomeScreen from './screens/HomeScreen';
import ArticleScreen from './screens/ArticleScreen';
import AllPostsScreen from './screens/AllPostsScreen';
import YouTubeVideosScreen from './screens/YouTubeVideosScreen';
import AboutUsScreen from './screens/AboutUsScreen';
import ContactUsScreen from './screens/ContactUsScreen';
import PrivacyPolicyScreen from './screens/PrivacyPolicyScreen';
import NewsListScreen from './screens/NewsListScreen';
import VideoScreen from './screens/VideoScreen';
import TermsOfService from './screens/TermsOfService';



const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

const roundedAppIcon = require('./assets/head.png');


const HomeStack = () => (
  <Stack.Navigator  initialRouteName="Home"
  
>
    <Stack.Screen
      name="Home"
      component={HomeScreen}
      options={{
        headerShown: false,
      }}
     
    />
    <Stack.Screen
      name="Article"
      component={ArticleScreen}
      options={{
        headerShown: false,
      }}
    />
      <Stack.Screen name="Video" component={VideoScreen}
            options={{
        headerShown: false,
      }}
       /> 
  </Stack.Navigator>
);

const LikedNewsStack = () => (
    <Stack.Navigator  initialRouteName="YouTubeVideos"
  screenOptions={({ navigation }) => CustomHeader({ navigation })}
>
    <Stack.Screen
      name="YouTubeVideos"
      component={YouTubeVideosScreen}
      options={{
        headerTitle: 'YouTube Videos',
        headerTitleAlign: 'center',
        headerTitleStyle: {
          fontWeight: 'bold',
          fontSize: 20,
          color: '#00923F',
        },
      }}
    />
  </Stack.Navigator>
);

const NewsListStack = () => (
  <Stack.Navigator initialRouteName="NewsListScreen">
    <Stack.Screen
      name="NewsListScreen"
      component={NewsListScreen}
      options={({ route }) => ({
        title: `News List for ${route.params.category.name}`,
      })}
    />
  </Stack.Navigator>
);


const AllPostsStack = () => (
  <Stack.Navigator  initialRouteName="AllPostsStack "
>
    <Stack.Screen
      name="AllPostsScreen"
      component={AllPostsScreen}
      options={{
        headerShown: false,
      }}
   
    />
  </Stack.Navigator>
);





const YouTubeStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Youtube"
      component={YouTubeVideosScreen}
      options={{
        headerShown: false,
      }}
    />
  </Stack.Navigator>
);

const MainTabs = () => (
  <Tab.Navigator
    initialRouteName="Feed"
    tabBarOptions={{
      headerShown: 'false',
      activeTintColor: '#00923F',
      inactiveTintColor: 'gray',
      fontWeight: '600',
    }}
  >
    <Tab.Screen
      name="Feed"
      component={HomeStack}
      options={{
        headerShown: false,
        tabBarLabel: 'Home',
        tabBarIcon: ({ color, size }) => (
          <Feather name="home" color={color} size={size} />
        )
      }}
    />
    <Tab.Screen
      name="AllPostsScreen"
      component={AllPostsStack}
      options={{
        headerShown: false,
        tabBarLabel: 'News',
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="newspaper" color={color} size={size} />
        ),
      }}
    />
    <Tab.Screen
      name="YouTube"
      component={YouTubeStack}
      options={{
        headerShown: false,
        tabBarLabel: 'Videos',
        tabBarIcon: ({ color, size }) => (
          <MaterialIcons name="video-library" color={color} size={size} />
        ),
      }}
    />
  </Tab.Navigator>
);


const App = () => {
  const [fontsLoaded] = useFonts({
    'poppins-regular': require('./assets/fonts/Poppins-Regular.ttf'),
    'poppins-bold': require('./assets/fonts/Poppins-Bold.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <NavigationContainer>
    <Drawer.Navigator
      drawerContent={(props) => <Sidebar {...props} />}
      initialRouteName="Home"
  screenOptions={({ navigation }) => CustomHeader({ navigation })}
    >
      <Drawer.Screen name="MainTabs" component={MainTabs} />
        <Drawer.Screen name="AboutUs" component={AboutUsScreen} />
        <Drawer.Screen name="ContactUs" component={ContactUsScreen} />
        <Drawer.Screen name="PrivacyPolicy" component={PrivacyPolicyScreen} />
        <Drawer.Screen name="TermsOfService" component={TermsOfService} />
    </Drawer.Navigator>
  </NavigationContainer>
  );
};

export default App;
