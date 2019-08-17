import { StyleSheet } from 'react-native'

import Metrics from '../../Themes/Metrics'
import Colors from '../../Themes/Colors'
import Fonts from '../../Themes/Fonts'

export default StyleSheet.create({
	container:{
		flex:1,
		backgroundColor:'white'
	},
	header: {
    	backgroundColor: '#252740',
        height: 63,
        justifyContent: 'space-between',
        flexDirection: 'row',
  },
  backBtnContainer: {
    height: 36,
    width: 36,
    top: 26,
    left: 10,
    justifyContent: 'center',
  },
  segmentedContainer:{
  	paddingTop:20,
  },
  listView:{
    width: '100%', 
    marginTop: 1,
    height: 60,
    backgroundColor: 'white'

   },
   listMainText:{
    position: 'absolute',
    marginLeft:50,
    marginTop: 23,
    color: '#4D4D4D',
    fontSize: 16,
    fontWeight: 'bold',
   },
   listImage:{
    width: 30, 
    height: 30,
    position: 'absolute',
    marginTop: 25,
    marginLeft:10,

   },
   statusImage:{
    width: 20, 
    height: 20,
    position: 'absolute',
    marginLeft:340,
    marginTop: 30,
   },
   listSubText:{
    position: 'absolute',
    marginLeft:50,
    marginTop: 43,
    color: '#4D4D4D',
    fontSize: 15,
    fontWeight: 'bold',
   },
  titleText: {
    color: Colors.snow,
    flex: 1,
    fontSize: 14,
    paddingTop: 34,
    textAlign: 'center',
    alignItems: 'center',
    left: 0,
    right: 0,
    position: 'absolute',
    fontWeight: 'bold',
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
  
})