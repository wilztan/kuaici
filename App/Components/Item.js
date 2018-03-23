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
  Image,
  View,
  Dimensions,
  TouchableHighlight,
} from 'react-native';


type Props = {};
export default class Item extends Component<Props> {
  render() {
    return (
      <TouchableHighlight
        onPress={()=>this.props.pressMethod}
        >
        <View
          style={styles.listView} >
          <Image
            source={this.props.image}
            style={{width:win.width * 2/5}}
            resizeMode="contain"
          />
          <View>
            <Text style={{width:win.width * 3/5}}>{this.props.name}</Text>
            <Text style={{width:win.width * 3/5}}>{this.props.children}</Text>
            <Text style={{width:win.width * 3/5}}>Price {this.props.price}</Text>
            {/* <Text style={{width:win.width * 3/5}}>{this.props.image}</Text> */}
          </View>
        </View>
      </TouchableHighlight>
    );
  }
}


const win = Dimensions.get('window');
const widthInContainer = win.width - 10;

const styles = StyleSheet.create({
  flatListView:{
    width: widthInContainer-10,
    marginLeft:10,
  },
  listView:{
    margin:1,
    backgroundColor:"#dddddd",
    flexDirection:"row",
  }
});
