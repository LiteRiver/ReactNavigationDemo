import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, Card } from '../component';
import { FontAwesome } from '@expo/vector-icons';

export default class HomeScreen extends Component {
  static navigationOptions = {
    title: 'Home'
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Card>
          <Button onPress={() => navigate('Profile')} icon="facebook" title="Login with Facebook" buttonStyle={[styles.button, styles.facebook]} />
          <Button onPress={() => navigate('Profile')} icon="google-plus" title="Login with Google+" buttonStyle={[styles.button, styles.googlePlus]} />
        </Card>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'stretch',
    padding: 10
  },
  button: {
    justifyContent: 'center'
  },
  facebook: {
    backgroundColor: '#3b5998',
    marginBottom: 15
  },
  googlePlus: {
    backgroundColor: '#ff3d3c'
  }
});