import {StyleSheet} from 'react-native'

import Metrics from '../../Themes/Metrics'
import Colors from '../../Themes/Colors'
import Font from '../../Themes/Fonts'

export default StyleSheet.create({
	container:{
		flex: 1,
	},
	header: {
    	backgroundColor: Colors.background,
        height: 63,
        justifyContent: 'space-between',
        flexDirection: 'row',
  },
  setBtnContainer: {
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
  listContainer:{ 
    borderTopWidth: 0, 
    borderBottomWidth: 0, 
    backgroundColor:'transparent' 
    },
  addBtnContainer: {
    height: 36,
    width: 36,
    top: 26,
    left: 4,
    justifyContent: 'center',
  },
  flatlistContainer:{
    flex: 1,
    marginVertical: Metrics.baseMargin,
    marginHorizontal: Metrics.doubleBaseMargin,
    backgroundColor:Colors.background,
  },
  currentDay: {
    marginLeft: 16,
    marginRight: 24
  },
  active: {
    marginLeft: 6,
    marginRight: 34,
    borderRadius: 5,
    },
    shadowOffset: {
      width: 1,
      height: 1
    },
    finished: {
    opacity: 0.7    
  },
  name: {
    fontFamily: 'ArialHebrew-Light',
    fontSize: 13,
    color: Colors.lightText,
    letterSpacing: 0,
    lineHeight: 18
  },
  title: {
    fontFamily: 'ArialHebrew-Bold',
    fontSize: 17,
    color: Colors.darkPurple,
    letterSpacing: 0
  },
  info: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding:Metrics.doubleBaseMargin,
        borderTopLeftRadius: Metrics.cardRadius,
        borderTopRightRadius: Metrics.cardRadius,
        backgroundColor: Colors.snow
  },
 infoText: {
        flex: 1,
        paddingRight: Metrics.doubleBaseMargin,
  },
  flatlistHead:{
        fontSize:22,
        color: '#012742',
        marginTop: 10,
        marginLeft: 10,
        position: 'absolute',
        fontWeight: 'bold',
    },
    avatar: {
    width: Metrics.images.avatar,
    height: Metrics.images.avatar,
    borderColor: Colors.avatarBorder,
    borderWidth: 1,
    borderRadius: Metrics.images.avatar / 2
  },
  sideInfoContainer:{
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 13,
    paddingHorizontal: Metrics.doubleBaseMargin,
    borderBottomLeftRadius: Metrics.cardRadius,
    borderBottomRightRadius: Metrics.cardRadius,
    backgroundColor: Colors.silver
  },
  sideButtons:{
    alignItems: 'center',
    flexDirection: 'row'
  },
    buttonRemove:{
        fontSize:30,
        color: '#233F5F',
        marginTop: 90,
        marginLeft: 280,
        position: 'absolute',
        fontWeight: 'bold',
    },
})