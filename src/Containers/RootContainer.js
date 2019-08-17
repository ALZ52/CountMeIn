import React from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import { connect } from 'react-redux' 
import ReduxNav from '../Navigation/ReduxNavigation';
import styles from './Styles/RootContainerStyles'



//Calls redux Navigation and notification setup 
class RootContainer extends React.Component {
  render() {
    return(
      <View style={styles.container}>
        <ReduxNav />
      </View>
    );
  }
}




export default connect()(RootContainer)