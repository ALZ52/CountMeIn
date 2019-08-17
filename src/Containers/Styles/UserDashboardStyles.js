import {StyleSheet} from 'react-native'

import Metrics from '../../Themes/Metrics'
import Colors from '../../Themes/Colors'
import Font from '../../Themes/Fonts'

export default StyleSheet.create({
	container:{
		flex:1,
		backgroundColor:'#252740'
	},
	headerView:{
        backgroundColor: Colors.clear,
        width: '100%',
        position: 'absolute'
   },
     listContent: {
      paddingLeft:30,
      paddingBottom: Metrics.baseMargin * 8
    },
   mainHeader:{
    position: 'absolute',
    fontSize: 40,
    color: 'white',
    marginTop: 50,
    marginLeft: 20,
    fontWeight: 'bold',
   },
   subHeader:{
    	position: 'absolute',
      fontSize: 20,
      color: 'white',
      marginTop: 130,
    	marginLeft: 20,
    	fontWeight: 'bold',
   },
   subHeaderV:{
        fontSize: 20,
        color: 'white',
        marginTop: 10,
      marginLeft: 20,
      fontWeight: 'bold',
   },
   dateHeader:{
        position: 'absolute',
        fontSize: 18,
      	color: 'white',
      	marginTop: 160,
    	marginLeft: 20,
    	fontStyle: 'italic'
   },
   mainListCont:{
    backgroundColor: '#00406B',
    width: '100%', 
    height: 250,
   },
   subListCont:{
    backgroundColor: '#00406B',
    width: '100%', 
    height: 70,
    position: 'absolute',
   },
   titleText:{
    position: 'absolute',
    fontSize: 16,
  	color: 'white', 
	marginLeft: 20,
	marginTop:25,
	fontWeight: 'bold',
},
	dateText:{
  	position: 'absolute',
  	fontSize: 16,
	color: 'white', 
	marginLeft: 130,
	marginTop:25,
	fontWeight: 'bold',
},
	listContainer: {
    flex: 1,
    marginVertical: Metrics.baseMargin,
    marginHorizontal: Metrics.doubleBaseMargin,
    backgroundColor:Colors.steel 
  },
  currentDay: {
    marginLeft: 16,
    marginRight: 24
  },
  active: {
    marginLeft: 6,
    marginRight: 34,
    borderRadius: 5,
    shadowOffset: {
      width: 1,
      height: 1
    },
    shadowRadius: 5,
    shadowColor: Colors.redShadow,
    shadowOpacity: 1
  },
  finished: {
    opacity: 0.7
  },
  info: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: Metrics.doubleBaseMargin,
    borderTopLeftRadius: Metrics.cardRadius,
    borderTopRightRadius: Metrics.cardRadius,
    backgroundColor: Colors.snow
  },
  infoText: {
    flex: 1,
    paddingRight: Metrics.doubleBaseMargin
  },
  title: {
    fontFamily: 'ArialHebrew-Bold',
    fontSize: 20,
    color: Colors.darkPurple,
    letterSpacing: 0
  },
  name: {
    fontFamily: 'ArialHebrew-Light',
    fontSize: 18,
    color: Colors.lightText,
    letterSpacing: 0,
    lineHeight: 18
  },
  avatar: {
    width: Metrics.images.avatar,
    height: Metrics.images.avatar,
    borderColor: Colors.avatarBorder,
    borderWidth: 1,
    borderRadius: Metrics.images.avatar / 2
  },
  moreInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 13,
    paddingHorizontal: Metrics.doubleBaseMargin,
    borderBottomLeftRadius: Metrics.cardRadius,
    borderBottomRightRadius: Metrics.cardRadius,
    backgroundColor: Colors.silver
  },
  details: {
    flexDirection: 'row'
  },
  detail: {
    paddingRight: Metrics.doubleBaseMargin
  },
  detailLabel: {
    fontFamily: 'ArialHebrew-Light',
    fontSize: 11,
    color: Colors.lightText,
    letterSpacing: 0
  },
  detailText: {
    fontFamily: 'ArialHebrew-Bold',
    fontSize: 11,
    color: Colors.darkPurple,
    letterSpacing: 0
  }
})