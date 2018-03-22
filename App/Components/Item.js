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
  View,
  TouchableHighlight,
} from 'react-native';


type Props = {};
export default class Item extends Component<Props> {
  render() {
    return (
      <TouchableHighlight>
        <Text>{this.props.children}</Text>
      </TouchableHighlight>
    );
  }
}

const styles = StyleSheet.create({

});
