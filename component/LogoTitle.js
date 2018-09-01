import React, { Component } from 'react';
import { ImageBackground, Text } from 'react-native';

export default class LogoTitle extends Component {
  render () {
    const {title} = this.props;
    return (
      <ImageBackground source={require('../image/logo-baidu.png')} style={{width: 140, height: 30}}>
        <Text>{title}</Text>
      </ImageBackground>
    );
  }
}