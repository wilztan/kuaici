import React, {Component} from 'react';
import {
  Text,
  View,
  Button,
  StyleSheet
} from 'react-native';
import {
  StackNavigator
} from 'react-navigation';
import Camera from 'react-native-camera';

/**
* Routing
*/
import Menu from './Menu';
import SeatPick from './SeatPick';
import Detail from './Detail';
import Payment from './Payment';

class QRscan extends Component {

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
        return (this.state.qrcode=='')?
        (
            <View  style={styles.container}>
              <Button
                title="seat Pick"
                onPress={
                  ()=>this.props.navigation.navigate('Seats',
                  {
                    restaurantId: 1,
                  })
                }
              />
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
        :
        <View
          style={styles.container}
          >
          <Button
            title="Scan Code"
            onPress={()=>this.setState({qrcode:''})}
          />
        </View>
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

const RootStack = StackNavigator(
  {
    Main: {
      screen: QRscan,
    },
    Seats:{
      screen: SeatPick,
    },
    Menu:{
      screen: Menu,
    },
    Payment:{
      screen: Payment,
    },
    Detail:{
      screen: Detail,
    }
  },
  {
    initialRouteName: 'Main',
    navigationOptions: {
      headerStyle: {
        display:"none",
      },
    },
  }
);

export default class QRpage extends React.Component {
  render() {
    return <RootStack />;
  }
}
