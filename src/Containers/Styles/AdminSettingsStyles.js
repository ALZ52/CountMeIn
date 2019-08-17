import {StyleSheet} from 'react-native'

import Metrics from '../../Themes/Metrics'
import Colors from '../../Themes/Colors'
import Font from '../../Themes/Fonts'


export default StyleSheet.create({
	container:{
		flex:1,
		backgroundColor:'#252740',
	},
	scroll: {
    backgroundColor: 'transparent',
  },
  userRow: {
    alignItems: 'center',
    flexDirection: 'row',
    paddingBottom: 8,
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 6,
  },
  userImage: {
    marginRight: 12,
  },
  listItemContainer: {
    height: 55,
    borderWidth: 0.5,
    borderColor: 'transparent',
  },
   centerRow: {
    alignItems: 'center',
    backgroundColor: 'transparent',
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  otherContainer: {
    flexDirection: 'row',
    height: 55,
    justifyContent: 'center',
    marginLeft: 10,
    marginRight: 10,
    marginTop: 22,
  },
  icon: {
    justifyContent: 'flex-start',
    marginTop: 2.8,
    color: 'white'
  },
  iconContainer: {
    alignSelf: 'center',
  },
  leftRow: {
    backgroundColor:'transparent',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  logoutText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '400',
  },
  rightRow: {
    alignItems: 'center',
    backgroundColor: 'transparent',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  titleText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '400',
  },
})