//Login Screen which directs you to the profile

import React from 'react';
import { View } from 'react-native'

import Logo from '../Components/LoginLogoVibe'
import Form from '../Components/LoginForm'
import LoginButton from '../Components/LoginButton'
import SignUpSection from '../Components/SignUpSection'

class LoginScreen extends React.Component{
  render(){
    return(
    	 <View style={{ flex:1, width: null,height: null, backgroundColor:'#B997BC'}}>
          <Logo />
          <Form />
          <SignUpSection/>
          <LoginButton />
       </View>
      )
  }
}


export default LoginScreen