import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

export default class ProfileScreen extends Component {
  render() {
    const { navigate, push, goBack, popToTop, setParams } = this.props.navigation;
    return (
      <View>
        <Button title="Home | navigate('Home')" onPress={() => { navigate('Home'); }} />
        <Button title="Profile | push('Profile')" onPress={() => { push('Profile'); }} />
        <Button title="My Profile | push('Profile', { owner: 'My' })" onPress={() => { push('Profile', { owner: 'My' }); }} />
        <Button title="Back | goBack()" onPress={() => { goBack(); }} />
        <Button title="Top | popToTop()" onPress={() => { popToTop(); }} />
        <Button title="Update | setParams({owner: 'Your'})" onPress={() => { setParams({ owner: 'Your' }); }} />
      </View>
    );
  }
}