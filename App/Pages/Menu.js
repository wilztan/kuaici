/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  FlatList,
  Text,
  Button,
  ScrollView,
  View
} from 'react-native';

import Item from './../Components/Item';

const listMenu =[
  {
    name:'Fried Chicken',
    price: 10,
    description: "Marinated Chicken Blended with original Spice",
    image: require('./../Assets/img/fc.jpg')
  },

  {
    name:'Fried Duck',
    price: 20,
    description: "Marinated Duck Blended with original Spice",
    image: require('./../Assets/img/fd.jpg')
  },
];

type Props = {};
export default class Menu extends Component<Props> {
  constructor(props){
    super(props);
    this.state={
      menu:listMenu,
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <View>
            <View>
              <FlatList
                data={this.state.menu}
                renderItem={({item,index}) =>
                  <Item key={index.toString()}
                    pressMethod={()=>alert(item.description)}
                    price={item.price}
                    image={item.image}
                    description={item.description}
                    name={item.name}
                  />
                }
                keyExtractor={(item, index) => index.toString()}
              />
            </View>
            <View style={styles.Checkout}>
              <Button
                title="Check Out"
                onPress={()=>{this.props.navigation.navigate('Payment')}}
              />
            </View>
          </View>
        </ScrollView>
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
  Checkout:{
    paddingTop:100,
  }
});
