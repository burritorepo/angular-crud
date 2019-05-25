import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { EMPTY, of } from 'rxjs';
import { map, mergeMap, catchError, switchMap, tap } from 'rxjs/operators';
import {
  ActionTypes,
  SetUsers
} from './user.action';
import { UserService } from '../../../api';

@Injectable()
export class UserEffects {

  constructor(
    private actions$: Actions,
    private userService: UserService
  ) { }

  @Effect()
  getUsersAction$ = this.actions$.pipe(
    ofType(ActionTypes.GetUsers),
    mergeMap(action =>
      this.userService.getAllUser()
      .pipe(
        map(users => new SetUsers(users))
      )
    )
  )
}