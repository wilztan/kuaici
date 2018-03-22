/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import {
  TabNavigator
} from 'react-navigation';


import Home from './Home';
import Profile from './Profile';
import QRpage from './QRpage';

const TabNavigatorStack = TabNavigator(
  {
    Scan: {screen: QRpage },
    Home: { screen: Home },
    Profile: { screen: Profile },
  },
  {
    initialRouteName: 'Home',
    backgroundColor: '#fff',
  }
);

export default class MainActivity extends React.Component {
  render() {
    return <TabNavigatorStack />;
  }
}
