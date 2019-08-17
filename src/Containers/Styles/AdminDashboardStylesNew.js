import {StyleSheet} from 'react-native'

import Metrics from '../../Themes/Metrics'
import Colors from '../../Themes/Colors'
import Font from '../../Themes/Fonts'

export default StyleSheet.create({
	container:{
		 flex: 1,
    	backgroundColor: '#252740',
	},
	header: {
    	backgroundColor: Colors.background,
        height: 63,
        justifyContent: 'space-between',
        flexDirection: 'row',
  },
  homeBtnContainer: {
    height: 36,
    width: 36,
    top: 26,
    left: 10,
    justifyContent: 'center',
  },
  titleText: {
    color: Colors.snow,
    flex: 1,
    fontSize: 22,
    paddingTop: 34,
    textAlign: 'center',
    alignItems: 'center',
    left: 0,
    right: 0,
    position: 'absolute',
  },
  btn: {
    height: 30,
    width: 30,
    backgroundColor: 'transparent',
    tintColor: 'white'
  },
  searchBtnContainer: {
    height: 36,
    width: 36,
    top: 26,
    left: 4,
    justifyContent: 'center',
  },
  topTab:{
	  width: '100%', 
	  height: 50,
	  position: 'absolute',
	  marginTop: 80,
	  borderWidth: 0.2,
	},
	roosterView:{
	 width: '50%', 
  	height: 50,
  	position: 'absolute',
	},
	roosterText:{
	    color: '#4D4D4D',
	  fontSize: 20,
	  marginTop: 10,
	  fontWeight: 'bold',
	  textAlign: 'center'
	},
	statView:{
	  width: '50%', 
	    height: 50,
	  position: 'absolute',
	  marginLeft:'50%'
	},
	line1:{
  backgroundColor: 'grey',
  width: '100%', 
  height: 2,
  position: 'absolute',
  marginTop: 47,

	},
line2:{
  backgroundColor: 'grey',
  width: '100%', 
  height: 2,
  position: 'absolute',
  marginTop: 47,
	},
listContainer:{
	borderTopWidth: 0, 
	borderBottomWidth: 0, 
	backgroundColor:Colors.snow,
},

})