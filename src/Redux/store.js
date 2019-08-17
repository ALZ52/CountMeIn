import { combineReducers,createStore, applyMiddleware } from 'redux'
import { middleware } from '../Navigation/AppNavigation';
import CommunityRedux from './CommunityReducer'
import thunk from 'redux-thunk'
//import MeetingRedux from './MeetingRedux'
import UserRedux from './UserRedux'
//import VoteRedux from './VoteRedux'
import navReducer from './NavRedux'


/*
	This is where all the actions and states are stored, use the reducers for setting/getting change of states. 
*/

const rootReducer = combineReducers({
	nav:navReducer,
	member:UserRedux,
	communities:CommunityRedux,
	//meetings:MeetingRedux,
	//votes:VoteRedux,
})

export default createStore(rootReducer,applyMiddleware(thunk))