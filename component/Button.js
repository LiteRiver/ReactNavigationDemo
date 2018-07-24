import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text, TouchableOpacity, StyleSheet, ViewPropTypes } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export default class Button extends Component {
  static propTypes = {
    title: PropTypes.string,
    icon: PropTypes.string,
    onPress: PropTypes.func.isRequired,
    buttonStyle: ViewPropTypes.style,
    iconStyle: ViewPropTypes.style,
    textStyle: ViewPropTypes.style
  };

  _renderIcon() {
    const { icon, iconStyle } = this.props;

    if (icon) {
      return (<FontAwesome name={icon} style={[styles.iconStyle, iconStyle]} />);
    }
  }

  _renderTitle() {
    const { title, titleStyle } = this.props;

    if (title) {
      return (<Text style={[styles.titleStyle, titleStyle]}>{title}</Text>);
    }
  }

  render() {
    const { onPress, buttonStyle } = this.props;

    return (
      <TouchableOpacity onPress={onPress}>
        <View style={[styles.buttonStyle, buttonStyle]}>
          {this._renderIcon()}
          {this._renderTitle()}
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  buttonStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    borderRadius: 3,
    backgroundColor: '#ff3d3c',
    paddingHorizontal: 12,
    paddingVertical: 6
  },
  iconStyle: {
    width: 35,
    marginRight: 20,
    fontSize: 24,
    color: '#fff',
    textAlign: 'center'
  },
  titleStyle: {
    color: '#fff',
    fontSize: 22
  }
});