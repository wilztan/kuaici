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
  FlatList
} from 'react-native';
import Item from './../Components/Item';

const item = [
  {
    name:"KFC",
    price: "10000"
  },
  {
    name:"MCD",
    price: "20000"
  }
]

type Props = {};
export default class Home extends Component<Props> {
  constructor(props){
    super(props);
    this.state ={
      food:item
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit App.js
        </Text>
        <FlatList
          data={this.state.food}
          renderItem={({item,index}) =>
            <Item key={index}>{item.name}</Item>
          }
          keyExtractor={(item, index) => index}
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
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
