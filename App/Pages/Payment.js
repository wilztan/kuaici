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
  Button,
  View
} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class Payment extends Component<Props> {
  render() {
    const price = (this.props.price=='')? "1000Y" : this.props.price;
    return (
      <View style={styles.container}>
        <Text>You Need to Pay</Text>
        <Text style={styles.paymentPrice}>1000 Y{price}</Text>
        <Button
          title="Pay Now"
          onPress={()=>alert('Paid')}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  paymentPrice:{
    fontSize:50,
    textAlign:'center',
    fontWeight:'bold'
  }
});
