import { ActionTypes, Actions } from './user.action';
import { initialState, IState } from './user.state';

export function userReducer(state = initialState, action: Actions): IState {
  switch (action.type) {
    case ActionTypes.SetUser: {
      const { payload } = action;
      return Object.assign({}, state, { user: payload })
    }

    case ActionTypes.SetUsers: {
      const { payload } = action;
      return Object.assign({}, state, { listUsers: payload })
    }

    default:
      return state;
  }
}