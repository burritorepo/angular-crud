import { Action } from '@ngrx/store';

export enum ActionTypes {
  GetUser = '[User] GetUser',
  SetUser = '[User] SetUser',
  GetUsers = '[User] GetUsers',
  SetUsers = '[User] SetUsers'
}

export class GetUser implements Action {
  readonly type = ActionTypes.GetUser;
  constructor(public payload: string) {
  }
}

export class SetUser implements Action {
  readonly type = ActionTypes.SetUser;
  constructor(public payload: object) {
  }
}

export class GetUsers implements Action {
  readonly type = ActionTypes.GetUsers;
}

export class SetUsers implements Action {
  readonly type = ActionTypes.SetUsers;
  constructor(public payload: Array<object>) {
  }
}

export type Actions =
  | GetUser
  | SetUser
  | GetUsers
  | SetUsers