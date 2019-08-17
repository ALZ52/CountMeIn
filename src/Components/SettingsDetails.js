import React from 'react';
import { ScrollView, StyleSheet, Text, View,Alert,Image } from 'react-native'
import { Avatar, ListItem } from 'react-native-elements'

import profImg from '../Images/916170154.jpg'
import styles from '../Containers/Styles/AdminSettingsStyles' 
import ToggleSwitch from 'toggle-switch-react-native'

import InfoText from './SettingsInfoText'
import Chevron from './SettingsChevron'
import BaseIcon from './SettingsIcon'

const SettingsDetails = props => {
	const {user, onPressOptions, onChangePushNotification,pushNotifications } = props


	const name = user.firstName + ' ' + user.lastName
	renderNotificationSwitch = () =>
  	{
	    return(
	        <ToggleSwitch
	         isOn={false}
	          onColor='green'
	          offColor='red'
	          size='medium'
	          onToggle={ (isOn) => Alert.alert(isOn) }
	          />
	      )
  	}	


	return (
      <ScrollView style = {styles.scroll}>
      <View style={styles.userRow}>
          <View style={styles.userImage}>
            <Avatar
              rounded
              size="large"
              source={profImg}
            />
          </View>
          <View>
            <Text style={{ color: 'white',fontSize: 16 }}>{name}</Text>
            <Text
              style={{
                color: 'white',
                fontSize: 16,
              }}
            >
              {user.email}
            </Text>
          </View>
        </View>
        <InfoText text="Account" style={{ color: 'white'}}/>
        <View>
          <ListItem
            hideChevron
            title="Push Notifications"
            containerStyle={styles.listItemContainer}
            rightElement={this.renderNotificationSwitch}
            leftIcon={
              <BaseIcon
                containerStyle={{
                  backgroundColor: '#FFADF2',
                }}
                icon={{
                  type: 'material',
                  name: 'notifications',
                }}
              />
            }
          />
          <ListItem
            // chevron
            title="Currency"
            rightTitle="USD"
            rightTitleStyle={{ fontSize: 15 }}
            onPress={() => onPressOptions()}
            containerStyle={styles.listItemContainer}
            leftIcon={
              <BaseIcon
                containerStyle={{ backgroundColor: '#FAD291' }}
                icon={{
                  type: 'font-awesome',
                  name: 'money',
                }}
              />
            }
            rightIcon={<Chevron />}
          />
          <ListItem
            title="Location"
            rightTitle="New York"
            rightTitleStyle={{ fontSize: 15 }}
            onPress={() => onPressOptions()}
            containerStyle={styles.listItemContainer}
            leftIcon={
              <BaseIcon
                containerStyle={{ backgroundColor: '#57DCE7' }}
                icon={{
                  type: 'material',
                  name: 'place',
                }}
              />
            }
            rightIcon={<Chevron />}
          />
          <ListItem
            title="Language"
            rightTitle="English"
            rightTitleStyle={{ fontSize: 15 }}
            onPress={() => onPressOptions()}
            containerStyle={styles.listItemContainer}
            leftIcon={
              <BaseIcon
                containerStyle={{ backgroundColor: '#FEA8A1' }}
                icon={{
                  type: 'material',
                  name: 'language',
                }}
              />
            }
            rightIcon={<Chevron />}
          />
        </View>
        <InfoText text="More" />
        <View>
          <ListItem
            title="About US"
            onPress={() => onPressOptions()}
            containerStyle={styles.listItemContainer}
            leftIcon={
              <BaseIcon
                containerStyle={{ backgroundColor: '#A4C8F0' }}
                icon={{
                  type: 'ionicon',
                  name: 'md-information-circle',
                }}
              />
            }
            rightIcon={<Chevron />}
          />
          <ListItem
            title="Terms and Policies"
            onPress={() => onPressOptions()}
            containerStyle={styles.listItemContainer}
            leftIcon={
              <BaseIcon
                containerStyle={{ backgroundColor: '#C6C7C6' }}
                icon={{
                  type: 'entypo',
                  name: 'light-bulb',
                }}
              />
            }
            rightIcon={<Chevron />}
          />
          <ListItem
            title="Share our App"
            onPress={() => onPressOptions()}
            containerStyle={styles.listItemContainer}
            leftIcon={
              <BaseIcon
                containerStyle={{
                  backgroundColor: '#C47EFF',
                }}
                icon={{
                  type: 'entypo',
                  name: 'share',
                }}
              />
            }
            rightIcon={<Chevron />}
          />
          <ListItem
            title="Rate Us"
            onPress={() => onPressOptions()}
            containerStyle={styles.listItemContainer}
            badge={{
              value: 5,
              textStyle: { color: 'white' },
              containerStyle: { backgroundColor: 'gray', marginTop: 0 },
            }}
            leftIcon={
              <BaseIcon
                containerStyle={{
                  backgroundColor: '#FECE44',
                }}
                icon={{
                  type: 'entypo',
                  name: 'star',
                }}
              />
            }
            rightIcon={<Chevron />}
          />
          <ListItem
            title="Send FeedBack"
            onPress={() => onPressOptions()}
            containerStyle={styles.listItemContainer}
            leftIcon={
              <BaseIcon
                containerStyle={{
                  backgroundColor: '#00C001',
                }}
                icon={{
                  type: 'materialicon',
                  name: 'feedback',
                }}
              />
            }
            rightIcon={<Chevron />}
          />
        </View>
  	  </ScrollView>
  	 )
}

export default SettingsDetails