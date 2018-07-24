import React, { Component } from 'react';
import { View } from 'react-native';

export default class Card extends Component {
  static defaultProps = {
    style: {
      backgroundColor: '#fff',
      padding: 10
    }
  };

  render() {
    const { children } = this.props;
    return (
      <View {...this.props}>
        {children}
      </View>
    );
  }
}

