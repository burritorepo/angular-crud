import { Action } from '@ngrx/store';
import { ActionTypes } from './user.action';
import { initialState } from './user.state';

export function userReducer(state = initialState, action: Action) {
  switch (action.type) {
    case ActionTypes.AddUser:
      return state;

    case ActionTypes.AddUsers:
      return state;

    default:
      return state;
  }
}