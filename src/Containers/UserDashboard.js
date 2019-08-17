//Dashboard with Upcoming Votes and Meetings

//Libraries
import React from 'react';
import { View, Text,Image,ScrollView, FlatList,TouchableWithoutFeedback,LayoutAnimation, Animated } from 'react-native'
//Components
//import Toggle from '../Components/DayToggle'
import { connect } from 'react-redux'
//Actions
import styles from './Styles/UserDashboardStyles'
import meetingData from '../Data/meetings.json'
import voteData from '../Data/votes.json'

import meetLogo from '../Images/meetingLogo.png'
import voteLogo from '../Images/voteLogo.jpeg'



import {
  merge,
  groupWith,
  contains,
  assoc,
  map,
  sum,
  findIndex
} from 'ramda'


class DashboardScreen extends React.Component{

	constructor(props){
		super(props)

		this.state = {
			activeDay: 0
		}

	}

	getItemLayout = (data, index) => {
    const item = data[index]
    const itemLength = (item, index) => {
      if (item.Status === 'Upcoming') {
        // use best guess for variable height rows
        return 138 + (1.002936 * item.Title.length + 6.77378)
      } else {
        return 145
      }
    }
    const length = itemLength(item) 
    const offset = sum(data.slice(0, index).map(itemLength))
    return { length, offset, index }
  }

	renderItem=({item})=>{
		if(item.Status == 'Upcoming')
		return (
        <TouchableWithoutFeedback onPress={() => onEventPress()}>
        	<Animated.View style={[styles.listContainer,styles.currentDay,
						styles.active,styles.finished]}>	
			 <View style={styles.info}>
        		<View style={styles.infoText}>
                	<Text style={styles.name}>{item.Title}</Text>
                	<Text style={styles.title}>{item.StartTime}</Text>
              	</View>
              	<View>
              		<Image style={styles.avatar} source={meetLogo}/>
              	</View>
            </View>
             </Animated.View>
         </TouchableWithoutFeedback>
  		)
	}

	renderVote=({item})=>{
		if(item.IssueToVoteOnStatus == 'waiting')
		return (
        <TouchableWithoutFeedback onPress={() => onEventPress()}>
        	<Animated.View style={[styles.listContainer,styles.currentDay,
						styles.active,styles.finished]}>	
			      <View style={styles.info}>
        		  <View style={styles.infoText}>
                	<Text style={styles.name}>{item.IssueToVoteOn}</Text>
                	<Text style={styles.title}>{item.VotingDeadline}</Text>
              	</View>
              	<View>
              		<Image style={styles.avatar} source={voteLogo}/>
              	</View>
            </View>
             </Animated.View>
         </TouchableWithoutFeedback>
  		)
	}

	render(){

		const FilterdVotes = voteData.filter((item)=>
			item.CreatedbyUserID === this.props.ID);


		const FilterdMeeting = meetingData.filter((item)=>
			item.UserWhoCreatedMeeting === this.props.ID);

		return(
				<View style={styles.container}>
					<View style = {styles.headerView}>
						<Text style ={styles.mainHeader}>Schedule</Text>
						<Text style ={styles.subHeader}>Meetings</Text>
						<Text style ={styles.dateHeader}>Mon, January 14</Text>
					</View>
					<View style={{'paddingTop':200,'paddingBottom':200}}> 
					<FlatList
						data={FilterdMeeting}
						showsVerticalScrollIndicator={false}
						renderItem={this.renderItem}
						keyExtractor={(item, index) => index.toString()}
						contentContainerStyle={styles.listContent}
						getItemLayout={this.getItemLayout}
					/>
					<Text style={styles.subHeaderV}>Votes</Text>
					<FlatList
						data={FilterdVotes}
						showsVerticalScrollIndicator={false}
						renderItem={this.renderVote}
						keyExtractor={(item, index) => index.toString()}
						contentContainerStyle={styles.listContent}
						getItemLayout={this.getItemLayout}
					/>
					</View>		
          		</View>
			)
	}
}

const mapStateToProps = (state) => {
  return {
  	community:state.communities.communityID,
  	ID:state.member.singleAdmin,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  		//showDetails:()=>dispatch(viewUser())
  	}
 }

export default connect(mapStateToProps,mapDispatchToProps)(DashboardScreen)
