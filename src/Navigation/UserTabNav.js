import { StackNavigator, TabNavigator, TabBarBottom, createStackNavigator } from 'react-navigation'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import React from 'react';
import { Image } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';

import DashboardScreen from '../Containers/UserDashboard'
import SearchMeetingsScreen from '../Containers/UserMeetings'
import SearchVoteScreen from '../Containers/UserVote'
import SettingsScreen from '../Containers/UserSettings'

import styles from './Styles/NavigationStyles'


//Dashboard Screens
export const DashboardStack = createStackNavigator({
		Home: DashboardScreen,
	},
	{
		headerMode: 'none',
		initialRouteName: 'Home',

	}
)

//Declare them here because override problem https://reactnavigation.org/docs/en/navigation-options-resolution.html
DashboardStack.navigationOptions = {
    tabBarLabel: 'Dashboard',
   	tabBarIcon: ({ tintColor }) => (
      <Icon size={30} name={'home'} color={tintColor} />
    )
      
}


//Meeting Tab Screens
export const MeetingsStack = createStackNavigator({
		Home: SearchMeetingsScreen,
	},
	{
		headerMode:'none',
		initialRouteName:'Home',
	}
)

MeetingsStack.navigationOptions = {
    tabBarLabel: 'Meeting',
    tabBarIcon: ({ tintColor }) => (
      <Icon size={30} name={'calendar'} color={tintColor} />
    )
}

//Vote Tab Screens
export const VoteStack = createStackNavigator({
		Home: SearchVoteScreen,
	},
	{
		headerMode: 'none',
		initialRouteName: 'Home',
	}
)

VoteStack.navigationOptions = {
    tabBarLabel: 'Booth',
    tabBarIcon: ({ tintColor }) => (
      <Icon size={30} name={'bar-chart'} color={tintColor} />
    )
}

//Settings Tab Screen
export const SettingsStack = createStackNavigator({
		Home: SettingsScreen,
	},
	{
		headerMode: 'none',
		initialRouteName: 'Home',
	}
)

SettingsStack.navigationOptions = {
    tabBarLabel: 'Profile',
    tabBarIcon: ({ tintColor }) => (
      <Icon size={30} name={'user-circle'} color={tintColor} />
    )
}



//Tab Bar for app
const TabNav = createBottomTabNavigator({
  Dashboard: { screen: DashboardStack },
  Meeting: { screen: MeetingsStack },
  Booth: { screen: VoteStack },
  Profile: { screen: SettingsStack },
}, {
  key: 'Dashboard',
  //tabBarComponent: TabBarBottom,
  tabBarPosition: 'bottom',
  animationEnabled: true,
  //swipeEnabled: true,
  headerMode: 'none',
  initialRouteName: 'Dashboard',
  tabBarOptions: {
    style: styles.tabBar,
    labelStyle: styles.tabBarLabel,
    activeTintColor: 'white',
    inactiveTintColor: '#7f7f7f'
  }
})

export default TabNav