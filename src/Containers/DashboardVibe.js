import React from 'react';
import {Platform, StyleSheet, Text, View, ScrollView,Image} from 'react-native';
import { connect } from 'react-redux' 
import Emoji from 'react-native-emoji'

import styles from './Styles/VibeDashboardStyles'


import sunIcon from '../Images/sun.jpg'


//Calls redux Navigation and notification setup 
class DashboardVibe extends React.Component {
  render() {
    return(
      <View style={styles.container}>
      		<ScrollView>
      		<View style = {styles.subContainer}>
				<View style={styles.cardShaddow1}/>
				<View style={styles.cardShaddow2}/>
				<Image 
					style = {styles.avatar}
					source ={sunIcon}
				/>
				<View style = {styles.card}>
					<Text style={styles.sectionHeading}>Do you feel stressed out?</Text>
					<Emoji name="disappointed" style={{fontSize:70,alignSelf:'center',padding:20}}/>
					<Emoji name="smile" style={{fontSize:70,alignSelf:'center',padding:20}}/> 
				</View>
				
			</View>
        	</ScrollView>
      </View>
    );
  }
}




export default connect()(DashboardVibe)