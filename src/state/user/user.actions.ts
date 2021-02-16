import { action } from 'typesafe-actions';

export enum userActionTypes {
  LOGIN = 'LOGIN',
  LOGOUT = 'LOGOUT',
}

interface LoginAction {
  type: userActionTypes.LOGIN;
  payload: { token: string };
}

export const userActions = {
  login: (token: string): LoginAction => action(userActionTypes.LOGIN, { token }),
  logout: (): any => action(userActionTypes.LOGOUT),
};
