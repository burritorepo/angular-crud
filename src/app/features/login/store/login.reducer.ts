import { Action } from '@ngrx/store';
import { ActionTypes } from './login.action';
import { initialState } from './login.state';

export function loginReducer(state = initialState, action: Action) {
  switch (action.type) {
    case ActionTypes.Login:
      return state;

    case ActionTypes.Logout:
      return state;

    default:
      return state;
  }
}