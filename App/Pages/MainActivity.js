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

const TabNavigatorStack = TabNavigator({
  Home: { screen: Home },
  QRpage: {screen: QRpage },
  Profile: { screen: Profile },
});

export default class MainActivity extends React.Component {
  render() {
    return <TabNavigatorStack />;
  }
}
