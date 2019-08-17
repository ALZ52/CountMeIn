import React from 'react';
import {View, Text, Image} from 'react-native';

import styles from './Styles/LoginScreenStyle'
import imgLogo from '../Images/voting.png'

//Renders logo for login page
export default class Logo extends React.Component {
  render() {
  	return(
  			<View style = {styles.logoContainer}>
				<Image source = {imgLogo} style = {styles.logoImage}/>
				<Text style={styles.logoText}>CountMEin!</Text>
			</View>
  		)
	}
}