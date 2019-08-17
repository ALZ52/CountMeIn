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
    backgroundColor: Colors.background
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    fontFamily: 'sans-serif-light',
    margin: Metrics.baseMargin
  },
  myImage: {
    width: 200,
    height: 200,
    alignSelf: 'center'
  }
})
