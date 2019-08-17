import { NavigationActions } from 'react-navigation';
import { RootNavigator } from '../Navigation/AppNavigation';

// Start with launch Screen
const firstAction = RootNavigator.router.getActionForPathAndParams('test');
const initialNavState = RootNavigator.router.getStateForAction(
  firstAction,
  //tempNavState
);


function nav(state = initialNavState, action) {
  let nextState;
  switch (action.type) {
    case 'AdminLoggedIn':
      nextState = RootNavigator.router.getStateForAction(
        NavigationActions.navigate({ routeName: 'ChooseCommunity'}),
        state
      );
      break;
    case 'Logout':
      nextState = RootNavigator.router.getStateForAction(
        NavigationActions.navigate({ routeName: 'Login' }),
        state
      );
      break;
      case 'CustLoggedIn':
      nextState = RootNavigator.router.getStateForAction(
        NavigationActions.navigate({ routeName: 'UserScreens' }),
        state
      );
      break;
      case 'Switch':
      nextState = RootNavigator.router.getStateForAction(
        NavigationActions.navigate({ routeName: 'AdminScreens' }),
        state
      );
      break;
      case 'Logout':
      nextState = RootNavigator.router.getStateForAction(
        NavigationActions.navigate({ routeName: 'Login' }),
        state
      );
      break;
    default:
      nextState = RootNavigator.router.getStateForAction(action, state);
      break;
  }

  // Simply return the original `state` if `nextState` is null or undefined.
  return nextState || state;
}

export default nav