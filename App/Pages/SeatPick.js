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

type Props = {};
export default class SeatPick extends Component<Props> {
  render() {
    const { params } = this.props.navigation.state;
    const restaurantId = params ? params.restaurantId : null;
    return (
      <View style={styles.container}>
        <Text style={styles.instructions}>
          Restaurant Id : {restaurantId}
        </Text>
        <Text>
          Restaurant Name : Madame Fooda
        </Text>
        <Text>
          Pick Seat:
        </Text>
        <Button
          title="Pick Your Menu"
          onPress={() => this.props.navigation.navigate('Menu')}
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
