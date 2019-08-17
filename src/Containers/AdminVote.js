//List of meetings you can search through, with deep filters

import React from 'react';

import { View, Text, StyleSheet,Image,TouchableOpacity,FlatList,Alert} from 'react-native'
import styles from './Styles/AdminMeetingStyles'
import addLogo from '../Images/add1.png'
import editLogo from '../Images/image!ios7-settings-strong.png'

import { List, ListItem, SearchBar} from "react-native-elements";

import voteData from '../Data/votes.json'

import { connect } from 'react-redux'

class AdminVote extends React.Component{

	_onCancel=()=>{

	}

	_onClear=()=>{

	}

	_onChangeText=()=>{

	}

	renderHeader=()=>{
			return(
		    <SearchBar
		    containerStyle= {{backgroundColor:'#252740'}} cancelButtonTitle="Cancel" placeholder="Search here.." onChangeText={this._onChangeText}  
		    onCancel = {this._onCancel} onClear = {this._onClear} underlineColorAndroid= "#ffb6c1"lightTheme round/>)
	}

	renderItem=({item})=>{
		return(
            <ListItem
                title = {item.IssueToVoteOn}
                subtitle = {item.VotingDeadline}
                onPress = {() => Alert.alert('Vote')}
             />
            )
	}

	render(){


		const Filterd = voteData.filter((item)=>
			item.CreatedbyUserID === this.props.ID);

		return(
				<View style = {styles.container}>
					<View style = {styles.header}>
						<Text style={styles.titleText} numberOfLines={1}>BOOTH</Text>
						<TouchableOpacity style={styles.addBtnContainer}>
							<Image source={addLogo} style={styles.btn}/>
						</TouchableOpacity>
						<TouchableOpacity style={styles.editBtnContainer}>
							<Image source={editLogo} style={styles.btn}/>
						</TouchableOpacity>
						</View>
					<List containerStyle= {styles.listContainer}>
					<FlatList
					data = {Filterd}
				    renderItem={this.renderItem}
				    keyExtractor={item => item.TopicID}
				    ListHeaderComponent={this.renderHeader}
				    stickyHeaderIndices={[0]}/>
					</List>
				</View>
			)
	}
}

const mapStateToProps = (state) => {
  return {
  	ID:state.member.singleAdmin,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  	}
 }

export default connect(mapStateToProps,mapDispatchToProps)(AdminVote)
