import { Action } from '@ngrx/store';

export enum ActionTypes {
  Login = '[Login] Login',
  Logout = '[Login] Logout'
}

export class Login implements Action {
  readonly type = ActionTypes.Login;
  constructor(public payload:boolean) {
  }
}

export class AddUsers implements Action {
  readonly type = ActionTypes.Logout;
  constructor(public payload:boolean) {
  }
}