// import { Injectable } from '@angular/core';
// import { Actions, Effect, ofType } from '@ngrx/effects';
// import { Store } from '@ngrx/store';
// import { switchMap, map, catchError, tap, concatMap } from 'rxjs/operators';
// import { of, zip } from 'rxjs';
// import {
//   CacheService,
//   StorageServiceController
// } from '@nexbie/core/services/api';
// import { StorageService } from '@nexbie/core/services/api/core/storage.service';
// import { AuthLoginAction } from './login.actions';
// import { last } from 'ramda';
// import { AuthService } from '@nexbie/web-intranet/libs/core/services';

// @Injectable()
// export class AuthLoginEffects {
//   private storageService: StorageService;
//   constructor(
//     private actions$: Actions,
//     private authService: AuthService,
//     private storageServiceCtrl: StorageServiceController
//   ) {
//     this.storageService = this.storageServiceCtrl.getStorage();
//   }

//   @Effect()
//   login$ = this.actions$.pipe(
//     ofType(AuthLoginAction.Types.LOGIN_REQUEST),
//     switchMap((action: AuthLoginAction.LoginRequest) => {
//       return this.authService.doLogin(action.payload).pipe(
//         concatMap(auth => {
//           return zip(
//             this.storageService.set('auth', true),
//             this.storageService.set('xsrf', auth.headers.get('x-xsrf-token')),
//             of(auth)
//           );
//         }),
//         concatMap(([, , auth]) => {
//           return of(new AuthLoginAction.LoginSuccess(auth.body));
//         }),
//         catchError(error => {
//           return of(new AuthLoginAction.LoginFailed(error));
//         })
//       );
//     })
//   );

//   @Effect({ dispatch: false })
//   loginSuccess$ = this.actions$.pipe(
//     ofType(AuthLoginAction.Types.LOGIN_SUCCESS),
//     concatMap((action: AuthLoginAction.LoginSuccess) => {
//       const { token } = action.payload.data;
//       return zip(this.storageService.set('token', token), of(action));
//     })
//     // ,
//     // concatMap(([token, action]) => {
//     //   return of(new RefreshTokenAction.Detect());
//     // })
//   );

//   @Effect({ dispatch: false })
//   logout$ = this.actions$.pipe(
//     ofType(AuthLoginAction.Types.LOGOUT),
//     switchMap((action: AuthLoginAction.Logout) => {
//       const {
//         payload: { reload }
//       } = action;
//       const valuesToDelete = ['xsrf', 'token'];
//       const cleanStorage = valuesToDelete.map(key =>
//         this.storageService.remove(key)
//       );
//       return zip(
//         zip(...cleanStorage),
//         this.authService.doLogout(),
//         this.storageService.set('auth', false),
//         of(reload)
//       );
//     }),
//     switchMap(result => {
//       const reload = last(result);
//       if (reload) {
//         location.reload();
//       }
//       // return [new CacheAction.CacheClear(), new AuthLoginAction.Reset()];
//       return of(new AuthLoginAction.Reset());
//     })
//   );
// }
