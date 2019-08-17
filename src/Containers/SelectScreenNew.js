import React from 'react';
import { View, Text,Alert,StyleSheet,TouchableHighlight,Image,ScrollView,
	FlatList,TouchableOpacity,TouchableWithoutFeedback,LayoutAnimation, Animated } from 'react-native'
import { connect } from 'react-redux'

import settingsIcon from '../Images/settings.png'
import addIcon from '../Images/add1.png'
import houseLogo from '../Images/house-7.png'

import { screenSwitch } from '../Actions/NavActions'
import { List, ListItem, SearchBar, Header } from "react-native-elements";
import FadeIn from 'react-native-fade-in-image'

import CommunityData from '../Data/community.json'
import styles from './Styles/SelectScreenStylesNew'

import { getUser } from '../Actions/UserActions'
import { setCommID } from '../Actions/CommunityActions'

class SelectScreenNew extends React.Component{

	constructor(){
		super();

	}

	componentDidMount(){
		this.props.loadData()
	}

	_onPress=(item)=>{
		//this.props.setID('7777')
		this.props.tabsIn()
	}

	_onRemove=()=>{
		Alert.alert('Remove')
	}

	_onAdd=()=>{
		Alert.alert('Add')
	}

	_onSettings=()=>{
		Alert.alert('Settings')
	}
	renderCommunities = ({item}) =>{
		return(
				<TouchableWithoutFeedback onPress={()=>this._onPress(item)}>
					<Animated.View style={[styles.flatlistContainer,styles.currentDay,
						styles.active,styles.finished]}>
						<View style={styles.info}>
              				<View style={styles.infoText}>
              					<Text style={styles.name}>{item.communityAddress}</Text>
              					<Text style={styles.title}>{item.communityName}</Text>
              				</View>
              				<View>
              					<Image style={styles.avatar} source={houseLogo}/>
              				</View>
              			</View>
              			<View style={styles.sideInfoContainer}>
              				<View style={styles.sideButtons}>
              					<TouchableOpacity style = {styles.buttonRemove} onPress={this._onRemove}>
              					<Text>Remove</Text>
              					</TouchableOpacity>
              				</View>
              			</View>
					</Animated.View>
				</TouchableWithoutFeedback>
			)
	}

	render(){

		const Filterd = CommunityData.filter((item)=>
			item.userWhoCreatedComm === this.props.ID);

		return(
			<View style={styles.container}>
				<View style={styles.header}>
					<Text style={styles.titleText}>COMMUNITIES</Text>
						<TouchableOpacity style={styles.setBtnContainer} onPress={this._onSettings}>
							<Image style={styles.btn} 
							source={settingsIcon}/>
						</TouchableOpacity>
						<TouchableOpacity style={styles.addBtnContainer} onPress={this._onAdd}>
							<Image style={styles.btn} 
							source={addIcon}/>
						</TouchableOpacity>
				</View>
					<FlatList
							data ={Filterd}
							showsVerticalScrollIndicator={false}
							renderItem={this.renderCommunities}
							keyExtractor={(item, index) => index.toString()}
						/>
			</View>
			)
	}


}

const mapStateToProps = (state) => {
  return {
  	ID:state.member.singleAdmin,
  	fetching:state.member.fetched,
  	comId:state.communities.communityID,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  		loadData:()=>dispatch(getUser()),
  		setID:()=>dispatch(setCommID()),
  		tabsIn:()=>dispatch(screenSwitch())
  	}
 }

 export default connect(mapStateToProps,mapDispatchToProps)(SelectScreenNew)
