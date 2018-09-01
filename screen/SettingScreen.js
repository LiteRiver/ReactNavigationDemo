import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export default class SettingScreen extends Component {
  static navigationOptions = {
    title: 'Settings',
    tabBarLabel: 'Setting',
    tabBarIcon: <FontAwesome name="cog" size={22} />
  };
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Settings!</Text>
      </View>
    );
  }
}