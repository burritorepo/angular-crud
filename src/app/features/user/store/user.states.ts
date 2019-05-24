export namespace AuthLoginState {

  /**
   *Interface for 'login' state
   *
   * @export
   * @interface IState
   */
  export interface IState {
    user: any;
    response: any;
    isAuthenticated: boolean;
    loaded: boolean;
    loading: boolean;
    failed: any;
    status: string;
  }

  /**
   * You can define other interfaces as needed here
   */

  export const initialState: IState = {
    user: null,
    response: '',
    isAuthenticated: false,
    loaded: false,
    loading: false,
    failed: false,
    status: null
  };
}
