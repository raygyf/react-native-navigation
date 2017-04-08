import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  Button,
  View,
  Image,
  StyleSheet,
} from 'react-native';

import './Styles';

export default class Detail extends Component {
  static navigationOptions = {
    title: ({ state }) => `Detail param: ${state.params.myparam}`,
  };
  render() {
    const { goBack } = this.props.navigation;
    return (
      <Button
        title = "Go back"
        onPress = {() => goBack()}
      />
    );
  }
}