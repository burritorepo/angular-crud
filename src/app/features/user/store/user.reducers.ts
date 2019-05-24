// import { AuthLoginAction } from './login.actions';
// import { AuthLoginState } from './login.state';

// export function AuthLoginReducer(
//   state = AuthLoginState.initialState,
//   action: AuthLoginAction.Actions
// ): AuthLoginState.IState {
//   switch (action.type) {
//     case AuthLoginAction.Types.LOGIN_REQUEST:
//       return { ...state, loading: true };

//     case AuthLoginAction.Types.LOGIN_SUCCESS:
//       return {
//         ...state,
//         loading: false,
//         loaded: true,
//         isAuthenticated: true,
//         response: action.payload.data,
//         status: 'success'
//       };
//     case AuthLoginAction.Types.CHECK_STATUS:
//       const loginStatus = action.payload;
//       return {
//         ...state,
//         status: loginStatus
//       };

//     case AuthLoginAction.Types.LOGIN_FAILED:
//       const { status, message, error } = action.payload;
//       return {
//         ...state,
//         loading: false,
//         loaded: false,
//         failed: { status, message, error }
//       };

//     case AuthLoginAction.Types.LOADED:
//       return {
//         ...state,
//         loading: false,
//         loaded: true
//       };

//     case AuthLoginAction.Types.LOGIN_RESET:
//       return Object.assign({}, AuthLoginState.initialState);
//     default: {
//       return state;
//     }
//   }
// }


import { Action } from '@ngrx/store';
import { ActionTypes } from './user.actions';

export const initialState = 0;

export function counterReducer(state = initialState, action: Action) {
  switch (action.type) {
    case ActionTypes.Increment:
      return state + 1;

    case ActionTypes.Decrement:
      return state - 1;

    case ActionTypes.Reset:
      return 0;

    default:
      return state;
  }
}