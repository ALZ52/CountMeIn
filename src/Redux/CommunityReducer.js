/*---Intial State---*/
const initialState = {
	communityID:'6555',
}


function reducer (state=initialState,action){
	if(action.type === 'SET_ID')
	{
		return {...state,communityID:action.payload.id}
	}
	else
	{
		return state;
	}
}


export default reducer
