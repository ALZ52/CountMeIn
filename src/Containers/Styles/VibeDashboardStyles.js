import {StyleSheet} from 'react-native'

import Metrics from '../../Themes/Metrics'
import Colors from '../../Themes/Colors'
import Font from '../../Themes/Fonts'


export default StyleSheet.create({
  applicationView: {
    flex: 1
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#B997BC'
  },
  subContainer:{
    marginTop: 101,
    marginBottom: Metrics.doubleBaseMargin,
    marginHorizontal: Metrics.doubleBaseMargin
  },
  headerView:{
    position: 'absolute',
    top: -75,
    left: -10,
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 120
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    fontFamily: 'sans-serif-light',
    margin: Metrics.baseMargin
  },
  myImage: {
    width: 400,
    height: 400,
    alignSelf: 'center'
  },
  cardShadow1: {
    flex: 1,
    height: 5,
    marginHorizontal: 10,
    backgroundColor: Colors.purpleShadow1,
    borderTopLeftRadius: Metrics.cardRadius,
    borderTopRightRadius: Metrics.cardRadius
  },
  cardShadow2: {
    flex: 1,
    height: 6,
    marginHorizontal: 5,
    backgroundColor: Colors.purpleShadow2,
    borderTopLeftRadius: Metrics.cardRadius,
    borderTopRightRadius: Metrics.cardRadius
  },
  card: {
    paddingTop: 48,
    paddingHorizontal: 30,
    borderTopLeftRadius: Metrics.cardRadius,
    borderTopRightRadius: Metrics.cardRadius,
    backgroundColor: Colors.snow
  },
  ButtonText: {
    fontFamily: 'Roboto-light',
    fontSize: 20,
    letterSpacing: 0,
    color: 'white',
    alignSelf:'center',
  },
  avatar: {
    position: 'absolute',
    top: -43,
    left: (Metrics.screenWidth - (Metrics.doubleBaseMargin * 2)) / 2 - 53,
    height: 106,
    width: 106,
    borderRadius: 53,
    borderColor: Colors.snow,
    borderWidth: 1,
    zIndex: 4
  },
  questionText:{
    color:'#B997BC',
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
  sectionHeading: {
    alignSelf: 'center',
    marginBottom: 12,
    fontFamily: 'Roboto-light',
    fontSize: 30,
    letterSpacing: 3,
    color: Colors.lightText,
    paddingTop:50
  },
  emojiStyle:{
    alignSelf:'center',
    padding:40,
    fontSize:50,
  },
})
