import React, {Component} from 'react';
import {KeyboardAvoidingView,Platform,View,ActivityIndicator,ScrollView,TouchableOpacity,Image,Alert} from 'react-native';

import UserInput from './UserInput';
//import ButtonSubmit from './LoginButton';
//import SignUpSection from './SignUpSection'


import usernameImg from '../Images/username.png';
import passwordImg from '../Images/password.png';
import eyeImg from '../Images/eye_black.png';

import styles from './Styles/LoginScreenStyle'

export default class Form extends Component{
	constructor(props){
		super(props)

		this.state = {
			showPass:true,
			press:false
		}

		this.showPass = this.showPass.bind(this)
	}


	//Shows password
	showPass(){
		try {
			this.state.press === false
			? this.setState({showPass:false, press:true})
			: this.setState({showPass:true, press:false})
		}
		catch(error){
			Alert.alert(error.toString())
		}	
	}

	render(){
		return(
				<ScrollView>
				<KeyboardAvoidingView style={styles.formContainer}keyboardVerticalOffset={-500}>
					<UserInput
				          source={usernameImg}
				          placeholder="Username"
				          autoCapitalize={'none'}
				          returnKeyType={'done'}
				          autoCorrect={false}
				        />
				        <UserInput
				          source={passwordImg}
				          secureTextEntry={this.state.showPass}
				          placeholder="Password"
				          returnKeyType={'done'}
				          autoCapitalize={'none'}
				          autoCorrect={false}
				        />
				        <TouchableOpacity
				          activeOpacity={0.7}
				          style={styles.btnEye}
				          onPress={this.showPass}>
				          <Image source={eyeImg} style={styles.iconEye} />
				        </TouchableOpacity>
				</KeyboardAvoidingView>
				</ScrollView>
			
			)
	}
}