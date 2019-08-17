import { StyleSheet,Dimensions } from 'react-native'
import  Colors from '../../Themes/Colors'
import Metrics  from '../../Themes/Metrics'
import Fonts from '../../Themes/Fonts'

export default StyleSheet.create({
  headerGradient: {
    shadowOffset: {
      width: 0,
      height: 0
    },
    shadowRadius: 20,
    shadowColor: 'black',
    shadowOpacity: 0.8,
    backgroundColor: 'black',
    position: 'absolute',
    height: 40,
    left: 0, 
    top: Metrics.height - 96, 
    width: Metrics.width,
  },
  dayToggle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingTop: Metrics.baseMargin,
    height: 45,
    backgroundColor: Colors.clear
  },
  inactiveDay: {
    backgroundColor: Colors.clear,
    fontFamily: Fonts.type.semiBold,
    fontSize: 15,
    color: Colors.snow,
    letterSpacing: 0
  },
  activeDay: {
    backgroundColor: Colors.clear,
    fontFamily: Fonts.type.base,
    fontSize: 15,
    color: Colors.subText,
    letterSpacing: 0
  }

})
