export interface IState {
  listUsers: Array<object>;
  user: object;
  failed: boolean;
}

export const initialState: IState = {
  listUsers: [],
  user: {},
  failed: false
}