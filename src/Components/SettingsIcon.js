import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Icon } from 'react-native-elements'




const SettingsIcon = props => {
const { containerStyle, icon } = props

return(
  <View style={[styles.container, containerStyle]}>
    <Icon
      size={24}
      color="white"
      type="material"
      name="notifications"
      {...icon}
    />
  </View>
	);
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: 'black',
    borderColor: 'transparent',
    borderRadius: 10,
    borderWidth: 1,
    height: 34,
    justifyContent: 'center',
    marginLeft: 10,
    marginRight: 18,
    width: 34,
  },
})

export default SettingsIcon