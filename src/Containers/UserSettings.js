//List of meetings you can search through, with deep filters
import React from 'react';

import { ScrollView, Switch, StyleSheet, Text, View,Alert,Image } from 'react-native'
import { Avatar, ListItem, Icon} from 'react-native-elements'

import styles from './Styles/AdminSettingsStyles'
import Details from '../Components/SettingsDetails'

import userData from '../Data/user.json'
class AdminSettings extends React.Component{

	constructor (props) {
    super(props)

    	const pushNotifications = true 

    	this.state = { pushNotifications } 
  	}

  	onPressOptions = () => {
    //this.props.navigation.navigate('options')
    	Alert.alert('checked')
  	}

  onChangePushNotifications = () => {
   Alert.alert('checked') 
    /*this.setState(state => ({
      pushNotifications: !state.pushNotifications,
    }))*/
  }

	renderLeftIcon= () =>{
      return(
            <Icon type= "ionicon" name= "md-list" size="26"></Icon> 
        )
  	}

	render(){
		return(
				<View style = {styles.container}>
					<View style = {styles.otherContainer}>
					<View style={styles.leftRow}>
					<Icon
			          size={34}
			          type="ionicon"
			          name="ios-arrow-back"
			          size= {26}
			          underlayColor="transparent"
			          underlineColorAndroid="transparent"
			          hitSlop={{ top: 15, bottom: 15, left: 15, right: 15 }}
			          color='#007AFF'
			          iconStyle={styles.icon}/>
					</View>
					<View style={styles.centerRow}>
              			<Text style={styles.titleText} numberOfLines={1}>SETTINGS</Text>
          			</View>
          			<View style={styles.rightRow}>
		            	<Icon
		            	size={34}
			         	type="entypo"
			          	name="log-out"
			          	size= {26}
			          	underlayColor="transparent"
			          	underlineColorAndroid="transparent"
			          	hitSlop={{ top: 15, bottom: 15, left: 15, right: 15 }}
			          	color='#007AFF'
			          	iconStyle={styles.icon}
			          	onPress={()=>Alert.alert('sign out')}
			          	/>
          			</View>
					</View>
					<Details
					user = {userData[0]}
					onPressOptions = {() => this.onPressOptions()} 
          			onChangePushNotification= {() => this.onChangePushNotification()}
          			pushNotifications = {this.state.pushNotifications}	
					/>
					</View>
			)
	}
}



export default AdminSettings
