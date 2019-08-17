//List of meetings you can search through, with deep filters

import React from 'react';
import { View, Text, TouchableOpacity, Image, Alert,FlatList } from 'react-native'
import SegmentedControlTab from 'react-native-segmented-control-tab'

import styles from './Styles/VoteDetailStyles'
import backImg from '../Images/left-arrow2.png'
import multiIcon from '../Images/multiuser.png'

import checkedIcon from '../Images/checked.png'
import uncheckedIcon from '../Images/unchecked.png'

class VoteDetail extends React.Component{

	constructor(props) {
        super(props);
    }

    _onPressBack=()=>{
    	Alert.alert('Back')
    }

    _onPress=()=>{
    	Alert.alert('check')
    }
	render(){
		return(
				<View style={styles.container}>
					<View style={styles.header}>
						<Text style={styles.titleText}>Vote on President</Text>
						<TouchableOpacity onPress={this._onPressBack} style={styles.backBtnContainer}>
							<Image style= {styles.btn} source={backImg}/>
						</TouchableOpacity>
					</View>
					<View style={styles.segmentedContainer}>
						<SegmentedControlTab
                    	values={['Polls', 'Ideas']}
                    	/>
					</View>
					<View style={styles.voteContainer}>
						<Text style={styles.voteHeader}>Live Poll</Text>
						<Text style={styles.voteSubheader}>24</Text>
						<Image style={styles.headerImg} source={multiIcon}/>
						<View style={styles.issueTitleCon}>
							<Text style={styles.issueText}>Who should be the President in 2020?</Text>
						</View>
						<View style={styles.optionContainer}>
							<View style={styles.optionOneCont}>
								<TouchableOpacity style={styles.CheckBox1} onPress={this._onPress}>
									<Image style={styles.checkboxImage} source={uncheckedIcon}/>
								</TouchableOpacity>
								<Text style={styles.checkBoxText}>Donald Trump</Text>
							</View>
							<View style={styles.optionOneCont}>
								<TouchableOpacity style={styles.CheckBox1} onPress={this._onPress}>
									<Image style={styles.checkboxImage} source={uncheckedIcon}/>
								</TouchableOpacity>
								<Text style={styles.checkBoxText}>Hillary Clinton</Text>
							</View>
							<View style={styles.optionOneCont}>
								<TouchableOpacity style={styles.CheckBox1} onPress={this._onPress}>
									<Image style={styles.checkboxImage} source={uncheckedIcon}/>
								</TouchableOpacity>
								<Text style={styles.checkBoxText}>Rich Michals</Text>
							</View>
							<TouchableOpacity style={styles.btnContainer}>
								<Text style={styles.btnText}>Submit</Text>
							</TouchableOpacity>
						</View>
					</View>
				</View>
			)
	}
}

export default VoteDetail
