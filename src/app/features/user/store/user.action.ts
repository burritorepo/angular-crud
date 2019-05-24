import { Action } from '@ngrx/store';

export enum ActionTypes {
  AddUser = '[User] Add',
  AddUsers = '[User] AddUsers'
}

export class AddUser implements Action {
  readonly type = ActionTypes.AddUser;
  constructor(public payload: { user: object }) {
  }
}

export class AddUsers implements Action {
  readonly type = ActionTypes.AddUsers;
  constructor() {
    console.log('wowww addUser!!')
  }
}