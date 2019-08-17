//Login Screen which directs you to the profile

import React from 'react';
import { View } from 'react-native'

import Logo from '../Components/LoginLogo'
import Form from '../Components/LoginForm'
import LoginButton from '../Components/LoginButton'
import SignUpSection from '../Components/SignUpSection'

import LogoVibe from '../Components/LoginLogoVibe'

class LoginScreen extends React.Component{
  render(){
    return(
    	 <View style={{ flex:1, width: null,height: null, backgroundColor:'#252740'}}>
          <LogoVibe />
          <Form />
          <SignUpSection/>
          <LoginButton />
       </View>
      )
  }
}


export default LoginScreen