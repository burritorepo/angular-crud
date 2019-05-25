export interface IState {
  isAuthenticated: boolean;
  failed: boolean;
}

export const initialState: IState = {
  isAuthenticated: false,
  failed: false
}