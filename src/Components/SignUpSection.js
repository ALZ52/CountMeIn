import React, {Component} from 'react';
import Dimensions from 'Dimensions';
import { Alert, AppRegistry, Button, StyleSheet, View,TouchableOpacity,Text, Switch} from 'react-native';



const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;

import styles from './Styles/LoginScreenStyle'

export default class SignUpSection extends Component {

constructor() {
    super();

    this._onPress = this._onPress.bind(this);
  }

_onPress() {
    Alert.alert('You tapped the button!')
  }


  render() {
    return (
      <View style={styles.rbContainer}>
        <Text style={styles.rbText}>Remember Username:</Text>
        <Switch style ={{margin:10}}/>
        </View>
    )
  }
}




