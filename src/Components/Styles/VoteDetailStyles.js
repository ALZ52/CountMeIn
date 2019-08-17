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
  voteContainer:{
    backgroundColor: '#F2F2E7',
    width: '100%', 
    height: 580,
    marginTop: 130,
    position: 'absolute'
},
voteHeader:{
    fontSize:20,
    marginLeft: 10,
    marginTop: 10,
    color: '#999999',
    position: 'absolute',
    textAlign: 'center',
    fontWeight:'bold'
  
},
voteSubheader:{
    fontSize:20,
    marginLeft: 320,
    marginTop: 10,
    color: '#999999',
    position: 'absolute',
    textAlign: 'center',
    fontWeight:'bold'
  
},
headerImg:{
    marginLeft: 360,
    marginTop: 10,
    position: 'absolute',
    width: 25, 
    height: 25,
},
issueTitleCon:{
    backgroundColor: 'white',
    width: '100%', 
    height: 80,
    marginTop: 45,
    position: 'absolute'
},
issueText:{
    fontSize:18,
    marginLeft: 10,
    marginTop: 10,
    color: '#4D4D4D',
    position: 'absolute',
    textAlign: 'center',
    fontWeight:'bold'
  
},
optionContainer:{
    backgroundColor: 'white',
    width: '100%', 
    height: 300,
    marginTop: 126,
    position: 'absolute'
},
optionOneCont:{
    width: '100%', 
    height: 50,
    marginTop: 5,
},
CheckBox1:{
         width: 30, 
        height: 30,
        marginLeft: 10,
        marginTop: 8,
        position: 'absolute'
  },
checkboxImage:{
    width: 25, 
    height: 25,
},
checkBoxText:{
    fontSize:16,
    marginTop: 12,
    marginLeft: 50,
    color: '#4D4D4D',
    position: 'absolute',
    textAlign: 'center',
    fontWeight:'bold'
},
btnContainer:{
    backgroundColor: '#233F5F',
    width: 100, 
    height: 40,
    marginTop: 25,
    marginLeft: 140,
    borderRadius: 50,
    alignItems: 'center',
},
btnText:{
    fontSize:18,
    marginTop: 10,
    color: 'white',
    position: 'absolute',
    textAlign: 'center',
    fontWeight:'bold'
}
})