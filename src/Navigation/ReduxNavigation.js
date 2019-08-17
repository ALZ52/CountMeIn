import React, { Component } from "react";
import { BackHandler,Text } from "react-native";
import { connect } from "react-redux";
import { NavigationActions } from "react-navigation";
import { AppNavigator } from "./AppNavigation";


//Back handler implementation and Navigation for the whole app
class ReduxNavigation extends Component{
  componentDidMount(){
    BackHandler.addEventListener("hardwareBackPress", this.onBackPress)
  }

  componentWillUnmount(){
    BackHandler.removeEventListener("hardwareBackPress",this.onBackPress)
  }

  //Takes you back to index 0
  onBackPress = () =>{
    const {dispatch, nav} = this.props;
    if (nav.index === 0) {
      return false;
    }

    dispatch(NavigationActions.back());
    return true;
  };

  render(){

    return(
        <AppNavigator navigation = {this.props.dispatch, this.props.nav}/>
      );
  }

}

const mapStateToProps = state => {
  return {
    nav: state.nav
  };
};

export default connect(mapStateToProps)(ReduxNavigation);