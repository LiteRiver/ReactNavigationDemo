import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import HomeScreen from './screen/HomeScreen';
import ProfileScreen from './screen/ProfileScreen';

const App = createStackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      title: 'Home'
    }
  },
  Profile: {
    screen: ProfileScreen,
    navigationOptions: ({ navigation, navigationOptions, screenProps }) => {
      const owner = navigation.getParam('owner', '').trim();
      return {
        title: `${owner === '' && '' || `${owner} `}Profile`
      };
    }
  }
}, {
    initialRouteName: 'Home',
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

export default App;