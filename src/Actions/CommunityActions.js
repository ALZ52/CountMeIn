import { Alert } from 'react-native'

export function setCommID(ID){
	return{
		type:'SET_ID',
		payload:{id:ID},
	};
};