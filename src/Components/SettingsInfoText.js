import React from 'react'
import { Text, View,StyleSheet } from 'react-native'


const SettingsInfoText = props =>{
	const { text } = props

	return(
			<View style={styles.container}>
   				 <Text style={styles.infoText}>{text}</Text>
  			</View>
		)

}


const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    paddingBottom: 12,
    backgroundColor: 'transparent',
  },
  infoText: {
    fontSize: 16,
    marginLeft: 20,
    color: 'gray',
    fontWeight: '500',
  },
}) 

export default SettingsInfoText