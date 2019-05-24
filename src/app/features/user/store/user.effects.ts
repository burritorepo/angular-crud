import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { EMPTY, of } from 'rxjs';
import { map, mergeMap, catchError, switchMap, tap } from 'rxjs/operators';
import { ActionTypes } from './user.action';

import { UserService } from '../../../api';
import { AddUsers } from './user.action';

@Injectable()
export class UserEffects {

  constructor(
    private actions$: Actions,
    private userService: UserService
  ) { }

  // @Effect()
  // addUser$ = this.actions$
  //   .pipe(
  //     ofType(ActionTypes.AddUser),
  //     mergeMap(() => this.userService.getAll()
  //       .pipe(
  //         map(movies => ({ type: '[Movies API] Movies Loaded Success', payload: movies })),
  //         catchError(() => EMPTY)
  //       ))
  //     )
  //   );

  // @Effect()
  // addUsers$ = this.actions$
  //   .pipe(
  //     ofType(ActionTypes.AddUsers),
  //     mergeMap(() => this.userService.getAllUser()
  //       .pipe(
  //         map(user => ({ type: '[Movies API] Movies Loaded Success', payload: movies })),
  //         catchError(() => EMPTY)
  //       ))
  //     )
  //   );


  @Effect()
  AddUsers$ = this.actions$.ofType(ActionTypes.AddUsers).pipe(
    switchMap(action => this.userService.getAllUser()
      .pipe(
        map(user => console.log('userss', user))
      )
    )
  )
}