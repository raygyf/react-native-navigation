/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';

import { TabNavigator } from 'react-navigation';
import { StackNavigator } from 'react-navigation';

import Tab_1 from './Tab_1';
import Tab_2 from './Tab_2';
import Detail from './Detail';

const MyTab = TabNavigator({
  Tab_1: {screen: Tab_1},
  Tab_2: {screen: Tab_2},
},
{
  tabBarOptions: {
    activeTintColor: '#E91E63', 
    showIcon: true,
    labelStyle: {
      fontSize: 12,
    },
    style: {
      backgroundColor: '#CCC',
    }
  },
  tabBarPosition: 'bottom',
});

const MyApp = StackNavigator({
  Home: { screen: MyTab },
  Detail: { screen: Detail },
});

MyTab.navigationOptions = {
  title: 'My App',
};

AppRegistry.registerComponent('MyApp', () => MyApp);
