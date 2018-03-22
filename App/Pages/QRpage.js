import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet
} from 'react-native';

import Camera from 'react-native-camera';

export default class QRpage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            qrcode: ''
        }
        this.onBarCodeRead = this.onBarCodeRead.bind(this);
    }

    onBarCodeRead(e){
      this.setState({qrcode: e.data});
      if(this.state.qrcode>0){
        this.props.navigation.navigate('Seats',
        {
          restaurantId: this.state.qrcode,
        });
      }
    }

    render () {
        return (
            <View  style={styles.container}>
              <Camera
                style={styles.preview}
                onBarCodeRead={this.onBarCodeRead}
                ref={cam => this.camera = cam}
                aspect={Camera.constants.Aspect.fill}
                >
                    <Text style={{
                        backgroundColor: 'white'
                    }}>{this.state.qrcode}</Text>
              </Camera>
            </View>
        )
    }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center'
  }
});
