import dataUser from '../Data/user.json'

/*---Intial State---*/
const initialState = {
	userName: 'ali',
	userPassword: '786',
	isLoggedIn: false,
	fetched: false,
	userData: dataUser,
	singleAdmin:'6786',
	singleCust:'6755'
}


/*--- User Reducer ---*/
function reducer (state=initialState,action){
	if(action.type === 'SET_USERNAME')
	{
		return {...state,userName:action.payload}
	}
	else if(action.type === 'SET_PASSWORD')
	{
		return {...state,userPassword:action.payload}
	}
	else if(action.type === 'SET_USER')
	{
		return {...state, singleUser:action.payload}
	}
	else if(action.type === 'GET_USER')
	{
		return{...state}
	}
	else
	{
		return state;
	}
}

export default reducer

