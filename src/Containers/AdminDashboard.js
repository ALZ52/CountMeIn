//List of meetings you can search through, with deep filters

import React from 'react';

import { View, Text, StyleSheet,TouchableHighlight,Image,ScrollView,FlatList } from 'react-native'

import searchIcon from '../Images/search.png'

import styles from './Styles/AdminDashboardStyles' 
import userData from '../Data/user.json'

import profImg from '../Images/916170154.jpg'
class AdminDashboard extends React.Component{

	constructor(props) {	
    super(props);
    this.state = {
        flag1: true,
        flag2: false,
    }
}

	renderList=({item})=>{
		if(item.accessLevel == 'Partial')
		{
			return(
					<View style = {styles.view7}>
				      <View style = {styles.view8}>
				      <View style = {styles.view8}> 
				      	<Text style = {styles.text7}>{item.ID}</Text>
				      </View>
				      <View style = {styles.view9}>
				      <View style = {styles.view11}>
				      	<Image style = {styles.image2} source={profImg} />
				      </View>
				      <View style = {styles.view12}>
				      <View style = {styles.inline1}>
				      	<Text style = {styles.text10}>{item.firstName}</Text>
				      	<Text style = {styles.text11}>{item.roleStatus}</Text>
				      </View>
				      	<Text style = {styles.text12}>{item.email}</Text>
				      	<Text style = {styles.text13}>{item.mobilePhone}</Text>
				      </View>
				      </View>
				      </View>
				      </View>
				)
		}
	}


	render(){
		return(
				<View style = {styles.mainView}>
					<View style = {styles.topHeader}>
						<TouchableHighlight>
						<Text style = {styles.homeButton}>Home</Text>
						</TouchableHighlight>
						<Text style = {styles.headerText}>Babylon Housing</Text>
						<TouchableHighlight onPress={this.onPressButton2}>
						<Image style = {styles.searchImage} source={searchIcon} />
						</TouchableHighlight>
					</View>
					<View style={styles.topTab}>
						<TouchableHighlight>
							<View style={styles.roosterView}>
								<Text style={styles.roosterText}>Active</Text>
								{
									this.state.flag1?
							          <View style = {styles.line1}></View>
							          :null
								}
							</View>
						</TouchableHighlight>
						<TouchableHighlight>
							<View style ={styles.statView}>
								<Text style={styles.roosterText}>InActive</Text>
								{
									this.state.flag2?
								      <View style = {styles.line2}></View>
								    :null
								}
							</View>
						</TouchableHighlight>
					</View>
					<ScrollView style={{'height': 600,position: 'absolute' ,marginTop: 130,
							backgroundColor: '#F7F7F2', width: '100%'}}>
					<Text>Detail</Text>
					<FlatList
					      data={userData}
					      showsVerticalScrollIndicator={false}
					      renderItem={this.renderList}
					      keyExtractor={(item, index) => index.toString()}
					 />
					</ScrollView>
				</View>
			)
	}
}



export default AdminDashboard
