import React from 'react';
import { Provider } from 'react-redux'
import RootContainer from './src/Containers/RootContainer'
import store from './src/Redux/store'
//react native splash screen
//react native code push for updates
//react native push notifications  
//import LoginScreen from './src/Containers/LoginScreenVibe'
//import Dashboard from './src/Containers/DashboardVibe'
/*
  Provides an entry point into our App, both ios and android.js call this first 
   
   - We create our Redux store here, put it into a provider and then bring in 
     our RootContainer

   - We seperate like this to play nice with React Natives hot reloading
*/

export default class App extends React.Component {

  /*
    Add componentDiMount for splash screen
  */

  render() {
    return (
      <Provider store={store}>
        <RootContainer />
      </Provider>
    );
  }
}



