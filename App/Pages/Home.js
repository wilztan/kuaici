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
  Image,
  FlatList
} from 'react-native';
import Item from './../Components/Item';

const item = [
  {
    name:"KFC",
    price: "18",
    image: require('./../Assets/img/kfc.png')
  },
  {
    name:"MCD",
    price: "20",
    image: require('./../Assets/img/mcd.png')
  },
  {
    name:"Warmindo",
    price: "10",
    image: require('./../Assets/img/warmindo.jpg')
  },
  {
    name:"Nasi Padang",
    price: "20000",
    image: require('./../Assets/img/nPadang.jpg')
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
        <Image
          source={require('./../Assets/img/food.jpg')}
        />
        <FlatList
          data={this.state.food}
          renderItem={({item,index}) =>
            <Item
              key={index.toString()}
              image={item.image}
              price={item.price}
              >{item.name}
            </Item>
          }
          keyExtractor={(item, index) => index.toString()}
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
