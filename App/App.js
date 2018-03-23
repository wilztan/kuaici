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
  ScrollView,
  View,
  Button
} from 'react-native';
import {
  StackNavigator
} from 'react-navigation';

import MainActivity from './Pages/MainActivity';
import Menu from './Pages/Menu';
import SeatPick from './Pages/SeatPick';

const RootStack = StackNavigator(
  {
    Main: {
      screen: MainActivity,
    }
  },
  {
    initialRouteName: 'Main',
    navigationOptions: {
      headerStyle: {
      },
    }
  },
);

export default class App extends React.Component {
  render() {
    return (
      <RootStack />
    );
  }
}
