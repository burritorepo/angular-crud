import { ActionTypes, Actions } from './login.action';
import { initialState } from './login.state';

export function loginReducer(state = initialState, action: Actions) {
  switch (action.type) {
    case ActionTypes.Login: {
      const { payload } = action;
      return Object.assign({}, state, {
        isAuthenticated: payload
      });
    }

    case ActionTypes.Logout: {
      const { payload } = action;
      return Object.assign({}, state, {
        isAuthenticated: payload
      });
    }

    default:
      return state;
  }
}