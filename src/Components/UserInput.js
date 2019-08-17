import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Dimensions from 'Dimensions';
import {View, TextInput, Image, Alert} from 'react-native';
import { connect } from 'react-redux'

//import {setUserNameInput, setPasswordInput } from '../Actions/UserActions'

import {setUsername,setPassword} from '../Actions/UserActions'

import styles from './Styles/LoginScreenStyle'

const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;

class UserInput extends Component{
	constructor(props) {
		super(props)

		this.onChange = this.onChange.bind(this)
	}


	//sets the username and password on Change
	onChange(text){
     try{     
    		if(this.props.placeholder == 'Username')
    	    {   
    	        this.props.setUserNameInput(text)
    	    } 
    	    else
    	    {
    	        this.props.setPasswordInput(text)
    	    }
       }
       catch(error){
          Alert.alert(error.toString())
       }   
	}

render(){
	return(
	<View style={styles.inputWrapper}>
        <Image source={this.props.source} style={styles.inlineImg} />
        <TextInput
          style={styles.input}
          placeholder={this.props.placeholder}
          secureTextEntry={this.props.secureTextEntry}
          autoCorrect={this.props.autoCorrect}
          autoCapitalize={this.props.autoCapitalize}
          returnKeyType={this.props.returnKeyType}
          placeholderTextColor="white"
          underlineColorAndroid="transparent"
          onChangeText = {this.onChange}
        />
      </View>
      )
	}
}

UserInput.propTypes = {
  source: PropTypes.number.isRequired,
  placeholder: PropTypes.string.isRequired,
  secureTextEntry: PropTypes.bool,
  autoCorrect: PropTypes.bool,
  autoCapitalize: PropTypes.string,
  returnKeyType: PropTypes.string,
  textInput: PropTypes.string,

};


const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  		setUserNameInput: (text)=> dispatch(setUsername(text)),
  		setPasswordInput: (text)=> dispatch(setPassword(text))
  	}
 }

 export default connect(mapStateToProps,mapDispatchToProps)(UserInput)
