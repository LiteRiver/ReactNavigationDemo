import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import { FontAwesome } from '@expo/vector-icons';
import HomeScreen from './screen/HomeScreen';
import ProfileScreen from './screen/ProfileScreen';
import ShareScreen from './screen/ShareScreen';
import SettingScreen from './screen/SettingScreen';

const HomeStack = createStackNavigator({
  Home: {
    screen: HomeScreen
  }
});

HomeStack.navigationOptions = {
  tabBarLabel: 'Home!',
  tabBarIcon: ({focused, tintColor}) => {  
    if (focused) {
      return (<FontAwesome name="home" size={22} style={{ color: '#ff3d3c' }} />);
    } else {
      return (<FontAwesome name="home" size={22} style={{ color: tintColor }} />)
    }    
  }
};

const TabStack = createBottomTabNavigator({
  Home: HomeStack,
  Setting: SettingScreen
});

TabStack.navigationOptions = ({ navigation }) => {
  let { routeName } = navigation.state.routes[navigation.state.index];

  console.log(navigation.state);

  // You can do whatever you like here to pick the title based on the route name
  let headerTitle = routeName;

  return {
    header: null,
    tabBarTitle: 'hello'
  };
}

const MainStack = createStackNavigator({
  Tab: TabStack,
  Profile: {
    screen: ProfileScreen,
    navigationOptions: ({ navigation, navigationOptions, screenProps }) => {
      const owner = navigation.getParam('owner', '').trim();
      return {
        title: `${owner === '' && '' || `${owner} `}Profile`,
        headerTintColor: 'blue'
      };
    }
  }
}, {
    initialRouteName: 'Tab',
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#ff3d3c'
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold'
      }
    }
  });

  const App = createStackNavigator({
    Main: MainStack,
    Share: ShareScreen
  }, {
    mode: 'modal',
    headerMode: 'none'
  });

export default App;