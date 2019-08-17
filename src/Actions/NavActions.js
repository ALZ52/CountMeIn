import {Alert} from 'react-native'

export function changeScreen(type)
{
	return{
		type:'AdminLoggedIn'
	}
}

export function customerLogin(type)
{
	return{
		type:'CustLoggedIn'
	}
}

export function screenSwitch()
{
	return{
		type:'Switch',
	}
}

export function signOut()
{
	return{
		type:'Logout',
	}
}

export function ViewMeeting(){
	Alert.alert('VME')
	return{
		type:'MeetingDes',
	}
};

export function ViewVote(){
	return{
		type:'VoteDetail',
	}
}

export function addMeeting(){
	Alert.alert('AME')
	return{
		type:'NewMeeting',
	}
}

export function addVote(){
	return{
		type:'NewVote',
	}
}

export function viewUser(){
	return{
		type:'UserDetail',
	}
}