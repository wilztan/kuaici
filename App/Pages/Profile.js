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
  FlatList,
  ScrollView,
  View
} from 'react-native';
import Header from './../Components/Header';
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
  }
]

type Props = {};
export default class Profile extends Component<Props> {
  constructor(props){
    super(props);
    this.state ={
      food:item
    }
  }
  render() {
    return (
      <ScrollView style={styles.container}>
        <View>
          <Header/>
          <Text>Your Previous Transaction</Text>
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
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
});
