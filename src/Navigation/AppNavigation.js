import { createStackNavigator } from 'react-navigation'
import React from 'react';
import { connect } from 'react-redux';
import {reduxifyNavigator,createReactNavigationReduxMiddleware,} from 'react-navigation-redux-helpers';


//import LaunchScreen from '../Containers/LaunchScreen'
import LoginScreen from '../Containers/LoginScreen'
import UserTabNav from '../Navigation/UserTabNav'
import AdminTabNav from '../Navigation/AdminTabNav'
import PickCommunity from '../Containers/SelectScreenNew'
//import testScreen from '../Components/VoteDetail'

//Details
//import UserDetailScreen from '../Components/UserDetail'
//import MeetingDetailScreen from '../Components/MeetingDetail'
import MeetingDetailScreen from '../Components/VoteDetail'

//Handles async actions
const middleware = createReactNavigationReduxMiddleware(
  'root',
  state => state.nav
);

//The Root navigator of the app
const RootNavigator = createStackNavigator({
    Login:{ screen:LoginScreen },
    AdminScreens: { screen: AdminTabNav },
    ChooseCommunity:{ screen: PickCommunity },
    UserScreens: { screen:UserTabNav },
    test: {screen:MeetingDetailScreen},
  },{
    headerMode: 'none',
  });

//Redux integration with navigation
const AppWithNavigationState = reduxifyNavigator(RootNavigator, 'root');

const mapStateToProps = state => ({
  state: state.nav,
});

const AppNavigator = connect(mapStateToProps)(AppWithNavigationState);

export { RootNavigator, AppNavigator, middleware };

