//List of meetings you can search through, with deep filters

import React from 'react';

import { View, Text, StyleSheet,TouchableOpacity,Image,Alert,FlatList,TouchableWithoutFeedback } from 'react-native'
import styles from './Styles/AdminDashboardStylesNew'

import homeLogo from '../Images/home-7.png'
import searchLogo from '../Images/search.png'

import { List, ListItem,SearchBar} from "react-native-elements";
import profImg from '../Images/916170154.jpg'
import userData from '../Data/user.json'

import { connect } from 'react-redux'

import {viewUser} from '../Actions/NavActions'

class AdminDashboard extends React.Component{

	constructor(props) {	
    super(props);
    this.state = {
        flag1: true,
        flag2: false,
    	}
	}

	_onUserPress=()=>{
		this.props.showDetails()
	}

	_onHomePress=()=>{
		Alert.alert('Home')
	}

	_onSearchPress=()=>{
		Alert.alert('Search')
		this.setState({
			flag3:true
		})
	}

	_onActivePress=()=>{
		Alert.alert('Active')
		this.setState({
			flag1: true,
        	flag2: false,
		})
	}
	_onInactivePress=()=>{
		Alert.alert('Inactive')	
		this.setState({
			flag1: false,
        	flag2: true,
		})
	}

	_onCancel=()=>{

	}
	_onClear=()=>{

	}
	_onChangeText=()=>{

	}

	renderItem = ({item})=>{
		if(item.accessLevel == 'Partial')
		{
			const name = item.firstName + ' ' +item.lastName;

			return(
				<ListItem
                roundAvatar
                title = {name}
                subtitle = {item.ID}
                avatar = {profImg}
                onPress = {() => this._onUserPress()}
             />
				)
		}
	}
	renderHeader = () => {
		
		    return(
		    <SearchBar
		    containerStyle= {{backgroundColor:'#252740'}} cancelButtonTitle="Cancel" placeholder="Search here.." onChangeText={this._onChangeText}  
		    onCancel = {this._onCancel} onClear = {this._onClear} underlineColorAndroid= "#ffb6c1"lightTheme round/>)
		
  };

	render(){
		const Filterd = userData.filter((item)=>
			item.CommunityID === this.props.community);

		return(
				<View style = {styles.container}>
					<View style={styles.header}>
						<Text style={styles.titleText}>Babylon Housing</Text>
							<TouchableOpacity style={styles.homeBtnContainer} onPress={this._onHomePress}>
								<Image style={styles.btn} 
								source={homeLogo}/>
							</TouchableOpacity>
							<TouchableOpacity style={styles.searchBtnContainer} onPress={this._onSearchPress}>
								<Text style={{color:'white',fontSize:14}}>EDIT</Text>
							</TouchableOpacity>
					</View>
					<View style={styles.topTab}>
						<View style={styles.roosterView}>
							<TouchableOpacity onPress={this._onActivePress}>
								<Text style={styles.roosterText}>Active</Text>
									{
										this.state.flag1?
								          <View style = {styles.line1}></View>
								          :null
									}
							</TouchableOpacity>
						</View>
						<View style ={styles.statView}>
							<TouchableOpacity onPress={this._onInactivePress}>
								<Text style={styles.roosterText}>In Active</Text>
									{
										this.state.flag2?
								          <View style = {styles.line2}></View>
								          :null
									}
							</TouchableOpacity>
						</View>
					</View>
					<View style={{'paddingTop':51}}>
						<List style={styles.listContainer}>
							<FlatList
				             data = {Filterd}
				             renderItem={this.renderItem}
				             keyExtractor={item => item.ID}
				             ListHeaderComponent={this.renderHeader}
				            stickyHeaderIndices={[0]}
				            />
						</List>
					</View>
				</View>
			)
	}
}

const mapStateToProps = (state) => {
  return {
  	community:state.communities.communityID
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  		showDetails:()=>dispatch(viewUser())
  	}
 }

 export default connect(mapStateToProps,mapDispatchToProps)(AdminDashboard)

