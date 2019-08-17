//List of meetings you can search through, with deep filters

import React from 'react';
import { View, Text, TouchableOpacity, Image, Alert,FlatList } from 'react-native'
import SegmentedControlTab from 'react-native-segmented-control-tab'

import styles from './Styles/MeetingDetailStyles'
import backImg from '../Images/left-arrow2.png'

import userData from '../Data/user.json'
import profImg from '../Images/916170154.jpg'
import inActive from '../Images/offline.png'
import Active from '../Images/online.jpeg'

import { connect } from 'react-redux'

class MeetingDetail extends React.Component{

	_onPressBack=()=>{
		Alert.alert('CHecked')
	}


	renderUsers=({item})=>{

		const name = item.firstName + ' ' +item.lastName;
	if(item.ID==='6786')
	{
		return(
				<View style = {styles.listView}>
					<Image style={styles.listImage} source={profImg}/>
					<Text style={styles.listMainText}>{name}</Text>
					<Text style={styles.listSubText}>{item.ID}</Text>
					<Image style={styles.statusImage} source={inActive}/>
				</View>
			)
	}
	else
	{
		return(
				<View style = {styles.listView}>
					<Image style={styles.listImage} source={profImg}/>
					<Text style={styles.listMainText}>{name}</Text>
					<Text style={styles.listSubText}>{item.ID}</Text>
					<Image style={styles.statusImage} source={Active}/>
				</View>
			)
	}
}

	render(){
		return(
				<View style={styles.container}>
					<View style={styles.header}>
						<Text style={styles.titleText}>Pool renovation</Text>
						<TouchableOpacity onPress={this._onPressBack} style={styles.backBtnContainer}>
							<Image style= {styles.btn} source={backImg}/>
						</TouchableOpacity>
					</View>
					<View style={styles.segmentedContainer}>
						<SegmentedControlTab
                    	values={['Room', 'Assigned', 'Issues']}
                    	/>
					</View>
					<View>
						<FlatList
						data={userData}
         			    showsVerticalScrollIndicator={false}
          				renderItem={this.renderUsers}
          				keyExtractor={(item, index) => index.toString()}
          				/>
					</View>
          		</View>
			)
	}
}

export default connect()(MeetingDetail)
