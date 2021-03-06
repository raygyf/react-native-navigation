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

export default class Tab_2 extends Component {
  static navigationOptions = {
    tabBar: {
      lable: "Tab 2",
      icon: ({ tintColor }) => (
        <Image 
          source = {require("./images.icon.png")}
          style = {[styles.icon, {tintColor: tintColor}]}
        />
      ),
    },
  };
  render() {
    const { navigation } =  this.props.navigation;
    return (
      <View style = {styles.container}>
        <Text>Tab 2</Text>
         <Button 
          title = "Go to detail"
          onPress = {
            () => this.props.navigation.navigate('Detail', {myparam: 'from tab_2'})
          }
        />
      </View>
    );
  }
}