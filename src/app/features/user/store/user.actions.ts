// import { Action } from '@ngrx/store';

// export namespace AuthLoginAction {
//   export const enum Types {
//     LOGIN_REQUEST = '[@nexbie/login] LOGIN_REQUEST',
//     LOGIN_SUCCESS = '[@nexbie/login] LOGIN_SUCCESS',
//     LOADED = '[@nexbie/login] LOADED',
//     LOGIN_FAILED = '[@nexbie/login] LOGIN_FAILED',
//     LOGIN_RESET = '[@nexbie/login] LOGIN_RESET',
//     LOGOUT = '[@nexbie/logout] LOGOUT',
//     CHECK_STATUS = '[@nexbie/ login] CHECK_STATUS'
//   }

//   export class LoginRequest implements Action {
//     readonly type = Types.LOGIN_REQUEST;
//     constructor(public payload: any) {}
//   }

//   export class LoginSuccess implements Action {
//     readonly type = Types.LOGIN_SUCCESS;
//     constructor(public payload: any) {}
//   }

//   export class Loaded implements Action {
//     readonly type = Types.LOADED;
//   }

//   export class LoginFailed implements Action {
//     readonly type = Types.LOGIN_FAILED;
//     constructor(public payload: any) {}
//   }

//   export class Logout implements Action {
//     readonly type = Types.LOGOUT;
//     constructor(public payload: any) {}
//   }

//   export class Reset implements Action {
//     readonly type = Types.LOGIN_RESET;
//   }

//   export class CheckStatus implements Action {
//     readonly type = Types.CHECK_STATUS;
//     constructor(public payload: any) {}
//   }

//   export type Actions =
//     | LoginRequest
//     | LoginSuccess
//     | Loaded
//     | LoginFailed
//     | Reset
//     | Logout
//     | CheckStatus;
// }


import { Action } from '@ngrx/store';

export enum ActionTypes {
  Increment = '[Counter Component] Increment',
  Decrement = '[Counter Component] Decrement',
  Reset = '[Counter Component] Reset',
}

export class Increment implements Action {
  readonly type = ActionTypes.Increment;
}

export class Decrement implements Action {
  readonly type = ActionTypes.Decrement;
}

export class Reset implements Action {
  readonly type = ActionTypes.Reset;
}