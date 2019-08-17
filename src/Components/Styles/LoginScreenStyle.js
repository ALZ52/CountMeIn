import { StyleSheet } from 'react-native'

import Dimensions from 'Dimensions';

import Metrics from '../../Themes/Metrics'
import Colors from '../../Themes/Colors'
import Fonts from '../../Themes/Fonts'

const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;

export default StyleSheet.create({
	logoContainer: {
    flex: 3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoImage: {
    width: 80,
    height: 80,
  },
  logoText: {
    color: 'white',
    fontWeight: 'bold',
    backgroundColor: 'transparent',
    marginTop: 20,
  },
  input:{
  	backgroundColor: 'rgba(255, 255, 255, 0.4)',
    width: DEVICE_WIDTH - 40,
    height: 40,
    marginHorizontal: 20,
    paddingLeft: 45,
    borderRadius: 20,
    color: '#ffffff',
  },
inputWrapper: {
    flex: 1,
  },
  inlineImg: {
    position: 'absolute',
    zIndex: 99,
    width: 22,
    height: 22,
    left: 35,
    top: 9,
  },
  buttonContainer:{
  	flex: 1,
    top: -95,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  button:{
  	alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    height:40,
    borderRadius: 20,
    zIndex: 100,
  },
  buttonCircle: {
    height: 40,
    width: 40,
    marginTop: -40,
    borderWidth: 1,
    borderColor: Colors.subText,
    borderRadius: 100,
    alignSelf: 'center',
    zIndex: 99,
    backgroundColor: Colors.subText,
  },
  buttonText: {
    color: '#B997BC',
    backgroundColor: 'transparent',
  },
  buttonImage: {
    width: 24,
    height: 24,
  },
  formContainer: {
    flex: 1,
    alignItems: 'center',
  },
   btnEye: {
    position: 'absolute',
    top: 55,
    right: 28,
  },
  iconEye: {
    width: 25,
    height: 25,
    tintColor: 'rgba(0,0,0,0.2)',
  },
   rbContainer: {
    flex: 1,
    top: 65,
    width: DEVICE_WIDTH,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  rbButton: {
    justifyContent: 'center',
  },
  rbText: {
    color: 'white',
    backgroundColor: 'transparent',
    fontSize: 15,
    margin: 36
  },

})