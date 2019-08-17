import React, {Component} from 'react';
import Dimensions from 'Dimensions';
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  Animated,
  Easing,
  Image,
  Alert,
  View,
} from 'react-native';
import { connect } from 'react-redux'

import userData from '../Data/user.json'
import { setUser } from '../Actions/UserActions'
import { changeScreen,customerLogin } from '../Actions/NavActions'

import styles from './Styles/LoginScreenStyle'

const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;
const MARGIN = 40;



class LoginButton extends Component{
	constructor(){
		super()

		  this.state = {
      		isLoading: false,
          userID:null,
    	};

    	this.buttonAnimated = new Animated.Value(0);
    	this.growAnimated = new Animated.Value(0);
    	this._onPress = this._onPress.bind(this);
      this.validate_User = this.validate_User.bind(this);
	}

	componentDidMount(){
    
	}

	_onPress() {
        this.validate_User();
		}


validate_User(){
  //Alert.alert(JSON.stringify(this.props.inputPassword.password))
  //Alert.alert(JSON.stringify(this.props.dataCred))
  const foundUser = this.props.dataCred.filter((item)=>{
          if(item.userName == this.props.inputUsername.name && 
              item.password == this.props.inputPassword.password)
          { 
              //Alert.alert(item.ID)
              return item

          }
      })

    if(JSON.stringify(foundUser) === '[]' || foundUser.lenght == 0)
    {
        Alert.alert('Incorrect username or password!');
    }
    else
    {  
        if(foundUser[0].accessLevel === 'Full')
        {
            this.props.LogInAdmin()
        }
        else if(foundUser[0].accessLevel === 'Partial')
        {
            this.props.LogInCust()
        }
    }


}



	_onGrow() {
    Animated.timing(this.growAnimated, {
      toValue: 1,
      duration: 200,
      easing: Easing.linear,
    }).start();
  }

  render(){
    const changeWidth = this.buttonAnimated.interpolate({
      inputRange: [0, 1],
      outputRange: [DEVICE_WIDTH - MARGIN, MARGIN],
    });
    const changeScale = this.growAnimated.interpolate({
      inputRange: [0, 1],
      outputRange: [1, MARGIN],
    });


  	return(
  			<View style={styles.buttonContainer}>
        <Animated.View style={{width: changeWidth}}>
          <TouchableOpacity
            style={styles.button}
            onPress={this._onPress}
            activeOpacity={1}>
            {this.state.isLoading ? (
              <Image source={spinner} style={styles.buttonImage} />
            ) : (
              <Text style={styles.buttonText}>LOGIN</Text>
            )}
          </TouchableOpacity>
          <Animated.View
            style={[styles.buttonCircle, {transform: [{scale: changeScale}]}]}
          />
        </Animated.View>
      </View>
  		)
  }


}



const mapStateToProps = (state) => {
  return {
    //userDetail:state.member.loggedUser,
    inputUsername: state.member.userName,
    inputPassword: state.member.userPassword,
    dataCred: state.member.userData,
    //fetching:state.member.fetched,
    userId:state.member.singleUser,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
      LogInAdmin:()=>dispatch(changeScreen()),
      settingUser:()=>dispatch(setUser()),
      LogInCust:()=>dispatch(customerLogin()),
  	}
 }

 export default connect(mapStateToProps,mapDispatchToProps)(LoginButton)
