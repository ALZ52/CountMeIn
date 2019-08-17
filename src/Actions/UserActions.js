import { Alert } from 'react-native'

export function setUsername(name){
	return{
		type:'SET_USERNAME',
		payload:{name}
	};
};

export function setPassword(password){
	return{
		type:'SET_PASSWORD',
		payload:{password}
	};
};

export function setUser(user){
	return{
		type:'SET_USER',
		payload:{user}
	};
};

export function getUser(){
	return{
		type:'GET_USER',
	}
}
