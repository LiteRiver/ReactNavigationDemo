import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import { LogoTitle } from '../component';

export default class ProfileScreen extends Component {
  static navigationOptions = ({ navigation, navigationOptions, screenProps }) => {
    const showLogoTitle = navigation.getParam('showLogoTitle', false);

    return {
      headerStyle: {
        backgroundColor: 'green'
      },
      headerTitle: showLogoTitle ? <LogoTitle title="test logo title" /> : null,
      headerRight: (
        <Button title="+1" onPress={navigation.getParam('increaseCount', () => { })} color="#fff" />
      )
    };
  };


  componentDidMount() {
    this.props.navigation.setParams({ increaseCount: this._increaseCount });
  }

  state = {
    count: 0
  }

  _increaseCount = () => {
    this.setState({ count: this.state.count + 1 });
  }

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
        <Button title="Show Logo Title" onPress={() => { setParams({ showLogoTitle: true }); }} />
        <Text>{this.state.count}</Text>
      </View>
    );
  }


}