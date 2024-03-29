import { StyleSheet } from 'react-native'
import Colors from '../../Themes/Colors';

export default StyleSheet.create({
  tabBar: {
    height: 54,
    paddingTop: 5,
    paddingBottom: 1,
    paddingHorizontal: 28,
    borderTopWidth: 1,
    borderTopColor: 'rgba(255,255,255,0.3)',
    backgroundColor: '#212339'
  },
  tabBarLabel: {
    fontSize: 9,
    letterSpacing: 0,
    color: Colors.snow
  },
  card: {
    opacity: 1,
    backgroundColor: '#212339'
  },
  icon: {
    justifyContent: 'flex-start',
    marginTop: 2.8,
    color: 'white'
  },
})