import {StyleSheet} from 'react-native'

import Metrics from '../../Themes/Metrics'
import Colors from '../../Themes/Colors'
import Font from '../../Themes/Fonts'


export default StyleSheet.create({
	container: {
	flex:1,
    backgroundColor:'#252740',
  },
  centerRow: {
    alignItems: 'center',
    backgroundColor: 'transparent',
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  titleText: {
    color: 'white',
    flex: 1,
    fontSize: 18,
    paddingTop: 34,
    textAlign: 'center',
    alignItems: 'center',
    left: 0,
    right: 0,
    position: 'absolute',
  },
  addBtnContainer: {
    height: 36,
    width: 36,
    top: 26,
    left: 10,
    justifyContent: 'center',
  },
  editBtnContainer: {
    height: 36,
    width: 36,
    top: 26,
    left: 4,
    justifyContent: 'center',
  },
   btn: {
    height: 30,
    width: 30,
    backgroundColor: 'transparent',
    tintColor: 'white'
  },
  header: {
    height: 65,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  listContainer:{
	borderTopWidth: 0, 
	borderBottomWidth: 0, 
	backgroundColor:Colors.snow,
},


})